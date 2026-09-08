/* ---------------------------------------------------------------
   Login portal · Parent, Student and Teacher dashboards ·
   Fee receipts · Application tracker · Admission CRM
   --------------------------------------------------------------- */
(function () {
  const A = App, D = A.D;
  const E = () => window.SEED_EXTRA;
  const esc = A.esc, tableOf = A.tableOf, head = A.head, opts = A.options;

  /* ---------- session ---------- */
  const KEY = "gvps.session";
  const safe = {
    get() { try { return JSON.parse(sessionStorage.getItem(KEY) || "null"); } catch (e) { return null; } },
    set(v) { try { sessionStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { } },
    clear() { try { sessionStorage.removeItem(KEY); } catch (e) { } }
  };
  let session = safe.get();

  function setSession(s) { session = s; safe.set(s); paintSessionChip(); }
  function endSession() { session = null; safe.clear(); paintSessionChip(); A.go("#/login"); A.toast("Signed out."); }

  function paintSessionChip() {
    const el = document.getElementById("sessionChip");
    if (!el) return;
    el.innerHTML = session
      ? `<a href="#/${session.role === "admin" ? "admin" : session.role}">${esc(session.name)}</a>
         <button class="linkish" id="signOut" style="margin-left:10px;color:inherit">Sign out</button>`
      : `<a href="#/login">Login</a>`;
    const so = document.getElementById("signOut");
    if (so) so.onclick = endSession;
  }

  /* Verifies against the Google Sheet when connected, otherwise against the
     sample records loaded in the browser. Both use the same rules. */
  async function authenticate(role, username, password) {
    const url = (window.CONFIG.API_URL || "").trim();
    if (url) {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({ action: "login", role, username, password })
        });
        const json = await res.json();
        if (json && json.ok) return json.user;
        return null;
      } catch (e) { /* fall through to local check */ }
    }
    return localAuth(role, username, password);
  }

  function localAuth(role, u, p) {
    u = (u || "").trim(); p = (p || "").trim();
    if (role === "admin") {
      return (u.toLowerCase() === "admin" && p === String(window.CONFIG.ADMIN_PIN))
        ? { role: "admin", id: "admin", name: "Administrator" } : null;
    }
    if (role === "teacher") {
      const t = D().teachers.find((x) => x.code.toLowerCase() === u.toLowerCase());
      if (!t) return null;
      return p === (t.code.toLowerCase() + "@gvps") ? { role: "teacher", id: t.code, name: t.name } : null;
    }
    const st = D().students.find((x) =>
      x.admissionNo.toLowerCase() === u.toLowerCase() || x.id.toLowerCase() === u.toLowerCase());
    if (!st || p !== st.dob) return null;
    return role === "parent"
      ? { role: "parent", id: st.id, name: st.fatherName || "Parent", childId: st.id, childName: st.name }
      : { role: "student", id: st.id, name: st.name, childId: st.id, childName: st.name };
  }

  /* ================= LOGIN ================= */
  A.route("/login", "Login", function () {
    if (session) {
      return `<div class="shell">${head("You are signed in", "", "Home · Login")}
        <div class="panel" style="max-width:460px">
          <p>Signed in as <b>${esc(session.name)}</b> (${esc(session.role)}).</p>
          <a class="btn dark" href="#/${session.role === "admin" ? "admin" : session.role}">Open dashboard</a>
          <button class="btn line" id="loSignOut">Sign out</button>
        </div></div>`;
    }
    return `<div class="shell">
      ${head("Login", "Four separate logins. Parents and students sign in with the admission number and the child's date of birth.", "Home · Login")}
      <div class="grid g2" style="align-items:start">
        <div class="panel">
          <div class="tabs" id="lgTabs">
            <button class="on" data-r="parent">Parent</button>
            <button data-r="student">Student</button>
            <button data-r="teacher">Teacher</button>
            <button data-r="admin">Admin</button>
          </div>
          <div class="field"><label for="lgU" id="lgUL">Admission number</label><input id="lgU" autocomplete="username"></div>
          <div class="field" style="margin-top:14px"><label for="lgP" id="lgPL">Date of birth</label><input id="lgP" type="password" autocomplete="current-password"></div>
          <p class="hint" id="lgHint" style="margin-top:10px"></p>
          <button class="btn dark" id="lgGo" style="margin-top:14px">Sign in</button>
        </div>
        <div class="panel">
          <h3>Sample logins</h3>
          <p class="sub">Use these to look around before you put in your own data.</p>
          ${tableOf([
      { label: "Role", cell: (r) => `<b>${r[0]}</b>` },
      { label: "Username", cell: (r) => `<span class="tnum">${esc(r[1])}</span>` },
      { label: "Password", cell: (r) => `<span class="tnum">${esc(r[2])}</span>` }
    ], sampleLogins())}
          <div class="note" style="margin-top:16px">Change the admin password in <code>assets/config.js</code> and set real teacher passwords in the <code>users</code> tab of the sheet before the site goes public.</div>
        </div>
      </div>
    </div>`;
  }, function () {
    if (session) {
      const b = document.getElementById("loSignOut");
      if (b) b.onclick = endSession;
      return;
    }
    let role = "parent";
    const labels = {
      parent: ["Admission number", "Child's date of birth", "Password is the child's date of birth in the format YYYY-MM-DD."],
      student: ["Admission number or student ID", "Date of birth", "Password is your date of birth in the format YYYY-MM-DD."],
      teacher: ["Employee code", "Password", "Employee code looks like T004. Ask the office if you have forgotten your password."],
      admin: ["Username", "Password", "Office use only."]
    };
    const apply = () => {
      document.getElementById("lgUL").textContent = labels[role][0];
      document.getElementById("lgPL").textContent = labels[role][1];
      document.getElementById("lgHint").textContent = labels[role][2];
      document.getElementById("lgU").value = "";
      document.getElementById("lgP").value = "";
    };
    document.querySelectorAll("#lgTabs button").forEach((b) => b.onclick = () => {
      document.querySelectorAll("#lgTabs button").forEach((x) => x.classList.toggle("on", x === b));
      role = b.dataset.r; apply();
    });
    apply();

    const go = async () => {
      const btn = document.getElementById("lgGo");
      btn.disabled = true; btn.textContent = "Checking…";
      const user = await authenticate(role, document.getElementById("lgU").value, document.getElementById("lgP").value);
      btn.disabled = false; btn.textContent = "Sign in";
      if (!user) { A.toast("Those details do not match a record. Check the username and password."); return; }
      setSession(user);
      A.toast("Signed in as " + user.name + ".");
      A.go("#/" + (user.role === "admin" ? "admin" : user.role));
    };
    document.getElementById("lgGo").onclick = go;
    document.getElementById("lgP").onkeydown = (e) => { if (e.key === "Enter") go(); };
  });

  function sampleLogins() {
    const st = D().students[Math.floor(D().students.length / 2)];
    const t = D().teachers[3];
    return [
      ["Parent", st.admissionNo, st.dob],
      ["Student", st.admissionNo, st.dob],
      ["Teacher", t.code, t.code.toLowerCase() + "@gvps"],
      ["Admin", "admin", String(window.CONFIG.ADMIN_PIN)]
    ];
  }

  function gate(role) {
    if (session && (session.role === role || session.role === "admin")) return null;
    return `<div class="shell">${head("Sign in required", "This area is for " + role + "s.", "Home · Login")}
      <div class="panel" style="max-width:440px"><p>Please sign in to continue.</p>
      <a class="btn dark" href="#/login">Go to login</a></div></div>`;
  }

  /* ---------- shared widgets ---------- */
  function childOf() {
    return Store.student(session && session.childId) || D().students[0];
  }

  function receiptsFor(st) {
    const f = (D().fees || []).find((x) => String(x.class) === String(st.class)) || {};
    const tuition = Number(f.tuitionMonthly) || 0;
    const annual = Number(f.annualCharges) || 0;
    const term = tuition * 6 + Math.round(annual / 2);
    const paidTwo = st.feeStatus !== "Due";
    return [
      { no: "RC/26/" + st.id.slice(-4) + "/1", term: "Term I (Apr – Sep)", amount: term, date: "2026-04-12", mode: "Online", status: "Paid" },
      { no: "RC/26/" + st.id.slice(-4) + "/2", term: "Term II (Oct – Mar)", amount: term, date: paidTwo ? "2026-09-02" : "", mode: paidTwo ? "NEFT" : "—", status: paidTwo ? "Paid" : "Due" }
    ];
  }

  function attendanceStrip(id) {
    const m = Store.attendanceOf(id);
    return m.split("").map((k, i) =>
      `<span class="mk ${k}" title="${A.fdate(D().attendanceDays[i])}">${k}</span>`).join("");
  }

  function homeworkFor(cls) {
    const today = new Date().toISOString().slice(0, 10);
    return (D().homework || E().homework).filter((h) => h.class === cls && h.due >= today)
      .sort((a, b) => a.due.localeCompare(b.due));
  }

  /* ================= PARENT DASHBOARD ================= */
  A.route("/parent", "Parent portal", function () {
    const g = gate("parent"); if (g) return g;
    const st = childOf();
    return `<div class="shell">
      ${head("Parent portal", "Everything the class teacher records about " + st.name + ", in one place.", "Home · Parent portal")}
      <div class="panel" style="display:flex;gap:18px;align-items:center;flex-wrap:wrap">
        <div class="avatar">${A.initials(st.name)}</div>
        <div style="flex:1">
          <h3 style="margin:0">${esc(st.name)}</h3>
          <div class="hint">${A.clsLabel(st.class)} – ${esc(st.section)} · Roll ${st.roll} · ${esc(st.house)} House · ${esc(st.admissionNo)}</div>
        </div>
        <a class="btn line sm" href="#/idcard">ID card</a>
        <button class="btn line sm" id="pSignOut">Sign out</button>
      </div>
      <div class="tabs" id="pTabs">
        <button class="on" data-t="overview">Overview</button>
        <button data-t="attendance">Attendance</button>
        <button data-t="homework">Homework</button>
        <button data-t="timetable">Timetable</button>
        <button data-t="results">Results</button>
        <button data-t="fees">Fees and receipts</button>
        <button data-t="leave">Leave</button>
        <button data-t="notices">Notices</button>
      </div>
      <div id="pPane"></div>
    </div>`;
  }, function () {
    if (!session) return;
    const so = document.getElementById("pSignOut"); if (so) so.onclick = endSession;
    const pane = document.getElementById("pPane"); if (!pane) return;
    const st = childOf();
    document.querySelectorAll("#pTabs button").forEach((b) => b.onclick = () => {
      document.querySelectorAll("#pTabs button").forEach((x) => x.classList.toggle("on", x === b));
      draw(b.dataset.t);
    });

    function draw(t) {
      if (t === "attendance") return pane.innerHTML = paneAttendance(st);
      if (t === "homework") return pane.innerHTML = paneHomework(st);
      if (t === "timetable") return pane.innerHTML = paneTimetable(st);
      if (t === "results") return pane.innerHTML = paneResults(st);
      if (t === "fees") return paneFees(st, pane);
      if (t === "leave") return paneLeave(st, pane);
      if (t === "notices") return pane.innerHTML = paneNotices();
      pane.innerHTML = paneOverview(st);
    }
    draw("overview");
  });

  function paneOverview(st) {
    const hw = homeworkFor(st.class);
    const res = Store.resultsOf(st.id, "UT1");
    const total = res.reduce((a, r) => a + r.marks, 0), max = res.reduce((a, r) => a + r.max, 0);
    const rec = receiptsFor(st);
    const teacher = D().teachers.find((t) => t.classTeacherOf === st.class + "-" + st.section);
    return `<div class="grid g4" style="margin-bottom:20px">
        <div class="stat"><b>${Store.attendanceRate(st.id)}%</b><span>Attendance</span></div>
        <div class="stat"><b>${hw.length}</b><span>Homework due</span></div>
        <div class="stat"><b>${max ? Math.round(total / max * 100) + "%" : "—"}</b><span>Unit Test I</span></div>
        <div class="stat"><b>${rec.filter((r) => r.status === "Due").length ? "Due" : "Clear"}</b><span>Fee status</span></div>
      </div>
      <div class="grid g2" style="align-items:start">
        <div class="panel"><h3>Homework due next</h3>
          ${hw.length ? hw.slice(0, 5).map((h) => `<div style="padding:10px 0;border-bottom:1px dashed var(--rule)">
            <b style="font-size:.94rem">${esc(h.subject)} — ${esc(h.title)}</b>
            <div class="hint">Due ${A.fdate(h.due)} · ${esc(h.teacher)}</div></div>`).join("")
        : `<p class="hint" style="margin:0">Nothing pending right now.</p>`}
        </div>
        <div class="panel"><h3>Who to contact</h3>
          <dl class="facts" style="grid-template-columns:1fr">
            <div><dt>Class teacher</dt><dd>${esc(teacher ? teacher.name : "To be assigned")}</dd></div>
            <div><dt>Class teacher's email</dt><dd>${esc(teacher ? teacher.email : "office@gvps.edu.in")}</dd></div>
            <div><dt>Transport</dt><dd>${esc(st.transport)}</dd></div>
            <div style="border:0"><dt>School office</dt><dd>011-2755 4400, 8:00 AM to 3:00 PM</dd></div>
          </dl>
          <p class="hint" style="margin-top:12px">Teachers meet parents without an appointment every Saturday, 11:00 AM to 12:30 PM.</p>
        </div>
      </div>`;
  }

  function paneAttendance(st) {
    const m = Store.attendanceOf(st.id);
    return `<div class="grid g4" style="margin-bottom:18px">
        <div class="stat"><b>${Store.attendanceRate(st.id)}%</b><span>This month</span></div>
        <div class="stat"><b>${(m.match(/P/g) || []).length}</b><span>Present</span></div>
        <div class="stat"><b>${(m.match(/A/g) || []).length}</b><span>Absent</span></div>
        <div class="stat"><b>${(m.match(/L/g) || []).length}</b><span>On approved leave</span></div>
      </div>
      <div class="panel"><h3>Last 30 school days</h3>
        <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:12px">${attendanceStrip(st.id)}</div>
        <p class="hint" style="margin-top:14px">Seventy-five percent attendance across the session is required for promotion and to sit the Annual Examination.</p>
      </div>
      ${tableOf([
      { label: "Date", cell: (r) => A.fdate(r.d) },
      { label: "Day", cell: (r) => new Date(r.d + "T00:00:00").toLocaleDateString("en-IN", { weekday: "long" }) },
      { label: "Status", cell: (r) => A.statusPill({ P: "Present", A: "Absent", L: "Leave" }[r.k]) }
    ], D().attendanceDays.map((d, i) => ({ d, k: m[i] })).reverse())}`;
  }

  function paneHomework(st) {
    const today = new Date().toISOString().slice(0, 10);
    const rows = (D().homework || E().homework).filter((h) => h.class === st.class).sort((a, b) => b.date.localeCompare(a.date));
    return tableOf([
      { label: "Subject", cell: (h) => `<b>${esc(h.subject)}</b>` },
      { label: "Work", cell: (h) => `${esc(h.title)}<div class="hint">${esc(h.detail)}</div>` },
      { label: "Given", cell: (h) => A.fdate(h.date) },
      { label: "Due", cell: (h) => A.fdate(h.due) },
      { label: "Teacher", cell: (h) => esc(h.teacher) },
      { label: "Status", cell: (h) => A.statusPill(h.due < today ? "Overdue" : "Due") }
    ], rows, { emptyTitle: "No homework recorded", emptyMsg: "Teachers publish homework on the day it is set." });
  }

  function paneTimetable(st) {
    const grid = D().timetable[st.class + "-" + st.section];
    if (!grid) return A.emptyState("No timetable yet", "This section has not been scheduled.");
    const days = D().weekDays, periods = D().periods;
    return `<div class="tt"><table>
      <thead><tr><th style="text-align:left">Period</th>${days.map((d) => `<th>${d}</th>`).join("")}</tr></thead>
      <tbody>${periods.map((p, i) => {
      const isBreak = p.period === "Break";
      return `<tr class="${isBreak ? "break" : ""}">
          <td class="slot">${p.period}<span style="display:block;font-weight:400">${p.time}</span></td>
          ${days.map((d) => {
        const c = grid[d][i];
        return isBreak ? "<td>Recess and mid-day snack</td>"
          : `<td><b>${esc(c.subject)}</b><span>${esc(c.teacher)}</span></td>`;
      }).join("")}</tr>`;
    }).join("")}</tbody></table></div>`;
  }

  function paneResults(st) {
    return D().exams.map((ex) => {
      const rows = Store.resultsOf(st.id, ex.code);
      if (!rows.length) return `<div class="panel"><h3>${esc(ex.name)}</h3>
        <p class="sub" style="margin:0">${A.fdate(ex.from)} to ${A.fdate(ex.to)} · ${esc(ex.status)}. Result not declared yet.</p></div>`;
      const total = rows.reduce((a, r) => a + r.marks, 0), max = rows.reduce((a, r) => a + r.max, 0);
      return `<div class="panel"><h3>${esc(ex.name)}</h3>
        <p class="sub">${A.fdate(ex.from)} to ${A.fdate(ex.to)}</p>
        ${tableOf([
        { label: "Subject", cell: (r) => esc(r.subject) },
        { label: "Marks", num: true, cell: (r) => r.marks },
        { label: "Out of", num: true, cell: (r) => r.max },
        { label: "Grade", cell: (r) => A.grade(r.marks / r.max * 100) }
      ], rows)}
        <div class="grid g3" style="margin-top:16px">
          <div class="stat"><b>${total}/${max}</b><span>Total</span></div>
          <div class="stat"><b>${(total / max * 100).toFixed(1)}%</b><span>Percentage</span></div>
          <div class="stat"><b>${rows.filter((r) => r.marks / r.max >= .9).length}</b><span>Subjects above 90%</span></div>
        </div>
        <a class="btn line" style="margin-top:14px" href="#/exams">Open the printable mark sheet</a></div>`;
    }).join("");
  }

  function paneFees(st, pane) {
    const rec = receiptsFor(st);
    const f = (D().fees || []).find((x) => String(x.class) === String(st.class)) || {};
    pane.innerHTML = `<div class="grid g4" style="margin-bottom:18px">
        <div class="stat"><b>${A.inr(f.tuitionMonthly || 0)}</b><span>Tuition per month</span></div>
        <div class="stat"><b>${A.inr(f.annualCharges || 0)}</b><span>Annual charges</span></div>
        <div class="stat"><b>${A.inr(rec[0].amount)}</b><span>Per term</span></div>
        <div class="stat"><b>${rec.some((r) => r.status === "Due") ? "Due" : "Clear"}</b><span>Current status</span></div>
      </div>
      ${tableOf([
      { label: "Receipt number", cell: (r) => `<span class="tnum">${esc(r.no)}</span>` },
      { label: "Term", cell: (r) => esc(r.term) },
      { label: "Amount", num: true, cell: (r) => A.inr(r.amount) },
      { label: "Paid on", cell: (r) => r.date ? A.fdate(r.date) : "—" },
      { label: "Mode", cell: (r) => esc(r.mode) },
      { label: "Status", cell: (r) => A.statusPill(r.status) },
      { label: "", cell: (r) => r.status === "Paid" ? `<button class="btn sm line" data-rc="${esc(r.no)}">Receipt</button>` : `<button class="btn sm" data-pay="${esc(r.no)}">Pay now</button>` }
    ], rec)}
      <p class="hint" style="margin-top:12px">Term II fee window is open till 15 September. A late fee of ₹100 per week applies after that.</p>`;

    rec.forEach((r) => {
      const b = document.querySelector(`[data-rc="${r.no}"]`);
      if (b) b.onclick = () => showReceipt(st, r);
      const p = document.querySelector(`[data-pay="${r.no}"]`);
      if (p) p.onclick = () => A.modal("Pay fees", `
        <p>Online payment is not wired up in this build. To enable it, connect a payment gateway in the accounts module and record the transaction reference against the receipt number.</p>
        <dl class="facts" style="grid-template-columns:1fr">
          <div><dt>Receipt number</dt><dd>${esc(r.no)}</dd></div>
          <div><dt>Amount payable</dt><dd>${A.inr(r.amount)}</dd></div>
          <div style="border:0"><dt>Other ways to pay</dt><dd>Cheque at the accounts counter, or NEFT to the school account quoting the admission number</dd></div>
        </dl>`);
    });
  }

  function showReceipt(st, r) {
    A.modal("Fee receipt", `<div class="sheet" style="border:0;padding:0">
      <div class="head"><h3>Global Vision Public School</h3>
        <p>Plot 14, Sector 9, Rohini, New Delhi – 110085 · Fee receipt · Session ${esc(A.S().session)}</p></div>
      <div class="meta">
        <div><span>Receipt number</span>${esc(r.no)}</div>
        <div><span>Date</span>${A.fdate(r.date)}</div>
        <div><span>Student</span>${esc(st.name)}</div>
        <div><span>Admission number</span>${esc(st.admissionNo)}</div>
        <div><span>Class and section</span>${A.clsLabel(st.class)} – ${esc(st.section)}</div>
        <div><span>Father</span>${esc(st.fatherName)}</div>
        <div><span>Period</span>${esc(r.term)}</div>
        <div><span>Mode</span>${esc(r.mode)}</div>
      </div>
      ${tableOf([
      { label: "Particulars", cell: (x) => esc(x[0]) },
      { label: "Amount", num: true, cell: (x) => A.inr(x[1]) }
    ], [["Tuition fee, six months", Math.round(r.amount * 0.78)], ["Annual charges, half", r.amount - Math.round(r.amount * 0.78)]])}
      <div class="grid g2" style="margin-top:16px">
        <div class="stat"><b>${A.inr(r.amount)}</b><span>Total paid</span></div>
        <div class="stat"><b>Nil</b><span>Balance</span></div>
      </div>
      <p class="hint" style="margin-top:16px">This is a computer-generated receipt and does not require a signature. Retain it for your records.</p>
      <button class="btn line no-print" style="margin-top:14px" onclick="window.print()">Print receipt</button>
    </div>`);
  }

  function paneLeave(st, pane) {
    const mine = D().leaves.filter((l) => l.studentId === st.id);
    pane.innerHTML = `<div class="grid g2" style="align-items:start">
      <div class="panel"><h3>Apply for leave</h3>
        <p class="sub">The class teacher sees this the same day.</p>
        <div class="grid g2" style="gap:14px">
          <div class="field"><label for="plF">From</label><input id="plF" type="date"></div>
          <div class="field"><label for="plT">To</label><input id="plT" type="date"></div>
        </div>
        <div class="field" style="margin-top:14px"><label for="plW">Reason</label><textarea id="plW"></textarea></div>
        <button class="btn dark" id="plGo" style="margin-top:14px">Send application</button>
      </div>
      <div class="panel"><h3>Your applications</h3>
        ${tableOf([
      { label: "From", cell: (l) => A.fdate(l.from) },
      { label: "To", cell: (l) => A.fdate(l.to) },
      { label: "Days", num: true, cell: (l) => l.days },
      { label: "Reason", cell: (l) => esc(l.reason) },
      { label: "Status", cell: (l) => A.statusPill(l.status) }
    ], mine, { emptyTitle: "No applications yet", emptyMsg: "Anything you send will be listed here." })}
      </div></div>`;

    document.getElementById("plGo").onclick = async function () {
      const g = (id) => document.getElementById(id).value.trim();
      if (!g("plF") || !g("plT") || !g("plW")) { A.toast("Add the dates and a reason."); return; }
      const days = Math.round((new Date(g("plT")) - new Date(g("plF"))) / 864e5) + 1;
      if (days < 1) { A.toast("The end date cannot be before the start date."); return; }
      this.disabled = true;
      await A.submitRecord("leaves", {
        id: "LV" + Date.now().toString().slice(-6), studentId: st.id, name: st.name,
        class: st.class, section: st.section, from: g("plF"), to: g("plT"), days,
        reason: g("plW"), appliedBy: "Parent", status: "Pending",
        appliedOn: new Date().toISOString().slice(0, 10)
      }, "Leave applied for " + days + " day" + (days > 1 ? "s" : "") + ".");
      this.disabled = false;
      paneLeave(st, pane);
    };
  }

  function paneNotices() {
    return tableOf([
      { label: "Date", cell: (n) => A.fdate(n.date) },
      { label: "Type", cell: (n) => `<span class="pill info">${esc(n.tag)}</span>` },
      { label: "Notice", cell: (n) => esc(n.title) }
    ], D().notices);
  }

  /* ================= STUDENT DASHBOARD ================= */
  A.route("/student", "Student portal", function () {
    const g = gate("student"); if (g) return g;
    const st = childOf();
    return `<div class="shell">
      ${head("Student portal", "Homework, timetable, study material, attendance and results.", "Home · Student portal")}
      <div class="panel" style="display:flex;gap:18px;align-items:center;flex-wrap:wrap">
        <div class="avatar">${A.initials(st.name)}</div>
        <div style="flex:1"><h3 style="margin:0">${esc(st.name)}</h3>
          <div class="hint">${A.clsLabel(st.class)} – ${esc(st.section)} · Roll ${st.roll} · ${esc(st.house)} House</div></div>
        <button class="btn line sm" id="sSignOut">Sign out</button>
      </div>
      <div class="tabs" id="sTabs">
        <button class="on" data-t="homework">Homework</button>
        <button data-t="timetable">Timetable</button>
        <button data-t="material">Study material</button>
        <button data-t="results">Results</button>
        <button data-t="attendance">Attendance</button>
      </div>
      <div id="sPane"></div>
    </div>`;
  }, function () {
    if (!session) return;
    const so = document.getElementById("sSignOut"); if (so) so.onclick = endSession;
    const pane = document.getElementById("sPane"); if (!pane) return;
    const st = childOf();
    document.querySelectorAll("#sTabs button").forEach((b) => b.onclick = () => {
      document.querySelectorAll("#sTabs button").forEach((x) => x.classList.toggle("on", x === b));
      draw(b.dataset.t);
    });
    function draw(t) {
      if (t === "timetable") return pane.innerHTML = paneTimetable(st);
      if (t === "results") return pane.innerHTML = paneResults(st);
      if (t === "attendance") return pane.innerHTML = paneAttendance(st);
      if (t === "material") {
        const rows = D().material.filter((m) => m.class === st.class);
        return pane.innerHTML = tableOf([
          { label: "Subject", cell: (m) => esc(m.subject) },
          { label: "Title", cell: (m) => `<b>${esc(m.title)}</b>` },
          { label: "Type", cell: (m) => `<span class="pill info">${esc(m.type)}</span>` },
          { label: "Uploaded by", cell: (m) => esc(m.teacher) },
          { label: "Date", cell: (m) => A.fdate(m.uploaded) },
          { label: "File", cell: (m) => `<a href="${esc(m.link || "#")}">Open</a>` }
        ], rows, { emptyTitle: "Nothing uploaded yet", emptyMsg: "Your teachers will post notes and worksheets here." });
      }
      pane.innerHTML = paneHomework(st);
    }
    draw("homework");
  });

  /* ================= TEACHER DASHBOARD ================= */
  A.route("/teacher", "Teacher portal", function () {
    const g = gate("teacher"); if (g) return g;
    const t = Store.teacher(session.id) || D().teachers[0];
    return `<div class="shell">
      ${head("Teacher portal", "Your sections, your periods, and the things you update every day.", "Home · Teacher portal")}
      <div class="panel" style="display:flex;gap:18px;align-items:center;flex-wrap:wrap">
        <div class="avatar">${A.initials(t.name)}</div>
        <div style="flex:1"><h3 style="margin:0">${esc(t.name)}</h3>
          <div class="hint">${esc(t.designation)} · ${esc(t.subject)}${t.classTeacherOf ? " · Class teacher of " + A.clsLabel(t.classTeacherOf.split("-")[0]) + " – " + t.classTeacherOf.split("-")[1] : ""}</div></div>
        <button class="btn line sm" id="tSignOut">Sign out</button>
      </div>
      <div class="tabs" id="tTabs">
        <button class="on" data-t="today">My day</button>
        <button data-t="class">My class</button>
        <button data-t="homework">Set homework</button>
        <button data-t="material">Upload material</button>
      </div>
      <div id="tPane"></div>
    </div>`;
  }, function () {
    if (!session) return;
    const so = document.getElementById("tSignOut"); if (so) so.onclick = endSession;
    const pane = document.getElementById("tPane"); if (!pane) return;
    const t = Store.teacher(session.id) || D().teachers[0];
    document.querySelectorAll("#tTabs button").forEach((b) => b.onclick = () => {
      document.querySelectorAll("#tTabs button").forEach((x) => x.classList.toggle("on", x === b));
      draw(b.dataset.t);
    });

    function draw(tab) {
      if (tab === "class") return myClass();
      if (tab === "homework") return setHomework();
      if (tab === "material") return uploadMaterial();
      today();
    }

    function today() {
      const dayName = new Date().toLocaleDateString("en-IN", { weekday: "long" });
      const day = D().weekDays.includes(dayName) ? dayName : "Monday";
      const rows = [];
      D().periods.forEach((p, i) => {
        if (p.period === "Break") return;
        for (const key in D().timetable) {
          const c = D().timetable[key][day][i];
          if (c && c.teacherCode === t.code) { rows.push({ p, key, subject: c.subject }); break; }
        }
      });
      pane.innerHTML = `<div class="grid g4" style="margin-bottom:18px">
          <div class="stat"><b>${rows.length}</b><span>Periods on ${esc(day)}</span></div>
          <div class="stat"><b>${t.teaches.length}</b><span>Sections handled</span></div>
          <div class="stat"><b>${t.classTeacherOf || "—"}</b><span>Class teacher of</span></div>
          <div class="stat"><b>${t.experience}</b><span>Years at teaching</span></div>
        </div>
        <div class="panel"><h3>Your periods on ${esc(day)}</h3>
        ${rows.length ? tableOf([
        { label: "Period", cell: (r) => r.p.period },
        { label: "Time", cell: (r) => r.p.time },
        { label: "Class", cell: (r) => A.clsLabel(r.key.split("-")[0]) + " – " + r.key.split("-")[1] },
        { label: "Subject", cell: (r) => esc(r.subject) }
      ], rows) : `<p class="hint" style="margin:0">No periods scheduled.</p>`}</div>
        <div class="grid g3">
          <a class="card" href="#/attendance" style="text-decoration:none;color:inherit"><h4>Mark roll call</h4><p>Open the attendance register for your section.</p></a>
          <a class="card" href="#/admin" style="text-decoration:none;color:inherit"><h4>Enter marks</h4><p>Subject-wise marks entry in the admin console.</p></a>
          <a class="card" href="#/timetable" style="text-decoration:none;color:inherit"><h4>Full timetable</h4><p>Your week, period by period.</p></a>
        </div>`;
    }

    function myClass() {
      if (!t.classTeacherOf) {
        pane.innerHTML = A.emptyState("You are not a class teacher this session", "Your subject sections are listed under 'My day'.");
        return;
      }
      const [c, s] = t.classTeacherOf.split("-");
      const list = Store.inClass(c, s);
      pane.innerHTML = `<div class="grid g4" style="margin-bottom:18px">
          <div class="stat"><b>${list.length}</b><span>On roll</span></div>
          <div class="stat"><b>${list.length ? Math.round(list.reduce((a, x) => a + Store.attendanceRate(x.id), 0) / list.length) : 0}%</b><span>Class attendance</span></div>
          <div class="stat"><b>${list.filter((x) => Store.attendanceRate(x.id) < 75).length}</b><span>Below 75%</span></div>
          <div class="stat"><b>${list.filter((x) => x.feeStatus === "Due").length}</b><span>Fee due</span></div>
        </div>
        ${tableOf([
        { label: "Roll", num: true, cell: (x) => x.roll },
        { label: "Name", cell: (x) => `<button class="linkish" data-st="${x.id}">${esc(x.name)}</button>` },
        { label: "Father", cell: (x) => esc(x.fatherName) },
        { label: "Contact", cell: (x) => `<span class="tnum">${esc(x.fatherPhone)}</span>` },
        { label: "Attendance", num: true, cell: (x) => Store.attendanceRate(x.id) + "%" },
        { label: "Fees", cell: (x) => A.statusPill(x.feeStatus) }
      ], list)}`;
      document.querySelectorAll("[data-st]").forEach((b) => b.onclick = () => A.openStudent(b.dataset.st));
    }

    function setHomework() {
      pane.innerHTML = `<div class="panel"><h3>Set homework</h3>
        <p class="sub">Children and parents see this immediately on the homework page and in their portals.</p>
        <div class="grid g4" style="gap:14px">
          <div class="field"><label for="thC">Class</label>${A.classSelect("thC")}</div>
          <div class="field"><label for="thS">Subject</label><input id="thS" value="${esc(t.subject)}"></div>
          <div class="field"><label for="thD">Due date</label><input id="thD" type="date"></div>
          <div class="field"><label for="thT">Set by</label><input id="thT" value="${esc(t.name)}"></div>
        </div>
        <div class="field" style="margin-top:14px"><label for="thH">What is to be done</label><input id="thH"></div>
        <div class="field" style="margin-top:14px"><label for="thN">Instructions</label><textarea id="thN"></textarea></div>
        <button class="btn dark" id="thGo" style="margin-top:16px">Publish homework</button></div>
        <div class="panel"><h3>Homework you have set</h3>
        ${tableOf([
        { label: "Class", cell: (h) => A.clsLabel(h.class) },
        { label: "Subject", cell: (h) => esc(h.subject) },
        { label: "Work", cell: (h) => esc(h.title) },
        { label: "Due", cell: (h) => A.fdate(h.due) }
      ], (D().homework || E().homework).filter((h) => h.teacher === t.name),
        { emptyTitle: "Nothing set yet", emptyMsg: "Anything you publish appears here." })}</div>`;

      document.getElementById("thGo").onclick = async function () {
        const g = (id) => document.getElementById(id).value.trim();
        if (!g("thH") || !g("thD")) { A.toast("Add the work and a due date."); return; }
        D().homework = D().homework || E().homework;
        this.disabled = true;
        await A.submitRecord("homework", {
          date: new Date().toISOString().slice(0, 10), class: g("thC"), subject: g("thS"),
          title: g("thH"), detail: g("thN"), due: g("thD"), teacher: g("thT")
        }, "Homework published for " + A.clsLabel(g("thC")) + ".");
        this.disabled = false;
        setHomework();
      };
    }

    function uploadMaterial() {
      pane.innerHTML = `<div class="panel"><h3>Upload study material</h3>
        <p class="sub">Put the file in Google Drive, set sharing to "anyone with the link", and paste that link here.</p>
        <div class="grid g4" style="gap:14px">
          <div class="field"><label for="tmC">Class</label>${A.classSelect("tmC")}</div>
          <div class="field"><label for="tmS">Subject</label><input id="tmS" value="${esc(t.subject)}"></div>
          <div class="field"><label for="tmT">Type</label><select id="tmT">${opts(["Chapter Notes", "Worksheet", "Syllabus", "Sample Paper", "Revision Sheet", "Practical File Format", "Holiday Homework"])}</select></div>
          <div class="field"><label for="tmN">Title</label><input id="tmN"></div>
        </div>
        <div class="field" style="margin-top:14px"><label for="tmL">Drive link</label><input id="tmL" placeholder="https://drive.google.com/…"></div>
        <button class="btn dark" id="tmGo" style="margin-top:16px">Publish material</button></div>`;
      document.getElementById("tmGo").onclick = async function () {
        const g = (id) => document.getElementById(id).value.trim();
        if (!g("tmN")) { A.toast("Add a title."); return; }
        this.disabled = true;
        await A.submitRecord("material", {
          class: g("tmC"), subject: g("tmS"), type: g("tmT"), title: g("tmN"),
          teacher: t.name, link: g("tmL") || "#",
          uploaded: new Date().toISOString().slice(0, 10), size: "—"
        }, "Material published.");
        this.disabled = false;
        uploadMaterial();
      };
    }
    draw("today");
  });

  /* ================= APPLICATION TRACKER ================= */
  A.route("/track", "Track an application", function () {
    return `<div class="shell">
      ${head("Track your application", "Enter the Application ID printed on your registration receipt to see where the application has reached.", "Home · Admissions · Track")}
      <div class="filters">
        <div class="field grow"><label for="trQ">Application ID or registered mobile number</label>
          <input id="trQ" placeholder="e.g. ENQ001 or 9811004521"></div>
        <button class="btn dark" id="trGo">Check status</button>
      </div>
      <div id="trOut"></div>
      <div class="panel" style="margin-top:24px">
        <h3>What each stage means</h3>
        ${tableOf([
      { label: "Stage", cell: (s) => `<b>${esc(s.step)}</b>` },
      { label: "What happens", cell: (s) => esc(s.detail) }
    ], E().admissionSteps)}
      </div>
    </div>`;
  }, function () {
    const run = () => {
      const t = document.getElementById("trQ").value.trim().toLowerCase();
      const out = document.getElementById("trOut");
      if (!t) { out.innerHTML = A.emptyState("Enter your Application ID", "It is printed on the registration receipt, for example ENQ001."); return; }
      const lead = (E().leads || []).find((l) => l.id.toLowerCase() === t || l.phone === t);
      const app = D().admissions.find((a) => String(a.id).toLowerCase() === t || a.phone === t);
      if (!lead && !app) {
        out.innerHTML = A.emptyState("No application found", "Check the ID, or call the admission helpline on " + E().identity.admissionHelpline + ".");
        return;
      }
      const stages = E().crmStages.slice(0, 8);
      const current = lead ? lead.stage : mapStatus(app.status);
      const idx = stages.indexOf(current);
      const name = lead ? lead.name : app.name;
      const cls = lead ? lead.classApplied : app.classApplied;
      out.innerHTML = `<div class="panel">
        <h3>${esc(name)}</h3>
        <p class="sub">Applied for ${A.clsLabel(cls)} · Application ID ${esc(lead ? lead.id : app.id)} · Last updated ${A.fdate(lead ? lead.updated : app.appliedOn)}</p>
        <div style="margin-top:18px">
          ${stages.map((s, i) => `<div style="display:flex;gap:14px;align-items:flex-start;padding:11px 0;border-bottom:1px dashed var(--rule)">
            <span class="mk ${i < idx ? "P" : i === idx ? "L" : ""}" style="${i > idx ? "opacity:.3;filter:grayscale(1)" : ""}">${i <= idx ? (i < idx ? "✓" : "•") : ""}</span>
            <div><b style="font-size:.94rem">${esc(s)}</b>
              ${i === idx ? `<div class="hint">Current stage${lead && lead.note ? " — " + esc(lead.note) : ""}</div>` : ""}</div></div>`).join("")}
        </div>
        <p class="hint" style="margin-top:16px">Questions about your application? Call ${esc(E().identity.admissionHelpline)} or write to ${esc(E().identity.admissionEmail)}.</p>
      </div>`;
    };
    document.getElementById("trGo").onclick = run;
    document.getElementById("trQ").onkeydown = (e) => { if (e.key === "Enter") run(); };
  });

  function mapStatus(s) {
    return ({
      "Enquiry received": "New enquiry", "Form submitted": "Application",
      "Interaction scheduled": "Assessment", "Admitted": "Admission confirmed",
      "Waitlisted": "Waitlisted"
    })[s] || "New enquiry";
  }

  /* ================= ADMISSION CRM ================= */
  A.route("/crm", "Admission CRM", function () {
    const g = gate("admin"); if (g) return g;
    return `<div class="shell">
      ${head("Admission CRM", "Every enquiry from first contact to confirmed admission, so you can see where they drop off.", "Home · Admin · Admission CRM")}
      <div id="crmStats" class="grid g4" style="margin-bottom:18px"></div>
      <div class="filters">
        <div class="field"><label for="crS">Stage</label><select id="crS"><option value="">All stages</option>${opts(E().crmStages)}</select></div>
        <div class="field"><label for="crC">Class applied for</label>${A.classSelect("crC", true)}</div>
        <div class="field grow"><label for="crQ">Search</label><input id="crQ" placeholder="Name, parent or phone"></div>
      </div>
      <div id="crmOut"></div>
      <div class="panel" style="margin-top:24px">
        <h3>Add an enquiry</h3>
        <div class="grid g4" style="gap:14px">
          <div class="field"><label for="cnN">Child's name</label><input id="cnN"></div>
          <div class="field"><label for="cnC">Class</label>${A.classSelect("cnC")}</div>
          <div class="field"><label for="cnP">Parent's name</label><input id="cnP"></div>
          <div class="field"><label for="cnM">Mobile</label><input id="cnM" inputmode="numeric"></div>
          <div class="field"><label for="cnS">Source</label><select id="cnS">${opts(["Website form", "Walk-in", "WhatsApp", "Referral", "Alumni", "Phone call", "Hoarding"])}</select></div>
          <div class="field"><label for="cnT">Stage</label><select id="cnT">${opts(E().crmStages)}</select></div>
        </div>
        <div class="field" style="margin-top:14px"><label for="cnO">Note</label><input id="cnO" placeholder="What was discussed"></div>
        <button class="btn dark" id="cnGo" style="margin-top:16px">Add to pipeline</button>
      </div>
    </div>`;
  }, function () {
    if (!session || session.role !== "admin") return;
    D().leads = D().leads || E().leads.slice();
    const s = document.getElementById("crS"), c = document.getElementById("crC"), q = document.getElementById("crQ");
    function draw() {
      const all = D().leads;
      const rows = all.filter((l) => (!s.value || l.stage === s.value) &&
        (!c.value || l.classApplied === c.value) &&
        (!q.value.trim() || (l.name + " " + l.parent + " " + l.phone).toLowerCase().includes(q.value.trim().toLowerCase())));
      const won = all.filter((l) => l.stage === "Admission confirmed" || l.stage === "Fee paid").length;
      const lost = all.filter((l) => l.stage === "Not interested").length;
      document.getElementById("crmStats").innerHTML =
        `<div class="stat"><b>${all.length}</b><span>Total enquiries</span></div>
         <div class="stat"><b>${all.length - won - lost}</b><span>Still in the pipeline</span></div>
         <div class="stat"><b>${won}</b><span>Converted to admission</span></div>
         <div class="stat"><b>${all.length ? Math.round(won / all.length * 100) : 0}%</b><span>Conversion rate</span></div>`;

      document.getElementById("crmOut").innerHTML = tableOf([
        { label: "ID", cell: (l) => `<span class="tnum">${esc(l.id)}</span>` },
        { label: "Child", cell: (l) => `<b>${esc(l.name)}</b>` },
        { label: "Class", cell: (l) => A.clsLabel(l.classApplied) },
        { label: "Parent", cell: (l) => esc(l.parent) },
        { label: "Phone", cell: (l) => `<a href="tel:${esc(l.phone)}" class="tnum">${esc(l.phone)}</a>` },
        { label: "Source", cell: (l) => esc(l.source) },
        { label: "Updated", cell: (l) => A.fdate(l.updated) },
        {
          label: "Stage", cell: (l) => `<select data-lead="${esc(l.id)}" style="padding:5px 8px;border:1px solid var(--rule);border-radius:6px;font-size:.84rem">
          ${opts(E().crmStages, l.stage)}</select>`
        },
        { label: "Note", cell: (l) => `<span class="hint">${esc(l.note || "")}</span>` }
      ], rows, { emptyTitle: "No enquiry matches", emptyMsg: "Clear the filters above." });

      document.querySelectorAll("[data-lead]").forEach((sel) => sel.onchange = async () => {
        const lead = D().leads.find((l) => l.id === sel.dataset.lead);
        lead.stage = sel.value;
        lead.updated = new Date().toISOString().slice(0, 10);
        await Store.push("leads", "update", lead).catch(() => { });
        A.toast(lead.name + " moved to \u201c" + lead.stage + "\u201d.");
        draw();
      });
    }
    [s, c].forEach((el) => el.onchange = draw); q.oninput = draw; draw();

    document.getElementById("cnGo").onclick = async function () {
      const g = (id) => document.getElementById(id).value.trim();
      if (!g("cnN") || !g("cnM")) { A.toast("Add the child's name and a mobile number."); return; }
      this.disabled = true;
      await A.submitRecord("leads", {
        id: "LEAD" + Date.now().toString().slice(-6), name: g("cnN"), classApplied: g("cnC"),
        parent: g("cnP"), phone: g("cnM"), source: g("cnS"), stage: g("cnT"),
        note: g("cnO"), updated: new Date().toISOString().slice(0, 10)
      }, g("cnN") + " added to the pipeline.");
      this.disabled = false;
      A.render();
    };
  });

  /* expose for the shell */
  A.session = () => session;
  A.paintSessionChip = paintSessionChip;
  A.signOut = endSession;
})();

/* ---------------------------------------------------------------
   Attendance · Timetable · Teachers · Exams & results · Study
   material · Leave applications
   --------------------------------------------------------------- */
(function () {
  const A = App, D = A.D;
  const esc = A.esc, tableOf = A.tableOf, head = A.head, opts = A.options;

  /* ================= ATTENDANCE ================= */
  A.route("/attendance", "Attendance", function () {
    return `<div class="shell">
      ${head("Attendance register", "The same register the class teacher fills every morning. Pick a class to view the month, or mark today's roll call.", "Home · Attendance")}
      <div class="tabs" id="attTabs">
        <button class="on" data-t="view">Monthly register</button>
        <button data-t="mark">Mark today's roll call</button>
        <button data-t="child">Look up one child</button>
      </div>
      <div id="attPane"></div>
    </div>`;
  }, function () {
    const pane = document.getElementById("attPane");
    document.querySelectorAll("#attTabs button").forEach((b) => b.onclick = () => {
      document.querySelectorAll("#attTabs button").forEach((x) => x.classList.toggle("on", x === b));
      draw(b.dataset.t);
    });

    function draw(tab) {
      if (tab === "mark") return drawMark();
      if (tab === "child") return drawChild();
      drawView();
    }

    function filterBar(idc, ids) {
      return `<div class="filters">
        <div class="field"><label for="${idc}">Class</label>${A.classSelect(idc)}</div>
        <div class="field"><label for="${ids}">Section</label><select id="${ids}"></select></div>
      </div>`;
    }
    function wireFilter(idc, ids, cb) {
      const c = document.getElementById(idc), s = document.getElementById(ids);
      const fill = () => { s.innerHTML = opts(Store.sections(c.value)); };
      fill(); c.onchange = () => { fill(); cb(c.value, s.value); };
      s.onchange = () => cb(c.value, s.value);
      cb(c.value, s.value);
    }

    /* --- monthly register --- */
    function drawView() {
      pane.innerHTML = filterBar("avC", "avS") +
        `<div id="avStats" class="grid g4" style="margin-bottom:16px"></div>
         <div class="note">Click any P, A or L to correct it. Corrections go to the school sheet when it is connected.</div>
         <div id="avGrid"></div>`;
      wireFilter("avC", "avS", (c, s) => {
        const list = Store.inClass(c, s), days = D().attendanceDays;
        let P = 0, T = 0;
        list.forEach((st) => { const m = Store.attendanceOf(st.id); P += (m.match(/P/g) || []).length; T += m.length; });
        document.getElementById("avStats").innerHTML =
          `<div class="stat"><b>${list.length}</b><span>On roll</span></div>
           <div class="stat"><b>${T ? Math.round(P / T * 100) : 0}%</b><span>Class attendance</span></div>
           <div class="stat"><b>${days.length}</b><span>School days shown</span></div>
           <div class="stat"><b>${list.filter((st) => Store.attendanceRate(st.id) < 75).length}</b><span>Below 75%</span></div>`;

        document.getElementById("avGrid").innerHTML = `<div class="attgrid"><table>
          <thead><tr><th class="name">Student</th>
            ${days.map((d) => `<th title="${A.fdate(d)}">${A.fshort(d)}</th>`).join("")}
            <th>%</th></tr></thead>
          <tbody>${list.map((st) => {
          const m = Store.attendanceOf(st.id);
          return `<tr><td class="name">${st.roll}. ${esc(st.name)}</td>
              ${m.split("").map((k, i) => `<td><button class="mk ${k}" data-id="${st.id}" data-i="${i}">${k}</button></td>`).join("")}
              <td class="tnum"><b>${Store.attendanceRate(st.id)}</b></td></tr>`;
        }).join("")}</tbody></table></div>`;

        document.querySelectorAll("#avGrid .mk").forEach((b) => b.onclick = async () => {
          const id = b.dataset.id, i = +b.dataset.i;
          const next = { P: "A", A: "L", L: "P" }[b.textContent];
          const cur = D().attendance[id].split(""); cur[i] = next;
          D().attendance[id] = cur.join("");
          b.textContent = next; b.className = "mk " + next;
          await Store.push("attendance", "update", { studentId: id, date: D().attendanceDays[i], status: next }).catch(() => { });
        });
      });
    }

    /* --- mark roll call --- */
    function drawMark() {
      const today = new Date().toISOString().slice(0, 10);
      pane.innerHTML = `<div class="filters">
          <div class="field"><label for="amC">Class</label>${A.classSelect("amC")}</div>
          <div class="field"><label for="amS">Section</label><select id="amS"></select></div>
          <div class="field"><label for="amD">Date</label><input id="amD" type="date" value="${today}"></div>
          <button class="btn line" id="amAll">Mark everyone present</button>
        </div>
        <div id="amList"></div>
        <button class="btn dark" id="amSave" style="margin-top:18px">Save roll call</button>`;

      let current = [];
      wireFilter("amC", "amS", (c, s) => {
        current = Store.inClass(c, s).map((st) => ({ st, mark: "P" }));
        paint();
      });
      function paint() {
        document.getElementById("amList").innerHTML = tableOf([
          { label: "Roll", num: true, cell: (r) => r.st.roll },
          { label: "Name", cell: (r) => esc(r.st.name) },
          { label: "House", cell: (r) => esc(r.st.house) },
          {
            label: "Mark", cell: (r) => ["P", "A", "L"].map((k) =>
              `<button class="mk ${k}" style="${r.mark === k ? "" : "opacity:.28;filter:grayscale(1)"}" data-r="${r.st.id}" data-k="${k}">${k}</button>`).join(" ")
          }
        ], current, { emptyTitle: "No students in this section", emptyMsg: "Pick another class." });
        document.querySelectorAll("#amList .mk").forEach((b) => b.onclick = () => {
          const row = current.find((r) => r.st.id === b.dataset.r);
          row.mark = b.dataset.k; paint();
        });
      }
      document.getElementById("amAll").onclick = () => { current.forEach((r) => r.mark = "P"); paint(); };
      document.getElementById("amSave").onclick = async function () {
        const date = document.getElementById("amD").value;
        if (!current.length) { A.toast("Pick a class first."); return; }
        this.disabled = true; this.textContent = "Saving…";
        const rows = current.map((r) => ({ studentId: r.st.id, name: r.st.name, class: r.st.class, section: r.st.section, date, status: r.mark }));
        const res = await Store.push("attendance", "append", rows).catch(() => ({ ok: false }));
        const absent = current.filter((r) => r.mark !== "P").length;
        A.toast(res && res.ok
          ? `Roll call saved for ${A.fdate(date)} — ${absent} not present.`
          : `Roll call ready — ${absent} not present. Connect the Google Sheet to store it.`);
        this.disabled = false; this.textContent = "Save roll call";
      };
    }

    /* --- one child --- */
    function drawChild() {
      pane.innerHTML = `<div class="filters">
          <div class="field grow"><label for="acQ">Admission number or student name</label>
            <input id="acQ" value="${A.sampleAdm()}" placeholder="e.g. ${A.sampleAdm()}"></div>
          <button class="btn dark" id="acGo">Show attendance</button>
        </div><div id="acOut"></div>`;
      const run = () => {
        const t = document.getElementById("acQ").value.trim().toLowerCase();
        const st = D().students.find((s) => s.admissionNo.toLowerCase() === t || s.id.toLowerCase() === t || s.name.toLowerCase().includes(t));
        const out = document.getElementById("acOut");
        if (!t) { out.innerHTML = A.emptyState("Enter a name or admission number", "Try " + A.sampleAdm() + "."); return; }
        if (!st) { out.innerHTML = A.emptyState("No child found", "Check the spelling or the admission number on the ID card."); return; }
        const m = Store.attendanceOf(st.id);
        out.innerHTML = `<div class="panel">
          <div class="profile-head"><div class="avatar">${A.initials(st.name)}</div>
            <div><h3 style="margin:0">${esc(st.name)}</h3>
            <div class="hint">${A.clsLabel(st.class)} – ${st.section} · Roll ${st.roll} · ${esc(st.admissionNo)}</div></div></div>
          <div class="grid g4" style="margin-bottom:18px">
            <div class="stat"><b>${Store.attendanceRate(st.id)}%</b><span>Attendance</span></div>
            <div class="stat"><b>${(m.match(/P/g) || []).length}</b><span>Present</span></div>
            <div class="stat"><b>${(m.match(/A/g) || []).length}</b><span>Absent</span></div>
            <div class="stat"><b>${(m.match(/L/g) || []).length}</b><span>On leave</span></div>
          </div>
          ${tableOf([
          { label: "Date", cell: (r) => A.fdate(r.d) },
          { label: "Day", cell: (r) => new Date(r.d + "T00:00:00").toLocaleDateString("en-IN", { weekday: "long" }) },
          { label: "Status", cell: (r) => A.statusPill({ P: "Present", A: "Absent", L: "Leave" }[r.k]) }
        ], D().attendanceDays.map((d, i) => ({ d, k: m[i] })).reverse())}
        </div>`;
      };
      document.getElementById("acGo").onclick = run;
      document.getElementById("acQ").onkeydown = (e) => { if (e.key === "Enter") run(); };
      run();
    }

    draw("view");
  });

  /* ================= TIMETABLE ================= */
  A.route("/timetable", "Timetable", function () {
    return `<div class="shell">
      ${head("Class timetable", "Eight periods of forty minutes with a twenty-minute recess. Every period shows the subject and the teacher taking it.", "Home · Timetable")}
      <div class="tabs" id="ttTabs">
        <button class="on" data-t="class">By class</button>
        <button data-t="teacher">By teacher</button>
        <button data-t="periods">Period timings</button>
      </div>
      <div id="ttPane"></div>
    </div>`;
  }, function () {
    const pane = document.getElementById("ttPane");
    document.querySelectorAll("#ttTabs button").forEach((b) => b.onclick = () => {
      document.querySelectorAll("#ttTabs button").forEach((x) => x.classList.toggle("on", x === b));
      draw(b.dataset.t);
    });

    function draw(t) {
      if (t === "teacher") return byTeacher();
      if (t === "periods") return periods();
      byClass();
    }

    function byClass() {
      pane.innerHTML = `<div class="filters">
          <div class="field"><label for="ttC">Class</label>${A.classSelect("ttC")}</div>
          <div class="field"><label for="ttS">Section</label><select id="ttS"></select></div>
        </div><div id="ttOut"></div>`;
      const c = document.getElementById("ttC"), s = document.getElementById("ttS");
      const fill = () => { s.innerHTML = opts(Store.sections(c.value)); };
      const show = () => {
        const grid = D().timetable[c.value + "-" + s.value];
        const days = D().weekDays, periods = D().periods;
        if (!grid) { document.getElementById("ttOut").innerHTML = A.emptyState("No timetable yet", "This section has not been scheduled."); return; }
        document.getElementById("ttOut").innerHTML = `<div class="tt"><table>
          <thead><tr><th style="text-align:left">Period</th>${days.map((d) => `<th>${d}</th>`).join("")}</tr></thead>
          <tbody>${periods.map((p, i) => {
          const isBreak = p.period === "Break";
          return `<tr class="${isBreak ? "break" : ""}">
              <td class="slot">${p.period}<span style="display:block;font-weight:400">${p.time}</span></td>
              ${days.map((d) => {
            const cell = grid[d][i];
            return isBreak ? `<td>Recess and mid-day snack</td>`
              : `<td><b>${esc(cell.subject)}</b><span>${esc(cell.teacher)}</span></td>`;
          }).join("")}</tr>`;
        }).join("")}</tbody></table></div>
        <p class="hint" style="margin-top:12px">Class teacher: ${esc((D().teachers.find((t) => t.classTeacherOf === c.value + "-" + s.value) || {}).name || "To be assigned")}</p>`;
      };
      c.onchange = () => { fill(); show(); };
      s.onchange = show;
      fill(); show();
    }

    function byTeacher() {
      pane.innerHTML = `<div class="filters">
          <div class="field grow"><label for="ttT">Teacher</label>
            <select id="ttT">${opts(D().teachers, null, (t) => ({ v: t.code, t: t.name + " — " + t.subject }))}</select></div>
        </div><div id="ttOut"></div>`;
      const show = () => {
        const code = document.getElementById("ttT").value;
        const t = Store.teacher(code);
        const days = D().weekDays, periods = D().periods;
        const cellFor = (day, i) => {
          for (const key in D().timetable) {
            const c = D().timetable[key][day][i];
            if (c && c.teacherCode === code) return { key, subject: c.subject };
          }
          return null;
        };
        document.getElementById("ttOut").innerHTML = `<div class="panel" style="padding:18px 22px;margin-bottom:18px">
            <h3 style="margin:0">${esc(t.name)}</h3>
            <p class="sub" style="margin:4px 0 0">${esc(t.designation)} · ${esc(t.subject)} · ${esc(t.qualification)}${t.classTeacherOf ? " · Class teacher of " + A.clsLabel(t.classTeacherOf.split("-")[0]) + " – " + t.classTeacherOf.split("-")[1] : ""}</p>
          </div>
          <div class="tt"><table>
          <thead><tr><th style="text-align:left">Period</th>${days.map((d) => `<th>${d}</th>`).join("")}</tr></thead>
          <tbody>${periods.map((p, i) => {
          if (p.period === "Break") return `<tr class="break"><td class="slot">Break<span style="display:block;font-weight:400">${p.time}</span></td>${days.map(() => "<td>Recess</td>").join("")}</tr>`;
          return `<tr><td class="slot">${p.period}<span style="display:block;font-weight:400">${p.time}</span></td>
              ${days.map((d) => {
            const c = cellFor(d, i);
            return c ? `<td><b>${A.clsLabel(c.key.split("-")[0])} – ${c.key.split("-")[1]}</b><span>${esc(c.subject)}</span></td>`
              : `<td style="color:var(--muted)">Free</td>`;
          }).join("")}</tr>`;
        }).join("")}</tbody></table></div>`;
      };
      document.getElementById("ttT").onchange = show; show();
    }

    function periods() {
      pane.innerHTML = `<div class="grid g2" style="align-items:start">
        <div class="panel"><h3>Period timings</h3><p class="sub">Summer schedule, Classes I to XII</p>
        ${tableOf([
        { label: "Period", cell: (p) => p.period },
        { label: "Time", cell: (p) => p.time },
        { label: "Length", cell: (p) => p.period === "Break" ? "20 minutes" : "40 minutes" }
      ], D().periods)}</div>
        <div class="panel"><h3>Gate timings by wing</h3><p class="sub">Winter timings apply from 15 November to 15 February</p>
        ${tableOf([
        { label: "Wing", cell: (t) => esc(t.group) },
        { label: "Summer", cell: (t) => esc(t.summer) },
        { label: "Winter", cell: (t) => esc(t.winter) },
        { label: "Saturday", cell: (t) => esc(t.saturday) }
      ], D().timings)}</div></div>`;
    }
    draw("class");
  });

  /* ================= TEACHERS ================= */
  A.route("/teachers", "Teachers and staff", function () {
    return `<div class="shell">
      ${head("Teachers and staff", D().teachers.length + " teachers across pre-primary, primary, middle and senior wings. Click a name to see the classes and subjects that teacher handles.", "Home · Teachers")}
      <div class="filters">
        <div class="field"><label for="tfSub">Subject</label><select id="tfSub"><option value="">All subjects</option>
          ${opts([...new Set(D().teachers.map((t) => t.subject))].sort())}</select></div>
        <div class="field grow"><label for="tfQ">Search by name</label><input id="tfQ" placeholder="e.g. Mehrotra"></div>
      </div>
      <div id="tfOut"></div>
    </div>`;
  }, function () {
    const sub = document.getElementById("tfSub"), q = document.getElementById("tfQ");
    function draw() {
      const rows = D().teachers.filter((t) =>
        (!sub.value || t.subject === sub.value) &&
        (!q.value.trim() || t.name.toLowerCase().includes(q.value.trim().toLowerCase())));
      document.getElementById("tfOut").innerHTML = tableOf([
        { label: "Code", cell: (t) => `<span class="tnum">${esc(t.code)}</span>` },
        { label: "Name", cell: (t) => `<button class="linkish" data-t="${t.code}">${esc(t.name)}</button>` },
        { label: "Designation", cell: (t) => esc(t.designation) },
        { label: "Subject", cell: (t) => esc(t.subject) },
        { label: "Qualification", cell: (t) => esc(t.qualification) },
        { label: "Experience", num: true, cell: (t) => t.experience + " yrs" },
        { label: "Class teacher of", cell: (t) => t.classTeacherOf ? A.clsLabel(t.classTeacherOf.split("-")[0]) + " – " + t.classTeacherOf.split("-")[1] : "—" }
      ], rows, { emptyTitle: "No teacher matches", emptyMsg: "Clear the search box." });
      document.querySelectorAll("[data-t]").forEach((b) => b.onclick = () => openTeacher(b.dataset.t));
    }
    sub.onchange = draw; q.oninput = draw; draw();
  });

  function openTeacher(code) {
    const t = Store.teacher(code);
    let load = 0;
    for (const key in D().timetable)
      for (const d of D().weekDays)
        load += D().timetable[key][d].filter((c) => c.teacherCode === code).length;
    A.modal(t.name, `
      <div class="profile-head"><div class="avatar">${A.initials(t.name)}</div>
        <div style="flex:1"><h3 style="margin:0">${esc(t.name)}</h3>
        <div class="hint">${esc(t.designation)} · ${esc(t.subject)}</div></div></div>
      <div class="grid g4" style="margin-bottom:20px">
        <div class="stat"><b>${t.experience}</b><span>Years of experience</span></div>
        <div class="stat"><b>${load}</b><span>Periods a week</span></div>
        <div class="stat"><b>${t.teaches.length}</b><span>Sections handled</span></div>
        <div class="stat"><b>${t.classTeacherOf || "—"}</b><span>Class teacher of</span></div>
      </div>
      <dl class="facts" style="margin-bottom:20px">
        <div><dt>Qualification</dt><dd>${esc(t.qualification)}</dd></div>
        <div><dt>Joined the school</dt><dd>${A.fdate(t.joined)}</dd></div>
        <div><dt>School email</dt><dd>${esc(t.email)}</dd></div>
        <div><dt>Contact</dt><dd>${esc(t.phone)}</dd></div>
      </dl>
      <h4 style="font-family:var(--serif);margin:0 0 10px">Classes and subjects taught</h4>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${t.teaches.length ? t.teaches.map((x) => `<span class="pill info">${esc(x)}</span>`).join("") : '<span class="hint">Not scheduled this term.</span>'}
      </div>`);
  }

  /* ================= EXAMS & RESULTS ================= */
  A.route("/exams", "Exams and results", function () {
    return `<div class="shell">
      ${head("Examinations and results", "Datesheets, mark sheets, previous question papers and answer keys — all in one place.", "Home · Exams and results")}
      <div class="tabs" id="exTabs">
        <button class="on" data-t="sched">Examination schedule</button>
        <button data-t="result">Result and mark sheet</button>
        <button data-t="papers">Question papers and answer keys</button>
        <button data-t="rules">Examination rules</button>
      </div>
      <div id="exPane"></div>
    </div>`;
  }, function () {
    const pane = document.getElementById("exPane");
    document.querySelectorAll("#exTabs button").forEach((b) => b.onclick = () => {
      document.querySelectorAll("#exTabs button").forEach((x) => x.classList.toggle("on", x === b));
      draw(b.dataset.t);
    });

    function draw(t) {
      if (t === "result") return result();
      if (t === "papers") return papers();
      if (t === "rules") return rules();
      sched();
    }

    function sched() {
      pane.innerHTML = `<div class="grid g4" style="margin-bottom:22px">
          ${D().exams.map((e) => `<div class="stat"><b style="font-size:1.05rem">${esc(e.name)}</b>
            <span>${A.fdate(e.from)} – ${A.fdate(e.to)}</span>
            <div style="margin-top:8px">${A.statusPill(e.status)}</div></div>`).join("")}
        </div>
        <div class="filters"><div class="field"><label for="dsC">Datesheet for</label>${A.classSelect("dsC")}</div></div>
        <div id="dsOut"></div>`;
      const c = document.getElementById("dsC");
      const show = () => {
        const rows = D().datesheet.filter((d) => d.class === c.value);
        document.getElementById("dsOut").innerHTML =
          `<div class="note">Half Yearly Examination · ${A.clsLabel(c.value)} · Reporting time 8:45 AM. Bring your ID card to every paper.</div>` +
          tableOf([
            { label: "Date", cell: (r) => A.fdate(r.date) },
            { label: "Day", cell: (r) => new Date(r.date + "T00:00:00").toLocaleDateString("en-IN", { weekday: "long" }) },
            { label: "Subject", cell: (r) => esc(r.subject) },
            { label: "Timing", cell: (r) => esc(r.time) }
          ], rows);
      };
      c.onchange = show; show();
    }

    function result() {
      pane.innerHTML = `<div class="filters">
          <div class="field grow"><label for="rsQ">Admission number or student name</label>
            <input id="rsQ" value="${A.sampleAdm()}" placeholder="e.g. ${A.sampleAdm()}"></div>
          <div class="field"><label for="rsE">Examination</label><select id="rsE">${opts(D().exams, "UT1", (e) => ({ v: e.code, t: e.name }))}</select></div>
          <button class="btn dark" id="rsGo">Show mark sheet</button>
        </div><div id="rsOut"></div>`;
      const run = () => {
        const term = document.getElementById("rsQ").value.trim().toLowerCase();
        const out = document.getElementById("rsOut");
        if (!term) { out.innerHTML = A.emptyState("Enter an admission number", "The number is printed on the child's ID card, for example " + A.sampleAdm() + "."); return; }
        const st = D().students.find((s) => s.admissionNo.toLowerCase() === term || s.id.toLowerCase() === term || s.name.toLowerCase().includes(term));
        if (!st) { out.innerHTML = A.emptyState("No record found", "Check the admission number and try again."); return; }
        const ex = document.getElementById("rsE").value;
        const rows = Store.resultsOf(st.id, ex);
        if (!rows.length) {
          out.innerHTML = A.emptyState("Result not declared", "Marks for this examination have not been entered yet.");
          return;
        }
        const total = rows.reduce((a, r) => a + r.marks, 0), max = rows.reduce((a, r) => a + r.max, 0);
        const pc = total / max * 100;
        out.innerHTML = `<div class="sheet" id="printSheet">
          <div class="head">
            <h3>Global Vision Public School</h3>
            <p>Plot 14, Sector 9, Rohini, New Delhi – 110085 · Report of ${esc((D().exams.find((e) => e.code === ex) || {}).name)}, session ${esc(A.S().session)}</p>
          </div>
          <div class="meta">
            <div><span>Student</span>${esc(st.name)}</div>
            <div><span>Class and section</span>${A.clsLabel(st.class)} – ${esc(st.section)}</div>
            <div><span>Roll number</span>${st.roll}</div>
            <div><span>Admission number</span>${esc(st.admissionNo)}</div>
            <div><span>Father</span>${esc(st.fatherName)}</div>
            <div><span>Mother</span>${esc(st.motherName)}</div>
            <div><span>Date of birth</span>${A.fdate(st.dob)}</div>
            <div><span>House</span>${esc(st.house)}</div>
          </div>
          ${tableOf([
          { label: "Subject", cell: (r) => esc(r.subject) },
          { label: "Marks obtained", num: true, cell: (r) => r.marks },
          { label: "Maximum", num: true, cell: (r) => r.max },
          { label: "Percentage", num: true, cell: (r) => Math.round(r.marks / r.max * 100) + "%" },
          { label: "Grade", cell: (r) => A.grade(r.marks / r.max * 100) }
        ], rows)}
          <div class="grid g4" style="margin-top:20px">
            <div class="stat"><b>${total}/${max}</b><span>Total marks</span></div>
            <div class="stat"><b>${pc.toFixed(1)}%</b><span>Percentage</span></div>
            <div class="stat"><b>${pc >= 91 ? "A1" : pc >= 81 ? "A2" : pc >= 71 ? "B1" : pc >= 61 ? "B2" : pc >= 51 ? "C1" : pc >= 41 ? "C2" : "D"}</b><span>Overall grade</span></div>
            <div class="stat"><b>${Store.attendanceRate(st.id)}%</b><span>Attendance</span></div>
          </div>
          <p class="hint" style="margin-top:18px">Result declared by the examination cell. For any discrepancy, write to office@gvps.edu.in within seven days.</p>
        </div>
        <button class="btn line no-print" style="margin-top:16px" onclick="window.print()">Print this mark sheet</button>`;
      };
      document.getElementById("rsGo").onclick = run;
      document.getElementById("rsE").onchange = run;
      document.getElementById("rsQ").onkeydown = (e) => { if (e.key === "Enter") run(); };
      run();
    }

    function papers() {
      pane.innerHTML = `<div class="filters">
          <div class="field"><label for="ppC">Class</label><select id="ppC"><option value="">All classes</option>
            ${opts([...new Set(D().papers.map((p) => p.class))], null, (c) => ({ v: c, t: A.clsLabel(c) }))}</select></div>
          <div class="field grow"><label for="ppQ">Subject</label><input id="ppQ" placeholder="e.g. Physics"></div>
        </div><div id="ppOut"></div>`;
      const c = document.getElementById("ppC"), q = document.getElementById("ppQ");
      const show = () => {
        const rows = D().papers.filter((p) => (!c.value || p.class === c.value) &&
          (!q.value.trim() || p.subject.toLowerCase().includes(q.value.trim().toLowerCase())));
        document.getElementById("ppOut").innerHTML = tableOf([
          { label: "Class", cell: (p) => A.clsLabel(p.class) },
          { label: "Subject", cell: (p) => esc(p.subject) },
          { label: "Examination", cell: (p) => esc(p.exam) },
          { label: "Uploaded", cell: (p) => A.fdate(p.uploaded) },
          { label: "Question paper", cell: (p) => `<a href="${esc(p.paper)}">Download PDF</a>` },
          { label: "Answer key", cell: (p) => `<a href="${esc(p.answerKey)}">Download PDF</a>` }
        ], rows, { emptyTitle: "No papers for that subject", emptyMsg: "Try clearing the subject box." });
      };
      c.onchange = show; q.oninput = show; show();
    }

    function rules() {
      const R = [
        ["Reporting", "Reach the examination hall fifteen minutes before the paper begins. No candidate is admitted after the first ten minutes."],
        ["Identity", "The school ID card must be on the desk through every paper."],
        ["Material allowed", "Only a transparent pencil pouch, geometry box and an approved non-programmable calculator for Classes XI and XII."],
        ["Mobile phones", "Not permitted anywhere in the examination block. A phone found on a candidate means the paper is cancelled."],
        ["Attendance requirement", "Seventy-five percent attendance is needed to sit the Annual Examination. Medical leave with a certificate is counted separately."],
        ["Answer sheets", "Write in blue or black ink only. Diagrams in pencil. Do not detach any sheet."],
        ["Leaving the hall", "No candidate may leave before the paper is over. Raise a hand for extra sheets."],
        ["Re-evaluation", "Apply at the office within seven days of the result with the re-evaluation form and fee."]
      ];
      pane.innerHTML = `<div class="grid g2">${R.map((r) => `<div class="card"><h4>${r[0]}</h4><p>${r[1]}</p></div>`).join("")}</div>`;
    }
    draw("sched");
  });

  /* ================= STUDY MATERIAL ================= */
  A.route("/material", "Study material", function () {
    return `<div class="shell">
      ${head("Study material", "Chapter notes, worksheets, syllabus and sample papers uploaded by the subject teacher.", "Home · Study material")}
      <div class="filters">
        <div class="field"><label for="mtC">Class</label>${A.classSelect("mtC", true)}</div>
        <div class="field"><label for="mtT">Type</label><select id="mtT"><option value="">All types</option>
          ${opts([...new Set(D().material.map((m) => m.type))])}</select></div>
        <div class="field grow"><label for="mtQ">Search</label><input id="mtQ" placeholder="Subject or title"></div>
      </div>
      <div id="mtOut"></div>
      <div class="panel" style="margin-top:24px">
        <h3>Upload material</h3>
        <p class="sub">For teachers. Put the file in Google Drive, set sharing to "anyone with the link", and paste that link here.</p>
        <div class="grid g4" style="gap:14px">
          <div class="field"><label for="muC">Class</label>${A.classSelect("muC")}</div>
          <div class="field"><label for="muS">Subject</label><input id="muS" placeholder="e.g. Mathematics"></div>
          <div class="field"><label for="muT">Type</label><select id="muT">${opts([...new Set(D().material.map((m) => m.type))])}</select></div>
          <div class="field"><label for="muN">Title</label><input id="muN" placeholder="e.g. Chapter 4 — Quadratic Equations"></div>
        </div>
        <div class="grid g2" style="gap:14px;margin-top:14px">
          <div class="field"><label for="muL">Drive link</label><input id="muL" placeholder="https://drive.google.com/…"></div>
          <div class="field"><label for="muBy">Uploaded by</label><input id="muBy" placeholder="Teacher's name"></div>
        </div>
        <button class="btn dark" id="muGo" style="margin-top:16px">Publish material</button>
      </div>
    </div>`;
  }, function () {
    const c = document.getElementById("mtC"), t = document.getElementById("mtT"), q = document.getElementById("mtQ");
    function draw() {
      const rows = D().material.filter((m) => (!c.value || m.class === c.value) &&
        (!t.value || m.type === t.value) &&
        (!q.value.trim() || (m.title + " " + m.subject).toLowerCase().includes(q.value.trim().toLowerCase())));
      document.getElementById("mtOut").innerHTML = tableOf([
        { label: "Class", cell: (m) => A.clsLabel(m.class) },
        { label: "Subject", cell: (m) => esc(m.subject) },
        { label: "Title", cell: (m) => esc(m.title) },
        { label: "Type", cell: (m) => `<span class="pill info">${esc(m.type)}</span>` },
        { label: "Uploaded by", cell: (m) => esc(m.teacher) },
        { label: "Date", cell: (m) => A.fdate(m.uploaded) },
        { label: "Size", cell: (m) => esc(m.size || "—") },
        { label: "File", cell: (m) => `<a href="${esc(m.link || "#")}">Open</a>` }
      ], rows, { emptyTitle: "Nothing uploaded for that filter", emptyMsg: "Pick another class or clear the search." });
    }
    [c, t].forEach((e) => e.onchange = draw); q.oninput = draw; draw();

    document.getElementById("muGo").onclick = async function () {
      const g = (id) => document.getElementById(id).value.trim();
      if (!g("muS") || !g("muN")) { A.toast("Add a subject and a title."); return; }
      this.disabled = true;
      await A.submitRecord("material", {
        class: g("muC"), subject: g("muS"), type: g("muT"), title: g("muN"),
        teacher: g("muBy") || "Subject teacher", link: g("muL") || "#",
        uploaded: new Date().toISOString().slice(0, 10), size: "—"
      }, "Material published.");
      this.disabled = false;
      A.render();
    };
  });

  /* ================= LEAVE ================= */
  A.route("/leave", "Leave applications", function () {
    return `<div class="shell">
      ${head("Leave applications", "Apply for a child's leave and track whether the class teacher has approved it.", "Home · Leave")}
      <div class="grid g2" style="align-items:start">
        <div class="panel">
          <h3>Apply for leave</h3>
          <p class="sub">Send this at least one day in advance where possible.</p>
          <div class="grid g2" style="gap:14px">
            <div class="field"><label for="lvAdm">Admission number *</label><input id="lvAdm" placeholder="${A.sampleAdm()}"></div>
            <div class="field"><label for="lvBy">Applying as</label><select id="lvBy"><option>Father</option><option>Mother</option><option>Guardian</option></select></div>
            <div class="field"><label for="lvFrom">From *</label><input id="lvFrom" type="date"></div>
            <div class="field"><label for="lvTo">To *</label><input id="lvTo" type="date"></div>
          </div>
          <div class="field" style="margin-top:14px"><label for="lvWhy">Reason *</label><textarea id="lvWhy" placeholder="Be brief — the class teacher reads every application."></textarea></div>
          <button class="btn dark" id="lvGo" style="margin-top:16px">Send application</button>
          <p class="hint" style="margin-top:10px">Leave beyond three days needs a medical certificate or a written note from the parent at the office.</p>
        </div>
        <div class="panel">
          <h3>Applications on record</h3>
          <p class="sub">Latest first</p>
          <div id="lvOut"></div>
        </div>
      </div>
    </div>`;
  }, function () {
    function draw() {
      document.getElementById("lvOut").innerHTML = tableOf([
        { label: "Student", cell: (l) => esc(l.name) },
        { label: "Class", cell: (l) => l.class ? A.clsLabel(l.class) + " – " + l.section : "—" },
        { label: "From", cell: (l) => A.fdate(l.from) },
        { label: "To", cell: (l) => A.fdate(l.to) },
        { label: "Days", num: true, cell: (l) => l.days },
        { label: "Reason", cell: (l) => esc(l.reason) },
        { label: "Status", cell: (l) => A.statusPill(l.status) }
      ], D().leaves);
    }
    draw();
    document.getElementById("lvGo").onclick = async function () {
      const g = (id) => document.getElementById(id).value.trim();
      const st = D().students.find((s) => s.admissionNo.toLowerCase() === g("lvAdm").toLowerCase());
      if (!st) { A.toast("That admission number is not on roll. Check the ID card."); return; }
      if (!g("lvFrom") || !g("lvTo") || !g("lvWhy")) { A.toast("Add the dates and a reason."); return; }
      const days = Math.round((new Date(g("lvTo")) - new Date(g("lvFrom"))) / 864e5) + 1;
      if (days < 1) { A.toast("The end date cannot be before the start date."); return; }
      this.disabled = true;
      await A.submitRecord("leaves", {
        id: "LV" + Date.now().toString().slice(-6), studentId: st.id, name: st.name,
        class: st.class, section: st.section, from: g("lvFrom"), to: g("lvTo"), days,
        reason: g("lvWhy"), appliedBy: g("lvBy"), status: "Pending",
        appliedOn: new Date().toISOString().slice(0, 10)
      }, `Leave applied for ${st.name}, ${days} day${days > 1 ? "s" : ""}.`);
      this.disabled = false;
      document.getElementById("lvWhy").value = "";
      draw();
    };
  });
})();

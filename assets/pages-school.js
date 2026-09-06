/* ---------------------------------------------------------------
   Events · ID cards · Uniform and timings · Fees and transport ·
   Gallery · Terms · Contact · Admin console
   --------------------------------------------------------------- */
(function () {
  const A = App, D = A.D;
  const esc = A.esc, tableOf = A.tableOf, head = A.head, opts = A.options;

  /* ================= EVENTS ================= */
  A.route("/events", "Events and sports", function () {
    const cats = [...new Set(D().events.map((e) => e.category))];
    return `<div class="shell">
      ${head("Events and sports", "The full calendar for session " + esc(A.S().session) + " — assemblies, competitions, house fixtures and parent meetings.", "Home · Events")}
      <div class="filters">
        <div class="field"><label for="evC">Category</label><select id="evC"><option value="">Everything</option>${opts(cats)}</select></div>
        <div class="field"><label for="evW">Show</label><select id="evW"><option value="up">Upcoming only</option><option value="all">Whole year</option></select></div>
      </div>
      <div class="grid g2" style="align-items:start">
        <div class="panel" style="padding:6px 24px 18px"><div id="evOut"></div></div>
        <div>
          <div class="panel">
            <h3>Inter-house standings</h3>
            <p class="sub">Points after the first term</p>
            ${tableOf([
      { label: "House", cell: (h) => `<b>${esc(h[0])}</b>` },
      { label: "Sports", num: true, cell: (h) => h[1] },
      { label: "Culturals", num: true, cell: (h) => h[2] },
      { label: "Academics", num: true, cell: (h) => h[3] },
      { label: "Total", num: true, cell: (h) => `<b>${h[1] + h[2] + h[3]}</b>` }
    ], [["Aravali", 142, 118, 96], ["Nilgiri", 128, 134, 102], ["Shivalik", 151, 106, 88], ["Udaygiri", 119, 127, 111]])}
          </div>
          <div class="panel">
            <h3>Sports offered</h3>
            <div style="display:flex;flex-wrap:wrap;gap:8px">
              ${["Cricket", "Basketball", "Football", "Athletics", "Skating", "Table tennis", "Badminton", "Chess", "Carrom", "Yoga", "Taekwondo", "Kho-kho"]
        .map((s) => `<span class="pill info">${s}</span>`).join("")}
            </div>
            <p class="hint" style="margin-top:14px">Coaching runs from 2:15 PM to 3:45 PM on working days. Register with Mr. Devender Solanki in the sports room.</p>
          </div>
        </div>
      </div>
    </div>`;
  }, function () {
    const c = document.getElementById("evC"), w = document.getElementById("evW");
    const today = new Date().toISOString().slice(0, 10);
    function draw() {
      const rows = D().events.filter((e) => (!c.value || e.category === c.value) &&
        (w.value === "all" || e.date >= today));
      document.getElementById("evOut").innerHTML = rows.length
        ? rows.map(A.eventRow).join("")
        : A.emptyState("No events match", "Switch to the whole year or pick another category.");
    }
    c.onchange = draw; w.onchange = draw; draw();
  });

  /* ================= ID CARDS ================= */
  A.route("/idcard", "ID cards", function () {
    return `<div class="shell">
      ${head("Student ID card", "Generate a printable card for any child on roll. Print on 86 × 54 mm PVC stock or on A4 and cut.", "Home · ID cards")}
      <div class="filters">
        <div class="field"><label for="icC">Class</label>${A.classSelect("icC")}</div>
        <div class="field"><label for="icS">Section</label><select id="icS"></select></div>
        <div class="field grow"><label for="icP">Student</label><select id="icP"></select></div>
        <button class="btn line no-print" onclick="window.print()">Print card</button>
      </div>
      <div id="icOut" style="display:flex;gap:26px;flex-wrap:wrap;align-items:flex-start"></div>
    </div>`;
  }, function () {
    const c = document.getElementById("icC"), s = document.getElementById("icS"), p = document.getElementById("icP");
    const fillS = () => { s.innerHTML = opts(Store.sections(c.value)); };
    const fillP = () => {
      const list = Store.inClass(c.value, s.value);
      p.innerHTML = opts(list, null, (st) => ({ v: st.id, t: st.roll + ". " + st.name }));
    };
    const draw = () => {
      const st = Store.student(p.value);
      if (!st) { document.getElementById("icOut").innerHTML = A.emptyState("Pick a student", "Choose a class and section first."); return; }
      const t = D().teachers.find((x) => x.classTeacherOf === st.class + "-" + st.section);
      document.getElementById("icOut").innerHTML = `
        <div class="idcard">
          <div class="top">
            <svg style="width:34px;height:38px;flex:0 0 34px"><use href="#crest"></use></svg>
            <div><b>Global Vision Public School</b><span>Sector 9, Rohini, New Delhi – 110085</span></div>
          </div>
          <div class="body">
            <div class="mono-photo">${A.initials(st.name)}</div>
            <dl>
              <dt>Name</dt><dd>${esc(st.name)}</dd>
              <dt>Class</dt><dd>${A.clsLabel(st.class)} – ${esc(st.section)}</dd>
              <dt>Roll no.</dt><dd>${st.roll}</dd>
              <dt>Adm. no.</dt><dd>${esc(st.admissionNo)}</dd>
              <dt>D.O.B.</dt><dd>${A.fdate(st.dob)}</dd>
              <dt>Blood</dt><dd>${esc(st.bloodGroup)}</dd>
              <dt>House</dt><dd>${esc(st.house)}</dd>
            </dl>
          </div>
          <div class="foot"><span>Valid till 31 Mar 2027</span><span>Principal</span></div>
        </div>
        <div class="idcard">
          <div class="top" style="background:#1C3A5E"><div><b>If found, please return</b><span>Card is school property</span></div></div>
          <div class="body" style="display:block">
            <dl style="grid-template-columns:auto 1fr">
              <dt>Father</dt><dd>${esc(st.fatherName)}</dd>
              <dt>Mobile</dt><dd>${esc(st.fatherPhone)}</dd>
              <dt>Mother</dt><dd>${esc(st.motherName)}</dd>
              <dt>Mobile</dt><dd>${esc(st.motherPhone)}</dd>
              <dt>Emergency</dt><dd>${esc(st.emergencyContact)}</dd>
              <dt>Address</dt><dd style="font-weight:500">${esc(st.address)}, ${esc(st.city)} – ${esc(st.pincode)}</dd>
              <dt>Bus</dt><dd>${esc(st.transport)}</dd>
              <dt>Class teacher</dt><dd>${esc(t ? t.name : "—")}</dd>
            </dl>
            <p class="hint" style="margin:12px 0 0;font-size:.68rem">School office 011-2755 4400. The card must be worn inside the campus and produced at every examination.</p>
          </div>
          <div class="foot"><span>${esc(st.id)}</span><span>Session ${esc(A.S().session)}</span></div>
        </div>`;
    };
    c.onchange = () => { fillS(); fillP(); draw(); };
    s.onchange = () => { fillP(); draw(); };
    p.onchange = draw;
    fillS(); fillP(); draw();
  });

  /* ================= UNIFORM & TIMINGS ================= */
  A.route("/uniform", "Uniform and timings", function () {
    return `<div class="shell">
      ${head("Uniform and school timings", "Winter uniform becomes compulsory from 1 November. Uniform is available at the school store and at Bhatia Uniforms, Sector 7 market.", "Home · Uniform and timings")}
      <div class="sec-head"><h2>Dress code</h2></div>
      ${tableOf([
      { label: "Wing", cell: (u) => `<b>${esc(u.group)}</b>` },
      { label: "Summer uniform", cell: (u) => esc(u.summer) },
      { label: "Winter uniform", cell: (u) => esc(u.winter) },
      { label: "House dress", cell: (u) => esc(u.house) }
    ], D().uniform)}

      <div class="grid g3" style="margin-top:22px">
        <div class="card"><h4>Grooming</h4><p>Hair neatly tied for girls with black or navy bands. Boys' hair above the collar. No coloured hair, nail polish, mehendi or heavy jewellery.</p></div>
        <div class="card"><h4>Shoes and socks</h4><p>Black lace-up school shoes on all days, white sports shoes on physical education days. Navy socks with two white stripes.</p></div>
        <div class="card"><h4>Identity card</h4><p>The ID card must be worn on the lanyard inside the campus. A duplicate card costs ₹150 and takes two working days.</p></div>
      </div>

      <div class="sec-head" style="margin-top:36px"><h2>School timings</h2>
        <p>Gates open thirty minutes before the first bell. The late gate closes ten minutes after the assembly begins.</p></div>
      ${tableOf([
      { label: "Wing", cell: (t) => `<b>${esc(t.group)}</b>` },
      { label: "Summer (Apr – Oct)", cell: (t) => esc(t.summer) },
      { label: "Winter (Nov – Feb)", cell: (t) => esc(t.winter) },
      { label: "Saturday", cell: (t) => esc(t.saturday) }
    ], D().timings)}

      <div class="sec-head" style="margin-top:36px"><h2>Daily period plan</h2></div>
      ${tableOf([
      { label: "Period", cell: (p) => p.period },
      { label: "Time", cell: (p) => p.time }
    ], D().periods)}
    </div>`;
  });

  /* ================= FEES & TRANSPORT ================= */
  A.route("/fees", "Fees and transport", function () {
    return `<div class="shell">
      ${head("Fees and transport", "Fees are collected term-wise. Pay online through the parent portal, by cheque at the accounts counter, or by NEFT.", "Home · Fees and transport")}
      <div class="note">Term II fee window is open till 15 September. A late fee of ₹100 per week applies after that date.</div>
      <div class="sec-head"><h2>Fee structure, session ${esc(A.S().session)}</h2></div>
      ${tableOf([
      { label: "Class", cell: (f) => `<b>${A.clsLabel(f.class)}</b>` },
      { label: "One-time admission fee", num: true, cell: (f) => A.inr(f.admissionFee) },
      { label: "Tuition per month", num: true, cell: (f) => A.inr(f.tuitionMonthly) },
      { label: "Annual charges", num: true, cell: (f) => A.inr(f.annualCharges) },
      { label: "Transport", cell: (f) => esc(f.transport) },
      { label: "Yearly total (excl. transport)", num: true, cell: (f) => `<b>${A.inr(f.total)}</b>` }
    ], D().fees)}

      <div class="grid g3" style="margin-top:22px">
        <div class="card"><h4>What is included</h4><p>Tuition, laboratory and library charges, examination fee, house activities and the annual magazine.</p></div>
        <div class="card"><h4>What is extra</h4><p>Uniform, books and stationery, transport, optional coaching, and trips outside Delhi.</p></div>
        <div class="card"><h4>Concessions</h4><p>Ten percent on the tuition fee for a second sibling. Full concession for wards of serving defence personnel under the school's quota.</p></div>
      </div>

      <div class="sec-head" style="margin-top:36px"><h2>Bus routes</h2>
        <p>All fourteen buses carry a female attendant and are tracked live. Route changes are notified a week in advance.</p></div>
      ${tableOf([
      { label: "Route", cell: (r) => `<b>${esc(r.route)}</b>` },
      { label: "Stops", cell: (r) => esc(r.stops) },
      { label: "Pick-up", cell: (r) => esc(r.pickup) },
      { label: "Drop", cell: (r) => esc(r.drop) },
      { label: "Bus number", cell: (r) => `<span class="tnum">${esc(r.bus)}</span>` },
      { label: "Teacher in charge", cell: (r) => esc(r.incharge) }
    ], D().routes)}
    </div>`;
  });

  /* ================= GALLERY ================= */
  A.route("/gallery", "Gallery", function () {
    return `<div class="shell">
      ${head("Gallery", "Photographs from assemblies, competitions and the annual day. Replace each tile with a real photograph from your own drive.", "Home · Gallery")}
      <div class="grid g4">
        ${D().gallery.map((g) => `<div class="gal"><em>${esc(g.tag)}</em><span>${esc(g.title)}</span></div>`).join("")}
      </div>
      <p class="hint" style="margin-top:18px">To use real pictures, put them in an <code>assets/gallery/</code> folder and swap each tile for <code>&lt;img src="assets/gallery/name.jpg" alt=""&gt;</code>.</p>
    </div>`;
  });

  /* ================= TERMS ================= */
  A.route("/terms", "Terms and policies", function () {
    const S = [
      ["Admission and withdrawal", "Admission is granted at the discretion of the school and is subject to seats being available. A written application and one calendar month's notice, or one month's fee in lieu, is required before withdrawing a child. The transfer certificate is issued after all dues are cleared."],
      ["Attendance", "A minimum of seventy-five percent attendance across the session is required to be promoted or to sit the Annual Examination. Absence of three consecutive days without information may lead to the name being struck off the rolls."],
      ["Fee policy", "Fees are payable within the announced window for each term. Fees once paid are not refunded except the caution money, which is returned on withdrawal after adjusting dues. A late fee applies after the due date and the child's name may be struck off after two months of non-payment."],
      ["Discipline", "Every child is expected to be in full uniform, to carry the ID card, and to treat staff, classmates and school property with respect. Damage to property is charged to the parent. Serious misconduct, including bullying and possession of prohibited items, may lead to suspension."],
      ["Mobile phones and devices", "Mobile phones, smart watches and cameras are not allowed on the campus. Items found are deposited with the office and returned to the parent at the end of the term."],
      ["Health and safety", "The infirmary handles first aid. Parents are informed immediately in case of illness or injury. A child with a contagious illness should be kept at home and readmitted with a fitness note. Please keep the emergency contact number in your child's record current."],
      ["Transport", "The school bus is a privilege, not a right, and may be withdrawn for repeated indiscipline. A child may be dropped only at the registered stop. Any change of stop or route needs a written request a week in advance."],
      ["Data and privacy", "The school stores student and parent records to run admissions, attendance, examinations and transport. Records are visible to the class teacher, the examination cell and the office. Photographs taken at school events may be used in the school magazine and on this website unless a parent writes to opt out."],
      ["Communication", "Circulars go out through this website, the school app and SMS. Parents may meet a teacher by appointment on any working Saturday between 11:00 AM and 12:30 PM, and at every scheduled parent–teacher meeting."],
      ["Amendments", "The school may revise these terms, the fee structure and the timings for the next session. Changes are put up on the notice board and on this page."]
    ];
    return `<div class="shell">
      ${head("Terms and policies", "Last revised 1 April 2026. These terms apply to every child on the rolls and to their parents or guardians.", "Home · Terms and policies")}
      ${S.map((s) => `<div class="panel"><h3>${esc(s[0])}</h3><p style="margin:0">${esc(s[1])}</p></div>`).join("")}
    </div>`;
  });

  /* ================= CONTACT ================= */
  A.route("/contact", "Contact", function () {
    const s = A.S();
    return `<div class="shell">
      ${head("Contact the school", "The office answers calls between 8:00 AM and 3:00 PM, Monday to Saturday.", "Home · Contact")}
      <div class="grid g2" style="align-items:start">
        <div class="panel">
          <h3>Write to the office</h3>
          <p class="sub">Someone from the concerned department replies within two working days.</p>
          <div class="grid g2" style="gap:14px">
            <div class="field"><label for="cNm">Your name *</label><input id="cNm"></div>
            <div class="field"><label for="cPh">Mobile *</label><input id="cPh" inputmode="numeric"></div>
            <div class="field"><label for="cEm">Email</label><input id="cEm" type="email"></div>
            <div class="field"><label for="cTo">Department</label><select id="cTo">
              <option>Admissions</option><option>Accounts and fees</option><option>Transport</option>
              <option>Examination cell</option><option>Principal's office</option><option>Something else</option>
            </select></div>
          </div>
          <div class="field" style="margin-top:14px"><label for="cMs">Message *</label><textarea id="cMs"></textarea></div>
          <button class="btn dark" id="cGo" style="margin-top:16px">Send message</button>
        </div>
        <div>
          <div class="panel">
            <h3>Reach us</h3>
            <dl class="facts" style="grid-template-columns:1fr">
              <div><dt>Address</dt><dd>${esc(s.address)}</dd></div>
              <div><dt>Telephone</dt><dd>${esc(s.phone)}</dd></div>
              <div><dt>Email</dt><dd>${esc(s.email)}</dd></div>
              <div><dt>Principal</dt><dd>${esc(s.principal)}</dd></div>
              <div style="border:0"><dt>Nearest metro</dt><dd>Rithala, Red Line — 1.4 km, autos available at Gate 2</dd></div>
            </dl>
            <a class="btn line" style="margin-top:14px" href="https://www.google.com/maps/search/?api=1&query=Sector+9+Rohini+New+Delhi" target="_blank" rel="noopener">Open in Google Maps</a>
          </div>
          <div class="panel">
            <h3>Who to ask</h3>
            ${tableOf([
      { label: "Department", cell: (r) => `<b>${r[0]}</b>` },
      { label: "In charge", cell: (r) => r[1] },
      { label: "Extension", cell: (r) => `<span class="tnum">${r[2]}</span>` }
    ], [["Admissions", "Mrs. Renu Malik", "101"], ["Accounts and fees", "Mr. J. P. Nagar", "104"],
    ["Transport", "Mr. Devender Solanki", "108"], ["Examination cell", "Dr. Prakash Iyer", "112"],
    ["Infirmary", "Sister Anita George", "115"], ["Counselling", "Ms. Shivani Kohli", "119"]])}
          </div>
        </div>
      </div>
    </div>`;
  }, function () {
    document.getElementById("cGo").onclick = async function () {
      const g = (id) => document.getElementById(id).value.trim();
      if (!g("cNm") || !g("cPh") || !g("cMs")) { A.toast("Add your name, mobile number and message."); return; }
      this.disabled = true;
      await A.submitRecord("enquiries", {
        name: g("cNm"), phone: g("cPh"), email: g("cEm"), department: g("cTo"),
        message: g("cMs"), sentOn: new Date().toISOString().slice(0, 10)
      }, "Message sent to " + g("cTo") + ".");
      this.disabled = false;
      ["cNm", "cPh", "cEm", "cMs"].forEach((id) => document.getElementById(id).value = "");
    };
  });

  /* ================= ADMIN ================= */
  let unlocked = false;
  A.route("/admin", "Admin console", function () {
    if (!unlocked) {
      return `<div class="shell">
        ${head("Admin console", "For office staff and class teachers. Enter the console PIN to continue.", "Home · Admin")}
        <div class="panel" style="max-width:420px">
          <div class="field"><label for="pin">Console PIN</label><input id="pin" type="password" placeholder="••••"></div>
          <button class="btn dark" id="pinGo" style="margin-top:14px">Unlock</button>
          <p class="hint" style="margin-top:12px">The PIN is set in <code>assets/config.js</code>. This gate keeps casual visitors out; it is not a substitute for restricting who can open your Apps Script deployment.</p>
        </div>
      </div>`;
    }
    return `<div class="shell">
      ${head("Admin console", "Add records, enter marks and act on pending applications.", "Home · Admin")}
      <div class="tabs" id="adTabs">
        <button class="on" data-t="new">Add a student</button>
        <button data-t="marks">Enter marks</button>
        <button data-t="apps">Applications</button>
        <button data-t="notice">Notices and events</button>
        <button data-t="sheet">Sheet setup</button>
      </div>
      <div id="adPane"></div>
    </div>`;
  }, function () {
    if (!unlocked) {
      const go = () => {
        if (document.getElementById("pin").value === String(window.CONFIG.ADMIN_PIN)) {
          unlocked = true; A.render();
        } else A.toast("That PIN is not right.");
      };
      document.getElementById("pinGo").onclick = go;
      document.getElementById("pin").onkeydown = (e) => { if (e.key === "Enter") go(); };
      return;
    }
    const pane = document.getElementById("adPane");
    document.querySelectorAll("#adTabs button").forEach((b) => b.onclick = () => {
      document.querySelectorAll("#adTabs button").forEach((x) => x.classList.toggle("on", x === b));
      draw(b.dataset.t);
    });

    function draw(t) {
      ({ new: newStudent, marks: marks, apps: apps, notice: notices, sheet: sheet }[t] || newStudent)();
    }

    function newStudent() {
      pane.innerHTML = `<div class="panel"><h3>Add a student to the rolls</h3>
        <p class="sub">Fields marked with an asterisk are required.</p>
        <div class="grid g4" style="gap:14px">
          <div class="field"><label for="nsName">Full name *</label><input id="nsName"></div>
          <div class="field"><label for="nsDob">Date of birth *</label><input id="nsDob" type="date"></div>
          <div class="field"><label for="nsGen">Gender</label><select id="nsGen"><option>Male</option><option>Female</option></select></div>
          <div class="field"><label for="nsBg">Blood group</label><select id="nsBg">${opts(["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"])}</select></div>
          <div class="field"><label for="nsC">Class *</label>${A.classSelect("nsC")}</div>
          <div class="field"><label for="nsS">Section</label><select id="nsS"></select></div>
          <div class="field"><label for="nsR">Roll number</label><input id="nsR" type="number" min="1"></div>
          <div class="field"><label for="nsH">House</label><select id="nsH">${opts(D().houses)}</select></div>
          <div class="field"><label for="nsF">Father's name *</label><input id="nsF"></div>
          <div class="field"><label for="nsFo">Father's occupation</label><input id="nsFo"></div>
          <div class="field"><label for="nsFp">Father's mobile *</label><input id="nsFp" inputmode="numeric"></div>
          <div class="field"><label for="nsFe">Father's email</label><input id="nsFe" type="email"></div>
          <div class="field"><label for="nsM">Mother's name</label><input id="nsM"></div>
          <div class="field"><label for="nsMo">Mother's occupation</label><input id="nsMo"></div>
          <div class="field"><label for="nsMp">Mother's mobile</label><input id="nsMp" inputmode="numeric"></div>
          <div class="field"><label for="nsE">Emergency contact</label><input id="nsE" inputmode="numeric"></div>
          <div class="field"><label for="nsPrev">Previous school</label><input id="nsPrev"></div>
          <div class="field"><label for="nsTr">Transport</label><select id="nsTr"><option>Own Transport</option>${opts(D().routes.map((r) => r.route))}</select></div>
          <div class="field"><label for="nsPin">Pincode</label><input id="nsPin" inputmode="numeric"></div>
          <div class="field"><label for="nsFee">Fee status</label><select id="nsFee"><option>Paid</option><option>Due</option></select></div>
        </div>
        <div class="field" style="margin-top:14px"><label for="nsAddr">Address</label><textarea id="nsAddr"></textarea></div>
        <button class="btn dark" id="nsGo" style="margin-top:16px">Add to rolls</button>
      </div>`;
      const c = document.getElementById("nsC"), s = document.getElementById("nsS");
      const fill = () => { s.innerHTML = opts(Store.sections(c.value)); };
      c.onchange = fill; fill();

      document.getElementById("nsGo").onclick = async function () {
        const g = (id) => document.getElementById(id).value.trim();
        if (!g("nsName") || !g("nsDob") || !g("nsF") || !g("nsFp")) {
          A.toast("Name, date of birth, father's name and mobile number are required."); return;
        }
        const n = D().students.length + 1;
        const row = {
          id: "GVPS26" + String(1000 + n).slice(-4),
          admissionNo: "ADM-26-" + String(100 + n).slice(-3),
          name: g("nsName"), gender: g("nsGen"), dob: g("nsDob"),
          class: g("nsC"), section: g("nsS"), roll: +g("nsR") || (Store.inClass(g("nsC"), g("nsS")).length + 1),
          house: g("nsH"), bloodGroup: g("nsBg"),
          fatherName: g("nsF"), fatherOccupation: g("nsFo"), fatherPhone: g("nsFp"), fatherEmail: g("nsFe"),
          motherName: g("nsM"), motherOccupation: g("nsMo"), motherPhone: g("nsMp"), guardian: "Father",
          address: g("nsAddr"), city: "New Delhi", pincode: g("nsPin"),
          admissionDate: new Date().toISOString().slice(0, 10),
          previousSchool: g("nsPrev") || "—", transport: g("nsTr"), feeStatus: g("nsFee"),
          emergencyContact: g("nsE"), status: "Active", hobbies: [], achievements: "—"
        };
        this.disabled = true;
        D().attendance[row.id] = "P".repeat(D().attendanceDays.length);
        await A.submitRecord("students", row, row.name + " added to " + A.clsLabel(row.class) + " – " + row.section + ".");
        this.disabled = false;
        newStudent();
      };
    }

    function marks() {
      pane.innerHTML = `<div class="filters">
          <div class="field"><label for="mkE">Examination</label><select id="mkE">${opts(D().exams, null, (e) => ({ v: e.code, t: e.name }))}</select></div>
          <div class="field"><label for="mkC">Class</label>${A.classSelect("mkC")}</div>
          <div class="field"><label for="mkS">Section</label><select id="mkS"></select></div>
          <div class="field"><label for="mkSub">Subject</label><select id="mkSub"></select></div>
        </div>
        <div id="mkOut"></div>
        <button class="btn dark" id="mkSave" style="margin-top:18px">Save marks</button>`;
      const c = document.getElementById("mkC"), s = document.getElementById("mkS"), sub = document.getElementById("mkSub");
      const fillS = () => { s.innerHTML = opts(Store.sections(c.value)); };
      const fillSub = () => { sub.innerHTML = opts(Store.subjects(c.value, s.value)); };
      const show = () => {
        const list = Store.inClass(c.value, s.value);
        const max = (D().exams.find((e) => e.code === document.getElementById("mkE").value) || {}).maxMarks || 100;
        document.getElementById("mkOut").innerHTML = tableOf([
          { label: "Roll", num: true, cell: (st) => st.roll },
          { label: "Name", cell: (st) => esc(st.name) },
          {
            label: "Marks out of " + max, cell: (st) => {
              const cur = Store.resultsOf(st.id, document.getElementById("mkE").value).find((r) => r.subject === sub.value);
              return `<input style="width:90px;padding:5px 8px;border:1px solid var(--rule);border-radius:6px"
                type="number" min="0" max="${max}" data-m="${st.id}" value="${cur ? cur.marks : ""}">`;
            }
          }
        ], list, { emptyTitle: "No students here", emptyMsg: "Pick a class with students on roll." });
      };
      c.onchange = () => { fillS(); fillSub(); show(); };
      s.onchange = () => { fillSub(); show(); };
      sub.onchange = show;
      document.getElementById("mkE").onchange = show;
      fillS(); fillSub(); show();

      document.getElementById("mkSave").onclick = async function () {
        const ex = document.getElementById("mkE").value;
        const max = (D().exams.find((e) => e.code === ex) || {}).maxMarks || 100;
        const rows = [];
        document.querySelectorAll("[data-m]").forEach((i) => {
          if (i.value === "") return;
          const row = { studentId: i.dataset.m, exam: ex, subject: sub.value, marks: +i.value, max };
          rows.push(row);
          const old = D().results.find((r) => r.studentId === row.studentId && r.exam === ex && r.subject === sub.value);
          if (old) old.marks = row.marks; else D().results.push(row);
        });
        if (!rows.length) { A.toast("Enter at least one mark."); return; }
        this.disabled = true;
        const res = await Store.push("results", "append", rows).catch(() => ({ ok: false }));
        A.toast(res && res.ok ? rows.length + " marks saved to the sheet."
          : rows.length + " marks entered. Connect the Google Sheet to store them.");
        this.disabled = false;
      };
    }

    function apps() {
      pane.innerHTML = `<div class="panel"><h3>Leave applications</h3><div id="apL"></div></div>
        <div class="panel"><h3>Admission enquiries</h3><div id="apA"></div></div>`;
      const act = (list, item, status, key) => async () => {
        item.status = status;
        await Store.push(key, "update", item).catch(() => { });
        A.toast("Marked as " + status + ".");
        apps();
      };
      const L = D().leaves.slice(0, 15);
      document.getElementById("apL").innerHTML = tableOf([
        { label: "Student", cell: (l) => esc(l.name) },
        { label: "Dates", cell: (l) => A.fdate(l.from) + " – " + A.fdate(l.to) },
        { label: "Reason", cell: (l) => esc(l.reason) },
        { label: "Status", cell: (l) => A.statusPill(l.status) },
        {
          label: "Action", cell: (l) => l.status === "Pending"
            ? `<button class="btn sm line" data-lv-ok="${l.id}">Approve</button>
             <button class="btn sm line" data-lv-no="${l.id}">Reject</button>` : "—"
        }
      ], L);
      L.forEach((l) => {
        const ok = document.querySelector(`[data-lv-ok="${l.id}"]`), no = document.querySelector(`[data-lv-no="${l.id}"]`);
        if (ok) ok.onclick = act(L, l, "Approved", "leaves");
        if (no) no.onclick = act(L, l, "Rejected", "leaves");
      });

      const AD = D().admissions.slice(0, 15);
      document.getElementById("apA").innerHTML = tableOf([
        { label: "Applicant", cell: (a) => esc(a.name) },
        { label: "Class", cell: (a) => A.clsLabel(a.classApplied) },
        { label: "Parent", cell: (a) => esc(a.parent || "—") },
        { label: "Phone", cell: (a) => esc(a.phone) },
        { label: "Applied", cell: (a) => A.fdate(a.appliedOn) },
        { label: "Status", cell: (a) => A.statusPill(a.status) },
        { label: "Action", cell: (a) => `<button class="btn sm line" data-ad="${a.id}">Mark admitted</button>` }
      ], AD);
      AD.forEach((a) => {
        const b = document.querySelector(`[data-ad="${a.id}"]`);
        if (b) b.onclick = act(AD, a, "Admitted", "admissions");
      });
    }

    function notices() {
      pane.innerHTML = `<div class="grid g2" style="align-items:start">
        <div class="panel"><h3>Publish a notice</h3>
          <div class="field"><label for="ntT">Notice text</label><input id="ntT" placeholder="e.g. Half yearly datesheet released"></div>
          <div class="field" style="margin-top:12px"><label for="ntG">Tag</label><select id="ntG">
            ${opts(["Examination", "Fees", "Uniform", "Transport", "Event", "Admission", "Holiday", "Academics"])}</select></div>
          <button class="btn dark" id="ntGo" style="margin-top:14px">Publish notice</button>
        </div>
        <div class="panel"><h3>Add an event</h3>
          <div class="field"><label for="evT">Event name</label><input id="evT"></div>
          <div class="grid g2" style="gap:12px;margin-top:12px">
            <div class="field"><label for="evD">Date</label><input id="evD" type="date"></div>
            <div class="field"><label for="evTm">Time</label><input id="evTm" placeholder="10:00 AM"></div>
            <div class="field"><label for="evCat">Category</label><select id="evCat">${opts(["Cultural", "Sports", "Academic", "Assembly", "Meeting"])}</select></div>
            <div class="field"><label for="evV">Venue</label><input id="evV" placeholder="Auditorium"></div>
          </div>
          <div class="field" style="margin-top:12px"><label for="evCl">Classes</label><input id="evCl" placeholder="e.g. 6 – 12 or All"></div>
          <button class="btn dark" id="evGo" style="margin-top:14px">Add to calendar</button>
        </div>
      </div>
      <div class="panel"><h3>Current notices</h3>
        ${tableOf([
        { label: "Date", cell: (n) => A.fdate(n.date) },
        { label: "Tag", cell: (n) => `<span class="pill info">${esc(n.tag)}</span>` },
        { label: "Notice", cell: (n) => esc(n.title) }
      ], D().notices)}</div>`;

      document.getElementById("ntGo").onclick = async function () {
        const t = document.getElementById("ntT").value.trim();
        if (!t) { A.toast("Write the notice first."); return; }
        this.disabled = true;
        await A.submitRecord("notices", { date: new Date().toISOString().slice(0, 10), tag: document.getElementById("ntG").value, title: t }, "Notice published.");
        this.disabled = false; notices();
      };
      document.getElementById("evGo").onclick = async function () {
        const g = (id) => document.getElementById(id).value.trim();
        if (!g("evT") || !g("evD")) { A.toast("Add the event name and date."); return; }
        this.disabled = true;
        await A.submitRecord("events", {
          date: g("evD"), title: g("evT"), category: g("evCat"),
          venue: g("evV") || "School campus", classes: g("evCl") || "All", time: g("evTm") || "—"
        }, "Event added to the calendar.");
        D().events.sort((a, b) => a.date.localeCompare(b.date));
        this.disabled = false; notices();
      };
    }

    function sheet() {
      const on = !!(window.CONFIG.API_URL || "").trim();
      pane.innerHTML = `<div class="note ${on ? "good" : ""}">
          ${on ? "A web-app URL is configured. If the footer says the sheet is unreachable, re-deploy the script with access set to \"Anyone\"."
          : "No web-app URL configured. The site is showing the 100 sample records and nothing is being saved."}
        </div>
        <div class="panel"><h3>Connect your Google Sheet</h3>
          <ol style="padding-left:20px;line-height:2;font-size:.93rem">
            <li>Create a new Google Sheet and name it <b>GVPS Database</b>.</li>
            <li>Open <b>Extensions → Apps Script</b>, delete the sample code and paste in everything from <code>backend/Code.gs</code>.</li>
            <li>Run the <code>setupSheets</code> function once. It creates every tab with the right headers.</li>
            <li>Click <b>Deploy → New deployment → Web app</b>. Set <b>Execute as: Me</b> and <b>Who has access: Anyone</b>.</li>
            <li>Copy the deployment URL and paste it into <code>API_URL</code> in <code>assets/config.js</code>.</li>
            <li>Push to GitHub. Forms now write to the sheet and the site reads from it on load.</li>
          </ol>
          <p class="hint">Tabs the script creates: students, teachers, attendance, results, material, leaves, admissions, notices, events, papers, enquiries.</p>
        </div>
        <div class="panel"><h3>What is stored where</h3>
          ${tableOf([
          { label: "Page", cell: (r) => r[0] },
          { label: "Sheet tab", cell: (r) => `<code>${r[1]}</code>` },
          { label: "Writes", cell: (r) => r[2] }
        ], [
          ["Admission form", "admissions", "New enquiry rows"],
          ["Leave application", "leaves", "New leave rows, status updates"],
          ["Attendance roll call", "attendance", "One row per child per day"],
          ["Enter marks", "results", "One row per child per subject"],
          ["Upload material", "material", "New material rows"],
          ["Add a student", "students", "New student rows"],
          ["Notices and events", "notices, events", "New rows"],
          ["Contact form", "enquiries", "New message rows"]
        ])}
        </div>`;
    }
    draw("new");
  });
})();

/* ---------------------------------------------------------------
   Core: helpers, router, shared UI, and the first group of pages.
   --------------------------------------------------------------- */
const App = (function () {
  const D = () => Store.data;
  const S = () => Store.data.school;

  /* ---------- helpers ---------- */
  const esc = (v) => String(v == null ? "" : v)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function fdate(iso) {
    if (!iso) return "—";
    const d = new Date(iso + (iso.length === 10 ? "T00:00:00" : ""));
    if (isNaN(d)) return iso;
    return d.getDate() + " " + MON[d.getMonth()] + " " + d.getFullYear();
  }
  function fshort(iso) {
    const d = new Date(iso + "T00:00:00");
    return isNaN(d) ? iso : d.getDate() + "/" + (d.getMonth() + 1);
  }
  const inr = (n) => "₹" + Number(n).toLocaleString("en-IN");
  const initials = (name) => name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const roman = (c) => ({ "1": "I", "2": "II", "3": "III", "4": "IV", "5": "V", "6": "VI", "7": "VII", "8": "VIII", "9": "IX", "10": "X", "11": "XI", "12": "XII" }[c] || c);
  const clsLabel = (c) => (c === "LKG" || c === "UKG") ? c : "Class " + roman(c);

  /* A real admission number from the current data, used as an example in
     lookup fields so a first-time visitor sees a filled record immediately. */
  function sampleAdm() {
    const list = D().students;
    return list.length ? list[Math.floor(list.length / 2)].admissionNo : "ADM-26-001";
  }

  function statusPill(s) {
    const k = String(s).toLowerCase();
    const cls = /approved|admitted|paid|present|completed/.test(k) ? "ok"
      : /rejected|due|absent/.test(k) ? "no"
        : /pending|waitlist|upcoming|scheduled/.test(k) ? "wait" : "info";
    return `<span class="pill ${cls}">${esc(s)}</span>`;
  }

  function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove("show"), 3400);
  }

  function modal(title, html) {
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalBody").innerHTML = html;
    document.getElementById("modal").classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    document.getElementById("modal").classList.remove("open");
    document.body.style.overflow = "";
  }

  function options(list, sel, mapper) {
    return list.map((v) => {
      const val = mapper ? mapper(v) : { v: v, t: v };
      return `<option value="${esc(val.v)}"${val.v === sel ? " selected" : ""}>${esc(val.t)}</option>`;
    }).join("");
  }

  function classSelect(id, withAll) {
    return `<select id="${id}">${withAll ? '<option value="">All classes</option>' : ""}${options(D().classes, null, (c) => ({ v: c, t: clsLabel(c) }))}</select>`;
  }

  /* Persist a record: sends to Sheets when connected, otherwise keeps it
     in the browser for this visit only. */
  async function submitRecord(sheet, row, okMsg) {
    D()[sheet] = D()[sheet] || [];
    D()[sheet].unshift(row);
    const res = await Store.push(sheet, "append", row).catch(() => ({ ok: false }));
    if (res && res.ok) toast(okMsg + " Saved to the school sheet.");
    else toast(okMsg + " Connect the Google Sheet to store it permanently.");
    return res;
  }

  /* ---------- shared page furniture ---------- */
  function head(title, sub, crumb) {
    return `<div class="crumb">${esc(crumb || "Home")}</div>
      <div class="sec-head"><h2>${esc(title)}</h2>${sub ? `<p>${esc(sub)}</p>` : ""}</div>`;
  }

  function tableOf(cols, rows, opts) {
    opts = opts || {};
    if (!rows.length) return emptyState(opts.emptyTitle || "Nothing here yet", opts.emptyMsg || "Change the filters above to see records.");
    return `<div class="tablewrap"><table class="reg">
      <thead><tr>${cols.map((c) => `<th${c.num ? ' class="num"' : ""}>${esc(c.label)}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((r) => `<tr>${cols.map((c) => `<td${c.num ? ' class="num"' : ""}>${c.cell(r)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table></div>`;
  }

  function emptyState(title, msg) {
    return `<div class="empty"><b>${esc(title)}</b>${esc(msg)}</div>`;
  }

  /* ---------- hero artwork ---------- */
  function heroArt() {
    /* Swap this whole <svg> for <img src="assets/school.jpg" alt=""> to use a
       photograph of your own building. */
    return `<svg viewBox="0 0 1200 620" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of the school building">
      <rect width="1200" height="620" fill="#0B1B31"/>
      <circle cx="980" cy="120" r="70" fill="#1C3A5E" opacity=".7"/>
      <g fill="#1B3A5E">
        <rect x="120" y="250" width="300" height="300"/><rect x="780" y="250" width="300" height="300"/>
      </g>
      <rect x="420" y="180" width="360" height="370" fill="#22456C"/>
      <path d="M400 190 600 90 800 190z" fill="#C08D2B"/>
      <rect x="560" y="230" width="80" height="90" rx="40" fill="#0B1B31"/>
      <circle cx="600" cy="270" r="26" fill="#E8B84B" opacity=".9"/>
      <path d="M600 270v-16M600 270l11 8" stroke="#0B1B31" stroke-width="3" stroke-linecap="round"/>
      <rect x="596" y="40" width="4" height="55" fill="#B07C22"/>
      <path d="M600 44h46l-12 12 12 12h-46z" fill="#DE7328"/>
      <g fill="#0B1B31">
        <rect x="470" y="360" width="46" height="70" rx="23"/><rect x="540" y="360" width="46" height="70" rx="23"/>
        <rect x="610" y="360" width="46" height="70" rx="23"/><rect x="680" y="360" width="46" height="70" rx="23"/>
      </g>
      <g fill="#0B1B31">
        <rect x="150" y="300" width="46" height="60"/><rect x="220" y="300" width="46" height="60"/>
        <rect x="290" y="300" width="46" height="60"/><rect x="150" y="400" width="46" height="60"/>
        <rect x="220" y="400" width="46" height="60"/><rect x="290" y="400" width="46" height="60"/>
        <rect x="810" y="300" width="46" height="60"/><rect x="880" y="300" width="46" height="60"/>
        <rect x="950" y="300" width="46" height="60"/><rect x="810" y="400" width="46" height="60"/>
        <rect x="880" y="400" width="46" height="60"/><rect x="950" y="400" width="46" height="60"/>
      </g>
      <rect x="565" y="470" width="70" height="80" rx="6" fill="#B07C22"/>
      <rect x="0" y="548" width="1200" height="72" fill="#0A1728"/>
      <g fill="#16304F">
        <circle cx="90" cy="500" r="46"/><rect x="84" y="500" width="12" height="52"/>
        <circle cx="1120" cy="490" r="52"/><rect x="1114" y="490" width="12" height="62"/>
      </g>
    </svg>`;
  }

  /* ================= HOME ================= */
  function pageHome() {
    const s = S();
    const upcoming = D().events.slice(0, 4);
    const notices = D().notices.slice(0, 6);
    const strength = D().students.length;
    const avgAtt = Math.round(D().students.reduce((a, st) => a + Store.attendanceRate(st.id), 0) / strength);

    return `
    <section class="hero">
      <div class="bg">${heroArt()}</div>
      <div class="shell">
        <span class="estd">Established ${s.estd} · ${esc(s.affiliation)}</span>
        <h1>A school where every child is known by name</h1>
        <div class="motto">${esc(s.motto)}<small>${esc(s.mottoEn)}</small></div>
        <p class="lede">Global Vision Public School teaches ${strength} children from LKG to Class XII in Rohini. Parents can check attendance, results, timetables and homework here — the same records the class teacher keeps.</p>
        <div class="cta">
          <a class="btn" href="#/admission">Apply for admission</a>
          <a class="btn ghost" href="#/attendance">Check attendance</a>
        </div>
        <div class="facts">
          <div><b>${strength}</b><span>Students on roll</span></div>
          <div><b>${D().teachers.length}</b><span>Teachers and educators</span></div>
          <div><b>${avgAtt}%</b><span>Average attendance this month</span></div>
          <div><b>1:18</b><span>Teacher to student ratio</span></div>
        </div>
      </div>
    </section>

    <div class="board">
      <div class="shell">
        <b>Notice board</b>
        <div class="track"><ul>${[...notices, ...notices].map((n) => `<li><i>${esc(n.tag)}</i>${esc(n.title)}</li>`).join("")}</ul></div>
      </div>
    </div>

    <div class="shell" style="padding-top:52px">
      <div class="grid g2" style="gap:26px;align-items:start">
        <div>
          <div class="sec-head"><h2>What is happening this term</h2></div>
          <div class="panel" style="padding:6px 24px 18px">
            ${upcoming.map(eventRow).join("")}
          </div>
          <a class="btn line" href="#/events">See the full calendar</a>
        </div>
        <div>
          <div class="sec-head"><h2>Circulars for parents</h2></div>
          <div class="panel" style="padding:6px 24px 18px">
            ${notices.map((n) => `<div class="evrow" style="gap:12px">
              <span class="pill info" style="flex:0 0 auto">${esc(n.tag)}</span>
              <div><h4 style="font-size:.96rem">${esc(n.title)}</h4>
              <div class="m">${fdate(n.date)}</div></div></div>`).join("")}
          </div>
        </div>
      </div>

      <div class="sec-head" style="margin-top:46px"><h2>Everything a parent usually phones the office about</h2>
        <p>Each of these opens the real record, not a brochure page.</p></div>
      <div class="grid g4">
        ${[
        ["Attendance register", "Day by day for every child, marked by the class teacher.", "#/attendance"],
        ["Results and mark sheets", "Subject-wise marks, grades and a printable report card.", "#/exams"],
        ["Class timetable", "Period by period with the teacher taking each class.", "#/timetable"],
        ["Study material", "Notes, worksheets, syllabus and sample papers by class.", "#/material"],
        ["Leave application", "Apply for a child's leave and track its status.", "#/leave"],
        ["Student ID card", "Generate and print a card for any child on roll.", "#/idcard"],
        ["Fees and transport", "Class-wise fee heads and all six bus routes.", "#/fees"],
        ["Uniform and timings", "Summer and winter dress, and gate timings by wing.", "#/uniform"]
      ].map((c) => `<a class="card" href="${c[2]}" style="text-decoration:none;color:inherit;display:block">
          <h4>${c[0]}</h4><p>${c[1]}</p></a>`).join("")}
      </div>

      <div class="sec-head" style="margin-top:46px"><h2>On the campus</h2></div>
      <div class="grid g4">
        ${D().facilities.map((f) => `<div class="card"><h4>${esc(f.name)}</h4><p>${esc(f.detail)}</p></div>`).join("")}
      </div>
    </div>`;
  }

  function eventRow(e) {
    const d = new Date(e.date + "T00:00:00");
    return `<div class="evrow">
      <div class="evdate"><b>${d.getDate()}</b><span>${MON[d.getMonth()].toUpperCase()}</span></div>
      <div style="flex:1">
        <h4>${esc(e.title)}</h4>
        <div class="m">${esc(e.category)} · ${esc(e.venue)} · ${esc(e.time)} · ${esc(e.classes)}</div>
      </div>
    </div>`;
  }

  /* ================= ABOUT ================= */
  function pageAbout() {
    const s = S();
    return `<div class="shell">
      ${head("About the school", "Founded in " + s.estd + " as a fourteen-room primary school, Global Vision now runs two sections in every class from LKG to XII.", "Home · About")}
      <div class="grid g2" style="align-items:start">
        <div class="panel">
          <h3>Our approach</h3>
          <p class="sub">What the classroom actually looks like</p>
          <p>Classes are capped at 34 children so that a teacher can finish a round of the room in one period. Every child belongs to one of four houses — ${D().houses.join(", ")} — which run their own assemblies, quizzes and sports fixtures through the year.</p>
          <p>Pre-primary works on play, phonics and motor skills with no written examination. From Class I the school follows the CBSE scheme of studies, with continuous assessment across two terms and a written examination at the end of each.</p>
          <p style="margin:0">Classes XI and XII offer Science and Commerce streams, with Applied Mathematics and Entrepreneurship available as electives.</p>
        </div>
        <div>
          <div class="panel">
            <h3>School leadership</h3>
            <dl class="facts" style="grid-template-columns:1fr">
              <div><dt>Principal</dt><dd>${esc(s.principal)}</dd></div>
              <div><dt>Vice Principal</dt><dd>${esc(s.vicePrincipal)}</dd></div>
              <div><dt>Affiliation</dt><dd>${esc(s.affiliation)}</dd></div>
              <div style="border:0"><dt>Academic session</dt><dd>${esc(s.session)}</dd></div>
            </dl>
          </div>
          <div class="panel">
            <h3>Wings and strength</h3>
            <div class="grid g2" style="gap:12px">
              ${[["Pre-primary", "LKG – UKG"], ["Primary", "I – V"], ["Middle", "VI – VIII"], ["Senior", "IX – XII"]]
        .map((w) => {
          const n = D().students.filter((st) => wingOf(st.class) === w[0]).length;
          return `<div class="stat"><b>${n}</b><span>${w[0]} · ${w[1]}</span></div>`;
        }).join("")}
            </div>
          </div>
        </div>
      </div>

      <div class="sec-head" style="margin-top:36px"><h2>Facilities</h2></div>
      <div class="grid g3">
        ${D().facilities.map((f) => `<div class="card"><h4>${esc(f.name)}</h4><p>${esc(f.detail)}</p></div>`).join("")}
      </div>
    </div>`;
  }

  function wingOf(c) {
    if (c === "LKG" || c === "UKG") return "Pre-primary";
    const n = +c;
    return n <= 5 ? "Primary" : n <= 8 ? "Middle" : "Senior";
  }

  /* ================= STUDENTS ================= */
  function pageStudents() {
    return `<div class="shell">
      ${head("Student records", "Every child on roll, with full bio-data, parent details, attendance and results on one card.", "Home · Students")}
      <div class="filters">
        <div class="field"><label for="stCls">Class</label>${classSelect("stCls", true)}</div>
        <div class="field"><label for="stSec">Section</label><select id="stSec"><option value="">All</option></select></div>
        <div class="field"><label for="stHouse">House</label><select id="stHouse"><option value="">All houses</option>${options(D().houses)}</select></div>
        <div class="field grow"><label for="stQ">Search by name, admission number or father's name</label><input id="stQ" placeholder="e.g. Aarav, ${sampleAdm()}, Rakesh"></div>
      </div>
      <div id="stStats" class="grid g4" style="margin-bottom:18px"></div>
      <div id="stTable"></div>
    </div>`;
  }

  function studentsAfter() {
    const cls = document.getElementById("stCls"), sec = document.getElementById("stSec"),
      house = document.getElementById("stHouse"), q = document.getElementById("stQ");

    function fillSections() {
      const list = cls.value ? Store.sections(cls.value) : [];
      sec.innerHTML = '<option value="">All</option>' + options(list);
    }
    function draw() {
      const term = q.value.trim().toLowerCase();
      const rows = D().students.filter((s) =>
        (!cls.value || s.class === cls.value) &&
        (!sec.value || s.section === sec.value) &&
        (!house.value || s.house === house.value) &&
        (!term || [s.name, s.admissionNo, s.id, s.fatherName, s.motherName].join(" ").toLowerCase().includes(term))
      );
      const boys = rows.filter((s) => s.gender === "Male").length;
      const due = rows.filter((s) => s.feeStatus === "Due").length;
      const avg = rows.length ? Math.round(rows.reduce((a, s) => a + Store.attendanceRate(s.id), 0) / rows.length) : 0;
      document.getElementById("stStats").innerHTML =
        `<div class="stat"><b>${rows.length}</b><span>Students listed</span></div>
         <div class="stat"><b>${boys} / ${rows.length - boys}</b><span>Boys / girls</span></div>
         <div class="stat"><b>${avg}%</b><span>Average attendance</span></div>
         <div class="stat"><b>${due}</b><span>Fee payment due</span></div>`;

      document.getElementById("stTable").innerHTML = tableOf([
        { label: "Admission no.", cell: (s) => `<span class="tnum">${esc(s.admissionNo)}</span>` },
        { label: "Name", cell: (s) => `<button class="linkish" data-open="${esc(s.id)}">${esc(s.name)}</button>` },
        { label: "Class", cell: (s) => `${clsLabel(s.class)} – ${esc(s.section)}` },
        { label: "Roll", num: true, cell: (s) => s.roll },
        { label: "Father", cell: (s) => esc(s.fatherName) },
        { label: "Contact", cell: (s) => `<span class="tnum">${esc(s.fatherPhone)}</span>` },
        { label: "House", cell: (s) => esc(s.house) },
        { label: "Attendance", num: true, cell: (s) => Store.attendanceRate(s.id) + "%" },
        { label: "Fees", cell: (s) => statusPill(s.feeStatus) }
      ], rows, { emptyTitle: "No student matches that", emptyMsg: "Clear the search box or pick a different class." });

      document.querySelectorAll("[data-open]").forEach((b) =>
        b.onclick = () => openStudent(b.getAttribute("data-open")));
    }
    cls.onchange = () => { fillSections(); draw(); };
    [sec, house].forEach((el) => el.onchange = draw);
    q.oninput = draw;
    draw();
  }

  function openStudent(id) {
    const s = Store.student(id);
    if (!s) return;
    const att = Store.attendanceOf(id);
    const present = (att.match(/P/g) || []).length, absent = (att.match(/A/g) || []).length, leave = (att.match(/L/g) || []).length;
    const res = Store.resultsOf(id, "UT1");
    const total = res.reduce((a, r) => a + r.marks, 0), max = res.reduce((a, r) => a + r.max, 0);

    const fact = (t, v) => `<div><dt>${esc(t)}</dt><dd>${esc(v)}</dd></div>`;

    modal(s.name, `
      <div class="profile-head">
        <div class="avatar">${initials(s.name)}</div>
        <div style="flex:1">
          <h3 style="margin:0">${esc(s.name)}</h3>
          <div class="hint">${clsLabel(s.class)} – ${esc(s.section)} · Roll ${s.roll} · ${esc(s.house)} House · Admission ${esc(s.admissionNo)}</div>
        </div>
        <a class="btn line sm" href="#/idcard" onclick="App.closeModal()">ID card</a>
      </div>

      <div class="grid g4" style="margin-bottom:20px">
        <div class="stat"><b>${Store.attendanceRate(id)}%</b><span>Attendance</span></div>
        <div class="stat"><b>${present}</b><span>Days present</span></div>
        <div class="stat"><b>${absent + leave}</b><span>Absent + leave</span></div>
        <div class="stat"><b>${max ? Math.round(total / max * 100) : "—"}%</b><span>Unit Test I</span></div>
      </div>

      <h4 style="font-family:var(--serif);margin:0 0 12px">Personal record</h4>
      <dl class="facts" style="margin-bottom:24px">
        ${fact("Student ID", s.id)}${fact("Date of birth", fdate(s.dob))}
        ${fact("Gender", s.gender)}${fact("Blood group", s.bloodGroup)}
        ${fact("Date of admission", fdate(s.admissionDate))}${fact("Previous school", s.previousSchool)}
        ${fact("Transport", s.transport)}${fact("Status", s.status)}
        ${fact("Interests", s.hobbies.join(", "))}${fact("Achievement", s.achievements)}
      </dl>

      <h4 style="font-family:var(--serif);margin:0 0 12px">Parents and address</h4>
      <dl class="facts" style="margin-bottom:24px">
        ${fact("Father", s.fatherName)}${fact("Occupation", s.fatherOccupation)}
        ${fact("Father's mobile", s.fatherPhone)}${fact("Email", s.fatherEmail)}
        ${fact("Mother", s.motherName)}${fact("Occupation", s.motherOccupation)}
        ${fact("Mother's mobile", s.motherPhone)}${fact("Emergency contact", s.emergencyContact)}
        ${fact("Guardian", s.guardian)}${fact("Address", s.address + ", " + s.city + " – " + s.pincode)}
      </dl>

      <h4 style="font-family:var(--serif);margin:0 0 12px">Attendance, last 30 school days</h4>
      <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:24px">
        ${att.split("").map((m, i) => `<span class="mk ${m}" title="${fdate(D().attendanceDays[i])}">${m}</span>`).join("")}
      </div>

      <h4 style="font-family:var(--serif);margin:0 0 12px">Unit Test I marks</h4>
      ${res.length ? tableOf([
      { label: "Subject", cell: (r) => esc(r.subject) },
      { label: "Marks", num: true, cell: (r) => r.marks },
      { label: "Out of", num: true, cell: (r) => r.max },
      { label: "Grade", cell: (r) => grade(r.marks / r.max * 100) }
    ], res) : emptyState("No marks recorded", "Pre-primary classes are assessed by observation, not written tests.")}
    `);
  }

  function grade(pc) {
    const g = pc >= 91 ? "A1" : pc >= 81 ? "A2" : pc >= 71 ? "B1" : pc >= 61 ? "B2" : pc >= 51 ? "C1" : pc >= 41 ? "C2" : pc >= 33 ? "D" : "E";
    return `<span class="pill ${pc >= 61 ? "ok" : pc >= 33 ? "wait" : "no"}">${g}</span>`;
  }

  /* ================= ADMISSION ================= */
  function pageAdmission() {
    return `<div class="shell">
      ${head("Admission", "Registration for the 2027–28 session opens on 1 October. Fill the form below and the office will call you within two working days.", "Home · Admission")}

      <div class="grid g2" style="align-items:start">
        <div class="panel">
          <h3>Registration form</h3>
          <p class="sub">All fields marked with an asterisk are required.</p>
          <div class="grid g2" style="gap:14px">
            <div class="field"><label for="adName">Child's full name *</label><input id="adName" placeholder="As written on the birth certificate"></div>
            <div class="field"><label for="adDob">Date of birth *</label><input id="adDob" type="date"></div>
            <div class="field"><label for="adClass">Class applied for *</label>${classSelect("adClass")}</div>
            <div class="field"><label for="adGender">Gender</label><select id="adGender"><option>Male</option><option>Female</option><option>Prefer not to say</option></select></div>
            <div class="field"><label for="adParent">Parent or guardian's name *</label><input id="adParent"></div>
            <div class="field"><label for="adPhone">Mobile number *</label><input id="adPhone" inputmode="numeric" placeholder="10 digits"></div>
            <div class="field"><label for="adEmail">Email</label><input id="adEmail" type="email"></div>
            <div class="field"><label for="adPrev">Present school</label><input id="adPrev" placeholder="Write 'None' for LKG"></div>
          </div>
          <div class="field" style="margin-top:14px"><label for="adAddr">Residential address</label><textarea id="adAddr" placeholder="House, block, locality, pincode"></textarea></div>
          <div class="field" style="margin-top:14px"><label for="adNote">Anything the school should know</label><textarea id="adNote" placeholder="Sibling already studying here, transport needed, learning support, and so on"></textarea></div>
          <button class="btn dark" id="adSubmit" style="margin-top:18px">Send registration</button>
          <p class="hint" style="margin-top:10px">Submitting this form does not confirm a seat. Seats are offered after an interaction with the child and the parents.</p>
        </div>

        <div>
          <div class="panel">
            <h3>How admission works</h3>
            <ol style="padding-left:20px;margin:0;font-size:.92rem;line-height:1.9">
              <li>Fill the registration form and pay the ${inr(1200)} registration fee at the office.</li>
              <li>Bring the birth certificate, Aadhaar of the child, four photographs, and the transfer certificate from the present school.</li>
              <li>The school calls you for an interaction — a play session for pre-primary, a written assessment in English, Hindi and Maths for Class I upward.</li>
              <li>Selected names are put up on the notice board and sent by SMS.</li>
              <li>Deposit the admission fee within seven days to confirm the seat.</li>
            </ol>
          </div>
          <div class="panel">
            <h3>Age on 31 March 2027</h3>
            ${tableOf([
      { label: "Class", cell: (r) => r[0] }, { label: "Minimum age", cell: (r) => r[1] }
    ], [["LKG", "3 years 6 months"], ["UKG", "4 years 6 months"], ["Class I", "5 years 6 months"], ["Class II onward", "One year more per class"]])}
          </div>
          <div class="panel">
            <h3>Recent enquiries</h3>
            <p class="sub">Sample of what lands in the office register</p>
            ${tableOf([
      { label: "Name", cell: (r) => esc(r.name) },
      { label: "Class", cell: (r) => clsLabel(r.classApplied) },
      { label: "Applied", cell: (r) => fdate(r.appliedOn) },
      { label: "Status", cell: (r) => statusPill(r.status) }
    ], D().admissions.slice(0, 8))}
          </div>
        </div>
      </div>
    </div>`;
  }

  function admissionAfter() {
    document.getElementById("adSubmit").onclick = async function () {
      const g = (id) => document.getElementById(id).value.trim();
      if (!g("adName") || !g("adParent") || !g("adPhone") || !g("adDob")) {
        toast("Fill the child's name, date of birth, parent's name and mobile number.");
        return;
      }
      if (!/^[0-9]{10}$/.test(g("adPhone"))) { toast("Enter a 10-digit mobile number."); return; }
      this.disabled = true; this.textContent = "Sending…";
      await submitRecord("admissions", {
        id: "ENQ" + Date.now().toString().slice(-6),
        name: g("adName"), dob: g("adDob"), classApplied: g("adClass"),
        gender: g("adGender"), parent: g("adParent"), phone: g("adPhone"),
        email: g("adEmail"), previousSchool: g("adPrev"), address: g("adAddr"),
        note: g("adNote"), appliedOn: new Date().toISOString().slice(0, 10),
        status: "Enquiry received"
      }, "Registration received for " + g("adName") + ".");
      this.disabled = false; this.textContent = "Send registration";
      ["adName", "adParent", "adPhone", "adEmail", "adPrev", "adAddr", "adNote"].forEach((id) => document.getElementById(id).value = "");
      go("#/admission");
    };
  }

  /* ================= ROUTER ================= */
  const routes = {};
  function route(path, title, render, after) { routes[path] = { title, render, after }; }

  route("/home", "Home", pageHome);
  route("/about", "About", pageAbout);
  route("/students", "Students", pageStudents, studentsAfter);
  route("/admission", "Admission", pageAdmission, admissionAfter);

  function go(hash) {
    location.hash = hash;
    render();
  }

  function render() {
    const path = (location.hash || "#/home").replace("#", "");
    const r = routes[path] || routes["/home"];
    const main = document.getElementById("main");
    main.innerHTML = `<div class="page on${path === "/home" ? " home" : ""}">${r.render()}</div>`;
    document.title = r.title + " — Global Vision Public School";
    document.querySelectorAll(".nav a").forEach((a) =>
      a.classList.toggle("on", a.getAttribute("href") === "#" + path));
    document.getElementById("nav").classList.remove("open");
    document.getElementById("moreMenu").classList.remove("open");
    window.scrollTo({ top: 0 });
    if (r.after) r.after();
  }

  async function start() {
    document.getElementById("burger").onclick = function () {
      const n = document.getElementById("nav");
      const bar = document.querySelector(".topbar").getBoundingClientRect();
      n.style.setProperty("--drawer-top", Math.max(0, bar.bottom) + "px");
      n.classList.toggle("open");
      this.setAttribute("aria-expanded", n.classList.contains("open"));
    };
    document.getElementById("moreBtn").onclick = (e) => {
      e.stopPropagation();
      document.getElementById("moreMenu").classList.toggle("open");
    };
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".more")) document.getElementById("moreMenu").classList.remove("open");
    });
    document.getElementById("modalClose").onclick = closeModal;
    document.getElementById("modal").onclick = (e) => { if (e.target.id === "modal") closeModal(); };
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
    window.addEventListener("hashchange", render);

    render();
    await Store.boot();
    if (Store.live) render();
  }

  return {
    start, route, render, go, esc, fdate, fshort, inr, initials, roman, clsLabel,
    statusPill, toast, modal, closeModal, options, classSelect, tableOf, emptyState, sampleAdm,
    head, grade, wingOf, submitRecord, openStudent, eventRow, D, S
  };
})();

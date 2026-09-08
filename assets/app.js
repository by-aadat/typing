/* ---------------------------------------------------------------
   Core: helpers, router, shell wiring, and the first group of pages.
   --------------------------------------------------------------- */
const App = (function () {
  const D = () => Store.data;
  const S = () => Store.data.school;
  const E = () => window.SEED_EXTRA;

  /* ---------- helpers ---------- */
  const esc = (v) => String(v == null ? "" : v)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function fdate(iso) {
    if (!iso) return "—";
    const d = new Date(iso + (String(iso).length === 10 ? "T00:00:00" : ""));
    if (isNaN(d)) return iso;
    return d.getDate() + " " + MON[d.getMonth()] + " " + d.getFullYear();
  }
  function fshort(iso) {
    const d = new Date(iso + "T00:00:00");
    return isNaN(d) ? iso : d.getDate() + "/" + (d.getMonth() + 1);
  }
  const inr = (n) => "₹" + Number(n || 0).toLocaleString("en-IN");
  const initials = (name) => String(name || "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const roman = (c) => ({ "1": "I", "2": "II", "3": "III", "4": "IV", "5": "V", "6": "VI", "7": "VII", "8": "VIII", "9": "IX", "10": "X", "11": "XI", "12": "XII" }[c] || c);
  const clsLabel = (c) => (c === "LKG" || c === "UKG") ? c : "Class " + roman(c);

  function sampleAdm() {
    const list = D().students;
    return list.length ? list[Math.floor(list.length / 2)].admissionNo : "ADM-26-001";
  }

  function statusPill(s) {
    const k = String(s).toLowerCase();
    const cls = /approved|admitted|paid|present|completed|confirmed|selected/.test(k) ? "ok"
      : /rejected|due|absent|overdue|not interested/.test(k) ? "no"
        : /pending|waitlist|upcoming|scheduled|enquiry|contacted/.test(k) ? "wait" : "info";
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
    if (window.I18N) I18N.apply();
  }
  function closeModal() {
    document.getElementById("modal").classList.remove("open");
    document.body.style.overflow = "";
  }

  function options(list, sel, mapper) {
    return (list || []).map((v) => {
      const val = mapper ? mapper(v) : { v: v, t: v };
      return `<option value="${esc(val.v)}"${val.v === sel ? " selected" : ""}>${esc(val.t)}</option>`;
    }).join("");
  }

  function classSelect(id, withAll) {
    return `<select id="${id}">${withAll ? '<option value="">All classes</option>' : ""}${options(D().classes, null, (c) => ({ v: c, t: clsLabel(c) }))}</select>`;
  }

  async function submitRecord(sheet, row, okMsg) {
    D()[sheet] = D()[sheet] || [];
    D()[sheet].unshift(row);
    const res = await Store.push(sheet, "append", row).catch(() => ({ ok: false }));
    if (res && res.ok) toast(okMsg + " Saved to the school sheet.");
    else toast(okMsg + " Connect the Google Sheet to store it permanently.");
    return res;
  }

  /* ---------- page furniture ---------- */
  function head(title, sub, crumb) {
    return `<div class="crumb">${esc(crumb || "Home")}</div>
      <div class="sec-head"><h2>${esc(title)}</h2>${sub ? `<p>${esc(sub)}</p>` : ""}</div>`;
  }

  function tableOf(cols, rows, opt) {
    opt = opt || {};
    if (!rows || !rows.length) return emptyState(opt.emptyTitle || "Nothing here yet", opt.emptyMsg || "Change the filters above to see records.");
    return `<div class="tablewrap"><table class="reg">
      <thead><tr>${cols.map((c) => `<th${c.num ? ' class="num"' : ""}>${esc(c.label)}</th>`).join("")}</tr></thead>
      <tbody>${rows.map((r) => `<tr>${cols.map((c) => `<td${c.num ? ' class="num"' : ""}>${c.cell(r)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table></div>`;
  }

  function emptyState(title, msg) {
    return `<div class="empty"><b>${esc(title)}</b>${esc(msg)}</div>`;
  }

  function grade(pc) {
    const g = pc >= 91 ? "A1" : pc >= 81 ? "A2" : pc >= 71 ? "B1" : pc >= 61 ? "B2" : pc >= 51 ? "C1" : pc >= 41 ? "C2" : pc >= 33 ? "D" : "E";
    return `<span class="pill ${pc >= 61 ? "ok" : pc >= 33 ? "wait" : "no"}">${g}</span>`;
  }

  function wingOf(c) {
    if (c === "LKG" || c === "UKG") return "Pre-primary";
    const n = +c;
    return n <= 5 ? "Primary" : n <= 8 ? "Middle" : "Senior";
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

  /* ================= HOME ================= */
  function pageHome() {
    const s = S(), id = E().identity;
    const strength = D().students.length;
    const avgAtt = Math.round(D().students.reduce((a, st) => a + Store.attendanceRate(st.id), 0) / (strength || 1));
    const notices = D().notices.slice(0, 6);

    return `
    <section class="hero">
      <img class="bg" src="assets/images/hero-campus.jpg" alt="The Global Vision Public School campus, crest and main building" fetchpriority="high">
      <div class="shell">
        <span class="estd">Established ${s.estd} · ${esc(s.affiliation)}</span>
        <h1>${esc(id.tagline)}</h1>
        <div class="motto">${esc(s.motto)}<small>${esc(s.mottoEn)}</small></div>
        <p class="lede">A co-educational CBSE school in Sector 9, Rohini, teaching ${strength} children from LKG to Class XII. Parents can check attendance, homework, results and fees here — the same records the class teacher keeps.</p>
        <div class="cta">
          <a class="btn" href="#/admission">Apply for admission</a>
          <a class="btn ghost" href="#/campus">Explore our school</a>
        </div>
        <div class="facts">
          <div><b>${strength}</b><span>Students on roll</span></div>
          <div><b>${D().teachers.length}</b><span>Teachers and educators</span></div>
          <div><b>${avgAtt}%</b><span>Average attendance this month</span></div>
          <div><b>1:18</b><span>Teacher to student ratio</span></div>
        </div>
      </div>
    </section>

    <div class="admbar">
      <div class="shell">
        <div>
          <b>Admissions open for 2027–28</b>
          <span>Registration from 1 October · LKG to Class XI · Campus visits every Saturday, 10:00 AM to 12:00 noon</span>
        </div>
        <div class="admbtns">
          <a class="btn sm" href="#/admission">Register online</a>
          <a class="btn sm line" href="#/track">Track an application</a>
        </div>
      </div>
    </div>

    <div class="board">
      <div class="shell">
        <b>Notice board</b>
        <div class="track"><ul>${[...notices, ...notices].map((n) => `<li><i>${esc(n.tag)}</i>${esc(n.title)}</li>`).join("")}</ul></div>
      </div>
    </div>

    <div class="shell" style="padding-top:56px">
      <div class="split">
        <div>
          <div class="sec-head"><h2>About our school</h2></div>
          <p>Global Vision Public School opened in ${s.estd} on a one-acre campus in Sector 9, Rohini. We run two sections in every class from LKG to Class XII, capped at thirty-four children each, and follow the CBSE scheme of studies.</p>
          <p>A new school carries one advantage an old one has to work for: nothing here is done a certain way merely because it always has been. Every routine in this building was chosen on purpose.</p>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px">
            <a class="btn line sm" href="#/about">Read more</a>
            <a class="btn line sm" href="#/vision">Vision and mission</a>
            <a class="btn line sm" href="#/management">Management</a>
          </div>
        </div>
        <figure class="shot"><img src="assets/images/campus-aerial.jpg" alt="Aerial view of the school campus, playground and transport bay" loading="lazy">
          <figcaption>One acre in Sector 9 — playing field, transport bay and the academic block</figcaption></figure>
      </div>

      <div class="sec-head" style="margin-top:52px"><h2>Why parents choose us</h2></div>
      <div class="grid g3">
        ${E().whyChoose.map((w) => `<div class="card"><h4>${esc(w.title)}</h4><p>${esc(w.detail)}</p></div>`).join("")}
      </div>

      <div class="sec-head" style="margin-top:52px"><h2>Academics</h2>
        <p>Five stages, one continuous curriculum, assessed twice a term rather than once a year.</p></div>
      <div class="grid g5">
        ${E().stages.map((st) => `<a class="card" href="#/academics" style="text-decoration:none;color:inherit">
          <h4>${esc(st.stage)}</h4>
          <p style="margin-bottom:8px"><b>${esc(st.classes)}</b></p>
          <p>${esc(st.ages)}</p></a>`).join("")}
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px">
        <a class="btn line sm" href="#/subjects">Subjects by class</a>
        <a class="btn line sm" href="#/timetable">Timetable</a>
        <a class="btn line sm" href="#/calendar">Academic calendar</a>
        <a class="btn line sm" href="#/teachers">Faculty</a>
      </div>

      <div class="split rev" style="margin-top:56px">
        <figure class="shot"><img src="assets/images/entrance.jpg" alt="The school entrance and crest" loading="lazy">
          <figcaption>The main entrance on the Sector 9 approach road</figcaption></figure>
        <div>
          <div class="sec-head"><h2>Campus and facilities</h2></div>
          <p>Thirty-two smart classrooms, six laboratories, a library of 18,000 titles, an auditorium, a 200-metre track and a full-time infirmary.</p>
          <div class="grid g2" style="gap:12px;margin-top:16px">
            ${E().campus.slice(0, 6).map((c) => `<div style="border-left:3px solid var(--brass);padding-left:12px">
              <b style="font-size:.92rem">${esc(c.name)}</b></div>`).join("")}
          </div>
          <a class="btn line sm" style="margin-top:18px" href="#/campus">See the whole campus</a>
        </div>
      </div>

      <div class="quote">
        <div class="shell">
          <div style="display:flex;gap:22px;align-items:flex-start;flex-wrap:wrap">
            <div class="avatar" style="width:76px;height:76px;flex:0 0 76px;font-size:1.7rem;background:var(--brass);color:#1A1204">${initials(E().principal.name)}</div>
            <div style="flex:1;min-width:260px">
              <h3 style="color:#fff;font-size:1.5rem">${esc(E().principal.message[0])}</h3>
              <p style="color:#C3D2E2;margin:14px 0 0">${esc(E().principal.name)} · ${esc(E().principal.designation)}</p>
              <a class="btn ghost" style="margin-top:18px" href="#/principal">Read the full message</a>
            </div>
          </div>
        </div>
      </div>

      <div class="split" style="margin-top:56px">
        <div>
          <div class="sec-head"><h2>Student life</h2></div>
          <p>Eight clubs, twelve games and four houses. Games are compulsory to Class VIII, and every child belongs to a house from the day they join.</p>
          <div style="display:flex;flex-wrap:wrap;gap:7px;margin-top:16px">
            ${E().clubs.map((c) => `<span class="pill info">${esc(c.name)}</span>`).join("")}
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px">
            <a class="btn line sm" href="#/studentlife">Clubs and sports</a>
            <a class="btn line sm" href="#/events">Events calendar</a>
          </div>
        </div>
        <figure class="shot"><img src="assets/images/students.jpg" alt="Students on the school lawn and walkway" loading="lazy">
          <figcaption>Between periods on the main walkway</figcaption></figure>
      </div>

      <div class="sec-head" style="margin-top:52px"><h2>Achievements</h2></div>
      <div class="grid g4">
        ${E().achievements.slice(0, 4).map((a) => `<div class="stat"><b style="font-size:1rem;line-height:1.35">${esc(a.title)}</b>
          <span style="display:block;margin-top:8px">${esc(a.year)} · ${esc(a.category)}</span></div>`).join("")}
      </div>
      <a class="btn line sm" style="margin-top:16px" href="#/achievements">All achievements</a>

      <div class="split" style="margin-top:52px;align-items:start">
        <div>
          <div class="sec-head"><h2>Latest news</h2></div>
          <div class="panel" style="padding:6px 24px 18px">
            ${E().news.slice(0, 4).map((n) => `<div class="evrow" style="gap:12px">
              <span class="pill info" style="flex:0 0 auto">${esc(n.category)}</span>
              <div><h4 style="font-size:.98rem">${esc(n.title)}</h4>
              <div class="m">${fdate(n.date)} · ${esc(n.summary)}</div></div></div>`).join("")}
          </div>
          <a class="btn line sm" href="#/news">All news</a>
        </div>
        <div>
          <div class="sec-head"><h2>Coming up</h2></div>
          <div class="panel" style="padding:6px 24px 18px">
            ${D().events.slice(0, 4).map(eventRow).join("")}
          </div>
          <a class="btn line sm" href="#/events">Full calendar</a>
        </div>
      </div>

      <div class="sec-head" style="margin-top:52px"><h2>Gallery</h2></div>
      <div class="galgrid">
        ${galleryImages().slice(0, 5).map((g) => `<figure class="shot"><img src="${esc(g.src)}" alt="${esc(g.title)}" loading="lazy">
          <figcaption>${esc(g.title)}</figcaption></figure>`).join("")}
      </div>
      <div style="display:flex;gap:10px;margin-top:16px">
        <a class="btn line sm" href="#/gallery">Photo gallery</a>
        <a class="btn line sm" href="#/videos">Video gallery</a>
      </div>

      <div class="sec-head" style="margin-top:52px"><h2>What parents say</h2></div>
      <div class="grid g3">
        ${E().testimonials.slice(0, 6).map((t) => `<blockquote class="card quotecard">
          <p style="font-family:var(--serif);font-size:1.02rem;color:var(--ink);line-height:1.6">${esc(t.text)}</p>
          <footer style="margin-top:12px"><b style="font-size:.9rem">${esc(t.name)}</b>
            <span class="hint" style="display:block">${esc(t.role)}</span></footer></blockquote>`).join("")}
      </div>

      <div class="ctaband">
        <div>
          <h3>Admissions for 2027–28 open on 1 October</h3>
          <p>Register online, or book a Saturday campus visit on ${esc(E().identity.admissionHelpline)}.</p>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <a class="btn" href="#/admission">Register online</a>
          <a class="btn ghost" href="#/faq">Read the FAQs</a>
        </div>
      </div>

      <div class="split" style="margin-top:52px;align-items:start">
        <div>
          <div class="sec-head"><h2>Find us</h2></div>
          <dl class="facts" style="grid-template-columns:1fr">
            <div><dt>Address</dt><dd>${esc(s.address)}</dd></div>
            <div><dt>Telephone</dt><dd>${esc(s.phone)}</dd></div>
            <div><dt>Admission helpline</dt><dd>${esc(id.admissionHelpline)}</dd></div>
            <div><dt>Email</dt><dd>${esc(s.email)}</dd></div>
            <div style="border:0"><dt>Office hours</dt><dd>${esc(id.officeHours)}</dd></div>
          </dl>
          <a class="btn line sm" style="margin-top:14px" href="#/contact">Write to the office</a>
        </div>
        <div class="mapwrap">
          <iframe title="School location on the map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=${encodeURIComponent(id.mapQuery)}&output=embed"></iframe>
        </div>
      </div>
    </div>`;
  }

  function galleryImages() {
    return [
      { src: "assets/images/hero-campus.jpg", title: "The campus crest and academic block", tag: "Campus" },
      { src: "assets/images/students.jpg", title: "Students between periods", tag: "Student life" },
      { src: "assets/images/campus-aerial.jpg", title: "Playing field and transport bay from above", tag: "Campus" },
      { src: "assets/images/entrance.jpg", title: "Main entrance and reception", tag: "Campus" },
      { src: "assets/images/crest-gate.jpg", title: "School crest at the gate", tag: "Identity" }
    ];
  }

  /* ================= ABOUT ================= */
  function pageAbout() {
    const s = S();
    return `<div class="shell">
      ${head("About the school", "Global Vision Public School opened in " + s.estd + " on a one-acre campus in Sector 9, Rohini, and runs two sections in every class from LKG to Class XII.", "Home · About")}
      <figure class="shot wide"><img src="assets/images/campus-aerial.jpg" alt="Aerial view of the campus" loading="lazy">
        <figcaption>The campus from above — academic block, playing field, gardens and transport bay</figcaption></figure>

      <div class="grid g2" style="align-items:start;margin-top:26px">
        <div class="panel">
          <h3>Our approach</h3>
          <p class="sub">What the classroom actually looks like</p>
          <p>Classes are capped at thirty-four children so that a teacher can finish a round of the room in one period. Every child belongs to one of four houses — ${D().houses.join(", ")} — which run their own assemblies, quizzes and sports fixtures through the year.</p>
          <p>Pre-primary works on play, phonics and motor skills with no written examination; a termly observation report goes home instead. From Class I the school follows the CBSE scheme of studies, with continuous assessment across two terms and a written examination at the end of each.</p>
          <p style="margin:0">Classes XI and XII offer Science and Commerce streams, with Applied Mathematics and Entrepreneurship available as electives.</p>
        </div>
        <div>
          <div class="panel">
            <h3>School at a glance</h3>
            <dl class="facts" style="grid-template-columns:1fr">
              <div><dt>Principal</dt><dd>${esc(s.principal)}</dd></div>
              <div><dt>Vice Principal</dt><dd>${esc(s.vicePrincipal)}</dd></div>
              <div><dt>Established</dt><dd>${esc(s.estd)}</dd></div>
              <div><dt>Affiliation</dt><dd>${esc(s.affiliation)}</dd></div>
              <div><dt>Motto</dt><dd>${esc(s.motto)} — ${esc(s.mottoEn)}</dd></div>
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
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:22px">
        <a class="btn line sm" href="#/vision">Vision and mission</a>
        <a class="btn line sm" href="#/principal">Principal's message</a>
        <a class="btn line sm" href="#/management">Management</a>
        <a class="btn line sm" href="#/disclosure">Mandatory public disclosure</a>
      </div>
    </div>`;
  }

  /* ================= STUDENTS ================= */
  function pageStudents() {
    return `<div class="shell">
      ${head("Student records", "Every child on roll, with full bio-data, parent details, attendance and results on one card.", "Home · Records · Students")}
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
        ${fact("Interests", (s.hobbies || []).join(", ") || "—")}${fact("Achievement", s.achievements)}
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

  /* ================= ADMISSION ================= */
  function pageAdmission() {
    return `<div class="shell">
      ${head("Admission", "Registration for the 2027–28 session opens on 1 October. Fill the form below and the office will call you within two working days.", "Home · Admissions")}

      <figure class="shot wide"><img src="assets/images/students.jpg" alt="Students on the school campus" loading="lazy">
        <figcaption>Children on the main walkway between periods</figcaption></figure>

      <div class="sec-head" style="margin-top:30px"><h2>How admission works</h2></div>
      <div class="steps">
        ${E().admissionSteps.map((s, i) => `<div class="step">
          <span class="stepno">${i + 1}</span>
          <div><b>${esc(s.step)}</b><p class="hint" style="margin:4px 0 0">${esc(s.detail)}</p></div></div>`).join("")}
      </div>

      <div class="grid g2" style="align-items:start;margin-top:34px">
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
            <h3>Eligibility and documents</h3>
            ${tableOf([
      { label: "Class", cell: (r) => `<b>${esc(r.class)}</b>` },
      { label: "Age criterion", cell: (r) => esc(r.age) },
      { label: "Documents", cell: (r) => esc(r.documents) }
    ], E().eligibility)}
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
            <a class="btn line sm" style="margin-top:12px" href="#/track">Track an application</a>
            <a class="btn line sm" style="margin-top:12px" href="#/faq">Admission FAQs</a>
          </div>
        </div>
      </div>
    </div>`;
  }

  function admissionAfter() {
    document.getElementById("adSubmit").onclick = async function () {
      const g = (id) => document.getElementById(id).value.trim();
      if (!g("adName") || !g("adParent") || !g("adPhone") || !g("adDob")) {
        toast("Fill the child's name, date of birth, parent's name and mobile number."); return;
      }
      if (!/^[0-9]{10}$/.test(g("adPhone"))) { toast("Enter a 10-digit mobile number."); return; }
      const appId = "ENQ" + Date.now().toString().slice(-6);
      this.disabled = true; this.textContent = "Sending…";
      await submitRecord("admissions", {
        id: appId, name: g("adName"), dob: g("adDob"), classApplied: g("adClass"),
        gender: g("adGender"), parent: g("adParent"), phone: g("adPhone"),
        email: g("adEmail"), previousSchool: g("adPrev"), address: g("adAddr"),
        note: g("adNote"), appliedOn: new Date().toISOString().slice(0, 10),
        status: "Enquiry received"
      }, "Registration received for " + g("adName") + ".");
      this.disabled = false; this.textContent = "Send registration";
      modal("Registration received", `
        <p>Thank you. The admission office will call you within two working days.</p>
        <div class="stat" style="margin:16px 0"><b>${esc(appId)}</b><span>Your Application ID — note it down</span></div>
        <p class="hint">Use this ID on the <a href="#/track" onclick="App.closeModal()">application tracker</a> to see where your application has reached. For anything urgent, call ${esc(E().identity.admissionHelpline)}.</p>`);
      ["adName", "adParent", "adPhone", "adEmail", "adPrev", "adAddr", "adNote"].forEach((id) => document.getElementById(id).value = "");
    };
  }

  /* ================= GLOBAL SEARCH ================= */
  function buildIndex() {
    const idx = [];
    const add = (title, sub, hash, kind) => idx.push({ title, sub, hash, kind });

    [["Home", "#/home"], ["About the school", "#/about"], ["Vision and mission", "#/vision"],
    ["Principal's message", "#/principal"], ["Management", "#/management"], ["Achievements", "#/achievements"],
    ["Academic structure", "#/academics"], ["Subjects by class", "#/subjects"], ["Timetable", "#/timetable"],
    ["Study material", "#/material"], ["Homework", "#/homework"], ["Exams and results", "#/exams"],
    ["Academic calendar", "#/calendar"], ["Faculty", "#/teachers"], ["Admission and registration", "#/admission"],
    ["Track an application", "#/track"], ["Frequently asked questions", "#/faq"], ["Fee structure", "#/fees"],
    ["Campus and infrastructure", "#/campus"], ["Transport and bus routes", "#/transport"],
    ["Uniform and school timings", "#/uniform"], ["Student life, clubs and sports", "#/studentlife"],
    ["Events and sports", "#/events"], ["News", "#/news"], ["Notice board", "#/notices"],
    ["Photo gallery", "#/gallery"], ["Video gallery", "#/videos"], ["Student records", "#/students"],
    ["Attendance register", "#/attendance"], ["Leave applications", "#/leave"], ["Student ID cards", "#/idcard"],
    ["Mandatory public disclosure", "#/disclosure"], ["Downloads", "#/downloads"],
    ["Terms and policies", "#/terms"], ["Privacy policy", "#/privacy"], ["Contact the school", "#/contact"],
    ["Login", "#/login"], ["Admin console", "#/admin"], ["Admission CRM", "#/crm"], ["Sitemap", "#/sitemap"]
    ].forEach((p) => add(p[0], "Page", p[1], "Page"));

    D().notices.forEach((n) => add(n.title, n.tag + " · " + fdate(n.date), "#/notices", "Notice"));
    (E().news || []).forEach((n) => add(n.title, n.summary, "#/news", "News"));
    (E().downloads || []).forEach((d) => add(d.title, d.category + " · " + d.format, "#/downloads", "Download"));
    (E().admissionFaqs || []).forEach((f) => add(f.q, f.a, "#/faq", "FAQ"));
    D().events.forEach((e) => add(e.title, e.category + " · " + fdate(e.date), "#/events", "Event"));
    D().teachers.forEach((t) => add(t.name, t.designation + " · " + t.subject, "#/teachers", "Faculty"));
    D().material.forEach((m) => add(m.title, clsLabel(m.class) + " · " + m.subject, "#/material", "Material"));
    (E().clubs || []).forEach((c) => add(c.name, c.detail, "#/studentlife", "Club"));
    (E().campus || []).forEach((c) => add(c.name, c.detail, "#/campus", "Campus"));
    D().routes.forEach((r) => add(r.route, r.stops, "#/transport", "Bus route"));
    return idx;
  }

  let INDEX = null;
  function runSearch(term) {
    if (!INDEX) INDEX = buildIndex();
    const t = term.trim().toLowerCase();
    const out = document.getElementById("searchOut");
    if (t.length < 2) {
      out.innerHTML = `<p class="hint" style="padding:16px 4px">Type at least two letters. Try "fee", "datesheet", "bus route" or a teacher's name.</p>`;
      return;
    }
    const hits = INDEX.filter((r) => (r.title + " " + r.sub).toLowerCase().includes(t)).slice(0, 20);
    out.innerHTML = hits.length
      ? hits.map((r) => `<a class="sres" href="${r.hash}">
          <span class="pill info">${esc(r.kind)}</span>
          <span><b>${esc(r.title)}</b><span class="hint" style="display:block">${esc(String(r.sub).slice(0, 120))}</span></span></a>`).join("")
      : `<p class="hint" style="padding:16px 4px">Nothing found for “${esc(term)}”. Try a shorter word.</p>`;
    out.querySelectorAll("a").forEach((a) => a.onclick = () => closeSearch());
  }
  function openSearch() {
    document.getElementById("searchWrap").classList.add("open");
    document.body.style.overflow = "hidden";
    const i = document.getElementById("searchInput");
    i.value = ""; runSearch(""); setTimeout(() => i.focus(), 40);
  }
  function closeSearch() {
    document.getElementById("searchWrap").classList.remove("open");
    document.body.style.overflow = "";
  }

  /* ================= ROUTER ================= */
  const routes = {};
  function route(path, title, render, after) { routes[path] = { title, render, after }; }

  const DESCRIPTIONS = {
    "/home": "Global Vision Public School, Sector 9 Rohini, New Delhi. CBSE co-educational school from LKG to Class XII. Admissions 2027–28, results, attendance, timetable and fees.",
    "/admission": "Admission to Global Vision Public School, Rohini for 2027–28. Registration form, eligibility, documents, process and admission FAQs.",
    "/fees": "Class-wise fee structure and bus route charges for Global Vision Public School, Rohini, session 2026–27.",
    "/disclosure": "Mandatory public disclosure for Global Vision Public School, Rohini, under the CBSE Affiliation Bye-Laws.",
    "/campus": "Campus and infrastructure at Global Vision Public School, Rohini — smart classrooms, laboratories, library, auditorium and sports facilities.",
    "/academics": "CBSE curriculum from LKG to Class XII at Global Vision Public School, Rohini, with Science and Commerce streams in Classes XI and XII.",
    "/contact": "Contact Global Vision Public School, Plot 14 Sector 9 Rohini, New Delhi – 110085. Phone, email, map and department contacts."
  };

  function go(hash) { location.hash = hash; render(); }

  function render() {
    const path = (location.hash || "#/home").replace("#", "");
    const r = routes[path] || routes["/home"];
    const main = document.getElementById("main");
    main.innerHTML = `<div class="page on${path === "/home" ? " home" : ""}">${r.render()}</div>`;

    document.title = (path === "/home"
      ? "Global Vision Public School — CBSE School in Rohini, New Delhi"
      : r.title + " — Global Vision Public School");
    const md = document.getElementById("metaDesc");
    if (md) md.setAttribute("content", DESCRIPTIONS[path] || (r.title + " at Global Vision Public School, Sector 9 Rohini, New Delhi. CBSE school from LKG to Class XII."));
    const cn = document.getElementById("canon");
    if (cn) cn.setAttribute("href", location.origin + location.pathname + "#" + path);

    document.querySelectorAll(".nav a").forEach((a) =>
      a.classList.toggle("on", a.getAttribute("href") === "#" + path));
    document.getElementById("nav").classList.remove("open");
    document.querySelectorAll(".menu.open").forEach((m) => m.classList.remove("open"));
    window.scrollTo({ top: 0 });
    if (r.after) r.after();
    if (App.paintSessionChip) App.paintSessionChip();
    if (window.I18N) I18N.apply();
  }

  route("/home", "Home", pageHome);
  route("/about", "About", pageAbout);
  route("/students", "Students", pageStudents, studentsAfter);
  route("/admission", "Admission", pageAdmission, admissionAfter);

  async function start() {
    /* mobile drawer */
    document.getElementById("burger").onclick = function () {
      const n = document.getElementById("nav");
      const bar = document.querySelector(".topbar").getBoundingClientRect();
      n.style.setProperty("--drawer-top", Math.max(0, bar.bottom) + "px");
      n.classList.toggle("open");
      this.setAttribute("aria-expanded", n.classList.contains("open"));
    };

    /* dropdown menus */
    document.querySelectorAll(".nav .more > button").forEach((btn) => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const menu = btn.nextElementSibling;
        const wasOpen = menu.classList.contains("open");
        document.querySelectorAll(".menu.open").forEach((m) => m.classList.remove("open"));
        if (!wasOpen) menu.classList.add("open");
        btn.setAttribute("aria-expanded", !wasOpen);
      };
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".more")) document.querySelectorAll(".menu.open").forEach((m) => m.classList.remove("open"));
    });

    /* modal */
    document.getElementById("modalClose").onclick = closeModal;
    document.getElementById("modal").onclick = (e) => { if (e.target.id === "modal") closeModal(); };

    /* search */
    document.getElementById("searchBtn").onclick = openSearch;
    document.getElementById("searchClose").onclick = closeSearch;
    document.getElementById("searchInput").oninput = (e) => runSearch(e.target.value);
    document.getElementById("searchWrap").onclick = (e) => { if (e.target.id === "searchWrap") closeSearch(); };

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { closeModal(); closeSearch(); }
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) { e.preventDefault(); openSearch(); }
    });

    /* WhatsApp */
    const wa = document.getElementById("waBtn");
    if (wa) wa.href = "https://wa.me/" + E().identity.whatsapp +
      "?text=" + encodeURIComponent("Hello, I would like information about admission at Global Vision Public School for Class ____.");

    window.addEventListener("hashchange", render);

    render();
    if (window.I18N) I18N.init();
    await Store.boot();
    if (Store.live) { INDEX = null; render(); }
  }

  return {
    start, route, render, go, esc, fdate, fshort, inr, initials, roman, clsLabel,
    statusPill, toast, modal, closeModal, options, classSelect, tableOf, emptyState,
    head, grade, wingOf, submitRecord, openStudent, eventRow, sampleAdm, galleryImages,
    openSearch, D, S, E
  };
})();

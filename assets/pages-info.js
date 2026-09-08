/* ---------------------------------------------------------------
   Informational, compliance and school-life pages.
   --------------------------------------------------------------- */
(function () {
  const A = App, D = A.D;
  const E = () => window.SEED_EXTRA;
  const esc = A.esc, tableOf = A.tableOf, head = A.head, opts = A.options;

  const pairTable = (rows, c1, c2) => tableOf(
    [{ label: c1, cell: (r) => `<b>${esc(r[0])}</b>` }, { label: c2, cell: (r) => esc(r[1]) }], rows);

  /* ================= VISION, MISSION, VALUES ================= */
  A.route("/vision", "Vision and mission", function () {
    return `<div class="shell">
      ${head("Vision, mission and values", "What the school is trying to do, written plainly enough to be held to.", "Home · About · Vision and mission")}
      <div class="panel" style="border-left:4px solid var(--brass)">
        <h3>Our vision</h3>
        <p style="font-family:var(--serif);font-size:1.35rem;line-height:1.5;margin:10px 0 0">${esc(E().vision)}</p>
      </div>
      <div class="grid g2" style="align-items:start">
        <div class="panel"><h3>Our mission</h3>
          <ul style="padding-left:20px;margin:10px 0 0;line-height:1.9;font-size:.93rem">
            ${E().mission.map((m) => `<li>${esc(m)}</li>`).join("")}</ul>
        </div>
        <div class="panel"><h3>Why parents choose us</h3>
          ${E().whyChoose.map((w) => `<div style="padding:11px 0;border-bottom:1px dashed var(--rule)">
            <b style="font-size:.95rem">${esc(w.title)}</b>
            <div class="hint" style="margin-top:3px">${esc(w.detail)}</div></div>`).join("")}
        </div>
      </div>
      <div class="sec-head" style="margin-top:34px"><h2>Core values</h2></div>
      <div class="grid g3">
        ${E().values.map((v) => `<div class="card"><h4>${esc(v.name)}</h4><p>${esc(v.detail)}</p></div>`).join("")}
      </div>
    </div>`;
  });

  /* ================= PRINCIPAL ================= */
  A.route("/principal", "Principal's message", function () {
    const p = E().principal;
    return `<div class="shell">
      ${head("Principal's message", "", "Home · About · Principal's message")}
      <div class="grid g2" style="grid-template-columns:300px 1fr;align-items:start;gap:34px">
        <div class="panel" style="text-align:center">
          <div class="avatar" style="width:120px;height:120px;flex:0 0 120px;font-size:2.6rem;margin:0 auto 16px">${A.initials(p.name)}</div>
          <h3 style="margin:0">${esc(p.name)}</h3>
          <p class="hint" style="margin:6px 0 0">${esc(p.designation)}</p>
          <p class="hint" style="margin:10px 0 0">${esc(p.qualification)}</p>
          <p class="hint" style="margin:8px 0 0">${esc(p.experience)}</p>
          <a class="btn line sm" style="margin-top:14px" href="mailto:${esc(E().identity.principalEmail)}">Write to the Principal</a>
        </div>
        <div class="panel">
          ${p.message.map((para, i) => `<p style="${i === 0 ? "font-family:var(--serif);font-size:1.2rem;line-height:1.65;" : ""}">${esc(para)}</p>`).join("")}
          <p style="margin:22px 0 0;font-family:var(--serif);font-size:1.05rem">${esc(p.name)}</p>
          <p class="hint" style="margin:2px 0 0">${esc(p.designation)}, Global Vision Public School</p>
        </div>
      </div>
    </div>`;
  });

  /* ================= MANAGEMENT ================= */
  A.route("/management", "Management", function () {
    return `<div class="shell">
      ${head("Management and school committee", "The society, the leadership team, and the people accountable for each part of the school's running.", "Home · About · Management")}
      <div class="grid g3">
        ${E().management.map((m) => `<div class="card">
          <div style="display:flex;gap:12px;align-items:center;margin-bottom:10px">
            <div class="avatar" style="width:44px;height:44px;flex:0 0 44px;font-size:1rem">${A.initials(m.name)}</div>
            <div><h4 style="margin:0">${esc(m.name)}</h4><span class="hint">${esc(m.role)}</span></div>
          </div>
          <p>${esc(m.detail)}</p></div>`).join("")}
      </div>
      <div class="panel" style="margin-top:24px">
        <h3>Society and registration</h3>
        ${pairTable([
      ["Managing society", E().identity.society],
      ["Affiliation number", E().identity.affiliationNo],
      ["School code", E().identity.schoolCode],
      ["Affiliation status", E().identity.affiliationStatus],
      ["Affiliation valid", A.fdate(E().identity.affiliationValidFrom) + " to " + A.fdate(E().identity.affiliationValidTo)],
      ["Parent–teacher association", "Twelve elected parent representatives, two per wing, refreshed every session"]
    ], "Item", "Detail")}
      </div>
    </div>`;
  });

  /* ================= ACADEMICS ================= */
  A.route("/academics", "Academics", function () {
    return `<div class="shell">
      ${head("Academics", "CBSE curriculum from LKG to Class XII, taught in five stages with two sections in every class.", "Home · Academics")}
      <div class="tabs" id="acTabs">
        <button class="on" data-t="stages">Academic structure</button>
        <button data-t="curr">Curriculum</button>
        <button data-t="streams">Streams in XI and XII</button>
        <button data-t="assess">Assessment and grading</button>
      </div>
      <div id="acPane"></div>
    </div>`;
  }, function () {
    const pane = document.getElementById("acPane");
    document.querySelectorAll("#acTabs button").forEach((b) => b.onclick = () => {
      document.querySelectorAll("#acTabs button").forEach((x) => x.classList.toggle("on", x === b));
      draw(b.dataset.t);
    });
    function draw(t) {
      if (t === "curr") {
        pane.innerHTML = `<div class="grid g2">${E().curriculum.map((c) =>
          `<div class="card"><h4>${esc(c.area)}</h4><p>${esc(c.detail)}</p></div>`).join("")}</div>`;
      } else if (t === "streams") {
        pane.innerHTML = E().streams.map((s) => `<div class="panel">
          <h3>${esc(s.stream)} stream</h3>
          <dl class="facts" style="margin-top:12px">
            <div><dt>Compulsory subjects</dt><dd>${esc(s.core)}</dd></div>
            <div><dt>Options</dt><dd>${esc(s.options)}</dd></div>
          </dl>
          <p class="hint" style="margin-top:12px">${esc(s.note)}</p></div>`).join("") +
          `<div class="note">Stream allotment is based on the Class X board result and a subject-choice form filled in June. Changes are permitted up to 15 July.</div>`;
      } else if (t === "assess") {
        pane.innerHTML = tableOf([
          { label: "Term", cell: (r) => `<b>${esc(r.term)}</b>` },
          { label: "Components", cell: (r) => esc(r.components) },
          { label: "Reported as", cell: (r) => esc(r.weight) }
        ], E().assessment) +
          `<div class="grid g3" style="margin-top:20px">
            <div class="card"><h4>Promotion</h4><p>A child must pass in every subject and hold at least 75% attendance to be promoted.</p></div>
            <div class="card"><h4>Re-test</h4><p>One re-test is offered in a failed subject within three weeks of the annual result.</p></div>
            <div class="card"><h4>Report cards</h4><p>Issued twice a year at the parent–teacher meeting, and always available in the parent portal.</p></div>
          </div>`;
      } else {
        pane.innerHTML = tableOf([
          { label: "Stage", cell: (s) => `<b>${esc(s.stage)}</b>` },
          { label: "Classes", cell: (s) => esc(s.classes) },
          { label: "Typical age", cell: (s) => esc(s.ages) },
          { label: "How it works", cell: (s) => esc(s.note) }
        ], E().stages) +
          `<div class="grid g4" style="margin-top:20px">
            ${E().stages.map((s) => {
          const n = D().students.filter((st) => stageOf(st.class) === s.stage).length;
          return `<div class="stat"><b>${n}</b><span>${esc(s.stage)} · ${esc(s.classes)}</span></div>`;
        }).join("")}
          </div>
          <p class="hint" style="margin-top:14px">Subject lists for every class are on the <a href="#/subjects">subjects page</a>, and the period-by-period plan is on the <a href="#/timetable">timetable</a>.</p>`;
      }
    }
    draw("stages");
  });

  function stageOf(c) {
    if (c === "LKG" || c === "UKG") return "Pre-Primary";
    const n = +c;
    return n <= 5 ? "Primary" : n <= 8 ? "Middle" : n <= 10 ? "Secondary" : "Senior Secondary";
  }

  /* ================= SUBJECTS ================= */
  A.route("/subjects", "Subjects", function () {
    const rows = [];
    D().classes.forEach((c) => {
      Store.sections(c).forEach((s) => {
        rows.push({ c, s, subs: Store.subjects(c, s) });
      });
    });
    return `<div class="shell">
      ${head("Subjects by class", "Every subject taught in each class and section this session. Classes XI and XII are listed by stream.", "Home · Academics · Subjects")}
      ${tableOf([
      { label: "Class", cell: (r) => `<b>${A.clsLabel(r.c)}</b>` },
      { label: "Section or stream", cell: (r) => esc(r.s) },
      { label: "Subjects taught", cell: (r) => r.subs.map((x) => `<span class="pill info" style="margin:2px 3px 2px 0;display:inline-block">${esc(x)}</span>`).join("") },
      { label: "Count", num: true, cell: (r) => r.subs.length }
    ], rows)}
      <p class="hint" style="margin-top:14px">Physical Education and Art are timetabled but not examined in writing up to Class VIII.</p>
    </div>`;
  });

  /* ================= CAMPUS ================= */
  A.route("/campus", "Campus and infrastructure", function () {
    const tags = [...new Set(E().campus.map((c) => c.tag))];
    return `<div class="shell">
      ${head("Campus and infrastructure", "One acre in Sector 9, Rohini — thirty-two classrooms, six laboratories, a library, an auditorium and a 200-metre track.", "Home · Campus")}
      <div class="filters">
        <div class="field"><label for="cpT">Show</label><select id="cpT"><option value="">Everything</option>${opts(tags)}</select></div>
      </div>
      <div class="galgrid" style="margin-bottom:26px">
        <figure class="shot"><img src="assets/images/campus-aerial.jpg" alt="The campus from above" loading="lazy">
          <figcaption>One acre — academic block, playing field, gardens and transport bay</figcaption></figure>
        <figure class="shot"><img src="assets/images/entrance.jpg" alt="Main entrance" loading="lazy">
          <figcaption>Main entrance and reception</figcaption></figure>
        <figure class="shot"><img src="assets/images/crest-gate.jpg" alt="School crest at the gate" loading="lazy">
          <figcaption>The crest at the gate</figcaption></figure>
      </div>
      <div class="grid g3" id="cpOut"></div>
      <div class="sec-head" style="margin-top:36px"><h2>At a glance</h2></div>
      ${tableOf([
      { label: "Item", cell: (r) => `<b>${esc(r[0])}</b>` },
      { label: "Detail", cell: (r) => esc(r[1]) }
    ], E().disclosure.infrastructure)}
    </div>`;
  }, function () {
    const t = document.getElementById("cpT");
    const draw = () => {
      document.getElementById("cpOut").innerHTML = E().campus
        .filter((c) => !t.value || c.tag === t.value)
        .map((c) => `<div class="card"><span class="pill info">${esc(c.tag)}</span>
          <h4 style="margin-top:9px">${esc(c.name)}</h4><p>${esc(c.detail)}</p></div>`).join("");
    };
    t.onchange = draw; draw();
  });

  /* ================= STUDENT LIFE ================= */
  A.route("/studentlife", "Student life", function () {
    return `<div class="shell">
      ${head("Student life", "Eight clubs, twelve games and four houses. Every child belongs to a house from the day they join.", "Home · Student life")}
      <div class="tabs" id="slTabs">
        <button class="on" data-t="clubs">Clubs and activities</button>
        <button data-t="sports">Sports</button>
        <button data-t="houses">House system</button>
      </div>
      <div id="slPane"></div>
      <figure class="shot wide" style="margin-top:28px"><img src="assets/images/students.jpg" alt="Students on the campus walkway" loading="lazy">
        <figcaption>House jerseys and the walk back from the ground</figcaption></figure>
    </div>`;
  }, function () {
    const pane = document.getElementById("slPane");
    document.querySelectorAll("#slTabs button").forEach((b) => b.onclick = () => {
      document.querySelectorAll("#slTabs button").forEach((x) => x.classList.toggle("on", x === b));
      draw(b.dataset.t);
    });
    function draw(t) {
      if (t === "sports") {
        pane.innerHTML = tableOf([
          { label: "Game", cell: (s) => `<b>${esc(s.game)}</b>` },
          { label: "Age groups", cell: (s) => esc(s.level) },
          { label: "Coach", cell: (s) => esc(s.coach) },
          { label: "Facility", cell: (s) => esc(s.facility) }
        ], E().sports) +
          `<div class="note" style="margin-top:18px">Games are compulsory up to Class VIII. Coaching runs 2:15 PM to 3:45 PM on working days — register with the sports room.</div>`;
      } else if (t === "houses") {
        const counts = {};
        D().students.forEach((s) => counts[s.house] = (counts[s.house] || 0) + 1);
        pane.innerHTML = `<div class="grid g4">${D().houses.map((h) => `
          <div class="stat"><b>${counts[h] || 0}</b><span>${esc(h)} House</span></div>`).join("")}</div>
          <div class="panel" style="margin-top:20px">
            <h3>How the house system works</h3>
            <p>Every child is allotted a house at admission and keeps it until Class XII. Siblings are placed in the same house. Each house has a captain and vice-captain from Class XII, a teacher in charge, and a prefect from each senior section.</p>
            <p style="margin:0">Houses compete through the year in sports, culturals, quizzes, cleanliness and academics. Points are announced at the Monday assembly and the trophy is awarded on Annual Day. Standings are on the <a href="#/events">events page</a>.</p>
          </div>`;
      } else {
        pane.innerHTML = `<div class="grid g2">${E().clubs.map((c) => `<div class="card">
          <h4>${esc(c.name)}</h4>
          <p style="margin-bottom:9px">${esc(c.detail)}</p>
          <span class="pill info">${esc(c.meets)}</span>
          <span class="pill info">${esc(c.incharge)}</span></div>`).join("")}</div>`;
      }
    }
    draw("clubs");
  });

  /* ================= ACHIEVEMENTS ================= */
  A.route("/achievements", "Achievements", function () {
    const cats = [...new Set(E().achievements.map((a) => a.category))];
    return `<div class="shell">
      ${head("Achievements", "Board results, sports medals, exhibitions and community recognition, most recent first.", "Home · Student life · Achievements")}
      <div class="filters">
        <div class="field"><label for="ahC">Category</label><select id="ahC"><option value="">Everything</option>${opts(cats)}</select></div>
        <div class="field"><label for="ahY">Year</label><select id="ahY"><option value="">All years</option>${opts([...new Set(E().achievements.map((a) => a.year))])}</select></div>
      </div>
      <div class="panel" style="padding:6px 24px 18px" id="ahOut"></div>
    </div>`;
  }, function () {
    const c = document.getElementById("ahC"), y = document.getElementById("ahY");
    const draw = () => {
      const rows = E().achievements.filter((a) => (!c.value || a.category === c.value) && (!y.value || a.year === y.value));
      document.getElementById("ahOut").innerHTML = rows.length ? rows.map((a) => `<div class="evrow">
        <div class="evdate" style="flex:0 0 74px"><b style="font-size:1.05rem">${esc(a.year)}</b><span>${esc(a.category).toUpperCase()}</span></div>
        <div style="flex:1"><h4>${esc(a.title)}</h4><div class="m">${esc(a.detail)}</div></div></div>`).join("")
        : A.emptyState("Nothing in that category yet", "Try another year or clear the filters.");
    };
    c.onchange = draw; y.onchange = draw; draw();
  });

  /* ================= NEWS ================= */
  A.route("/news", "News", function () {
    const cats = [...new Set(E().news.map((n) => n.category))];
    return `<div class="shell">
      ${head("News", "What has been happening at school, written up after the event rather than before it.", "Home · News")}
      <div class="filters">
        <div class="field"><label for="nwC">Category</label><select id="nwC"><option value="">Everything</option>${opts(cats)}</select></div>
        <div class="field grow"><label for="nwQ">Search</label><input id="nwQ" placeholder="e.g. exhibition"></div>
      </div>
      <div class="grid g2" id="nwOut"></div>
    </div>`;
  }, function () {
    const c = document.getElementById("nwC"), q = document.getElementById("nwQ");
    const draw = () => {
      const rows = E().news.filter((n) => (!c.value || n.category === c.value) &&
        (!q.value.trim() || (n.title + " " + n.summary).toLowerCase().includes(q.value.trim().toLowerCase())));
      document.getElementById("nwOut").innerHTML = rows.length ? rows.map((n, i) => `<div class="card">
        <div style="display:flex;gap:9px;align-items:center;margin-bottom:9px">
          <span class="pill info">${esc(n.category)}</span><span class="hint">${A.fdate(n.date)}</span></div>
        <h4>${esc(n.title)}</h4><p>${esc(n.summary)}</p>
        <button class="linkish" style="margin-top:10px" data-n="${E().news.indexOf(n)}">Read the full story</button></div>`).join("")
        : A.emptyState("No story matches", "Clear the search box or pick another category.");
      document.querySelectorAll("[data-n]").forEach((b) => b.onclick = () => {
        const n = E().news[+b.dataset.n];
        A.modal(n.title, `<div class="hint" style="margin-bottom:14px">${esc(n.category)} · ${A.fdate(n.date)}</div>
          <p style="font-family:var(--serif);font-size:1.12rem;line-height:1.6">${esc(n.summary)}</p>
          <p>${esc(n.body)}</p>`);
      });
    };
    c.onchange = draw; q.oninput = draw; draw();
  });

  /* ================= VIDEOS ================= */
  A.route("/videos", "Video gallery", function () {
    return `<div class="shell">
      ${head("Video gallery", "Campus tour, annual day, exhibitions and assemblies. Paste a YouTube video ID into assets/seed-extra.js to make a tile play.", "Home · Gallery · Videos")}
      <div class="grid g3">
        ${E().videos.map((v) => v.youtubeId
      ? `<div class="card" style="padding:0;overflow:hidden">
              <div style="aspect-ratio:16/9"><iframe style="width:100%;height:100%;border:0" loading="lazy"
                src="https://www.youtube.com/embed/${esc(v.youtubeId)}" title="${esc(v.title)}" allowfullscreen></iframe></div>
              <div style="padding:14px"><h4>${esc(v.title)}</h4><p>${esc(v.detail)}</p></div></div>`
      : `<div class="card" style="padding:0;overflow:hidden">
              <div class="gal" style="aspect-ratio:16/9;border:0;border-radius:0;align-items:center;justify-content:center;flex-direction:column;gap:6px">
                <span style="font-size:1.6rem">▶</span><span style="font-size:.8rem;opacity:.8">${esc(v.duration)}</span></div>
              <div style="padding:14px"><h4>${esc(v.title)}</h4><p>${esc(v.detail)}</p></div></div>`).join("")}
      </div>
    </div>`;
  });

  /* ================= CALENDAR ================= */
  A.route("/calendar", "Academic calendar", function () {
    return `<div class="shell">
      ${head("Academic calendar", "Events, examinations, holidays and meetings for session " + esc(A.S().session) + " in one place.", "Home · Academics · Calendar")}
      <div class="filters">
        <div class="field"><label for="calM">Month</label><select id="calM"></select></div>
        <div class="field"><label for="calT">Type</label><select id="calT">
          <option value="">Everything</option><option>Academic</option><option>Event</option><option>Examination</option><option>Holiday</option><option>Meeting</option></select></div>
      </div>
      <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:18px">
        <span class="pill info">Academic</span><span class="pill ok">Event</span>
        <span class="pill no">Examination</span><span class="pill wait">Holiday</span>
      </div>
      <div class="panel" style="padding:6px 24px 18px" id="calOut"></div>
    </div>`;
  }, function () {
    const all = calendarEntries();
    const months = [...new Set(all.map((e) => e.date.slice(0, 7)))].sort();
    const m = document.getElementById("calM"), t = document.getElementById("calT");
    m.innerHTML = '<option value="">Whole session</option>' + opts(months, new Date().toISOString().slice(0, 7),
      (v) => ({ v, t: new Date(v + "-01T00:00:00").toLocaleDateString("en-IN", { month: "long", year: "numeric" }) }));
    const draw = () => {
      const rows = all.filter((e) => (!m.value || e.date.startsWith(m.value)) && (!t.value || e.type === t.value));
      document.getElementById("calOut").innerHTML = rows.length ? rows.map((e) => {
        const d = new Date(e.date + "T00:00:00");
        const cls = e.type === "Examination" ? "no" : e.type === "Holiday" ? "wait" : e.type === "Event" ? "ok" : "info";
        return `<div class="evrow">
          <div class="evdate"><b>${d.getDate()}</b><span>${d.toLocaleDateString("en-IN", { month: "short" }).toUpperCase()}</span></div>
          <div style="flex:1"><h4>${esc(e.title)}</h4>
            <div class="m">${d.toLocaleDateString("en-IN", { weekday: "long" })}${e.detail ? " · " + esc(e.detail) : ""}</div></div>
          <span class="pill ${cls}">${esc(e.type)}</span></div>`;
      }).join("") : A.emptyState("Nothing scheduled", "Pick another month or clear the type filter.");
    };
    m.onchange = draw; t.onchange = draw; draw();
  });

  function calendarEntries() {
    const out = [];
    D().events.forEach((e) => out.push({
      date: e.date, title: e.title, detail: e.venue + " · " + e.classes,
      type: e.category === "Meeting" ? "Meeting" : e.category === "Academic" ? "Academic" : "Event"
    }));
    D().exams.forEach((e) => out.push({
      date: e.from, title: e.name + " begins", detail: "Ends " + A.fdate(e.to), type: "Examination"
    }));
    (E().holidays || []).forEach((h) => out.push({ date: h.date, title: h.title, detail: h.type, type: "Holiday" }));
    return out.sort((a, b) => a.date.localeCompare(b.date));
  }

  /* ================= MANDATORY PUBLIC DISCLOSURE ================= */
  A.route("/disclosure", "Mandatory public disclosure", function () {
    const d = E().disclosure;
    return `<div class="shell">
      ${head("Mandatory public disclosure", "Published under the CBSE Affiliation Bye-Laws.", "Home · Mandatory public disclosure")}
      <div class="note">${esc(d.note)} Verify the current CBSE format before every session — the Board updates the required fields from time to time.</div>

      <div class="sec-head" style="margin-top:30px"><h2>A. General information</h2></div>
      ${pairTable(d.general, "Information", "Details")}

      <div class="sec-head" style="margin-top:34px"><h2>B. Documents and information</h2></div>
      ${tableOf([
      { label: "Document", cell: (r) => esc(r[0]) },
      { label: "Status", cell: (r) => esc(r[1]) },
      { label: "Copy", cell: (r) => `<a href="${esc(r[2])}">View PDF</a>` }
    ], d.documents)}

      <div class="sec-head" style="margin-top:34px"><h2>C. Result and academics</h2></div>
      ${pairTable(d.academics, "Information", "Where it is published")}

      <div class="sec-head" style="margin-top:34px"><h2>D. Board examination results, last three years</h2></div>
      ${d.results && d.results.length ? tableOf([
      { label: "Session", cell: (r) => esc(r.year) },
      { label: "Class", cell: (r) => esc(r.class) },
      { label: "Registered", num: true, cell: (r) => r.registered },
      { label: "Passed", num: true, cell: (r) => r.passed },
      { label: "Pass percentage", num: true, cell: (r) => esc(r.pass) },
      { label: "School average", num: true, cell: (r) => esc(r.average) },
      { label: "Above 90%", num: true, cell: (r) => r.above90 }
    ], d.results) : `<div class="note">${esc(d.resultsNote || "Results will be published here.")}</div>
      ${tableOf([{ label: "Session", cell: (r) => r[0] }, { label: "Class", cell: (r) => r[1] },
        { label: "Registered", cell: (r) => r[2] }, { label: "Passed", cell: (r) => r[2] },
        { label: "Pass percentage", cell: (r) => r[2] }, { label: "School average", cell: (r) => r[2] }],
        [["2026–27", "X", "To be declared in May 2027"], ["2028–29", "XII", "To be declared in May 2029"]])}`}

      <div class="sec-head" style="margin-top:34px"><h2>E. Staff</h2></div>
      ${pairTable(d.staff, "Category", "Number")}
      <p class="hint" style="margin-top:10px">Name-wise teacher details with qualifications are on the <a href="#/teachers">faculty page</a>.</p>

      <div class="sec-head" style="margin-top:34px"><h2>F. School infrastructure</h2></div>
      ${pairTable(d.infrastructure, "Item", "Detail")}

      <div class="panel" style="margin-top:30px">
        <h3>Also published on this website</h3>
        <div style="display:flex;flex-wrap:wrap;gap:9px">
          ${[["Fee structure", "#/fees"], ["Academic calendar", "#/calendar"], ["Management committee", "#/management"],
      ["Faculty and qualifications", "#/teachers"], ["Transport", "#/transport"], ["Downloads", "#/downloads"],
      ["Terms and policies", "#/terms"], ["Privacy policy", "#/privacy"]]
        .map((l) => `<a class="btn line sm" href="${l[1]}">${l[0]}</a>`).join("")}
        </div>
      </div>
    </div>`;
  });

  /* ================= DOWNLOADS ================= */
  A.route("/downloads", "Downloads", function () {
    const cats = [...new Set(E().downloads.map((d) => d.category))];
    return `<div class="shell">
      ${head("Downloads", "Forms, calendars, lists and reports. Replace each link with your own Google Drive or PDF URL.", "Home · Downloads")}
      <div class="filters">
        <div class="field"><label for="dlC">Category</label><select id="dlC"><option value="">Everything</option>${opts(cats)}</select></div>
        <div class="field grow"><label for="dlQ">Search</label><input id="dlQ" placeholder="e.g. fee, calendar, transfer"></div>
      </div>
      <div id="dlOut"></div>
    </div>`;
  }, function () {
    const c = document.getElementById("dlC"), q = document.getElementById("dlQ");
    const draw = () => {
      const rows = E().downloads.filter((d) => (!c.value || d.category === c.value) &&
        (!q.value.trim() || d.title.toLowerCase().includes(q.value.trim().toLowerCase())));
      document.getElementById("dlOut").innerHTML = tableOf([
        { label: "Document", cell: (d) => `<b>${esc(d.title)}</b>` },
        { label: "Category", cell: (d) => `<span class="pill info">${esc(d.category)}</span>` },
        { label: "Format", cell: (d) => esc(d.format) },
        { label: "Size", cell: (d) => esc(d.size) },
        { label: "Updated", cell: (d) => A.fdate(d.updated) },
        { label: "File", cell: (d) => `<a href="${esc(d.link)}">Download</a>` }
      ], rows, { emptyTitle: "No document matches", emptyMsg: "Clear the search box." });
    };
    c.onchange = draw; q.oninput = draw; draw();
  });

  /* ================= FAQ ================= */
  A.route("/faq", "Frequently asked questions", function () {
    return `<div class="shell">
      ${head("Frequently asked questions", "The questions the admission office is asked most often. If yours is not here, call the helpline or use the contact form.", "Home · Admissions · FAQs")}
      <div class="field" style="max-width:420px;margin-bottom:20px"><label for="fqQ">Search the questions</label><input id="fqQ" placeholder="e.g. sibling, transport, fee"></div>
      <div id="fqOut"></div>
      <div class="panel" style="margin-top:24px">
        <h3>Still not answered?</h3>
        <p class="sub">Admission helpline ${esc(E().identity.admissionHelpline)} · ${esc(E().identity.admissionEmail)}</p>
        <a class="btn dark" href="#/contact">Write to the office</a>
        <a class="btn line" href="#/admission">Start a registration</a>
      </div>
    </div>`;
  }, function () {
    const q = document.getElementById("fqQ");
    const draw = () => {
      const term = q.value.trim().toLowerCase();
      const rows = E().admissionFaqs.filter((f) => !term || (f.q + " " + f.a).toLowerCase().includes(term));
      document.getElementById("fqOut").innerHTML = rows.length
        ? rows.map((f) => `<details class="panel" style="padding:0;margin-bottom:10px">
            <summary style="cursor:pointer;padding:16px 22px;font-weight:700;font-family:var(--serif);font-size:1.02rem">${esc(f.q)}</summary>
            <div style="padding:0 22px 18px;color:var(--muted)">${esc(f.a)}</div></details>`).join("")
        : A.emptyState("No question matches", "Try a different word, or write to the office.");
    };
    q.oninput = draw; draw();
  });

  /* ================= TRANSPORT ================= */
  A.route("/transport", "Transport", function () {
    return `<div class="shell">
      ${head("School transport", "Fourteen buses across six routes, each GPS tracked, with a female attendant and a teacher in charge on board.", "Home · Campus · Transport")}
      ${tableOf([
      { label: "Route", cell: (r) => `<b>${esc(r.route)}</b>` },
      { label: "Stops", cell: (r) => esc(r.stops) },
      { label: "Pick-up", cell: (r) => esc(r.pickup) },
      { label: "Drop", cell: (r) => esc(r.drop) },
      { label: "Bus number", cell: (r) => `<span class="tnum">${esc(r.bus)}</span>` },
      { label: "Teacher in charge", cell: (r) => esc(r.incharge) }
    ], D().routes)}

      <div class="sec-head" style="margin-top:34px"><h2>Charges and rules</h2></div>
      <div class="grid g3">
        <div class="card"><h4>Charges</h4><p>₹1,400 to ₹2,600 a month depending on the route, billed with the term fee. Charges are revised at the start of each session.</p></div>
        <div class="card"><h4>Registration</h4><p>Apply at the transport counter with the residential address proof. Allotment depends on seat availability on the route.</p></div>
        <div class="card"><h4>Change of stop</h4><p>Written request a week in advance. A child may be dropped only at the registered stop, with no exceptions on verbal requests.</p></div>
        <div class="card"><h4>Safety</h4><p>Speed governors, GPS, first-aid box, fire extinguisher, and a female attendant on every trip. Drivers are police verified and tested annually.</p></div>
        <div class="card"><h4>Discipline</h4><p>The bus is a privilege, not a right. Standing, shouting or leaning out means a warning, then withdrawal of the facility.</p></div>
        <div class="card"><h4>Withdrawal</h4><p>One month's written notice, or one month's charge in lieu. Refunds are adjusted in the next term bill.</p></div>
      </div>

      <div class="panel" style="margin-top:24px">
        <h3>Transport office</h3>
        <p class="sub" style="margin-bottom:0">Mr. Devender Solanki · 011-2755 4400, extension 108 · transport@gvps.edu.in. Live bus tracking for parents will be added to the parent portal in the next phase.</p>
      </div>
    </div>`;
  });

  /* ================= PRIVACY ================= */
  A.route("/privacy", "Privacy policy", function () {
    return `<div class="shell">
      ${head("Privacy policy", "How the school collects, uses and protects student and parent information. Last revised 1 April 2026.", "Home · Privacy policy")}
      ${E().privacy.map((p) => `<div class="panel"><h3>${esc(p[0])}</h3><p style="margin:0">${esc(p[1])}</p></div>`).join("")}
    </div>`;
  });

  /* ================= SITEMAP ================= */
  A.route("/sitemap", "Sitemap", function () {
    const groups = [
      ["School", [["Home", "#/home"], ["About the school", "#/about"], ["Vision and mission", "#/vision"],
      ["Principal's message", "#/principal"], ["Management", "#/management"], ["Achievements", "#/achievements"]]],
      ["Academics", [["Academics", "#/academics"], ["Subjects", "#/subjects"], ["Timetable", "#/timetable"],
      ["Study material", "#/material"], ["Homework", "#/homework"], ["Exams and results", "#/exams"],
      ["Academic calendar", "#/calendar"], ["Faculty", "#/teachers"]]],
      ["Admissions", [["Admission and registration", "#/admission"], ["Track an application", "#/track"],
      ["Frequently asked questions", "#/faq"], ["Fees", "#/fees"]]],
      ["Campus", [["Campus and infrastructure", "#/campus"], ["Transport", "#/transport"],
      ["Uniform and timings", "#/uniform"], ["Student life", "#/studentlife"]]],
      ["School life", [["Events and sports", "#/events"], ["News", "#/news"], ["Photo gallery", "#/gallery"],
      ["Video gallery", "#/videos"], ["Notices", "#/notices"]]],
      ["Records", [["Students", "#/students"], ["Attendance", "#/attendance"], ["Leave applications", "#/leave"],
      ["ID cards", "#/idcard"]]],
      ["Portals", [["Login", "#/login"], ["Admin console", "#/admin"]]],
      ["Compliance", [["Mandatory public disclosure", "#/disclosure"], ["Downloads", "#/downloads"],
      ["Terms and policies", "#/terms"], ["Privacy policy", "#/privacy"], ["Contact", "#/contact"]]]
    ];
    return `<div class="shell">
      ${head("Sitemap", "Every page on this website.", "Home · Sitemap")}
      <div class="grid g4" style="align-items:start">
        ${groups.map((g) => `<div class="card"><h4>${esc(g[0])}</h4>
          ${g[1].map((l) => `<a href="${l[1]}" style="display:block;padding:5px 0;font-size:.9rem">${esc(l[0])}</a>`).join("")}
        </div>`).join("")}
      </div>
    </div>`;
  });

  /* ================= NOTICES (full list) ================= */
  A.route("/notices", "Notice board", function () {
    const tags = [...new Set(D().notices.map((n) => n.tag))];
    return `<div class="shell">
      ${head("Notice board", "Every circular issued this session, most recent first.", "Home · Notice board")}
      <div class="filters">
        <div class="field"><label for="ntF">Type</label><select id="ntF"><option value="">Everything</option>${opts(tags)}</select></div>
        <div class="field grow"><label for="ntQ">Search</label><input id="ntQ" placeholder="e.g. datesheet, fee, holiday"></div>
      </div>
      <div id="ntOut2"></div>
    </div>`;
  }, function () {
    const f = document.getElementById("ntF"), q = document.getElementById("ntQ");
    const draw = () => {
      const rows = D().notices.filter((n) => (!f.value || n.tag === f.value) &&
        (!q.value.trim() || n.title.toLowerCase().includes(q.value.trim().toLowerCase())));
      document.getElementById("ntOut2").innerHTML = tableOf([
        { label: "Date", cell: (n) => A.fdate(n.date) },
        { label: "Type", cell: (n) => `<span class="pill info">${esc(n.tag)}</span>` },
        { label: "Notice", cell: (n) => esc(n.title) }
      ], rows, { emptyTitle: "No notice matches", emptyMsg: "Clear the search box." });
    };
    f.onchange = draw; q.oninput = draw; draw();
  });

  /* ================= HOMEWORK (public, class-wise) ================= */
  A.route("/homework", "Homework", function () {
    return `<div class="shell">
      ${head("Homework", "What was given, by which teacher, and when it is due. Updated by the subject teacher on the day it is set.", "Home · Academics · Homework")}
      <div class="filters">
        <div class="field"><label for="hwC">Class</label>${A.classSelect("hwC", true)}</div>
        <div class="field"><label for="hwS">Subject</label><select id="hwS"><option value="">All subjects</option>
          ${opts([...new Set(E().homework.map((h) => h.subject))].sort())}</select></div>
        <div class="field"><label for="hwD">Show</label><select id="hwD">
          <option value="due">Still due</option><option value="all">Everything</option></select></div>
      </div>
      <div id="hwOut"></div>
      <div class="panel" style="margin-top:24px">
        <h3>Set homework</h3>
        <p class="sub">For teachers. This is also available inside the teacher login.</p>
        <div class="grid g4" style="gap:14px">
          <div class="field"><label for="hnC">Class</label>${A.classSelect("hnC")}</div>
          <div class="field"><label for="hnS">Subject</label><input id="hnS" placeholder="e.g. Science"></div>
          <div class="field"><label for="hnD">Due date</label><input id="hnD" type="date"></div>
          <div class="field"><label for="hnT">Teacher</label><input id="hnT" placeholder="Your name"></div>
        </div>
        <div class="field" style="margin-top:14px"><label for="hnH">What is to be done</label><input id="hnH" placeholder="e.g. Exercise 3.4, all questions"></div>
        <div class="field" style="margin-top:14px"><label for="hnN">Instructions</label><textarea id="hnN" placeholder="Anything the child needs to know before starting"></textarea></div>
        <button class="btn dark" id="hnGo" style="margin-top:16px">Publish homework</button>
      </div>
    </div>`;
  }, function () {
    const c = document.getElementById("hwC"), s = document.getElementById("hwS"), d = document.getElementById("hwD");
    const today = new Date().toISOString().slice(0, 10);
    const draw = () => {
      const rows = (D().homework || E().homework).filter((h) =>
        (!c.value || h.class === c.value) && (!s.value || h.subject === s.value) &&
        (d.value === "all" || h.due >= today))
        .sort((a, b) => a.due.localeCompare(b.due));
      document.getElementById("hwOut").innerHTML = tableOf([
        { label: "Class", cell: (h) => A.clsLabel(h.class) },
        { label: "Subject", cell: (h) => esc(h.subject) },
        { label: "Work", cell: (h) => `<b>${esc(h.title)}</b><div class="hint">${esc(h.detail)}</div>` },
        { label: "Given", cell: (h) => A.fdate(h.date) },
        { label: "Due", cell: (h) => A.fdate(h.due) },
        { label: "Teacher", cell: (h) => esc(h.teacher) },
        { label: "Status", cell: (h) => A.statusPill(h.due < today ? "Overdue" : "Due") }
      ], rows, { emptyTitle: "Nothing due", emptyMsg: "Switch to 'Everything' to see past homework." });
    };
    [c, s, d].forEach((el) => el.onchange = draw); draw();

    document.getElementById("hnGo").onclick = async function () {
      const g = (id) => document.getElementById(id).value.trim();
      if (!g("hnS") || !g("hnH") || !g("hnD")) { A.toast("Add the subject, the work and a due date."); return; }
      D().homework = D().homework || E().homework;
      this.disabled = true;
      await A.submitRecord("homework", {
        date: new Date().toISOString().slice(0, 10), class: g("hnC"), subject: g("hnS"),
        title: g("hnH"), detail: g("hnN"), due: g("hnD"), teacher: g("hnT") || "Subject teacher"
      }, "Homework published for " + A.clsLabel(g("hnC")) + ".");
      this.disabled = false;
      A.render();
    };
  });
})();

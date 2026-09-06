/* ---------------------------------------------------------------
   Data layer.
   With CONFIG.API_URL empty, everything runs off assets/seed.js.
   With it set, the site reads and writes your Google Sheet through
   the Apps Script web app in backend/Code.gs.
   --------------------------------------------------------------- */
(function () {
  const clone = (o) => JSON.parse(JSON.stringify(o));

  const Store = {
    data: clone(window.SEED),
    live: false,

    async boot() {
      const url = (window.CONFIG.API_URL || "").trim();
      if (!url) return;
      try {
        const res = await fetch(url + "?action=bootstrap", { redirect: "follow" });
        const json = await res.json();
        if (!json || json.ok !== true) throw new Error(json && json.error || "Bad response");
        // Only replace the collections the sheet actually returned.
        Object.keys(json.data || {}).forEach((k) => {
          if (json.data[k] && (Array.isArray(json.data[k]) ? json.data[k].length : true)) {
            Store.data[k] = json.data[k];
          }
        });
        Store.live = true;
        const el = document.getElementById("dataMode");
        if (el) el.textContent = "Connected to Google Sheets";
      } catch (err) {
        console.warn("Sheets unreachable, using sample data:", err);
        const el = document.getElementById("dataMode");
        if (el) el.textContent = "Sheet unreachable — showing sample data";
      }
    },

    /* Send a row to a sheet tab. action: append | update | delete */
    async push(sheet, action, row) {
      const url = (window.CONFIG.API_URL || "").trim();
      if (!url) return { ok: false, offline: true };
      const res = await fetch(url, {
        method: "POST",
        // text/plain keeps the browser from sending a CORS preflight,
        // which Apps Script web apps do not answer.
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ sheet, action, row })
      });
      return res.json();
    },

    /* helpers used across pages */
    students() { return Store.data.students; },
    student(id) { return Store.data.students.find((s) => s.id === id); },
    teacher(code) { return Store.data.teachers.find((t) => t.code === code); },
    inClass(cls, sec) {
      return Store.data.students
        .filter((s) => (!cls || s.class === cls) && (!sec || s.section === sec))
        .sort((a, b) => a.roll - b.roll);
    },
    attendanceOf(id) { return Store.data.attendance[id] || ""; },
    attendanceRate(id) {
      const m = Store.attendanceOf(id);
      if (!m) return 0;
      const p = (m.match(/P/g) || []).length;
      return Math.round((p / m.length) * 100);
    },
    resultsOf(id, exam) {
      return Store.data.results.filter((r) => r.studentId === id && (!exam || r.exam === exam));
    },
    sections(cls) { return (Store.data.sectionsMap || {})[cls] || ["A", "B"]; },
    subjects(cls, sec) { return (Store.data.subjectsMap || {})[cls + "-" + sec] || []; }
  };

  window.Store = Store;
})();

# Global Vision Public School — website

A complete school website for LKG to Class XII. Plain HTML, CSS and JavaScript — no build
step, no framework. It runs straight from GitHub Pages, and the backend is a Google Sheet
driven by Google Apps Script.

It ships with 100 sample students and full sample records so you can click through
everything before typing a single real name.

---

## Files

```
index.html                  page shell, crest, navigation, footer
assets/
  config.js                 your Apps Script URL and admin PIN  ← edit this
  styles.css                all styling
  seed.js                   100 students + all sample records   ← replace later
  api.js                    talks to the Google Sheet, falls back to seed.js
  app.js                    router, home, about, students, admission
  pages-academics.js        attendance, timetable, teachers, exams, material, leave
  pages-school.js           events, ID cards, uniform, fees, gallery, terms, contact, admin
backend/
  Code.gs                   paste this into Google Apps Script
```

---

## Step 1 — put it on GitHub Pages

1. Create a new repository, for example `gvps-website`.
2. Upload every file, keeping the folder structure exactly as above.
3. Go to **Settings → Pages**, set **Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Wait a minute. The site is live at `https://<your-username>.github.io/gvps-website/`.

At this point everything works and shows the sample data. Forms will accept input but
nothing is stored yet.

## Step 2 — connect the Google Sheet

1. Create a new Google Sheet and name it **GVPS Database**.
2. **Extensions → Apps Script**. Delete the sample code, paste in all of `backend/Code.gs`, save.
3. Run the `setupSheets` function once. Approve the permission prompt. It creates every
   tab with the correct headers: students, teachers, attendance, results, timetable,
   material, papers, leaves, admissions, notices, events, fees, routes, enquiries.
4. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the `/exec` URL.
6. Open `assets/config.js` and paste it into `API_URL`. Change `ADMIN_PIN` too.
7. Commit and push.

The footer now reads "Connected to Google Sheets". The site reads from the sheet on every
load, and every form writes back to it.

If a tab in the sheet is empty, the site quietly falls back to the sample data for that
section — so you can migrate one thing at a time.

---

## Step 3 — put in your own data

Two ways:

**Type it into the sheet.** Easiest for students, teachers, fees and routes. Keep the
header row exactly as `setupSheets` created it. Class values are `LKG`, `UKG`, `1`, `2` …
`12` as plain text. Section is `A` or `B`, except Classes XI and XII which use `Science`
and `Commerce`.

**Use the admin console.** Go to `#/admin`, enter the PIN, and add students, enter marks,
approve leave, publish notices and add events. Everything typed there goes into the sheet.

Once your real data is in the sheet, you can empty `assets/seed.js` down to the parts that
rarely change (school details, period timings, uniform, facilities, gallery captions).

---

## What each page does

| Page | What it holds |
|---|---|
| Home | Hero, live notice board, upcoming events, quick links, facilities |
| About | Leadership, approach, wing-wise strength, facilities |
| Admission | Registration form, process, age criteria, enquiry register |
| Students | All 100 records, filters, and a full bio-data card per child: parents, occupations, address, transport, blood group, achievements, 30-day attendance strip and marks |
| Attendance | Monthly register grid (click any mark to correct it), roll call for a class on a date, and a single-child lookup |
| Timetable | Period-by-period grid by class and section, the same grid by teacher, and the period timings |
| Teachers | All staff, subject, qualification, experience, class teacher duty, sections handled, weekly period load |
| Exams & results | Exam schedule, class-wise datesheet, printable mark sheet with grades, question papers and answer keys, exam rules |
| Study material | Class and subject filters, plus an upload form for teachers |
| Leave | Parent application form and the status of every application |
| Events & sports | Full calendar, category filter, inter-house standings, sports offered |
| ID cards | Printable front and back card for any child |
| Uniform & timings | Summer, winter and house dress by wing; gate timings; period plan |
| Fees & transport | Class-wise fee heads and all six bus routes |
| Gallery | Photo tiles, ready to swap for real images |
| Terms | Ten school policies |
| Contact | Message form, department contacts, map link |
| Admin | PIN-gated: add students, enter marks, approve leave and admissions, publish notices and events, sheet setup guide |

---

## Customising

**School name and details** — `assets/seed.js`, the `school` object near the top.

**Hero picture** — the hero currently draws an illustration of a school building. To use a
photograph, open `assets/app.js`, find `heroArt()`, and replace the whole `<svg>…</svg>`
with:

```html
<img src="assets/school.jpg" alt="">
```

Put your photo at `assets/school.jpg`. Landscape, at least 1600px wide, works best.

**Colours** — the top of `assets/styles.css` has one block of variables. `--ink` is the
navy, `--brass` is the gold. Change those two and the whole site follows.

**Gallery photos** — make an `assets/gallery/` folder and swap each `<div class="gal">`
in `pages-school.js` for an `<img>`.

**Adding a page** — one call does it:

```js
App.route("/library", "Library", function () {
  return `<div class="shell">${App.head("Library", "Subtitle here", "Home · Library")}
    <div class="panel"><h3>Heading</h3><p>Content.</p></div></div>`;
});
```

Then add `<a href="#/library">Library</a>` to the nav in `index.html`.

---

## Notes

- The admin PIN keeps casual visitors out of the console. It is not real security — anyone
  can read `config.js`. For proper access control, restrict who can open the Apps Script
  deployment, or put the console in a separate private repository.
- Sample phone numbers, addresses and names are invented. Replace them before going live.
- Nothing is stored in the browser. Anything you enter before connecting the sheet stays
  only until you reload the page.

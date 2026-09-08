# Global Vision Public School — website and school platform

A complete school website plus a working school platform: public pages, an online
admission system with a CRM, four separate logins, and an admin console. Plain HTML, CSS
and JavaScript — no build step, no framework. It runs from GitHub Pages, and the backend
is a Google Sheet driven by Google Apps Script.

It ships with 100 sample students and full sample records so you can click through
everything before typing a single real name.

---

## Files

```
index.html                  page shell, crest, mega menu, footer, SEO tags
404.html                    sends unknown paths back into the app
robots.txt                  ← edit the host
sitemap.xml                 ← edit the host
assets/
  config.js                 your Apps Script URL and admin PIN   ← EDIT THIS
  styles.css                all styling, one variable block at the top
  seed.js                   100 students, teachers, timetable, attendance, results
  seed-extra.js             principal, management, campus, clubs, news, FAQs,
                            downloads, disclosure, homework, CRM leads, policies
  i18n.js                   English / हिंदी dictionary and switcher
  api.js                    talks to the sheet, falls back to the sample data
  app.js                    router, homepage, students, admission, search
  pages-academics.js        attendance, timetable, faculty, exams, material, leave
  pages-school.js           events, ID cards, uniform, fees, gallery, terms,
                            contact, admin console
  pages-info.js             vision, principal, management, academics, subjects,
                            campus, student life, achievements, news, videos,
                            calendar, disclosure, downloads, FAQ, transport,
                            privacy, sitemap, notices, homework
  pages-portal.js           login, parent / student / teacher dashboards,
                            fee receipts, application tracker, admission CRM
  images/                   your five school photographs
  og-image.jpg              social-media preview image
backend/
  Code.gs                   paste this into Google Apps Script
```

---

## Step 1 — put it on GitHub Pages

1. Create a repository, for example `gvps-website`.
2. Upload every file, keeping the folder structure exactly as above.
3. **Settings → Pages**, Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
4. The site is live at `https://<your-username>.github.io/gvps-website/`.

At this point everything works on the sample data. Forms accept input but nothing is stored.

## Step 2 — connect the Google Sheet

1. Create a Google Sheet named **GVPS Database**.
2. **Extensions → Apps Script**, delete the sample code, paste in all of `backend/Code.gs`, save.
3. Run `setupSheets` once and approve the permission prompt. It creates all 19 tabs with
   the right headers and one starter admin account in the `users` tab.
4. **Deploy → New deployment → Web app** — Execute as **Me**, Who has access **Anyone**.
5. Copy the `/exec` URL into `API_URL` in `assets/config.js`. Change `ADMIN_PIN` too.
6. Open the sheet's `users` tab and change the admin password from `ChangeThisNow!`.
7. Commit and push.

The footer now reads "Connected to Google Sheets". If a tab is empty, the site quietly
falls back to sample data for that section, so you can migrate one thing at a time.

**Sheet tabs created:** students, teachers, attendance, results, timetable, material,
papers, leaves, admissions, notices, events, fees, routes, enquiries, homework, news,
leads, achievements, testimonials, downloads, users.

---

## The four logins

| Role | Username | Password | Where it is checked |
|---|---|---|---|
| Parent | Admission number | Child's date of birth, `YYYY-MM-DD` | `students` tab |
| Student | Admission number or student ID | Own date of birth | `students` tab |
| Teacher | Employee code, e.g. `T004` | From the `users` tab (demo: `t004@gvps`) | `users` tab |
| Admin | `admin` | From the `users` tab (demo: the `ADMIN_PIN`) | `users` tab |

Parents and students need no account created for them — adding a child to the `students`
tab is enough.

**What each portal shows**

- **Parent** — child's profile, attendance with a 30-day strip, homework due, timetable,
  results per exam, fee status with printable receipts, leave application and history,
  notices, and the class teacher's contact.
- **Student** — homework, timetable, study material, results, attendance.
- **Teacher** — today's periods, the class they are class teacher of with contact numbers
  and attendance flags, set homework, upload study material, links to roll call and marks.
- **Admin** — add students, enter marks, approve leave and admissions, publish notices and
  events, sheet setup guide, plus the **Admission CRM** at `#/crm`.

Security note: this is a school-office level of protection, not bank-grade. Passwords sit
in the sheet as plain text and the admin PIN sits in `config.js`, which anyone can read.
Before real student data goes in, at minimum change every default password, and consider
hashing passwords in `Code.gs` (there is a comment marking the spot) and restricting who
can open the Apps Script deployment.

---

## Every page

**School** — Home · About · Vision and mission · Principal's message · Management · Achievements
**Academics** — Academic structure · Subjects by class · Timetable · Study material ·
Homework · Exams and results · Academic calendar · Faculty
**Admissions** — Apply online (issues an Application ID) · Track an application · FAQs · Fees
**Campus** — Infrastructure · Transport · Uniform and timings · Student life
**School life** — Events and sports · News · Notice board · Photo gallery · Video gallery
**Records** — Student records · Attendance register · Leave applications · ID cards
**Portals** — Login · Parent · Student · Teacher · Admin console · Admission CRM
**Compliance** — Mandatory public disclosure · Downloads · Terms · Privacy policy · Sitemap · Contact

Site-wide: global search (the ⌕ button, or Ctrl/⌘+K), an English/हिंदी switcher, and a
floating WhatsApp admission-enquiry button.

---

## Your photographs

The five images you sent are installed in `assets/images/` and used as:

| File | Used on |
|---|---|
| `hero-campus.jpg` | homepage hero background, gallery, social preview |
| `campus-aerial.jpg` | homepage "About our school", About page banner, Campus page |
| `students.jpg` | homepage "Student life", Admission page, Student life page |
| `entrance.jpg` | homepage "Campus and facilities", Campus page |
| `crest-gate.jpg` | gallery, Campus page |

To swap one, replace the file keeping the same name. To add more, drop them in
`assets/images/` and add an entry to `galleryImages()` near the top of `assets/app.js`:

```js
{ src: "assets/images/annual-day-2026.jpg", title: "Annual Day 2026", tag: "Cultural" }
```

Keep images under about 500 KB and at least 1400px wide.

---

## Branding already applied from your crest

- Established **2024**
- Motto **सीखो, प्रेरित करो, हासिल करो — Learn, Inspire, Achieve**
- Tagline **Shaping future leaders**

Because the school opened in 2024, the mandatory-disclosure page shows a note in place of
three years of board results, and the achievements list starts at 2024. Once your first
Class X batch appears in 2027, fill the `results` array in `seed-extra.js` — the format is
in a comment right there.

**Placeholder details you must replace before going live:** affiliation number 2730456,
school code 27301, the address, phone numbers, email addresses, the society registration
number, all staff names, the fee figures, the bus routes, and every certificate link on the
disclosure page. All of them live in `assets/seed.js` and `assets/seed-extra.js`.

---

## Customising

**School details** — `assets/seed.js`, the `school` object at the very top; and the
`identity` object at the top of `assets/seed-extra.js` (WhatsApp number, helpline,
affiliation dates, social links).

**Colours** — the top of `assets/styles.css` is one block of variables. `--ink` is the
navy, `--brass` the gold. Change those two and the whole site follows.

**Hindi translations** — `assets/i18n.js` holds an English → Hindi dictionary. Add a pair
and that phrase is translated everywhere it appears; no page code changes. Anything not in
the dictionary stays in English, so you can extend it gradually.

**Adding a page** — one call:

```js
App.route("/library", "Library", function () {
  return `<div class="shell">${App.head("Library", "Subtitle", "Home · Library")}
    <div class="panel"><h3>Heading</h3><p>Content.</p></div></div>`;
});
```

Then add `<a href="#/library">Library</a>` to a menu in `index.html`.

---

## SEO

Meta description, canonical link and page title update on every route. Open Graph tags,
a `School` JSON-LD block, `robots.txt` and `sitemap.xml` are in place — **change
`example.github.io/gvps-website` to your real address** in `index.html` (the canonical
tag), `robots.txt` and `sitemap.xml`.

One honest limitation: the site uses hash routes (`#/admission`), so Google indexes it
largely as a single page. That is fine for a school site, and searches for the school name
will find it. If you later want `/admissions` to rank on its own for "CBSE school in
Rohini", the fix is to split the three or four pages that matter — admissions, fees,
disclosure, contact — into separate HTML files with their own titles and descriptions.
Everything else can stay as it is.

After launch: submit the sitemap in Google Search Console, and create a Google Business
Profile for the school — for a local school that usually does more than on-page SEO.

---

## What is deliberately not built yet

- **Online fee payment.** The parent portal shows the amount and a "Pay now" button that
  explains the position. Wiring a gateway needs a merchant account and a server that can
  hold a secret key, which GitHub Pages cannot do.
- **Live bus tracking** in the parent portal.
- **SMS and email notifications** on admission or leave status changes. Apps Script can
  send email with `MailApp.sendEmail` if you want to add it.
- **A mobile app.** The site is responsive; a PWA wrapper is the cheaper next step.

---

## Notes

- Sample names, phone numbers and addresses are invented. Replace them before going live.
- Nothing is stored in the browser except the language choice and the login session.
  Anything entered before the sheet is connected lasts only until you reload.
- Photographs of children should not be published without the parents' consent. The
  privacy policy on the site says so; make sure the practice matches.

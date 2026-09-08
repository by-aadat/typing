/* ---------------------------------------------------------------
   English / हिंदी switcher.

   How it works: after every page render, any text node whose exact
   text matches a key below is swapped for the Hindi string. Add a
   pair to DICT and that phrase is translated everywhere it appears —
   no page code has to change.

   Only exact matches are replaced, so names, marks and dates are
   never touched.
   --------------------------------------------------------------- */
window.I18N = (function () {

  const DICT = {
    /* top bar and shell */
    "Home": "मुख्य पृष्ठ",
    "About": "विद्यालय परिचय",
    "About the school": "विद्यालय परिचय",
    "Academics": "शिक्षण",
    "Admission": "प्रवेश",
    "Admissions": "प्रवेश",
    "Students": "विद्यार्थी",
    "Attendance": "उपस्थिति",
    "Timetable": "समय सारणी",
    "Exams & results": "परीक्षा एवं परिणाम",
    "Examinations and results": "परीक्षा एवं परिणाम",
    "Study material": "अध्ययन सामग्री",
    "Teachers & staff": "शिक्षक एवं कर्मचारी",
    "Teachers and staff": "शिक्षक एवं कर्मचारी",
    "Leave applications": "अवकाश आवेदन",
    "Events & sports": "कार्यक्रम एवं खेल",
    "Events and sports": "कार्यक्रम एवं खेल",
    "ID cards": "पहचान पत्र",
    "Student ID card": "विद्यार्थी पहचान पत्र",
    "Uniform & timings": "गणवेश एवं समय",
    "Uniform and school timings": "गणवेश एवं विद्यालय समय",
    "Fees & transport": "शुल्क एवं परिवहन",
    "Fees and transport": "शुल्क एवं परिवहन",
    "Gallery": "चित्र वीथिका",
    "Video gallery": "वीडियो वीथिका",
    "Terms & policies": "नियम एवं नीतियाँ",
    "Terms and policies": "नियम एवं नीतियाँ",
    "Contact": "संपर्क",
    "Contact the school": "विद्यालय से संपर्क",
    "Login": "लॉगिन",
    "Sign in": "लॉगिन करें",
    "Sign out": "लॉग आउट",
    "Admin console": "प्रशासन पटल",
    "Search": "खोजें",
    "More": "अन्य",
    "News": "समाचार",
    "Notice board": "सूचना पट्ट",
    "Notices": "सूचनाएँ",
    "Downloads": "डाउनलोड",
    "Sitemap": "साइटमैप",
    "Privacy policy": "गोपनीयता नीति",
    "Mandatory public disclosure": "अनिवार्य सार्वजनिक प्रकटीकरण",
    "Campus": "परिसर",
    "Campus and infrastructure": "परिसर एवं अवसंरचना",
    "Transport": "परिवहन",
    "School transport": "विद्यालय परिवहन",
    "Student life": "विद्यार्थी जीवन",
    "Achievements": "उपलब्धियाँ",
    "Subjects": "विषय",
    "Subjects by class": "कक्षावार विषय",
    "Homework": "गृहकार्य",
    "Academic calendar": "शैक्षणिक कैलेंडर",
    "Vision and mission": "दृष्टि एवं ध्येय",
    "Principal's message": "प्राचार्य का संदेश",
    "Management": "प्रबंधन",
    "Frequently asked questions": "अक्सर पूछे जाने वाले प्रश्न",
    "Parent portal": "अभिभावक पटल",
    "Student portal": "विद्यार्थी पटल",
    "Teacher portal": "शिक्षक पटल",
    "Admission CRM": "प्रवेश प्रबंधन",
    "Track an application": "आवेदन की स्थिति",
    "Track your application": "अपने आवेदन की स्थिति देखें",

    /* buttons and common actions */
    "Apply for admission": "प्रवेश हेतु आवेदन करें",
    "Check attendance": "उपस्थिति देखें",
    "Explore our school": "विद्यालय देखें",
    "Send registration": "पंजीकरण भेजें",
    "Send application": "आवेदन भेजें",
    "Send message": "संदेश भेजें",
    "Print card": "कार्ड प्रिंट करें",
    "Print this mark sheet": "अंक तालिका प्रिंट करें",
    "Print receipt": "रसीद प्रिंट करें",
    "Show mark sheet": "अंक तालिका दिखाएँ",
    "Show attendance": "उपस्थिति दिखाएँ",
    "Check status": "स्थिति देखें",
    "Save roll call": "उपस्थिति सुरक्षित करें",
    "Save marks": "अंक सुरक्षित करें",
    "Publish notice": "सूचना प्रकाशित करें",
    "Publish homework": "गृहकार्य प्रकाशित करें",
    "Publish material": "सामग्री प्रकाशित करें",
    "Add to rolls": "नामांकन में जोड़ें",
    "Unlock": "खोलें",
    "Open dashboard": "पटल खोलें",
    "See the full calendar": "पूरा कैलेंडर देखें",
    "Read the full story": "पूरी खबर पढ़ें",
    "Download": "डाउनलोड",
    "Open": "खोलें",
    "Everything": "सभी",
    "All": "सभी",
    "All classes": "सभी कक्षाएँ",

    /* frequent labels */
    "Class": "कक्षा",
    "Section": "वर्ग",
    "Roll": "क्रमांक",
    "Name": "नाम",
    "Student": "विद्यार्थी",
    "Father": "पिता",
    "Mother": "माता",
    "Date": "दिनांक",
    "Day": "दिन",
    "Subject": "विषय",
    "Teacher": "शिक्षक",
    "Status": "स्थिति",
    "Reason": "कारण",
    "From": "से",
    "To": "तक",
    "Days": "दिन",
    "Marks": "अंक",
    "Grade": "श्रेणी",
    "Total marks": "कुल अंक",
    "Percentage": "प्रतिशत",
    "Present": "उपस्थित",
    "Absent": "अनुपस्थित",
    "House": "सदन",
    "Fees": "शुल्क",
    "Paid": "भुगतान हो चुका",
    "Due": "बकाया",
    "Pending": "विचाराधीन",
    "Approved": "स्वीकृत",
    "Rejected": "अस्वीकृत",
    "Period": "कालांश",
    "Time": "समय",
    "Venue": "स्थान",
    "Category": "श्रेणी",
    "Type": "प्रकार",
    "Title": "शीर्षक",
    "Details": "विवरण",
    "Address": "पता",
    "Mobile": "मोबाइल",
    "Email": "ईमेल",
    "Admission number": "प्रवेश संख्या",
    "Date of birth": "जन्म तिथि",
    "Blood group": "रक्त समूह",
    "Students on roll": "नामांकित विद्यार्थी",
    "Teachers and educators": "शिक्षक एवं प्रशिक्षक",
    "Session 2026 – 27": "सत्र 2026 – 27"
  };

  let lang = "en";

  function walk(node) {
    if (node.nodeType === 3) {
      const t = node.nodeValue.trim();
      if (!t) return;
      if (lang === "hi") {
        if (DICT[t]) {
          if (!node.__en) node.__en = node.nodeValue;
          node.nodeValue = node.nodeValue.replace(t, DICT[t]);
        }
      } else if (node.__en) {
        node.nodeValue = node.__en;
        delete node.__en;
      }
      return;
    }
    if (node.nodeType !== 1) return;
    const tag = node.tagName;
    if (tag === "SCRIPT" || tag === "STYLE" || tag === "IFRAME") return;
    /* placeholders and option labels */
    ["placeholder", "title", "aria-label"].forEach((attr) => {
      const v = node.getAttribute && node.getAttribute(attr);
      if (v && DICT[v.trim()] && lang === "hi") node.setAttribute(attr, DICT[v.trim()]);
    });
    for (let i = 0; i < node.childNodes.length; i++) walk(node.childNodes[i]);
  }

  function apply() {
    document.documentElement.lang = lang === "hi" ? "hi" : "en";
    ["main", "topbarShell", "footerShell"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) walk(el);
    });
  }

  function set(next) {
    lang = next;
    try { localStorage.setItem("gvps.lang", next); } catch (e) { }
    const btn = document.getElementById("langBtn");
    if (btn) btn.textContent = lang === "hi" ? "English" : "हिंदी";
    apply();
  }

  function init() {
    try { lang = localStorage.getItem("gvps.lang") || "en"; } catch (e) { }
    const btn = document.getElementById("langBtn");
    if (btn) {
      btn.textContent = lang === "hi" ? "English" : "हिंदी";
      btn.onclick = () => set(lang === "hi" ? "en" : "hi");
    }
    apply();
  }

  return { init, apply, set, dict: DICT, current: () => lang };
})();

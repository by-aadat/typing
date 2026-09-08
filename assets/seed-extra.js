/* Content records for the informational and compliance pages.
   Everything here is plain data — edit the text, dates and figures directly.
   Once the Google Sheet is connected, matching tabs override these. */
window.SEED_EXTRA = {

  /* ---------- identity ---------- */
  identity: {
    tagline: "Shaping future leaders",
    shortName: "GVPS",
    established: 2024,
    schoolCode: "27301",
    affiliationNo: "2730456",
    affiliationStatus: "Senior Secondary (Class XII)",
    affiliationValidFrom: "2024-04-01",
    affiliationValidTo: "2029-03-31",
    society: "Global Vision Education Society (Regd. S/2214/2023)",
    whatsapp: "919810012345",
    admissionHelpline: "+91 98100 12345",
    admissionEmail: "admissions@gvps.edu.in",
    principalEmail: "principal@gvps.edu.in",
    officeHours: "Monday to Saturday, 8:00 AM to 3:00 PM",
    mapQuery: "Sector 9 Rohini New Delhi",
    social: {
      facebook: "https://facebook.com/", instagram: "https://instagram.com/",
      youtube: "https://youtube.com/", x: "https://x.com/"
    }
  },

  /* ---------- vision, mission, values ---------- */
  vision: "To create confident, responsible and lifelong learners who contribute positively to society.",
  mission: [
    "Teach for understanding rather than for marks, and assess continuously.",
    "Keep classes small enough that a teacher finishes a round of the room every period.",
    "Give every child a stage — house assembly, debate, sports field or science bench.",
    "Build character through service, not slogans: each class adopts one community project a year.",
    "Use technology where it teaches something, and put it away where it does not.",
    "Work with parents as partners, with an open Saturday meeting every week."
  ],
  values: [
    { name: "Curiosity", detail: "Questions are welcome mid-lesson. A teacher who says \"good question, let us find out\" is doing the job right." },
    { name: "Discipline", detail: "Punctuality, uniform, homework and honesty in examinations, applied to students and staff alike." },
    { name: "Kindness", detail: "Bullying is treated as a serious matter, and reported cases are acted on within twenty-four hours." },
    { name: "Effort", detail: "Improvement is recognised on the honour board alongside rank, so a child who moves from 45 to 68 is applauded." },
    { name: "Responsibility", detail: "Every class runs its own duty roster for the library corner, plants and notice board." },
    { name: "Rootedness", detail: "Hindi and Sanskrit are taught with the same seriousness as English, and festivals are celebrated across faiths." }
  ],

  whyChoose: [
    { title: "Classes capped at 34", detail: "Two sections per class, no more. Attendance is marked by name every morning, not counted." },
    { title: "Teachers who stay", detail: "Average teaching experience is twelve years and most of our senior faculty have been here over a decade." },
    { title: "Parents see the same records we do", detail: "Attendance, marks, homework and fee receipts are on this website, not locked in a register." },
    { title: "Labs that get used", detail: "Physics, Chemistry, Biology, Computer and a tinkering lab, timetabled as periods rather than kept for visitors." },
    { title: "Sport is compulsory till Class VIII", detail: "Twelve games offered, an inter-house calendar, and a 200m track on campus." },
    { title: "Transport with an attendant on every bus", detail: "Fourteen GPS-tracked buses across six routes, each with a female attendant and a teacher in charge." }
  ],

  /* ---------- people ---------- */
  principal: {
    name: "Dr. Anuradha Vaishnav",
    designation: "Principal",
    qualification: "Ph.D. Education, M.A. English, B.Ed.",
    experience: "27 years in school education, founding Principal at Global Vision",
    message: [
      "A school is not its building. It is what happens in the twenty minutes after a child asks a question that the textbook does not answer.",
      "We opened our gates in 2024. A new school carries an advantage that an old one has to work for: nothing here is done a certain way merely because it has always been done that way. Every routine in this building was chosen on purpose, and we are willing to change any of it that stops serving children.",
      "Parents often ask what makes a good school. My answer has stayed the same. Look at the corridors during a change of period, look at what the children do when no one is watching them, and look at whether the school tells you the truth about your child. Rank and percentage are the easiest things to report and the least useful.",
      "We teach the CBSE course honestly and thoroughly, and we take examinations seriously. But we also expect a child leaving Class XII from here to be able to run a meeting, lose a match without sulking, cook a meal, and argue a position they disagree with.",
      "Our door is open on Saturdays between 11:00 AM and 12:30 PM without an appointment. Please use it."
    ]
  },

  management: [
    { name: "Mr. Om Prakash Vaishnav", role: "Chairman, Global Vision Education Society", detail: "Founder trustee. Retired Deputy Director of Education, Government of NCT of Delhi." },
    { name: "Dr. Anuradha Vaishnav", role: "Principal", detail: "Ph.D. Education. Heads the academic council and the admission committee." },
    { name: "Mr. S. K. Ramanathan", role: "Vice Principal (Senior Wing)", detail: "M.Sc. Mathematics, M.Ed. Oversees Classes IX to XII, examinations and the datesheet." },
    { name: "Mrs. Kavita Bhalla", role: "Headmistress (Primary and Pre-Primary)", detail: "M.A., B.Ed., N.T.T. Oversees LKG to Class V and the early years curriculum." },
    { name: "Mr. J. P. Nagar", role: "Administrative Officer", detail: "Accounts, fees, transport, procurement and statutory compliance." },
    { name: "Ms. Shivani Kohli", role: "School Counsellor", detail: "M.Phil. Clinical Psychology. Career guidance, wellbeing and the anti-bullying cell." }
  ],

  /* ---------- academics ---------- */
  stages: [
    { stage: "Pre-Primary", classes: "LKG – UKG", ages: "3½ – 5½ years", note: "Play, phonics, number sense and motor skills. No written examination; a term-wise observation report goes home instead." },
    { stage: "Primary", classes: "I – V", ages: "5½ – 11 years", note: "Foundational literacy and numeracy, EVS, computer basics, art and games. Two unit tests and two term examinations." },
    { stage: "Middle", classes: "VI – VIII", ages: "11 – 14 years", note: "Science and Social Science split into disciplines, Sanskrit as third language, lab work begins, project-based assessment." },
    { stage: "Secondary", classes: "IX – X", ages: "14 – 16 years", note: "CBSE scheme of studies, internal assessment, practicals, and pre-board examinations in Class X." },
    { stage: "Senior Secondary", classes: "XI – XII", ages: "16 – 18 years", note: "Science and Commerce streams with electives, practical files, and board practicals conducted at school." }
  ],

  streams: [
    { stream: "Science", core: "English Core, Physics, Chemistry", options: "Mathematics or Biology, plus Computer Science or Physical Education", note: "Both Mathematics and Biology together is permitted for students scoring above 85% in Class X." },
    { stream: "Commerce", core: "English Core, Accountancy, Business Studies", options: "Economics, plus Applied Mathematics or Entrepreneurship or Physical Education", note: "Applied Mathematics is recommended for students planning B.Com (Hons) or economics degrees." }
  ],

  curriculum: [
    { area: "Languages", detail: "English throughout. Hindi from LKG. Sanskrit as third language in Classes VI to VIII, with Hindi continuing as an option." },
    { area: "Mathematics", detail: "Concrete-to-abstract approach in the primary years with a maths lab, moving to CBSE syllabus from Class VI." },
    { area: "Science", detail: "Integrated EVS to Class V, then Physics, Chemistry and Biology strands from Class VI with weekly lab periods." },
    { area: "Social Science", detail: "History, Geography, Civics and Economics from Class VI, with map work and a field visit each term." },
    { area: "Computer Science", detail: "Keyboard and block coding in primary, Python and IT from Class VI, and Computer Science or Informatics Practices in senior classes." },
    { area: "Art and Music", detail: "Timetabled through Class VIII — drawing, clay, theatre, vocal and rhythm — and offered as a club thereafter." },
    { area: "Physical Education", detail: "Two periods a week for all classes, compulsory games till Class VIII, and a subject option in Classes XI and XII." },
    { area: "Value education and life skills", detail: "One period a week: road safety, digital safety, first aid, financial literacy, and the class community project." }
  ],

  assessment: [
    { term: "Term I", components: "Periodic Test I (10), Notebook (5), Subject Enrichment (5), Half Yearly Examination (80)", weight: "Reported in the Term I report card" },
    { term: "Term II", components: "Periodic Test II (10), Notebook (5), Subject Enrichment (5), Annual Examination (80)", weight: "Reported in the Annual report card" },
    { term: "Grading", components: "A1 91–100, A2 81–90, B1 71–80, B2 61–70, C1 51–60, C2 41–50, D 33–40, E below 33", weight: "33% is the pass mark in each subject" }
  ],

  /* ---------- campus ---------- */
  campus: [
    { name: "Smart classrooms", detail: "Thirty-two classrooms, each with an interactive panel, wall-mounted fan and light monitoring, and a CCTV camera. Rooms are painted in low-glare colours and every desk faces the board within eight metres.", tag: "Academic" },
    { name: "Physics laboratory", detail: "Twenty-four working stations, optical bench, oscilloscopes and a dark room for optics practicals. Used from Class VI upward.", tag: "Laboratory" },
    { name: "Chemistry laboratory", detail: "Fume hood, eye-wash station, fire blanket and a bonded chemical store. Every practical begins with a safety briefing.", tag: "Laboratory" },
    { name: "Biology laboratory", detail: "Twenty compound microscopes, prepared slide bank, models and a small herbarium maintained by the Eco Club.", tag: "Laboratory" },
    { name: "Computer laboratory", detail: "Forty machines on a wired network, printer, and a separate robotics bench. Filtered internet with usage logs.", tag: "Laboratory" },
    { name: "Mathematics laboratory", detail: "Manipulatives, geoboards, measuring instruments and a puzzle wall used by primary and middle classes.", tag: "Laboratory" },
    { name: "Library", detail: "Over 18,000 titles, twelve periodicals, a digital reading corner and a quiet study zone. Every class has a timetabled library period.", tag: "Academic" },
    { name: "Auditorium", detail: "Four hundred seats, stage lighting and sound. Used for assemblies, house functions, the annual day and parent sessions.", tag: "Facility" },
    { name: "Sports ground and courts", detail: "A 200-metre track, cricket nets, basketball court, skating rink, and an indoor hall for table tennis, badminton, chess and carrom.", tag: "Sports" },
    { name: "Medical room", detail: "Full-time nurse, two beds, oxygen cylinder, AED and a stocked first-aid station. A paediatrician visits twice a week.", tag: "Safety" },
    { name: "Cafeteria", detail: "Hygiene-rated kitchen with a displayed weekly menu. No fried food or aerated drinks are sold on campus.", tag: "Facility" },
    { name: "Safety and security", detail: "Sixty-four CCTV cameras, a manned gate with visitor logging, fire extinguishers on every floor, an annual fire drill, and staff police verification on record.", tag: "Safety" }
  ],

  /* ---------- student life ---------- */
  clubs: [
    { name: "Science Club", meets: "Wednesday, 2:15 PM", incharge: "Ms. Ritika Sabharwal", detail: "Working models, the annual exhibition, and a monthly experiment for the primary wing." },
    { name: "Coding and Robotics Club", meets: "Tuesday and Friday, 2:15 PM", incharge: "Mr. Imran Qureshi", detail: "Python, microcontrollers, line-follower robots and the inter-school robotics meet." },
    { name: "Literary and Debate Club", meets: "Thursday, 2:15 PM", incharge: "Mrs. Anjali Mehrotra", detail: "Declamation, MUN preparation, the school magazine and the annual inter-house debate." },
    { name: "Eco Club", meets: "Monday, 2:15 PM", incharge: "Mrs. Meenakshi Rao", detail: "Kitchen garden, waste segregation audit, plantation drives and the herbarium." },
    { name: "Mathematics Club", meets: "Wednesday, 2:15 PM", incharge: "Mrs. Rekha Dutt", detail: "Olympiad preparation, puzzle wall and the Pi Day quiz." },
    { name: "Cultural and Dramatics Club", meets: "Friday, 2:15 PM", incharge: "Ms. Tanvi Arora", detail: "Annual day production, folk dance, street theatre on social themes." },
    { name: "Music and Rhythm Club", meets: "Tuesday, 2:15 PM", incharge: "Mrs. Latika Verma", detail: "Choir, tabla and keyboard, morning assembly ensemble." },
    { name: "Community Service Club", meets: "Second Saturday", incharge: "Ms. Shivani Kohli", detail: "Class adoption projects, donation drives and visits to a nearby old-age home." }
  ],

  sports: [
    { game: "Cricket", level: "Sub-junior, junior and senior", coach: "Mr. Devender Solanki", facility: "Turf nets and a full ground" },
    { game: "Basketball", level: "Under-14, Under-17", coach: "Mr. Ravinder Malik", facility: "Floodlit outdoor court" },
    { game: "Football", level: "Under-14, Under-17", coach: "Mr. Ravinder Malik", facility: "Main ground" },
    { game: "Athletics", level: "All ages", coach: "Mr. Devender Solanki", facility: "200m track, long jump pit" },
    { game: "Skating", level: "Beginner to advanced", coach: "Ms. Neha Jaiswal", facility: "Dedicated rink" },
    { game: "Table tennis", level: "Under-14, Under-19", coach: "Ms. Neha Jaiswal", facility: "Indoor hall, four tables" },
    { game: "Badminton", level: "Under-14, Under-19", coach: "Mr. Ravinder Malik", facility: "Two indoor courts" },
    { game: "Chess", level: "All ages", coach: "Mr. Gurpreet Bedi", facility: "Activity hall" },
    { game: "Carrom", level: "All ages", coach: "Mr. Gurpreet Bedi", facility: "Activity hall" },
    { game: "Yoga", level: "Classes I to XII", coach: "Mrs. Shalini Pant", facility: "Multipurpose hall" },
    { game: "Taekwondo", level: "Classes III to X", coach: "Mr. Sanjeev Thapa", facility: "Multipurpose hall" },
    { game: "Kho-kho", level: "Under-14", coach: "Mr. Devender Solanki", facility: "Main ground" }
  ],

  achievements: [
    { year: "2026", title: "Zonal Athletics Meet — nine medals", detail: "Our first full contingent at the zonal meet, with medals across sprint, relay and long jump.", category: "Sports" },
    { year: "2026", title: "CBSE Cluster Robotics — third place", detail: "Class XI team, for an autonomous waste-sorting prototype built in the tinkering lab.", category: "Innovation" },
    { year: "2026", title: "Inter-school Hindi Debate — winners", detail: "Delhi region final, Classes IX and XI.", category: "Culture" },
    { year: "2026", title: "Under-17 Basketball — district runners-up", detail: "In the school's first season of inter-school fixtures.", category: "Sports" },
    { year: "2026", title: "Regional Mathematics Olympiad — two qualifiers", detail: "Both from Class IX.", category: "Academic" },
    { year: "2025", title: "Green School Programme — first audit cleared", detail: "Covering air, water, energy, waste and land use, in the school's first year of participation.", category: "Community" },
    { year: "2025", title: "Inter-school Skating — three golds", detail: "Sub-junior rink events.", category: "Sports" },
    { year: "2025", title: "Science Exhibition — merit certificate at cluster level", detail: "For a low-cost water filtration model from Class VIII.", category: "Innovation" },
    { year: "2025", title: "First Annual Day, 'Rang Tarang'", detail: "A production involving 340 students across all wings, covered by the local press.", category: "Culture" },
    { year: "2025", title: "Swachh Vidyalaya recognition at district level", detail: "For waste segregation and the campus kitchen garden.", category: "Community" },
    { year: "2024", title: "School opens with LKG to Class IX", detail: "Ninety-four children on the rolls in the founding session, across two sections per class.", category: "Academic" },
    { year: "2024", title: "CBSE affiliation granted up to Senior Secondary", detail: "Affiliation number 2730456, valid to March 2029.", category: "Academic" }
  ],

  /* ---------- news ---------- */
  news: [
    { date: "2026-09-02", title: "Science Exhibition entries cross a hundred", category: "Academic", summary: "Classes VI to XII have registered 104 working models for the inter-house exhibition on 19 September, the highest since the school opened.", body: "Entries this year lean heavily towards water and energy. The judging panel includes two faculty members from a nearby engineering college. Parents may visit the Science Block between 11:00 AM and 1:00 PM on the day." },
    { date: "2026-08-27", title: "New tinkering lab opens with a 3D printer", category: "Infrastructure", summary: "The Atal Tinkering Lab on the second floor is now open to Classes VI upward during club hours.", body: "The lab holds a 3D printer, microcontroller kits, a soldering bench and a drone assembly station. Slots are booked through the Coding and Robotics Club." },
    { date: "2026-08-18", title: "Independence Day marked with a class-wise tableau", category: "Event", summary: "Each class presented a tableau on one decade of independent India.", body: "The flag was hoisted at 7:30 AM by the Chairman, followed by the school band, a Class XII address and sweets distribution." },
    { date: "2026-08-05", title: "Class X pre-board practice sheets uploaded", category: "Academic", summary: "Subject-wise practice sheets with answer keys are now in the Study Material section.", body: "Sheets follow the current CBSE blueprint. Students should attempt them under timed conditions and submit to the subject teacher for checking." },
    { date: "2026-07-22", title: "Six buses fitted with live GPS tracking", category: "Transport", summary: "Routes 1, 2, 3, 4, 5 and 6 now report live location to the transport office.", body: "Parent access to live tracking will be added to the parent portal in the next phase. Until then, the transport office can be called on extension 108." },
    { date: "2026-07-08", title: "Session 2026–27 begins with 100 children on roll", category: "School", summary: "Classes resumed on 8 July, the school\u2019s third session since opening in 2024.", body: "New admissions joined in LKG, Class I and Class XI. Orientation for parents of pre-primary children was held on the first Saturday." },
    { date: "2026-06-14", title: "Class IX and XI promoted, first board batch registered", category: "Academic", summary: "Our founding cohort moves into Class X, which will sit the CBSE Board Examination in 2027.", body: "CBSE registration for the first Class X batch was completed in June. A pre-board schedule and a doubt-clearing timetable have been shared with parents." },
    { date: "2026-05-30", title: "Summer workshops in coding, theatre and skating", category: "Event", summary: "Three-week workshops ran through May for Classes III to IX.", body: "Two hundred and ten children attended across the three tracks. The theatre track ended with an open performance for parents." },
    { date: "2026-04-19", title: "Parent–teacher meeting attendance touches 94%", category: "School", summary: "The highest turnout recorded for a first-term meeting.", body: "Teachers shared the term assessment plan and the reading list. Written feedback forms were collected and summarised for the academic council." },
    { date: "2026-04-02", title: "Kitchen garden harvest donated to a community kitchen", category: "Community", summary: "The Eco Club harvested spinach, coriander and tomatoes from the campus plot.", body: "The produce was donated to a community kitchen in Sector 11. The club is now planting the summer crop." }
  ],

  videos: [
    { title: "Campus tour", youtubeId: "", duration: "6:12", detail: "A walk through the classrooms, labs, library and ground." },
    { title: "Annual Day 2026 — highlights", youtubeId: "", duration: "11:48", detail: "Excerpts from the production and the prize distribution." },
    { title: "Science Exhibition 2026", youtubeId: "", duration: "8:03", detail: "Students explaining their working models." },
    { title: "Annual Athletic Meet", youtubeId: "", duration: "9:27", detail: "March past, track events and the house relay final." },
    { title: "A day in the pre-primary wing", youtubeId: "", duration: "4:40", detail: "Circle time, phonics, play and the mid-day snack." },
    { title: "Principal's address to new parents", youtubeId: "", duration: "14:15", detail: "Recorded at the orientation session in July." }
  ],

  testimonials: [
    { name: "Meenal Chopra", role: "Parent, Class VII", text: "What I value most is that the class teacher calls before I have to. When my daughter's marks slipped in one term, I heard about it from the school first, with a plan attached." },
    { name: "Ravi Ranjan", role: "Parent, Class II and Class IX", text: "Two children, two very different temperaments, and both are known by name in their sections. That is not something I could say about our previous school." },
    { name: "Aanya Bakshi", role: "Student, Class XII Commerce", text: "The Commerce faculty here make me argue for my answers instead of memorising them. I have never been allowed to hand in something I could not explain out loud." },
    { name: "Dr. Suman Yadav", role: "Parent, Class XI", text: "The laboratories are actually used. My son comes home talking about experiments, not about which chapters were skipped." },
    { name: "Harleen Sethi", role: "Parent, LKG", text: "The pre-primary team sends a short observation note every fortnight. For a first-time parent, that steadiness matters more than any brochure." },
    { name: "Nikhil Arora", role: "Student, Class XI Science", text: "I captain the basketball team and still hold above 90. Nobody here has asked me to choose between the two, which I did not expect." },
    { name: "Sarita Mahajan", role: "Parent, Class V", text: "Fee receipts, attendance, homework — everything is on the website now. I have stopped calling the office for small things." },
    { name: "Col. (Retd.) B. S. Rathore", role: "Grandparent and guardian, Class VIII", text: "Discipline without fear. The children greet you, they hold doors, and they are not frightened of their teachers. That balance is rare." }
  ],

  /* ---------- admissions ---------- */
  eligibility: [
    { class: "LKG", age: "3 years 6 months as on 31 March 2027", documents: "Birth certificate, four photographs, address proof, Aadhaar of the child" },
    { class: "UKG", age: "4 years 6 months as on 31 March 2027", documents: "Above, plus the report card and transfer certificate from the present school" },
    { class: "I", age: "5 years 6 months as on 31 March 2027", documents: "Above, plus the transfer certificate" },
    { class: "II to VIII", age: "One year more for each higher class", documents: "Transfer certificate, last two report cards, birth certificate, address proof, photographs" },
    { class: "IX and XI", age: "As per CBSE norms", documents: "Class VIII or X mark sheet, transfer certificate, character certificate, migration certificate where applicable" },
    { class: "X and XII", age: "Admission only against a vacancy", documents: "As above, plus a no-objection certificate from the previous school and CBSE registration details" }
  ],

  admissionSteps: [
    { step: "Enquiry", detail: "Fill the enquiry form on this site, call the admission helpline, or visit the office. You receive an enquiry number the same day." },
    { step: "Registration", detail: "Submit the registration form with a ₹1,200 non-refundable fee. You receive an Application ID that you can track on this site." },
    { step: "Document submission", detail: "Bring originals and one set of photocopies. The office verifies and returns the originals immediately." },
    { step: "Interaction or assessment", detail: "A play-based interaction for pre-primary. A written assessment in English, Hindi and Mathematics for Class I upward, plus Science for Class IX and XI." },
    { step: "Selection", detail: "The list is put up on the notice board and sent by SMS. Waitlisted applicants are told their position." },
    { step: "Fee payment", detail: "Deposit the admission fee and the first term fee within seven days of the offer." },
    { step: "Admission confirmed", detail: "Uniform measurement, book issue, house allotment and transport registration are completed in the same visit." }
  ],

  admissionFaqs: [
    { q: "When do admissions open for the next session?", a: "Registration for 2027–28 opens on 1 October 2026 and closes on 30 November 2026 for pre-primary, and on 31 December 2026 for other classes." },
    { q: "Is there a sibling preference?", a: "Yes. Siblings of children already on the rolls are considered first for available seats, subject to meeting the age criterion." },
    { q: "Is the registration fee refundable?", a: "No. The ₹1,200 registration fee is non-refundable and does not guarantee a seat." },
    { q: "How many seats are there in each class?", a: "Two sections of up to 34 children each. Vacancies in classes other than LKG and Class XI depend on withdrawals." },
    { q: "Is there an interview for parents?", a: "There is an interaction, not an interview. It helps us understand the child's routine at home. Nothing about it is scored." },
    { q: "Does the school test children in LKG?", a: "No written test is conducted for pre-primary. The interaction is play-based and lasts about twenty minutes." },
    { q: "What is the medium of instruction?", a: "English. Hindi is taught from LKG and Sanskrit is introduced in Class VI." },
    { q: "Is transport available for all areas?", a: "Six routes cover Rohini, Pitampura, Model Town, Punjabi Bagh, Ashok Vihar and Civil Lines. Other areas depend on demand." },
    { q: "Can we visit the campus before applying?", a: "Yes. Campus visits are conducted every Saturday between 10:00 AM and 12:00 noon. Call the helpline to book a slot." },
    { q: "What documents are needed at the time of admission?", a: "Birth certificate, Aadhaar of the child, address proof, four passport photographs, transfer certificate and the last report card where applicable." },
    { q: "Are there concessions?", a: "Ten percent on the tuition fee for a second sibling, and a full concession for wards of serving defence personnel under the school quota." },
    { q: "What if my child has a learning difficulty?", a: "Tell us at the time of registration. We have a counsellor and a shadow-teacher policy, and we will be honest about what we can and cannot support." },
    { q: "Which board does the school follow?", a: "CBSE. The affiliation is up to Senior Secondary level and covers Classes IX to XII." },
    { q: "Which streams are offered in Class XI?", a: "Science and Commerce. Humanities is not offered at present." },
    { q: "How is fee paid?", a: "Online through the parent portal, by cheque at the accounts counter, or by NEFT. Receipts appear in the parent portal within two working days." },
    { q: "What are the school timings?", a: "Pre-primary 8:00 AM to 11:30 AM, Classes I to VIII 7:50 AM to 1:30 PM, and Classes IX to XII 7:40 AM to 1:50 PM in summer. Winter timings begin 15 November." }
  ],

  /* ---------- downloads ---------- */
  downloads: [
    { title: "Registration form 2027–28", category: "Admission", format: "PDF", size: "240 KB", updated: "2026-09-01", link: "#" },
    { title: "Prospectus 2026–27", category: "Admission", format: "PDF", size: "4.1 MB", updated: "2026-06-20", link: "#" },
    { title: "Fee structure 2026–27", category: "Fees", format: "PDF", size: "180 KB", updated: "2026-04-01", link: "#" },
    { title: "Academic calendar 2026–27", category: "Academics", format: "PDF", size: "320 KB", updated: "2026-07-01", link: "#" },
    { title: "Holiday list 2026–27", category: "Academics", format: "PDF", size: "110 KB", updated: "2026-04-01", link: "#" },
    { title: "Book list, Classes LKG to XII", category: "Academics", format: "PDF", size: "290 KB", updated: "2026-06-10", link: "#" },
    { title: "Uniform guidelines", category: "School rules", format: "PDF", size: "150 KB", updated: "2026-04-01", link: "#" },
    { title: "School rules and code of conduct", category: "School rules", format: "PDF", size: "210 KB", updated: "2026-04-01", link: "#" },
    { title: "Transport routes and charges", category: "Transport", format: "PDF", size: "260 KB", updated: "2026-07-15", link: "#" },
    { title: "Half Yearly datesheet 2026", category: "Examination", format: "PDF", size: "95 KB", updated: "2026-09-05", link: "#" },
    { title: "Transfer certificate application form", category: "Forms", format: "PDF", size: "80 KB", updated: "2026-04-01", link: "#" },
    { title: "Leave application form", category: "Forms", format: "PDF", size: "70 KB", updated: "2026-04-01", link: "#" },
    { title: "Bonafide certificate request form", category: "Forms", format: "PDF", size: "70 KB", updated: "2026-04-01", link: "#" },
    { title: "Annual report 2025–26", category: "School", format: "PDF", size: "5.8 MB", updated: "2026-05-30", link: "#" }
  ],

  /* ---------- mandatory public disclosure (CBSE) ---------- */
  disclosure: {
    note: "Published under the CBSE Affiliation Bye-Laws. Figures are updated at the start of every session. The scanned documents linked below are the current versions on record with the school.",
    general: [
      ["Name of the school", "Global Vision Public School"],
      ["Affiliation number", "2730456"],
      ["School code", "27301"],
      ["Complete address with pin code", "Plot 14, Sector 9, Rohini, New Delhi – 110085"],
      ["Principal name and qualification", "Dr. Anuradha Vaishnav, Ph.D. Education, M.A. English, B.Ed."],
      ["School email", "office@gvps.edu.in"],
      ["Contact number", "011-2755 4400"],
      ["Year of establishment", "2024"],
      ["Name of trust or society", "Global Vision Education Society (Regd. S/2214/2023)"],
      ["Nature of the school", "Co-educational, day school"]
    ],
    documents: [
      ["Copy of affiliation or upgradation letter and extension of affiliation", "Valid 01 Apr 2021 – 31 Mar 2029", "#"],
      ["Copy of society or trust registration certificate", "Registered 1997", "#"],
      ["Copy of no-objection certificate issued by the State Government", "Directorate of Education, GNCTD", "#"],
      ["Copy of recognition certificate under the RTE Act, 2009", "Valid, renewed 2024", "#"],
      ["Copy of the valid building safety certificate", "Issued 2026, valid one year", "#"],
      ["Copy of the valid fire safety certificate", "Issued 2026, valid one year", "#"],
      ["Copy of the DEO certificate submitted for affiliation", "On record", "#"],
      ["Copy of the valid water, health and sanitation certificate", "Issued 2026", "#"],
      ["Copy of the self-certification and affidavit", "Submitted 2026", "#"]
    ],
    academics: [
      ["Fee structure of the school", "Published on the Fees page and in the downloadable PDF"],
      ["Annual academic calendar", "Published on the Calendar page and as a PDF"],
      ["List of school management committee members", "Published on the Management page"],
      ["List of parent–teacher association members", "Twelve elected parent representatives, two per wing, listed in the annual report"],
      ["Last three years' result of the board examination", "Published in the results table below"]
    ],
    resultsNote: "Global Vision Public School opened in 2024. Our first Class X batch appears for the CBSE Board Examination in 2027 and the first Class XII batch in 2029. Results will be published here as soon as they are declared, in the format shown below.",
    results: [
      /* Replace this note with real rows once your first batch appears, e.g.
         { year: "2026-27", class: "X", registered: 62, passed: 62,
           pass: "100%", average: "82.6%", above90: 31 }, */
    ],
    staff: [
      ["Principal", "1"],
      ["Total number of teachers", "28"],
      ["PGT", "9"],
      ["TGT", "12"],
      ["PRT", "5"],
      ["Pre-primary educators", "2"],
      ["Teacher to section ratio", "1 : 1.2"],
      ["Special educator", "1"],
      ["Counsellor and wellness teacher", "1"],
      ["Librarian", "1"],
      ["Physical education teachers", "2"],
      ["Non-teaching staff", "19"]
    ],
    infrastructure: [
      ["Total campus area", "4,046 sq. metres (1 acre)"],
      ["Number of classrooms and size", "32 rooms, average 54 sq. metres"],
      ["Number of laboratories and size", "6 labs, average 62 sq. metres"],
      ["Internet facility", "Yes, 200 Mbps leased line with content filtering"],
      ["Number of girls' toilets", "18"],
      ["Number of boys' toilets", "18"],
      ["Toilets for children with special needs", "2, ground floor"],
      ["Ramps and accessible entry", "Yes, ground and first floor"],
      ["Library", "1, seating 60, 18,000+ titles"],
      ["Playground", "Yes, with a 200m track"],
      ["Drinking water", "RO units on every floor, tested quarterly"],
      ["CCTV coverage", "64 cameras, 30-day retention"],
      ["School buses", "14, all GPS fitted"],
      ["Link to the YouTube video of the school infrastructure", "Published on the Videos page"]
    ]
  },

  /* ---------- calendar ---------- */
  holidays: [
    { date: "2026-08-15", title: "Independence Day", type: "Holiday" },
    { date: "2026-08-26", title: "Janmashtami", type: "Holiday" },
    { date: "2026-10-02", title: "Gandhi Jayanti", type: "Holiday" },
    { date: "2026-10-20", title: "Diwali", type: "Holiday" },
    { date: "2026-10-21", title: "Govardhan Puja", type: "Holiday" },
    { date: "2026-10-23", title: "Bhai Dooj", type: "Holiday" },
    { date: "2026-11-05", title: "Guru Nanak Jayanti", type: "Holiday" },
    { date: "2026-12-25", title: "Christmas", type: "Holiday" },
    { date: "2027-01-01", title: "New Year's Day", type: "Holiday" },
    { date: "2027-01-26", title: "Republic Day", type: "Holiday" },
    { date: "2027-03-04", title: "Holi", type: "Holiday" },
    { date: "2027-03-29", title: "Good Friday", type: "Holiday" },
    { date: "2026-12-28", title: "Winter break begins", type: "Break" },
    { date: "2027-01-04", title: "School reopens after winter break" , type: "Break" },
    { date: "2027-05-17", title: "Summer break begins", type: "Break" },
    { date: "2027-07-05", title: "School reopens for session 2027–28", type: "Break" }
  ],

  /* ---------- homework ---------- */
  homework: [
    { date: "2026-09-05", class: "1", subject: "English", title: "Read pages 22–24 aloud twice", detail: "Practise the 'sh' sound words. Parents to sign the reading log.", due: "2026-09-08", teacher: "Mr. Alok Nandan" },
    { date: "2026-09-05", class: "1", subject: "Mathematics", title: "Worksheet 6 — numbers to 50", detail: "Complete both sides. Show the counting in the boxes provided.", due: "2026-09-08", teacher: "Mrs. Rekha Dutt" },
    { date: "2026-09-05", class: "2", subject: "Hindi", title: "मात्रा अभ्यास — पृष्ठ 18", detail: "इ और ई की मात्रा वाले दस शब्द लिखिए।", due: "2026-09-08", teacher: "Mrs. Sunita Rawat" },
    { date: "2026-09-05", class: "3", subject: "Environmental Studies", title: "Draw and label a plant", detail: "Root, stem, leaf, flower. Use the scrapbook, not the notebook.", due: "2026-09-09", teacher: "Mrs. Meenakshi Rao" },
    { date: "2026-09-05", class: "4", subject: "Mathematics", title: "Exercise 5.2, questions 1 to 8", detail: "Long division with remainder. Show all steps.", due: "2026-09-08", teacher: "Mr. Rakesh Chandola" },
    { date: "2026-09-05", class: "5", subject: "English", title: "Write a paragraph on 'A rainy morning'", detail: "Eight to ten sentences in the composition notebook.", due: "2026-09-09", teacher: "Mrs. Anjali Mehrotra" },
    { date: "2026-09-05", class: "6", subject: "Science", title: "Chapter 4 — questions 1 to 6", detail: "Separation of substances. Diagrams to be drawn in pencil.", due: "2026-09-09", teacher: "Ms. Swati Bhardwaj" },
    { date: "2026-09-05", class: "6", subject: "Mathematics", title: "Exercise 3.4, all questions", detail: "Factors and multiples. Revise the divisibility rules before starting.", due: "2026-09-08", teacher: "Mr. Rakesh Chandola" },
    { date: "2026-09-05", class: "7", subject: "Social Science", title: "Map work — physical divisions of India", detail: "Use the outline map. Colour coding as done in class.", due: "2026-09-10", teacher: "Mr. Vikas Tomar" },
    { date: "2026-09-05", class: "7", subject: "Sanskrit", title: "श्लोक कंठस्थ करें", detail: "पाठ 5 के प्रथम तीन श्लोक अगली कक्षा में सुनाने हैं।", due: "2026-09-09", teacher: "Mrs. Shalini Pant" },
    { date: "2026-09-05", class: "8", subject: "Mathematics", title: "Exercise 6.1 and 6.2", detail: "Squares and square roots. Attempt the optional questions if time permits.", due: "2026-09-09", teacher: "Mrs. Rekha Dutt" },
    { date: "2026-09-05", class: "8", subject: "Computer Science", title: "Python — first ten problems", detail: "Loops and conditionals. Bring the printed output to the lab period.", due: "2026-09-11", teacher: "Mr. Imran Qureshi" },
    { date: "2026-09-04", class: "9", subject: "Science", title: "Numericals on motion, set B", detail: "Questions 1 to 12 from the practice sheet issued in class.", due: "2026-09-08", teacher: "Ms. Swati Bhardwaj" },
    { date: "2026-09-04", class: "9", subject: "English", title: "Character sketch — Kezia's father", detail: "150 words. Support each point with a line from the text.", due: "2026-09-09", teacher: "Mrs. Anjali Mehrotra" },
    { date: "2026-09-04", class: "10", subject: "Mathematics", title: "Pre-board practice sheet 2", detail: "Full three-hour paper under timed conditions. Submit for checking.", due: "2026-09-10", teacher: "Mr. Rakesh Chandola" },
    { date: "2026-09-04", class: "10", subject: "Social Science", title: "Case study questions — Resources and Development", detail: "Six case-based questions from the CBSE sample paper.", due: "2026-09-09", teacher: "Mrs. Aparna Nath" },
    { date: "2026-09-04", class: "11", subject: "Physics", title: "Kinematics — numericals 15 to 30", detail: "H.C. Verma exercise set. Show the free-body diagram wherever relevant.", due: "2026-09-10", teacher: "Dr. Prakash Iyer" },
    { date: "2026-09-04", class: "11", subject: "Accountancy", title: "Journal entries — practice set 3", detail: "Twenty entries with narration. Rule the ledger neatly.", due: "2026-09-09", teacher: "Mrs. Poonam Khurana" },
    { date: "2026-09-04", class: "12", subject: "Chemistry", title: "Solutions — NCERT intext and exercise", detail: "Complete the chapter before the half yearly. Doubt session on Saturday.", due: "2026-09-11", teacher: "Mrs. Neelam Bhatia" },
    { date: "2026-09-04", class: "12", subject: "Business Studies", title: "Case studies on principles of management", detail: "Five cases with reasoning. One page each.", due: "2026-09-10", teacher: "Mr. Sandeep Ahluwalia" },
    { date: "2026-09-03", class: "LKG", subject: "Numbers & Counting", title: "Count and paste — 1 to 10", detail: "Paste any small objects from home in the activity book.", due: "2026-09-08", teacher: "Ms. Priyanka Sengar" },
    { date: "2026-09-03", class: "UKG", subject: "English Rhymes", title: "Learn 'Twinkle Twinkle' with actions", detail: "To be recited in the circle time on Monday.", due: "2026-09-08", teacher: "Mrs. Jyoti Kaushal" },
    { date: "2026-09-03", class: "5", subject: "Mathematics", title: "Fractions — worksheet 4", detail: "Both sides. Use the fraction strips pasted in the notebook.", due: "2026-09-08", teacher: "Mrs. Rekha Dutt" },
    { date: "2026-09-03", class: "3", subject: "Hindi", title: "सुलेख — पृष्ठ 12", detail: "स्वच्छ और सुंदर लेखन अपेक्षित है।", due: "2026-09-07", teacher: "Mr. Gurpreet Bedi" },
    { date: "2026-09-03", class: "9", subject: "Information Technology", title: "Spreadsheet formulas practice", detail: "Build the marks sheet with SUM, AVERAGE and IF. Save to the shared folder.", due: "2026-09-10", teacher: "Mr. Harish Chandra" }
  ],

  /* ---------- admission CRM stages ---------- */
  crmStages: ["New enquiry", "Contacted", "Campus visit", "Application", "Assessment", "Selected", "Fee paid", "Admission confirmed", "Waitlisted", "Not interested"],

  leads: [
    { id: "LEAD001", name: "Ayaan Bhalla", classApplied: "LKG", parent: "Mohit Bhalla", phone: "9811004521", source: "Website form", stage: "Campus visit", note: "Visited on 30 Aug, liked the pre-primary wing. Sibling in a nearby school.", updated: "2026-08-30" },
    { id: "LEAD002", name: "Saira Qureshi", classApplied: "1", parent: "Nadia Qureshi", phone: "9810774412", source: "Walk-in", stage: "Application", note: "Registration fee paid. Assessment slot to be given.", updated: "2026-09-01" },
    { id: "LEAD003", name: "Devansh Rana", classApplied: "6", parent: "Sunil Rana", phone: "9873310098", source: "Referral", stage: "Selected", note: "Referred by a Class VIII parent. Offer sent by SMS.", updated: "2026-09-02" },
    { id: "LEAD004", name: "Ira Sondhi", classApplied: "LKG", parent: "Preeti Sondhi", phone: "9899221145", source: "WhatsApp", stage: "Contacted", note: "Asked about transport to Shalimar Bagh. Route 2 discussed.", updated: "2026-08-28" },
    { id: "LEAD005", name: "Kabir Anand", classApplied: "11", parent: "Rohit Anand", phone: "9818226634", source: "Website form", stage: "Assessment", note: "Commerce stream. Class X result 88.4%.", updated: "2026-09-03" },
    { id: "LEAD006", name: "Naisha Talwar", classApplied: "3", parent: "Aditi Talwar", phone: "9871450089", source: "Website form", stage: "New enquiry", note: "Relocating from Gurugram in November.", updated: "2026-09-04" },
    { id: "LEAD007", name: "Arnav Sethi", classApplied: "9", parent: "Vikrant Sethi", phone: "9810338877", source: "Referral", stage: "Fee paid", note: "Admission fee and Term II paid. Uniform measurement pending.", updated: "2026-09-02" },
    { id: "LEAD008", name: "Meher Gill", classApplied: "UKG", parent: "Jaspreet Gill", phone: "9899640012", source: "Walk-in", stage: "Waitlisted", note: "Position 3 on the UKG waitlist.", updated: "2026-08-25" },
    { id: "LEAD009", name: "Vihaan Kohli", classApplied: "2", parent: "Sneha Kohli", phone: "9873001188", source: "WhatsApp", stage: "Admission confirmed", note: "Joined on 1 September, allotted Nilgiri house.", updated: "2026-09-01" },
    { id: "LEAD010", name: "Tanya Mahajan", classApplied: "7", parent: "Deepak Mahajan", phone: "9811998877", source: "Website form", stage: "Not interested", note: "Chose a school closer to home.", updated: "2026-08-20" },
    { id: "LEAD011", name: "Rehan Siddiqui", classApplied: "5", parent: "Farah Siddiqui", phone: "9899112233", source: "Referral", stage: "Contacted", note: "Campus visit booked for the coming Saturday.", updated: "2026-09-04" },
    { id: "LEAD012", name: "Anvi Bakshi", classApplied: "11", parent: "Neeraj Bakshi", phone: "9810556677", source: "Sibling", stage: "Application", note: "Sister is in Class XII here. Science stream.", updated: "2026-09-03" }
  ],

  /* ---------- policies ---------- */
  privacy: [
    ["What we collect", "Student and parent names, dates of birth, contact numbers, email addresses, residential address, class and section, attendance, marks, fee payment status, and transport route. For admission enquiries we collect the child's name, class applied for, parent name and contact details."],
    ["Why we collect it", "To run admissions, mark attendance, conduct examinations, issue report cards and certificates, operate transport, raise and receipt fees, and contact you in an emergency."],
    ["Who can see it", "The class teacher, the subject teachers of that class, the examination cell, the accounts office and the principal. Parents see only their own child's record through the parent portal."],
    ["What is public", "Nothing identifying a child is published on the public pages of this site. Names appear only in achievement announcements, and only with the parent's consent."],
    ["Photographs", "Photographs and video taken at school events may be used in the school magazine, on this website and on the school's social media pages. Write to the office to opt out and we will exclude your child."],
    ["Storage", "Records are held in the school's Google Workspace account with access limited by role. Backups are taken weekly."],
    ["Retention", "Academic records are retained permanently as required for transfer certificates and verification. Admission enquiry data that does not lead to an admission is deleted after two years."],
    ["Your rights", "You may ask to see, correct or delete your child's record by writing to office@gvps.edu.in. Corrections are made within seven working days."],
    ["Cookies and analytics", "This website does not set advertising cookies. If website analytics is enabled, it records page views and device type without identifying individuals."],
    ["Changes", "Any change to this policy is published on this page with a revised date."]
  ]
};

/* Seed data — 100 students + full school records.
   Replace or edit freely; once Apps Script is connected, live Sheet data overrides this. */
window.SEED = {
"school":{
"name":"Global Vision Public School",
"motto":"तमसो मा ज्योतिर्गमय",
"mottoEn":"Lead me from darkness to light",
"affiliation":"Affiliated to CBSE, New Delhi · Affiliation No. 2730xxx",
"estd":1998,
"address":"Plot 14, Sector 9, Rohini, New Delhi – 110085",
"phone":"011-2755 4400",
"email":"office@gvps.edu.in",
"principal":"Dr. Anuradha Vaishnav",
"vicePrincipal":"Mr. S. K. Ramanathan",
"session":"2026 – 27"
},
"timings":[
{
"group":"Pre-Primary (LKG – UKG)",
"summer":"08:00 AM – 11:30 AM",
"winter":"08:45 AM – 12:15 PM",
"saturday":"Holiday"
},
{
"group":"Primary (I – V)",
"summer":"07:50 AM – 01:30 PM",
"winter":"08:30 AM – 02:00 PM",
"saturday":"07:50 AM – 11:30 AM"
},
{
"group":"Middle (VI – VIII)",
"summer":"07:50 AM – 01:30 PM",
"winter":"08:30 AM – 02:00 PM",
"saturday":"07:50 AM – 11:30 AM"
},
{
"group":"Senior (IX – XII)",
"summer":"07:40 AM – 01:50 PM",
"winter":"08:20 AM – 02:15 PM",
"saturday":"07:40 AM – 12:00 PM"
},
{
"group":"Office & Accounts",
"summer":"08:00 AM – 03:00 PM",
"winter":"08:30 AM – 03:30 PM",
"saturday":"08:00 AM – 12:30 PM"
}
],
"uniform":[
{
"group":"Pre-Primary",
"summer":"Sky-blue check pinafore / half-pant, white shirt, navy socks, black canvas shoes",
"winter":"Navy cardigan, navy blazer with crest, grey woollen trousers/skirt",
"house":"House T-shirt with navy track pant on Wednesday"
},
{
"group":"Classes I – V",
"summer":"White shirt, navy shorts/skirt, striped tie, white socks, black shoes",
"winter":"Navy blazer with school crest, V-neck pullover, grey trousers/skirt",
"house":"House T-shirt + track pant on PE days"
},
{
"group":"Classes VI – X",
"summer":"White shirt, navy trousers/skirt, school tie, black belt, black shoes",
"winter":"Blazer, pullover, navy muffler, black shoes",
"house":"House jersey on Wednesday and Saturday"
},
{
"group":"Classes XI – XII",
"summer":"White shirt, steel-grey trousers/skirt, senior tie with gold stripe, black shoes",
"winter":"Navy blazer with senior badge, grey pullover",
"house":"House blazer badge for captains and prefects"
}
],
"facilities":[
{
"name":"Smart classrooms",
"detail":"All 32 classrooms fitted with interactive panels and CCTV"
},
{
"name":"Science laboratories",
"detail":"Separate Physics, Chemistry and Biology labs for senior classes"
},
{
"name":"Robotics & Atal Tinkering Lab",
"detail":"3D printer, microcontroller kits, drone assembly bench"
},
{
"name":"Library",
"detail":"18,000+ titles, digital reading corner, quiet study zone"
},
{
"name":"Sports complex",
"detail":"Basketball court, cricket nets, 200m track, skating rink, indoor games hall"
},
{
"name":"Infirmary",
"detail":"Full-time nurse, visiting paediatrician twice a week"
},
{
"name":"Transport",
"detail":"14 GPS-tracked buses across 6 routes with female attendant on board"
},
{
"name":"Counselling cell",
"detail":"Career and wellbeing counsellor available on all working days"
}
],
"classes":[
"LKG",
"UKG",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"10",
"11",
"12"
],
"sectionsMap":{
"LKG":[
"A",
"B"
],
"UKG":[
"A",
"B"
],
"1":[
"A",
"B"
],
"2":[
"A",
"B"
],
"3":[
"A",
"B"
],
"4":[
"A",
"B"
],
"5":[
"A",
"B"
],
"6":[
"A",
"B"
],
"7":[
"A",
"B"
],
"8":[
"A",
"B"
],
"9":[
"A",
"B"
],
"10":[
"A",
"B"
],
"11":[
"Science",
"Commerce"
],
"12":[
"Science",
"Commerce"
]
},
"subjectsMap":{
"LKG-A":[
"English Rhymes",
"Hindi Varnmala",
"Numbers & Counting",
"Drawing & Colouring",
"Environment Talk",
"Rhythm & Play"
],
"LKG-B":[
"English Rhymes",
"Hindi Varnmala",
"Numbers & Counting",
"Drawing & Colouring",
"Environment Talk",
"Rhythm & Play"
],
"UKG-A":[
"English Rhymes",
"Hindi Varnmala",
"Numbers & Counting",
"Drawing & Colouring",
"Environment Talk",
"Rhythm & Play"
],
"UKG-B":[
"English Rhymes",
"Hindi Varnmala",
"Numbers & Counting",
"Drawing & Colouring",
"Environment Talk",
"Rhythm & Play"
],
"1-A":[
"English",
"Hindi",
"Mathematics",
"Environmental Studies",
"Computer Basics",
"Art & Craft",
"General Knowledge",
"Physical Education"
],
"1-B":[
"English",
"Hindi",
"Mathematics",
"Environmental Studies",
"Computer Basics",
"Art & Craft",
"General Knowledge",
"Physical Education"
],
"2-A":[
"English",
"Hindi",
"Mathematics",
"Environmental Studies",
"Computer Basics",
"Art & Craft",
"General Knowledge",
"Physical Education"
],
"2-B":[
"English",
"Hindi",
"Mathematics",
"Environmental Studies",
"Computer Basics",
"Art & Craft",
"General Knowledge",
"Physical Education"
],
"3-A":[
"English",
"Hindi",
"Mathematics",
"Environmental Studies",
"Computer Basics",
"Art & Craft",
"General Knowledge",
"Physical Education"
],
"3-B":[
"English",
"Hindi",
"Mathematics",
"Environmental Studies",
"Computer Basics",
"Art & Craft",
"General Knowledge",
"Physical Education"
],
"4-A":[
"English",
"Hindi",
"Mathematics",
"Environmental Studies",
"Computer Basics",
"Art & Craft",
"General Knowledge",
"Physical Education"
],
"4-B":[
"English",
"Hindi",
"Mathematics",
"Environmental Studies",
"Computer Basics",
"Art & Craft",
"General Knowledge",
"Physical Education"
],
"5-A":[
"English",
"Hindi",
"Mathematics",
"Environmental Studies",
"Computer Basics",
"Art & Craft",
"General Knowledge",
"Physical Education"
],
"5-B":[
"English",
"Hindi",
"Mathematics",
"Environmental Studies",
"Computer Basics",
"Art & Craft",
"General Knowledge",
"Physical Education"
],
"6-A":[
"English",
"Hindi",
"Mathematics",
"Science",
"Social Science",
"Sanskrit",
"Computer Science",
"Art Education",
"Physical Education"
],
"6-B":[
"English",
"Hindi",
"Mathematics",
"Science",
"Social Science",
"Sanskrit",
"Computer Science",
"Art Education",
"Physical Education"
],
"7-A":[
"English",
"Hindi",
"Mathematics",
"Science",
"Social Science",
"Sanskrit",
"Computer Science",
"Art Education",
"Physical Education"
],
"7-B":[
"English",
"Hindi",
"Mathematics",
"Science",
"Social Science",
"Sanskrit",
"Computer Science",
"Art Education",
"Physical Education"
],
"8-A":[
"English",
"Hindi",
"Mathematics",
"Science",
"Social Science",
"Sanskrit",
"Computer Science",
"Art Education",
"Physical Education"
],
"8-B":[
"English",
"Hindi",
"Mathematics",
"Science",
"Social Science",
"Sanskrit",
"Computer Science",
"Art Education",
"Physical Education"
],
"9-A":[
"English",
"Hindi",
"Mathematics",
"Science",
"Social Science",
"Information Technology",
"Physical Education"
],
"9-B":[
"English",
"Hindi",
"Mathematics",
"Science",
"Social Science",
"Information Technology",
"Physical Education"
],
"10-A":[
"English",
"Hindi",
"Mathematics",
"Science",
"Social Science",
"Information Technology",
"Physical Education"
],
"10-B":[
"English",
"Hindi",
"Mathematics",
"Science",
"Social Science",
"Information Technology",
"Physical Education"
],
"11-Science":[
"English Core",
"Physics",
"Chemistry",
"Mathematics",
"Biology",
"Computer Science",
"Physical Education"
],
"11-Commerce":[
"English Core",
"Accountancy",
"Business Studies",
"Economics",
"Applied Mathematics",
"Entrepreneurship",
"Physical Education"
],
"12-Science":[
"English Core",
"Physics",
"Chemistry",
"Mathematics",
"Biology",
"Computer Science",
"Physical Education"
],
"12-Commerce":[
"English Core",
"Accountancy",
"Business Studies",
"Economics",
"Applied Mathematics",
"Entrepreneurship",
"Physical Education"
]
},
"houses":[
"Aravali",
"Nilgiri",
"Shivalik",
"Udaygiri"
],
"periods":[
{
"period":"I",
"time":"07:50 – 08:30"
},
{
"period":"II",
"time":"08:30 – 09:10"
},
{
"period":"III",
"time":"09:10 – 09:50"
},
{
"period":"Break",
"time":"09:50 – 10:10"
},
{
"period":"IV",
"time":"10:10 – 10:50"
},
{
"period":"V",
"time":"10:50 – 11:30"
},
{
"period":"VI",
"time":"11:30 – 12:10"
},
{
"period":"VII",
"time":"12:10 – 12:50"
},
{
"period":"VIII",
"time":"12:50 – 13:30"
}
],
"weekDays":[
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
],
"attendanceDays":[
"2026-08-03",
"2026-08-04",
"2026-08-05",
"2026-08-06",
"2026-08-07",
"2026-08-08",
"2026-08-10",
"2026-08-11",
"2026-08-12",
"2026-08-13",
"2026-08-14",
"2026-08-15",
"2026-08-17",
"2026-08-18",
"2026-08-19",
"2026-08-20",
"2026-08-21",
"2026-08-22",
"2026-08-24",
"2026-08-25",
"2026-08-26",
"2026-08-27",
"2026-08-28",
"2026-08-29",
"2026-08-31",
"2026-09-01",
"2026-09-02",
"2026-09-03",
"2026-09-04",
"2026-09-05"
],
"teachers":[
{
"code":"T001",
"name":"Mrs. Anjali Mehrotra",
"subject":"English",
"qualification":"M.A. English, B.Ed.",
"experience":16,
"designation":"Head of Department",
"email":"mehrotra.t001@gvps.edu.in",
"phone":"9870717355",
"joined":"2010-09-28",
"classTeacherOf":"LKG-A",
"teaches":[
"1-A · Art & Craft",
"1-A · English",
"1-B · Art & Craft",
"1-B · English",
"10-A · English",
"10-B · English"
]
},
{
"code":"T002",
"name":"Mr. Rakesh Chandola",
"subject":"Mathematics",
"qualification":"M.Sc. Maths, B.Ed.",
"experience":14,
"designation":"Head of Department",
"email":"chandola.t002@gvps.edu.in",
"phone":"9872498494",
"joined":"2012-08-17",
"classTeacherOf":"LKG-B",
"teaches":[
"1-A · Mathematics",
"1-B · Mathematics",
"10-A · Mathematics",
"10-B · Mathematics",
"11-Science · Mathematics",
"12-Science · Mathematics"
]
},
{
"code":"T003",
"name":"Mrs. Sunita Rawat",
"subject":"Hindi",
"qualification":"M.A. Hindi, B.Ed.",
"experience":19,
"designation":"PGT",
"email":"rawat.t003@gvps.edu.in",
"phone":"9888837457",
"joined":"2007-04-06",
"classTeacherOf":"UKG-A",
"teaches":[
"1-A · Hindi",
"1-B · Hindi",
"10-A · Hindi",
"10-B · Hindi",
"2-A · Hindi",
"2-B · Hindi"
]
},
{
"code":"T004",
"name":"Dr. Prakash Iyer",
"subject":"Physics",
"qualification":"Ph.D. Physics, B.Ed.",
"experience":21,
"designation":"Head of Department",
"email":"iyer.t004@gvps.edu.in",
"phone":"9878707214",
"joined":"2005-08-21",
"classTeacherOf":"UKG-B",
"teaches":[
"11-Science · Physics",
"12-Science · Physics"
]
},
{
"code":"T005",
"name":"Mrs. Neelam Bhatia",
"subject":"Chemistry",
"qualification":"M.Sc. Chemistry, B.Ed.",
"experience":12,
"designation":"PGT",
"email":"bhatia.t005@gvps.edu.in",
"phone":"9892404159",
"joined":"2014-03-04",
"classTeacherOf":"1-A",
"teaches":[
"11-Science · Chemistry",
"12-Science · Chemistry"
]
},
{
"code":"T006",
"name":"Ms. Ritika Sabharwal",
"subject":"Biology",
"qualification":"M.Sc. Botany, B.Ed.",
"experience":9,
"designation":"TGT",
"email":"sabharwal.t006@gvps.edu.in",
"phone":"9869940718",
"joined":"2017-05-05",
"classTeacherOf":"1-B",
"teaches":[
"11-Science · Biology",
"12-Science · Biology"
]
},
{
"code":"T007",
"name":"Mr. Vikas Tomar",
"subject":"Social Science",
"qualification":"M.A. History, B.Ed.",
"experience":15,
"designation":"PGT",
"email":"tomar.t007@gvps.edu.in",
"phone":"9822169593",
"joined":"2011-09-26",
"classTeacherOf":"2-A",
"teaches":[
"10-A · Social Science",
"10-B · Social Science",
"6-A · Social Science",
"6-B · Social Science",
"7-A · Social Science",
"7-B · Social Science"
]
},
{
"code":"T008",
"name":"Mrs. Poonam Khurana",
"subject":"Accountancy",
"qualification":"M.Com., B.Ed.",
"experience":13,
"designation":"Head of Department",
"email":"khurana.t008@gvps.edu.in",
"phone":"9895154811",
"joined":"2013-01-20",
"classTeacherOf":"2-B",
"teaches":[
"11-Commerce · Accountancy",
"12-Commerce · Accountancy"
]
},
{
"code":"T009",
"name":"Mr. Sandeep Ahluwalia",
"subject":"Business Studies",
"qualification":"MBA, B.Ed.",
"experience":11,
"designation":"TGT",
"email":"ahluwalia.t009@gvps.edu.in",
"phone":"9863171691",
"joined":"2015-08-21",
"classTeacherOf":"3-A",
"teaches":[
"11-Commerce · Business Studies",
"12-Commerce · Business Studies"
]
},
{
"code":"T010",
"name":"Ms. Kanika Dhawan",
"subject":"Economics",
"qualification":"M.A. Economics, B.Ed.",
"experience":8,
"designation":"TGT",
"email":"dhawan.t010@gvps.edu.in",
"phone":"9892619427",
"joined":"2018-11-06",
"classTeacherOf":"3-B",
"teaches":[
"11-Commerce · Economics",
"12-Commerce · Economics"
]
},
{
"code":"T011",
"name":"Mr. Imran Qureshi",
"subject":"Computer Science",
"qualification":"MCA, B.Ed.",
"experience":10,
"designation":"TGT",
"email":"qureshi.t011@gvps.edu.in",
"phone":"9893634885",
"joined":"2016-01-27",
"classTeacherOf":"4-A",
"teaches":[
"11-Science · Computer Science",
"12-Science · Computer Science",
"6-A · Computer Science",
"6-B · Computer Science",
"7-A · Computer Science",
"7-B · Computer Science"
]
},
{
"code":"T012",
"name":"Mrs. Shalini Pant",
"subject":"Sanskrit",
"qualification":"M.A. Sanskrit, B.Ed.",
"experience":17,
"designation":"PGT",
"email":"pant.t012@gvps.edu.in",
"phone":"9880918133",
"joined":"2009-02-02",
"classTeacherOf":"4-B",
"teaches":[
"6-A · Sanskrit",
"6-B · Sanskrit",
"7-A · Sanskrit",
"7-B · Sanskrit",
"8-A · Sanskrit",
"8-B · Sanskrit"
]
},
{
"code":"T013",
"name":"Mr. Devender Solanki",
"subject":"Physical Education",
"qualification":"M.P.Ed.",
"experience":18,
"designation":"Head of Department",
"email":"solanki.t013@gvps.edu.in",
"phone":"9814785235",
"joined":"2008-04-08",
"classTeacherOf":"5-A",
"teaches":[
"1-A · Physical Education",
"1-B · Physical Education",
"10-A · Physical Education",
"10-B · Physical Education",
"11-Commerce · Physical Education",
"11-Science · Physical Education"
]
},
{
"code":"T014",
"name":"Ms. Tanvi Arora",
"subject":"Art Education",
"qualification":"M.F.A.",
"experience":7,
"designation":"TGT",
"email":"arora.t014@gvps.edu.in",
"phone":"9890479377",
"joined":"2019-01-25",
"classTeacherOf":"5-B",
"teaches":[
"6-A · Art Education",
"6-B · Art Education",
"7-A · Art Education",
"7-B · Art Education",
"8-A · Art Education",
"8-B · Art Education"
]
},
{
"code":"T015",
"name":"Mrs. Meenakshi Rao",
"subject":"Environmental Studies",
"qualification":"M.Sc. Env. Science, B.Ed.",
"experience":12,
"designation":"PGT",
"email":"rao.t015@gvps.edu.in",
"phone":"9872268229",
"joined":"2014-06-15",
"classTeacherOf":"6-A",
"teaches":[
"1-A · Environmental Studies",
"1-B · Environmental Studies",
"2-A · Environmental Studies",
"2-B · Environmental Studies",
"3-A · Environmental Studies",
"3-B · Environmental Studies"
]
},
{
"code":"T016",
"name":"Ms. Priyanka Sengar",
"subject":"Pre-Primary",
"qualification":"N.T.T., B.Ed.",
"experience":9,
"designation":"Pre-Primary Educator",
"email":"sengar.t016@gvps.edu.in",
"phone":"9889317233",
"joined":"2017-04-17",
"classTeacherOf":"6-B",
"teaches":[
"LKG-A · Drawing & Colouring",
"LKG-A · English Rhymes",
"LKG-A · Environment Talk",
"LKG-A · Hindi Varnmala",
"LKG-A · Numbers & Counting",
"LKG-A · Rhythm & Play"
]
},
{
"code":"T017",
"name":"Mrs. Jyoti Kaushal",
"subject":"Pre-Primary",
"qualification":"N.T.T.",
"experience":11,
"designation":"Pre-Primary Educator",
"email":"kaushal.t017@gvps.edu.in",
"phone":"9841359386",
"joined":"2015-11-10",
"classTeacherOf":"7-A",
"teaches":[
"LKG-A · Drawing & Colouring",
"LKG-A · English Rhymes",
"LKG-A · Environment Talk",
"LKG-A · Hindi Varnmala",
"LKG-A · Numbers & Counting",
"LKG-A · Rhythm & Play"
]
},
{
"code":"T018",
"name":"Mr. Alok Nandan",
"subject":"English",
"qualification":"M.A. English, B.Ed.",
"experience":13,
"designation":"PGT",
"email":"nandan.t018@gvps.edu.in",
"phone":"9877078417",
"joined":"2013-01-22",
"classTeacherOf":"7-B",
"teaches":[
"1-A · Art & Craft",
"1-A · English",
"1-B · Art & Craft",
"1-B · English",
"10-A · English",
"10-B · English"
]
},
{
"code":"T019",
"name":"Mrs. Rekha Dutt",
"subject":"Mathematics",
"qualification":"M.Sc. Maths, B.Ed.",
"experience":20,
"designation":"PGT",
"email":"dutt.t019@gvps.edu.in",
"phone":"9821406998",
"joined":"2006-08-21",
"classTeacherOf":"8-A",
"teaches":[
"1-A · Mathematics",
"1-B · Mathematics",
"10-A · Mathematics",
"10-B · Mathematics",
"11-Science · Mathematics",
"12-Science · Mathematics"
]
},
{
"code":"T020",
"name":"Ms. Swati Bhardwaj",
"subject":"Science",
"qualification":"M.Sc. Zoology, B.Ed.",
"experience":6,
"designation":"TGT",
"email":"bhardwaj.t020@gvps.edu.in",
"phone":"9847334392",
"joined":"2020-07-18",
"classTeacherOf":"8-B",
"teaches":[
"10-A · Science",
"10-B · Science",
"6-A · Science",
"6-B · Science",
"7-A · Science",
"7-B · Science"
]
},
{
"code":"T021",
"name":"Mr. Gurpreet Bedi",
"subject":"Hindi",
"qualification":"M.A. Hindi",
"experience":10,
"designation":"TGT",
"email":"bedi.t021@gvps.edu.in",
"phone":"9821167381",
"joined":"2016-12-09",
"classTeacherOf":"9-A",
"teaches":[
"1-A · Hindi",
"1-B · Hindi",
"10-A · Hindi",
"10-B · Hindi",
"2-A · Hindi",
"2-B · Hindi"
]
},
{
"code":"T022",
"name":"Mrs. Aparna Nath",
"subject":"Social Science",
"qualification":"M.A. Pol. Science, B.Ed.",
"experience":14,
"designation":"PGT",
"email":"nath.t022@gvps.edu.in",
"phone":"9852315791",
"joined":"2012-04-17",
"classTeacherOf":"9-B",
"teaches":[
"10-A · Social Science",
"10-B · Social Science",
"6-A · Social Science",
"6-B · Social Science",
"7-A · Social Science",
"7-B · Social Science"
]
},
{
"code":"T023",
"name":"Mr. Harish Chandra",
"subject":"Information Technology",
"qualification":"B.Tech, B.Ed.",
"experience":8,
"designation":"TGT",
"email":"chandra.t023@gvps.edu.in",
"phone":"9848794285",
"joined":"2018-01-03",
"classTeacherOf":"10-A",
"teaches":[
"10-A · Information Technology",
"10-B · Information Technology",
"9-A · Information Technology",
"9-B · Information Technology"
]
},
{
"code":"T024",
"name":"Ms. Nidhi Sachdeva",
"subject":"General Knowledge",
"qualification":"M.A. Education",
"experience":5,
"designation":"TGT",
"email":"sachdeva.t024@gvps.edu.in",
"phone":"9885583674",
"joined":"2021-02-13",
"classTeacherOf":"10-B",
"teaches":[
"1-A · General Knowledge",
"1-B · General Knowledge",
"2-A · General Knowledge",
"2-B · General Knowledge",
"3-A · General Knowledge",
"3-B · General Knowledge"
]
},
{
"code":"T025",
"name":"Mrs. Latika Verma",
"subject":"Music & Rhythm",
"qualification":"M.A. Music",
"experience":15,
"designation":"PGT",
"email":"verma.t025@gvps.edu.in",
"phone":"9824469087",
"joined":"2011-05-13",
"classTeacherOf":"11-Science",
"teaches":[]
},
{
"code":"T026",
"name":"Mr. Yashpal Rana",
"subject":"Applied Mathematics",
"qualification":"M.Sc. Maths, B.Ed.",
"experience":9,
"designation":"TGT",
"email":"rana.t026@gvps.edu.in",
"phone":"9818969301",
"joined":"2017-01-28",
"classTeacherOf":"11-Commerce",
"teaches":[
"11-Commerce · Applied Mathematics",
"12-Commerce · Applied Mathematics"
]
},
{
"code":"T027",
"name":"Ms. Ekta Mongia",
"subject":"Entrepreneurship",
"qualification":"MBA",
"experience":6,
"designation":"TGT",
"email":"mongia.t027@gvps.edu.in",
"phone":"9810073140",
"joined":"2020-04-07",
"classTeacherOf":"12-Science",
"teaches":[
"11-Commerce · Entrepreneurship",
"12-Commerce · Entrepreneurship"
]
},
{
"code":"T028",
"name":"Mrs. Bhavna Chadha",
"subject":"Computer Basics",
"qualification":"B.C.A., B.Ed.",
"experience":7,
"designation":"TGT",
"email":"chadha.t028@gvps.edu.in",
"phone":"9817022619",
"joined":"2019-08-13",
"classTeacherOf":"12-Commerce",
"teaches":[
"1-A · Computer Basics",
"1-B · Computer Basics",
"2-A · Computer Basics",
"2-B · Computer Basics",
"3-A · Computer Basics",
"3-B · Computer Basics"
]
}
],
"students":[
{
"id":"GVPS260001",
"admissionNo":"ADM-26-001",
"name":"Aarohi Gupta",
"gender":"Female",
"dob":"2021-10-21",
"class":"LKG",
"section":"A",
"roll":1,
"house":"Aravali",
"bloodGroup":"O+",
"fatherName":"Arjun Gupta",
"fatherOccupation":"Govt. Officer",
"fatherPhone":"9821696296",
"fatherEmail":"arjun49@gmail.com",
"motherName":"Nandini Gupta",
"motherOccupation":"Nutritionist",
"motherPhone":"9712033332",
"guardian":"Father",
"address":"420, Block B, Prashant Vihar",
"city":"New Delhi",
"pincode":"110018",
"admissionDate":"2026-04-08",
"previousSchool":"—",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9911470357",
"status":"Active",
"hobbies":[
"Cricket",
"Reading"
],
"achievements":"—"
},
{
"id":"GVPS260002",
"admissionNo":"ADM-26-002",
"name":"Manav Chawla",
"gender":"Male",
"dob":"2021-04-15",
"class":"LKG",
"section":"A",
"roll":2,
"house":"Nilgiri",
"bloodGroup":"O-",
"fatherName":"Parth Chawla",
"fatherOccupation":"Bank Manager",
"fatherPhone":"9866268164",
"fatherEmail":"parth92@gmail.com",
"motherName":"Diya Chawla",
"motherOccupation":"HR Manager",
"motherPhone":"9725637437",
"guardian":"Father",
"address":"405, Block G, Mukherjee Nagar",
"city":"New Delhi",
"pincode":"110028",
"admissionDate":"2026-04-01",
"previousSchool":"—",
"transport":"Route 3 — Model Town",
"feeStatus":"Paid",
"emergencyContact":"9912634789",
"status":"Active",
"hobbies":[
"Debate",
"Chess"
],
"achievements":"100% attendance certificate"
},
{
"id":"GVPS260003",
"admissionNo":"ADM-26-003",
"name":"Vihaan Malhotra",
"gender":"Male",
"dob":"2021-04-15",
"class":"LKG",
"section":"A",
"roll":3,
"house":"Shivalik",
"bloodGroup":"A-",
"fatherName":"Atharv Malhotra",
"fatherOccupation":"Govt. Officer",
"fatherPhone":"9849772036",
"fatherEmail":"atharv59@gmail.com",
"motherName":"Aadhya Malhotra",
"motherOccupation":"Teacher",
"motherPhone":"9719969826",
"guardian":"Father",
"address":"93, Block D, Keshav Puram",
"city":"New Delhi",
"pincode":"110075",
"admissionDate":"2026-04-08",
"previousSchool":"—",
"transport":"Route 1 — Rohini",
"feeStatus":"Paid",
"emergencyContact":"9959889272",
"status":"Active",
"hobbies":[
"Music",
"Reading"
],
"achievements":"Science Exhibition — Merit"
},
{
"id":"GVPS260004",
"admissionNo":"ADM-26-004",
"name":"Charvi Goel",
"gender":"Female",
"dob":"2021-03-28",
"class":"LKG",
"section":"A",
"roll":4,
"house":"Udaygiri",
"bloodGroup":"B+",
"fatherName":"Krish Goel",
"fatherOccupation":"Advocate",
"fatherPhone":"9840653096",
"fatherEmail":"krish88@gmail.com",
"motherName":"Kiara Goel",
"motherOccupation":"Bank Officer",
"motherPhone":"9735474614",
"guardian":"Father",
"address":"163, Block D, Prashant Vihar",
"city":"New Delhi",
"pincode":"110088",
"admissionDate":"2026-04-13",
"previousSchool":"—",
"transport":"Route 4 — Punjabi Bagh",
"feeStatus":"Paid",
"emergencyContact":"9966567031",
"status":"Active",
"hobbies":[
"Cricket",
"Painting"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260005",
"admissionNo":"ADM-26-005",
"name":"Parth Kapoor",
"gender":"Male",
"dob":"2021-04-24",
"class":"LKG",
"section":"B",
"roll":1,
"house":"Aravali",
"bloodGroup":"AB+",
"fatherName":"Dhruv Kapoor",
"fatherOccupation":"Sales Manager",
"fatherPhone":"9875900838",
"fatherEmail":"dhruv47@gmail.com",
"motherName":"Tara Kapoor",
"motherOccupation":"Boutique Owner",
"motherPhone":"9733546271",
"guardian":"Father",
"address":"738, Block B, Model Town",
"city":"New Delhi",
"pincode":"110017",
"admissionDate":"2026-04-08",
"previousSchool":"—",
"transport":"Route 4 — Punjabi Bagh",
"feeStatus":"Paid",
"emergencyContact":"9947610410",
"status":"Active",
"hobbies":[
"Debate",
"Music"
],
"achievements":"Inter-house Quiz — 1st position"
},
{
"id":"GVPS260006",
"admissionNo":"ADM-26-006",
"name":"Atharv Sood",
"gender":"Male",
"dob":"2021-08-08",
"class":"LKG",
"section":"B",
"roll":2,
"house":"Nilgiri",
"bloodGroup":"O+",
"fatherName":"Vihaan Sood",
"fatherOccupation":"Govt. Officer",
"fatherPhone":"9881270099",
"fatherEmail":"vihaan83@gmail.com",
"motherName":"Anaya Sood",
"motherOccupation":"Doctor",
"motherPhone":"9722373817",
"guardian":"Father",
"address":"371, Block C, Shalimar Bagh",
"city":"New Delhi",
"pincode":"110058",
"admissionDate":"2026-04-11",
"previousSchool":"—",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9989171767",
"status":"Active",
"hobbies":[
"Cricket",
"Music"
],
"achievements":"—"
},
{
"id":"GVPS260007",
"admissionNo":"ADM-26-007",
"name":"Jiya Khanna",
"gender":"Female",
"dob":"2021-01-01",
"class":"LKG",
"section":"B",
"roll":3,
"house":"Shivalik",
"bloodGroup":"AB+",
"fatherName":"Rohan Khanna",
"fatherOccupation":"Chartered Accountant",
"fatherPhone":"9851750176",
"fatherEmail":"rohan50@gmail.com",
"motherName":"Kavya Khanna",
"motherOccupation":"Doctor",
"motherPhone":"9719721666",
"guardian":"Father",
"address":"78, Block H, Pitampura",
"city":"New Delhi",
"pincode":"110070",
"admissionDate":"2026-04-12",
"previousSchool":"—",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9927387161",
"status":"Active",
"hobbies":[
"Classical Dance",
"Music"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260008",
"admissionNo":"ADM-25-008",
"name":"Aditi Gupta",
"gender":"Female",
"dob":"2020-07-26",
"class":"UKG",
"section":"A",
"roll":1,
"house":"Udaygiri",
"bloodGroup":"A-",
"fatherName":"Aarav Gupta",
"fatherOccupation":"Businessman",
"fatherPhone":"9893880784",
"fatherEmail":"aarav94@gmail.com",
"motherName":"Ridhi Gupta",
"motherOccupation":"HR Manager",
"motherPhone":"9760892197",
"guardian":"Father",
"address":"597, Block A, Paschim Vihar",
"city":"New Delhi",
"pincode":"110078",
"admissionDate":"2025-04-03",
"previousSchool":"St. Xavier's Convent",
"transport":"Route 1 — Rohini",
"feeStatus":"Paid",
"emergencyContact":"9944521238",
"status":"Active",
"hobbies":[
"Football",
"Classical Dance"
],
"achievements":"100% attendance certificate"
},
{
"id":"GVPS260009",
"admissionNo":"ADM-25-009",
"name":"Ishita Grover",
"gender":"Female",
"dob":"2020-09-03",
"class":"UKG",
"section":"A",
"roll":2,
"house":"Aravali",
"bloodGroup":"A+",
"fatherName":"Parth Grover",
"fatherOccupation":"Advocate",
"fatherPhone":"9890703142",
"fatherEmail":"parth21@gmail.com",
"motherName":"Nandini Grover",
"motherOccupation":"Lecturer",
"motherPhone":"9712991802",
"guardian":"Father",
"address":"236, Block B, Punjabi Bagh",
"city":"New Delhi",
"pincode":"110064",
"admissionDate":"2025-04-20",
"previousSchool":"Delhi Public School, Rohini",
"transport":"Route 3 — Model Town",
"feeStatus":"Paid",
"emergencyContact":"9959385594",
"status":"Active",
"hobbies":[
"Robotics",
"Chess"
],
"achievements":"Elocution Contest — 2nd position"
},
{
"id":"GVPS260010",
"admissionNo":"ADM-25-010",
"name":"Nikhil Bisht",
"gender":"Male",
"dob":"2020-06-22",
"class":"UKG",
"section":"A",
"roll":3,
"house":"Nilgiri",
"bloodGroup":"B+",
"fatherName":"Sarthak Bisht",
"fatherOccupation":"Govt. Officer",
"fatherPhone":"9864325587",
"fatherEmail":"sarthak95@gmail.com",
"motherName":"Ishita Bisht",
"motherOccupation":"Fashion Designer",
"motherPhone":"9736642994",
"guardian":"Father",
"address":"650, Block G, Paschim Vihar",
"city":"New Delhi",
"pincode":"110026",
"admissionDate":"2025-04-07",
"previousSchool":"Home Schooled",
"transport":"Route 2 — Pitampura",
"feeStatus":"Paid",
"emergencyContact":"9938171300",
"status":"Active",
"hobbies":[
"Chess",
"Music"
],
"achievements":"—"
},
{
"id":"GVPS260011",
"admissionNo":"ADM-25-011",
"name":"Charvi Bisht",
"gender":"Female",
"dob":"2020-01-23",
"class":"UKG",
"section":"A",
"roll":4,
"house":"Shivalik",
"bloodGroup":"B+",
"fatherName":"Kabir Bisht",
"fatherOccupation":"Chartered Accountant",
"fatherPhone":"9870485145",
"fatherEmail":"kabir70@gmail.com",
"motherName":"Pari Bisht",
"motherOccupation":"Fashion Designer",
"motherPhone":"9738733381",
"guardian":"Father",
"address":"851, Block G, Netaji Subhash Place",
"city":"New Delhi",
"pincode":"110049",
"admissionDate":"2025-04-17",
"previousSchool":"Delhi Public School, Rohini",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9993856061",
"status":"Active",
"hobbies":[
"Reading",
"Classical Dance"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260012",
"admissionNo":"ADM-25-012",
"name":"Atharv Negi",
"gender":"Male",
"dob":"2020-10-02",
"class":"UKG",
"section":"B",
"roll":1,
"house":"Udaygiri",
"bloodGroup":"A-",
"fatherName":"Manav Negi",
"fatherOccupation":"Govt. Officer",
"fatherPhone":"9851477351",
"fatherEmail":"manav93@gmail.com",
"motherName":"Jiya Negi",
"motherOccupation":"Company Secretary",
"motherPhone":"9712565439",
"guardian":"Father",
"address":"657, Block C, Model Town",
"city":"New Delhi",
"pincode":"110052",
"admissionDate":"2025-04-15",
"previousSchool":"New Era Public School",
"transport":"Route 1 — Rohini",
"feeStatus":"Paid",
"emergencyContact":"9941864497",
"status":"Active",
"hobbies":[
"Chess",
"Cricket"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260013",
"admissionNo":"ADM-25-013",
"name":"Saanvi Saxena",
"gender":"Female",
"dob":"2020-09-21",
"class":"UKG",
"section":"B",
"roll":2,
"house":"Aravali",
"bloodGroup":"A+",
"fatherName":"Tanish Saxena",
"fatherOccupation":"Professor",
"fatherPhone":"9836581864",
"fatherEmail":"tanish35@gmail.com",
"motherName":"Bhavya Saxena",
"motherOccupation":"Lecturer",
"motherPhone":"9744365405",
"guardian":"Father",
"address":"183, Block A, Kamla Nagar",
"city":"New Delhi",
"pincode":"110061",
"admissionDate":"2025-04-18",
"previousSchool":"Little Angels Play School",
"transport":"Route 2 — Pitampura",
"feeStatus":"Paid",
"emergencyContact":"9946554860",
"status":"Active",
"hobbies":[
"Classical Dance",
"Skating"
],
"achievements":"—"
},
{
"id":"GVPS260014",
"admissionNo":"ADM-25-014",
"name":"Krish Negi",
"gender":"Male",
"dob":"2020-12-08",
"class":"UKG",
"section":"B",
"roll":3,
"house":"Nilgiri",
"bloodGroup":"B-",
"fatherName":"Kabir Negi",
"fatherOccupation":"Software Engineer",
"fatherPhone":"9827436214",
"fatherEmail":"kabir67@gmail.com",
"motherName":"Aarohi Negi",
"motherOccupation":"Lecturer",
"motherPhone":"9736424347",
"guardian":"Father",
"address":"641, Block A, Adarsh Nagar",
"city":"New Delhi",
"pincode":"110049",
"admissionDate":"2025-04-18",
"previousSchool":"First Step Kindergarten",
"transport":"Route 4 — Punjabi Bagh",
"feeStatus":"Paid",
"emergencyContact":"9997419034",
"status":"Active",
"hobbies":[
"Debate",
"Painting"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260015",
"admissionNo":"ADM-24-015",
"name":"Vivaan Bisht",
"gender":"Male",
"dob":"2019-07-03",
"class":"1",
"section":"A",
"roll":1,
"house":"Shivalik",
"bloodGroup":"O+",
"fatherName":"Rudra Bisht",
"fatherOccupation":"Advocate",
"fatherPhone":"9812100247",
"fatherEmail":"rudra54@gmail.com",
"motherName":"Vanya Bisht",
"motherOccupation":"Boutique Owner",
"motherPhone":"9721109548",
"guardian":"Father",
"address":"39, Block H, Keshav Puram",
"city":"New Delhi",
"pincode":"110044",
"admissionDate":"2024-04-18",
"previousSchool":"Home Schooled",
"transport":"Route 3 — Model Town",
"feeStatus":"Due",
"emergencyContact":"9913813174",
"status":"Active",
"hobbies":[
"Debate",
"Painting"
],
"achievements":"100% attendance certificate"
},
{
"id":"GVPS260016",
"admissionNo":"ADM-24-016",
"name":"Ishaan Chawla",
"gender":"Male",
"dob":"2019-06-22",
"class":"1",
"section":"A",
"roll":2,
"house":"Udaygiri",
"bloodGroup":"AB+",
"fatherName":"Ayush Chawla",
"fatherOccupation":"Bank Manager",
"fatherPhone":"9879326800",
"fatherEmail":"ayush76@gmail.com",
"motherName":"Simran Chawla",
"motherOccupation":"Lecturer",
"motherPhone":"9776113142",
"guardian":"Father",
"address":"593, Block B, Shalimar Bagh",
"city":"New Delhi",
"pincode":"110029",
"admissionDate":"2024-04-15",
"previousSchool":"Mount Carmel School",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9980166709",
"status":"Active",
"hobbies":[
"Skating",
"Music"
],
"achievements":"Best Handwriting Award"
},
{
"id":"GVPS260017",
"admissionNo":"ADM-24-017",
"name":"Mahi Ahuja",
"gender":"Female",
"dob":"2019-10-07",
"class":"1",
"section":"A",
"roll":3,
"house":"Aravali",
"bloodGroup":"A-",
"fatherName":"Rudra Ahuja",
"fatherOccupation":"Architect",
"fatherPhone":"9846636394",
"fatherEmail":"rudra83@gmail.com",
"motherName":"Ridhi Ahuja",
"motherOccupation":"Lecturer",
"motherPhone":"9736973364",
"guardian":"Father",
"address":"421, Block B, Shalimar Bagh",
"city":"New Delhi",
"pincode":"110065",
"admissionDate":"2024-04-01",
"previousSchool":"Home Schooled",
"transport":"Route 1 — Rohini",
"feeStatus":"Paid",
"emergencyContact":"9979258732",
"status":"Active",
"hobbies":[
"Football",
"Skating"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260018",
"admissionNo":"ADM-24-018",
"name":"Myra Tyagi",
"gender":"Female",
"dob":"2019-03-03",
"class":"1",
"section":"A",
"roll":4,
"house":"Nilgiri",
"bloodGroup":"AB+",
"fatherName":"Sarthak Tyagi",
"fatherOccupation":"Software Engineer",
"fatherPhone":"9846133263",
"fatherEmail":"sarthak41@gmail.com",
"motherName":"Vanya Tyagi",
"motherOccupation":"Lecturer",
"motherPhone":"9776174248",
"guardian":"Father",
"address":"131, Block F, Paschim Vihar",
"city":"New Delhi",
"pincode":"110056",
"admissionDate":"2024-04-16",
"previousSchool":"First Step Kindergarten",
"transport":"Route 1 — Rohini",
"feeStatus":"Paid",
"emergencyContact":"9966309604",
"status":"Active",
"hobbies":[
"Music",
"Cricket"
],
"achievements":"Best Handwriting Award"
},
{
"id":"GVPS260019",
"admissionNo":"ADM-24-019",
"name":"Dhruv Yadav",
"gender":"Male",
"dob":"2019-01-02",
"class":"1",
"section":"B",
"roll":1,
"house":"Shivalik",
"bloodGroup":"A+",
"fatherName":"Arjun Yadav",
"fatherOccupation":"Professor",
"fatherPhone":"9848128709",
"fatherEmail":"arjun51@gmail.com",
"motherName":"Ira Yadav",
"motherOccupation":"Nutritionist",
"motherPhone":"9742811759",
"guardian":"Father",
"address":"635, Block H, Ashok Vihar",
"city":"New Delhi",
"pincode":"110014",
"admissionDate":"2024-04-16",
"previousSchool":"St. Xavier's Convent",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9936538716",
"status":"Active",
"hobbies":[
"Skating",
"Football"
],
"achievements":"Inter-house Quiz — 1st position"
},
{
"id":"GVPS260020",
"admissionNo":"ADM-24-020",
"name":"Kavya Sood",
"gender":"Female",
"dob":"2019-09-20",
"class":"1",
"section":"B",
"roll":2,
"house":"Udaygiri",
"bloodGroup":"O-",
"fatherName":"Ishaan Sood",
"fatherOccupation":"Professor",
"fatherPhone":"9881672905",
"fatherEmail":"ishaan91@gmail.com",
"motherName":"Vanya Sood",
"motherOccupation":"Bank Officer",
"motherPhone":"9781084261",
"guardian":"Father",
"address":"222, Block C, Ashok Vihar",
"city":"New Delhi",
"pincode":"110030",
"admissionDate":"2024-04-12",
"previousSchool":"Bal Bharati Public School",
"transport":"Route 3 — Model Town",
"feeStatus":"Paid",
"emergencyContact":"9936130202",
"status":"Active",
"hobbies":[
"Debate",
"Music"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260021",
"admissionNo":"ADM-24-021",
"name":"Ranbir Sethi",
"gender":"Male",
"dob":"2019-03-24",
"class":"1",
"section":"B",
"roll":3,
"house":"Aravali",
"bloodGroup":"A+",
"fatherName":"Kabir Sethi",
"fatherOccupation":"Software Engineer",
"fatherPhone":"9866590300",
"fatherEmail":"kabir79@gmail.com",
"motherName":"Pari Sethi",
"motherOccupation":"Doctor",
"motherPhone":"9736930227",
"guardian":"Father",
"address":"413, Block A, Civil Lines",
"city":"New Delhi",
"pincode":"110013",
"admissionDate":"2024-04-07",
"previousSchool":"First Step Kindergarten",
"transport":"Route 3 — Model Town",
"feeStatus":"Paid",
"emergencyContact":"9977871344",
"status":"Active",
"hobbies":[
"Classical Dance",
"Skating"
],
"achievements":"Elocution Contest — 2nd position"
},
{
"id":"GVPS260022",
"admissionNo":"ADM-24-022",
"name":"Naman Aggarwal",
"gender":"Male",
"dob":"2019-01-02",
"class":"1",
"section":"B",
"roll":4,
"house":"Nilgiri",
"bloodGroup":"A-",
"fatherName":"Nikhil Aggarwal",
"fatherOccupation":"Sales Manager",
"fatherPhone":"9874595894",
"fatherEmail":"nikhil28@gmail.com",
"motherName":"Vanya Aggarwal",
"motherOccupation":"Bank Officer",
"motherPhone":"9734768042",
"guardian":"Father",
"address":"118, Block D, Rani Bagh",
"city":"New Delhi",
"pincode":"110023",
"admissionDate":"2024-04-06",
"previousSchool":"Mount Carmel School",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9987816589",
"status":"Active",
"hobbies":[
"Cricket",
"Chess"
],
"achievements":"—"
},
{
"id":"GVPS260023",
"admissionNo":"ADM-23-023",
"name":"Nikhil Aggarwal",
"gender":"Male",
"dob":"2018-06-13",
"class":"2",
"section":"A",
"roll":1,
"house":"Shivalik",
"bloodGroup":"O+",
"fatherName":"Shaurya Aggarwal",
"fatherOccupation":"Software Engineer",
"fatherPhone":"9838197149",
"fatherEmail":"shaurya86@gmail.com",
"motherName":"Aarohi Aggarwal",
"motherOccupation":"Nutritionist",
"motherPhone":"9711777848",
"guardian":"Father",
"address":"650, Block A, Punjabi Bagh",
"city":"New Delhi",
"pincode":"110026",
"admissionDate":"2023-04-06",
"previousSchool":"Home Schooled",
"transport":"Route 4 — Punjabi Bagh",
"feeStatus":"Paid",
"emergencyContact":"9959686577",
"status":"Active",
"hobbies":[
"Football",
"Debate"
],
"achievements":"Science Exhibition — Merit"
},
{
"id":"GVPS260024",
"admissionNo":"ADM-23-024",
"name":"Parth Chauhan",
"gender":"Male",
"dob":"2018-01-11",
"class":"2",
"section":"A",
"roll":2,
"house":"Udaygiri",
"bloodGroup":"O-",
"fatherName":"Ranbir Chauhan",
"fatherOccupation":"Contractor",
"fatherPhone":"9894474802",
"fatherEmail":"ranbir61@gmail.com",
"motherName":"Myra Chauhan",
"motherOccupation":"Company Secretary",
"motherPhone":"9790477640",
"guardian":"Father",
"address":"196, Block F, Keshav Puram",
"city":"New Delhi",
"pincode":"110034",
"admissionDate":"2023-04-09",
"previousSchool":"St. Xavier's Convent",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9964443631",
"status":"Active",
"hobbies":[
"Chess",
"Classical Dance"
],
"achievements":"—"
},
{
"id":"GVPS260025",
"admissionNo":"ADM-23-025",
"name":"Nandini Sood",
"gender":"Female",
"dob":"2018-03-13",
"class":"2",
"section":"A",
"roll":3,
"house":"Aravali",
"bloodGroup":"A+",
"fatherName":"Arjun Sood",
"fatherOccupation":"Govt. Officer",
"fatherPhone":"9850492067",
"fatherEmail":"arjun70@gmail.com",
"motherName":"Shreya Sood",
"motherOccupation":"Teacher",
"motherPhone":"9711421983",
"guardian":"Father",
"address":"365, Block A, Shalimar Bagh",
"city":"New Delhi",
"pincode":"110030",
"admissionDate":"2023-04-09",
"previousSchool":"Mount Carmel School",
"transport":"Route 3 — Model Town",
"feeStatus":"Paid",
"emergencyContact":"9998551653",
"status":"Active",
"hobbies":[
"Football",
"Chess"
],
"achievements":"—"
},
{
"id":"GVPS260026",
"admissionNo":"ADM-23-026",
"name":"Krish Tandon",
"gender":"Male",
"dob":"2018-08-21",
"class":"2",
"section":"A",
"roll":4,
"house":"Nilgiri",
"bloodGroup":"O-",
"fatherName":"Arjun Tandon",
"fatherOccupation":"Software Engineer",
"fatherPhone":"9887163537",
"fatherEmail":"arjun12@gmail.com",
"motherName":"Jiya Tandon",
"motherOccupation":"Teacher",
"motherPhone":"9792597109",
"guardian":"Father",
"address":"111, Block D, Pitampura",
"city":"New Delhi",
"pincode":"110033",
"admissionDate":"2023-04-15",
"previousSchool":"Home Schooled",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9936232330",
"status":"Active",
"hobbies":[
"Football",
"Cricket"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260027",
"admissionNo":"ADM-23-027",
"name":"Pari Kapoor",
"gender":"Female",
"dob":"2018-06-18",
"class":"2",
"section":"B",
"roll":1,
"house":"Shivalik",
"bloodGroup":"A-",
"fatherName":"Harsh Kapoor",
"fatherOccupation":"Sales Manager",
"fatherPhone":"9823373413",
"fatherEmail":"harsh91@gmail.com",
"motherName":"Prisha Kapoor",
"motherOccupation":"Lecturer",
"motherPhone":"9796524092",
"guardian":"Father",
"address":"79, Block A, Civil Lines",
"city":"New Delhi",
"pincode":"110050",
"admissionDate":"2023-04-06",
"previousSchool":"Home Schooled",
"transport":"Route 4 — Punjabi Bagh",
"feeStatus":"Paid",
"emergencyContact":"9976507689",
"status":"Active",
"hobbies":[
"Skating",
"Cricket"
],
"achievements":"100% attendance certificate"
},
{
"id":"GVPS260028",
"admissionNo":"ADM-23-028",
"name":"Aarohi Khanna",
"gender":"Female",
"dob":"2018-09-13",
"class":"2",
"section":"B",
"roll":2,
"house":"Udaygiri",
"bloodGroup":"A-",
"fatherName":"Rohan Khanna",
"fatherOccupation":"Advocate",
"fatherPhone":"9874859727",
"fatherEmail":"rohan93@gmail.com",
"motherName":"Riya Khanna",
"motherOccupation":"Fashion Designer",
"motherPhone":"9785248396",
"guardian":"Father",
"address":"291, Block E, Kamla Nagar",
"city":"New Delhi",
"pincode":"110004",
"admissionDate":"2023-04-01",
"previousSchool":"New Era Public School",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9994958828",
"status":"Active",
"hobbies":[
"Chess",
"Football"
],
"achievements":"100% attendance certificate"
},
{
"id":"GVPS260029",
"admissionNo":"ADM-23-029",
"name":"Ranbir Mehra",
"gender":"Male",
"dob":"2018-12-13",
"class":"2",
"section":"B",
"roll":3,
"house":"Aravali",
"bloodGroup":"O+",
"fatherName":"Vihaan Mehra",
"fatherOccupation":"Chartered Accountant",
"fatherPhone":"9840025173",
"fatherEmail":"vihaan64@gmail.com",
"motherName":"Trisha Mehra",
"motherOccupation":"Lecturer",
"motherPhone":"9743678295",
"guardian":"Father",
"address":"774, Block D, Mukherjee Nagar",
"city":"New Delhi",
"pincode":"110006",
"admissionDate":"2023-04-17",
"previousSchool":"St. Xavier's Convent",
"transport":"Own Transport",
"feeStatus":"Due",
"emergencyContact":"9929376281",
"status":"Active",
"hobbies":[
"Debate",
"Painting"
],
"achievements":"Inter-house Quiz — 1st position"
},
{
"id":"GVPS260030",
"admissionNo":"ADM-22-030",
"name":"Ishita Aggarwal",
"gender":"Female",
"dob":"2017-04-28",
"class":"3",
"section":"A",
"roll":1,
"house":"Nilgiri",
"bloodGroup":"B+",
"fatherName":"Vihaan Aggarwal",
"fatherOccupation":"Chartered Accountant",
"fatherPhone":"9858761577",
"fatherEmail":"vihaan66@gmail.com",
"motherName":"Meera Aggarwal",
"motherOccupation":"Doctor",
"motherPhone":"9799642847",
"guardian":"Father",
"address":"427, Block H, Punjabi Bagh",
"city":"New Delhi",
"pincode":"110077",
"admissionDate":"2022-04-09",
"previousSchool":"Home Schooled",
"transport":"Route 3 — Model Town",
"feeStatus":"Paid",
"emergencyContact":"9948940465",
"status":"Active",
"hobbies":[
"Chess",
"Debate"
],
"achievements":"—"
},
{
"id":"GVPS260031",
"admissionNo":"ADM-22-031",
"name":"Parth Bisht",
"gender":"Male",
"dob":"2017-05-26",
"class":"3",
"section":"A",
"roll":2,
"house":"Shivalik",
"bloodGroup":"O+",
"fatherName":"Parth Bisht",
"fatherOccupation":"Advocate",
"fatherPhone":"9846441702",
"fatherEmail":"parth88@gmail.com",
"motherName":"Siya Bisht",
"motherOccupation":"Company Secretary",
"motherPhone":"9789413285",
"guardian":"Father",
"address":"195, Block E, Netaji Subhash Place",
"city":"New Delhi",
"pincode":"110031",
"admissionDate":"2022-04-07",
"previousSchool":"New Era Public School",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9915302658",
"status":"Active",
"hobbies":[
"Cricket",
"Music"
],
"achievements":"Best Handwriting Award"
},
{
"id":"GVPS260032",
"admissionNo":"ADM-22-032",
"name":"Aarohi Sharma",
"gender":"Female",
"dob":"2017-10-02",
"class":"3",
"section":"A",
"roll":3,
"house":"Udaygiri",
"bloodGroup":"O+",
"fatherName":"Reyansh Sharma",
"fatherOccupation":"Chartered Accountant",
"fatherPhone":"9821602022",
"fatherEmail":"reyansh96@gmail.com",
"motherName":"Navya Sharma",
"motherOccupation":"Doctor",
"motherPhone":"9783904121",
"guardian":"Father",
"address":"241, Block F, Punjabi Bagh",
"city":"New Delhi",
"pincode":"110062",
"admissionDate":"2022-04-16",
"previousSchool":"First Step Kindergarten",
"transport":"Route 2 — Pitampura",
"feeStatus":"Paid",
"emergencyContact":"9956130703",
"status":"Active",
"hobbies":[
"Reading",
"Chess"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260033",
"admissionNo":"ADM-22-033",
"name":"Shaurya Chauhan",
"gender":"Male",
"dob":"2017-10-27",
"class":"3",
"section":"A",
"roll":4,
"house":"Aravali",
"bloodGroup":"AB+",
"fatherName":"Nikhil Chauhan",
"fatherOccupation":"Software Engineer",
"fatherPhone":"9844637870",
"fatherEmail":"nikhil59@gmail.com",
"motherName":"Nandini Chauhan",
"motherOccupation":"Doctor",
"motherPhone":"9759519630",
"guardian":"Father",
"address":"158, Block F, Ashok Vihar",
"city":"New Delhi",
"pincode":"110038",
"admissionDate":"2022-04-18",
"previousSchool":"Bal Bharati Public School",
"transport":"Route 4 — Punjabi Bagh",
"feeStatus":"Paid",
"emergencyContact":"9987925416",
"status":"Active",
"hobbies":[
"Painting",
"Reading"
],
"achievements":"Chess Championship — Runner-up"
},
{
"id":"GVPS260034",
"admissionNo":"ADM-22-034",
"name":"Harsh Gupta",
"gender":"Male",
"dob":"2017-07-19",
"class":"3",
"section":"B",
"roll":1,
"house":"Nilgiri",
"bloodGroup":"B-",
"fatherName":"Kunal Gupta",
"fatherOccupation":"Shop Owner",
"fatherPhone":"9850113742",
"fatherEmail":"kunal11@gmail.com",
"motherName":"Nitya Gupta",
"motherOccupation":"Teacher",
"motherPhone":"9751627064",
"guardian":"Father",
"address":"219, Block B, Netaji Subhash Place",
"city":"New Delhi",
"pincode":"110089",
"admissionDate":"2022-04-10",
"previousSchool":"Delhi Public School, Rohini",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9947972232",
"status":"Active",
"hobbies":[
"Chess",
"Debate"
],
"achievements":"Chess Championship — Runner-up"
},
{
"id":"GVPS260035",
"admissionNo":"ADM-22-035",
"name":"Meera Kaushik",
"gender":"Female",
"dob":"2017-02-11",
"class":"3",
"section":"B",
"roll":2,
"house":"Shivalik",
"bloodGroup":"A-",
"fatherName":"Dhruv Kaushik",
"fatherOccupation":"Professor",
"fatherPhone":"9847473861",
"fatherEmail":"dhruv66@gmail.com",
"motherName":"Ishita Kaushik",
"motherOccupation":"Boutique Owner",
"motherPhone":"9750904804",
"guardian":"Father",
"address":"470, Block F, Rani Bagh",
"city":"New Delhi",
"pincode":"110029",
"admissionDate":"2022-04-13",
"previousSchool":"New Era Public School",
"transport":"Route 1 — Rohini",
"feeStatus":"Paid",
"emergencyContact":"9959065201",
"status":"Active",
"hobbies":[
"Cricket",
"Classical Dance"
],
"achievements":"100% attendance certificate"
},
{
"id":"GVPS260036",
"admissionNo":"ADM-22-036",
"name":"Bhavya Bansal",
"gender":"Female",
"dob":"2017-12-19",
"class":"3",
"section":"B",
"roll":3,
"house":"Udaygiri",
"bloodGroup":"A-",
"fatherName":"Devansh Bansal",
"fatherOccupation":"Bank Manager",
"fatherPhone":"9889341638",
"fatherEmail":"devansh82@gmail.com",
"motherName":"Bhavya Bansal",
"motherOccupation":"Doctor",
"motherPhone":"9733701803",
"guardian":"Father",
"address":"92, Block H, Civil Lines",
"city":"New Delhi",
"pincode":"110037",
"admissionDate":"2022-04-01",
"previousSchool":"New Era Public School",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9983034800",
"status":"Active",
"hobbies":[
"Chess",
"Robotics"
],
"achievements":"Inter-house Quiz — 1st position"
},
{
"id":"GVPS260037",
"admissionNo":"ADM-21-037",
"name":"Myra Goel",
"gender":"Female",
"dob":"2016-09-10",
"class":"4",
"section":"A",
"roll":1,
"house":"Aravali",
"bloodGroup":"O+",
"fatherName":"Ayush Goel",
"fatherOccupation":"Chartered Accountant",
"fatherPhone":"9846727907",
"fatherEmail":"ayush23@gmail.com",
"motherName":"Vanya Goel",
"motherOccupation":"Nutritionist",
"motherPhone":"9721368229",
"guardian":"Father",
"address":"27, Block C, Pitampura",
"city":"New Delhi",
"pincode":"110013",
"admissionDate":"2021-04-14",
"previousSchool":"New Era Public School",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9975633652",
"status":"Active",
"hobbies":[
"Skating",
"Classical Dance"
],
"achievements":"—"
},
{
"id":"GVPS260038",
"admissionNo":"ADM-21-038",
"name":"Meera Mehra",
"gender":"Female",
"dob":"2016-06-22",
"class":"4",
"section":"A",
"roll":2,
"house":"Nilgiri",
"bloodGroup":"A-",
"fatherName":"Advik Mehra",
"fatherOccupation":"Contractor",
"fatherPhone":"9819726559",
"fatherEmail":"advik89@gmail.com",
"motherName":"Nitya Mehra",
"motherOccupation":"Homemaker",
"motherPhone":"9765110541",
"guardian":"Father",
"address":"776, Block F, Paschim Vihar",
"city":"New Delhi",
"pincode":"110001",
"admissionDate":"2021-04-13",
"previousSchool":"St. Xavier's Convent",
"transport":"Route 4 — Punjabi Bagh",
"feeStatus":"Paid",
"emergencyContact":"9980310782",
"status":"Active",
"hobbies":[
"Classical Dance",
"Cricket"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260039",
"admissionNo":"ADM-21-039",
"name":"Simran Sood",
"gender":"Female",
"dob":"2016-03-08",
"class":"4",
"section":"A",
"roll":3,
"house":"Shivalik",
"bloodGroup":"AB+",
"fatherName":"Samarth Sood",
"fatherOccupation":"Professor",
"fatherPhone":"9832502333",
"fatherEmail":"samarth51@gmail.com",
"motherName":"Kiara Sood",
"motherOccupation":"Bank Officer",
"motherPhone":"9762254588",
"guardian":"Father",
"address":"436, Block E, Prashant Vihar",
"city":"New Delhi",
"pincode":"110036",
"admissionDate":"2021-04-02",
"previousSchool":"Delhi Public School, Rohini",
"transport":"Route 3 — Model Town",
"feeStatus":"Paid",
"emergencyContact":"9950734992",
"status":"Active",
"hobbies":[
"Chess",
"Music"
],
"achievements":"Inter-house Quiz — 1st position"
},
{
"id":"GVPS260040",
"admissionNo":"ADM-21-040",
"name":"Aadhya Goel",
"gender":"Female",
"dob":"2016-08-26",
"class":"4",
"section":"A",
"roll":4,
"house":"Udaygiri",
"bloodGroup":"B+",
"fatherName":"Vihaan Goel",
"fatherOccupation":"Bank Manager",
"fatherPhone":"9858227139",
"fatherEmail":"vihaan37@gmail.com",
"motherName":"Anvi Goel",
"motherOccupation":"Company Secretary",
"motherPhone":"9741596032",
"guardian":"Father",
"address":"615, Block H, Pitampura",
"city":"New Delhi",
"pincode":"110077",
"admissionDate":"2021-04-17",
"previousSchool":"New Era Public School",
"transport":"Route 4 — Punjabi Bagh",
"feeStatus":"Paid",
"emergencyContact":"9947723492",
"status":"Active",
"hobbies":[
"Football",
"Chess"
],
"achievements":"Best Handwriting Award"
},
{
"id":"GVPS260041",
"admissionNo":"ADM-21-041",
"name":"Ridhi Kapoor",
"gender":"Female",
"dob":"2016-08-13",
"class":"4",
"section":"B",
"roll":1,
"house":"Aravali",
"bloodGroup":"A-",
"fatherName":"Sarthak Kapoor",
"fatherOccupation":"Chartered Accountant",
"fatherPhone":"9874775285",
"fatherEmail":"sarthak38@gmail.com",
"motherName":"Anvi Kapoor",
"motherOccupation":"HR Manager",
"motherPhone":"9716671542",
"guardian":"Father",
"address":"223, Block C, Prashant Vihar",
"city":"New Delhi",
"pincode":"110050",
"admissionDate":"2021-04-17",
"previousSchool":"Mount Carmel School",
"transport":"Route 1 — Rohini",
"feeStatus":"Paid",
"emergencyContact":"9911459906",
"status":"Active",
"hobbies":[
"Reading",
"Classical Dance"
],
"achievements":"—"
},
{
"id":"GVPS260042",
"admissionNo":"ADM-21-042",
"name":"Dhruv Sood",
"gender":"Male",
"dob":"2016-10-28",
"class":"4",
"section":"B",
"roll":2,
"house":"Nilgiri",
"bloodGroup":"O-",
"fatherName":"Ishaan Sood",
"fatherOccupation":"Govt. Officer",
"fatherPhone":"9829426536",
"fatherEmail":"ishaan43@gmail.com",
"motherName":"Aarohi Sood",
"motherOccupation":"Boutique Owner",
"motherPhone":"9727598150",
"guardian":"Father",
"address":"653, Block E, Shalimar Bagh",
"city":"New Delhi",
"pincode":"110067",
"admissionDate":"2021-04-18",
"previousSchool":"Little Angels Play School",
"transport":"Route 2 — Pitampura",
"feeStatus":"Paid",
"emergencyContact":"9910183250",
"status":"Active",
"hobbies":[
"Debate",
"Chess"
],
"achievements":"Science Exhibition — Merit"
},
{
"id":"GVPS260043",
"admissionNo":"ADM-21-043",
"name":"Devansh Kapoor",
"gender":"Male",
"dob":"2016-10-23",
"class":"4",
"section":"B",
"roll":3,
"house":"Shivalik",
"bloodGroup":"AB+",
"fatherName":"Parth Kapoor",
"fatherOccupation":"Contractor",
"fatherPhone":"9872902980",
"fatherEmail":"parth20@gmail.com",
"motherName":"Saanvi Kapoor",
"motherOccupation":"Company Secretary",
"motherPhone":"9782935114",
"guardian":"Father",
"address":"878, Block E, Adarsh Nagar",
"city":"New Delhi",
"pincode":"110003",
"admissionDate":"2021-04-07",
"previousSchool":"Home Schooled",
"transport":"Route 2 — Pitampura",
"feeStatus":"Paid",
"emergencyContact":"9969081392",
"status":"Active",
"hobbies":[
"Debate",
"Cricket"
],
"achievements":"—"
},
{
"id":"GVPS260044",
"admissionNo":"ADM-20-044",
"name":"Prisha Batra",
"gender":"Female",
"dob":"2015-03-27",
"class":"5",
"section":"A",
"roll":1,
"house":"Udaygiri",
"bloodGroup":"AB+",
"fatherName":"Rudra Batra",
"fatherOccupation":"Chartered Accountant",
"fatherPhone":"9884677496",
"fatherEmail":"rudra49@gmail.com",
"motherName":"Anvi Batra",
"motherOccupation":"Lecturer",
"motherPhone":"9799542929",
"guardian":"Father",
"address":"733, Block B, Model Town",
"city":"New Delhi",
"pincode":"110047",
"admissionDate":"2020-04-03",
"previousSchool":"Bal Bharati Public School",
"transport":"Route 1 — Rohini",
"feeStatus":"Due",
"emergencyContact":"9971976220",
"status":"Active",
"hobbies":[
"Painting",
"Reading"
],
"achievements":"Inter-house Quiz — 1st position"
},
{
"id":"GVPS260045",
"admissionNo":"ADM-20-045",
"name":"Jiya Tyagi",
"gender":"Female",
"dob":"2015-08-08",
"class":"5",
"section":"A",
"roll":2,
"house":"Aravali",
"bloodGroup":"AB+",
"fatherName":"Rudra Tyagi",
"fatherOccupation":"Businessman",
"fatherPhone":"9837746844",
"fatherEmail":"rudra88@gmail.com",
"motherName":"Trisha Tyagi",
"motherOccupation":"Doctor",
"motherPhone":"9748975978",
"guardian":"Father",
"address":"643, Block G, Pitampura",
"city":"New Delhi",
"pincode":"110070",
"admissionDate":"2020-04-10",
"previousSchool":"First Step Kindergarten",
"transport":"Route 4 — Punjabi Bagh",
"feeStatus":"Paid",
"emergencyContact":"9944419705",
"status":"Active",
"hobbies":[
"Debate",
"Music"
],
"achievements":"100% attendance certificate"
},
{
"id":"GVPS260046",
"admissionNo":"ADM-20-046",
"name":"Yuvraj Khanna",
"gender":"Male",
"dob":"2015-05-19",
"class":"5",
"section":"A",
"roll":3,
"house":"Nilgiri",
"bloodGroup":"O+",
"fatherName":"Naman Khanna",
"fatherOccupation":"Shop Owner",
"fatherPhone":"9861329972",
"fatherEmail":"naman21@gmail.com",
"motherName":"Shreya Khanna",
"motherOccupation":"Teacher",
"motherPhone":"9728900871",
"guardian":"Father",
"address":"637, Block B, Prashant Vihar",
"city":"New Delhi",
"pincode":"110017",
"admissionDate":"2020-04-06",
"previousSchool":"Bal Bharati Public School",
"transport":"Route 2 — Pitampura",
"feeStatus":"Due",
"emergencyContact":"9914895782",
"status":"Active",
"hobbies":[
"Reading",
"Painting"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260047",
"admissionNo":"ADM-20-047",
"name":"Vihaan Chopra",
"gender":"Male",
"dob":"2015-02-14",
"class":"5",
"section":"A",
"roll":4,
"house":"Shivalik",
"bloodGroup":"O+",
"fatherName":"Aryan Chopra",
"fatherOccupation":"Software Engineer",
"fatherPhone":"9878661147",
"fatherEmail":"aryan27@gmail.com",
"motherName":"Nandini Chopra",
"motherOccupation":"Bank Officer",
"motherPhone":"9729860677",
"guardian":"Father",
"address":"841, Block G, Pitampura",
"city":"New Delhi",
"pincode":"110062",
"admissionDate":"2020-04-11",
"previousSchool":"Home Schooled",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9963782130",
"status":"Active",
"hobbies":[
"Music",
"Classical Dance"
],
"achievements":"Elocution Contest — 2nd position"
},
{
"id":"GVPS260048",
"admissionNo":"ADM-20-048",
"name":"Atharv Mehra",
"gender":"Male",
"dob":"2015-04-11",
"class":"5",
"section":"B",
"roll":1,
"house":"Udaygiri",
"bloodGroup":"A+",
"fatherName":"Rudra Mehra",
"fatherOccupation":"Architect",
"fatherPhone":"9860682277",
"fatherEmail":"rudra36@gmail.com",
"motherName":"Kavya Mehra",
"motherOccupation":"Boutique Owner",
"motherPhone":"9754661637",
"guardian":"Father",
"address":"808, Block E, Paschim Vihar",
"city":"New Delhi",
"pincode":"110014",
"admissionDate":"2020-04-20",
"previousSchool":"Bal Bharati Public School",
"transport":"Route 3 — Model Town",
"feeStatus":"Paid",
"emergencyContact":"9983585369",
"status":"Active",
"hobbies":[
"Debate",
"Classical Dance"
],
"achievements":"—"
},
{
"id":"GVPS260049",
"admissionNo":"ADM-20-049",
"name":"Kunal Tyagi",
"gender":"Male",
"dob":"2015-04-17",
"class":"5",
"section":"B",
"roll":2,
"house":"Aravali",
"bloodGroup":"B+",
"fatherName":"Dhruv Tyagi",
"fatherOccupation":"Sales Manager",
"fatherPhone":"9813584726",
"fatherEmail":"dhruv90@gmail.com",
"motherName":"Jiya Tyagi",
"motherOccupation":"Bank Officer",
"motherPhone":"9721172059",
"guardian":"Father",
"address":"140, Block D, Netaji Subhash Place",
"city":"New Delhi",
"pincode":"110062",
"admissionDate":"2020-04-19",
"previousSchool":"Home Schooled",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9954182411",
"status":"Active",
"hobbies":[
"Painting",
"Classical Dance"
],
"achievements":"Best Handwriting Award"
},
{
"id":"GVPS260050",
"admissionNo":"ADM-20-050",
"name":"Aditi Aggarwal",
"gender":"Female",
"dob":"2015-08-24",
"class":"5",
"section":"B",
"roll":3,
"house":"Nilgiri",
"bloodGroup":"A-",
"fatherName":"Advik Aggarwal",
"fatherOccupation":"Architect",
"fatherPhone":"9883302944",
"fatherEmail":"advik81@gmail.com",
"motherName":"Navya Aggarwal",
"motherOccupation":"Teacher",
"motherPhone":"9785208686",
"guardian":"Father",
"address":"271, Block C, Adarsh Nagar",
"city":"New Delhi",
"pincode":"110096",
"admissionDate":"2020-04-11",
"previousSchool":"Bal Bharati Public School",
"transport":"Route 1 — Rohini",
"feeStatus":"Paid",
"emergencyContact":"9948732431",
"status":"Active",
"hobbies":[
"Classical Dance",
"Debate"
],
"achievements":"Chess Championship — Runner-up"
},
{
"id":"GVPS260051",
"admissionNo":"ADM-19-051",
"name":"Ishaan Jindal",
"gender":"Male",
"dob":"2014-09-26",
"class":"6",
"section":"A",
"roll":1,
"house":"Shivalik",
"bloodGroup":"AB+",
"fatherName":"Kabir Jindal",
"fatherOccupation":"Bank Manager",
"fatherPhone":"9898365325",
"fatherEmail":"kabir27@gmail.com",
"motherName":"Ishita Jindal",
"motherOccupation":"Fashion Designer",
"motherPhone":"9761223062",
"guardian":"Father",
"address":"630, Block A, Rohini Sector 7",
"city":"New Delhi",
"pincode":"110021",
"admissionDate":"2019-04-07",
"previousSchool":"Home Schooled",
"transport":"Route 4 — Punjabi Bagh",
"feeStatus":"Paid",
"emergencyContact":"9929191346",
"status":"Active",
"hobbies":[
"Skating",
"Football"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260052",
"admissionNo":"ADM-19-052",
"name":"Kiara Mehra",
"gender":"Female",
"dob":"2014-09-05",
"class":"6",
"section":"A",
"roll":2,
"house":"Udaygiri",
"bloodGroup":"O+",
"fatherName":"Atharv Mehra",
"fatherOccupation":"Businessman",
"fatherPhone":"9896128274",
"fatherEmail":"atharv14@gmail.com",
"motherName":"Navya Mehra",
"motherOccupation":"Doctor",
"motherPhone":"9764113612",
"guardian":"Father",
"address":"510, Block B, Rani Bagh",
"city":"New Delhi",
"pincode":"110061",
"admissionDate":"2019-04-12",
"previousSchool":"Home Schooled",
"transport":"Own Transport",
"feeStatus":"Due",
"emergencyContact":"9947791287",
"status":"Active",
"hobbies":[
"Reading",
"Music"
],
"achievements":"100% attendance certificate"
},
{
"id":"GVPS260053",
"admissionNo":"ADM-19-053",
"name":"Saanvi Goel",
"gender":"Female",
"dob":"2014-02-17",
"class":"6",
"section":"A",
"roll":3,
"house":"Aravali",
"bloodGroup":"AB+",
"fatherName":"Yuvraj Goel",
"fatherOccupation":"Software Engineer",
"fatherPhone":"9813249701",
"fatherEmail":"yuvraj51@gmail.com",
"motherName":"Prisha Goel",
"motherOccupation":"Homemaker",
"motherPhone":"9749734592",
"guardian":"Father",
"address":"743, Block G, Punjabi Bagh",
"city":"New Delhi",
"pincode":"110094",
"admissionDate":"2019-04-13",
"previousSchool":"First Step Kindergarten",
"transport":"Route 3 — Model Town",
"feeStatus":"Paid",
"emergencyContact":"9942795090",
"status":"Active",
"hobbies":[
"Painting",
"Reading"
],
"achievements":"Elocution Contest — 2nd position"
},
{
"id":"GVPS260054",
"admissionNo":"ADM-19-054",
"name":"Anaya Batra",
"gender":"Female",
"dob":"2014-12-04",
"class":"6",
"section":"A",
"roll":4,
"house":"Nilgiri",
"bloodGroup":"A-",
"fatherName":"Parth Batra",
"fatherOccupation":"Advocate",
"fatherPhone":"9898160115",
"fatherEmail":"parth60@gmail.com",
"motherName":"Simran Batra",
"motherOccupation":"Bank Officer",
"motherPhone":"9719185815",
"guardian":"Father",
"address":"749, Block F, Ashok Vihar",
"city":"New Delhi",
"pincode":"110070",
"admissionDate":"2019-04-14",
"previousSchool":"Bal Bharati Public School",
"transport":"Route 2 — Pitampura",
"feeStatus":"Due",
"emergencyContact":"9986075057",
"status":"Active",
"hobbies":[
"Painting",
"Music"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260055",
"admissionNo":"ADM-19-055",
"name":"Reyansh Bisht",
"gender":"Male",
"dob":"2014-09-19",
"class":"6",
"section":"B",
"roll":1,
"house":"Shivalik",
"bloodGroup":"B+",
"fatherName":"Shaurya Bisht",
"fatherOccupation":"Contractor",
"fatherPhone":"9850167003",
"fatherEmail":"shaurya13@gmail.com",
"motherName":"Aadhya Bisht",
"motherOccupation":"Nutritionist",
"motherPhone":"9733087173",
"guardian":"Father",
"address":"65, Block H, Model Town",
"city":"New Delhi",
"pincode":"110058",
"admissionDate":"2019-04-17",
"previousSchool":"Home Schooled",
"transport":"Route 2 — Pitampura",
"feeStatus":"Paid",
"emergencyContact":"9988585678",
"status":"Active",
"hobbies":[
"Debate",
"Cricket"
],
"achievements":"Best Handwriting Award"
},
{
"id":"GVPS260056",
"admissionNo":"ADM-19-056",
"name":"Shaurya Bisht",
"gender":"Male",
"dob":"2014-06-10",
"class":"6",
"section":"B",
"roll":2,
"house":"Udaygiri",
"bloodGroup":"O-",
"fatherName":"Yuvraj Bisht",
"fatherOccupation":"Shop Owner",
"fatherPhone":"9837717055",
"fatherEmail":"yuvraj35@gmail.com",
"motherName":"Nitya Bisht",
"motherOccupation":"Fashion Designer",
"motherPhone":"9717913660",
"guardian":"Father",
"address":"201, Block F, Shalimar Bagh",
"city":"New Delhi",
"pincode":"110046",
"admissionDate":"2019-04-16",
"previousSchool":"Little Angels Play School",
"transport":"Route 2 — Pitampura",
"feeStatus":"Paid",
"emergencyContact":"9981551049",
"status":"Active",
"hobbies":[
"Debate",
"Music"
],
"achievements":"Inter-house Quiz — 1st position"
},
{
"id":"GVPS260057",
"admissionNo":"ADM-19-057",
"name":"Rudra Bhardwaj",
"gender":"Male",
"dob":"2014-06-09",
"class":"6",
"section":"B",
"roll":3,
"house":"Aravali",
"bloodGroup":"B+",
"fatherName":"Veer Bhardwaj",
"fatherOccupation":"Govt. Officer",
"fatherPhone":"9869747756",
"fatherEmail":"veer63@gmail.com",
"motherName":"Aarohi Bhardwaj",
"motherOccupation":"Teacher",
"motherPhone":"9732735609",
"guardian":"Father",
"address":"229, Block E, Mukherjee Nagar",
"city":"New Delhi",
"pincode":"110016",
"admissionDate":"2019-04-07",
"previousSchool":"Mount Carmel School",
"transport":"Route 2 — Pitampura",
"feeStatus":"Paid",
"emergencyContact":"9977300539",
"status":"Active",
"hobbies":[
"Robotics",
"Music"
],
"achievements":"Chess Championship — Runner-up"
},
{
"id":"GVPS260058",
"admissionNo":"ADM-18-058",
"name":"Kunal Tandon",
"gender":"Male",
"dob":"2013-04-10",
"class":"7",
"section":"A",
"roll":1,
"house":"Nilgiri",
"bloodGroup":"B-",
"fatherName":"Ranbir Tandon",
"fatherOccupation":"Doctor",
"fatherPhone":"9847156141",
"fatherEmail":"ranbir26@gmail.com",
"motherName":"Simran Tandon",
"motherOccupation":"Teacher",
"motherPhone":"9772105465",
"guardian":"Father",
"address":"79, Block H, Shalimar Bagh",
"city":"New Delhi",
"pincode":"110068",
"admissionDate":"2018-04-03",
"previousSchool":"Little Angels Play School",
"transport":"Route 1 — Rohini",
"feeStatus":"Paid",
"emergencyContact":"9982109099",
"status":"Active",
"hobbies":[
"Robotics",
"Football"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260059",
"admissionNo":"ADM-18-059",
"name":"Rudra Yadav",
"gender":"Male",
"dob":"2013-04-08",
"class":"7",
"section":"A",
"roll":2,
"house":"Shivalik",
"bloodGroup":"A-",
"fatherName":"Ishaan Yadav",
"fatherOccupation":"Businessman",
"fatherPhone":"9835012803",
"fatherEmail":"ishaan29@gmail.com",
"motherName":"Pari Yadav",
"motherOccupation":"Homemaker",
"motherPhone":"9793471712",
"guardian":"Father",
"address":"473, Block G, Mukherjee Nagar",
"city":"New Delhi",
"pincode":"110001",
"admissionDate":"2018-04-16",
"previousSchool":"Little Angels Play School",
"transport":"Route 2 — Pitampura",
"feeStatus":"Paid",
"emergencyContact":"9984625771",
"status":"Active",
"hobbies":[
"Classical Dance",
"Music"
],
"achievements":"—"
},
{
"id":"GVPS260060",
"admissionNo":"ADM-18-060",
"name":"Parth Khanna",
"gender":"Male",
"dob":"2013-09-27",
"class":"7",
"section":"A",
"roll":3,
"house":"Udaygiri",
"bloodGroup":"A-",
"fatherName":"Veer Khanna",
"fatherOccupation":"Contractor",
"fatherPhone":"9881360983",
"fatherEmail":"veer32@gmail.com",
"motherName":"Kavya Khanna",
"motherOccupation":"Company Secretary",
"motherPhone":"9732169427",
"guardian":"Father",
"address":"115, Block G, Prashant Vihar",
"city":"New Delhi",
"pincode":"110031",
"admissionDate":"2018-04-15",
"previousSchool":"Mount Carmel School",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9944853608",
"status":"Active",
"hobbies":[
"Reading",
"Skating"
],
"achievements":"Elocution Contest — 2nd position"
},
{
"id":"GVPS260061",
"admissionNo":"ADM-18-061",
"name":"Pari Verma",
"gender":"Female",
"dob":"2013-04-20",
"class":"7",
"section":"A",
"roll":4,
"house":"Aravali",
"bloodGroup":"AB+",
"fatherName":"Dhruv Verma",
"fatherOccupation":"Bank Manager",
"fatherPhone":"9853628112",
"fatherEmail":"dhruv29@gmail.com",
"motherName":"Anaya Verma",
"motherOccupation":"Company Secretary",
"motherPhone":"9712387556",
"guardian":"Father",
"address":"624, Block H, Rani Bagh",
"city":"New Delhi",
"pincode":"110056",
"admissionDate":"2018-04-17",
"previousSchool":"Delhi Public School, Rohini",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9914151621",
"status":"Active",
"hobbies":[
"Painting",
"Music"
],
"achievements":"Science Exhibition — Merit"
},
{
"id":"GVPS260062",
"admissionNo":"ADM-18-062",
"name":"Rohan Malhotra",
"gender":"Male",
"dob":"2013-01-10",
"class":"7",
"section":"B",
"roll":1,
"house":"Nilgiri",
"bloodGroup":"O+",
"fatherName":"Aryan Malhotra",
"fatherOccupation":"Sales Manager",
"fatherPhone":"9880525594",
"fatherEmail":"aryan43@gmail.com",
"motherName":"Anaya Malhotra",
"motherOccupation":"Company Secretary",
"motherPhone":"9776886729",
"guardian":"Father",
"address":"91, Block C, Mukherjee Nagar",
"city":"New Delhi",
"pincode":"110049",
"admissionDate":"2018-04-09",
"previousSchool":"New Era Public School",
"transport":"Route 2 — Pitampura",
"feeStatus":"Due",
"emergencyContact":"9998450445",
"status":"Active",
"hobbies":[
"Music",
"Reading"
],
"achievements":"Inter-house Quiz — 1st position"
},
{
"id":"GVPS260063",
"admissionNo":"ADM-18-063",
"name":"Aarohi Grover",
"gender":"Female",
"dob":"2013-06-23",
"class":"7",
"section":"B",
"roll":2,
"house":"Shivalik",
"bloodGroup":"B+",
"fatherName":"Arjun Grover",
"fatherOccupation":"Shop Owner",
"fatherPhone":"9890631182",
"fatherEmail":"arjun27@gmail.com",
"motherName":"Jiya Grover",
"motherOccupation":"Doctor",
"motherPhone":"9771112045",
"guardian":"Father",
"address":"535, Block A, Rohini Sector 7",
"city":"New Delhi",
"pincode":"110001",
"admissionDate":"2018-04-08",
"previousSchool":"Home Schooled",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9922270843",
"status":"Active",
"hobbies":[
"Football",
"Skating"
],
"achievements":"Best Handwriting Award"
},
{
"id":"GVPS260064",
"admissionNo":"ADM-18-064",
"name":"Aarohi Kaushik",
"gender":"Female",
"dob":"2013-02-02",
"class":"7",
"section":"B",
"roll":3,
"house":"Udaygiri",
"bloodGroup":"B-",
"fatherName":"Manav Kaushik",
"fatherOccupation":"Sales Manager",
"fatherPhone":"9840853206",
"fatherEmail":"manav47@gmail.com",
"motherName":"Jiya Kaushik",
"motherOccupation":"Fashion Designer",
"motherPhone":"9725951076",
"guardian":"Father",
"address":"566, Block D, Keshav Puram",
"city":"New Delhi",
"pincode":"110054",
"admissionDate":"2018-04-15",
"previousSchool":"St. Xavier's Convent",
"transport":"Route 2 — Pitampura",
"feeStatus":"Paid",
"emergencyContact":"9951446519",
"status":"Active",
"hobbies":[
"Classical Dance",
"Debate"
],
"achievements":"Inter-house Quiz — 1st position"
},
{
"id":"GVPS260065",
"admissionNo":"ADM-17-065",
"name":"Krish Goel",
"gender":"Male",
"dob":"2012-11-02",
"class":"8",
"section":"A",
"roll":1,
"house":"Aravali",
"bloodGroup":"B-",
"fatherName":"Samarth Goel",
"fatherOccupation":"Sales Manager",
"fatherPhone":"9833794048",
"fatherEmail":"samarth69@gmail.com",
"motherName":"Anvi Goel",
"motherOccupation":"HR Manager",
"motherPhone":"9738631361",
"guardian":"Father",
"address":"391, Block G, Rani Bagh",
"city":"New Delhi",
"pincode":"110007",
"admissionDate":"2017-04-07",
"previousSchool":"Home Schooled",
"transport":"Route 3 — Model Town",
"feeStatus":"Paid",
"emergencyContact":"9934643640",
"status":"Active",
"hobbies":[
"Skating",
"Chess"
],
"achievements":"—"
},
{
"id":"GVPS260066",
"admissionNo":"ADM-17-066",
"name":"Krish Bansal",
"gender":"Male",
"dob":"2012-10-15",
"class":"8",
"section":"A",
"roll":2,
"house":"Nilgiri",
"bloodGroup":"AB+",
"fatherName":"Nikhil Bansal",
"fatherOccupation":"Shop Owner",
"fatherPhone":"9894107909",
"fatherEmail":"nikhil96@gmail.com",
"motherName":"Riya Bansal",
"motherOccupation":"Doctor",
"motherPhone":"9775377968",
"guardian":"Father",
"address":"210, Block G, Paschim Vihar",
"city":"New Delhi",
"pincode":"110054",
"admissionDate":"2017-04-03",
"previousSchool":"Little Angels Play School",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9958696512",
"status":"Active",
"hobbies":[
"Robotics",
"Cricket"
],
"achievements":"—"
},
{
"id":"GVPS260067",
"admissionNo":"ADM-17-067",
"name":"Samarth Kapoor",
"gender":"Male",
"dob":"2012-09-13",
"class":"8",
"section":"A",
"roll":3,
"house":"Shivalik",
"bloodGroup":"B-",
"fatherName":"Kunal Kapoor",
"fatherOccupation":"Doctor",
"fatherPhone":"9846053842",
"fatherEmail":"kunal23@gmail.com",
"motherName":"Simran Kapoor",
"motherOccupation":"Nutritionist",
"motherPhone":"9717683478",
"guardian":"Father",
"address":"158, Block F, Prashant Vihar",
"city":"New Delhi",
"pincode":"110018",
"admissionDate":"2017-04-08",
"previousSchool":"St. Xavier's Convent",
"transport":"Route 1 — Rohini",
"feeStatus":"Paid",
"emergencyContact":"9961594725",
"status":"Active",
"hobbies":[
"Reading",
"Painting"
],
"achievements":"100% attendance certificate"
},
{
"id":"GVPS260068",
"admissionNo":"ADM-17-068",
"name":"Pari Yadav",
"gender":"Female",
"dob":"2012-09-22",
"class":"8",
"section":"A",
"roll":4,
"house":"Udaygiri",
"bloodGroup":"A-",
"fatherName":"Vihaan Yadav",
"fatherOccupation":"Doctor",
"fatherPhone":"9875555469",
"fatherEmail":"vihaan15@gmail.com",
"motherName":"Riya Yadav",
"motherOccupation":"Bank Officer",
"motherPhone":"9730249313",
"guardian":"Father",
"address":"527, Block C, Civil Lines",
"city":"New Delhi",
"pincode":"110005",
"admissionDate":"2017-04-07",
"previousSchool":"Mount Carmel School",
"transport":"Route 4 — Punjabi Bagh",
"feeStatus":"Due",
"emergencyContact":"9974239684",
"status":"Active",
"hobbies":[
"Skating",
"Chess"
],
"achievements":"—"
},
{
"id":"GVPS260069",
"admissionNo":"ADM-17-069",
"name":"Anvi Bhardwaj",
"gender":"Female",
"dob":"2012-08-22",
"class":"8",
"section":"B",
"roll":1,
"house":"Aravali",
"bloodGroup":"B+",
"fatherName":"Krish Bhardwaj",
"fatherOccupation":"Advocate",
"fatherPhone":"9881802913",
"fatherEmail":"krish67@gmail.com",
"motherName":"Ira Bhardwaj",
"motherOccupation":"HR Manager",
"motherPhone":"9728345792",
"guardian":"Father",
"address":"396, Block F, Adarsh Nagar",
"city":"New Delhi",
"pincode":"110029",
"admissionDate":"2017-04-04",
"previousSchool":"Mount Carmel School",
"transport":"Route 3 — Model Town",
"feeStatus":"Paid",
"emergencyContact":"9992048391",
"status":"Active",
"hobbies":[
"Debate",
"Chess"
],
"achievements":"Inter-house Quiz — 1st position"
},
{
"id":"GVPS260070",
"admissionNo":"ADM-17-070",
"name":"Samarth Saxena",
"gender":"Male",
"dob":"2012-08-19",
"class":"8",
"section":"B",
"roll":2,
"house":"Nilgiri",
"bloodGroup":"B-",
"fatherName":"Aarav Saxena",
"fatherOccupation":"Advocate",
"fatherPhone":"9898640041",
"fatherEmail":"aarav95@gmail.com",
"motherName":"Bhavya Saxena",
"motherOccupation":"Teacher",
"motherPhone":"9739018601",
"guardian":"Father",
"address":"572, Block F, Keshav Puram",
"city":"New Delhi",
"pincode":"110086",
"admissionDate":"2017-04-04",
"previousSchool":"First Step Kindergarten",
"transport":"Route 2 — Pitampura",
"feeStatus":"Paid",
"emergencyContact":"9922065028",
"status":"Active",
"hobbies":[
"Football",
"Painting"
],
"achievements":"100% attendance certificate"
},
{
"id":"GVPS260071",
"admissionNo":"ADM-17-071",
"name":"Anaya Batra",
"gender":"Female",
"dob":"2012-07-11",
"class":"8",
"section":"B",
"roll":3,
"house":"Shivalik",
"bloodGroup":"O+",
"fatherName":"Rudra Batra",
"fatherOccupation":"Doctor",
"fatherPhone":"9831286196",
"fatherEmail":"rudra61@gmail.com",
"motherName":"Nitya Batra",
"motherOccupation":"Bank Officer",
"motherPhone":"9773783240",
"guardian":"Father",
"address":"787, Block C, Mukherjee Nagar",
"city":"New Delhi",
"pincode":"110045",
"admissionDate":"2017-04-08",
"previousSchool":"St. Xavier's Convent",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9966680782",
"status":"Active",
"hobbies":[
"Chess",
"Reading"
],
"achievements":"Best Handwriting Award"
},
{
"id":"GVPS260072",
"admissionNo":"ADM-16-072",
"name":"Jiya Kaushik",
"gender":"Female",
"dob":"2011-01-13",
"class":"9",
"section":"A",
"roll":1,
"house":"Udaygiri",
"bloodGroup":"A+",
"fatherName":"Reyansh Kaushik",
"fatherOccupation":"Software Engineer",
"fatherPhone":"9846507616",
"fatherEmail":"reyansh16@gmail.com",
"motherName":"Meera Kaushik",
"motherOccupation":"HR Manager",
"motherPhone":"9776512467",
"guardian":"Father",
"address":"868, Block E, Adarsh Nagar",
"city":"New Delhi",
"pincode":"110061",
"admissionDate":"2016-04-11",
"previousSchool":"Mount Carmel School",
"transport":"Route 1 — Rohini",
"feeStatus":"Paid",
"emergencyContact":"9914744920",
"status":"Active",
"hobbies":[
"Classical Dance",
"Music"
],
"achievements":"Chess Championship — Runner-up"
},
{
"id":"GVPS260073",
"admissionNo":"ADM-16-073",
"name":"Pari Rathore",
"gender":"Female",
"dob":"2011-11-06",
"class":"9",
"section":"A",
"roll":2,
"house":"Aravali",
"bloodGroup":"A-",
"fatherName":"Tanish Rathore",
"fatherOccupation":"Govt. Officer",
"fatherPhone":"9858670795",
"fatherEmail":"tanish13@gmail.com",
"motherName":"Nitya Rathore",
"motherOccupation":"Company Secretary",
"motherPhone":"9739065130",
"guardian":"Father",
"address":"790, Block B, Civil Lines",
"city":"New Delhi",
"pincode":"110081",
"admissionDate":"2016-04-02",
"previousSchool":"Home Schooled",
"transport":"Own Transport",
"feeStatus":"Due",
"emergencyContact":"9918540009",
"status":"Active",
"hobbies":[
"Robotics",
"Painting"
],
"achievements":"—"
},
{
"id":"GVPS260074",
"admissionNo":"ADM-16-074",
"name":"Tara Kaushik",
"gender":"Female",
"dob":"2011-07-02",
"class":"9",
"section":"A",
"roll":3,
"house":"Nilgiri",
"bloodGroup":"A-",
"fatherName":"Ayush Kaushik",
"fatherOccupation":"Advocate",
"fatherPhone":"9851420585",
"fatherEmail":"ayush73@gmail.com",
"motherName":"Ira Kaushik",
"motherOccupation":"Nutritionist",
"motherPhone":"9773490533",
"guardian":"Father",
"address":"22, Block C, Prashant Vihar",
"city":"New Delhi",
"pincode":"110078",
"admissionDate":"2016-04-07",
"previousSchool":"Mount Carmel School",
"transport":"Route 2 — Pitampura",
"feeStatus":"Paid",
"emergencyContact":"9939535351",
"status":"Active",
"hobbies":[
"Debate",
"Skating"
],
"achievements":"Inter-house Quiz — 1st position"
},
{
"id":"GVPS260075",
"admissionNo":"ADM-16-075",
"name":"Aadhya Sethi",
"gender":"Female",
"dob":"2011-09-16",
"class":"9",
"section":"A",
"roll":4,
"house":"Shivalik",
"bloodGroup":"A-",
"fatherName":"Veer Sethi",
"fatherOccupation":"Chartered Accountant",
"fatherPhone":"9893803777",
"fatherEmail":"veer81@gmail.com",
"motherName":"Kavya Sethi",
"motherOccupation":"Nutritionist",
"motherPhone":"9745442429",
"guardian":"Father",
"address":"355, Block B, Keshav Puram",
"city":"New Delhi",
"pincode":"110003",
"admissionDate":"2016-04-11",
"previousSchool":"New Era Public School",
"transport":"Own Transport",
"feeStatus":"Due",
"emergencyContact":"9930993657",
"status":"Active",
"hobbies":[
"Debate",
"Chess"
],
"achievements":"Science Exhibition — Merit"
},
{
"id":"GVPS260076",
"admissionNo":"ADM-16-076",
"name":"Siya Tyagi",
"gender":"Female",
"dob":"2011-08-26",
"class":"9",
"section":"B",
"roll":1,
"house":"Udaygiri",
"bloodGroup":"AB+",
"fatherName":"Kunal Tyagi",
"fatherOccupation":"Advocate",
"fatherPhone":"9859237770",
"fatherEmail":"kunal95@gmail.com",
"motherName":"Riya Tyagi",
"motherOccupation":"Boutique Owner",
"motherPhone":"9776889803",
"guardian":"Father",
"address":"243, Block D, Kamla Nagar",
"city":"New Delhi",
"pincode":"110047",
"admissionDate":"2016-04-11",
"previousSchool":"Bal Bharati Public School",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9918487481",
"status":"Active",
"hobbies":[
"Painting",
"Music"
],
"achievements":"Best Handwriting Award"
},
{
"id":"GVPS260077",
"admissionNo":"ADM-16-077",
"name":"Veer Grover",
"gender":"Male",
"dob":"2011-09-25",
"class":"9",
"section":"B",
"roll":2,
"house":"Aravali",
"bloodGroup":"B+",
"fatherName":"Manav Grover",
"fatherOccupation":"Sales Manager",
"fatherPhone":"9865392498",
"fatherEmail":"manav71@gmail.com",
"motherName":"Nitya Grover",
"motherOccupation":"Homemaker",
"motherPhone":"9756257046",
"guardian":"Father",
"address":"260, Block G, Rohini Sector 7",
"city":"New Delhi",
"pincode":"110065",
"admissionDate":"2016-04-13",
"previousSchool":"Mount Carmel School",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9959353905",
"status":"Active",
"hobbies":[
"Classical Dance",
"Chess"
],
"achievements":"Chess Championship — Runner-up"
},
{
"id":"GVPS260078",
"admissionNo":"ADM-16-078",
"name":"Lakshya Goel",
"gender":"Male",
"dob":"2011-03-19",
"class":"9",
"section":"B",
"roll":3,
"house":"Nilgiri",
"bloodGroup":"B+",
"fatherName":"Aryan Goel",
"fatherOccupation":"Sales Manager",
"fatherPhone":"9846096428",
"fatherEmail":"aryan30@gmail.com",
"motherName":"Kavya Goel",
"motherOccupation":"Doctor",
"motherPhone":"9736958809",
"guardian":"Father",
"address":"386, Block E, Mukherjee Nagar",
"city":"New Delhi",
"pincode":"110030",
"admissionDate":"2016-04-06",
"previousSchool":"Little Angels Play School",
"transport":"Route 4 — Punjabi Bagh",
"feeStatus":"Paid",
"emergencyContact":"9945973287",
"status":"Active",
"hobbies":[
"Robotics",
"Football"
],
"achievements":"Best Handwriting Award"
},
{
"id":"GVPS260079",
"admissionNo":"ADM-16-079",
"name":"Tara Kaushik",
"gender":"Female",
"dob":"2011-11-05",
"class":"9",
"section":"B",
"roll":4,
"house":"Shivalik",
"bloodGroup":"A+",
"fatherName":"Vihaan Kaushik",
"fatherOccupation":"Businessman",
"fatherPhone":"9836011562",
"fatherEmail":"vihaan46@gmail.com",
"motherName":"Kiara Kaushik",
"motherOccupation":"Nutritionist",
"motherPhone":"9782272635",
"guardian":"Father",
"address":"821, Block B, Mukherjee Nagar",
"city":"New Delhi",
"pincode":"110052",
"admissionDate":"2016-04-11",
"previousSchool":"Little Angels Play School",
"transport":"Own Transport",
"feeStatus":"Due",
"emergencyContact":"9932982045",
"status":"Active",
"hobbies":[
"Classical Dance",
"Painting"
],
"achievements":"Best Handwriting Award"
},
{
"id":"GVPS260080",
"admissionNo":"ADM-15-080",
"name":"Bhavya Negi",
"gender":"Female",
"dob":"2010-11-10",
"class":"10",
"section":"A",
"roll":1,
"house":"Udaygiri",
"bloodGroup":"A-",
"fatherName":"Vivaan Negi",
"fatherOccupation":"Software Engineer",
"fatherPhone":"9829058837",
"fatherEmail":"vivaan83@gmail.com",
"motherName":"Tara Negi",
"motherOccupation":"HR Manager",
"motherPhone":"9739070560",
"guardian":"Father",
"address":"560, Block E, Mukherjee Nagar",
"city":"New Delhi",
"pincode":"110019",
"admissionDate":"2015-04-15",
"previousSchool":"Bal Bharati Public School",
"transport":"Route 1 — Rohini",
"feeStatus":"Paid",
"emergencyContact":"9975534148",
"status":"Active",
"hobbies":[
"Football",
"Painting"
],
"achievements":"Science Exhibition — Merit"
},
{
"id":"GVPS260081",
"admissionNo":"ADM-15-081",
"name":"Aditi Sharma",
"gender":"Female",
"dob":"2010-05-19",
"class":"10",
"section":"A",
"roll":2,
"house":"Aravali",
"bloodGroup":"B-",
"fatherName":"Kunal Sharma",
"fatherOccupation":"Software Engineer",
"fatherPhone":"9846777551",
"fatherEmail":"kunal51@gmail.com",
"motherName":"Ira Sharma",
"motherOccupation":"Bank Officer",
"motherPhone":"9720872094",
"guardian":"Father",
"address":"494, Block D, Model Town",
"city":"New Delhi",
"pincode":"110047",
"admissionDate":"2015-04-18",
"previousSchool":"Mount Carmel School",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9930349379",
"status":"Active",
"hobbies":[
"Painting",
"Cricket"
],
"achievements":"Best Handwriting Award"
},
{
"id":"GVPS260082",
"admissionNo":"ADM-15-082",
"name":"Aarav Chopra",
"gender":"Male",
"dob":"2010-06-16",
"class":"10",
"section":"A",
"roll":3,
"house":"Nilgiri",
"bloodGroup":"O-",
"fatherName":"Advik Chopra",
"fatherOccupation":"Software Engineer",
"fatherPhone":"9874995537",
"fatherEmail":"advik14@gmail.com",
"motherName":"Bhavya Chopra",
"motherOccupation":"HR Manager",
"motherPhone":"9757164265",
"guardian":"Father",
"address":"827, Block G, Ashok Vihar",
"city":"New Delhi",
"pincode":"110072",
"admissionDate":"2015-04-02",
"previousSchool":"New Era Public School",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9947192682",
"status":"Active",
"hobbies":[
"Debate",
"Robotics"
],
"achievements":"Elocution Contest — 2nd position"
},
{
"id":"GVPS260083",
"admissionNo":"ADM-15-083",
"name":"Trisha Rathore",
"gender":"Female",
"dob":"2010-12-02",
"class":"10",
"section":"A",
"roll":4,
"house":"Shivalik",
"bloodGroup":"B+",
"fatherName":"Ishaan Rathore",
"fatherOccupation":"Architect",
"fatherPhone":"9825941864",
"fatherEmail":"ishaan96@gmail.com",
"motherName":"Ridhi Rathore",
"motherOccupation":"Teacher",
"motherPhone":"9746376435",
"guardian":"Father",
"address":"368, Block A, Rohini Sector 7",
"city":"New Delhi",
"pincode":"110072",
"admissionDate":"2015-04-10",
"previousSchool":"St. Xavier's Convent",
"transport":"Own Transport",
"feeStatus":"Due",
"emergencyContact":"9911405596",
"status":"Active",
"hobbies":[
"Debate",
"Painting"
],
"achievements":"Chess Championship — Runner-up"
},
{
"id":"GVPS260084",
"admissionNo":"ADM-15-084",
"name":"Nikhil Tandon",
"gender":"Male",
"dob":"2010-05-26",
"class":"10",
"section":"B",
"roll":1,
"house":"Udaygiri",
"bloodGroup":"B-",
"fatherName":"Vivaan Tandon",
"fatherOccupation":"Shop Owner",
"fatherPhone":"9863589203",
"fatherEmail":"vivaan49@gmail.com",
"motherName":"Bhavya Tandon",
"motherOccupation":"Boutique Owner",
"motherPhone":"9799377281",
"guardian":"Father",
"address":"787, Block B, Adarsh Nagar",
"city":"New Delhi",
"pincode":"110062",
"admissionDate":"2015-04-13",
"previousSchool":"Home Schooled",
"transport":"Route 3 — Model Town",
"feeStatus":"Paid",
"emergencyContact":"9911273239",
"status":"Active",
"hobbies":[
"Music",
"Chess"
],
"achievements":"Elocution Contest — 2nd position"
},
{
"id":"GVPS260085",
"admissionNo":"ADM-15-085",
"name":"Tara Bhardwaj",
"gender":"Female",
"dob":"2010-06-17",
"class":"10",
"section":"B",
"roll":2,
"house":"Aravali",
"bloodGroup":"O+",
"fatherName":"Manav Bhardwaj",
"fatherOccupation":"Professor",
"fatherPhone":"9895634683",
"fatherEmail":"manav67@gmail.com",
"motherName":"Pari Bhardwaj",
"motherOccupation":"Nutritionist",
"motherPhone":"9751896667",
"guardian":"Father",
"address":"286, Block B, Keshav Puram",
"city":"New Delhi",
"pincode":"110084",
"admissionDate":"2015-04-11",
"previousSchool":"St. Xavier's Convent",
"transport":"Route 3 — Model Town",
"feeStatus":"Paid",
"emergencyContact":"9938670493",
"status":"Active",
"hobbies":[
"Chess",
"Debate"
],
"achievements":"Inter-house Quiz — 1st position"
},
{
"id":"GVPS260086",
"admissionNo":"ADM-15-086",
"name":"Harsh Khanna",
"gender":"Male",
"dob":"2010-11-07",
"class":"10",
"section":"B",
"roll":3,
"house":"Nilgiri",
"bloodGroup":"B+",
"fatherName":"Ishaan Khanna",
"fatherOccupation":"Bank Manager",
"fatherPhone":"9860036265",
"fatherEmail":"ishaan54@gmail.com",
"motherName":"Meera Khanna",
"motherOccupation":"Doctor",
"motherPhone":"9767814280",
"guardian":"Father",
"address":"23, Block A, Pitampura",
"city":"New Delhi",
"pincode":"110052",
"admissionDate":"2015-04-17",
"previousSchool":"Little Angels Play School",
"transport":"Route 4 — Punjabi Bagh",
"feeStatus":"Paid",
"emergencyContact":"9953150789",
"status":"Active",
"hobbies":[
"Skating",
"Debate"
],
"achievements":"Inter-house Quiz — 1st position"
},
{
"id":"GVPS260087",
"admissionNo":"ADM-14-087",
"name":"Yuvraj Gupta",
"gender":"Male",
"dob":"2009-10-04",
"class":"11",
"section":"Science",
"roll":1,
"house":"Shivalik",
"bloodGroup":"AB+",
"fatherName":"Kunal Gupta",
"fatherOccupation":"Doctor",
"fatherPhone":"9877013826",
"fatherEmail":"kunal62@gmail.com",
"motherName":"Anvi Gupta",
"motherOccupation":"Doctor",
"motherPhone":"9746690772",
"guardian":"Father",
"address":"72, Block G, Civil Lines",
"city":"New Delhi",
"pincode":"110042",
"admissionDate":"2014-04-06",
"previousSchool":"First Step Kindergarten",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9929881346",
"status":"Active",
"hobbies":[
"Football",
"Cricket"
],
"achievements":"Elocution Contest — 2nd position"
},
{
"id":"GVPS260088",
"admissionNo":"ADM-14-088",
"name":"Aditi Grover",
"gender":"Female",
"dob":"2009-12-21",
"class":"11",
"section":"Science",
"roll":2,
"house":"Udaygiri",
"bloodGroup":"A+",
"fatherName":"Aryan Grover",
"fatherOccupation":"Chartered Accountant",
"fatherPhone":"9870829615",
"fatherEmail":"aryan65@gmail.com",
"motherName":"Prisha Grover",
"motherOccupation":"Lecturer",
"motherPhone":"9766286792",
"guardian":"Father",
"address":"857, Block G, Rani Bagh",
"city":"New Delhi",
"pincode":"110065",
"admissionDate":"2014-04-08",
"previousSchool":"Home Schooled",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9979153263",
"status":"Active",
"hobbies":[
"Cricket",
"Skating"
],
"achievements":"—"
},
{
"id":"GVPS260089",
"admissionNo":"ADM-14-089",
"name":"Riya Goel",
"gender":"Female",
"dob":"2009-01-20",
"class":"11",
"section":"Science",
"roll":3,
"house":"Aravali",
"bloodGroup":"B+",
"fatherName":"Vihaan Goel",
"fatherOccupation":"Architect",
"fatherPhone":"9872905663",
"fatherEmail":"vihaan52@gmail.com",
"motherName":"Simran Goel",
"motherOccupation":"Fashion Designer",
"motherPhone":"9793598883",
"guardian":"Father",
"address":"321, Block D, Kamla Nagar",
"city":"New Delhi",
"pincode":"110095",
"admissionDate":"2014-04-16",
"previousSchool":"Home Schooled",
"transport":"Route 1 — Rohini",
"feeStatus":"Paid",
"emergencyContact":"9975911739",
"status":"Active",
"hobbies":[
"Painting",
"Debate"
],
"achievements":"Science Exhibition — Merit"
},
{
"id":"GVPS260090",
"admissionNo":"ADM-14-090",
"name":"Lakshya Aggarwal",
"gender":"Male",
"dob":"2009-02-17",
"class":"11",
"section":"Science",
"roll":4,
"house":"Nilgiri",
"bloodGroup":"B+",
"fatherName":"Atharv Aggarwal",
"fatherOccupation":"Businessman",
"fatherPhone":"9855959666",
"fatherEmail":"atharv42@gmail.com",
"motherName":"Pari Aggarwal",
"motherOccupation":"Boutique Owner",
"motherPhone":"9756811460",
"guardian":"Father",
"address":"465, Block D, Pitampura",
"city":"New Delhi",
"pincode":"110069",
"admissionDate":"2014-04-01",
"previousSchool":"Home Schooled",
"transport":"Route 2 — Pitampura",
"feeStatus":"Due",
"emergencyContact":"9947530036",
"status":"Active",
"hobbies":[
"Debate",
"Painting"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260091",
"admissionNo":"ADM-14-091",
"name":"Bhavya Yadav",
"gender":"Female",
"dob":"2009-08-08",
"class":"11",
"section":"Commerce",
"roll":1,
"house":"Shivalik",
"bloodGroup":"O-",
"fatherName":"Kabir Yadav",
"fatherOccupation":"Businessman",
"fatherPhone":"9883723424",
"fatherEmail":"kabir18@gmail.com",
"motherName":"Bhavya Yadav",
"motherOccupation":"Doctor",
"motherPhone":"9759103639",
"guardian":"Father",
"address":"183, Block B, Paschim Vihar",
"city":"New Delhi",
"pincode":"110043",
"admissionDate":"2014-04-02",
"previousSchool":"First Step Kindergarten",
"transport":"Route 2 — Pitampura",
"feeStatus":"Paid",
"emergencyContact":"9925757869",
"status":"Active",
"hobbies":[
"Football",
"Chess"
],
"achievements":"100% attendance certificate"
},
{
"id":"GVPS260092",
"admissionNo":"ADM-14-092",
"name":"Veer Rastogi",
"gender":"Male",
"dob":"2009-10-15",
"class":"11",
"section":"Commerce",
"roll":2,
"house":"Udaygiri",
"bloodGroup":"A+",
"fatherName":"Ranbir Rastogi",
"fatherOccupation":"Professor",
"fatherPhone":"9837747857",
"fatherEmail":"ranbir78@gmail.com",
"motherName":"Nitya Rastogi",
"motherOccupation":"Nutritionist",
"motherPhone":"9736449500",
"guardian":"Father",
"address":"574, Block G, Pitampura",
"city":"New Delhi",
"pincode":"110049",
"admissionDate":"2014-04-01",
"previousSchool":"First Step Kindergarten",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9994517995",
"status":"Active",
"hobbies":[
"Robotics",
"Debate"
],
"achievements":"Elocution Contest — 2nd position"
},
{
"id":"GVPS260093",
"admissionNo":"ADM-14-093",
"name":"Nikhil Malhotra",
"gender":"Male",
"dob":"2009-03-23",
"class":"11",
"section":"Commerce",
"roll":3,
"house":"Aravali",
"bloodGroup":"B+",
"fatherName":"Kunal Malhotra",
"fatherOccupation":"Advocate",
"fatherPhone":"9825572463",
"fatherEmail":"kunal43@gmail.com",
"motherName":"Ishita Malhotra",
"motherOccupation":"Nutritionist",
"motherPhone":"9791875922",
"guardian":"Father",
"address":"638, Block F, Rohini Sector 7",
"city":"New Delhi",
"pincode":"110040",
"admissionDate":"2014-04-07",
"previousSchool":"Little Angels Play School",
"transport":"Route 1 — Rohini",
"feeStatus":"Paid",
"emergencyContact":"9958361872",
"status":"Active",
"hobbies":[
"Robotics",
"Football"
],
"achievements":"Elocution Contest — 2nd position"
},
{
"id":"GVPS260094",
"admissionNo":"ADM-13-094",
"name":"Kabir Saxena",
"gender":"Male",
"dob":"2008-05-14",
"class":"12",
"section":"Science",
"roll":1,
"house":"Nilgiri",
"bloodGroup":"AB+",
"fatherName":"Devansh Saxena",
"fatherOccupation":"Advocate",
"fatherPhone":"9871309659",
"fatherEmail":"devansh27@gmail.com",
"motherName":"Charvi Saxena",
"motherOccupation":"Boutique Owner",
"motherPhone":"9726586528",
"guardian":"Father",
"address":"98, Block F, Rani Bagh",
"city":"New Delhi",
"pincode":"110066",
"admissionDate":"2013-04-14",
"previousSchool":"New Era Public School",
"transport":"Route 4 — Punjabi Bagh",
"feeStatus":"Paid",
"emergencyContact":"9948235243",
"status":"Active",
"hobbies":[
"Painting",
"Robotics"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260095",
"admissionNo":"ADM-13-095",
"name":"Navya Kaushik",
"gender":"Female",
"dob":"2008-08-13",
"class":"12",
"section":"Science",
"roll":2,
"house":"Shivalik",
"bloodGroup":"A-",
"fatherName":"Arjun Kaushik",
"fatherOccupation":"Doctor",
"fatherPhone":"9870184491",
"fatherEmail":"arjun91@gmail.com",
"motherName":"Shreya Kaushik",
"motherOccupation":"Teacher",
"motherPhone":"9759265865",
"guardian":"Father",
"address":"430, Block F, Civil Lines",
"city":"New Delhi",
"pincode":"110037",
"admissionDate":"2013-04-19",
"previousSchool":"Delhi Public School, Rohini",
"transport":"Own Transport",
"feeStatus":"Paid",
"emergencyContact":"9949319836",
"status":"Active",
"hobbies":[
"Cricket",
"Debate"
],
"achievements":"Inter-house Quiz — 1st position"
},
{
"id":"GVPS260096",
"admissionNo":"ADM-13-096",
"name":"Meera Malhotra",
"gender":"Female",
"dob":"2008-10-28",
"class":"12",
"section":"Science",
"roll":3,
"house":"Udaygiri",
"bloodGroup":"O+",
"fatherName":"Atharv Malhotra",
"fatherOccupation":"Govt. Officer",
"fatherPhone":"9823699439",
"fatherEmail":"atharv85@gmail.com",
"motherName":"Tara Malhotra",
"motherOccupation":"Teacher",
"motherPhone":"9783272987",
"guardian":"Father",
"address":"674, Block B, Civil Lines",
"city":"New Delhi",
"pincode":"110059",
"admissionDate":"2013-04-07",
"previousSchool":"St. Xavier's Convent",
"transport":"Route 3 — Model Town",
"feeStatus":"Paid",
"emergencyContact":"9960262520",
"status":"Active",
"hobbies":[
"Cricket",
"Classical Dance"
],
"achievements":"Inter-house Quiz — 1st position"
},
{
"id":"GVPS260097",
"admissionNo":"ADM-13-097",
"name":"Naman Gupta",
"gender":"Male",
"dob":"2008-06-06",
"class":"12",
"section":"Science",
"roll":4,
"house":"Aravali",
"bloodGroup":"AB+",
"fatherName":"Shaurya Gupta",
"fatherOccupation":"Professor",
"fatherPhone":"9897499311",
"fatherEmail":"shaurya87@gmail.com",
"motherName":"Prisha Gupta",
"motherOccupation":"Homemaker",
"motherPhone":"9739829452",
"guardian":"Father",
"address":"22, Block G, Kamla Nagar",
"city":"New Delhi",
"pincode":"110056",
"admissionDate":"2013-04-08",
"previousSchool":"St. Xavier's Convent",
"transport":"Route 1 — Rohini",
"feeStatus":"Paid",
"emergencyContact":"9972039071",
"status":"Active",
"hobbies":[
"Football",
"Debate"
],
"achievements":"—"
},
{
"id":"GVPS260098",
"admissionNo":"ADM-13-098",
"name":"Naman Nagpal",
"gender":"Male",
"dob":"2008-03-17",
"class":"12",
"section":"Commerce",
"roll":1,
"house":"Nilgiri",
"bloodGroup":"O-",
"fatherName":"Krish Nagpal",
"fatherOccupation":"Chartered Accountant",
"fatherPhone":"9810484101",
"fatherEmail":"krish31@gmail.com",
"motherName":"Saanvi Nagpal",
"motherOccupation":"Company Secretary",
"motherPhone":"9744011676",
"guardian":"Father",
"address":"680, Block H, Mukherjee Nagar",
"city":"New Delhi",
"pincode":"110016",
"admissionDate":"2013-04-14",
"previousSchool":"Delhi Public School, Rohini",
"transport":"Route 2 — Pitampura",
"feeStatus":"Paid",
"emergencyContact":"9959783492",
"status":"Active",
"hobbies":[
"Classical Dance",
"Cricket"
],
"achievements":"Zonal Athletics — Bronze"
},
{
"id":"GVPS260099",
"admissionNo":"ADM-13-099",
"name":"Aarohi Chawla",
"gender":"Female",
"dob":"2008-09-18",
"class":"12",
"section":"Commerce",
"roll":2,
"house":"Shivalik",
"bloodGroup":"A+",
"fatherName":"Reyansh Chawla",
"fatherOccupation":"Advocate",
"fatherPhone":"9878091008",
"fatherEmail":"reyansh82@gmail.com",
"motherName":"Nandini Chawla",
"motherOccupation":"Teacher",
"motherPhone":"9719091787",
"guardian":"Father",
"address":"582, Block D, Keshav Puram",
"city":"New Delhi",
"pincode":"110017",
"admissionDate":"2013-04-03",
"previousSchool":"Mount Carmel School",
"transport":"Route 3 — Model Town",
"feeStatus":"Paid",
"emergencyContact":"9943004301",
"status":"Active",
"hobbies":[
"Debate",
"Football"
],
"achievements":"—"
},
{
"id":"GVPS260100",
"admissionNo":"ADM-13-100",
"name":"Arjun Goel",
"gender":"Male",
"dob":"2008-08-06",
"class":"12",
"section":"Commerce",
"roll":3,
"house":"Udaygiri",
"bloodGroup":"B+",
"fatherName":"Harsh Goel",
"fatherOccupation":"Chartered Accountant",
"fatherPhone":"9877613737",
"fatherEmail":"harsh29@gmail.com",
"motherName":"Saanvi Goel",
"motherOccupation":"Doctor",
"motherPhone":"9785743895",
"guardian":"Father",
"address":"538, Block C, Paschim Vihar",
"city":"New Delhi",
"pincode":"110053",
"admissionDate":"2013-04-20",
"previousSchool":"St. Xavier's Convent",
"transport":"Route 4 — Punjabi Bagh",
"feeStatus":"Paid",
"emergencyContact":"9940720249",
"status":"Active",
"hobbies":[
"Chess",
"Painting"
],
"achievements":"100% attendance certificate"
}
],
"attendance":{
"GVPS260001":"PPPPPLPPPPPPPAPPPAAPPAPPPPPPPP",
"GVPS260002":"PPPPPPPPPPPPPPPPPPLPPLPPPPPPPP",
"GVPS260003":"PPPPPPPPPPPPPLPPPPPPPPPPPAPPAP",
"GVPS260004":"PPPPPLAPPPPPPPPPPPPPPPPPPLPAPP",
"GVPS260005":"PPPPPPPPPAPPPPPPPPPPPPPPPPPPPP",
"GVPS260006":"LPPPPPPPPPPPPPPLAPPPPPPPPPPPPP",
"GVPS260007":"LPPPPPPPPPPPAAPPLPPPPPPPPPPPPP",
"GVPS260008":"PPPPPPPPPPPPPAPPPAPPPPPPAPPPPA",
"GVPS260009":"PAPPAPPPLPPPPPPPLPPPPPPPPPPPPP",
"GVPS260010":"PPPPLPPPPPALAAPAPPPPPPAPPLPPPL",
"GVPS260011":"PPPPPPPPPPPLPPPPPPPPPPPPPAPPPP",
"GVPS260012":"PPPPPPPPPPPPPPPPPPPPPLPPALPPPP",
"GVPS260013":"PPPPPPPPPPPPAPPPLAPAPPAPPPAPAP",
"GVPS260014":"PPPAPPPPPPPPPPPPAPPPPPAPPPPPPL",
"GVPS260015":"PPPPPALPPPPPPPPPPPPPPPPPPPPPPP",
"GVPS260016":"PPAPPPPPAPAPAPPLPPPPPPAPPPPPPA",
"GVPS260017":"PPPPPPPPPPPPLPPPPPPPPAPPPAPPPP",
"GVPS260018":"PPPPPPLAPPPPPPPPPAPPPPPAAPPPPL",
"GVPS260019":"PPPPPLPPPPPPPPPAPPPPPPPPPPPPPP",
"GVPS260020":"PPPAPAAPLPLPPPPPPPPPPPPPPPPPPP",
"GVPS260021":"APPPPPLPPPPPPAAPPLPPPPPPPPPPPP",
"GVPS260022":"PPPPPLAPPPPPPPPPPPPPPPPPPPPPPP",
"GVPS260023":"LPPPPLPPPPPPPAPPPPPPPPPPPPPPPP",
"GVPS260024":"PALPPPPPPAPPPPPPPLPPPPPPPPPLPA",
"GVPS260025":"PPPPPPPPPPPPPPLPPPPLPPPPPPAPPP",
"GVPS260026":"PPPPPLPLPPPPPPPPPPPPPPPPPAPPPP",
"GVPS260027":"PPPPPPPPPPPPPPPPPPPPLPPPPLPPPP",
"GVPS260028":"APPPPPAPPPPPPPPPPPPPPLPPPPPPPP",
"GVPS260029":"PPPPPPPPPPPPPPPPPPPPAPPPPPPPPP",
"GVPS260030":"PPPAPPPPPPPPPPPPPPPPALAPPPLPPP",
"GVPS260031":"PPLPLPPPPPPAPPPPPPAPPPPPPPPPPP",
"GVPS260032":"PPPLPPPPPPPPPPPPPPPLPPPPPPAPPP",
"GVPS260033":"PPPPPLPPAPPPPPPPLPPPPPPPPPPPLP",
"GVPS260034":"PPPAPPPPPPPPPPPPPPPPPPPPPPPPPP",
"GVPS260035":"PPPPAPPPPPPPPPPPPPPPPPPPPPAPPP",
"GVPS260036":"APPPPPAPPPPPPAPPPPPLPPPPLAPALP",
"GVPS260037":"PLPPPPPPPPPPPPPLPPPPPPPPPPPPPL",
"GVPS260038":"PPPPPPPAPPPPPPPPPLPPPPPPPPPLPP",
"GVPS260039":"PPPPPPPPPPPPPPPPPPPPPPAPPPPLPP",
"GVPS260040":"PPPPPPPPPPPPLPPPPPPAPPPPLPPPPP",
"GVPS260041":"PPPPPPPAPPAPPPAPPPPPPPAPPPPPPP",
"GVPS260042":"APPPPPPAPPPAAPPPAPPPPPLPPPPPPP",
"GVPS260043":"PPPPPPPPPPPPPPLPPPPPPPPLPPPPPP",
"GVPS260044":"PPPPPPPPPPPPAPPPPPAPPPPPPPPPPP",
"GVPS260045":"PPPPPPPPPPPPPPPPPLPAPPPPPPPPPP",
"GVPS260046":"LPALPPPPPPPPPPPPPPPPPPLPPPPPPP",
"GVPS260047":"PPPPPAPPPPPPPPPPPPPPPPPLPPPPLP",
"GVPS260048":"PPAPPPPAAPPPPPPPPPPPPPPPPPPPPP",
"GVPS260049":"PPAPPPPPPPPPPPPPPPPPPPPPPPPPPP",
"GVPS260050":"PAPLAPLPPPPPPPPAPPPPPPAPPPPPPP",
"GVPS260051":"PPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
"GVPS260052":"PPPPAPPPPPPPPPPPPAPPPAPPPPPPPA",
"GVPS260053":"PPPPPPPPPPAPPPPPAAPPPPPPPPPPAA",
"GVPS260054":"APPPPPPPLPPPPPPPPPPAPPLLPPPPPP",
"GVPS260055":"PPPPPLPPLLAPPPPPPPPPPPPALPPPPP",
"GVPS260056":"PPAPPPPPPPPPPPPPPPAPPPPPPPPPPP",
"GVPS260057":"PAPPPLPLPPPPPPPPPPLPPPLPAPPPPL",
"GVPS260058":"PPPPPPPPPPPLPPPPPAPPPPPPPPPPPP",
"GVPS260059":"PPPPPPLPPPPPPLPPLPPPPPPPPPALAA",
"GVPS260060":"PPPPPPAPPPPPPAPPPPPPPAPPPPPPPP",
"GVPS260061":"PPPAPPPPPLPLPPPPPPLPPPPPPPPLPP",
"GVPS260062":"PPPPPPPPPPPPPLAAPPPAPPPAPPPPPP",
"GVPS260063":"PPPPPPPPPPPPPPPAPPPPPPPPPPPAPA",
"GVPS260064":"PLPPAPPPPPPPPPPPPPPPPPPPPPPPPA",
"GVPS260065":"PPPPPPPPLPPPLPAAPPPPLPPPPPPPPP",
"GVPS260066":"PPPPPPPPPPPPPPPPPPPPPPPPPPPPAP",
"GVPS260067":"PPPPAPPPPPPPPPPPAPPPPPPPPAPLPP",
"GVPS260068":"PPPPPPPPPPPPAPPLPAPPPPPPPPPPPP",
"GVPS260069":"PPPPPPPPPPPPAAPPPPPPPPPPPPPPPP",
"GVPS260070":"PPPPPPPPPLPPPPPPPPPLLPLPPPPPPP",
"GVPS260071":"PPPPPPPPPPPPLPPPPPAPPPPLPPPLAP",
"GVPS260072":"PPPPPPPPPPPPPLPPPPPPPPPPPPPPPP",
"GVPS260073":"PPPLPPPPPPPPPPPPPPPPAPPLPPPPPP",
"GVPS260074":"PPPPPPPPLPPPAPPPPPAPPPPPPPPPPP",
"GVPS260075":"PPPPLPLPPPPPPPPPPPPPPPLPPPPPPP",
"GVPS260076":"PPPPPPPAPPAPPPPPPAPPPPPPPPPPPP",
"GVPS260077":"PPPPPPPPPPPPAPPPPPPPPALPPPPPPP",
"GVPS260078":"PPPPPPPPPPPPPPPPPPPPALPPPPPPPP",
"GVPS260079":"PPPPPPPAPPPPPPPPPLPPPPPPPPPPPP",
"GVPS260080":"LPALPPPAPPAPPPPPPPPPPPPPPPPPPA",
"GVPS260081":"PPPPPPPLPPAPPPPPPPPPPPPPPPPPPA",
"GVPS260082":"PPPAPPPLPPPPPPPPPPPPPPPLPPPAAP",
"GVPS260083":"PPPPPPPPPPPPPPPPPLPPPLPPPPAPPP",
"GVPS260084":"PPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
"GVPS260085":"PPPAALPPPPPPPPPPPPPPPPPPPPPLPP",
"GVPS260086":"APPPPPPPPPPPPPPPPPPLPPPLPPPPPP",
"GVPS260087":"PPPPPPPAPPPPPPPPPPPPPLPPPPPPPP",
"GVPS260088":"PPPLPPAPPPPPPPPPPPPPPPPPPPPPPP",
"GVPS260089":"PPPPPPPPPPLPPPPPPPLAPPPPPPPLPP",
"GVPS260090":"PPPAPAPPPPPLPPPPPPPPPPPPPPPPPP",
"GVPS260091":"PPPPPPPPPPPPPPPPPPPPPPPPPPPPPP",
"GVPS260092":"PALPPPPPPPPPAPPPPPPPPPLPPPLPPP",
"GVPS260093":"PAPPPPPPAAPPPPPPPPPPPPLPPPPAPP",
"GVPS260094":"PPPPPPPPPPPAPPPPPPPPPPPPPPPPPP",
"GVPS260095":"PPAPPPPLPPPPPPPPPPPPPPPPPPPPPP",
"GVPS260096":"PPPPLPLPPPPPPPPPPPAAPPPPPPPPPP",
"GVPS260097":"PPPPPPAPPPPAPPPPAPPPPPPPPPPPPP",
"GVPS260098":"PLPPPPPPLPPPPPLPPPPAPPAPPAAPLP",
"GVPS260099":"PPPPAPLPPPLPPPPPPPPPPPPPLPPPPP",
"GVPS260100":"PPPPAPPPLPPPPPPPPPPPPPPPPPPLPA"
},
"timetable":{
"LKG-A":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English Rhymes",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English Rhymes",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Environment Talk",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English Rhymes",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English Rhymes",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Rhythm & Play",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Environment Talk",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English Rhymes",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Environment Talk",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English Rhymes",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Drawing & Colouring",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Drawing & Colouring",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Drawing & Colouring",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English Rhymes",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Environment Talk",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Rhythm & Play",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English Rhymes",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Rhythm & Play",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Rhythm & Play",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"English Rhymes",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
}
]
},
"LKG-B":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Drawing & Colouring",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Drawing & Colouring",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English Rhymes",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English Rhymes",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Environment Talk",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English Rhymes",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Drawing & Colouring",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Drawing & Colouring",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Environment Talk",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Drawing & Colouring",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Environment Talk",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Drawing & Colouring",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English Rhymes",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Drawing & Colouring",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
}
]
},
"UKG-A":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Environment Talk",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English Rhymes",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English Rhymes",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English Rhymes",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English Rhymes",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Drawing & Colouring",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Environment Talk",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Environment Talk",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Rhythm & Play",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Drawing & Colouring",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"English Rhymes",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Rhythm & Play",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English Rhymes",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Drawing & Colouring",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
}
]
},
"UKG-B":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Rhythm & Play",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English Rhymes",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Environment Talk",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Rhythm & Play",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Drawing & Colouring",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Rhythm & Play",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Environment Talk",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Rhythm & Play",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi Varnmala",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Rhythm & Play",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English Rhymes",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English Rhymes",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English Rhymes",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Numbers & Counting",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Drawing & Colouring",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Rhythm & Play",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Environment Talk",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English Rhymes",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Rhythm & Play",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Rhythm & Play",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Numbers & Counting",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Drawing & Colouring",
"teacher":"Ms. Priyanka Sengar",
"teacherCode":"T016"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi Varnmala",
"teacher":"Mrs. Jyoti Kaushal",
"teacherCode":"T017"
}
]
},
"1-A":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
}
]
},
"1-B":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
}
]
},
"2-A":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
]
},
"2-B":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
}
]
},
"3-A":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
]
},
"3-B":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
}
]
},
"4-A":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
}
]
},
"4-B":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
}
]
},
"5-A":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
}
]
},
"5-B":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Art & Craft",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Basics",
"teacher":"Mrs. Bhavna Chadha",
"teacherCode":"T028"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"General Knowledge",
"teacher":"Ms. Nidhi Sachdeva",
"teacherCode":"T024"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Environmental Studies",
"teacher":"Mrs. Meenakshi Rao",
"teacherCode":"T015"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Art & Craft",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
}
]
},
"6-A":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
]
},
"6-B":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
}
]
},
"7-A":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
}
]
},
"7-B":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
}
]
},
"8-A":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
}
]
},
"8-B":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Sanskrit",
"teacher":"Mrs. Shalini Pant",
"teacherCode":"T012"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Art Education",
"teacher":"Ms. Tanvi Arora",
"teacherCode":"T014"
}
]
},
"9-A":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
}
]
},
"9-B":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
}
]
},
"10-A":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
]
},
"10-B":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Hindi",
"teacher":"Mr. Gurpreet Bedi",
"teacherCode":"T021"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Hindi",
"teacher":"Mrs. Sunita Rawat",
"teacherCode":"T003"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Social Science",
"teacher":"Mr. Vikas Tomar",
"teacherCode":"T007"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Information Technology",
"teacher":"Mr. Harish Chandra",
"teacherCode":"T023"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Science",
"teacher":"Ms. Swati Bhardwaj",
"teacherCode":"T020"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Social Science",
"teacher":"Mrs. Aparna Nath",
"teacherCode":"T022"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
}
]
},
"11-Science":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Chemistry",
"teacher":"Mrs. Neelam Bhatia",
"teacherCode":"T005"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English Core",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Biology",
"teacher":"Ms. Ritika Sabharwal",
"teacherCode":"T006"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Biology",
"teacher":"Ms. Ritika Sabharwal",
"teacherCode":"T006"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English Core",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Chemistry",
"teacher":"Mrs. Neelam Bhatia",
"teacherCode":"T005"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English Core",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Chemistry",
"teacher":"Mrs. Neelam Bhatia",
"teacherCode":"T005"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Biology",
"teacher":"Ms. Ritika Sabharwal",
"teacherCode":"T006"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Biology",
"teacher":"Ms. Ritika Sabharwal",
"teacherCode":"T006"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Chemistry",
"teacher":"Mrs. Neelam Bhatia",
"teacherCode":"T005"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Biology",
"teacher":"Ms. Ritika Sabharwal",
"teacherCode":"T006"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Biology",
"teacher":"Ms. Ritika Sabharwal",
"teacherCode":"T006"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Chemistry",
"teacher":"Mrs. Neelam Bhatia",
"teacherCode":"T005"
}
]
},
"11-Commerce":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Applied Mathematics",
"teacher":"Mr. Yashpal Rana",
"teacherCode":"T026"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English Core",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Applied Mathematics",
"teacher":"Mr. Yashpal Rana",
"teacherCode":"T026"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Economics",
"teacher":"Ms. Kanika Dhawan",
"teacherCode":"T010"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Applied Mathematics",
"teacher":"Mr. Yashpal Rana",
"teacherCode":"T026"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"English Core",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Economics",
"teacher":"Ms. Kanika Dhawan",
"teacherCode":"T010"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Business Studies",
"teacher":"Mr. Sandeep Ahluwalia",
"teacherCode":"T009"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Economics",
"teacher":"Ms. Kanika Dhawan",
"teacherCode":"T010"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Business Studies",
"teacher":"Mr. Sandeep Ahluwalia",
"teacherCode":"T009"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Economics",
"teacher":"Ms. Kanika Dhawan",
"teacherCode":"T010"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Economics",
"teacher":"Ms. Kanika Dhawan",
"teacherCode":"T010"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Applied Mathematics",
"teacher":"Mr. Yashpal Rana",
"teacherCode":"T026"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Economics",
"teacher":"Ms. Kanika Dhawan",
"teacherCode":"T010"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Accountancy",
"teacher":"Mrs. Poonam Khurana",
"teacherCode":"T008"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Applied Mathematics",
"teacher":"Mr. Yashpal Rana",
"teacherCode":"T026"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Business Studies",
"teacher":"Mr. Sandeep Ahluwalia",
"teacherCode":"T009"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Applied Mathematics",
"teacher":"Mr. Yashpal Rana",
"teacherCode":"T026"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English Core",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"English Core",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Economics",
"teacher":"Ms. Kanika Dhawan",
"teacherCode":"T010"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English Core",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English Core",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Applied Mathematics",
"teacher":"Mr. Yashpal Rana",
"teacherCode":"T026"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Business Studies",
"teacher":"Mr. Sandeep Ahluwalia",
"teacherCode":"T009"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Economics",
"teacher":"Ms. Kanika Dhawan",
"teacherCode":"T010"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Applied Mathematics",
"teacher":"Mr. Yashpal Rana",
"teacherCode":"T026"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Accountancy",
"teacher":"Mrs. Poonam Khurana",
"teacherCode":"T008"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Business Studies",
"teacher":"Mr. Sandeep Ahluwalia",
"teacherCode":"T009"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Business Studies",
"teacher":"Mr. Sandeep Ahluwalia",
"teacherCode":"T009"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Economics",
"teacher":"Ms. Kanika Dhawan",
"teacherCode":"T010"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Economics",
"teacher":"Ms. Kanika Dhawan",
"teacherCode":"T010"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Accountancy",
"teacher":"Mrs. Poonam Khurana",
"teacherCode":"T008"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"English Core",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Accountancy",
"teacher":"Mrs. Poonam Khurana",
"teacherCode":"T008"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Applied Mathematics",
"teacher":"Mr. Yashpal Rana",
"teacherCode":"T026"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English Core",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
}
]
},
"12-Science":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Biology",
"teacher":"Ms. Ritika Sabharwal",
"teacherCode":"T006"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"English Core",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Biology",
"teacher":"Ms. Ritika Sabharwal",
"teacherCode":"T006"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Biology",
"teacher":"Ms. Ritika Sabharwal",
"teacherCode":"T006"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Chemistry",
"teacher":"Mrs. Neelam Bhatia",
"teacherCode":"T005"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Biology",
"teacher":"Ms. Ritika Sabharwal",
"teacherCode":"T006"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English Core",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Chemistry",
"teacher":"Mrs. Neelam Bhatia",
"teacherCode":"T005"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Mathematics",
"teacher":"Mr. Rakesh Chandola",
"teacherCode":"T002"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English Core",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Biology",
"teacher":"Ms. Ritika Sabharwal",
"teacherCode":"T006"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"English Core",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Chemistry",
"teacher":"Mrs. Neelam Bhatia",
"teacherCode":"T005"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Chemistry",
"teacher":"Mrs. Neelam Bhatia",
"teacherCode":"T005"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Biology",
"teacher":"Ms. Ritika Sabharwal",
"teacherCode":"T006"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Mathematics",
"teacher":"Mrs. Rekha Dutt",
"teacherCode":"T019"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English Core",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Biology",
"teacher":"Ms. Ritika Sabharwal",
"teacherCode":"T006"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Biology",
"teacher":"Ms. Ritika Sabharwal",
"teacherCode":"T006"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Chemistry",
"teacher":"Mrs. Neelam Bhatia",
"teacherCode":"T005"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"English Core",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Chemistry",
"teacher":"Mrs. Neelam Bhatia",
"teacherCode":"T005"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Chemistry",
"teacher":"Mrs. Neelam Bhatia",
"teacherCode":"T005"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Computer Science",
"teacher":"Mr. Imran Qureshi",
"teacherCode":"T011"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physics",
"teacher":"Dr. Prakash Iyer",
"teacherCode":"T004"
}
]
},
"12-Commerce":{
"Monday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"English Core",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Business Studies",
"teacher":"Mr. Sandeep Ahluwalia",
"teacherCode":"T009"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Business Studies",
"teacher":"Mr. Sandeep Ahluwalia",
"teacherCode":"T009"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Accountancy",
"teacher":"Mrs. Poonam Khurana",
"teacherCode":"T008"
}
],
"Tuesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Accountancy",
"teacher":"Mrs. Poonam Khurana",
"teacherCode":"T008"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Business Studies",
"teacher":"Mr. Sandeep Ahluwalia",
"teacherCode":"T009"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Business Studies",
"teacher":"Mr. Sandeep Ahluwalia",
"teacherCode":"T009"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Accountancy",
"teacher":"Mrs. Poonam Khurana",
"teacherCode":"T008"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Applied Mathematics",
"teacher":"Mr. Yashpal Rana",
"teacherCode":"T026"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"English Core",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
}
],
"Wednesday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Accountancy",
"teacher":"Mrs. Poonam Khurana",
"teacherCode":"T008"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Economics",
"teacher":"Ms. Kanika Dhawan",
"teacherCode":"T010"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Business Studies",
"teacher":"Mr. Sandeep Ahluwalia",
"teacherCode":"T009"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English Core",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
}
],
"Thursday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Business Studies",
"teacher":"Mr. Sandeep Ahluwalia",
"teacherCode":"T009"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Accountancy",
"teacher":"Mrs. Poonam Khurana",
"teacherCode":"T008"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"English Core",
"teacher":"Mrs. Anjali Mehrotra",
"teacherCode":"T001"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Business Studies",
"teacher":"Mr. Sandeep Ahluwalia",
"teacherCode":"T009"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Economics",
"teacher":"Ms. Kanika Dhawan",
"teacherCode":"T010"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Applied Mathematics",
"teacher":"Mr. Yashpal Rana",
"teacherCode":"T026"
}
],
"Friday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Economics",
"teacher":"Ms. Kanika Dhawan",
"teacherCode":"T010"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"Business Studies",
"teacher":"Mr. Sandeep Ahluwalia",
"teacherCode":"T009"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Accountancy",
"teacher":"Mrs. Poonam Khurana",
"teacherCode":"T008"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Accountancy",
"teacher":"Mrs. Poonam Khurana",
"teacherCode":"T008"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"English Core",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
}
],
"Saturday":[
{
"period":"I",
"time":"07:50 – 08:30",
"subject":"Business Studies",
"teacher":"Mr. Sandeep Ahluwalia",
"teacherCode":"T009"
},
{
"period":"II",
"time":"08:30 – 09:10",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"III",
"time":"09:10 – 09:50",
"subject":"Business Studies",
"teacher":"Mr. Sandeep Ahluwalia",
"teacherCode":"T009"
},
{
"period":"Break",
"time":"09:50 – 10:10",
"subject":"Recess & Mid-day Snack",
"teacher":"—"
},
{
"period":"IV",
"time":"10:10 – 10:50",
"subject":"English Core",
"teacher":"Mr. Alok Nandan",
"teacherCode":"T018"
},
{
"period":"V",
"time":"10:50 – 11:30",
"subject":"Entrepreneurship",
"teacher":"Ms. Ekta Mongia",
"teacherCode":"T027"
},
{
"period":"VI",
"time":"11:30 – 12:10",
"subject":"Accountancy",
"teacher":"Mrs. Poonam Khurana",
"teacherCode":"T008"
},
{
"period":"VII",
"time":"12:10 – 12:50",
"subject":"Physical Education",
"teacher":"Mr. Devender Solanki",
"teacherCode":"T013"
},
{
"period":"VIII",
"time":"12:50 – 13:30",
"subject":"Economics",
"teacher":"Ms. Kanika Dhawan",
"teacherCode":"T010"
}
]
}
},
"exams":[
{
"code":"UT1",
"name":"Unit Test I",
"from":"2026-05-11",
"to":"2026-05-16",
"maxMarks":25,
"status":"Completed"
},
{
"code":"HY",
"name":"Half Yearly Examination",
"from":"2026-09-21",
"to":"2026-10-03",
"maxMarks":80,
"status":"Upcoming"
},
{
"code":"UT2",
"name":"Unit Test II",
"from":"2026-12-07",
"to":"2026-12-12",
"maxMarks":25,
"status":"Scheduled"
},
{
"code":"ANN",
"name":"Annual Examination",
"from":"2027-02-22",
"to":"2027-03-12",
"maxMarks":80,
"status":"Scheduled"
}
],
"datesheet":[
{
"exam":"HY",
"class":"LKG",
"subject":"English Rhymes",
"date":"2026-09-21",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"LKG",
"subject":"Hindi Varnmala",
"date":"2026-09-23",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"LKG",
"subject":"Numbers & Counting",
"date":"2026-09-25",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"LKG",
"subject":"Drawing & Colouring",
"date":"2026-09-27",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"LKG",
"subject":"Environment Talk",
"date":"2026-09-29",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"LKG",
"subject":"Rhythm & Play",
"date":"2026-10-01",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"UKG",
"subject":"English Rhymes",
"date":"2026-09-21",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"UKG",
"subject":"Hindi Varnmala",
"date":"2026-09-23",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"UKG",
"subject":"Numbers & Counting",
"date":"2026-09-25",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"UKG",
"subject":"Drawing & Colouring",
"date":"2026-09-27",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"UKG",
"subject":"Environment Talk",
"date":"2026-09-29",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"UKG",
"subject":"Rhythm & Play",
"date":"2026-10-01",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"1",
"subject":"English",
"date":"2026-09-21",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"1",
"subject":"Hindi",
"date":"2026-09-23",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"1",
"subject":"Mathematics",
"date":"2026-09-25",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"1",
"subject":"Environmental Studies",
"date":"2026-09-27",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"1",
"subject":"Computer Basics",
"date":"2026-09-29",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"1",
"subject":"Art & Craft",
"date":"2026-10-01",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"1",
"subject":"General Knowledge",
"date":"2026-10-03",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"1",
"subject":"Physical Education",
"date":"2026-10-06",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"2",
"subject":"English",
"date":"2026-09-21",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"2",
"subject":"Hindi",
"date":"2026-09-23",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"2",
"subject":"Mathematics",
"date":"2026-09-25",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"2",
"subject":"Environmental Studies",
"date":"2026-09-27",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"2",
"subject":"Computer Basics",
"date":"2026-09-29",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"2",
"subject":"Art & Craft",
"date":"2026-10-01",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"2",
"subject":"General Knowledge",
"date":"2026-10-03",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"2",
"subject":"Physical Education",
"date":"2026-10-06",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"3",
"subject":"English",
"date":"2026-09-21",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"3",
"subject":"Hindi",
"date":"2026-09-23",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"3",
"subject":"Mathematics",
"date":"2026-09-25",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"3",
"subject":"Environmental Studies",
"date":"2026-09-27",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"3",
"subject":"Computer Basics",
"date":"2026-09-29",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"3",
"subject":"Art & Craft",
"date":"2026-10-01",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"3",
"subject":"General Knowledge",
"date":"2026-10-03",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"3",
"subject":"Physical Education",
"date":"2026-10-06",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"4",
"subject":"English",
"date":"2026-09-21",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"4",
"subject":"Hindi",
"date":"2026-09-23",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"4",
"subject":"Mathematics",
"date":"2026-09-25",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"4",
"subject":"Environmental Studies",
"date":"2026-09-27",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"4",
"subject":"Computer Basics",
"date":"2026-09-29",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"4",
"subject":"Art & Craft",
"date":"2026-10-01",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"4",
"subject":"General Knowledge",
"date":"2026-10-03",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"4",
"subject":"Physical Education",
"date":"2026-10-06",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"5",
"subject":"English",
"date":"2026-09-21",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"5",
"subject":"Hindi",
"date":"2026-09-23",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"5",
"subject":"Mathematics",
"date":"2026-09-25",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"5",
"subject":"Environmental Studies",
"date":"2026-09-27",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"5",
"subject":"Computer Basics",
"date":"2026-09-29",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"5",
"subject":"Art & Craft",
"date":"2026-10-01",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"5",
"subject":"General Knowledge",
"date":"2026-10-03",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"5",
"subject":"Physical Education",
"date":"2026-10-06",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"6",
"subject":"English",
"date":"2026-09-21",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"6",
"subject":"Hindi",
"date":"2026-09-23",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"6",
"subject":"Mathematics",
"date":"2026-09-25",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"6",
"subject":"Science",
"date":"2026-09-27",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"6",
"subject":"Social Science",
"date":"2026-09-29",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"6",
"subject":"Sanskrit",
"date":"2026-10-01",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"6",
"subject":"Computer Science",
"date":"2026-10-03",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"6",
"subject":"Art Education",
"date":"2026-10-06",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"6",
"subject":"Physical Education",
"date":"2026-10-08",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"7",
"subject":"English",
"date":"2026-09-21",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"7",
"subject":"Hindi",
"date":"2026-09-23",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"7",
"subject":"Mathematics",
"date":"2026-09-25",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"7",
"subject":"Science",
"date":"2026-09-27",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"7",
"subject":"Social Science",
"date":"2026-09-29",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"7",
"subject":"Sanskrit",
"date":"2026-10-01",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"7",
"subject":"Computer Science",
"date":"2026-10-03",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"7",
"subject":"Art Education",
"date":"2026-10-06",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"7",
"subject":"Physical Education",
"date":"2026-10-08",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"8",
"subject":"English",
"date":"2026-09-21",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"8",
"subject":"Hindi",
"date":"2026-09-23",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"8",
"subject":"Mathematics",
"date":"2026-09-25",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"8",
"subject":"Science",
"date":"2026-09-27",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"8",
"subject":"Social Science",
"date":"2026-09-29",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"8",
"subject":"Sanskrit",
"date":"2026-10-01",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"8",
"subject":"Computer Science",
"date":"2026-10-03",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"8",
"subject":"Art Education",
"date":"2026-10-06",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"8",
"subject":"Physical Education",
"date":"2026-10-08",
"time":"09:00 – 11:00"
},
{
"exam":"HY",
"class":"9",
"subject":"English",
"date":"2026-09-21",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"9",
"subject":"Hindi",
"date":"2026-09-23",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"9",
"subject":"Mathematics",
"date":"2026-09-25",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"9",
"subject":"Science",
"date":"2026-09-27",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"9",
"subject":"Social Science",
"date":"2026-09-29",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"9",
"subject":"Information Technology",
"date":"2026-10-01",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"9",
"subject":"Physical Education",
"date":"2026-10-03",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"10",
"subject":"English",
"date":"2026-09-21",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"10",
"subject":"Hindi",
"date":"2026-09-23",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"10",
"subject":"Mathematics",
"date":"2026-09-25",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"10",
"subject":"Science",
"date":"2026-09-27",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"10",
"subject":"Social Science",
"date":"2026-09-29",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"10",
"subject":"Information Technology",
"date":"2026-10-01",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"10",
"subject":"Physical Education",
"date":"2026-10-03",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"11",
"subject":"English Core",
"date":"2026-09-21",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"11",
"subject":"Physics",
"date":"2026-09-23",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"11",
"subject":"Chemistry",
"date":"2026-09-25",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"11",
"subject":"Mathematics",
"date":"2026-09-27",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"11",
"subject":"Biology",
"date":"2026-09-29",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"11",
"subject":"Computer Science",
"date":"2026-10-01",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"11",
"subject":"Physical Education",
"date":"2026-10-03",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"12",
"subject":"English Core",
"date":"2026-09-21",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"12",
"subject":"Physics",
"date":"2026-09-23",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"12",
"subject":"Chemistry",
"date":"2026-09-25",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"12",
"subject":"Mathematics",
"date":"2026-09-27",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"12",
"subject":"Biology",
"date":"2026-09-29",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"12",
"subject":"Computer Science",
"date":"2026-10-01",
"time":"09:00 – 12:00"
},
{
"exam":"HY",
"class":"12",
"subject":"Physical Education",
"date":"2026-10-03",
"time":"09:00 – 12:00"
}
],
"results":[
{
"studentId":"GVPS260015",
"exam":"UT1",
"subject":"English",
"marks":18,
"max":25
},
{
"studentId":"GVPS260015",
"exam":"UT1",
"subject":"Hindi",
"marks":19,
"max":25
},
{
"studentId":"GVPS260015",
"exam":"UT1",
"subject":"Mathematics",
"marks":11,
"max":25
},
{
"studentId":"GVPS260015",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":17,
"max":25
},
{
"studentId":"GVPS260015",
"exam":"UT1",
"subject":"Computer Basics",
"marks":16,
"max":25
},
{
"studentId":"GVPS260015",
"exam":"UT1",
"subject":"General Knowledge",
"marks":15,
"max":25
},
{
"studentId":"GVPS260016",
"exam":"UT1",
"subject":"English",
"marks":19,
"max":25
},
{
"studentId":"GVPS260016",
"exam":"UT1",
"subject":"Hindi",
"marks":17,
"max":25
},
{
"studentId":"GVPS260016",
"exam":"UT1",
"subject":"Mathematics",
"marks":19,
"max":25
},
{
"studentId":"GVPS260016",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":22,
"max":25
},
{
"studentId":"GVPS260016",
"exam":"UT1",
"subject":"Computer Basics",
"marks":20,
"max":25
},
{
"studentId":"GVPS260016",
"exam":"UT1",
"subject":"General Knowledge",
"marks":19,
"max":25
},
{
"studentId":"GVPS260017",
"exam":"UT1",
"subject":"English",
"marks":20,
"max":25
},
{
"studentId":"GVPS260017",
"exam":"UT1",
"subject":"Hindi",
"marks":14,
"max":25
},
{
"studentId":"GVPS260017",
"exam":"UT1",
"subject":"Mathematics",
"marks":17,
"max":25
},
{
"studentId":"GVPS260017",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":16,
"max":25
},
{
"studentId":"GVPS260017",
"exam":"UT1",
"subject":"Computer Basics",
"marks":25,
"max":25
},
{
"studentId":"GVPS260017",
"exam":"UT1",
"subject":"General Knowledge",
"marks":14,
"max":25
},
{
"studentId":"GVPS260018",
"exam":"UT1",
"subject":"English",
"marks":17,
"max":25
},
{
"studentId":"GVPS260018",
"exam":"UT1",
"subject":"Hindi",
"marks":21,
"max":25
},
{
"studentId":"GVPS260018",
"exam":"UT1",
"subject":"Mathematics",
"marks":17,
"max":25
},
{
"studentId":"GVPS260018",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":21,
"max":25
},
{
"studentId":"GVPS260018",
"exam":"UT1",
"subject":"Computer Basics",
"marks":14,
"max":25
},
{
"studentId":"GVPS260018",
"exam":"UT1",
"subject":"General Knowledge",
"marks":23,
"max":25
},
{
"studentId":"GVPS260019",
"exam":"UT1",
"subject":"English",
"marks":19,
"max":25
},
{
"studentId":"GVPS260019",
"exam":"UT1",
"subject":"Hindi",
"marks":10,
"max":25
},
{
"studentId":"GVPS260019",
"exam":"UT1",
"subject":"Mathematics",
"marks":13,
"max":25
},
{
"studentId":"GVPS260019",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":14,
"max":25
},
{
"studentId":"GVPS260019",
"exam":"UT1",
"subject":"Computer Basics",
"marks":18,
"max":25
},
{
"studentId":"GVPS260019",
"exam":"UT1",
"subject":"General Knowledge",
"marks":17,
"max":25
},
{
"studentId":"GVPS260020",
"exam":"UT1",
"subject":"English",
"marks":20,
"max":25
},
{
"studentId":"GVPS260020",
"exam":"UT1",
"subject":"Hindi",
"marks":21,
"max":25
},
{
"studentId":"GVPS260020",
"exam":"UT1",
"subject":"Mathematics",
"marks":21,
"max":25
},
{
"studentId":"GVPS260020",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":20,
"max":25
},
{
"studentId":"GVPS260020",
"exam":"UT1",
"subject":"Computer Basics",
"marks":15,
"max":25
},
{
"studentId":"GVPS260020",
"exam":"UT1",
"subject":"General Knowledge",
"marks":13,
"max":25
},
{
"studentId":"GVPS260021",
"exam":"UT1",
"subject":"English",
"marks":14,
"max":25
},
{
"studentId":"GVPS260021",
"exam":"UT1",
"subject":"Hindi",
"marks":20,
"max":25
},
{
"studentId":"GVPS260021",
"exam":"UT1",
"subject":"Mathematics",
"marks":15,
"max":25
},
{
"studentId":"GVPS260021",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":14,
"max":25
},
{
"studentId":"GVPS260021",
"exam":"UT1",
"subject":"Computer Basics",
"marks":15,
"max":25
},
{
"studentId":"GVPS260021",
"exam":"UT1",
"subject":"General Knowledge",
"marks":20,
"max":25
},
{
"studentId":"GVPS260022",
"exam":"UT1",
"subject":"English",
"marks":13,
"max":25
},
{
"studentId":"GVPS260022",
"exam":"UT1",
"subject":"Hindi",
"marks":18,
"max":25
},
{
"studentId":"GVPS260022",
"exam":"UT1",
"subject":"Mathematics",
"marks":21,
"max":25
},
{
"studentId":"GVPS260022",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":22,
"max":25
},
{
"studentId":"GVPS260022",
"exam":"UT1",
"subject":"Computer Basics",
"marks":12,
"max":25
},
{
"studentId":"GVPS260022",
"exam":"UT1",
"subject":"General Knowledge",
"marks":18,
"max":25
},
{
"studentId":"GVPS260023",
"exam":"UT1",
"subject":"English",
"marks":16,
"max":25
},
{
"studentId":"GVPS260023",
"exam":"UT1",
"subject":"Hindi",
"marks":25,
"max":25
},
{
"studentId":"GVPS260023",
"exam":"UT1",
"subject":"Mathematics",
"marks":18,
"max":25
},
{
"studentId":"GVPS260023",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":13,
"max":25
},
{
"studentId":"GVPS260023",
"exam":"UT1",
"subject":"Computer Basics",
"marks":16,
"max":25
},
{
"studentId":"GVPS260023",
"exam":"UT1",
"subject":"General Knowledge",
"marks":18,
"max":25
},
{
"studentId":"GVPS260024",
"exam":"UT1",
"subject":"English",
"marks":17,
"max":25
},
{
"studentId":"GVPS260024",
"exam":"UT1",
"subject":"Hindi",
"marks":21,
"max":25
},
{
"studentId":"GVPS260024",
"exam":"UT1",
"subject":"Mathematics",
"marks":17,
"max":25
},
{
"studentId":"GVPS260024",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":19,
"max":25
},
{
"studentId":"GVPS260024",
"exam":"UT1",
"subject":"Computer Basics",
"marks":25,
"max":25
},
{
"studentId":"GVPS260024",
"exam":"UT1",
"subject":"General Knowledge",
"marks":20,
"max":25
},
{
"studentId":"GVPS260025",
"exam":"UT1",
"subject":"English",
"marks":22,
"max":25
},
{
"studentId":"GVPS260025",
"exam":"UT1",
"subject":"Hindi",
"marks":19,
"max":25
},
{
"studentId":"GVPS260025",
"exam":"UT1",
"subject":"Mathematics",
"marks":9,
"max":25
},
{
"studentId":"GVPS260025",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":25,
"max":25
},
{
"studentId":"GVPS260025",
"exam":"UT1",
"subject":"Computer Basics",
"marks":17,
"max":25
},
{
"studentId":"GVPS260025",
"exam":"UT1",
"subject":"General Knowledge",
"marks":21,
"max":25
},
{
"studentId":"GVPS260026",
"exam":"UT1",
"subject":"English",
"marks":13,
"max":25
},
{
"studentId":"GVPS260026",
"exam":"UT1",
"subject":"Hindi",
"marks":19,
"max":25
},
{
"studentId":"GVPS260026",
"exam":"UT1",
"subject":"Mathematics",
"marks":23,
"max":25
},
{
"studentId":"GVPS260026",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":14,
"max":25
},
{
"studentId":"GVPS260026",
"exam":"UT1",
"subject":"Computer Basics",
"marks":25,
"max":25
},
{
"studentId":"GVPS260026",
"exam":"UT1",
"subject":"General Knowledge",
"marks":22,
"max":25
},
{
"studentId":"GVPS260027",
"exam":"UT1",
"subject":"English",
"marks":20,
"max":25
},
{
"studentId":"GVPS260027",
"exam":"UT1",
"subject":"Hindi",
"marks":17,
"max":25
},
{
"studentId":"GVPS260027",
"exam":"UT1",
"subject":"Mathematics",
"marks":22,
"max":25
},
{
"studentId":"GVPS260027",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":10,
"max":25
},
{
"studentId":"GVPS260027",
"exam":"UT1",
"subject":"Computer Basics",
"marks":24,
"max":25
},
{
"studentId":"GVPS260027",
"exam":"UT1",
"subject":"General Knowledge",
"marks":11,
"max":25
},
{
"studentId":"GVPS260028",
"exam":"UT1",
"subject":"English",
"marks":16,
"max":25
},
{
"studentId":"GVPS260028",
"exam":"UT1",
"subject":"Hindi",
"marks":24,
"max":25
},
{
"studentId":"GVPS260028",
"exam":"UT1",
"subject":"Mathematics",
"marks":20,
"max":25
},
{
"studentId":"GVPS260028",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":11,
"max":25
},
{
"studentId":"GVPS260028",
"exam":"UT1",
"subject":"Computer Basics",
"marks":12,
"max":25
},
{
"studentId":"GVPS260028",
"exam":"UT1",
"subject":"General Knowledge",
"marks":13,
"max":25
},
{
"studentId":"GVPS260029",
"exam":"UT1",
"subject":"English",
"marks":16,
"max":25
},
{
"studentId":"GVPS260029",
"exam":"UT1",
"subject":"Hindi",
"marks":15,
"max":25
},
{
"studentId":"GVPS260029",
"exam":"UT1",
"subject":"Mathematics",
"marks":22,
"max":25
},
{
"studentId":"GVPS260029",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":17,
"max":25
},
{
"studentId":"GVPS260029",
"exam":"UT1",
"subject":"Computer Basics",
"marks":25,
"max":25
},
{
"studentId":"GVPS260029",
"exam":"UT1",
"subject":"General Knowledge",
"marks":24,
"max":25
},
{
"studentId":"GVPS260030",
"exam":"UT1",
"subject":"English",
"marks":14,
"max":25
},
{
"studentId":"GVPS260030",
"exam":"UT1",
"subject":"Hindi",
"marks":24,
"max":25
},
{
"studentId":"GVPS260030",
"exam":"UT1",
"subject":"Mathematics",
"marks":24,
"max":25
},
{
"studentId":"GVPS260030",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":14,
"max":25
},
{
"studentId":"GVPS260030",
"exam":"UT1",
"subject":"Computer Basics",
"marks":17,
"max":25
},
{
"studentId":"GVPS260030",
"exam":"UT1",
"subject":"General Knowledge",
"marks":15,
"max":25
},
{
"studentId":"GVPS260031",
"exam":"UT1",
"subject":"English",
"marks":15,
"max":25
},
{
"studentId":"GVPS260031",
"exam":"UT1",
"subject":"Hindi",
"marks":18,
"max":25
},
{
"studentId":"GVPS260031",
"exam":"UT1",
"subject":"Mathematics",
"marks":20,
"max":25
},
{
"studentId":"GVPS260031",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":15,
"max":25
},
{
"studentId":"GVPS260031",
"exam":"UT1",
"subject":"Computer Basics",
"marks":12,
"max":25
},
{
"studentId":"GVPS260031",
"exam":"UT1",
"subject":"General Knowledge",
"marks":21,
"max":25
},
{
"studentId":"GVPS260032",
"exam":"UT1",
"subject":"English",
"marks":24,
"max":25
},
{
"studentId":"GVPS260032",
"exam":"UT1",
"subject":"Hindi",
"marks":23,
"max":25
},
{
"studentId":"GVPS260032",
"exam":"UT1",
"subject":"Mathematics",
"marks":13,
"max":25
},
{
"studentId":"GVPS260032",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":16,
"max":25
},
{
"studentId":"GVPS260032",
"exam":"UT1",
"subject":"Computer Basics",
"marks":17,
"max":25
},
{
"studentId":"GVPS260032",
"exam":"UT1",
"subject":"General Knowledge",
"marks":16,
"max":25
},
{
"studentId":"GVPS260033",
"exam":"UT1",
"subject":"English",
"marks":23,
"max":25
},
{
"studentId":"GVPS260033",
"exam":"UT1",
"subject":"Hindi",
"marks":15,
"max":25
},
{
"studentId":"GVPS260033",
"exam":"UT1",
"subject":"Mathematics",
"marks":17,
"max":25
},
{
"studentId":"GVPS260033",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":20,
"max":25
},
{
"studentId":"GVPS260033",
"exam":"UT1",
"subject":"Computer Basics",
"marks":19,
"max":25
},
{
"studentId":"GVPS260033",
"exam":"UT1",
"subject":"General Knowledge",
"marks":20,
"max":25
},
{
"studentId":"GVPS260034",
"exam":"UT1",
"subject":"English",
"marks":18,
"max":25
},
{
"studentId":"GVPS260034",
"exam":"UT1",
"subject":"Hindi",
"marks":21,
"max":25
},
{
"studentId":"GVPS260034",
"exam":"UT1",
"subject":"Mathematics",
"marks":20,
"max":25
},
{
"studentId":"GVPS260034",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":19,
"max":25
},
{
"studentId":"GVPS260034",
"exam":"UT1",
"subject":"Computer Basics",
"marks":21,
"max":25
},
{
"studentId":"GVPS260034",
"exam":"UT1",
"subject":"General Knowledge",
"marks":20,
"max":25
},
{
"studentId":"GVPS260035",
"exam":"UT1",
"subject":"English",
"marks":21,
"max":25
},
{
"studentId":"GVPS260035",
"exam":"UT1",
"subject":"Hindi",
"marks":20,
"max":25
},
{
"studentId":"GVPS260035",
"exam":"UT1",
"subject":"Mathematics",
"marks":20,
"max":25
},
{
"studentId":"GVPS260035",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":20,
"max":25
},
{
"studentId":"GVPS260035",
"exam":"UT1",
"subject":"Computer Basics",
"marks":15,
"max":25
},
{
"studentId":"GVPS260035",
"exam":"UT1",
"subject":"General Knowledge",
"marks":17,
"max":25
},
{
"studentId":"GVPS260036",
"exam":"UT1",
"subject":"English",
"marks":17,
"max":25
},
{
"studentId":"GVPS260036",
"exam":"UT1",
"subject":"Hindi",
"marks":16,
"max":25
},
{
"studentId":"GVPS260036",
"exam":"UT1",
"subject":"Mathematics",
"marks":17,
"max":25
},
{
"studentId":"GVPS260036",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":16,
"max":25
},
{
"studentId":"GVPS260036",
"exam":"UT1",
"subject":"Computer Basics",
"marks":16,
"max":25
},
{
"studentId":"GVPS260036",
"exam":"UT1",
"subject":"General Knowledge",
"marks":20,
"max":25
},
{
"studentId":"GVPS260037",
"exam":"UT1",
"subject":"English",
"marks":25,
"max":25
},
{
"studentId":"GVPS260037",
"exam":"UT1",
"subject":"Hindi",
"marks":25,
"max":25
},
{
"studentId":"GVPS260037",
"exam":"UT1",
"subject":"Mathematics",
"marks":18,
"max":25
},
{
"studentId":"GVPS260037",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":19,
"max":25
},
{
"studentId":"GVPS260037",
"exam":"UT1",
"subject":"Computer Basics",
"marks":17,
"max":25
},
{
"studentId":"GVPS260037",
"exam":"UT1",
"subject":"General Knowledge",
"marks":18,
"max":25
},
{
"studentId":"GVPS260038",
"exam":"UT1",
"subject":"English",
"marks":21,
"max":25
},
{
"studentId":"GVPS260038",
"exam":"UT1",
"subject":"Hindi",
"marks":20,
"max":25
},
{
"studentId":"GVPS260038",
"exam":"UT1",
"subject":"Mathematics",
"marks":20,
"max":25
},
{
"studentId":"GVPS260038",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":22,
"max":25
},
{
"studentId":"GVPS260038",
"exam":"UT1",
"subject":"Computer Basics",
"marks":17,
"max":25
},
{
"studentId":"GVPS260038",
"exam":"UT1",
"subject":"General Knowledge",
"marks":21,
"max":25
},
{
"studentId":"GVPS260039",
"exam":"UT1",
"subject":"English",
"marks":19,
"max":25
},
{
"studentId":"GVPS260039",
"exam":"UT1",
"subject":"Hindi",
"marks":15,
"max":25
},
{
"studentId":"GVPS260039",
"exam":"UT1",
"subject":"Mathematics",
"marks":24,
"max":25
},
{
"studentId":"GVPS260039",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":15,
"max":25
},
{
"studentId":"GVPS260039",
"exam":"UT1",
"subject":"Computer Basics",
"marks":22,
"max":25
},
{
"studentId":"GVPS260039",
"exam":"UT1",
"subject":"General Knowledge",
"marks":16,
"max":25
},
{
"studentId":"GVPS260040",
"exam":"UT1",
"subject":"English",
"marks":16,
"max":25
},
{
"studentId":"GVPS260040",
"exam":"UT1",
"subject":"Hindi",
"marks":23,
"max":25
},
{
"studentId":"GVPS260040",
"exam":"UT1",
"subject":"Mathematics",
"marks":20,
"max":25
},
{
"studentId":"GVPS260040",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":18,
"max":25
},
{
"studentId":"GVPS260040",
"exam":"UT1",
"subject":"Computer Basics",
"marks":15,
"max":25
},
{
"studentId":"GVPS260040",
"exam":"UT1",
"subject":"General Knowledge",
"marks":12,
"max":25
},
{
"studentId":"GVPS260041",
"exam":"UT1",
"subject":"English",
"marks":17,
"max":25
},
{
"studentId":"GVPS260041",
"exam":"UT1",
"subject":"Hindi",
"marks":18,
"max":25
},
{
"studentId":"GVPS260041",
"exam":"UT1",
"subject":"Mathematics",
"marks":22,
"max":25
},
{
"studentId":"GVPS260041",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":18,
"max":25
},
{
"studentId":"GVPS260041",
"exam":"UT1",
"subject":"Computer Basics",
"marks":23,
"max":25
},
{
"studentId":"GVPS260041",
"exam":"UT1",
"subject":"General Knowledge",
"marks":16,
"max":25
},
{
"studentId":"GVPS260042",
"exam":"UT1",
"subject":"English",
"marks":22,
"max":25
},
{
"studentId":"GVPS260042",
"exam":"UT1",
"subject":"Hindi",
"marks":22,
"max":25
},
{
"studentId":"GVPS260042",
"exam":"UT1",
"subject":"Mathematics",
"marks":18,
"max":25
},
{
"studentId":"GVPS260042",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":22,
"max":25
},
{
"studentId":"GVPS260042",
"exam":"UT1",
"subject":"Computer Basics",
"marks":25,
"max":25
},
{
"studentId":"GVPS260042",
"exam":"UT1",
"subject":"General Knowledge",
"marks":13,
"max":25
},
{
"studentId":"GVPS260043",
"exam":"UT1",
"subject":"English",
"marks":13,
"max":25
},
{
"studentId":"GVPS260043",
"exam":"UT1",
"subject":"Hindi",
"marks":16,
"max":25
},
{
"studentId":"GVPS260043",
"exam":"UT1",
"subject":"Mathematics",
"marks":16,
"max":25
},
{
"studentId":"GVPS260043",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":15,
"max":25
},
{
"studentId":"GVPS260043",
"exam":"UT1",
"subject":"Computer Basics",
"marks":19,
"max":25
},
{
"studentId":"GVPS260043",
"exam":"UT1",
"subject":"General Knowledge",
"marks":13,
"max":25
},
{
"studentId":"GVPS260044",
"exam":"UT1",
"subject":"English",
"marks":25,
"max":25
},
{
"studentId":"GVPS260044",
"exam":"UT1",
"subject":"Hindi",
"marks":18,
"max":25
},
{
"studentId":"GVPS260044",
"exam":"UT1",
"subject":"Mathematics",
"marks":19,
"max":25
},
{
"studentId":"GVPS260044",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":18,
"max":25
},
{
"studentId":"GVPS260044",
"exam":"UT1",
"subject":"Computer Basics",
"marks":16,
"max":25
},
{
"studentId":"GVPS260044",
"exam":"UT1",
"subject":"General Knowledge",
"marks":19,
"max":25
},
{
"studentId":"GVPS260045",
"exam":"UT1",
"subject":"English",
"marks":18,
"max":25
},
{
"studentId":"GVPS260045",
"exam":"UT1",
"subject":"Hindi",
"marks":20,
"max":25
},
{
"studentId":"GVPS260045",
"exam":"UT1",
"subject":"Mathematics",
"marks":21,
"max":25
},
{
"studentId":"GVPS260045",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":15,
"max":25
},
{
"studentId":"GVPS260045",
"exam":"UT1",
"subject":"Computer Basics",
"marks":11,
"max":25
},
{
"studentId":"GVPS260045",
"exam":"UT1",
"subject":"General Knowledge",
"marks":16,
"max":25
},
{
"studentId":"GVPS260046",
"exam":"UT1",
"subject":"English",
"marks":19,
"max":25
},
{
"studentId":"GVPS260046",
"exam":"UT1",
"subject":"Hindi",
"marks":11,
"max":25
},
{
"studentId":"GVPS260046",
"exam":"UT1",
"subject":"Mathematics",
"marks":20,
"max":25
},
{
"studentId":"GVPS260046",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":19,
"max":25
},
{
"studentId":"GVPS260046",
"exam":"UT1",
"subject":"Computer Basics",
"marks":13,
"max":25
},
{
"studentId":"GVPS260046",
"exam":"UT1",
"subject":"General Knowledge",
"marks":19,
"max":25
},
{
"studentId":"GVPS260047",
"exam":"UT1",
"subject":"English",
"marks":22,
"max":25
},
{
"studentId":"GVPS260047",
"exam":"UT1",
"subject":"Hindi",
"marks":18,
"max":25
},
{
"studentId":"GVPS260047",
"exam":"UT1",
"subject":"Mathematics",
"marks":20,
"max":25
},
{
"studentId":"GVPS260047",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":21,
"max":25
},
{
"studentId":"GVPS260047",
"exam":"UT1",
"subject":"Computer Basics",
"marks":23,
"max":25
},
{
"studentId":"GVPS260047",
"exam":"UT1",
"subject":"General Knowledge",
"marks":23,
"max":25
},
{
"studentId":"GVPS260048",
"exam":"UT1",
"subject":"English",
"marks":16,
"max":25
},
{
"studentId":"GVPS260048",
"exam":"UT1",
"subject":"Hindi",
"marks":18,
"max":25
},
{
"studentId":"GVPS260048",
"exam":"UT1",
"subject":"Mathematics",
"marks":19,
"max":25
},
{
"studentId":"GVPS260048",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":15,
"max":25
},
{
"studentId":"GVPS260048",
"exam":"UT1",
"subject":"Computer Basics",
"marks":19,
"max":25
},
{
"studentId":"GVPS260048",
"exam":"UT1",
"subject":"General Knowledge",
"marks":20,
"max":25
},
{
"studentId":"GVPS260049",
"exam":"UT1",
"subject":"English",
"marks":20,
"max":25
},
{
"studentId":"GVPS260049",
"exam":"UT1",
"subject":"Hindi",
"marks":11,
"max":25
},
{
"studentId":"GVPS260049",
"exam":"UT1",
"subject":"Mathematics",
"marks":16,
"max":25
},
{
"studentId":"GVPS260049",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":9,
"max":25
},
{
"studentId":"GVPS260049",
"exam":"UT1",
"subject":"Computer Basics",
"marks":19,
"max":25
},
{
"studentId":"GVPS260049",
"exam":"UT1",
"subject":"General Knowledge",
"marks":18,
"max":25
},
{
"studentId":"GVPS260050",
"exam":"UT1",
"subject":"English",
"marks":22,
"max":25
},
{
"studentId":"GVPS260050",
"exam":"UT1",
"subject":"Hindi",
"marks":22,
"max":25
},
{
"studentId":"GVPS260050",
"exam":"UT1",
"subject":"Mathematics",
"marks":15,
"max":25
},
{
"studentId":"GVPS260050",
"exam":"UT1",
"subject":"Environmental Studies",
"marks":18,
"max":25
},
{
"studentId":"GVPS260050",
"exam":"UT1",
"subject":"Computer Basics",
"marks":19,
"max":25
},
{
"studentId":"GVPS260050",
"exam":"UT1",
"subject":"General Knowledge",
"marks":22,
"max":25
},
{
"studentId":"GVPS260051",
"exam":"UT1",
"subject":"English",
"marks":23,
"max":25
},
{
"studentId":"GVPS260051",
"exam":"UT1",
"subject":"Hindi",
"marks":18,
"max":25
},
{
"studentId":"GVPS260051",
"exam":"UT1",
"subject":"Mathematics",
"marks":13,
"max":25
},
{
"studentId":"GVPS260051",
"exam":"UT1",
"subject":"Science",
"marks":22,
"max":25
},
{
"studentId":"GVPS260051",
"exam":"UT1",
"subject":"Social Science",
"marks":18,
"max":25
},
{
"studentId":"GVPS260051",
"exam":"UT1",
"subject":"Sanskrit",
"marks":11,
"max":25
},
{
"studentId":"GVPS260051",
"exam":"UT1",
"subject":"Computer Science",
"marks":19,
"max":25
},
{
"studentId":"GVPS260052",
"exam":"UT1",
"subject":"English",
"marks":15,
"max":25
},
{
"studentId":"GVPS260052",
"exam":"UT1",
"subject":"Hindi",
"marks":19,
"max":25
},
{
"studentId":"GVPS260052",
"exam":"UT1",
"subject":"Mathematics",
"marks":23,
"max":25
},
{
"studentId":"GVPS260052",
"exam":"UT1",
"subject":"Science",
"marks":18,
"max":25
},
{
"studentId":"GVPS260052",
"exam":"UT1",
"subject":"Social Science",
"marks":15,
"max":25
},
{
"studentId":"GVPS260052",
"exam":"UT1",
"subject":"Sanskrit",
"marks":20,
"max":25
},
{
"studentId":"GVPS260052",
"exam":"UT1",
"subject":"Computer Science",
"marks":17,
"max":25
},
{
"studentId":"GVPS260053",
"exam":"UT1",
"subject":"English",
"marks":19,
"max":25
},
{
"studentId":"GVPS260053",
"exam":"UT1",
"subject":"Hindi",
"marks":22,
"max":25
},
{
"studentId":"GVPS260053",
"exam":"UT1",
"subject":"Mathematics",
"marks":19,
"max":25
},
{
"studentId":"GVPS260053",
"exam":"UT1",
"subject":"Science",
"marks":20,
"max":25
},
{
"studentId":"GVPS260053",
"exam":"UT1",
"subject":"Social Science",
"marks":18,
"max":25
},
{
"studentId":"GVPS260053",
"exam":"UT1",
"subject":"Sanskrit",
"marks":19,
"max":25
},
{
"studentId":"GVPS260053",
"exam":"UT1",
"subject":"Computer Science",
"marks":14,
"max":25
},
{
"studentId":"GVPS260054",
"exam":"UT1",
"subject":"English",
"marks":15,
"max":25
},
{
"studentId":"GVPS260054",
"exam":"UT1",
"subject":"Hindi",
"marks":23,
"max":25
},
{
"studentId":"GVPS260054",
"exam":"UT1",
"subject":"Mathematics",
"marks":24,
"max":25
},
{
"studentId":"GVPS260054",
"exam":"UT1",
"subject":"Science",
"marks":14,
"max":25
},
{
"studentId":"GVPS260054",
"exam":"UT1",
"subject":"Social Science",
"marks":21,
"max":25
},
{
"studentId":"GVPS260054",
"exam":"UT1",
"subject":"Sanskrit",
"marks":22,
"max":25
},
{
"studentId":"GVPS260054",
"exam":"UT1",
"subject":"Computer Science",
"marks":15,
"max":25
},
{
"studentId":"GVPS260055",
"exam":"UT1",
"subject":"English",
"marks":21,
"max":25
},
{
"studentId":"GVPS260055",
"exam":"UT1",
"subject":"Hindi",
"marks":21,
"max":25
},
{
"studentId":"GVPS260055",
"exam":"UT1",
"subject":"Mathematics",
"marks":23,
"max":25
},
{
"studentId":"GVPS260055",
"exam":"UT1",
"subject":"Science",
"marks":25,
"max":25
},
{
"studentId":"GVPS260055",
"exam":"UT1",
"subject":"Social Science",
"marks":19,
"max":25
},
{
"studentId":"GVPS260055",
"exam":"UT1",
"subject":"Sanskrit",
"marks":20,
"max":25
},
{
"studentId":"GVPS260055",
"exam":"UT1",
"subject":"Computer Science",
"marks":15,
"max":25
},
{
"studentId":"GVPS260056",
"exam":"UT1",
"subject":"English",
"marks":20,
"max":25
},
{
"studentId":"GVPS260056",
"exam":"UT1",
"subject":"Hindi",
"marks":19,
"max":25
},
{
"studentId":"GVPS260056",
"exam":"UT1",
"subject":"Mathematics",
"marks":18,
"max":25
},
{
"studentId":"GVPS260056",
"exam":"UT1",
"subject":"Science",
"marks":19,
"max":25
},
{
"studentId":"GVPS260056",
"exam":"UT1",
"subject":"Social Science",
"marks":22,
"max":25
},
{
"studentId":"GVPS260056",
"exam":"UT1",
"subject":"Sanskrit",
"marks":22,
"max":25
},
{
"studentId":"GVPS260056",
"exam":"UT1",
"subject":"Computer Science",
"marks":22,
"max":25
},
{
"studentId":"GVPS260057",
"exam":"UT1",
"subject":"English",
"marks":25,
"max":25
},
{
"studentId":"GVPS260057",
"exam":"UT1",
"subject":"Hindi",
"marks":13,
"max":25
},
{
"studentId":"GVPS260057",
"exam":"UT1",
"subject":"Mathematics",
"marks":18,
"max":25
},
{
"studentId":"GVPS260057",
"exam":"UT1",
"subject":"Science",
"marks":18,
"max":25
},
{
"studentId":"GVPS260057",
"exam":"UT1",
"subject":"Social Science",
"marks":17,
"max":25
},
{
"studentId":"GVPS260057",
"exam":"UT1",
"subject":"Sanskrit",
"marks":17,
"max":25
},
{
"studentId":"GVPS260057",
"exam":"UT1",
"subject":"Computer Science",
"marks":13,
"max":25
},
{
"studentId":"GVPS260058",
"exam":"UT1",
"subject":"English",
"marks":17,
"max":25
},
{
"studentId":"GVPS260058",
"exam":"UT1",
"subject":"Hindi",
"marks":23,
"max":25
},
{
"studentId":"GVPS260058",
"exam":"UT1",
"subject":"Mathematics",
"marks":17,
"max":25
},
{
"studentId":"GVPS260058",
"exam":"UT1",
"subject":"Science",
"marks":18,
"max":25
},
{
"studentId":"GVPS260058",
"exam":"UT1",
"subject":"Social Science",
"marks":20,
"max":25
},
{
"studentId":"GVPS260058",
"exam":"UT1",
"subject":"Sanskrit",
"marks":19,
"max":25
},
{
"studentId":"GVPS260058",
"exam":"UT1",
"subject":"Computer Science",
"marks":15,
"max":25
},
{
"studentId":"GVPS260059",
"exam":"UT1",
"subject":"English",
"marks":17,
"max":25
},
{
"studentId":"GVPS260059",
"exam":"UT1",
"subject":"Hindi",
"marks":23,
"max":25
},
{
"studentId":"GVPS260059",
"exam":"UT1",
"subject":"Mathematics",
"marks":16,
"max":25
},
{
"studentId":"GVPS260059",
"exam":"UT1",
"subject":"Science",
"marks":14,
"max":25
},
{
"studentId":"GVPS260059",
"exam":"UT1",
"subject":"Social Science",
"marks":25,
"max":25
},
{
"studentId":"GVPS260059",
"exam":"UT1",
"subject":"Sanskrit",
"marks":19,
"max":25
},
{
"studentId":"GVPS260059",
"exam":"UT1",
"subject":"Computer Science",
"marks":14,
"max":25
},
{
"studentId":"GVPS260060",
"exam":"UT1",
"subject":"English",
"marks":12,
"max":25
},
{
"studentId":"GVPS260060",
"exam":"UT1",
"subject":"Hindi",
"marks":16,
"max":25
},
{
"studentId":"GVPS260060",
"exam":"UT1",
"subject":"Mathematics",
"marks":13,
"max":25
},
{
"studentId":"GVPS260060",
"exam":"UT1",
"subject":"Science",
"marks":18,
"max":25
},
{
"studentId":"GVPS260060",
"exam":"UT1",
"subject":"Social Science",
"marks":22,
"max":25
},
{
"studentId":"GVPS260060",
"exam":"UT1",
"subject":"Sanskrit",
"marks":22,
"max":25
},
{
"studentId":"GVPS260060",
"exam":"UT1",
"subject":"Computer Science",
"marks":17,
"max":25
},
{
"studentId":"GVPS260061",
"exam":"UT1",
"subject":"English",
"marks":21,
"max":25
},
{
"studentId":"GVPS260061",
"exam":"UT1",
"subject":"Hindi",
"marks":17,
"max":25
},
{
"studentId":"GVPS260061",
"exam":"UT1",
"subject":"Mathematics",
"marks":9,
"max":25
},
{
"studentId":"GVPS260061",
"exam":"UT1",
"subject":"Science",
"marks":21,
"max":25
},
{
"studentId":"GVPS260061",
"exam":"UT1",
"subject":"Social Science",
"marks":15,
"max":25
},
{
"studentId":"GVPS260061",
"exam":"UT1",
"subject":"Sanskrit",
"marks":15,
"max":25
},
{
"studentId":"GVPS260061",
"exam":"UT1",
"subject":"Computer Science",
"marks":22,
"max":25
},
{
"studentId":"GVPS260062",
"exam":"UT1",
"subject":"English",
"marks":19,
"max":25
},
{
"studentId":"GVPS260062",
"exam":"UT1",
"subject":"Hindi",
"marks":22,
"max":25
},
{
"studentId":"GVPS260062",
"exam":"UT1",
"subject":"Mathematics",
"marks":22,
"max":25
},
{
"studentId":"GVPS260062",
"exam":"UT1",
"subject":"Science",
"marks":22,
"max":25
},
{
"studentId":"GVPS260062",
"exam":"UT1",
"subject":"Social Science",
"marks":18,
"max":25
},
{
"studentId":"GVPS260062",
"exam":"UT1",
"subject":"Sanskrit",
"marks":25,
"max":25
},
{
"studentId":"GVPS260062",
"exam":"UT1",
"subject":"Computer Science",
"marks":15,
"max":25
},
{
"studentId":"GVPS260063",
"exam":"UT1",
"subject":"English",
"marks":22,
"max":25
},
{
"studentId":"GVPS260063",
"exam":"UT1",
"subject":"Hindi",
"marks":25,
"max":25
},
{
"studentId":"GVPS260063",
"exam":"UT1",
"subject":"Mathematics",
"marks":18,
"max":25
},
{
"studentId":"GVPS260063",
"exam":"UT1",
"subject":"Science",
"marks":16,
"max":25
},
{
"studentId":"GVPS260063",
"exam":"UT1",
"subject":"Social Science",
"marks":22,
"max":25
},
{
"studentId":"GVPS260063",
"exam":"UT1",
"subject":"Sanskrit",
"marks":23,
"max":25
},
{
"studentId":"GVPS260063",
"exam":"UT1",
"subject":"Computer Science",
"marks":21,
"max":25
},
{
"studentId":"GVPS260064",
"exam":"UT1",
"subject":"English",
"marks":16,
"max":25
},
{
"studentId":"GVPS260064",
"exam":"UT1",
"subject":"Hindi",
"marks":19,
"max":25
},
{
"studentId":"GVPS260064",
"exam":"UT1",
"subject":"Mathematics",
"marks":13,
"max":25
},
{
"studentId":"GVPS260064",
"exam":"UT1",
"subject":"Science",
"marks":23,
"max":25
},
{
"studentId":"GVPS260064",
"exam":"UT1",
"subject":"Social Science",
"marks":23,
"max":25
},
{
"studentId":"GVPS260064",
"exam":"UT1",
"subject":"Sanskrit",
"marks":18,
"max":25
},
{
"studentId":"GVPS260064",
"exam":"UT1",
"subject":"Computer Science",
"marks":21,
"max":25
},
{
"studentId":"GVPS260065",
"exam":"UT1",
"subject":"English",
"marks":17,
"max":25
},
{
"studentId":"GVPS260065",
"exam":"UT1",
"subject":"Hindi",
"marks":19,
"max":25
},
{
"studentId":"GVPS260065",
"exam":"UT1",
"subject":"Mathematics",
"marks":19,
"max":25
},
{
"studentId":"GVPS260065",
"exam":"UT1",
"subject":"Science",
"marks":18,
"max":25
},
{
"studentId":"GVPS260065",
"exam":"UT1",
"subject":"Social Science",
"marks":25,
"max":25
},
{
"studentId":"GVPS260065",
"exam":"UT1",
"subject":"Sanskrit",
"marks":17,
"max":25
},
{
"studentId":"GVPS260065",
"exam":"UT1",
"subject":"Computer Science",
"marks":23,
"max":25
},
{
"studentId":"GVPS260066",
"exam":"UT1",
"subject":"English",
"marks":15,
"max":25
},
{
"studentId":"GVPS260066",
"exam":"UT1",
"subject":"Hindi",
"marks":20,
"max":25
},
{
"studentId":"GVPS260066",
"exam":"UT1",
"subject":"Mathematics",
"marks":18,
"max":25
},
{
"studentId":"GVPS260066",
"exam":"UT1",
"subject":"Science",
"marks":15,
"max":25
},
{
"studentId":"GVPS260066",
"exam":"UT1",
"subject":"Social Science",
"marks":22,
"max":25
},
{
"studentId":"GVPS260066",
"exam":"UT1",
"subject":"Sanskrit",
"marks":22,
"max":25
},
{
"studentId":"GVPS260066",
"exam":"UT1",
"subject":"Computer Science",
"marks":24,
"max":25
},
{
"studentId":"GVPS260067",
"exam":"UT1",
"subject":"English",
"marks":20,
"max":25
},
{
"studentId":"GVPS260067",
"exam":"UT1",
"subject":"Hindi",
"marks":15,
"max":25
},
{
"studentId":"GVPS260067",
"exam":"UT1",
"subject":"Mathematics",
"marks":22,
"max":25
},
{
"studentId":"GVPS260067",
"exam":"UT1",
"subject":"Science",
"marks":20,
"max":25
},
{
"studentId":"GVPS260067",
"exam":"UT1",
"subject":"Social Science",
"marks":25,
"max":25
},
{
"studentId":"GVPS260067",
"exam":"UT1",
"subject":"Sanskrit",
"marks":9,
"max":25
},
{
"studentId":"GVPS260067",
"exam":"UT1",
"subject":"Computer Science",
"marks":18,
"max":25
},
{
"studentId":"GVPS260068",
"exam":"UT1",
"subject":"English",
"marks":19,
"max":25
},
{
"studentId":"GVPS260068",
"exam":"UT1",
"subject":"Hindi",
"marks":23,
"max":25
},
{
"studentId":"GVPS260068",
"exam":"UT1",
"subject":"Mathematics",
"marks":14,
"max":25
},
{
"studentId":"GVPS260068",
"exam":"UT1",
"subject":"Science",
"marks":23,
"max":25
},
{
"studentId":"GVPS260068",
"exam":"UT1",
"subject":"Social Science",
"marks":20,
"max":25
},
{
"studentId":"GVPS260068",
"exam":"UT1",
"subject":"Sanskrit",
"marks":11,
"max":25
},
{
"studentId":"GVPS260068",
"exam":"UT1",
"subject":"Computer Science",
"marks":25,
"max":25
},
{
"studentId":"GVPS260069",
"exam":"UT1",
"subject":"English",
"marks":10,
"max":25
},
{
"studentId":"GVPS260069",
"exam":"UT1",
"subject":"Hindi",
"marks":15,
"max":25
},
{
"studentId":"GVPS260069",
"exam":"UT1",
"subject":"Mathematics",
"marks":15,
"max":25
},
{
"studentId":"GVPS260069",
"exam":"UT1",
"subject":"Science",
"marks":20,
"max":25
},
{
"studentId":"GVPS260069",
"exam":"UT1",
"subject":"Social Science",
"marks":17,
"max":25
},
{
"studentId":"GVPS260069",
"exam":"UT1",
"subject":"Sanskrit",
"marks":18,
"max":25
},
{
"studentId":"GVPS260069",
"exam":"UT1",
"subject":"Computer Science",
"marks":16,
"max":25
},
{
"studentId":"GVPS260070",
"exam":"UT1",
"subject":"English",
"marks":20,
"max":25
},
{
"studentId":"GVPS260070",
"exam":"UT1",
"subject":"Hindi",
"marks":22,
"max":25
},
{
"studentId":"GVPS260070",
"exam":"UT1",
"subject":"Mathematics",
"marks":25,
"max":25
},
{
"studentId":"GVPS260070",
"exam":"UT1",
"subject":"Science",
"marks":13,
"max":25
},
{
"studentId":"GVPS260070",
"exam":"UT1",
"subject":"Social Science",
"marks":16,
"max":25
},
{
"studentId":"GVPS260070",
"exam":"UT1",
"subject":"Sanskrit",
"marks":16,
"max":25
},
{
"studentId":"GVPS260070",
"exam":"UT1",
"subject":"Computer Science",
"marks":17,
"max":25
},
{
"studentId":"GVPS260071",
"exam":"UT1",
"subject":"English",
"marks":18,
"max":25
},
{
"studentId":"GVPS260071",
"exam":"UT1",
"subject":"Hindi",
"marks":21,
"max":25
},
{
"studentId":"GVPS260071",
"exam":"UT1",
"subject":"Mathematics",
"marks":16,
"max":25
},
{
"studentId":"GVPS260071",
"exam":"UT1",
"subject":"Science",
"marks":16,
"max":25
},
{
"studentId":"GVPS260071",
"exam":"UT1",
"subject":"Social Science",
"marks":24,
"max":25
},
{
"studentId":"GVPS260071",
"exam":"UT1",
"subject":"Sanskrit",
"marks":24,
"max":25
},
{
"studentId":"GVPS260071",
"exam":"UT1",
"subject":"Computer Science",
"marks":25,
"max":25
},
{
"studentId":"GVPS260072",
"exam":"UT1",
"subject":"English",
"marks":25,
"max":25
},
{
"studentId":"GVPS260072",
"exam":"UT1",
"subject":"Hindi",
"marks":16,
"max":25
},
{
"studentId":"GVPS260072",
"exam":"UT1",
"subject":"Mathematics",
"marks":24,
"max":25
},
{
"studentId":"GVPS260072",
"exam":"UT1",
"subject":"Science",
"marks":21,
"max":25
},
{
"studentId":"GVPS260072",
"exam":"UT1",
"subject":"Social Science",
"marks":18,
"max":25
},
{
"studentId":"GVPS260072",
"exam":"UT1",
"subject":"Information Technology",
"marks":21,
"max":25
},
{
"studentId":"GVPS260073",
"exam":"UT1",
"subject":"English",
"marks":16,
"max":25
},
{
"studentId":"GVPS260073",
"exam":"UT1",
"subject":"Hindi",
"marks":14,
"max":25
},
{
"studentId":"GVPS260073",
"exam":"UT1",
"subject":"Mathematics",
"marks":18,
"max":25
},
{
"studentId":"GVPS260073",
"exam":"UT1",
"subject":"Science",
"marks":13,
"max":25
},
{
"studentId":"GVPS260073",
"exam":"UT1",
"subject":"Social Science",
"marks":17,
"max":25
},
{
"studentId":"GVPS260073",
"exam":"UT1",
"subject":"Information Technology",
"marks":19,
"max":25
},
{
"studentId":"GVPS260074",
"exam":"UT1",
"subject":"English",
"marks":15,
"max":25
},
{
"studentId":"GVPS260074",
"exam":"UT1",
"subject":"Hindi",
"marks":16,
"max":25
},
{
"studentId":"GVPS260074",
"exam":"UT1",
"subject":"Mathematics",
"marks":11,
"max":25
},
{
"studentId":"GVPS260074",
"exam":"UT1",
"subject":"Science",
"marks":14,
"max":25
},
{
"studentId":"GVPS260074",
"exam":"UT1",
"subject":"Social Science",
"marks":18,
"max":25
},
{
"studentId":"GVPS260074",
"exam":"UT1",
"subject":"Information Technology",
"marks":16,
"max":25
},
{
"studentId":"GVPS260075",
"exam":"UT1",
"subject":"English",
"marks":19,
"max":25
},
{
"studentId":"GVPS260075",
"exam":"UT1",
"subject":"Hindi",
"marks":16,
"max":25
},
{
"studentId":"GVPS260075",
"exam":"UT1",
"subject":"Mathematics",
"marks":17,
"max":25
},
{
"studentId":"GVPS260075",
"exam":"UT1",
"subject":"Science",
"marks":12,
"max":25
},
{
"studentId":"GVPS260075",
"exam":"UT1",
"subject":"Social Science",
"marks":25,
"max":25
},
{
"studentId":"GVPS260075",
"exam":"UT1",
"subject":"Information Technology",
"marks":18,
"max":25
},
{
"studentId":"GVPS260076",
"exam":"UT1",
"subject":"English",
"marks":22,
"max":25
},
{
"studentId":"GVPS260076",
"exam":"UT1",
"subject":"Hindi",
"marks":16,
"max":25
},
{
"studentId":"GVPS260076",
"exam":"UT1",
"subject":"Mathematics",
"marks":14,
"max":25
},
{
"studentId":"GVPS260076",
"exam":"UT1",
"subject":"Science",
"marks":20,
"max":25
},
{
"studentId":"GVPS260076",
"exam":"UT1",
"subject":"Social Science",
"marks":17,
"max":25
},
{
"studentId":"GVPS260076",
"exam":"UT1",
"subject":"Information Technology",
"marks":18,
"max":25
},
{
"studentId":"GVPS260077",
"exam":"UT1",
"subject":"English",
"marks":21,
"max":25
},
{
"studentId":"GVPS260077",
"exam":"UT1",
"subject":"Hindi",
"marks":21,
"max":25
},
{
"studentId":"GVPS260077",
"exam":"UT1",
"subject":"Mathematics",
"marks":22,
"max":25
},
{
"studentId":"GVPS260077",
"exam":"UT1",
"subject":"Science",
"marks":19,
"max":25
},
{
"studentId":"GVPS260077",
"exam":"UT1",
"subject":"Social Science",
"marks":11,
"max":25
},
{
"studentId":"GVPS260077",
"exam":"UT1",
"subject":"Information Technology",
"marks":21,
"max":25
},
{
"studentId":"GVPS260078",
"exam":"UT1",
"subject":"English",
"marks":24,
"max":25
},
{
"studentId":"GVPS260078",
"exam":"UT1",
"subject":"Hindi",
"marks":20,
"max":25
},
{
"studentId":"GVPS260078",
"exam":"UT1",
"subject":"Mathematics",
"marks":23,
"max":25
},
{
"studentId":"GVPS260078",
"exam":"UT1",
"subject":"Science",
"marks":21,
"max":25
},
{
"studentId":"GVPS260078",
"exam":"UT1",
"subject":"Social Science",
"marks":21,
"max":25
},
{
"studentId":"GVPS260078",
"exam":"UT1",
"subject":"Information Technology",
"marks":21,
"max":25
},
{
"studentId":"GVPS260079",
"exam":"UT1",
"subject":"English",
"marks":13,
"max":25
},
{
"studentId":"GVPS260079",
"exam":"UT1",
"subject":"Hindi",
"marks":10,
"max":25
},
{
"studentId":"GVPS260079",
"exam":"UT1",
"subject":"Mathematics",
"marks":19,
"max":25
},
{
"studentId":"GVPS260079",
"exam":"UT1",
"subject":"Science",
"marks":21,
"max":25
},
{
"studentId":"GVPS260079",
"exam":"UT1",
"subject":"Social Science",
"marks":21,
"max":25
},
{
"studentId":"GVPS260079",
"exam":"UT1",
"subject":"Information Technology",
"marks":18,
"max":25
},
{
"studentId":"GVPS260080",
"exam":"UT1",
"subject":"English",
"marks":17,
"max":25
},
{
"studentId":"GVPS260080",
"exam":"UT1",
"subject":"Hindi",
"marks":15,
"max":25
},
{
"studentId":"GVPS260080",
"exam":"UT1",
"subject":"Mathematics",
"marks":20,
"max":25
},
{
"studentId":"GVPS260080",
"exam":"UT1",
"subject":"Science",
"marks":20,
"max":25
},
{
"studentId":"GVPS260080",
"exam":"UT1",
"subject":"Social Science",
"marks":21,
"max":25
},
{
"studentId":"GVPS260080",
"exam":"UT1",
"subject":"Information Technology",
"marks":18,
"max":25
},
{
"studentId":"GVPS260081",
"exam":"UT1",
"subject":"English",
"marks":23,
"max":25
},
{
"studentId":"GVPS260081",
"exam":"UT1",
"subject":"Hindi",
"marks":16,
"max":25
},
{
"studentId":"GVPS260081",
"exam":"UT1",
"subject":"Mathematics",
"marks":23,
"max":25
},
{
"studentId":"GVPS260081",
"exam":"UT1",
"subject":"Science",
"marks":15,
"max":25
},
{
"studentId":"GVPS260081",
"exam":"UT1",
"subject":"Social Science",
"marks":24,
"max":25
},
{
"studentId":"GVPS260081",
"exam":"UT1",
"subject":"Information Technology",
"marks":22,
"max":25
},
{
"studentId":"GVPS260082",
"exam":"UT1",
"subject":"English",
"marks":15,
"max":25
},
{
"studentId":"GVPS260082",
"exam":"UT1",
"subject":"Hindi",
"marks":21,
"max":25
},
{
"studentId":"GVPS260082",
"exam":"UT1",
"subject":"Mathematics",
"marks":15,
"max":25
},
{
"studentId":"GVPS260082",
"exam":"UT1",
"subject":"Science",
"marks":25,
"max":25
},
{
"studentId":"GVPS260082",
"exam":"UT1",
"subject":"Social Science",
"marks":23,
"max":25
},
{
"studentId":"GVPS260082",
"exam":"UT1",
"subject":"Information Technology",
"marks":19,
"max":25
},
{
"studentId":"GVPS260083",
"exam":"UT1",
"subject":"English",
"marks":20,
"max":25
},
{
"studentId":"GVPS260083",
"exam":"UT1",
"subject":"Hindi",
"marks":18,
"max":25
},
{
"studentId":"GVPS260083",
"exam":"UT1",
"subject":"Mathematics",
"marks":17,
"max":25
},
{
"studentId":"GVPS260083",
"exam":"UT1",
"subject":"Science",
"marks":14,
"max":25
},
{
"studentId":"GVPS260083",
"exam":"UT1",
"subject":"Social Science",
"marks":18,
"max":25
},
{
"studentId":"GVPS260083",
"exam":"UT1",
"subject":"Information Technology",
"marks":23,
"max":25
},
{
"studentId":"GVPS260084",
"exam":"UT1",
"subject":"English",
"marks":20,
"max":25
},
{
"studentId":"GVPS260084",
"exam":"UT1",
"subject":"Hindi",
"marks":23,
"max":25
},
{
"studentId":"GVPS260084",
"exam":"UT1",
"subject":"Mathematics",
"marks":23,
"max":25
},
{
"studentId":"GVPS260084",
"exam":"UT1",
"subject":"Science",
"marks":21,
"max":25
},
{
"studentId":"GVPS260084",
"exam":"UT1",
"subject":"Social Science",
"marks":15,
"max":25
},
{
"studentId":"GVPS260084",
"exam":"UT1",
"subject":"Information Technology",
"marks":15,
"max":25
},
{
"studentId":"GVPS260085",
"exam":"UT1",
"subject":"English",
"marks":17,
"max":25
},
{
"studentId":"GVPS260085",
"exam":"UT1",
"subject":"Hindi",
"marks":10,
"max":25
},
{
"studentId":"GVPS260085",
"exam":"UT1",
"subject":"Mathematics",
"marks":12,
"max":25
},
{
"studentId":"GVPS260085",
"exam":"UT1",
"subject":"Science",
"marks":19,
"max":25
},
{
"studentId":"GVPS260085",
"exam":"UT1",
"subject":"Social Science",
"marks":24,
"max":25
},
{
"studentId":"GVPS260085",
"exam":"UT1",
"subject":"Information Technology",
"marks":25,
"max":25
},
{
"studentId":"GVPS260086",
"exam":"UT1",
"subject":"English",
"marks":19,
"max":25
},
{
"studentId":"GVPS260086",
"exam":"UT1",
"subject":"Hindi",
"marks":22,
"max":25
},
{
"studentId":"GVPS260086",
"exam":"UT1",
"subject":"Mathematics",
"marks":20,
"max":25
},
{
"studentId":"GVPS260086",
"exam":"UT1",
"subject":"Science",
"marks":15,
"max":25
},
{
"studentId":"GVPS260086",
"exam":"UT1",
"subject":"Social Science",
"marks":22,
"max":25
},
{
"studentId":"GVPS260086",
"exam":"UT1",
"subject":"Information Technology",
"marks":18,
"max":25
},
{
"studentId":"GVPS260087",
"exam":"UT1",
"subject":"English Core",
"marks":21,
"max":25
},
{
"studentId":"GVPS260087",
"exam":"UT1",
"subject":"Physics",
"marks":11,
"max":25
},
{
"studentId":"GVPS260087",
"exam":"UT1",
"subject":"Chemistry",
"marks":17,
"max":25
},
{
"studentId":"GVPS260087",
"exam":"UT1",
"subject":"Mathematics",
"marks":23,
"max":25
},
{
"studentId":"GVPS260087",
"exam":"UT1",
"subject":"Biology",
"marks":18,
"max":25
},
{
"studentId":"GVPS260087",
"exam":"UT1",
"subject":"Computer Science",
"marks":19,
"max":25
},
{
"studentId":"GVPS260088",
"exam":"UT1",
"subject":"English Core",
"marks":22,
"max":25
},
{
"studentId":"GVPS260088",
"exam":"UT1",
"subject":"Physics",
"marks":25,
"max":25
},
{
"studentId":"GVPS260088",
"exam":"UT1",
"subject":"Chemistry",
"marks":24,
"max":25
},
{
"studentId":"GVPS260088",
"exam":"UT1",
"subject":"Mathematics",
"marks":19,
"max":25
},
{
"studentId":"GVPS260088",
"exam":"UT1",
"subject":"Biology",
"marks":16,
"max":25
},
{
"studentId":"GVPS260088",
"exam":"UT1",
"subject":"Computer Science",
"marks":22,
"max":25
},
{
"studentId":"GVPS260089",
"exam":"UT1",
"subject":"English Core",
"marks":16,
"max":25
},
{
"studentId":"GVPS260089",
"exam":"UT1",
"subject":"Physics",
"marks":14,
"max":25
},
{
"studentId":"GVPS260089",
"exam":"UT1",
"subject":"Chemistry",
"marks":15,
"max":25
},
{
"studentId":"GVPS260089",
"exam":"UT1",
"subject":"Mathematics",
"marks":18,
"max":25
},
{
"studentId":"GVPS260089",
"exam":"UT1",
"subject":"Biology",
"marks":16,
"max":25
},
{
"studentId":"GVPS260089",
"exam":"UT1",
"subject":"Computer Science",
"marks":15,
"max":25
},
{
"studentId":"GVPS260090",
"exam":"UT1",
"subject":"English Core",
"marks":22,
"max":25
},
{
"studentId":"GVPS260090",
"exam":"UT1",
"subject":"Physics",
"marks":14,
"max":25
},
{
"studentId":"GVPS260090",
"exam":"UT1",
"subject":"Chemistry",
"marks":14,
"max":25
},
{
"studentId":"GVPS260090",
"exam":"UT1",
"subject":"Mathematics",
"marks":19,
"max":25
},
{
"studentId":"GVPS260090",
"exam":"UT1",
"subject":"Biology",
"marks":21,
"max":25
},
{
"studentId":"GVPS260090",
"exam":"UT1",
"subject":"Computer Science",
"marks":17,
"max":25
},
{
"studentId":"GVPS260091",
"exam":"UT1",
"subject":"English Core",
"marks":15,
"max":25
},
{
"studentId":"GVPS260091",
"exam":"UT1",
"subject":"Accountancy",
"marks":25,
"max":25
},
{
"studentId":"GVPS260091",
"exam":"UT1",
"subject":"Business Studies",
"marks":17,
"max":25
},
{
"studentId":"GVPS260091",
"exam":"UT1",
"subject":"Economics",
"marks":25,
"max":25
},
{
"studentId":"GVPS260091",
"exam":"UT1",
"subject":"Applied Mathematics",
"marks":16,
"max":25
},
{
"studentId":"GVPS260091",
"exam":"UT1",
"subject":"Entrepreneurship",
"marks":24,
"max":25
},
{
"studentId":"GVPS260092",
"exam":"UT1",
"subject":"English Core",
"marks":14,
"max":25
},
{
"studentId":"GVPS260092",
"exam":"UT1",
"subject":"Accountancy",
"marks":25,
"max":25
},
{
"studentId":"GVPS260092",
"exam":"UT1",
"subject":"Business Studies",
"marks":21,
"max":25
},
{
"studentId":"GVPS260092",
"exam":"UT1",
"subject":"Economics",
"marks":20,
"max":25
},
{
"studentId":"GVPS260092",
"exam":"UT1",
"subject":"Applied Mathematics",
"marks":16,
"max":25
},
{
"studentId":"GVPS260092",
"exam":"UT1",
"subject":"Entrepreneurship",
"marks":25,
"max":25
},
{
"studentId":"GVPS260093",
"exam":"UT1",
"subject":"English Core",
"marks":24,
"max":25
},
{
"studentId":"GVPS260093",
"exam":"UT1",
"subject":"Accountancy",
"marks":19,
"max":25
},
{
"studentId":"GVPS260093",
"exam":"UT1",
"subject":"Business Studies",
"marks":20,
"max":25
},
{
"studentId":"GVPS260093",
"exam":"UT1",
"subject":"Economics",
"marks":16,
"max":25
},
{
"studentId":"GVPS260093",
"exam":"UT1",
"subject":"Applied Mathematics",
"marks":21,
"max":25
},
{
"studentId":"GVPS260093",
"exam":"UT1",
"subject":"Entrepreneurship",
"marks":18,
"max":25
},
{
"studentId":"GVPS260094",
"exam":"UT1",
"subject":"English Core",
"marks":21,
"max":25
},
{
"studentId":"GVPS260094",
"exam":"UT1",
"subject":"Physics",
"marks":11,
"max":25
},
{
"studentId":"GVPS260094",
"exam":"UT1",
"subject":"Chemistry",
"marks":21,
"max":25
},
{
"studentId":"GVPS260094",
"exam":"UT1",
"subject":"Mathematics",
"marks":23,
"max":25
},
{
"studentId":"GVPS260094",
"exam":"UT1",
"subject":"Biology",
"marks":19,
"max":25
},
{
"studentId":"GVPS260094",
"exam":"UT1",
"subject":"Computer Science",
"marks":25,
"max":25
},
{
"studentId":"GVPS260095",
"exam":"UT1",
"subject":"English Core",
"marks":16,
"max":25
},
{
"studentId":"GVPS260095",
"exam":"UT1",
"subject":"Physics",
"marks":24,
"max":25
},
{
"studentId":"GVPS260095",
"exam":"UT1",
"subject":"Chemistry",
"marks":19,
"max":25
},
{
"studentId":"GVPS260095",
"exam":"UT1",
"subject":"Mathematics",
"marks":19,
"max":25
},
{
"studentId":"GVPS260095",
"exam":"UT1",
"subject":"Biology",
"marks":21,
"max":25
},
{
"studentId":"GVPS260095",
"exam":"UT1",
"subject":"Computer Science",
"marks":24,
"max":25
},
{
"studentId":"GVPS260096",
"exam":"UT1",
"subject":"English Core",
"marks":12,
"max":25
},
{
"studentId":"GVPS260096",
"exam":"UT1",
"subject":"Physics",
"marks":19,
"max":25
},
{
"studentId":"GVPS260096",
"exam":"UT1",
"subject":"Chemistry",
"marks":18,
"max":25
},
{
"studentId":"GVPS260096",
"exam":"UT1",
"subject":"Mathematics",
"marks":22,
"max":25
},
{
"studentId":"GVPS260096",
"exam":"UT1",
"subject":"Biology",
"marks":19,
"max":25
},
{
"studentId":"GVPS260096",
"exam":"UT1",
"subject":"Computer Science",
"marks":17,
"max":25
},
{
"studentId":"GVPS260097",
"exam":"UT1",
"subject":"English Core",
"marks":20,
"max":25
},
{
"studentId":"GVPS260097",
"exam":"UT1",
"subject":"Physics",
"marks":22,
"max":25
},
{
"studentId":"GVPS260097",
"exam":"UT1",
"subject":"Chemistry",
"marks":16,
"max":25
},
{
"studentId":"GVPS260097",
"exam":"UT1",
"subject":"Mathematics",
"marks":20,
"max":25
},
{
"studentId":"GVPS260097",
"exam":"UT1",
"subject":"Biology",
"marks":18,
"max":25
},
{
"studentId":"GVPS260097",
"exam":"UT1",
"subject":"Computer Science",
"marks":17,
"max":25
},
{
"studentId":"GVPS260098",
"exam":"UT1",
"subject":"English Core",
"marks":19,
"max":25
},
{
"studentId":"GVPS260098",
"exam":"UT1",
"subject":"Accountancy",
"marks":25,
"max":25
},
{
"studentId":"GVPS260098",
"exam":"UT1",
"subject":"Business Studies",
"marks":17,
"max":25
},
{
"studentId":"GVPS260098",
"exam":"UT1",
"subject":"Economics",
"marks":21,
"max":25
},
{
"studentId":"GVPS260098",
"exam":"UT1",
"subject":"Applied Mathematics",
"marks":21,
"max":25
},
{
"studentId":"GVPS260098",
"exam":"UT1",
"subject":"Entrepreneurship",
"marks":24,
"max":25
},
{
"studentId":"GVPS260099",
"exam":"UT1",
"subject":"English Core",
"marks":18,
"max":25
},
{
"studentId":"GVPS260099",
"exam":"UT1",
"subject":"Accountancy",
"marks":14,
"max":25
},
{
"studentId":"GVPS260099",
"exam":"UT1",
"subject":"Business Studies",
"marks":22,
"max":25
},
{
"studentId":"GVPS260099",
"exam":"UT1",
"subject":"Economics",
"marks":11,
"max":25
},
{
"studentId":"GVPS260099",
"exam":"UT1",
"subject":"Applied Mathematics",
"marks":20,
"max":25
},
{
"studentId":"GVPS260099",
"exam":"UT1",
"subject":"Entrepreneurship",
"marks":23,
"max":25
},
{
"studentId":"GVPS260100",
"exam":"UT1",
"subject":"English Core",
"marks":21,
"max":25
},
{
"studentId":"GVPS260100",
"exam":"UT1",
"subject":"Accountancy",
"marks":19,
"max":25
},
{
"studentId":"GVPS260100",
"exam":"UT1",
"subject":"Business Studies",
"marks":18,
"max":25
},
{
"studentId":"GVPS260100",
"exam":"UT1",
"subject":"Economics",
"marks":17,
"max":25
},
{
"studentId":"GVPS260100",
"exam":"UT1",
"subject":"Applied Mathematics",
"marks":22,
"max":25
},
{
"studentId":"GVPS260100",
"exam":"UT1",
"subject":"Entrepreneurship",
"marks":12,
"max":25
}
],
"papers":[
{
"class":"5",
"subject":"English",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"5",
"subject":"Hindi",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"5",
"subject":"Mathematics",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"5",
"subject":"Environmental Studies",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"6",
"subject":"English",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"6",
"subject":"Hindi",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"6",
"subject":"Mathematics",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"6",
"subject":"Science",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"7",
"subject":"English",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"7",
"subject":"Hindi",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"7",
"subject":"Mathematics",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"7",
"subject":"Science",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"8",
"subject":"English",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"8",
"subject":"Hindi",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"8",
"subject":"Mathematics",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"8",
"subject":"Science",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"9",
"subject":"English",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"9",
"subject":"Hindi",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"9",
"subject":"Mathematics",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"9",
"subject":"Science",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"10",
"subject":"English",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"10",
"subject":"Hindi",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"10",
"subject":"Mathematics",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"10",
"subject":"Science",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"11",
"subject":"English Core",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"11",
"subject":"Physics",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"11",
"subject":"Chemistry",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"11",
"subject":"Mathematics",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"12",
"subject":"English Core",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"12",
"subject":"Physics",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"12",
"subject":"Chemistry",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
},
{
"class":"12",
"subject":"Mathematics",
"exam":"Unit Test I 2026",
"paper":"#",
"answerKey":"#",
"uploaded":"2026-05-18"
}
],
"material":[
{
"class":"LKG",
"subject":"Environment Talk",
"title":"Environment Talk — Practical File Format",
"type":"Practical File Format",
"teacher":"Ms. Priyanka Sengar",
"uploaded":"2026-07-02",
"size":"6.2 MB",
"link":"#"
},
{
"class":"LKG",
"subject":"English Rhymes",
"title":"English Rhymes — Sample Paper",
"type":"Sample Paper",
"teacher":"Ms. Priyanka Sengar",
"uploaded":"2026-07-22",
"size":"6.7 MB",
"link":"#"
},
{
"class":"LKG",
"subject":"Rhythm & Play",
"title":"Rhythm & Play — Revision Sheet",
"type":"Revision Sheet",
"teacher":"Ms. Priyanka Sengar",
"uploaded":"2026-06-05",
"size":"1.2 MB",
"link":"#"
},
{
"class":"UKG",
"subject":"Drawing & Colouring",
"title":"Drawing & Colouring — Chapter Notes",
"type":"Chapter Notes",
"teacher":"Ms. Priyanka Sengar",
"uploaded":"2026-09-09",
"size":"3.1 MB",
"link":"#"
},
{
"class":"UKG",
"subject":"Hindi Varnmala",
"title":"Hindi Varnmala — Sample Paper",
"type":"Sample Paper",
"teacher":"Mrs. Jyoti Kaushal",
"uploaded":"2026-08-04",
"size":"6.2 MB",
"link":"#"
},
{
"class":"UKG",
"subject":"Environment Talk",
"title":"Environment Talk — Syllabus",
"type":"Syllabus",
"teacher":"Mrs. Jyoti Kaushal",
"uploaded":"2026-06-20",
"size":"2.4 MB",
"link":"#"
},
{
"class":"1",
"subject":"Hindi",
"title":"Hindi — Holiday Homework",
"type":"Holiday Homework",
"teacher":"Mr. Gurpreet Bedi",
"uploaded":"2026-06-13",
"size":"2.6 MB",
"link":"#"
},
{
"class":"1",
"subject":"English",
"title":"English — Practical File Format",
"type":"Practical File Format",
"teacher":"Mr. Alok Nandan",
"uploaded":"2026-09-25",
"size":"2.1 MB",
"link":"#"
},
{
"class":"1",
"subject":"Physical Education",
"title":"Physical Education — Chapter Notes",
"type":"Chapter Notes",
"teacher":"Mr. Devender Solanki",
"uploaded":"2026-07-11",
"size":"4.3 MB",
"link":"#"
},
{
"class":"2",
"subject":"Mathematics",
"title":"Mathematics — Revision Sheet",
"type":"Revision Sheet",
"teacher":"Mrs. Rekha Dutt",
"uploaded":"2026-09-23",
"size":"2.9 MB",
"link":"#"
},
{
"class":"2",
"subject":"Computer Basics",
"title":"Computer Basics — Holiday Homework",
"type":"Holiday Homework",
"teacher":"Mrs. Bhavna Chadha",
"uploaded":"2026-07-02",
"size":"4.1 MB",
"link":"#"
},
{
"class":"2",
"subject":"Hindi",
"title":"Hindi — Sample Paper",
"type":"Sample Paper",
"teacher":"Mr. Gurpreet Bedi",
"uploaded":"2026-07-12",
"size":"4.8 MB",
"link":"#"
},
{
"class":"3",
"subject":"English",
"title":"English — Sample Paper",
"type":"Sample Paper",
"teacher":"Mrs. Anjali Mehrotra",
"uploaded":"2026-06-26",
"size":"4.2 MB",
"link":"#"
},
{
"class":"3",
"subject":"Physical Education",
"title":"Physical Education — Syllabus",
"type":"Syllabus",
"teacher":"Mr. Devender Solanki",
"uploaded":"2026-08-08",
"size":"4.5 MB",
"link":"#"
},
{
"class":"3",
"subject":"General Knowledge",
"title":"General Knowledge — Sample Paper",
"type":"Sample Paper",
"teacher":"Ms. Nidhi Sachdeva",
"uploaded":"2026-06-07",
"size":"4.2 MB",
"link":"#"
},
{
"class":"4",
"subject":"General Knowledge",
"title":"General Knowledge — Practical File Format",
"type":"Practical File Format",
"teacher":"Ms. Nidhi Sachdeva",
"uploaded":"2026-09-11",
"size":"6.6 MB",
"link":"#"
},
{
"class":"4",
"subject":"Art & Craft",
"title":"Art & Craft — Practical File Format",
"type":"Practical File Format",
"teacher":"Mrs. Anjali Mehrotra",
"uploaded":"2026-07-17",
"size":"3.3 MB",
"link":"#"
},
{
"class":"4",
"subject":"Hindi",
"title":"Hindi — Chapter Notes",
"type":"Chapter Notes",
"teacher":"Mrs. Sunita Rawat",
"uploaded":"2026-06-27",
"size":"3.3 MB",
"link":"#"
},
{
"class":"5",
"subject":"Art & Craft",
"title":"Art & Craft — Sample Paper",
"type":"Sample Paper",
"teacher":"Mrs. Anjali Mehrotra",
"uploaded":"2026-07-01",
"size":"4.1 MB",
"link":"#"
},
{
"class":"5",
"subject":"Hindi",
"title":"Hindi — Practical File Format",
"type":"Practical File Format",
"teacher":"Mr. Gurpreet Bedi",
"uploaded":"2026-06-07",
"size":"6.2 MB",
"link":"#"
},
{
"class":"5",
"subject":"English",
"title":"English — Revision Sheet",
"type":"Revision Sheet",
"teacher":"Mrs. Anjali Mehrotra",
"uploaded":"2026-09-01",
"size":"2.4 MB",
"link":"#"
},
{
"class":"6",
"subject":"Computer Science",
"title":"Computer Science — Chapter Notes",
"type":"Chapter Notes",
"teacher":"Mr. Imran Qureshi",
"uploaded":"2026-07-16",
"size":"4.4 MB",
"link":"#"
},
{
"class":"6",
"subject":"Physical Education",
"title":"Physical Education — Chapter Notes",
"type":"Chapter Notes",
"teacher":"Mr. Devender Solanki",
"uploaded":"2026-09-15",
"size":"5.7 MB",
"link":"#"
},
{
"class":"6",
"subject":"Science",
"title":"Science — Holiday Homework",
"type":"Holiday Homework",
"teacher":"Ms. Swati Bhardwaj",
"uploaded":"2026-09-05",
"size":"1.2 MB",
"link":"#"
},
{
"class":"7",
"subject":"English",
"title":"English — Syllabus",
"type":"Syllabus",
"teacher":"Mrs. Anjali Mehrotra",
"uploaded":"2026-07-14",
"size":"2.1 MB",
"link":"#"
},
{
"class":"7",
"subject":"Physical Education",
"title":"Physical Education — Revision Sheet",
"type":"Revision Sheet",
"teacher":"Mr. Devender Solanki",
"uploaded":"2026-09-15",
"size":"2.9 MB",
"link":"#"
},
{
"class":"7",
"subject":"Art Education",
"title":"Art Education — Holiday Homework",
"type":"Holiday Homework",
"teacher":"Ms. Tanvi Arora",
"uploaded":"2026-09-28",
"size":"4.4 MB",
"link":"#"
},
{
"class":"8",
"subject":"Social Science",
"title":"Social Science — Sample Paper",
"type":"Sample Paper",
"teacher":"Mrs. Aparna Nath",
"uploaded":"2026-06-25",
"size":"6.1 MB",
"link":"#"
},
{
"class":"8",
"subject":"Physical Education",
"title":"Physical Education — Sample Paper",
"type":"Sample Paper",
"teacher":"Mr. Devender Solanki",
"uploaded":"2026-09-11",
"size":"1.7 MB",
"link":"#"
},
{
"class":"8",
"subject":"Hindi",
"title":"Hindi — Sample Paper",
"type":"Sample Paper",
"teacher":"Mr. Gurpreet Bedi",
"uploaded":"2026-07-12",
"size":"1.2 MB",
"link":"#"
},
{
"class":"9",
"subject":"English",
"title":"English — Revision Sheet",
"type":"Revision Sheet",
"teacher":"Mr. Alok Nandan",
"uploaded":"2026-07-03",
"size":"1.2 MB",
"link":"#"
},
{
"class":"9",
"subject":"Information Technology",
"title":"Information Technology — Sample Paper",
"type":"Sample Paper",
"teacher":"Mr. Harish Chandra",
"uploaded":"2026-09-04",
"size":"3.3 MB",
"link":"#"
},
{
"class":"9",
"subject":"Science",
"title":"Science — Chapter Notes",
"type":"Chapter Notes",
"teacher":"Ms. Swati Bhardwaj",
"uploaded":"2026-06-21",
"size":"1.8 MB",
"link":"#"
},
{
"class":"10",
"subject":"English",
"title":"English — Practical File Format",
"type":"Practical File Format",
"teacher":"Mr. Alok Nandan",
"uploaded":"2026-06-17",
"size":"3.3 MB",
"link":"#"
},
{
"class":"10",
"subject":"Hindi",
"title":"Hindi — Sample Paper",
"type":"Sample Paper",
"teacher":"Mrs. Sunita Rawat",
"uploaded":"2026-09-08",
"size":"5.7 MB",
"link":"#"
},
{
"class":"10",
"subject":"Mathematics",
"title":"Mathematics — Worksheet",
"type":"Worksheet",
"teacher":"Mr. Rakesh Chandola",
"uploaded":"2026-09-16",
"size":"5.2 MB",
"link":"#"
},
{
"class":"11",
"subject":"Mathematics",
"title":"Mathematics — Syllabus",
"type":"Syllabus",
"teacher":"Mr. Rakesh Chandola",
"uploaded":"2026-06-14",
"size":"1.3 MB",
"link":"#"
},
{
"class":"11",
"subject":"Physics",
"title":"Physics — Chapter Notes",
"type":"Chapter Notes",
"teacher":"Dr. Prakash Iyer",
"uploaded":"2026-08-06",
"size":"3.4 MB",
"link":"#"
},
{
"class":"11",
"subject":"Chemistry",
"title":"Chemistry — Syllabus",
"type":"Syllabus",
"teacher":"Mrs. Neelam Bhatia",
"uploaded":"2026-07-07",
"size":"6.8 MB",
"link":"#"
},
{
"class":"12",
"subject":"Mathematics",
"title":"Mathematics — Worksheet",
"type":"Worksheet",
"teacher":"Mr. Rakesh Chandola",
"uploaded":"2026-07-04",
"size":"5.3 MB",
"link":"#"
},
{
"class":"12",
"subject":"Chemistry",
"title":"Chemistry — Worksheet",
"type":"Worksheet",
"teacher":"Mrs. Neelam Bhatia",
"uploaded":"2026-08-27",
"size":"4.3 MB",
"link":"#"
},
{
"class":"12",
"subject":"Biology",
"title":"Biology — Worksheet",
"type":"Worksheet",
"teacher":"Ms. Ritika Sabharwal",
"uploaded":"2026-08-02",
"size":"2.3 MB",
"link":"#"
}
],
"events":[
{
"date":"2026-09-14",
"title":"Hindi Diwas — Kavita Paath",
"category":"Cultural",
"venue":"Auditorium",
"classes":"LKG – 12",
"time":"10:00 AM"
},
{
"date":"2026-09-19",
"title":"Inter-house Science Exhibition",
"category":"Academic",
"venue":"Science Block",
"classes":"6 – 12",
"time":"09:30 AM"
},
{
"date":"2026-10-02",
"title":"Gandhi Jayanti — Swachhata Drive",
"category":"Assembly",
"venue":"School Grounds",
"classes":"All",
"time":"08:00 AM"
},
{
"date":"2026-10-11",
"title":"Annual Athletic Meet",
"category":"Sports",
"venue":"Main Ground",
"classes":"All",
"time":"08:00 AM"
},
{
"date":"2026-10-20",
"title":"Diwali Mela & Rangoli Contest",
"category":"Cultural",
"venue":"School Grounds",
"classes":"All",
"time":"11:00 AM"
},
{
"date":"2026-11-14",
"title":"Children's Day — Teachers' Performance",
"category":"Cultural",
"venue":"Auditorium",
"classes":"LKG – 8",
"time":"10:30 AM"
},
{
"date":"2026-11-22",
"title":"Inter-school Basketball Tournament",
"category":"Sports",
"venue":"Basketball Court",
"classes":"9 – 12",
"time":"09:00 AM"
},
{
"date":"2026-12-06",
"title":"Parent–Teacher Meeting (Term I)",
"category":"Meeting",
"venue":"Respective Classrooms",
"classes":"All",
"time":"09:00 AM"
},
{
"date":"2026-12-24",
"title":"Christmas Carol Assembly",
"category":"Assembly",
"venue":"Auditorium",
"classes":"LKG – 5",
"time":"10:00 AM"
},
{
"date":"2027-01-26",
"title":"Republic Day Parade & Prize Distribution",
"category":"Assembly",
"venue":"Main Ground",
"classes":"All",
"time":"08:00 AM"
},
{
"date":"2027-02-07",
"title":"Annual Day — 'Bharat Darshan'",
"category":"Cultural",
"venue":"Auditorium",
"classes":"All",
"time":"05:00 PM"
},
{
"date":"2027-02-14",
"title":"Inter-house Chess & Carrom Finals",
"category":"Sports",
"venue":"Activity Hall",
"classes":"3 – 12",
"time":"11:00 AM"
}
],
"notices":[
{
"date":"2026-09-05",
"title":"Half Yearly datesheet released for Classes LKG – 12",
"tag":"Examination"
},
{
"date":"2026-09-03",
"title":"Winter uniform becomes compulsory from 1 November",
"tag":"Uniform"
},
{
"date":"2026-09-01",
"title":"Term II fee window open till 15 September",
"tag":"Fees"
},
{
"date":"2026-08-28",
"title":"Bus Route 3 timing shifted 10 minutes earlier",
"tag":"Transport"
},
{
"date":"2026-08-25",
"title":"Science Exhibition registration open for Classes 6 – 12",
"tag":"Event"
},
{
"date":"2026-08-20",
"title":"Admission enquiries for session 2027–28 begin 1 October",
"tag":"Admission"
},
{
"date":"2026-08-14",
"title":"School closed on 15 August; assembly at 7:30 AM on 14 August",
"tag":"Holiday"
},
{
"date":"2026-08-08",
"title":"Class 10 pre-board practice sheets uploaded in Study Material",
"tag":"Academics"
}
],
"leaves":[
{
"id":"LV001",
"studentId":"GVPS260074",
"name":"Tara Kaushik",
"class":"9",
"section":"A",
"from":"2026-08-06",
"to":"2026-08-08",
"days":3,
"reason":"Viral infection — doctor advised rest",
"appliedBy":"Mother",
"status":"Pending",
"appliedOn":"2026-08-04"
},
{
"id":"LV002",
"studentId":"GVPS260073",
"name":"Pari Rathore",
"class":"9",
"section":"A",
"from":"2026-09-11",
"to":"2026-09-12",
"days":2,
"reason":"Dental treatment",
"appliedBy":"Father",
"status":"Approved",
"appliedOn":"2026-09-09"
},
{
"id":"LV003",
"studentId":"GVPS260063",
"name":"Aarohi Grover",
"class":"7",
"section":"B",
"from":"2026-07-09",
"to":"2026-07-09",
"days":1,
"reason":"Medical check-up",
"appliedBy":"Mother",
"status":"Rejected",
"appliedOn":"2026-07-07"
},
{
"id":"LV004",
"studentId":"GVPS260047",
"name":"Vihaan Chopra",
"class":"5",
"section":"A",
"from":"2026-08-20",
"to":"2026-08-23",
"days":4,
"reason":"Family function out of station",
"appliedBy":"Mother",
"status":"Approved",
"appliedOn":"2026-08-18"
},
{
"id":"LV005",
"studentId":"GVPS260020",
"name":"Kavya Sood",
"class":"1",
"section":"B",
"from":"2026-07-14",
"to":"2026-07-14",
"days":1,
"reason":"Sister's wedding",
"appliedBy":"Mother",
"status":"Approved",
"appliedOn":"2026-07-12"
},
{
"id":"LV006",
"studentId":"GVPS260030",
"name":"Ishita Aggarwal",
"class":"3",
"section":"A",
"from":"2026-07-19",
"to":"2026-07-20",
"days":2,
"reason":"Family function out of station",
"appliedBy":"Mother",
"status":"Rejected",
"appliedOn":"2026-07-17"
},
{
"id":"LV007",
"studentId":"GVPS260012",
"name":"Atharv Negi",
"class":"UKG",
"section":"B",
"from":"2026-08-15",
"to":"2026-08-17",
"days":3,
"reason":"Fever and cold",
"appliedBy":"Father",
"status":"Pending",
"appliedOn":"2026-08-13"
},
{
"id":"LV008",
"studentId":"GVPS260070",
"name":"Samarth Saxena",
"class":"8",
"section":"B",
"from":"2026-07-20",
"to":"2026-07-20",
"days":1,
"reason":"Sister's wedding",
"appliedBy":"Mother",
"status":"Approved",
"appliedOn":"2026-07-18"
},
{
"id":"LV009",
"studentId":"GVPS260018",
"name":"Myra Tyagi",
"class":"1",
"section":"A",
"from":"2026-09-06",
"to":"2026-09-07",
"days":2,
"reason":"Travelling to native place",
"appliedBy":"Mother",
"status":"Pending",
"appliedOn":"2026-09-04"
},
{
"id":"LV010",
"studentId":"GVPS260034",
"name":"Harsh Gupta",
"class":"3",
"section":"B",
"from":"2026-09-16",
"to":"2026-09-17",
"days":2,
"reason":"Fever and cold",
"appliedBy":"Father",
"status":"Approved",
"appliedOn":"2026-09-14"
},
{
"id":"LV011",
"studentId":"GVPS260008",
"name":"Aditi Gupta",
"class":"UKG",
"section":"A",
"from":"2026-07-08",
"to":"2026-07-10",
"days":3,
"reason":"Viral infection — doctor advised rest",
"appliedBy":"Father",
"status":"Pending",
"appliedOn":"2026-07-06"
},
{
"id":"LV012",
"studentId":"GVPS260004",
"name":"Charvi Goel",
"class":"LKG",
"section":"A",
"from":"2026-08-20",
"to":"2026-08-20",
"days":1,
"reason":"Dental treatment",
"appliedBy":"Father",
"status":"Approved",
"appliedOn":"2026-08-18"
},
{
"id":"LV013",
"studentId":"GVPS260066",
"name":"Krish Bansal",
"class":"8",
"section":"A",
"from":"2026-09-15",
"to":"2026-09-16",
"days":2,
"reason":"Travelling to native place",
"appliedBy":"Mother",
"status":"Rejected",
"appliedOn":"2026-09-13"
},
{
"id":"LV014",
"studentId":"GVPS260010",
"name":"Nikhil Bisht",
"class":"UKG",
"section":"A",
"from":"2026-07-04",
"to":"2026-07-04",
"days":1,
"reason":"Medical check-up",
"appliedBy":"Father",
"status":"Approved",
"appliedOn":"2026-07-02"
}
],
"admissions":[
{
"id":"ENQ001",
"name":"Krish Bansal",
"classApplied":"8",
"gender":"Male",
"parent":"Nikhil Bansal",
"phone":"9887843735",
"email":"krish@example.com",
"appliedOn":"2026-07-14",
"status":"Waitlisted"
},
{
"id":"ENQ002",
"name":"Ira Bisht",
"classApplied":"3",
"gender":"Female",
"parent":"Advik Bisht",
"phone":"9888226409",
"email":"ira@example.com",
"appliedOn":"2026-08-08",
"status":"Interaction scheduled"
},
{
"id":"ENQ003",
"name":"Shaurya Chopra",
"classApplied":"12",
"gender":"Male",
"parent":"Reyansh Chopra",
"phone":"9816535191",
"email":"shaurya@example.com",
"appliedOn":"2026-08-26",
"status":"Enquiry received"
},
{
"id":"ENQ004",
"name":"Pari Grover",
"classApplied":"11",
"gender":"Female",
"parent":"Ayush Grover",
"phone":"9890848639",
"email":"pari@example.com",
"appliedOn":"2026-09-02",
"status":"Admitted"
},
{
"id":"ENQ005",
"name":"Riya Rastogi",
"classApplied":"6",
"gender":"Female",
"parent":"Harsh Rastogi",
"phone":"9814856854",
"email":"riya@example.com",
"appliedOn":"2026-07-27",
"status":"Enquiry received"
},
{
"id":"ENQ006",
"name":"Anaya Tyagi",
"classApplied":"4",
"gender":"Female",
"parent":"Manav Tyagi",
"phone":"9842519381",
"email":"anaya@example.com",
"appliedOn":"2026-09-21",
"status":"Admitted"
},
{
"id":"ENQ007",
"name":"Prisha Negi",
"classApplied":"UKG",
"gender":"Female",
"parent":"Vihaan Negi",
"phone":"9821796465",
"email":"prisha@example.com",
"appliedOn":"2026-07-07",
"status":"Enquiry received"
},
{
"id":"ENQ008",
"name":"Reyansh Chawla",
"classApplied":"5",
"gender":"Male",
"parent":"Advik Chawla",
"phone":"9890494682",
"email":"reyansh@example.com",
"appliedOn":"2026-09-15",
"status":"Waitlisted"
},
{
"id":"ENQ009",
"name":"Dhruv Malhotra",
"classApplied":"12",
"gender":"Male",
"parent":"Aarav Malhotra",
"phone":"9824348813",
"email":"dhruv@example.com",
"appliedOn":"2026-09-13",
"status":"Interaction scheduled"
},
{
"id":"ENQ010",
"name":"Harsh Ahuja",
"classApplied":"4",
"gender":"Male",
"parent":"Veer Ahuja",
"phone":"9891256620",
"email":"harsh@example.com",
"appliedOn":"2026-08-03",
"status":"Form submitted"
}
],
"fees":[
{
"class":"LKG",
"admissionFee":25000,
"tuitionMonthly":3200,
"annualCharges":9600,
"transport":"₹1,400 – ₹2,600 (route based)",
"total":48000
},
{
"class":"UKG",
"admissionFee":25000,
"tuitionMonthly":3200,
"annualCharges":9600,
"transport":"₹1,400 – ₹2,600 (route based)",
"total":48000
},
{
"class":"1",
"admissionFee":18000,
"tuitionMonthly":3600,
"annualCharges":10800,
"transport":"₹1,400 – ₹2,600 (route based)",
"total":54000
},
{
"class":"2",
"admissionFee":18000,
"tuitionMonthly":3600,
"annualCharges":10800,
"transport":"₹1,400 – ₹2,600 (route based)",
"total":54000
},
{
"class":"3",
"admissionFee":18000,
"tuitionMonthly":3600,
"annualCharges":10800,
"transport":"₹1,400 – ₹2,600 (route based)",
"total":54000
},
{
"class":"4",
"admissionFee":18000,
"tuitionMonthly":3600,
"annualCharges":10800,
"transport":"₹1,400 – ₹2,600 (route based)",
"total":54000
},
{
"class":"5",
"admissionFee":18000,
"tuitionMonthly":3600,
"annualCharges":10800,
"transport":"₹1,400 – ₹2,600 (route based)",
"total":54000
},
{
"class":"6",
"admissionFee":18000,
"tuitionMonthly":4200,
"annualCharges":12600,
"transport":"₹1,400 – ₹2,600 (route based)",
"total":63000
},
{
"class":"7",
"admissionFee":18000,
"tuitionMonthly":4200,
"annualCharges":12600,
"transport":"₹1,400 – ₹2,600 (route based)",
"total":63000
},
{
"class":"8",
"admissionFee":18000,
"tuitionMonthly":4200,
"annualCharges":12600,
"transport":"₹1,400 – ₹2,600 (route based)",
"total":63000
},
{
"class":"9",
"admissionFee":18000,
"tuitionMonthly":4800,
"annualCharges":14400,
"transport":"₹1,400 – ₹2,600 (route based)",
"total":72000
},
{
"class":"10",
"admissionFee":18000,
"tuitionMonthly":4800,
"annualCharges":14400,
"transport":"₹1,400 – ₹2,600 (route based)",
"total":72000
},
{
"class":"11",
"admissionFee":18000,
"tuitionMonthly":5400,
"annualCharges":16200,
"transport":"₹1,400 – ₹2,600 (route based)",
"total":81000
},
{
"class":"12",
"admissionFee":18000,
"tuitionMonthly":5400,
"annualCharges":16200,
"transport":"₹1,400 – ₹2,600 (route based)",
"total":81000
}
],
"routes":[
{
"route":"Route 1 — Rohini",
"stops":"Sector 3 · Sector 7 · Sector 11 · Rithala",
"pickup":"06:40 AM",
"drop":"02:10 PM",
"incharge":"Mr. Devender Solanki",
"bus":"DL-1P-4472"
},
{
"route":"Route 2 — Pitampura",
"stops":"Kohat Enclave · Netaji Subhash Place · Madhuban Chowk",
"pickup":"06:50 AM",
"drop":"02:05 PM",
"incharge":"Mr. Vikas Tomar",
"bus":"DL-1P-4473"
},
{
"route":"Route 3 — Model Town",
"stops":"Azadpur · Model Town II · GTB Nagar · Kamla Nagar",
"pickup":"06:35 AM",
"drop":"02:20 PM",
"incharge":"Mrs. Meenakshi Rao",
"bus":"DL-1P-4474"
},
{
"route":"Route 4 — Punjabi Bagh",
"stops":"Shivaji Park · Punjabi Bagh West · Madipur",
"pickup":"06:45 AM",
"drop":"02:15 PM",
"incharge":"Mr. Imran Qureshi",
"bus":"DL-1P-4475"
},
{
"route":"Route 5 — Ashok Vihar",
"stops":"Phase I · Phase III · Wazirpur Depot",
"pickup":"06:55 AM",
"drop":"02:00 PM",
"incharge":"Ms. Tanvi Arora",
"bus":"DL-1P-4476"
},
{
"route":"Route 6 — Civil Lines",
"stops":"Timarpur · Malka Ganj · Shakti Nagar",
"pickup":"06:30 AM",
"drop":"02:25 PM",
"incharge":"Mr. Alok Nandan",
"bus":"DL-1P-4477"
}
],
"gallery":[
{
"title":"Annual Day 2025 — 'Rang Tarang'",
"tag":"Cultural"
},
{
"title":"Science Exhibition — working models",
"tag":"Academic"
},
{
"title":"Athletic Meet — 100m finals",
"tag":"Sports"
},
{
"title":"Pre-primary Fancy Dress",
"tag":"Pre-Primary"
},
{
"title":"Robotics Lab session, Class 9",
"tag":"Labs"
},
{
"title":"Independence Day flag hoisting",
"tag":"Assembly"
},
{
"title":"Inter-house Rangoli Contest",
"tag":"Cultural"
},
{
"title":"Library reading week",
"tag":"Academic"
}
]
};

/* ============================================================
   KEYBOARD LAYOUT + FINGER MAP
   ============================================================ */
const FINGER_NAMES = {
  lp:"Left Pinky Finger", lr:"Left Ring Finger", lm:"Left Middle Finger", li:"Left Index Finger",
  ri:"Right Index Finger", rm:"Right Middle Finger", rr:"Right Ring Finger", rp:"Right Pinky Finger",
  th:"Thumb"
};

const KEY_ROWS = [
  [ ["`","lp"],["1","lp"],["2","lr"],["3","lm"],["4","li"],["5","li"],["6","ri"],["7","ri"],["8","rm"],["9","rr"],["0","rp"],["-","rp"],["=","rp"] ],
  [ ["q","lp"],["w","lr"],["e","lm"],["r","li"],["t","li"],["y","ri"],["u","ri"],["i","rm"],["o","rr"],["p","rp"],["[","rp"],["]","rp"] ],
  [ ["a","lp"],["s","lr"],["d","lm"],["f","li",true],["g","li"],["h","ri"],["j","ri",true],["k","rm"],["l","rr"],[";","rp"],["'","rp"] ],
  [ ["z","lp"],["x","lr"],["c","lm"],["v","li"],["b","li"],["n","ri"],["m","ri"],[",","rm"],[".","rr"],["/","rp"] ],
  [ ["space","th","w-6"] ]
];

/* ============================================================
   LEVELS — beginner ➜ advanced
   ============================================================ */
const LEVELS = [
  {
    id:1, title:"Home Row Ki Buniyaad",
    desc:"A S D F aur J K L ; — inhi 8 keys par tumhari ungliyan hamesha rahengi. Bina dekhe inhe dabana seekho.",
    type:"keys", pool:["a","s","d","f","j","k","l",";"], target:40
  },
  {
    id:2, title:"Home Row Se Asli Shabd",
    desc:"Ab home row ki keys se bane asli shabdon par practice — finger position mat todna.",
    type:"words",
    words:["ask","add","dad","fall","flag","flask","gas","gash","glass","half","hall","hash","lad","lash","sad","salad","flash","gala","alfalfa","salsa"],
    target:130
  },
  {
    id:3, title:"Top Row Ka Parichay",
    desc:"Q W E R T Y U I O P — ungliyan upar uthengi aur wapas home row par aayengi.",
    type:"keys", pool:["q","w","e","r","t","y","u","i","o","p"], target:45
  },
  {
    id:4, title:"Top + Home Row Combo",
    desc:"Ab do row's ki keys milakar roz-marra ke shabd banate hain.",
    type:"words",
    words:["the","and","for","said","fast","desk","hard","last","start","great","dark","stay","play","reader","water","paper","earth","radar","tiger","quiet"],
    target:150
  },
  {
    id:5, title:"Bottom Row Ka Parichay",
    desc:"Z X C V B N M , . / — sabse neeche ki row, thodi mushkil lekin zaroori.",
    type:"keys", pool:["z","x","c","v","b","n","m",",","."], target:45
  },
  {
    id:6, title:"Poora Alphabet, Poori Speed",
    desc:"Teeno rows milakar ab roz-marra ke shabdon par practice — bina neeche dekhe.",
    type:"words",
    words:["hello","world","typing","finger","practice","keyboard","school","market","doctor","garden","travel","monkey","yellow","orange","window","pencil","basket","cricket","holiday","morning","evening","teacher","student","kitchen","mirror","pocket"],
    target:170
  },
  {
    id:7, title:"Number Row Mastery",
    desc:"1 se 0 tak — numbers ko bhi bina dekhe type karna seekho, real-life mein bahut kaam aayega.",
    type:"sentences",
    sentences:[
      "Room number 12 is on the 3rd floor",
      "He ordered 45 items for the 2024 sale",
      "Call 100 people before 5 o clock today",
      "The train number 2716 leaves at 9 45",
      "Save 50 percent on all 3 products now",
      "My locker number is 108 and pin is 2468"
    ],
    target:180
  },
  {
    id:8, title:"Capitals aur Punctuation",
    desc:"Shift key, comma, full-stop aur apostrophe — ab sentences likhna jaisa real typing hota hai.",
    type:"sentences",
    sentences:[
      "The Sun Is Bright, and the Sky Is Clear.",
      "Ravi's book is on the table, next to mine.",
      "Hello, World! How are you doing today?",
      "It's a great day, isn't it, my friend?",
      "We visited Delhi, Agra, and Jaipur last year.",
      "Please submit the report by Monday, 9 AM."
    ],
    target:190
  },
  {
    id:9, title:"Common Words Speed Test",
    desc:"Ab asli WPM test — roz istemal hone wale sabse common English words ki tez raftaar.",
    type:"words",
    words:["the","of","and","to","a","in","that","have","for","not","with","you","this","but","from","they","say","her","she","will","one","all","would","there","their","what","out","about","who","get","which","when","make","can","like","time","just","him","know","take","people","into","year","good","some","could","them","see","other","than","then","now","look","only","come","its","over","think","also","back","after","use","two","how","our","work","first","well","way","even","new","want","because","any","these","give","day","most","us"],
    target:220
  },
  {
    id:10, title:"Paragraph Mastery",
    desc:"Final stage — poore paragraphs, real punctuation, real raftaar. Yahan se aage sirf practice hai.",
    type:"sentences",
    sentences:[
      "Learning to type without looking at the keyboard takes patience, but once your fingers know their place, your speed grows on its own.",
      "Every expert typist was once a beginner who kept practicing a little every single day until it became second nature.",
      "The quick brown fox jumps over the lazy dog, and this classic sentence uses almost every letter in the alphabet.",
      "Good posture, relaxed shoulders, and light fingertips make a bigger difference to your typing speed than most people realize.",
      "Consistency beats intensity, ten focused minutes a day will take you further than one long session every few weeks.",
      "As your accuracy improves, your confidence grows, and soon you will be typing full sentences without a single glance down."
    ],
    target:260
  }
];

/* ============================================================
   PRACTICE TEXT GENERATOR
   ============================================================ */
function buildPracticeText(level){
  if(level.type === "keys"){
    let out = [];
    let len = 0;
    while(len < level.target){
      let groupLen = 2 + Math.floor(Math.random()*3); // 2-4 chars
      let group = "";
      for(let i=0;i<groupLen;i++){
        group += level.pool[Math.floor(Math.random()*level.pool.length)];
      }
      out.push(group);
      len += group.length + 1;
    }
    return out.join(" ");
  }
  if(level.type === "words"){
    let out = [];
    let len = 0;
    let pool = [...level.words];
    while(len < level.target){
      let w = pool[Math.floor(Math.random()*pool.length)];
      out.push(w);
      len += w.length + 1;
    }
    return out.join(" ");
  }
  if(level.type === "sentences"){
    let shuffled = [...level.sentences].sort(()=>Math.random()-0.5);
    let out = [];
    let len = 0;
    let i = 0;
    while(len < level.target && i < shuffled.length){
      out.push(shuffled[i]);
      len += shuffled[i].length + 1;
      i++;
    }
    if(out.length === 0) out.push(shuffled[0]);
    return out.join("  ");
  }
  return "";
}

/* ============================================================
   STATE
   ============================================================ */
const STORAGE_KEY = "keysetu_progress_v1";
const GAS_KEY = "keysetu_gas_url";

let state = {
  levelIdx: 0,
  text: "",
  typedIndex: 0,
  errors: 0,
  startTime: null,
  finished: false,
  completed: {},   // { levelId: {bestWpm, bestAcc, timesDone} }
  history: []       // [{date, levelId, wpm, acc, errors, timeTaken}]
};

let els = {};

/* ============================================================
   PERSISTENCE
   ============================================================ */
function loadProgress(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      const parsed = JSON.parse(raw);
      state.completed = parsed.completed || {};
      state.history = parsed.history || [];
    }
  }catch(e){ console.warn("progress load failed", e); }
}
function saveProgress(){
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      completed: state.completed,
      history: state.history
    }));
  }catch(e){ console.warn("progress save failed", e); }
}
function getGasUrl(){ return localStorage.getItem(GAS_KEY) || ""; }
function setGasUrl(url){ localStorage.setItem(GAS_KEY, url); }

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  cacheEls();
  loadProgress();
  renderKeyboard();
  renderLegend();
  renderLevelList();
  renderMiniChart();
  renderHeaderStreak();
  bindEvents();
  els.gasUrlInput.value = getGasUrl();
  goToLevel(firstIncompleteLevelIdx());
});

function cacheEls(){
  els = {
    hdrWpm: document.getElementById("hdrWpm"),
    hdrAcc: document.getElementById("hdrAcc"),
    hdrStreak: document.getElementById("hdrStreak"),
    levelList: document.getElementById("levelList"),
    miniChart: document.getElementById("miniChart"),
    levelEyebrow: document.getElementById("levelEyebrow"),
    levelTitle: document.getElementById("levelTitle"),
    levelDesc: document.getElementById("levelDesc"),
    liveWpm: document.getElementById("liveWpm"),
    liveAcc: document.getElementById("liveAcc"),
    liveTime: document.getElementById("liveTime"),
    liveErr: document.getElementById("liveErr"),
    typeArea: document.getElementById("typeArea"),
    typeText: document.getElementById("typeText"),
    typeHint: document.getElementById("typeHint"),
    fingerCallout: document.getElementById("fingerCallout"),
    fcSwatch: document.getElementById("fcSwatch"),
    fcLabel: document.getElementById("fcLabel"),
    fcKey: document.getElementById("fcKey"),
    keyboard: document.getElementById("keyboard"),
    handsLegend: document.getElementById("handsLegend"),
    restartBtn: document.getElementById("restartBtn"),
    skipBtn: document.getElementById("skipBtn"),
    resultModal: document.getElementById("resultModal"),
    resultTitle: document.getElementById("resultTitle"),
    resWpm: document.getElementById("resWpm"),
    resAcc: document.getElementById("resAcc"),
    resTime: document.getElementById("resTime"),
    resErr: document.getElementById("resErr"),
    resultNote: document.getElementById("resultNote"),
    retryBtn: document.getElementById("retryBtn"),
    nextLevelBtn: document.getElementById("nextLevelBtn"),
    syncStatus: document.getElementById("syncStatus"),
    settingsBtn: document.getElementById("settingsBtn"),
    settingsModal: document.getElementById("settingsModal"),
    gasUrlInput: document.getElementById("gasUrlInput"),
    testConnBtn: document.getElementById("testConnBtn"),
    saveGasBtn: document.getElementById("saveGasBtn"),
    connStatus: document.getElementById("connStatus"),
    closeSettingsBtn: document.getElementById("closeSettingsBtn"),
  };
}

/* ============================================================
   KEYBOARD RENDER
   ============================================================ */
function renderKeyboard(){
  els.keyboard.innerHTML = "";
  KEY_ROWS.forEach(row => {
    const rowEl = document.createElement("div");
    rowEl.className = "kb-row";
    row.forEach(k => {
      const [char, finger, extra] = k;
      const isHome = extra === true;
      const widthClass = (typeof extra === "string") ? extra : "";
      const keyEl = document.createElement("div");
      keyEl.className = `key f-${finger} ${widthClass} ${isHome ? "home-marker" : ""}`.trim();
      keyEl.style.borderBottomColor = `var(--f-${finger})`;
      keyEl.dataset.key = char;
      keyEl.dataset.finger = finger;
      keyEl.textContent = char === "space" ? "" : char.toUpperCase();
      rowEl.appendChild(keyEl);
    });
    els.keyboard.appendChild(rowEl);
  });
}

function renderLegend(){
  const hands = [
    ["lp","Left Pinky"], ["lr","Left Ring"], ["lm","Left Middle"], ["li","Left Index"],
    ["ri","Right Index"], ["rm","Right Middle"], ["rr","Right Ring"], ["rp","Right Pinky"]
  ];
  els.handsLegend.innerHTML = hands.map(([f,name]) =>
    `<span class="hl-item"><span class="hl-dot" style="background:var(--f-${f})"></span>${name}</span>`
  ).join("");
}

function highlightKey(char){
  els.keyboard.querySelectorAll(".key").forEach(k => k.classList.remove("active-target"));
  const lookup = char === " " ? "space" : char.toLowerCase();
  const keyEl = els.keyboard.querySelector(`.key[data-key="${cssEscape(lookup)}"]`);
  if(keyEl){
    keyEl.classList.add("active-target");
    const finger = keyEl.dataset.finger;
    els.fcSwatch.style.background = `var(--f-${finger})`;
    els.fcLabel.textContent = FINGER_NAMES[finger];
    els.fcKey.textContent = lookup === "space" ? "SPACE" : lookup.toUpperCase();
  }
}
function cssEscape(s){ return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

/* ============================================================
   LEVEL LIST / SIDEBAR
   ============================================================ */
function isLevelUnlocked(idx){
  if(idx === 0) return true;
  const prevId = LEVELS[idx-1].id;
  return !!state.completed[prevId];
}
function firstIncompleteLevelIdx(){
  for(let i=0;i<LEVELS.length;i++){
    if(!state.completed[LEVELS[i].id]) return i;
  }
  return LEVELS.length - 1;
}
function renderLevelList(){
  els.levelList.innerHTML = "";
  LEVELS.forEach((lvl, idx) => {
    const unlocked = isLevelUnlocked(idx);
    const done = !!state.completed[lvl.id];
    const item = document.createElement("div");
    item.className = `level-item ${idx===state.levelIdx?"active":""} ${done?"done":""} ${!unlocked?"locked":""}`;
    const numEl = document.createElement("div");
    numEl.className = "level-num";
    numEl.textContent = done ? "" : String(lvl.id).padStart(2,"0");
    const nameEl = document.createElement("div");
    nameEl.className = "level-name";
    nameEl.textContent = lvl.title;
    item.appendChild(numEl);
    item.appendChild(nameEl);
    if(done){
      const bestEl = document.createElement("div");
      bestEl.className = "level-best";
      bestEl.textContent = `${state.completed[lvl.id].bestWpm} WPM`;
      item.appendChild(bestEl);
    }
    if(unlocked){
      item.addEventListener("click", () => goToLevel(idx));
    }
    els.levelList.appendChild(item);
  });
}

function renderMiniChart(){
  const recent = state.history.slice(-7);
  if(recent.length === 0){
    els.miniChart.innerHTML = `<div class="mini-empty">Abhi tak koi attempt nahi</div>`;
    return;
  }
  const max = Math.max(...recent.map(h => h.wpm), 10);
  els.miniChart.innerHTML = recent.map(h => {
    const h_pct = Math.max(6, Math.round((h.wpm / max) * 48));
    return `<div class="mini-bar" style="height:${h_pct}px" title="${h.wpm} WPM"></div>`;
  }).join("");
}

function renderHeaderStreak(){
  const dates = [...new Set(state.history.map(h => h.date.slice(0,10)))].sort();
  let streak = 0;
  if(dates.length){
    let cursor = new Date();
    for(let i=dates.length-1;i>=0;i--){
      const d = new Date(dates[i]);
      const diffDays = Math.round((cursor - d) / 86400000);
      if(diffDays <= 1){
        streak++;
        cursor = d;
      } else break;
    }
  }
  els.hdrStreak.textContent = streak;
}

/* ============================================================
   LEVEL FLOW
   ============================================================ */
function goToLevel(idx){
  state.levelIdx = idx;
  const lvl = LEVELS[idx];
  els.levelEyebrow.textContent = `STAGE ${String(lvl.id).padStart(2,"0")} / ${LEVELS.length}`;
  els.levelTitle.textContent = lvl.title;
  els.levelDesc.textContent = lvl.desc;
  els.skipBtn.textContent = (idx < LEVELS.length-1 && isLevelUnlocked(idx+1)) ? "Agla Stage →" : "Agla Stage 🔒";
  resetLevel();
  renderLevelList();
}

function resetLevel(){
  const lvl = LEVELS[state.levelIdx];
  state.text = buildPracticeText(lvl);
  state.typedIndex = 0;
  state.errors = 0;
  state.startTime = null;
  state.finished = false;
  renderTypeText();
  els.typeHint.classList.remove("hide");
  updateLiveStats();
  highlightKey(state.text[0]);
  els.typeArea.focus();
}

function renderTypeText(){
  const frag = document.createDocumentFragment();
  [...state.text].forEach((ch, i) => {
    const span = document.createElement("span");
    span.className = "ch pending";
    span.textContent = ch;
    frag.appendChild(span);
  });
  els.typeText.innerHTML = "";
  els.typeText.appendChild(frag);
  markCurrent();
}

function markCurrent(){
  const spans = els.typeText.children;
  if(spans[state.typedIndex]) spans[state.typedIndex].classList.add("current");
}

/* ============================================================
   TYPING ENGINE
   ============================================================ */
function bindEvents(){
  els.typeArea.addEventListener("click", () => els.typeArea.focus());
  document.addEventListener("keydown", handleKeydown);

  els.restartBtn.addEventListener("click", resetLevel);
  els.skipBtn.addEventListener("click", () => {
    const nextIdx = state.levelIdx + 1;
    if(nextIdx < LEVELS.length && isLevelUnlocked(nextIdx)) goToLevel(nextIdx);
  });
  els.retryBtn.addEventListener("click", () => { closeModal(els.resultModal); resetLevel(); });
  els.nextLevelBtn.addEventListener("click", () => {
    closeModal(els.resultModal);
    const nextIdx = state.levelIdx + 1;
    if(nextIdx < LEVELS.length) goToLevel(nextIdx); else resetLevel();
  });

  els.settingsBtn.addEventListener("click", () => openModal(els.settingsModal));
  els.closeSettingsBtn.addEventListener("click", () => closeModal(els.settingsModal));
  els.testConnBtn.addEventListener("click", testGasConnection);
  els.saveGasBtn.addEventListener("click", () => {
    setGasUrl(els.gasUrlInput.value.trim());
    els.connStatus.textContent = "Saved ✓ ab progress sync hoga.";
    els.connStatus.className = "conn-status ok";
    setTimeout(() => closeModal(els.settingsModal), 900);
  });

  [els.resultModal, els.settingsModal].forEach(modal => {
    modal.addEventListener("click", (e) => { if(e.target === modal) closeModal(modal); });
  });
}

function openModal(m){ m.classList.add("show"); }
function closeModal(m){ m.classList.remove("show"); }

function handleKeydown(e){
  if(els.resultModal.classList.contains("show") || els.settingsModal.classList.contains("show")) return;
  if(document.activeElement !== els.typeArea) return;
  if(state.finished) return;

  if(e.key === "Backspace"){
    e.preventDefault();
    if(state.typedIndex > 0){
      const spans = els.typeText.children;
      spans[state.typedIndex].classList.remove("current");
      state.typedIndex--;
      const prev = spans[state.typedIndex];
      prev.classList.remove("correct","incorrect");
      prev.classList.add("pending");
      markCurrent();
      highlightKey(state.text[state.typedIndex]);
    }
    return;
  }

  if(e.key.length !== 1) return; // ignore Shift/Ctrl/Enter/Arrow etc.
  e.preventDefault();

  if(state.startTime === null){
    state.startTime = Date.now();
    els.typeHint.classList.add("hide");
  }

  const spans = els.typeText.children;
  const expected = state.text[state.typedIndex];
  const cur = spans[state.typedIndex];
  cur.classList.remove("current");

  if(e.key === expected){
    cur.classList.remove("pending");
    cur.classList.add("correct");
  } else {
    cur.classList.remove("pending");
    cur.classList.add("incorrect");
    state.errors++;
  }

  state.typedIndex++;

  if(state.typedIndex >= state.text.length){
    finishLevel();
    return;
  }

  markCurrent();
  highlightKey(state.text[state.typedIndex]);
  updateLiveStats();
}

/* ============================================================
   STATS
   ============================================================ */
function computeStats(){
  const elapsedSec = state.startTime ? (Date.now() - state.startTime) / 1000 : 0;
  const correctChars = state.typedIndex - state.errors;
  const minutes = Math.max(elapsedSec / 60, 1/60);
  const wpm = Math.max(0, Math.round((correctChars / 5) / minutes));
  const totalAttempts = state.typedIndex;
  const accuracy = totalAttempts > 0 ? Math.round((correctChars / totalAttempts) * 100) : 100;
  return { wpm, accuracy: Math.max(0, Math.min(100, accuracy)), elapsedSec, errors: state.errors };
}

function updateLiveStats(){
  const s = computeStats();
  els.liveWpm.textContent = s.wpm;
  els.liveAcc.textContent = s.accuracy;
  els.liveTime.textContent = s.elapsedSec.toFixed(1) + "s";
  els.liveErr.textContent = s.errors;
  els.hdrWpm.textContent = s.wpm;
  els.hdrAcc.textContent = s.accuracy + "%";
}

/* ============================================================
   FINISH LEVEL
   ============================================================ */
function finishLevel(){
  state.finished = true;
  const s = computeStats();
  updateLiveStats();

  const lvl = LEVELS[state.levelIdx];
  const prevBest = state.completed[lvl.id];
  const isNewBest = !prevBest || s.wpm > prevBest.bestWpm;

  state.completed[lvl.id] = {
    bestWpm: isNewBest ? s.wpm : prevBest.bestWpm,
    bestAcc: isNewBest ? s.accuracy : prevBest.bestAcc,
    timesDone: (prevBest ? prevBest.timesDone : 0) + 1
  };

  const attempt = {
    date: new Date().toISOString(),
    levelId: lvl.id,
    levelTitle: lvl.title,
    wpm: s.wpm,
    accuracy: s.accuracy,
    errors: s.errors,
    timeTaken: Math.round(s.elapsedSec)
  };
  state.history.push(attempt);
  saveProgress();
  renderLevelList();
  renderMiniChart();
  renderHeaderStreak();

  els.resultTitle.textContent = isNewBest ? "Naya Best Score! 🎉" : "Level Complete!";
  els.resWpm.textContent = s.wpm;
  els.resAcc.textContent = s.accuracy + "%";
  els.resTime.textContent = Math.round(s.elapsedSec) + "s";
  els.resErr.textContent = s.errors;
  els.resultNote.textContent = s.accuracy < 85
    ? "Accuracy thodi kam hai — speed se pehle sahi key dabana zaroori hai. Isi level ko dobara try karo."
    : (s.wpm < 20 ? "Accuracy achhi hai! Ab dheere dheere finger memory ban rahi hai, speed apne aap badhegi."
                   : "Bahut badhiya raftaar! Agle stage ke liye taiyaar ho.");
  els.nextLevelBtn.disabled = state.levelIdx >= LEVELS.length - 1;
  els.syncStatus.textContent = "";
  openModal(els.resultModal);

  syncAttemptToSheet(attempt);
}

/* ============================================================
   GOOGLE SHEET SYNC
   ============================================================ */
async function syncAttemptToSheet(attempt){
  const url = getGasUrl();
  if(!url){
    els.syncStatus.textContent = "Google Sheet connected nahi hai — sirf is device par save hua (⚙ icon se connect karein).";
    return;
  }
  els.syncStatus.textContent = "Sheet mein save ho raha hai...";
  try{
    // text/plain avoids a CORS preflight against Apps Script
    await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(attempt)
    });
    els.syncStatus.textContent = "Google Sheet mein save ho gaya ✓";
  }catch(err){
    console.warn("sheet sync failed", err);
    els.syncStatus.textContent = "Sheet sync fail hui — progress phir bhi is device par safe hai.";
  }
}

async function testGasConnection(){
  const url = els.gasUrlInput.value.trim();
  if(!url){
    els.connStatus.textContent = "Pehle URL daalein.";
    els.connStatus.className = "conn-status err";
    return;
  }
  els.connStatus.textContent = "Test kiya ja raha hai...";
  els.connStatus.className = "conn-status";
  try{
    await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ date:new Date().toISOString(), levelId:0, levelTitle:"Connection Test", wpm:0, accuracy:0, errors:0, timeTaken:0 })
    });
    els.connStatus.textContent = "Connection theek hai ✓ apna Google Sheet check karein.";
    els.connStatus.className = "conn-status ok";
  }catch(err){
    els.connStatus.textContent = "Connect nahi ho paaya. URL aur deployment access double check karein.";
    els.connStatus.className = "conn-status err";
  }
}

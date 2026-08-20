# KeySetu — Typing Trainer (Google Sheet ke saath)

Ye ek complete typing tutor hai jo beginner se advance tak 10 stages mein le jaata hai —
finger-wise color-coded keyboard ke saath, taaki tumhari ungliyan sahi keys par set ho jaayein.
Progress (WPM, accuracy, errors) automatically tumhare apne Google Sheet mein save ho sakti hai.

## Files kya kaam karti hain

| File | Kaam |
|---|---|
| `index.html` | App ka structure |
| `style.css` | Design |
| `lessons.js` | 10 stages ka data + practice text generator |
| `script.js` | Typing engine, stats, keyboard, Google Sheet sync |
| `Code.gs` | Google Apps Script backend (Sheet ke andar paste karni hai) |

App **bina Google Sheet ke bhi kaam karti hai** — progress tab browser mein (localStorage) save
hoti rahegi. Google Sheet connect karna optional hai, lekin agar phone/laptop badalna ho ya
progress ka backup chahiye to zaroor karein.

---

## Step 1 — App ko chalayein

`index.html` ko double-click karke seedha browser mein khol sakte ho. Best experience ke liye,
isi folder ko kisi bhi free static hosting (GitHub Pages, Netlify, Vercel) par upload kar do —
phir ye ek real website ban jaayegi jise phone se bhi khol sakte ho.

---

## Step 2 — Google Sheet Backend Banayein (5 minute)

1. **Naya Google Sheet banayein**: [sheets.google.com](https://sheets.google.com) par jaakar
   "Blank spreadsheet" banayein. Naam de do — jaise "KeySetu Progress".

2. **Apps Script kholein**: Menu mein `Extensions > Apps Script` par click karein.

3. Jo default code (`function myFunction() {}`) already likha hai, use **poora select
   karke delete** kar dein. Uski jagah is repo ki `Code.gs` file ka poora content **copy-paste**
   kar dein.

4. Upar `Save` icon (💾) par click karein (ya Ctrl+S).

5. **Deploy karein**: Top-right `Deploy > New deployment` par click karein.
   - Gear icon (⚙) par click karke type mein **"Web app"** chunein.
   - "Execute as": **Me**
   - "Who has access": **Anyone**
   - `Deploy` button dabayein. Google shayad permissions maangega — apna Google account
     select karke "Advanced > Go to [project name] (unsafe)" se allow kar dein
     (ye normal hai, kyunki ye script khud aapki hai).

6. Deploy hone ke baad ek **Web app URL** milega, kuch aisa:
   `https://script.google.com/macros/s/AKfycb.../exec`
   Isse **copy** kar lein.

---

## Step 3 — App mein connect karein

1. App kholo, top-right ⚙ (settings) icon par click karo.
2. Jo URL copy kiya tha, use paste karo.
3. **"Connection Test Karein"** dabao — agar sab sahi hai to "Connection theek hai ✓" dikhega,
   aur Sheet mein ek test row aa jaayegi.
4. **"Save Karein"** dabao.

Ab jab bhi koi level complete hoga, uski WPM, accuracy, errors, aur time automatically
uss Google Sheet ki `Progress` tab mein ek nayi row ban ke save ho jayega — chahe tum
kisi bhi device se practice karo (same URL use karo to).

---

## Tips — Speed Kaise Badhegi

- Roz sirf **10-15 minute** consistent practice, lambi sessions se zyada kaam karta hai.
- Pehle **accuracy** par dhyaan do, speed apne aap aayegi jab fingers ko keys yaad ho jayengi.
- Neeche keyboard mat dekho — jab bhi lagे ki dekhna pad raha hai, wahi sabse zyada practice
  wali key hai.
- Stage 1-5 tak accuracy 90%+ hone ke baad hi agle stage par jao, jaldi mat karo.

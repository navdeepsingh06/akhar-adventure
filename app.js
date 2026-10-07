const L=[
// [letter, gurmukhi name, romanized, sound hint, emoji, word, english]
["ੳ","ਊੜਾ","ura","carries the 'u' and 'o' sounds","🦉","ਉੱਲੂ","owl"],
["ਅ","ਐੜਾ","aira","carries the 'a' sounds","🥭","ਅੰਬ","mango"],
["ੲ","ਈੜੀ","iri","carries the 'i' and 'e' sounds","🧱","ਇੱਟ","brick"],
["ਸ","ਸੱਸਾ","sassa","'s' as in sun","🍎","ਸੇਬ","apple"],
["ਹ","ਹਾਹਾ","haha","'h' as in hat","🐘","ਹਾਥੀ","elephant"],
["ਕ","ਕੱਕਾ","kakka","'k' as in kite","🕊️","ਕਬੂਤਰ","pigeon"],
["ਖ","ਖੱਖਾ","khakha","'k' with a puff of air","🐇","ਖਰਗੋਸ਼","rabbit"],
["ਗ","ਗੱਗਾ","gagga","'g' as in goat","🐄","ਗਾਂ","cow"],
["ਘ","ਘੱਗਾ","ghagga","deep 'g', said with a tone","🏠","ਘਰ","house"],
["ਙ","ਙੰਙਾ","nganga","'ng' as in sing (a rare letter)","","",""],
["ਚ","ਚੱਚਾ","chachcha","'ch' as in chair","🥄","ਚਮਚਾ","spoon"],
["ਛ","ਛੱਛਾ","chhachha","'ch' with a puff of air","☂️","ਛੱਤਰੀ","umbrella"],
["ਜ","ਜੱਜਾ","jajja","'j' as in jam","👞","ਜੁੱਤੀ","shoe"],
["ਝ","ਝੱਜਾ","jhajja","deep 'j', said with a tone","🚩","ਝੰਡਾ","flag"],
["ਞ","ਞੰਞਾ","nyanya","'ny' sound (a rare letter)","","",""],
["ਟ","ਟੈਂਕਾ","tainka","hard 't', tongue curls back","🍅","ਟਮਾਟਰ","tomato"],
["ਠ","ਠੱਠਾ","thattha","hard 't' with a puff of air","🥶","ਠੰਢ","cold"],
["ਡ","ਡੱਡਾ","dadda","hard 'd', tongue curls back","🐸","ਡੱਡੂ","frog"],
["ਢ","ਢੱਡਾ","dhadda","deep hard 'd', said with a tone","🥁","ਢੋਲ","drum"],
["ਣ","ਣਾਣਾ","nana","hard 'n', lives inside words like ਪਾਣੀ","💧","ਪਾਣੀ","water"],
["ਤ","ਤੱਤਾ","tatta","soft 't', tongue on teeth","🦋","ਤਿਤਲੀ","butterfly"],
["ਥ","ਥੱਥਾ","thatha","soft 't' with a puff of air","🍽️","ਥਾਲੀ","plate"],
["ਦ","ਦੱਦਾ","dadda","soft 'd', tongue on teeth","🦷","ਦੰਦ","tooth"],
["ਧ","ਧੱਦਾ","dhadda","deep soft 'd', said with a tone","☀️","ਧੁੱਪ","sunshine"],
["ਨ","ਨੱਨਾ","nanna","'n' as in nose","👃","ਨੱਕ","nose"],
["ਪ","ਪੱਪਾ","pappa","'p' as in pen","🪁","ਪਤੰਗ","kite"],
["ਫ","ਫੱਫਾ","phaphpha","'p' with a puff of air","🌸","ਫੁੱਲ","flower"],
["ਬ","ਬੱਬਾ","babba","'b' as in ball","🐱","ਬਿੱਲੀ","cat"],
["ਭ","ਭੱਬਾ","bhabba","deep 'b', said with a tone","🐻","ਭਾਲੂ","bear"],
["ਮ","ਮੱਮਾ","mamma","'m' as in moon","🦚","ਮੋਰ","peacock"],
["ਯ","ਯੱਯਾ","yayya","'y' as in yes","🧘","ਯੋਗਾ","yoga"],
["ਰ","ਰਾਰਾ","rara","rolled 'r'","🚂","ਰੇਲ","train"],
["ਲ","ਲੱਲਾ","lalla","'l' as in lion","🦊","ਲੂੰਬੜੀ","fox"],
["ਵ","ਵਾਵਾ","vava","between 'v' and 'w'","💇","ਵਾਲ","hair"],
["ੜ","ੜਾੜਾ","rhara","flapped 'r', lives inside words like ਪਹਾੜ","⛰️","ਪਹਾੜ","mountain"]
].map(([ch,gname,roman,hint,pic,word,en],i)=>({i,ch,gname,roman,hint,pic,word,en,row:Math.floor(i/5)}));

// The seven stops on the road through the village, one per paintee row.
const STOPS=[
  {pa:"ਸਰ੍ਹੋਂ ਦੇ ਖੇਤ",en:"Mustard Fields",ic:"🌼",c:"#D9A400",soft:"#FFF3C4"},
  {pa:"ਪਿੰਡ ਦਾ ਖੂਹ",en:"The Village Well",ic:"🪣",c:"#1F6FD1",soft:"#E1EEFF"},
  {pa:"ਅੰਬਾਂ ਦਾ ਬਾਗ",en:"Mango Grove",ic:"🥭",c:"#2E9B5F",soft:"#E3F4EA"},
  {pa:"ਪਤੰਗਾਂ ਵਾਲੀ ਛੱਤ",en:"Kite Rooftop",ic:"🪁",c:"#E0287A",soft:"#FDE3EF"},
  {pa:"ਮੇਲਾ",en:"The Village Fair",ic:"🎡",c:"#FF7A1A",soft:"#FFE9D9"},
  {pa:"ਦਰਿਆ",en:"The River",ic:"🛶",c:"#17A3A0",soft:"#DDF5F4"},
  {pa:"ਭੰਗੜਾ",en:"Bhangra Stage",ic:"🥁",c:"#7B3FC4",soft:"#EEE4FA"}
];

/* ---------- progress (per-viewer, optional) ---------- */
let P={seen:{},traced:{},won:{},stickers:{},muted:false};
try{const s=JSON.parse(localStorage.getItem("akhar-progress")||"null");if(s)P=Object.assign(P,s)}catch(e){}
const save=()=>{try{localStorage.setItem("akhar-progress",JSON.stringify(P))}catch(e){}};
const starsFor=ch=>(P.seen[ch]?1:0)+(P.traced[ch]?1:0)+(P.won[ch]?1:0);
const totalStars=()=>L.reduce((n,l)=>n+starsFor(l.ch),0);
const $=id=>document.getElementById(id);
function mark(kind,ch,fromEl){
  if(P[kind][ch])return false;
  P[kind][ch]=1;save();
  if(fromEl)flyStar(fromEl);else renderStars();
  return true;
}
function renderStars(){
  $("starCount").textContent=totalStars();
  $("stickerCount").textContent=Object.keys(P.stickers).length;
}

/* ---------- sound: Punjabi voice + little synthesized effects ---------- */
let paVoice=null;
function pickVoice(){const v=speechSynthesis.getVoices();paVoice=v.find(x=>/^pa(-|_|$)/i.test(x.lang))||null}
if("speechSynthesis" in window){pickVoice();speechSynthesis.onvoiceschanged=pickVoice}
let warned=false;
function speak(text){
  if(!("speechSynthesis" in window)||!paVoice){if(!warned){toast("This device has no Punjabi voice yet. Ask a grown-up to say it with you!");warned=true}return false}
  speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.voice=paVoice;u.lang=paVoice.lang;u.rate=.8;speechSynthesis.speak(u);return true
}
let AC=null;
function tone(freq,dur=.12,type="sine",vol=.18,delay=0,slide=0){
  if(P.muted)return;
  try{
    AC=AC||new (window.AudioContext||window.webkitAudioContext)();
    const t=AC.currentTime+delay,o=AC.createOscillator(),g=AC.createGain();
    o.type=type;o.frequency.setValueAtTime(freq,t);if(slide)o.frequency.exponentialRampToValueAtTime(slide,t+dur);
    g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.001,t+dur);
    o.connect(g).connect(AC.destination);o.start(t);o.stop(t+dur+.02);
  }catch(e){}
}
const sfx={
  tap:()=>tone(660,.07,"triangle",.12),
  pop:()=>{tone(900,.08,"square",.08,0,200);tone(1400,.1,"sine",.12,.03)},
  right:()=>{tone(784,.12,"triangle");tone(1047,.18,"triangle",.18,.1)},
  wrong:()=>tone(220,.22,"sawtooth",.07,0,150),
  flip:()=>tone(520,.05,"triangle",.1),
  star:()=>[1047,1319,1568].forEach((f,i)=>tone(f,.15,"sine",.12,i*.07)),
  tada:()=>[523,659,784,1047,784,1047].forEach((f,i)=>tone(f,.2,"triangle",.14,i*.1))
};
function setSoundBtn(){const b=$("soundBtn");b.textContent=P.muted?"🔇":"🔊";b.setAttribute("aria-pressed",String(!P.muted));b.setAttribute("aria-label",P.muted?"Sound effects off":"Sound effects on")}
$("soundBtn").onclick=()=>{P.muted=!P.muted;save();setSoundBtn();sfx.tap()};

function toast(msg){const t=$("toast");t.textContent=msg;t.hidden=false;clearTimeout(t._h);t._h=setTimeout(()=>t.hidden=true,3400)}
const reduced=()=>matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Mor the peacock ---------- */
function morSVG(){
  const feathers=[-80,-55,-28,0,28,55,80].map(a=>`<g transform="rotate(${a} 60 92)"><path d="M60 92 C46 70 46 36 60 22 C74 36 74 70 60 92Z" fill="#2E9B5F"/><circle cx="60" cy="36" r="9" fill="#FFC928"/><circle cx="60" cy="36" r="6.5" fill="#17B3B0"/><circle cx="60" cy="37" r="3.5" fill="#23308F"/></g>`).join("");
  return `<svg class="mor" viewBox="0 0 120 124" role="img" aria-label="Mor the peacock"><g class="whole">
    <g class="tail">${feathers}</g>
    <path d="M52 112v8m-5 0h10M68 112v8m-5 0h10" stroke="#FF7A1A" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="60" cy="92" rx="20" ry="23" fill="#1F6FD1"/>
    <ellipse cx="60" cy="97" rx="11" ry="13" fill="#4D93E6"/>
    <path d="M48 70 Q60 80 72 70 L70 60 Q60 66 50 60Z" fill="#1F6FD1"/>
    <g stroke="#1F6FD1" stroke-width="2"><path d="M60 40 52 26M60 40V22M60 40l8-14"/></g>
    <circle cx="52" cy="25" r="3.5" fill="#17B3B0"/><circle cx="60" cy="21" r="3.5" fill="#17B3B0"/><circle cx="68" cy="25" r="3.5" fill="#17B3B0"/>
    <circle cx="60" cy="52" r="16" fill="#1F6FD1"/>
    <ellipse cx="53" cy="50" rx="5.5" ry="6.5" fill="#fff"/><ellipse cx="67" cy="50" rx="5.5" ry="6.5" fill="#fff"/>
    <circle cx="54" cy="51" r="3" fill="#2A1B3D"/><circle cx="66" cy="51" r="3" fill="#2A1B3D"/>
    <circle cx="55" cy="49.5" r="1" fill="#fff"/><circle cx="67" cy="49.5" r="1" fill="#fff"/>
    <rect class="lid" x="46" y="43" width="28" height="14" fill="#1F6FD1"/>
    <path d="M56 57 L64 57 L60 63Z" fill="#FFB020"/>
    <circle cx="47" cy="58" r="3" fill="#FF8FB8" opacity=".8"/><circle cx="73" cy="58" r="3" fill="#FF8FB8" opacity=".8"/>
  </g></svg>`;
}
function cheer(stage){const m=stage&&stage.querySelector(".mor");if(!m)return;m.classList.remove("happy");void m.offsetWidth;m.classList.add("happy")}

/* ---------- views ---------- */
const $home=$("home"),$letter=$("letter"),$game=$("game");
let cleanup=null;
function show(el){if(cleanup){cleanup();cleanup=null}[$home,$letter,$game].forEach(x=>x.hidden=x!==el);window.scrollTo({top:0})}

const LINES=[
  ["ਸਤ ਸ੍ਰੀ ਅਕਾਲ!","I'm Mor. Walk the road with me and meet all 35 letters."],
  ["ਆਜਾ, ਚੱਲੀਏ!","Come on, let's go! Tap a letter stone to start."],
  ["ਸ਼ਾਬਾਸ਼!","Every letter you trace puts a star in your pocket."],
  ["ਮੇਲਾ ਲੱਗਾ!","Finish a game at each stop to win its sticker."]
];
let lineN=0;
function sayLine(){
  const seen=Object.keys(P.seen).length;
  const [pa,en]=seen===0?LINES[0]:LINES[lineN%LINES.length];
  const b=$("bubble");b.style.animation="none";void b.offsetWidth;b.style.animation="";
  b.innerHTML=`<span class="pa">${pa}</span>${en}`;
}
function nextLetter(){return L.find(l=>starsFor(l.ch)<3)||L[0]}

function renderHome(){
  renderStars();
  const met=Object.keys(P.seen).length;
  $("metCount").textContent=`${met}/35`;$("metBar").style.width=met/35*100+"%";
  const nl=nextLetter();
  $("continueBtn").innerHTML=`${met?"Keep going":"Start"}: <b>${nl.ch}</b> ▶`;
  $("continueBtn").onclick=()=>{sfx.tap();openLetter(nl.i)};
  sayLine();
  const j=$("journey");j.innerHTML="";
  STOPS.forEach((s,r)=>{
    if(r)j.insertAdjacentHTML("beforeend",`<li aria-hidden="true" style="display:contents"><svg class="road" viewBox="0 0 600 46" preserveAspectRatio="none"><path d="${r%2?"M80 0 C80 30 520 16 520 46":"M520 0 C520 30 80 16 80 46"}"/></svg></li>`);
    const rowL=L.filter(l=>l.row===r),stars=rowL.reduce((n,l)=>n+starsFor(l.ch),0),got=!!P.stickers[r];
    const li=document.createElement("li");
    li.className="stop"+(r%2?" r":"")+(got?" got":"");li.style.setProperty("--c",s.c);li.style.setProperty("--c-soft",s.soft);
    li.innerHTML=`<div class="stop-head"><div class="stop-badge" aria-hidden="true">${s.ic}</div>
      <div class="stop-name"><div class="n">Stop ${r+1}${got?" · sticker won":""}</div><div class="t">${s.pa}</div><div class="e">${s.en}</div></div></div>
      <div class="stones"></div>
      <div class="stop-foot"><div class="rb" title="${stars} of 15 stars"><i style="width:${stars/15*100}%"></i></div><button class="play">Play ▶</button></div>`;
    const st=li.querySelector(".stones");
    rowL.forEach(l=>{
      const b=document.createElement("button"),n=starsFor(l.ch);
      b.className="stone"+(n===3?" done":"")+(l===nl&&met?" next":"");
      b.setAttribute("aria-label",`${l.roman}, ${n} of 3 stars`);
      b.innerHTML=`${l.ch}<span class="sp" aria-hidden="true">${[0,1,2].map(k=>`<i class="${k<n?"on":""}">★</i>`).join("")}</span>`;
      b.onclick=()=>{sfx.tap();openLetter(l.i)};st.appendChild(b);
    });
    li.querySelector(".play").onclick=()=>{sfx.tap();pickGame(r)};
    j.appendChild(li);
  });
}
function goHome(){show($home);renderHome()}

/* ---------- letter ---------- */
function markWord(l){return l.word?l.word.replace(l.ch,`<b>${l.ch}</b>`):""}
const PENS=[["#23308F","Qalam blue"],["#E0287A","Phulkari pink"],["#2E9B5F","Field green"],["#FF7A1A","Kesri orange"],["rainbow","Rainbow"]];
let penIx=0;
function openLetter(i){
  const l=L[i],s=STOPS[l.row];
  show($letter);
  $letter.innerHTML=`
    <div class="topbar"><button class="back" id="back">← The road</button>
      <span class="where">Stop ${l.row+1} · ${s.en} · ${i%5+1} of 5</span>
      <div class="nav"><button id="prev" aria-label="Previous letter" ${i===0?"disabled":""}>‹</button><button id="next" aria-label="Next letter" ${i===34?"disabled":""}>›</button></div></div>
    <div class="hero" style="--c:${s.c}"><div class="blob"><div class="big">${l.ch}</div></div>
      <div class="meta"><div class="name">${l.gname}</div><div class="roman">says “${l.roman}”</div><div class="hint">${l.hint}</div>
      <button class="hear" id="hear">🔊 Hear it</button></div></div>
    ${l.word?`<button class="flip" id="flip" aria-label="Picture card. Tap to turn it over.">
        <div class="flip-in">
          <div class="face front"><span class="pic" aria-hidden="true">${l.pic}</span><div><div class="fq">What is this?</div><div class="tap">Tap the card to turn it over</div></div></div>
          <div class="face back"><span class="pic" aria-hidden="true">${l.pic}</span><div><div class="pw">${markWord(l)}</div><div class="en">${l.en}</div></div></div>
        </div></button>`
      :`<div class="face front" style="border-style:solid"><span class="pic" aria-hidden="true">✨</span><div><div class="fq">A rare letter</div><div class="tap">You will hardly ever see ${l.ch} in words, but it still has its place in the ਪੈਂਤੀ.</div></div></div>`}
    <div class="takhti-wrap">
      <h3>Write it on your ਫੱਟੀ</h3>
      <p>Kids in Punjab practised on a wooden ਫੱਟੀ (takhti). Follow the faint letter with your finger and fill it in.</p>
      <div class="pens" role="group" aria-label="Pen colour">${PENS.map(([c,n],k)=>`<button class="pen${c==="rainbow"?" rainbow":""}" style="--p:${c}" data-k="${k}" aria-label="${n}" aria-pressed="${k===penIx}"></button>`).join("")}</div>
      <div class="takhti"><div class="pad"><canvas id="guide"></canvas><canvas id="ink" tabindex="0" aria-label="Tracing area"></canvas></div></div>
      <div class="meter" aria-hidden="true"><i id="meter"></i></div>
      <div class="tools"><button id="clear">Wipe the ਫੱਟੀ</button><button id="hearWord">${l.word?"🔊 Hear the word":"🔊 Hear again"}</button></div>
      ${i<34?`<button class="next-letter" id="nextBig">Next letter: <span style="font-family:var(--f-gur)">${L[i+1].ch}</span> ▶</button>`:`<button class="next-letter" id="nextBig">Back to the road ▶</button>`}
    </div>`;
  mark("seen",l.ch,$letter.querySelector(".big"));
  $("back").onclick=()=>{sfx.tap();goHome()};
  $("prev").onclick=()=>{sfx.tap();openLetter(i-1)};
  $("next").onclick=()=>{sfx.tap();openLetter(i+1)};
  $("nextBig").onclick=()=>{sfx.tap();i<34?openLetter(i+1):goHome()};
  $("hear").onclick=()=>speak(l.gname);
  $("hearWord").onclick=()=>speak(l.word||l.gname);
  const f=$("flip");if(f)f.onclick=()=>{f.classList.toggle("on");sfx.flip();if(f.classList.contains("on"))speak(l.word)};
  $letter.querySelectorAll(".pen").forEach(b=>b.onclick=()=>{penIx=+b.dataset.k;sfx.tap();$letter.querySelectorAll(".pen").forEach(x=>x.setAttribute("aria-pressed",String(x===b)))});
  setupTrace(l);
}

/* ---------- tracing on the takhti ---------- */
function setupTrace(l){
  const g=$("guide"),k=$("ink"),pad=g.parentElement;
  const dpr=Math.min(window.devicePixelRatio||1,2),S=Math.round(pad.clientWidth*dpr);
  [g,k].forEach(c=>{c.width=S;c.height=S});
  const gx=g.getContext("2d"),kx=k.getContext("2d");
  const font=`800 ${S*.64}px "Baloo Paaji 2","Noto Sans Gurmukhi",sans-serif`;
  const drawGuide=()=>{gx.clearRect(0,0,S,S);gx.font=font;gx.textAlign="center";gx.textBaseline="middle";
    gx.fillStyle="rgba(122,68,27,.18)";gx.fillText(l.ch,S/2,S*.58);
    gx.setLineDash([S*.02,S*.025]);gx.lineWidth=Math.max(2,S*.006);gx.strokeStyle="rgba(122,68,27,.45)";gx.strokeText(l.ch,S/2,S*.58)};
  const m=document.createElement("canvas");m.width=m.height=S;const mx=m.getContext("2d",{willReadFrequently:true});
  let maskIdx=[];
  const buildMask=()=>{mx.clearRect(0,0,S,S);mx.font=font;mx.textAlign="center";mx.textBaseline="middle";mx.fillStyle="#000";mx.fillText(l.ch,S/2,S*.58);
    const d=mx.getImageData(0,0,S,S).data;maskIdx=[];for(let p=3;p<d.length;p+=16)if(d[p]>128)maskIdx.push(p)};
  const ready=()=>{drawGuide();buildMask()};
  ready();if(document.fonts&&document.fonts.load)document.fonts.load(font,l.ch).then(ready).catch(()=>{});
  kx.lineCap=kx.lineJoin="round";kx.lineWidth=S*.08;
  let down=false,last=null,done=!!P.traced[l.ch],hue=0,lastSpark=0;
  const color=()=>{const c=PENS[penIx][0];if(c!=="rainbow")return c;hue=(hue+4)%360;return `hsl(${hue} 85% 52%)`};
  const pos=e=>{const r=k.getBoundingClientRect();return[(e.clientX-r.left)*S/r.width,(e.clientY-r.top)*S/r.height]};
  k.onpointerdown=e=>{down=true;last=pos(e);k.setPointerCapture(e.pointerId);kx.fillStyle=color();kx.beginPath();kx.arc(last[0],last[1],kx.lineWidth/2,0,7);kx.fill()};
  k.onpointermove=e=>{if(!down)return;const p=pos(e);kx.strokeStyle=color();kx.beginPath();kx.moveTo(...last);kx.lineTo(...p);kx.stroke();last=p;
    const now=performance.now();if(now-lastSpark>60){lastSpark=now;spark(e.clientX,e.clientY)}};
  const up=()=>{if(!down)return;down=false;score()};
  k.onpointerup=up;k.onpointercancel=up;
  const meter=$("meter");
  function score(){
    if(!maskIdx.length)return;const d=kx.getImageData(0,0,S,S).data;let hit=0,ink=0;
    for(const p of maskIdx)if(d[p]>0)hit++;
    for(let p=3;p<d.length;p+=16)if(d[p]>0)ink++;
    const cover=hit/maskIdx.length,outside=ink?(ink-hit)/ink:0;
    meter.style.width=Math.min(100,cover/.7*100)+"%";
    if(cover>.7&&outside<.55&&!done){done=true;mark("traced",l.ch,k);celebrate();sfx.tada();toast("ਸ਼ਾਬਾਸ਼! Beautiful writing ⭐")}
  }
  $("clear").onclick=()=>{kx.clearRect(0,0,S,S);meter.style.width="0";sfx.flip()};
}
function spark(x,y){
  if(reduced())return;
  const s=document.createElement("div");s.className="fly";s.textContent="✦";s.style.fontSize="16px";
  s.style.color=["#FFC928","#E0287A","#FF7A1A","#17B3B0"][Math.random()*4|0];document.body.appendChild(s);
  const dx=(Math.random()-.5)*50,dy=-20-Math.random()*30;
  s.animate([{transform:`translate(${x}px,${y}px) scale(1)`,opacity:1},{transform:`translate(${x+dx}px,${y+dy}px) scale(.2)`,opacity:0}],{duration:600,easing:"ease-out"}).onfinish=()=>s.remove();
}
function flyStar(fromEl){
  sfx.star();
  const to=$("starChip").getBoundingClientRect(),fr=fromEl.getBoundingClientRect();
  const done=()=>{renderStars();const c=$("starChip");c.classList.remove("bump");void c.offsetWidth;c.classList.add("bump")};
  if(reduced()){done();return}
  const s=document.createElement("div");s.className="fly";s.textContent="⭐";document.body.appendChild(s);
  const x0=fr.left+fr.width/2-17,y0=fr.top+fr.height/2-17,x1=to.left+to.width/2-17,y1=to.top+to.height/2-17;
  s.animate([{transform:`translate(${x0}px,${y0}px) scale(.4)`},{transform:`translate(${(x0+x1)/2}px,${Math.min(y0,y1)-80}px) scale(1.6) rotate(180deg)`,offset:.45},{transform:`translate(${x1}px,${y1}px) scale(.8) rotate(360deg)`}],{duration:900,easing:"cubic-bezier(.5,0,.5,1)"}).onfinish=()=>{s.remove();done()};
}

/* ---------- game picker ---------- */
function openModal(html){$("sheet").innerHTML=html;$("modal").hidden=false;const c=$("sheet").querySelector(".close");if(c)c.onclick=closeModal}
function closeModal(){$("modal").hidden=true}
$("modal").onclick=e=>{if(e.target.id==="modal")closeModal()};
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("modal").hidden)closeModal()});
function pickGame(r){
  const s=STOPS[r];
  openModal(`<h2>${s.ic} ${s.pa}<small>Stop ${r+1} games · letters ${L.filter(l=>l.row===r).map(l=>l.ch).join(" ")}</small></h2>
    <div class="picks">
      <button class="pick" data-g="balloon"><span class="pi" aria-hidden="true">🎈</span><div><b>Balloon Pop</b><span>Pop the balloon with the letter Mor asks for.</span></div></button>
      <button class="pick" data-g="memory"><span class="pi" aria-hidden="true">🃏</span><div><b>Memory Match</b><span>Turn over cards and match each letter to its picture.</span></div></button>
      <button class="pick" data-g="quiz"><span class="pi" aria-hidden="true">❓</span><div><b>Quick Quiz</b><span>Five questions: find the letter, the picture, the sound.</span></div></button>
    </div><button class="close">Not now</button>`);
  $("sheet").querySelectorAll(".pick").forEach(b=>b.onclick=()=>{sfx.tap();closeModal();({balloon:startBalloon,memory:startMemory,quiz:startQuiz})[b.dataset.g](r)});
}
function openBook(){
  const n=Object.keys(P.stickers).length;
  openModal(`<h2>Sticker book<small>${n} of 7 stickers. Win a game at each stop to fill the book.</small></h2>
    <div class="book">${STOPS.map((s,r)=>`<div class="slot${P.stickers[r]?"":" locked"}"><span class="stk" style="--c:${s.c}">${P.stickers[r]?s.ic:""}</span><span class="pa">${s.pa}</span><span>${s.en}</span></div>`).join("")}</div>
    <button class="close">Close</button>`);
}
$("stickerBtn").onclick=()=>{sfx.tap();openBook()};
$("brand").onclick=()=>{sfx.tap();goHome()};

/* ---------- shared game bits ---------- */
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
function distractors(l,k){return shuffle(L.filter(x=>x.ch!==l.ch&&Math.abs(x.row-l.row)<=1)).slice(0,k)}
function gameTop(title,r){return `<div class="topbar"><button class="back" id="quit">← Stop</button><strong>${STOPS[r].ic} ${title}</strong></div>`}
function progressBar(n,res,t){return `<div class="progress">${Array.from({length:t},(_,i)=>`<i class="${i<n?(res[i]?"ok":"miss"):i===n?"now":""}"></i>`).join("")}</div>`}

function finish(r,got,t,game){
  const s=STOPS[r];let newSticker=false;
  if(got>=4&&!P.stickers[r]){P.stickers[r]=1;save();newSticker=true}
  renderStars();
  const msg=got===t?"ਸ਼ਾਬਾਸ਼! Perfect!":got>=3?"ਵਧੀਆ! Well done!":"ਕੋਈ ਗੱਲ ਨਹੀਂ! Keep going!";
  show($game);
  $game.innerHTML=`<div class="result"><div class="mor-stage" id="resMor">${morSVG()}</div>
    <div class="score" aria-label="${got} of ${t}">${Array.from({length:t},(_,i)=>`<span class="${i<got?"":"off"}" style="animation-delay:${.2+i*.15}s">⭐</span>`).join("")}</div>
    <div class="msg">${msg}</div><p>${game==="memory"?`You matched every pair. ${got} of ${t} stars for quick finding.`:`You got ${got} of ${t} on the first try.`}</p>
    ${newSticker?`<div class="sticker-won"><span class="stk" style="--c:${s.c}">${s.ic}</span><div>New sticker!<br><span style="font-family:var(--f-gur)">${s.pa}</span> is in your book.</div></div>`:""}
    <div class="tools"><button class="cta" id="again">Play again</button>${r<6?`<button id="nextRow">Next stop ▶</button>`:""}<button id="home2">The road</button></div></div>`;
  if(got>=3){celebrate();sfx.tada();cheer($("resMor"))}
  $("again").onclick=()=>({balloon:startBalloon,memory:startMemory,quiz:startQuiz})[game](r);
  const nr=$("nextRow");if(nr)nr.onclick=()=>pickGame(r+1);
  $("home2").onclick=goHome;
}

/* ---------- game 1: balloon pop ---------- */
const BCOL=["#E0287A","#FF7A1A","#2E9B5F","#1F6FD1","#7B3FC4","#17A3A0","#D9A400"];
function startBalloon(r){
  show($game);
  const targets=shuffle(L.filter(l=>l.row===r)),pool=L.filter(x=>Math.abs(x.row-r)<=1);
  let t=0,missed=false,res=[],spawnN=0,timer=null,alive=true;
  $game.innerHTML=`${gameTop("Balloon Pop",r)}<div class="gamehead"><div id="bprog"></div>
    <div class="target" id="target"></div></div>
    <div class="balloon-sky" id="bsky"><div class="hills" aria-hidden="true"></div></div>`;
  $("quit").onclick=goHome;
  const sky=$("bsky");
  function setTarget(){
    const l=targets[t];missed=false;
    $("bprog").innerHTML=progressBar(t,res,5);
    $("target").innerHTML=`<div class="tn">Pop the balloon with<small>${l.gname} · “${l.roman}”</small></div><div class="tl">${l.ch}</div><button class="hear" id="bhear">🔊</button>`;
    $("bhear").onclick=()=>speak(l.gname);speak(l.gname);
    spawn(l);
  }
  function spawn(force){
    if(!alive)return;
    const tl=targets[t];
    const l=force||(spawnN++%3===0?tl:shuffle(pool.filter(x=>x.ch!==tl.ch))[0]);
    const H=sky.clientHeight,W=sky.clientWidth;
    const b=document.createElement("button");b.className="balloon";b.dataset.k=l.ch;b.setAttribute("aria-label",`Balloon ${l.roman}`);
    b.style.left=Math.round(8+Math.random()*(W-110))+"px";
    b.innerHTML=`<span class="bb" style="--b:${BCOL[Math.random()*BCOL.length|0]}">${l.ch}</span><span class="str"></span>`;
    sky.appendChild(b);
    const dur=(7000+Math.random()*2500)*(H/450);
    const a=b.animate([{transform:`translateY(150px)`},{transform:`translateY(${-H-20}px)`}],{duration:dur,easing:"linear"});
    a.onfinish=()=>b.remove();
    b.onpointerdown=e=>{e.preventDefault();hit(b,l,a)};
    b.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();hit(b,l,a)}};
  }
  function hit(b,l,a){
    if(!alive||b.classList.contains("popped"))return;
    if(l.ch===targets[t].ch){
      a.pause();b.classList.add("popped");sfx.pop();setTimeout(sfx.right,90);shards(b);
      setTimeout(()=>b.remove(),300);
      res[t]=!missed;if(!missed)mark("won",l.ch);
      t++;
      if(t>=5){alive=false;clearInterval(timer);setTimeout(()=>finish(r,res.filter(Boolean).length,5,"balloon"),700)}
      else setTimeout(setTarget,500);
    }else{
      missed=true;sfx.wrong();b.classList.remove("wrong");void b.offsetWidth;b.classList.add("wrong");
    }
  }
  function shards(b){
    const sr=sky.getBoundingClientRect(),br=b.getBoundingClientRect(),col=b.querySelector(".bb").style.getPropertyValue("--b");
    const cx=br.left-sr.left+43,cy=br.top-sr.top+50;
    for(let i=0;i<10;i++){const s=document.createElement("i");s.className="shard";s.style.background=col;sky.appendChild(s);
      const ang=Math.random()*6.28,d=40+Math.random()*50;
      s.animate([{transform:`translate(${cx}px,${cy}px)`,opacity:1},{transform:`translate(${cx+Math.cos(ang)*d}px,${cy+Math.sin(ang)*d}px) rotate(200deg)`,opacity:0}],{duration:500,easing:"ease-out"}).onfinish=()=>s.remove()}
  }
  setTarget();
  timer=setInterval(()=>spawn(),1100);
  cleanup=()=>{alive=false;clearInterval(timer)};
}

/* ---------- game 2: memory match ---------- */
function startMemory(r){
  show($game);
  const rowL=L.filter(l=>l.row===r);
  const cards=shuffle(rowL.flatMap(l=>[{k:l.ch,kind:"letter",l},{k:l.ch,kind:"pic",l}]));
  let open=[],moves=0,pairs=0,lock=false;
  $game.innerHTML=`${gameTop("Memory Match",r)}
    <div class="q"><div class="ask">Match each letter to its picture</div><div class="memstat" style="gap:18px"><span id="mmoves">Turns: 0</span><span id="mpairs">Pairs: 0/5</span></div></div>
    <div class="mem" id="mem">${cards.map((c,i)=>`<button class="mcard" data-i="${i}" aria-label="Hidden card"><div class="mi"><div class="mf cover"><span></span></div>
      <div class="mf face2${c.kind==="pic"?" picf":""}">${c.kind==="letter"?c.l.ch:(c.l.pic?`${c.l.pic}<small>${c.l.en}</small>`:`<span style="font-size:26px">${c.l.gname}</span><small>rare letter</small>`)}</div></div></button>`).join("")}</div>`;
  $("quit").onclick=goHome;
  $game.querySelectorAll(".mcard").forEach(b=>b.onclick=()=>{
    if(lock||b.classList.contains("up")||b.classList.contains("ok"))return;
    const c=cards[+b.dataset.i];b.classList.add("up");sfx.flip();
    b.setAttribute("aria-label",c.kind==="letter"?`Letter ${c.l.roman}`:`Picture ${c.l.en||c.l.roman}`);
    if(c.kind==="letter")speak(c.l.gname);
    open.push(b);
    if(open.length<2)return;
    moves++;$("mmoves").textContent=`Turns: ${moves}`;
    const [a,d]=open,ca=cards[+a.dataset.i],cd=cards[+d.dataset.i];open=[];
    if(ca.k===cd.k&&ca.kind!==cd.kind){
      [a,d].forEach(x=>{x.classList.remove("up");x.classList.add("ok")});pairs++;sfx.right();
      $("mpairs").textContent=`Pairs: ${pairs}/5`;mark("won",ca.k,d);
      if(pairs===5){const got=moves<=7?5:moves<=9?4:moves<=12?3:2;setTimeout(()=>finish(r,got,5,"memory"),900)}
    }else{
      lock=true;
      setTimeout(()=>{[a,d].forEach(x=>x.classList.add("no"));sfx.wrong()},350);
      setTimeout(()=>{[a,d].forEach(x=>{x.classList.remove("up","no");x.setAttribute("aria-label","Hidden card")});lock=false},1100);
    }
  });
}

/* ---------- game 3: quick quiz ---------- */
let G=null;
function startQuiz(r){
  const qs=shuffle(L.filter(l=>l.row===r)).map(l=>{
    const types=["name"];if(l.word&&l.word.startsWith(l.ch))types.push("pic","pic");if(l.word)types.push("which");if(paVoice)types.push("hear","hear");
    return {l,type:types[Math.random()*types.length|0]};
  });
  G={r,qs,n:0,results:[],missedThis:false};show($game);renderQ();
}
function renderQ(){
  const {qs,n}=G;if(n>=qs.length)return finish(G.r,G.results.filter(Boolean).length,qs.length,"quiz");
  const {l,type}=qs[n];G.missedThis=false;
  let prompt="",opts;
  if(type==="which"){
    const others=shuffle(L.filter(x=>x.word&&x.ch!==l.ch)).slice(0,3);
    opts=shuffle([l,...others]).map(x=>({key:x.ch,html:x.pic,pic:true}));
    prompt=`<div class="say" style="font-size:80px;color:var(--phulkari)">${l.ch}</div><div class="ask">Which picture goes with this letter?</div>`;
  }else{
    opts=shuffle([l,...distractors(l,3)]).map(x=>({key:x.ch,html:x.ch}));
    if(type==="pic")prompt=`<div class="pic" aria-hidden="true">${l.pic}</div><div class="say">${l.word.replace(l.ch,"_")}</div><div class="ask">Which letter starts “${l.en}”?</div>`;
    else if(type==="hear")prompt=`<button class="hear" id="replay" style="align-self:center;font-size:22px;padding:16px 26px">🔊 Listen</button><div class="ask">Tap the letter you hear</div>`;
    else prompt=`<div class="say">${l.gname}</div><div class="ask">Find “${l.roman}”</div>`;
  }
  $game.innerHTML=`${gameTop("Quick Quiz",G.r)}${progressBar(n,G.results,qs.length)}
    <div class="q">${prompt}</div>
    <div class="choices">${opts.map(o=>`<button data-k="${o.key}" class="${o.pic?"pic":""}">${o.html}</button>`).join("")}</div>`;
  $("quit").onclick=goHome;
  const rp=$("replay");if(rp){rp.onclick=()=>speak(l.gname);speak(l.gname)}
  $game.querySelectorAll(".choices button").forEach(b=>b.onclick=()=>{
    if(b.dataset.k===l.ch){
      b.classList.add("right");sfx.right();G.results[n]=!G.missedThis;
      $game.querySelectorAll(".choices button").forEach(x=>x.disabled=true);
      if(!G.missedThis)mark("won",l.ch,b);
      setTimeout(()=>{G.n++;renderQ()},800);
    }else{b.classList.add("wrong");b.disabled=true;G.missedThis=true;sfx.wrong()}
  });
}

/* ---------- confetti: marigold petals and phulkari colours ---------- */
function celebrate(){
  if(reduced())return;
  const c=$("confetti"),x=c.getContext("2d");c.width=innerWidth;c.height=innerHeight;
  const cols=["#FFC928","#E0287A","#FF7A1A","#2E9B5F","#1F6FD1"];
  const ps=Array.from({length:120},()=>({x:innerWidth/2+(Math.random()-.5)*80,y:innerHeight*.45,vx:(Math.random()-.5)*14,vy:Math.random()*-14-4,s:7+Math.random()*7,c:cols[Math.random()*5|0],r:Math.random()*6,round:Math.random()<.4}));
  let f=0;(function tick(){x.clearRect(0,0,c.width,c.height);ps.forEach(p=>{p.vy+=.38;p.vx*=.99;p.x+=p.vx;p.y+=p.vy;p.r+=.12;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;
      if(p.round){x.beginPath();x.ellipse(0,0,p.s/2,p.s/3.2,0,0,7);x.fill()}else x.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);x.restore()});
    if(++f<110)requestAnimationFrame(tick);else x.clearRect(0,0,c.width,c.height)})();
}

/* ---------- boot ---------- */
$("brandMor").innerHTML=morSVG();
$("heroMor").innerHTML=morSVG();
$("heroMor").onclick=()=>{lineN++;sayLine();cheer($("heroMor"));sfx.star()};
setSoundBtn();
renderHome();

const L=[
// [letter, gurmukhi name, romanized, sound hint, emoji, word (first letter marked later), english]
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

/* ---------- progress (per-viewer, optional) ---------- */
let P={seen:{},traced:{},won:{}};
try{const s=JSON.parse(localStorage.getItem("akhar-progress")||"null");if(s)P=Object.assign(P,s)}catch(e){}
const save=()=>{try{localStorage.setItem("akhar-progress",JSON.stringify(P))}catch(e){}};
const starsFor=ch=>(P.seen[ch]?1:0)+(P.traced[ch]?1:0)+(P.won[ch]?1:0);
const totalStars=()=>L.reduce((n,l)=>n+starsFor(l.ch),0);
function mark(kind,ch){if(!P[kind][ch]){P[kind][ch]=1;save();renderStars()}}
function renderStars(){document.getElementById("starCount").textContent=totalStars()}

/* ---------- voice ---------- */
let paVoice=null;
function pickVoice(){const v=speechSynthesis.getVoices();paVoice=v.find(x=>/^pa(-|_|$)/i.test(x.lang))||null}
if("speechSynthesis" in window){pickVoice();speechSynthesis.onvoiceschanged=pickVoice}
let warned=false;
function speak(text){
  if(!("speechSynthesis" in window)||!paVoice){if(!warned){toast("This device has no Punjabi voice yet. Ask a grown-up to say it with you!");warned=true}return false}
  speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.voice=paVoice;u.lang=paVoice.lang;u.rate=.8;speechSynthesis.speak(u);return true
}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.hidden=false;clearTimeout(t._h);t._h=setTimeout(()=>t.hidden=true,3200)}

/* ---------- views ---------- */
const $home=document.getElementById("home"),$letter=document.getElementById("letter"),$game=document.getElementById("game");
function show(el){[$home,$letter,$game].forEach(x=>x.hidden=x!==el);window.scrollTo({top:0})}

function renderChart(){
  const c=document.getElementById("chart");c.innerHTML="";
  for(let r=0;r<7;r++){
    const row=document.createElement("div");row.className="row";
    L.filter(l=>l.row===r).forEach(l=>{
      const b=document.createElement("button");const s=starsFor(l.ch);
      b.className="cell"+(s===3?" done":"");b.setAttribute("aria-label",`${l.roman}, ${s} of 3 stars`);
      b.innerHTML=`${l.ch}<span class="dots">${[0,1,2].map(k=>`<i class="${k<s?"on":""}"></i>`).join("")}</span>`;
      b.onclick=()=>openLetter(l.i);row.appendChild(b);
    });
    const p=document.createElement("button");p.className="play";p.textContent="Play ▶";p.setAttribute("aria-label",`Play game for row ${r+1}`);
    p.onclick=()=>startGame(r);row.appendChild(p);c.appendChild(row);
  }
}

function markWord(l){return l.word?l.word.replace(l.ch,`<b>${l.ch}</b>`):""}

function openLetter(i){
  const l=L[i];mark("seen",l.ch);
  $letter.innerHTML=`
    <div class="topbar"><button class="back" id="back">← All letters</button>
      <div class="nav"><button id="prev" aria-label="Previous letter" ${i===0?"disabled":""}>‹</button><button id="next" aria-label="Next letter" ${i===34?"disabled":""}>›</button></div></div>
    <div class="hero"><div class="big">${l.ch}</div>
      <div class="meta"><div class="name">${l.gname}</div><div class="roman">“${l.roman}”</div><div class="hint">${l.hint}</div>
      <button class="hear" id="hear">🔊 Hear it</button></div></div>
    ${l.word?`<div class="word"><span class="pic" aria-hidden="true">${l.pic}</span><div><div class="pw">${markWord(l)}</div><div class="en">${l.en}</div></div></div>`
            :`<div class="word"><span class="pic" aria-hidden="true">✨</span><div><div class="pw">Rare letter</div><div class="en">You will hardly ever see ${l.ch} in words, but it still has a place in the ਪੈਂਤੀ.</div></div></div>`}
    <div class="trace"><h3>Trace it with your finger</h3><p>Follow the faint letter. Fill it in to earn a star.</p></div>
    <div class="pad"><canvas id="guide"></canvas><canvas id="ink" tabindex="0" aria-label="Tracing area"></canvas></div>
    <div class="meter"><i id="meter"></i></div>
    <div class="tools"><button id="clear">Clear</button><button id="hearWord">${l.word?"🔊 Hear the word":"🔊 Hear again"}</button></div>`;
  show($letter);renderStars();
  document.getElementById("back").onclick=goHome;
  document.getElementById("prev").onclick=()=>openLetter(i-1);
  document.getElementById("next").onclick=()=>openLetter(i+1);
  document.getElementById("hear").onclick=()=>speak(l.gname);
  document.getElementById("hearWord").onclick=()=>speak(l.word||l.gname);
  setupTrace(l);
}
function goHome(){renderChart();show($home)}

/* ---------- tracing ---------- */
function setupTrace(l){
  const g=document.getElementById("guide"),k=document.getElementById("ink"),pad=g.parentElement;
  const dpr=Math.min(window.devicePixelRatio||1,2),S=Math.round(pad.clientWidth*dpr);
  [g,k].forEach(c=>{c.width=S;c.height=S});
  const gx=g.getContext("2d"),kx=k.getContext("2d");
  const font=`700 ${S*.62}px "Baloo Paaji 2","Noto Sans Gurmukhi",sans-serif`;
  const drawGuide=()=>{gx.clearRect(0,0,S,S);gx.font=font;gx.textAlign="center";gx.textBaseline="middle";gx.fillStyle="#E9D9F0";gx.fillText(l.ch,S/2,S*.56)};
  // mask: where the letter is
  const m=document.createElement("canvas");m.width=m.height=S;const mx=m.getContext("2d");
  let maskIdx=[];
  const buildMask=()=>{mx.clearRect(0,0,S,S);mx.font=font;mx.textAlign="center";mx.textBaseline="middle";mx.fillStyle="#000";mx.fillText(l.ch,S/2,S*.56);
    const d=mx.getImageData(0,0,S,S).data;maskIdx=[];for(let p=3;p<d.length;p+=16)if(d[p]>128)maskIdx.push(p)};
  const ready=()=>{drawGuide();buildMask()};
  ready();if(document.fonts&&document.fonts.load)document.fonts.load(font,l.ch).then(ready).catch(()=>{});
  kx.lineCap=kx.lineJoin="round";kx.strokeStyle="#D6246E";kx.lineWidth=S*.075;
  let down=false,last=null,done=!!P.traced[l.ch];
  const pos=e=>{const r=k.getBoundingClientRect();return[(e.clientX-r.left)*S/r.width,(e.clientY-r.top)*S/r.height]};
  k.onpointerdown=e=>{down=true;last=pos(e);k.setPointerCapture(e.pointerId);kx.beginPath();kx.arc(last[0],last[1],kx.lineWidth/2,0,7);kx.fillStyle=kx.strokeStyle;kx.fill()};
  k.onpointermove=e=>{if(!down)return;const p=pos(e);kx.beginPath();kx.moveTo(...last);kx.lineTo(...p);kx.stroke();last=p};
  const up=()=>{if(!down)return;down=false;score()};
  k.onpointerup=up;k.onpointercancel=up;
  const meter=document.getElementById("meter");
  function score(){
    if(!maskIdx.length)return;const d=kx.getImageData(0,0,S,S).data;let hit=0,ink=0;
    for(const p of maskIdx)if(d[p]>0)hit++;
    for(let p=3;p<d.length;p+=16)if(d[p]>0)ink++;
    const cover=hit/maskIdx.length,outside=ink?(ink-hit)/ink:0;
    meter.style.width=Math.min(100,cover/.7*100)+"%";
    if(cover>.7&&outside<.55&&!done){done=true;mark("traced",l.ch);celebrate();toast("Shabaash! Great tracing ⭐")}
  }
  document.getElementById("clear").onclick=()=>{kx.clearRect(0,0,S,S);meter.style.width="0"};
}

/* ---------- game ---------- */
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
let G=null;
function startGame(r){
  const rowL=L.filter(l=>l.row===r);
  const qs=[];
  shuffle(rowL).forEach(l=>{
    const types=["name"];if(l.word&&l.word.startsWith(l.ch))types.push("pic","pic");if(l.word)types.push("which");if(paVoice)types.push("hear","hear");
    qs.push({l,type:types[Math.random()*types.length|0]});
  });
  G={r,qs,n:0,results:[],missedThis:false};show($game);renderQ();
}
function distractors(l,k){
  const pool=L.filter(x=>x.ch!==l.ch&&(x.row===l.row||Math.abs(x.row-l.row)<=1));
  return shuffle(pool).slice(0,k);
}
function renderQ(){
  const {qs,n}=G;if(n>=qs.length)return renderResult();
  const {l,type}=qs[n];G.missedThis=false;
  let prompt="",opts;
  if(type==="which"){
    const others=shuffle(L.filter(x=>x.word&&x.ch!==l.ch)).slice(0,3);
    opts=shuffle([l,...others]).map(x=>({key:x.ch,html:x.pic,pic:true}));
    prompt=`<div class="say" style="font-size:72px;color:var(--phulkari)">${l.ch}</div><div class="ask">Which picture goes with this letter?</div>`;
  }else{
    opts=shuffle([l,...distractors(l,3)]).map(x=>({key:x.ch,html:x.ch}));
    if(type==="pic")prompt=`<div class="pic" aria-hidden="true">${l.pic}</div><div class="say">${l.word.replace(l.ch,"_")}</div><div class="ask">Which letter starts “${l.en}”?</div>`;
    else if(type==="hear")prompt=`<button class="hear" id="replay" style="align-self:center;font-size:22px;padding:16px 26px">🔊 Listen</button><div class="ask">Tap the letter you hear</div>`;
    else prompt=`<div class="say">${l.gname}</div><div class="ask">Find “${l.roman}”</div>`;
  }
  $game.innerHTML=`
    <div class="topbar"><button class="back" id="quit">← Stop</button><strong>Row ${G.r+1} game</strong></div>
    <div class="progress">${qs.map((_,i)=>`<i class="${i<n?(G.results[i]?"ok":"miss"):i===n?"now":""}"></i>`).join("")}</div>
    <div class="q">${prompt}</div>
    <div class="choices">${opts.map(o=>`<button data-k="${o.key}" class="${o.pic?"pic":""}">${o.html}</button>`).join("")}</div>`;
  document.getElementById("quit").onclick=goHome;
  const rp=document.getElementById("replay");if(rp){rp.onclick=()=>speak(l.gname);speak(l.gname)}
  $game.querySelectorAll(".choices button").forEach(b=>b.onclick=()=>{
    if(b.dataset.k===l.ch){
      b.classList.add("right");G.results[n]=!G.missedThis;
      $game.querySelectorAll(".choices button").forEach(x=>x.disabled=true);
      if(!G.missedThis)mark("won",l.ch);
      setTimeout(()=>{G.n++;renderQ()},700);
    }else{b.classList.add("wrong");b.disabled=true;G.missedThis=true}
  });
}
function renderResult(){
  const got=G.results.filter(Boolean).length,t=G.qs.length;
  const msg=got===t?"ਸ਼ਾਬਾਸ਼! Perfect!":got>=3?"ਵਧੀਆ! Well done!":"Keep going, you're learning!";
  $game.innerHTML=`<div class="result"><div class="score" aria-label="${got} of ${t}">${"⭐".repeat(got)}${"☆".repeat(t-got)}</div>
    <div class="msg">${msg}</div><p style="margin:0;color:var(--muted)">You got ${got} of ${t} on the first try.</p>
    <div class="tools"><button class="cta" id="again">Play again</button>${G.r<6?`<button id="nextRow">Next row ▶</button>`:""}<button id="home2">All letters</button></div></div>`;
  if(got>=3)celebrate();
  document.getElementById("again").onclick=()=>startGame(G.r);
  const nr=document.getElementById("nextRow");if(nr)nr.onclick=()=>startGame(G.r+1);
  document.getElementById("home2").onclick=goHome;
}

/* ---------- confetti ---------- */
function celebrate(){
  if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const c=document.getElementById("confetti"),x=c.getContext("2d");c.width=innerWidth;c.height=innerHeight;
  const cols=["#F6C21C","#D6246E","#F2711C","#1E6B52"];
  const ps=Array.from({length:90},()=>({x:innerWidth/2,y:innerHeight*.4,vx:(Math.random()-.5)*12,vy:Math.random()*-12-4,s:6+Math.random()*6,c:cols[Math.random()*4|0],r:Math.random()*6}));
  let f=0;(function tick(){x.clearRect(0,0,c.width,c.height);ps.forEach(p=>{p.vy+=.4;p.x+=p.vx;p.y+=p.vy;p.r+=.1;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;x.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);x.restore()});
    if(++f<90)requestAnimationFrame(tick);else x.clearRect(0,0,c.width,c.height)})();
}

renderChart();renderStars();

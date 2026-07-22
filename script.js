from pathlib import Path

js = r"""// Proposal Website - Complete Script (starter replacement)
// Replace your existing script.js with this file.

const loading=document.getElementById("loading-screen");
const beginBtn=document.getElementById("beginBtn");
const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");
const noBtn=document.getElementById("noBtn");
const yesBtn=document.getElementById("yesBtn");
const proposal=document.getElementById("proposal");
const typewriter=document.getElementById("typewriter");

window.addEventListener("load",()=>{
  setTimeout(()=>loading.style.display="none",1200);
});

if(beginBtn){
beginBtn.addEventListener("click",()=>{
  document.getElementById("letter").scrollIntoView({behavior:"smooth"});
  if(music){
    music.play().catch(()=>{});
  }
});
}

if(musicBtn && music){
musicBtn.onclick=()=>{
 if(music.paused){music.play();musicBtn.innerHTML="🔊";}
 else{music.pause();musicBtn.innerHTML="🔇";}
};
}

const letter=`My Dearest Bhuuuuuu,

Every day with you is a blessing.
Thank you for filling my life with happiness,
love and countless memories.

Happy 2 Beautiful Months ❤️

Forever Yours,
Vishnu ❤️`;

if(typewriter){
 let i=0;
 (function type(){
   if(i<letter.length){
      typewriter.textContent+=letter.charAt(i++);
      setTimeout(type,40);
   }
 })();
}

const funny=[
"No 😜","Catch Me 😂","Impossible ❤️","Nice Try 🤭","Think Again 🥺","Never 😆"
];

function moveButton(){
 if(!proposal||!noBtn) return;
 const r=proposal.getBoundingClientRect();
 const w=noBtn.offsetWidth;
 const h=noBtn.offsetHeight;
 const x=Math.random()*(r.width-w-20);
 const y=Math.random()*(r.height-h-20);
 noBtn.style.left=x+"px";
 noBtn.style.top=y+"px";
 noBtn.innerHTML=funny[Math.floor(Math.random()*funny.length)];
}

if(proposal&&noBtn){
proposal.addEventListener("mousemove",(e)=>{
 const b=noBtn.getBoundingClientRect();
 const d=Math.hypot(e.clientX-(b.left+b.width/2),e.clientY-(b.top+b.height/2));
 if(d<120) moveButton();
});
noBtn.addEventListener("touchstart",(e)=>{e.preventDefault();moveButton();});
}

function heart(){
 const h=document.createElement("div");
 h.className="heart";
 h.innerHTML="❤️";
 h.style.left=Math.random()*100+"vw";
 h.style.fontSize=(18+Math.random()*22)+"px";
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),8000);
}
setInterval(heart,500);

if(yesBtn){
yesBtn.onclick=()=>{
 alert("Yay! ❤️ Happy 2 Beautiful Months Bhuuuuuu! ❤️");
 for(let i=0;i<120;i++){
   setTimeout(heart,i*40);
 }
 document.getElementById("celebration")?.scrollIntoView({behavior:"smooth"});
};
}
"""
path=Path("/mnt/data/script.js")
path.write_text(js,encoding="utf-8")
print(path)
from pathlib import Path
content = """// Proposal Website - Complete Script (starter replacement)
const loading=document.getElementById("loading-screen");
const beginBtn=document.getElementById("beginBtn");
const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");
const noBtn=document.getElementById("noBtn");
const yesBtn=document.getElementById("yesBtn");
const proposal=document.getElementById("proposal");
const typewriter=document.getElementById("typewriter");

window.addEventListener("load",()=>setTimeout(()=>loading&&(loading.style.display="none"),1200));

beginBtn?.addEventListener("click",()=>{
 document.getElementById("letter")?.scrollIntoView({behavior:"smooth"});
 music?.play().catch(()=>{});
});

musicBtn?.addEventListener("click",()=>{
 if(!music) return;
 if(music.paused){music.play();musicBtn.textContent="🔊";}
 else{music.pause();musicBtn.textContent="🔇";}
});

const msg=`My Dearest Bhuuuuuu,

Happy 2 Beautiful Months ❤️

Every moment with you is special.
Thank you for being in my life.

Will You Marry Me? ❤️

Forever Yours,
Vishnu ❤️`;

let i=0;
(function t(){
 if(typewriter && i<msg.length){
   typewriter.textContent+=msg[i++];
   setTimeout(t,40);
 }
})();

const funny=["No 😜","Catch Me 😂","Impossible ❤️","Think Again 🥺","Never 😆"];
function moveButton(){
 if(!proposal||!noBtn) return;
 const r=proposal.getBoundingClientRect();
 noBtn.style.left=Math.random()*(r.width-noBtn.offsetWidth-20)+"px";
 noBtn.style.top=Math.random()*(r.height-noBtn.offsetHeight-20)+"px";
 noBtn.textContent=funny[Math.floor(Math.random()*funny.length)];
}
proposal?.addEventListener("mousemove",e=>{
 const b=noBtn.getBoundingClientRect();
 if(Math.hypot(e.clientX-(b.left+b.width/2),e.clientY-(b.top+b.height/2))<120) moveButton();
});
noBtn?.addEventListener("touchstart",e=>{e.preventDefault();moveButton();});

function heart(){
 const h=document.createElement("div");
 h.className="heart";
 h.textContent="❤️";
 h.style.left=Math.random()*100+"vw";
 h.style.fontSize=(18+Math.random()*20)+"px";
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),8000);
}
setInterval(heart,500);

yesBtn?.addEventListener("click",()=>{
 for(let k=0;k<120;k++) setTimeout(heart,k*35);
 document.getElementById("celebration")?.scrollIntoView({behavior:"smooth"});
});
"""
p=Path("/mnt/data/script.js")
p.write_text(content,encoding="utf-8")
print(str(p))

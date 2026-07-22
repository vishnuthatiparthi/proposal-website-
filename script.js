// ========================================
// Premium Proposal Website
// PART 1
// ========================================

// ----------------------------
// AOS Animation
// ----------------------------
AOS.init({
    duration: 1200,
    once: true
});

// ----------------------------
// DOM Elements
// ----------------------------
const loading = document.getElementById("loading-screen");
const beginBtn = document.getElementById("beginBtn");
const music = document.getElementById("bgMusic");

const letter = document.getElementById("typewriter");

const proposal = document.getElementById("proposal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const celebration = document.getElementById("celebration");

const runnerContainer = document.getElementById("runnerContainer");
const runnerVideo = document.getElementById("runnerVideo");

// ----------------------------
// Loading Screen
// ----------------------------
window.addEventListener("load", () => {

    setTimeout(() => {

        gsap.to("#loading-screen", {
            opacity: 0,
            duration: 1,
            onComplete() {
                loading.style.display = "none";
            }
        });

    }, 2500);

});

// ----------------------------
// Begin Journey
// ----------------------------
beginBtn.addEventListener("click", () => {

    music.play().catch(() => {});

    document.getElementById("letter").scrollIntoView({
        behavior: "smooth"
    });

    startTyping();

});

// ----------------------------
// Love Letter
// ----------------------------
const text = `Dear Bhuuuuuu ❤️

These two months have been the happiest days of my life.

Thank you for every smile...

Every hug...

Every late-night conversation...

Every memory...

Every little moment.

You are my peace.

My happiness.

My favourite person.

And I hope this beautiful journey lasts forever.

❤️

Love,

Vishnu`;

let i = 0;

function startTyping() {

    letter.innerHTML = "";
    i = 0;

    type();

}

function type() {

    if (i < text.length) {

        letter.innerHTML += text.charAt(i);

        i++;

        setTimeout(type, 35);

    }

}

// ----------------------------
// Funny Messages
// ----------------------------
const funnyMessages = [

    "😂 Catch me!",
    "😜 Nice Try!",
    "❤️ Only YES!",
    "🥺 Are you sure?",
    "🤣 Too Slow!",
    "😎 I'm Fast!",
    "💨 Missed Again!"

];

// ----------------------------
// Runner Animation
// ----------------------------
function playRunner(oldRect) {

    runnerContainer.style.display = "block";

    runnerContainer.style.left = (oldRect.left - 20) + "px";
    runnerContainer.style.top = (oldRect.top - 20) + "px";

    runnerVideo.currentTime = 0;

    runnerVideo.play();

    setTimeout(() => {

        runnerVideo.pause();

        runnerContainer.style.display = "none";

    }, 700);

}

// ----------------------------
// Moving NO Button
// ----------------------------
function moveButton() {

    const oldRect = noBtn.getBoundingClientRect();

    playRunner(oldRect);

    noBtn.style.visibility = "hidden";

    setTimeout(() => {

        const maxX = window.innerWidth - noBtn.offsetWidth - 30;
        const maxY = window.innerHeight - noBtn.offsetHeight - 30;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";

        noBtn.innerHTML =
            funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

        noBtn.style.visibility = "visible";

    }, 700);

}

// ----------------------------
// NO Button Events
// ----------------------------
noBtn.addEventListener("mouseover", moveButton);

noBtn.addEventListener("touchstart", (e) => {

    e.preventDefault();

    moveButton();

});

noBtn.addEventListener("click", (e) => {

    e.preventDefault();

    moveButton();

});
// ========================================
// PART 2 - Celebration Effects
// ========================================

// ----------------------------
// YES Button
// ----------------------------
yesBtn.addEventListener("click", () => {

    celebration.scrollIntoView({
        behavior: "smooth"
    });

    fireworks();

});

// ----------------------------
// Fireworks
// ----------------------------
function fireworks() {

    const duration = 6000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {

        confetti({
            particleCount: 8,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 8,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        confetti({
            particleCount: 12,
            spread: 120,
            origin: {
                x: Math.random(),
                y: Math.random() * 0.6
            }
        });

        if (Date.now() > end) {

            clearInterval(interval);

            massiveCelebration();

        }

    }, 250);

}

// ----------------------------
// Grand Finale Confetti
// ----------------------------
function massiveCelebration() {

    confetti({

        particleCount: 400,

        spread: 180,

        startVelocity: 45,

        scalar: 1.2,

        origin: {
            y: 0.6
        }

    });

}

// ----------------------------
// Floating Hearts
// ----------------------------
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 25 + 15) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 350);

// ----------------------------
// Floating Sparkles
// ----------------------------
function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = "100vh";

    sparkle.style.fontSize =
        (Math.random() * 18 + 15) + "px";

    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "999";
    sparkle.style.transition = "8s linear";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.style.transform =
            "translateY(-120vh) rotate(360deg)";

        sparkle.style.opacity = "0";

    }, 100);

    setTimeout(() => {

        sparkle.remove();

    }, 8500);

}

setInterval(createSparkle, 600);

// ----------------------------
// Rose Petals
// ----------------------------
function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-50px";

    petal.style.fontSize =
        (Math.random() * 20 + 18) + "px";

    petal.style.pointerEvents = "none";
    petal.style.zIndex = "998";

    petal.style.transition =
        (Math.random() * 4 + 6) + "s linear";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.style.transform =
            `translateY(${window.innerHeight + 200}px)
             rotate(${Math.random() * 720}deg)
             translateX(${Math.random() * 200 - 100}px)`;

        petal.style.opacity = "0";

    }, 100);

    setTimeout(() => {

        petal.remove();

    }, 9000);

}

setInterval(createPetal, 500);

// ----------------------------
// Mouse Heart Trail
// ----------------------------
document.addEventListener("mousemove", (e) => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    heart.style.fontSize = "16px";
    heart.style.pointerEvents = "none";
    heart.style.color = "#ff4d88";
    heart.style.transition = "1.2s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
            "translateY(-50px) scale(2)";

        heart.style.opacity = "0";

    }, 10);

    setTimeout(() => {

        heart.remove();

    }, 1200);

});
// ========================================
// PART 3 - Grand Finale
// ========================================

// ----------------------------
// Secret Love Message
// ----------------------------
let shown = false;

document.addEventListener("dblclick", () => {

    if (shown) return;

    shown = true;

    alert(`❤️ Secret Message ❤️

Dear Bhuuuuuu,

Thank you for making these
two months the happiest
days of my life.

I Love You Forever ❤️

- Vishnu`);

});

// ----------------------------
// Page Animation
// ----------------------------
gsap.from("section", {

    opacity: 0,
    y: 80,
    duration: 1,
    stagger: 0.25,
    ease: "power3.out"

});

// ----------------------------
// Gallery Hover
// ----------------------------
document.querySelectorAll(".gallery-grid img")
.forEach(img => {

    img.addEventListener("mouseenter", () => {

        gsap.to(img, {

            scale: 1.08,
            rotation: 1,
            duration: .3

        });

    });

    img.addEventListener("mouseleave", () => {

        gsap.to(img, {

            scale: 1,
            rotation: 0,
            duration: .3

        });

    });

});

// ----------------------------
// Music Button
// ----------------------------
const musicBtn = document.createElement("button");

musicBtn.id = "musicBtn";
musicBtn.innerHTML = "🎵";

musicBtn.style.position = "fixed";
musicBtn.style.bottom = "20px";
musicBtn.style.right = "20px";
musicBtn.style.width = "55px";
musicBtn.style.height = "55px";
musicBtn.style.borderRadius = "50%";
musicBtn.style.border = "none";
musicBtn.style.background = "#ff4d88";
musicBtn.style.color = "#fff";
musicBtn.style.fontSize = "22px";
musicBtn.style.cursor = "pointer";
musicBtn.style.boxShadow = "0 8px 25px rgba(0,0,0,.3)";
musicBtn.style.zIndex = "9999";

document.body.appendChild(musicBtn);

musicBtn.onclick = () => {

    if (music.paused) {

        music.play();
        musicBtn.innerHTML = "🎵";

    } else {

        music.pause();
        musicBtn.innerHTML = "🔇";

    }

};

// ----------------------------
// Proposal Title Animation
// ----------------------------
const proposalTitle =
document.querySelector("#proposal h2");

gsap.from(proposalTitle, {

    scale: 0,
    opacity: 0,
    rotation: 360,
    duration: 1.5

});

// ----------------------------
// Love Counter
// ----------------------------
const counter = document.createElement("h3");

counter.innerHTML =
"❤️ 2 Beautiful Months Together ❤️";

counter.style.marginTop = "30px";
counter.style.fontSize = "28px";
counter.style.color = "#fff";

proposal.appendChild(counter);

// ----------------------------
// Scroll Reveal
// ----------------------------
const sections =
document.querySelectorAll("section");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

sections.forEach(sec=>observer.observe(sec));

// ----------------------------
// Floating Stars
// ----------------------------
function createStar(){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";
star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";
star.style.opacity=Math.random();
star.style.fontSize=
(Math.random()*12+8)+"px";
star.style.pointerEvents="none";

document.body.appendChild(star);

gsap.to(star,{

opacity:.1,
repeat:-1,
yoyo:true,
duration:Math.random()*3+2

});

}

for(let i=0;i<80;i++){

createStar();

}

// ----------------------------
// Final Section
// ----------------------------
const finalSection =
document.createElement("section");

finalSection.id = "final";

finalSection.innerHTML = `

<h1 style="font-size:70px;
font-family:'Great Vibes',cursive;">

Forever Starts With Us ❤️

</h1>

<p style="
font-size:28px;
max-width:900px;
line-height:2;
margin-top:30px;">

Thank you for these beautiful
two months.

Every smile...

Every hug...

Every memory...

means the world to me.

I Love You Forever ❤️

<br><br>

— Vishnu

</p>

`;

document.body.appendChild(finalSection);

// ----------------------------
// YES Finale
// ----------------------------
yesBtn.addEventListener("click",()=>{

setTimeout(()=>{

finalSection.scrollIntoView({

behavior:"smooth"

});

},6000);

});

// ----------------------------
// Keyboard Surprise
// ----------------------------
let secret="";

document.addEventListener("keydown",(e)=>{

secret+=e.key.toLowerCase();

if(secret.includes("love")){

confetti({

particleCount:300,
spread:180

});

secret="";

}

});

// ----------------------------
// Console Message
// ----------------------------
console.log(
"%c❤️ Built with Love for Bhuuuuuu ❤️",
"color:#ff4d88;font-size:24px;font-weight:bold;"
);

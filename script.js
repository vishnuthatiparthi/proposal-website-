// ========================================
// Premium Proposal Website
// Part 1
// ========================================

AOS.init({
    duration:1200,
    once:true
});

const loading = document.getElementById("loading-screen");
const beginBtn = document.getElementById("beginBtn");
const music = document.getElementById("bgMusic");
const letter = document.getElementById("typewriter");

const proposal = document.getElementById("proposal");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const celebration = document.getElementById("celebration");


// Loading

window.addEventListener("load",()=>{

setTimeout(()=>{

gsap.to("#loading-screen",{

opacity:0,
duration:1,

onComplete(){

loading.style.display="none";

}

});

},2500);

});


// Begin Button

beginBtn.addEventListener("click",()=>{

music.play().catch(()=>{});

document.getElementById("letter").scrollIntoView({

behavior:"smooth"

});

startTyping();

});



// =============================
// Typewriter
// =============================

const text=

`Dear Bhuuuuuu ❤️

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

let i=0;

function startTyping(){

letter.innerHTML="";

i=0;

type();

}

function type(){

if(i<text.length){

letter.innerHTML+=text.charAt(i);

i++;

setTimeout(type,35);

}

}



// =============================
// Moving NO Button
// =============================

const funnyMessages=[

"No 😭",

"Try Again 😂",

"Impossible ❤️",

"Nice Try 😜",

"You Can't Catch Me",

"Think Again 🥺"

];

function moveButton(){

const maxX=window.innerWidth-200;

const maxY=window.innerHeight-100;

const x=Math.random()*maxX;

const y=Math.random()*maxY;

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

noBtn.innerHTML=

funnyMessages[Math.floor(Math.random()*funnyMessages.length)];

}

noBtn.addEventListener("mouseover",moveButton);

noBtn.addEventListener("touchstart",moveButton);




// =============================
// YES
// =============================

yesBtn.addEventListener("click",()=>{

celebration.scrollIntoView({

behavior:"smooth"

});

fireworks();

});




// ====================================
// Floating Hearts
// ====================================

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=

Math.random()*25+15+"px";

heart.style.animationDuration=

Math.random()*5+5+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,350);



// fireworks function comes in Part-2
// ========================================
// PART 2 - Celebration Effects
// ========================================

// ----------------------------
// Fireworks
// ----------------------------

function fireworks() {

    const duration = 6000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {

        confetti({
            particleCount: 6,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 6,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        confetti({
            particleCount: 10,
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
// Massive Celebration
// ----------------------------

function massiveCelebration() {

    confetti({

        particleCount: 350,

        spread: 180,

        startVelocity: 45,

        scalar: 1.2,

        origin: {
            y: 0.6
        }

    });

}



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

    petal.style.zIndex = "998";

    petal.style.pointerEvents = "none";

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

document.addEventListener("mousemove", e => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

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




// ----------------------------
// Secret Love Message
// ----------------------------

let shown = false;

document.addEventListener("dblclick", () => {

    if (shown) return;

    shown = true;

    alert(

`❤️ Secret Message ❤️

Dear Bhuuuuuu,

Thank you for making these
two months the happiest
days of my life.

I Love You Forever ❤️

- Vishnu`

    );

});




// ----------------------------
// Page Fade Animation
// ----------------------------

gsap.from("section", {

    opacity: 0,

    y: 80,

    duration: 1,

    stagger: 0.25,

    ease: "power3.out"

});




// ----------------------------
// Gallery Hover Animation
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

// ========================================
// PART 3 - Grand Finale
// ========================================

// Music Button (created dynamically)

const musicBtn = document.createElement("button");
musicBtn.innerHTML = "🎵";
musicBtn.id = "musicBtn";

musicBtn.style.position = "fixed";
musicBtn.style.bottom = "20px";
musicBtn.style.right = "20px";
musicBtn.style.width = "55px";
musicBtn.style.height = "55px";
musicBtn.style.borderRadius = "50%";
musicBtn.style.border = "none";
musicBtn.style.background = "#ff4d88";
musicBtn.style.color = "white";
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


// ========================================
// Ring Animation
// ========================================

const proposalTitle = document.querySelector("#proposal h2");

gsap.from(proposalTitle, {


    scale: 0,

    opacity: 0,

    rotation: 360,

    duration: 1.5

});


// ========================================
// Love Counter
// ========================================

const counter = document.createElement("h3");

counter.innerHTML = "❤️ 2 Beautiful Months Together ❤️";

counter.style.marginTop = "30px";
counter.style.fontSize = "28px";
counter.style.color = "#fff";

proposal.appendChild(counter);


// ========================================
// Auto Scroll Reveal
// ========================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

sections.forEach(sec=>observer.observe(sec));



// ========================================
// Floating Stars
// ========================================

function createStar(){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";
star.style.left=Math.random()*100+"vw";
star.style.top=Math.random()*100+"vh";

star.style.opacity=Math.random();

star.style.fontSize=(Math.random()*12+8)+"px";

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



// ========================================
// Final Love Message
// ========================================

const finalSection=document.createElement("section");

finalSection.id="final";

finalSection.innerHTML=`

<h1 style="font-size:70px;font-family:'Great Vibes',cursive;">
Forever Starts With Us ❤️
</h1>

<p style="font-size:28px;max-width:900px;line-height:2;margin-top:30px;">

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



// ========================================
// YES Button Finale
// ========================================

yesBtn.addEventListener("click",()=>{

setTimeout(()=>{

finalSection.scrollIntoView({

behavior:"smooth"

});

},6000);

});



// ========================================
// Keyboard Surprise
// ========================================

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



// ========================================
// Console Message ❤️
// ========================================

console.log("%c❤️ Built with Love for Bhuuuuuu ❤️",
"color:#ff4d88;font-size:24px;font-weight:bold;");

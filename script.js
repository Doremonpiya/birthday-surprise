function goToQuestion(){

    document
    .getElementById("welcome")
    .classList
    .remove("active");

    document
    .getElementById("question")
    .classList
    .add("active");
}

function goToGallery(){

    document
    .getElementById("question")
    .classList
    .remove("active");

    document
    .getElementById("gallery")
    .classList
    .add("active");
}
const photos = [

"img1.jpeg",
"img2.jpeg",
"img3.jpeg",
"img4.jpeg",
"img5.jpeg"

];

const captions = [

"Some people enter your life and leave memories. You entered my life and became one. 💖",

"I don't know if you realize it... but you make people happier just by being around. 🌸",

"Every group needs that one person who brings the chaos. Thank you for volunteering. 😂💕",

"Behind that cute smile is someone with the kindest heart. 🦋",

"If I could keep one thing from every year, I'd keep the memories with you. ✨"

];

let currentPhoto = 0;

function nextPhoto(){

    currentPhoto++;

    if(currentPhoto < photos.length){

        document
        .getElementById("galleryImage")
        .src = photos[currentPhoto];

        document
        .getElementById("galleryCaption")
        .innerText = captions[currentPhoto];
    }

    else{

        goToLoading();
    }
}

const noBtn = document.getElementById("noBtn");


let moved = false;

const messages = [
    "Wrong answer 😭",
    "Pretty please click YES 🥺",
    "I worked hard for this 💖",
    "NO is unavailable today 😂",
    "You know you're curious 👀",
    "Just click YES Sunshine 🌻"
];

noBtn.addEventListener("mouseover", () => {

    if(!moved){
        noBtn.style.position = "fixed";
        moved = true;
    }

    const x = Math.random() *
    (window.innerWidth - 150);

    const y = Math.random() *
    (window.innerHeight - 80);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

   
});
function goToLoading(){

    document
    .getElementById("gallery")
    .classList
    .remove("active");

    document
    .getElementById("loading")
    .classList
    .add("active");

    const loadingText =
    document.getElementById("loadingText");

    setTimeout(() => {

        loadingText.innerText =
        "Finding reasons you're amazing... 💖";

    },2000);

    setTimeout(() => {

        loadingText.innerText =
        "Too many results found 😭✨";

    },4000);

    setTimeout(() => {

        goToOpenLetter();

    },6000);

}
function goToOpenLetter(){

    document.getElementById("loading").classList.remove("active");
    document.getElementById("openLetter").classList.add("active");

}
function goToLetter(){

    document
    .getElementById("openLetter")
    .classList
    .remove("active");

    document
    .getElementById("letter")
    .classList
    .add("active");
}
function goToMatter(){

    document
    .getElementById("likes")
    .classList
    .remove("active");

    document
    .getElementById("matter")
    .classList
    .add("active");

    const text =
    document.getElementById("matterText");

    const messages = [

        "Life Got Better When You Came Along 🌸",

    "You're One Of My Favorite People Ever 🦋",

    "Thank You For Being My Safe Place 🤍",

    "You Make Everything A Little Brighter ✨",

    "My Days Are Happier Because Of You 💖",

    "Every Friend Group Needs A You 😂💕"


    ];

    let i = 0;

    const interval = setInterval(() => {

        i++;

        if(i < messages.length){

            text.innerText =
            messages[i];

        }

        else{

            clearInterval(interval);

            setTimeout(() => {

                goToFinal();

            },2500);

        }

    },2500);
}
function goToFinal(){

    document
    .getElementById("matter")
    .classList
    .remove("active");

    document
    .getElementById("final")
    .classList
    .add("active");
}
function showSecret(){

    confetti({
        particleCount:200,
        spread:180,
        origin:{ y:0.6 }
    });

    setTimeout(()=>{

        alert(
`Before you leave...

I hope you know how special you are 💖

And also...

You're stuck with me forever 😂

No refunds ❌

No exchanges ❌

Lifetime friendship contract signed ✍️

Happy Birthday Beautiful Soul 🎂✨`
      );},500);
    }

    function goToSecret(){

    document
    .getElementById("final")
    .classList
    .remove("active");

    document
    .getElementById("secret")
    .classList
    .add("active");

    confetti({
        particleCount:250,
        spread:180,
        origin:{ y:0.6 }
    });

}
function goToLikes(){

    document.getElementById("letter").classList.remove("active");
    document.getElementById("likes").classList.add("active");

    const things = [

        "You're you and i love everything about you  🌸",
        "Your Kindness 💖",
        "You remember random incidents and come remind me 😂",
        "You always make time for me 🦋",
        "You listen to me even though uk i am wrong sometimes but doesnt scold me  ✨"

    ];

    let i = 0;

    const text =
    document.getElementById("likeText");

    const interval = setInterval(() => {

        i++;

        if(i < things.length){

            text.innerText = things[i];

        }else{

            clearInterval(interval);

            setTimeout(() => {

                goToMatter();

            },5000);

        }

    },2000);

}
function goToContract(){

    document.getElementById("secret").classList.remove("active");
    document.getElementById("contract").classList.add("active");

}
function playSong(){

    const song =
    document.getElementById("birthdaySong");

    song.play();

}
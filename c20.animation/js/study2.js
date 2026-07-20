const sky = document.getElementById("sky");

// 동시에 존재할 최대 별똥별 개수
const STAR_COUNT = 24;

function createStar(){

    const star = document.createElement("div");

    star.className = "shooting-star";

    // 시작 위치
    const startX = Math.random() * window.innerWidth * 0.9;
    const startY = Math.random() * window.innerHeight * 0.35;

    // 길이
    const length = 80 + Math.random()*180;

    // 속도
    const duration = 1 + Math.random()*1.8;

    star.style.left = startX + "px";
    star.style.top = startY + "px";

    star.style.width = length + "px";

    star.style.animationDuration = duration + "s";

    sky.appendChild(star);

    star.addEventListener("animationend",()=>{

        star.remove();

    });

}

// 랜덤 간격으로 생성

function rain(){

    createStar();

    const delay = 200 + Math.random()*700;

    setTimeout(rain,delay);

}

// 시작

for(let i=0;i<STAR_COUNT;i++){

    setTimeout(createStar,Math.random()*5000);

}

rain();
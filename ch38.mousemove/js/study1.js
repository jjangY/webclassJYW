const mouseCursor = document.querySelector('.mouseCursor');
let cursorState = false;
const tooltipBox = document.querySelector('.tooltip-box');
document.addEventListener('mousemove',(e)=>{
    if(!cursorState){
    mouseCursor.style.display = 'block';
    cursorState = true;
    }

    // 마우스를 움직일 때마다 실행되는 소스코드
    mouseCursor.style.left = e.clientX+'px';
    mouseCursor.style.top = e.clientY+'px';
});

document.addEventListener('mousedown',()=>{
    mouseCursor.innerHTML = `<img src="./img/clicked.png" alt="클릭한 상태">`
});

document.addEventListener('mouseup',()=>{
    mouseCursor.innerHTML = `<img src="./img/default.png" alt="기본 마우스 커서">`
});

document.addEventListener('mousemove',(e)=>{
    tooltipBox.style.left = (e.clientX+120)+'px';
    tooltipBox.style.top = e.clientY+'px';
});

const tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach(spantag=>{
    // 각각의 span태그에 마우스를 올렸을 때
    spantag.addEventListener('mouseenter',()=>{
        tooltipBox.style.display = 'block';
        tooltipBox.innerHTML = spantag.getAttribute('data-tooltip');
        mouseCursor.innerHTML = `<img src="./img/clicked.png" alt="클릭한 상태">`
    });

    // 각각의 span태그에서 마우스를 뺏을 때
    spantag.addEventListener('mouseleave',()=>{
        tooltipBox.style.display = 'none';
        tooltipBox.innerHTML = ``;
        mouseCursor.innerHTML = `<img src="./img/default.png" alt="기본 마우스 커서">`
    });

});
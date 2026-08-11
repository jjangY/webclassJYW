document.addEventListener("DOMContentLoaded",()=>{

    const btn1 = document.querySelector('#btn1');
    const btn2 = document.querySelector('#btn2');
    const box = document.querySelector('.box');
    btn1.addEventListener('click', function(){
    
        box.innerHTML = '안녕하십니까! 클릭을 하셨군요';
    });
    btn1.addEventListener('dblclick',function(){
        box.innerHTML = '안녕하십니까! 더블 클릭을 하셨군요';
    });
    btn2.addEventListener('mousedown',()=>{
        box.innerHTML = '버튼을 누르고 있군요';
    });
    btn2.addEventListener('mouseup',()=>{
        box.innerHTML = '버튼을 놓았군요';  
    });
    box.addEventListener('mouseenter',()=>{
        box.innerHTML = '박스 안에 마우스를 들여놓았군요';
    })
    box.addEventListener('mouseleave',()=>{
        box.innerHTML = '박스 밖으로 마우스를 내보냈군요';
    });
});

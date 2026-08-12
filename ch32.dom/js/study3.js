console.log(this);

document.addEventListener("DOMContentLoaded",function(){

    console.log(this);

    const btn1 = document.querySelector('#btn1');
    const btn2 = document.querySelector('#btn2');
    const box = document.querySelector('.box');
    btn1.addEventListener('click',()=>{
        console.log(this);
        box.innerHTML = '안녕하십니까! 클릭을 하셨군요';
    });

    btn1.addEventListener('dblclick',function(){
        box.innerHTML = '안녕하십니까! 더블클릭을 하셨군요';
    });

    btn2.addEventListener('mousedown',()=>{
        box.innerHTML = '버튼을 누르고 있군요';
    });

    btn2.addEventListener('mouseup',()=>{
        box.innerHTML = '버튼을 놓았군요';
    })

    box.addEventListener('mouseenter',()=>{
        box.innerHTML = '박스 안에 마우스를 들여놓았군요';
    });

    box.addEventListener('mouseleave',()=>{
        box.innerHTML = '박스 밖으로 마우스를 내보냈군요';
    });

    document.addEventListener('click',(event)=>{
        console.log(event.target.textContent);
        console.log(event.target.className);
        console.log(event.target.tagName);
    });

    let taga = document.querySelectorAll('a');
    taga.forEach(tag=>{
        tag.addEventListener('click',(event)=>{
            event.preventDefault();
        });
    });
    // taga.addEventListener('click',function(event){
    //     event.preventDefault();
    // });
    const frame = document.querySelector('.frame');
    frame.addEventListener('click',function(){
        alert('프레임을 클릭하였습니다.');
    });
    const inbox = document.querySelector('.inbox');
    inbox.addEventListener('click',function(e){
        e.stopPropagation(); // 부모한테 전달되는 이벤트를 막을 수 있다.
        alert('안에 박스를 클릭하였습니다.');
    });


    const inputTag = document.querySelector('.input');
    inputTag.addEventListener('input',function(event){
        box.innerHTML = event.target.value;
        console.log(event.target.value);
    });
    inputTag.addEventListener('focus',()=>{
        console.log('입력을 시작하시겠군요..');
    });
    inputTag.addEventListener('blur',()=>{
        console.log('입력을 마치셨군요..');
    });



});
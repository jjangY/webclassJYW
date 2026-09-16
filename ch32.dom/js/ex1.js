document.addEventListener('DOMContentLoaded',()=>{
    
    let fontSizeBase = 20;
    //크게 버튼 눌렀을 때 동작하는 기능
    const html = document.querySelector("html");
    const btnFontUp = document.querySelector('#btn-font-up');
    btnFontUp.addEventListener('click',()=>{
        if(fontSizeBase>40){return}
        fontSizeBase++;
        html.style.fontSize = fontSizeBase +'px';
    });

    //작게 버튼 눌렀을 때 동작하는 기능(글씨크기 12이하는 작동x)
    const btnFontDown = document.querySelector('#btn-font-down');
    btnFontDown.addEventListener('click',()=>{
        if(fontSizeBase<=12){return}
        fontSizeBase--;
        html.style.fontSize = fontSizeBase +'px';
    });

    const btnToggle = document.querySelector("#btn-toggle");
    const fontControl = document.querySelector(".fontControl");
    btnToggle.addEventListener('click',()=>{
        fontControl.classList.toggle('on');
    });

    //아이콘 이미지 변경 기능
    let btnState = false; //이미지가 메뉴상태임을 뜻함 true가 되면 x이미지 상태를 뜻함.
    
    btnToggle.addEventListener('click', function(){
        if(btnState){
            //이미지를 닫기 이미지로 교체
            this.children[0].setAttribute('src','./img/close.svg').setAttribute('alt','닫기');
            btnState = true;
        }else{
            //이미지를 메뉴 이미지로 교체
            this.children[0].setAttribute('src','./img/menu.svg').setAttribute('alt','메뉴');
            btnState = false;
        }

    });

});

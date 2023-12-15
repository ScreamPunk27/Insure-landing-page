const button=document.querySelector('.nav__button');
let showMenu=false;


button.addEventListener('click',()=>{
    (showMenu===false)
    ? show()
    : hide();
})


const show = ()=>{
    document.querySelector('.nav__links').style.display="block";
    document.getElementById('img-menu').setAttribute('src','/images/icon-close.svg');
    showMenu=true;
}

const hide = ()=>{
    document.querySelector('.nav__links').style.display="none";
    document.getElementById('img-menu').setAttribute('src','/images/icon-hamburger.svg');
    showMenu=false;
}
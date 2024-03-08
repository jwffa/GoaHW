const menubar = document.getElementById('menuBar');
const exit = document.getElementById('exitClick');
const menu = document.getElementsByClassName('menu');


let clicks = 0;
menu[0].addEventListener('click', function(){
    clicks ++;
    if(clicks % 2 == 1){
        menubar.style.display = 'flex';
    }else{
        menubar.style.display = 'none';
    }
})

exit.addEventListener('click', function(){
    clicks = 0;
    menubar.style.display = 'none';
})




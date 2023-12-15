const burger = document.querySelector('.burger img');
const menu = document.querySelector('.main__menu');
const main = document.querySelector('.main__wrapper');
const footer = document.querySelector('footer');
const listItems = document.querySelectorAll('.list__item');

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active')
    main.classList.toggle('dn');
    footer.classList.toggle('dn');
    menu.classList.toggle('show');
    if(!burger.classList.contains('active')){
        location.reload();
    }
    if(burger.classList.contains('active')){
        for(let i=0; i <= listItems.length;i++){
            setTimeout(() => {
                listItems[i].classList.add('show');
            }, 100*i);
        }
    }
})
let nav = document.querySelector('.nav')
let button = document.querySelector('.nav_button')
let toggle = document.querySelector('.nav .arrow')
let buttonList = document.querySelectorAll('.nav .nav_button')
let logo = document.querySelector('.nav .logo img')

toggle.addEventListener('click', () =>{
    if(nav.className === 'nav'){
        nav.classList.add('toggle')
        toggle.classList.add('toggle')
        buttonList.forEach(button => {
            buttonList.forEach(button => {
                button.classList.add('toggle')
            });
        });
    }else{
        nav.classList.remove('toggle')
        toggle.classList.remove('toggle')
        buttonList.forEach(button => {
            buttonList.forEach(button => {
                button.classList.remove('toggle')
            });
        });
    }
})

buttonList.forEach(button => {

    button.addEventListener('click', () => {

        buttonList.forEach(button => {
            button.classList.remove('active');
        });

        logo.classList.remove('active')
        button.classList.add('active');

    });
});

logo.addEventListener('click', () =>{
    buttonList.forEach(button => {
        button.classList.remove('active');
    });

    logo.classList.add('active')
})
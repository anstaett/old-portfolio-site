const hbSlide = () => {
    const burger = document.querySelector('.burger');
    const hblinks = document.querySelector('.hb-links');
    const mainbody = document.querySelector('.mainbody');
    const links = document.querySelectorAll('hb-links li');
    const mb = document.querySelector('.mainbody');
    const burgerlines = document.querySelectorAll('.burger div');

    burger.addEventListener('click', () =>{
        hblinks.classList.toggle('hb-active');
        mainbody.classList.toggle('bodytext-active');
    });

    // burger.addEventListener('click', () =>{
    //     burgerlines.classList.toggle('burgeractive');
    // });
    
}

//



hbSlide();
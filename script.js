
var slider = document.getElementsByClassName('Testimonials__slider_js')[0],
    window = document.getElementsByClassName('slider_js')[0],
    number = 0,
    right = document.getElementsByClassName('swap_js')[0];


right.addEventListener('click' , function(){
    if(number != 2 ){
          // slide.style.backgroundColor = 'red';
            slider.style.transform = `translateX(-${++number * 400}px)`;             
          }else {
            number = 0;
            slider.style.transform = `translateX(${number * 400}px)`;
          } 
})


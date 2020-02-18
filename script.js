function menuToggle(){
    let nav = document.getElementById('nav');
    nav.classList.toggle('active');
    let toggle = document.getElementById('toggle');
    toggle.classList.toggle('active');
}


$('.fade').slick({
 
  infinite: true,
  speed: 200,
  fade: true,
  cssEase: 'linear'
});
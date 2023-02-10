function preloader(){
  document.querySelector(".preloader").classList.add("preloaded");
}

// jquery here
// scroll top button js
$(document).ready(function(){
  $("#scroll_top_btn").click(function(){
    $(window).scrollTop(0);
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#scroll_top_btn').fadeIn();
        $("#hader_nav_area").addClass("header_nav_menu_fixed").fadeIn();
    } else {
        $('#scroll_top_btn').fadeOut();
        $("#hader_nav_area").removeClass("header_nav_menu_fixed").fadeIn();
    }
  });
  // footer year date
  let yearDate = new Date();
  $(".year_date").html(yearDate.getFullYear());

  // navbar toggler button
  $(".header_menu_remove").click(function(){
    $("#header_nav_menu").toggleClass("header_nav_menu_active");
    $(".header_menu_remove").toggleClass("header_menu_remove_active");
  })
  $(".navbar-toggler").click(function(){
    $("#header_nav_menu").toggleClass("header_nav_menu_active");
    $(".header_menu_remove").toggleClass("header_menu_remove_active");
  })

  // dark toggler button
  $(".darkToggler").click(function(){
    $('.darkWhite_btn').toggleClass("fa-moon").toggleClass("fa-sun");
    $("#body").toggleClass("dark")
  })














})



// owl carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    
    responsive:{
      0:{
          items:1,
          nav:true
      },
      768:{
          items:2,
          nav:true,
      },
      992:{
          items:3,
          nav:true
      }
  }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// countdown js here
let cp_counter_value = document.querySelector(".cp_counter_value");
let wp_counter_value = document.querySelector(".wp_counter_value");
let ph_counter_value = document.querySelector(".ph_counter_value");
let ps_counter_value = document.querySelector(".ps_counter_value");
let count = 0;

setInterval(() => {
  if(count <350){
    count++;
    cp_counter_value.innerHTML = count + " +";
  }
},10);
setInterval(() => {
  if(count <120){
    count++;
    wp_counter_value.innerHTML = count + " +";
  }
},40);
setInterval(() => {
  if(count <200){
    count++;
    ph_counter_value.innerHTML = count + " +";
  }
},40);
setInterval(() => {
  if(count <158){
    count++;
    ps_counter_value.innerHTML = count + " +";
  }
},40);


// expeience counter here
// let wp_count = document.querySelector(".wp_count");
// let html_count = document.querySelector(".html_count");
// let css_count = document.querySelector(".css_count");
// let bs_count = document.querySelector(".bs_count");
// let js_count = document.querySelector(".js_count");
// let jquery_count = document.querySelector(".jquery_count");


// setInterval( () => {
//   if(count < 90){
//     count++;
//     wp_count.innerHTML = count + " +";
//   }
// }, 10)
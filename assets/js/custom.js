$(document).ready(function() {
  $(".smooth_scroll").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {});
    } // End if
  });
});


var canvas_wrapper = document.getElementById("canvas_wrapper");
var past_index = 3;
var new_index;

function find_new_index() {
  new_index = Math.floor(Math.random() * 20) + 9;

  if (new_index !== past_index) {
    past_index = new_index;
    return new_index;
  } else {
    return find_new_index();
  }

}

window.addEventListener("scroll", function() {

  find_new_index();
  canvas_wrapper.style.zIndex = new_index;

});

var bodyE = document.body;
var nav_bubble = document.getElementById('nav_bubble');
var nav_bubble_ul = nav_bubble.getElementsByTagName('UL')[0];
var toggle_icon = document.getElementById('header').getElementsByClassName('toggle_icon')[0];

//toggle drop down
function drop_menu(e) {
  var toggle_icon_status = toggle_icon.getAttribute('active');
  if (toggle_icon_status == null) {
    bodyE.setAttribute('freeze', '');
    toggle_icon.setAttribute('active', '');
    nav_bubble.setAttribute('active', '');
    setTimeout(
      function() {
        nav_bubble_ul.setAttribute('active', '');
      }, 200
    );
  } else {
    nav_bubble_ul.removeAttribute('active');
    setTimeout(
      function() {
        toggle_icon.removeAttribute('active');
        nav_bubble.removeAttribute('active');
        bodyE.removeAttribute('freeze');
      }, 200
    );
  }
}

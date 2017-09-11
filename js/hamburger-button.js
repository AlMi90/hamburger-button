$(function() {
    $(".hamburger-button").click(function() {
        if(this.classList.contains("active") === true) {
          $(".hamburger-button").removeClass("active");
          $(".nav").css("display", "none");
        } 
        else {
          $(this).toggleClass("active");
          $(".nav").css("display", "block");
        }
    })
});
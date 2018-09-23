// aos Animation start
// AOS.init();
// aos Animation end

// page Loader script start
// document.onreadystatechange = function() {
//   var state = document.readyState;
//   if (state == "interactive") {
//     document.getElementsByName("body").style.visibility = "hidden";
//   } else if (state == "complete") {
//     setTimeout(function() {
//       document.getElementById("interactive");
//       document.getElementById("load").style.visibility = "hidden";
//       document.getElementsByName("body").style.visibility = "visible";
//     }, 2000);
//   }
// };
// page Loader script end

$(document).ready(function() {
  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      $("#header").addClass("smallNav");
    } else {
      $("#header").removeClass("smallNav");
    }
  }

  // owl-carousel start
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 50,
    responsiveClass: true,
    center: true,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 2500,
    dots: false,

    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 4,
        nav: false,
        loop: true
      }
    }
  });

  // owl-carousel start

  // Scroll to Top script start
  var amountScrolled = 200;
  $(window).scroll(function() {
    if ($(this).scrollTop() > amountScrolled) {
      $("#back-to-top").addClass("show-hide-top");
    } else {
      $("#back-to-top").removeClass("show-hide-top");
    }
  });
  // scroll body to 0px on click
  $("#back-to-top").click(function() {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      700
    );
    return false;
  });

  // Scroll to Top script end
  $("#close_enquiry").click(function() {
    $(".enquire_now_main").toggleClass("open_close");
  });

  $("#close_enquiry1").click(function() {
    $(".enquire_now_main").toggleClass("open_close");
  });

  // enquiry form show hide
  $(".homeContact").popover({
    title: "Header",
    content: "Blabla",
    placement: "bottom",
    trigger: "hover"
  });
});

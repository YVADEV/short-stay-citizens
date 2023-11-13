// Initialization for ES Users
import {
    Modal,
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Modal, Ripple });

const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


  document.getElementById("bookingForm").addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Apartment booked successfully! Thank you for choosing our service."
      );
    });

    //swiper

    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      initialSlide: 1,
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30, // Adjust space between slides
      coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 20,
          modifier: 1,
          slideShadows: true,
          centeredSlides: true,

  // Set slidesPerView to a fraction on mobile to show part of the next slide
  slidesPerView: 1.1,
  spaceBetween: 10, // adjust the space to create the "peek" effect

      },
      
      // Removed pagination and navigation initialization
      breakpoints: {
          // when window width is >= 320px
          320: {
              slidesPerView: 1.5,
              spaceBetween: 20,
              coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                  slideShadows: false,
              },
          },
          // when window width is >= 640px
          640: {
              slidesPerView: 2,
              spaceBetween: 20,
              coverflowEffect: {
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
              },
          },
          // when window width is >= 1024px
          1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              coverflowEffect: {
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
              },
          },
      }
  });


//no scroll
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


    const slidesContainer = document.querySelector(".slides-container");
    const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
  
    nextButton.addEventListener("click", () => {
      slidesContainer.scrollLeft += slideWidth;
    });
  
    prevButton.addEventListener("click", () => {
      slidesContainer.scrollLeft -= slideWidth;
    });
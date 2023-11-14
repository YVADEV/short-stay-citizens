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



// test new 3d carousel

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

const updateCarousel = () => {
    slides.forEach(slide => {
        slide.classList.remove('active', 'prev', 'next');
        slide.style.opacity = '0'; // Hide all slides
    });

    // Wrap around the slides
    const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    const nextSlide = (currentSlide + 1) % totalSlides;

    // Position the slides
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.opacity = '1'; // Show current slide

    if (slides[prevSlide]) {
        slides[prevSlide].classList.add('prev');
        slides[prevSlide].style.opacity = '0.6'; // Show peek of previous slide
    }

    if (slides[nextSlide]) {
        slides[nextSlide].classList.add('next');
        slides[nextSlide].style.opacity = '0.6'; // Show peek of next slide
    }
};

const moveSlide = (n) => {
    currentSlide = (n + currentSlide + totalSlides) % totalSlides;
    updateCarousel();
};

// ... (same initialization as before) ...

let startX, isDown = false;

const dragStart = (e) => {
    isDown = true;
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
};

const dragEnd = () => {
    if (isDown) {
        if (moveX > 50) {
            moveSlide(-1);
        } else if (moveX < -50) {
            moveSlide(1);
        }
    }
    isDown = false;
};

let moveX;

const dragMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    moveX = x - startX;
};

// Attach the handlers to the carousel
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mouseup', dragEnd);
carousel.addEventListener('mouseleave', dragEnd);
carousel.addEventListener('mousemove', dragMove);
carousel.addEventListener('touchstart', dragStart);
carousel.addEventListener('touchend', dragEnd);
carousel.addEventListener('touchmove', dragMove);

// ... (rest of the script is the same as previous example) ...


window.onload = updateCarousel; // Initialize the carousel

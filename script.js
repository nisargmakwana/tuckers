'use strict';

// Quotes Timer
////////////////////

// Array of texts to cycle through
const quotes = [
  '“My dog jumps with excitement at meal time.”',
  '“I wish we switched sooner. This was the best decision.”',
  '“Our vet was amazed and all we did was change his food.”',
  '“Finley jumps in circles when it’s meal time.”',
  '“I trust that it’s healthy and fresh with each delivery!”',
  '“My dog jumps with excitement at meal time.”',
];

// A variable tracker
let curIndex = 0;

// Function to change text every 2 seconds
const changingQuote = function () {
  document.querySelector('.quotes').textContent = quotes[curIndex];
  curIndex = (curIndex + 1) % quotes.length;
};
// Calling this changingQuote function every 2 seconds
setInterval(changingQuote, 1250);

// Mobile nav
////////////////////

const navBtn = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');
const ctaBox = document.querySelector('.cta-container');

navBtn.addEventListener('click', function () {
  if (!header.classList.contains('nav-open')) {
    header.classList.add('nav-open');
    ctaBox.style.position = 'static';
  } else {
    header.classList.remove('nav-open');
    ctaBox.style.position = 'sticky';
  }
});

// Revealing elements

const allSections = document.querySelectorAll('.h-element');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('element--hidden');

  // Stop observing elements after making them visible once

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (element) {
  sectionObserver.observe(element);
  element.classList.add('element--hidden');
});

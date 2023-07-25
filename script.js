'use strict';

const btns = document.querySelectorAll('.faq-toggle');

// First way - read  buttons directly
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active');
  });
});

// // Second way - read event
// const toggleActive = function (event) {
//   event.target.closest('.faq').classList.toggle('active');
// };

// btns.forEach(btn =>
//   btn.addEventListener('click', function (event) {
//     toggleActive(event);
//   })
// );

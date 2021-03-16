// Lectures
// Selecting Elements
console.log(document.documentElement); // Entire HTML
console.log(document.head);
console.log(document.body);

console.log(document.querySelector('.header'));
const allSections = document.querySelectorAll('.section');
console.log(allSections);

console.log(document.getElementById('section--1'));
// HtmlCollection updates automatically
console.log(document.getElementsByTagName('button'));
console.log(document.getElementsByClassName('section'));

// Creating and inserting elements
// .insertAdjacentHTML is the most common way

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `
  We use cookies for improved functionality and analytics.
  <button class="btn btn--close-cookie">Got it!</button>`;

// document.querySelector('.header').prepend(message);
// document.querySelector('.header').before(message);
// document.querySelector('.header').after(message);
document.querySelector('.header').append(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

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

// Styles
console.clear();
message.style.backgroundColor = '#37383d';
message.style.width = '106.9%';

// To get a computed style (in stylesheets) use the built-in function
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseInt(getComputedStyle(message).height) + 40 + 'px';

// Setting CSS Variables (Custom properties) with setProperty
document.documentElement.style.setProperty('--color--primary', 'orangered');

// Attributes
// src alt class id and etc
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// You can also use getAttribute
console.log(logo.getAttribute('alt'));

// You can also set values
logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('alt', 'Bankist logo');

// Data attributes
console.log(logo.dataset.version);

// Classes
// logo.classList.add('test');
// logo.classList.remove('test');
// logo.classList.toggle('test');
// logo.classList.contains('test');

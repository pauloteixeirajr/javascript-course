/**
 * Coding Challenge #3
 *
 * PART 1
 * Write an async function 'loadNPause' that recreates Coding Challenge #2,
 * this time using async/await (only the part where the promise is consumed).
 * Compare the two versions, think about the big differences, and see which one you like more.
 * Don't forget to test the error handler, and to set the network speed to
 * 'Fast 3G' in the dev tools Network tab.
 *
 * PART 2
 * 1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
 *
 * 2. Use .map to loop over the array, to load all the images with the 'createImage'
 * function (call the resulting array 'imgs')
 *
 * 3. Check out the 'imgs' array in the console! Is it like you expected?
 *
 * 4. Use a promise combinator function to actually get the images from the array 😉
 *
 * 5. Add the 'paralell' class to all the images (it has some CSS styles).
 *
 * TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'].
 * To test, turn off the 'loadNPause' function.
 * GOOD LUCK 😀
 */

'use strict';

const waitAsync = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImageAsync = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      document.querySelector('.images').append(img);
      resolve(img);
    });
    img.addEventListener(
      'error',
      reject.bind(null, new Error('Image not found'))
    );
  });
};

const loadNPause = async function () {
  try {
    // Loading img 1
    let img = await createImageAsync('img/img-1.jpg');
    await waitAsync(2);
    img.style.display = 'none';

    // Loading img 2
    img = await createImageAsync('img/img-2.jpg');
    await waitAsync(2);
    img.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  const imgs = await Promise.all(imgArr.map(img => createImageAsync(img)));
  imgs.forEach(img => img.classList.add('parallel'));
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

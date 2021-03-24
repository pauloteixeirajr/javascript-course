'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('afterend', msg);
};

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>
            ${(data.population / 1000000).toFixed(1)}M people
          </p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const getCountryDataAndNeighbourXMLHttpRequest = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render first country
    renderCountry(data);

    // Get neighbour country
    const [neighbour] = data.borders;

    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      // Render second country
      renderCountry(data2, 'neighbour');
    });
  });
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// New Fetch API (easier to use)
const getCountryData = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'country not found'
  )
    .then(([data]) => {
      renderCountry(data);
      const [neighbour] = data.borders;

      if (!neighbour) throw new Error('No neighbour found');

      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'country not found'
      );
    })
    .then(data2 => renderCountry(data2, 'neighbour'))
    .catch(err => {
      renderError(`Something went wrong: ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// Building a Simple Promise
const lotteryPromise = new Promise((resolve, reject) => {
  console.log('Lottery draw is happening: ...');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You won! 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisifying setTimeout
const wait = function (seconds = 1) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(5);
  })
  .then(() => console.log('I waited for 5 seconds'));

// Creating a promise with a static method (resolves immediately)
Promise.resolve('abc').then(x => console.log(x));
Promise.reject('abc').catch(x => console.log(x));

// Promisifying the Geolocation API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(
          `Wait a few seconds and try again. (${response.status})`
        );
      return response.json();
    })
    .then(location => {
      const { city, country } = location;
      console.log(`You are in ${city}, ${country}`);

      return fetch(
        `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
      );
    })
    .then(response => {
      return response.json();
    })
    .then(([data]) => {
      renderCountry(data);
    })
    .catch(err => console.log(err))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

console.clear();

// Consuming Promises with Async/Await
const whereAmIAsync = async function () {
  try {
    // Geolocation
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    // Reverse Geocoding
    const geo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!geo.ok) throw new Error('Problem getting location data');
    const dataGeo = await geo.json();

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}?fullText=true`
    );
    if (!res.ok) throw new Error('Problem getting country');
    const [data] = await res.json();
    renderCountry(data);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    renderError(`Something went wrong: ${err.message}. Try again!`);
  } finally {
    countriesContainer.style.opacity = 1;
  }
};

btn.addEventListener('click', function () {
  whereAmIAsync();
});

// (async function () {
//   try {
//     console.log('1: Will get location');
//     const city = await whereAmIAsync();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.log(`3: ${err}`);
//   } finally {
//     console.log('3: Finished getting location');
//   }
// })();

const get3Countries = async function (c1, c2, c3) {
  try {
    const p1 = getJSON(
      `https://restcountries.eu/rest/v2/name/${c1}?fullText=true`
    );
    const p2 = getJSON(
      `https://restcountries.eu/rest/v2/name/${c2}?fullText=true`
    );
    const p3 = getJSON(
      `https://restcountries.eu/rest/v2/name/${c3}?fullText=true`
    );

    const data = await Promise.all([p1, p2, p3]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.log(err);
  }
};

// Other Promise Combinators: race, allSettled and any
(async function () {
  const p1 = getJSON(
    `https://restcountries.eu/rest/v2/name/italy?fullText=true`
  );
  const p2 = getJSON(
    `https://restcountries.eu/rest/v2/name/egypt?fullText=true`
  );
  const p3 = getJSON(
    `https://restcountries.eu/rest/v2/name/mexico?fullText=true`
  );
  // Promise.race
  // The first promise to return is resolved (winning the race)
  // If a promise is rejected it also wins the race
  // A common use case is loading a timeout promise
  // and if the resource you are trying to load takes too long
  // the timeout function will resolve/reject first
  // which will let the user know the request took too long
  const res = await Promise.race([p1, p2, p3]);
  console.log(res);

  // Promise.allSettled
  // Similar to Promise.all, but it does not short-circuit if
  // one of the promises is rejected. Instead, it returns an array
  // with the promise status & the value/error
  const settled = await Promise.allSettled([p1, p2, p3]);
  console.log(settled);

  // Promise.any [ES2021]
  // Returns the first fullfilled promise
  // Similar to Promise.race but it ignores rejected promises
  const anyPromise = await Promise.any([p1, p2, p3]);
  console.log(anyPromise);
})();

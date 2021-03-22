'use strict';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map, mapEvent;

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    position => {
      const tileLayer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const footNote =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
      const { latitude, longitude } = position.coords;
      const coords = [latitude, longitude];
      map = L.map('map').setView(coords, 15);

      L.tileLayer(tileLayer, {
        attribution: footNote,
      }).addTo(map);

      map.on('click', function (ev) {
        mapEvent = ev;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    error => {
      console.log('Cold not get current position', error);
    }
  );
}

// Form Event Handler
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Show marker
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Running Workout')
    .openPopup();

  // Clear input fields
  inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
    '';
});

inputType.addEventListener('change', function () {
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
});

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

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    position => {
      const tileLayer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const footNote =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
      const { latitude, longitude } = position.coords;
      const coords = [latitude, longitude];
      const map = L.map('map').setView(coords, 13);

      L.tileLayer(tileLayer, {
        attribution: footNote,
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup('You can add any labels in here')
        .openPopup();
    },
    error => {
      console.log('Cold not get current position', error);
    }
  );
}

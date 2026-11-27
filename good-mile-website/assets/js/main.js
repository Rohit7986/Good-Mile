// Good Mile website: small front-end behaviours. No dependencies.
(function () {
  'use strict';

  // Mobile menu
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  if (header && toggle) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Quote form: show the temperature fields only for refrigerated equipment
  var equipment = document.getElementById('equipment');
  var reefer = document.getElementById('reefer-fields');
  if (equipment && reefer) {
    var sync = function () {
      var isReefer = equipment.value === 'Refrigerated';
      reefer.hidden = !isReefer;
      var temp = document.getElementById('set-temp');
      if (temp) { temp.required = isReefer; }
    };
    equipment.addEventListener('change', sync);
    sync();
  }

  // Forms are not connected to a server yet. Until the backend exists,
  // stop the submit and say so, instead of pretending the message was sent.
  document.querySelectorAll('form[data-static]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var status = form.querySelector('.form-status');
      if (status) {
        status.classList.add('is-visible');
        status.focus();
      }
    });
  });

  // Footer year
  var year = document.getElementById('year');
  if (year) { year.textContent = String(new Date().getFullYear()); }
})();

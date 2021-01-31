init();

function init() {
  _showDetail(false);
  _defineTimezone();
  _setDayOfWeek();
  _setDayOfYear();
  _setWeekNumber();
  setInterval(startApplication, 1000);
}

function _defineTimezone() {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timeZoneContent = timeZone.split('/');
  const timeZoneCity = timeZoneContent[1].replace('_', ' ');
  const text = `in ${timeZoneCity}, ${timeZoneContent[0]}`;
  $.getElement('.location').textContent = text;
  $.getElement('.detail-location').textContent = timeZoneCity;
}

function startApplication() {
  var hour = _startTimer();

  if (hour >= 18) {
    _setTimeNight();
  } else {
    _setTimeDay();
  }
}

function _startTimer() {
  var date = new Date();
  var timeFormated = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
  $.getElement('.time').setText(timeFormated);
  return date.getHours();
}

function _setTimeDay() {
  $.getElement('.message p').setText("Good Morning, It's currently");
  $.getElement('.message img').setImage('./assets/desktop/icon-sun.svg');
  $.getElement('body').setBackground('./assets/desktop/bg-image-daytime.jpg');
}

function _setTimeNight() {
  $.getElement('.message p').setText("Good Night, It's currently");
  $.getElement('.message img').setImage('./assets/desktop/icon-moon.svg');
  $.getElement('body').setBackground('./assets/desktop/bg-image-nighttime.jpg');
}

function _showDetail(show) {
  if (show) {
    $.getElement('.detail').removeClass('hidden');
    $.getElement('.cite').addClass('hidden-cite');
  } else {
    $.getElement('.detail').addClass('hidden');
    $.getElement('.cite').removeClass('hidden-cite');
  }
}

$.click('.button', (event, buttonElement) => {
  let buttonActived = buttonElement.containClass('actived');

  if (buttonActived) {
    buttonElement.removeClass('actived');
    buttonElement.getFirstChild('label').setText('more');
    _showDetail(false);
  } else {
    buttonElement.addClass('actived');
    buttonElement.getFirstChild('label').setText('less');
    _showDetail(true);
  }
});

function _setDayOfWeek() {
  const day = new Date().getDay() + 1;
  $.getElement('.day-of-week').setText(day);
}

function _setDayOfYear() {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  $.getElement('.day-of-year').setText(day);
}

function _setWeekNumber() {
  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneWeek = 1000 * 60 * 60 * 168;
  var day = Math.floor(diff / oneWeek);
  $.getElement('.week-number').setText(day);
}

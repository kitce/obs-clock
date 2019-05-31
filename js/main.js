(function () {
  const clock = document.querySelector('.clock');

  function update () {
    const time = moment().format('HH:mm:ss');
    clock.innerText = time;
  }

  update();
  setInterval(update, 1000);
})();

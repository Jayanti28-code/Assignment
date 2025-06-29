const input = document.getElementById('pounds');
const result = document.getElementById('result');

input.addEventListener('input', () => {
  const pounds = parseFloat(input.value);
  if (!isNaN(pounds)) {
    const kg = (pounds * 0.453592).toFixed(2);
    result.textContent = `Your weight in kg is: ${kg}`;

    // Clear after 10 seconds
    clearTimeout(window.clearTimer);
    window.clearTimer = setTimeout(() => {
      result.textContent = 'Your weight in kg is:';
      input.value = '';
    }, 10000);
  } else {
    result.textContent = 'Your weight in kg is:';
  }
});

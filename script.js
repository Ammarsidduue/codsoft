const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('clear')) {
      display.value = '';
    } else if (button.classList.contains('back')) {
      display.value = display.value.slice(0, -1); // remove last character
    } else if (button.classList.contains('equal')) {
      try {
        display.value = eval(display.value); // evaluates the expression
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += button.textContent;
    }
  });
});

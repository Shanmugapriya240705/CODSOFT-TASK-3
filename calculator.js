document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.button');
    let currentInput = '0';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.innerText === 'C') {
                currentInput = '0';
            } else if (button.innerText === '=') {
                try {
                    currentInput = eval(currentInput).toString();
                } catch {
                    currentInput = 'Error';
                }
            } else {
                if (currentInput === '0' || currentInput === 'Error') {
                    currentInput = button.innerText;
                } else {
                    currentInput += button.innerText;
                }
            }
            display.innerText = currentInput;
        });
    });
});

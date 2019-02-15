let entireCalc = document.querySelector('.container');
let screen = document.querySelector('.scherm');


// Geklikt nummer naar het scherm

entireCalc.addEventListener('click', (event) => {
    const button = event.target;
    console.log(button.classList);

    if(button.classList.contains('number')){            
            screen.textContent += button.textContent;
    }
});
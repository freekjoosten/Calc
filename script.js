let entireCalc = document.querySelector('.container');
let screen = document.querySelector('.scherm');

entireCalc.addEventListener('click', (event) => {
    const button = event.target;
    console.log(button.classList);

    if(button.classList.contains('number')){
        screen.textContent = button.textContent;
    }
});

// numberButtons.addEventListener('click', (event) => {
//     const button = event.target;
//     console.log(button.classList);
  
//     if(button.classList.contains('number')){
//         screen.textContent = button.textContent;
//     }
// });


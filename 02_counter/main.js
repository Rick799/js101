//  seting counter variable's value equal to 0

let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

// TODO 01: use arrow function
// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const styles = e.currentTarget.classList;

btns.forEach( (btn) => {
   btn.addEventListener('click', (e) => {
     const styles = e.currentTarget.classList;

     // TODO 02: use ternary operator
    // if (styles.contains("increase")) count++;
    // else if (styles.contains("decrease")) count--;
    // else count = 0;
    // value.textContent = count;
     
     (styles.contains("increase")) ? count++ : (styles.contains("decrease")) ? count-- : count = 0;
      value.textContent = count;
    // TODO 03: use ternary operator
    //  change the color of the value wrt buttons

    // if (count > 0) value.style.color = "green";
    // else if (count < 0) value.style.color = "red";
    // else value.style.color = "black";
     
     (count > 0) ? (value.style.color = "green") : (count < 0) ? (value.style.color = "red") : value.style.color = "black"; 
  });
})
document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".display p");
    const buttons = document.querySelectorAll(".pad button");
    
    let currentInput = "0";
    
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        const buttonText = button.textContent;
        
        if (buttonText === "CL") {
          currentInput = "0";
        } else if (buttonText === "DEL") {
          currentInput = currentInput.slice(0, -1);
          if (currentInput === "") {
            currentInput = "0";
          }
        } else if (buttonText === "=") {
          try {
            currentInput = eval(currentInput).toString();
          } catch (error) {
            currentInput = "Error";
          }
        } else {
          if (currentInput === "0") {
            currentInput = buttonText;
          } else {
            currentInput += buttonText;
          }
        }
        
        display.textContent = currentInput;
      });
    });
  });
  
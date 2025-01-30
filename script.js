let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
/* arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    });
}); */

function calculate(key) {
    if (key == '=') {
        try {
            string = eval(string); 
            input.value = string;
        } catch (error) {
            input.value = "Error";
        }
    } else if (key == 'AC') {
        string = "";
        input.value = string;
    } else if (key == 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
    } else if (key == 'sqrt') {
        string = Math.sqrt(eval(string)).toString(); 
        input.value = string;
    } else if (key == '^') {
        string += "**"; 
        input.value = string;
    } else {
        string += key;
        input.value = string;
    }
}

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;
        calculate(buttonText);
    });
});

document.addEventListener('keydown', (e) => {
    let key = e.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.', '%', 'Enter', 'Backspace', 'Escape', '^'].includes(key)) {
        // Check for operator or numeric input
        if (key === 'Enter') {
            key = '=';
        } else if (key === 'Backspace') {
            key = 'DEL';
        } else if (key === 'Escape') {
            key = 'AC';
        }
        calculate(key);
    }
});

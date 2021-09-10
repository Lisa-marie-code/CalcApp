let display = document.getElementById("display");
let operation = document.getElementsByClassName("boxOpera")
let number = document.getElementsByClassName("boxNum")




const operationKey = Array.from(document.getElementsByClassName("boxOpera"));

operationKey.map(boxOpera => {
    boxOpera.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'RESET':
                display.innerText = '';
                break;  
            case 'DEL':
                if(display.innerText){
                        display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!';
                }
                break;
                
            default:
                    display.innerText += e.target.innerText;
        }
    });
});


const key = Array.from(document.getElementsByClassName("boxNum"));

key.map( boxNum => {
    boxNum.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case '.':
                if(display.innerText === '.' && display.innerText.includes('.')){
                    display.innerText = ''; 
                }
                break;

            default:
                display.innerText += e.target.innerText;
            


        }
    });
});
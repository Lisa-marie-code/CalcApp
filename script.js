let display = document.getElementById("display");

let key = Array.from(document.getElementsByClassName("box"));

key.map( box => {
    box.addEventListener('click', (e) => {
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
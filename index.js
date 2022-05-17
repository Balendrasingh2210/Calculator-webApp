let screen = document.getElementById('input-screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is', buttonText);
        
        if (buttonText == "÷"){
            buttonText = "/";
            // screenValue +=buttonText;
            screenValue += '÷';
            screen.textContent = screenValue;
        }
        else if(buttonText == "AC"){
            screenValue = "";
            screen.textContent = screenValue;
        }
        
        else if(buttonText == "DEL"){
            var del = screen.textContent;
            screen.textContent = del.substr(0,del.length-1);
        }
        else if(buttonText == "x"){
            screenValue += 'x';
            screen.textContent = screenValue;
        }
        else if(buttonText == '='){
            screenValue=screenValue.replace(/x/g, "*");
            screenValue=screenValue.replace(/÷/g, "/");
            screen.textContent = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.textContent = screenValue;
        }

    })
}

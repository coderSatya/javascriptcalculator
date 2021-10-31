const cal = document.querySelector('input');
const butt = document.querySelectorAll('button');
let screenValue = '';
for(item of butt){
    item.addEventListener('click',(e)=>{
       let  buttonText = e.target.innerText
    console.log(buttonText);

    if(buttonText=="X"){
        buttonText = '*';
        screenValue += buttonText;
       cal.value = screenValue;

    }else if(buttonText == 'C'){
        screenValue = "";
        cal.value = screenValue;

    }else if(buttonText == '='){
        cal.value = eval(screenValue);
    }
    else{
        screenValue += buttonText;
        cal.value = screenValue;
    }
    })
}

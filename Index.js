const CelciusC1=document.getElementById("Celcius");
const FahrenheitF1=document.getElementById("Fahrenheit");

function computeTemp(){
  const  currValue=event.target.value;
switch(event.target.name){
    case "Celcius":
        FahrenheitF1.value=currValue*1.8+32;
        break;
    case "Fahrenheit":
        CelciusC1.value=(currValue-32)/1.8;
        break;
    default:
        break;
}
}

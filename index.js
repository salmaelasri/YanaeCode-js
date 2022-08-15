/*
//Q1
let text= document.getElementById("demo").innerHTML;
const tab = paragraph.split(" ");
for(let i=0;i<tab.length;i++){
    if(tab[i].lenght>6){
        paragraph.style.backgroundColor="yellow";
    }
}
//Q3
const tab = paragraph.split(".");
console.log(tab);/
//Q4
document.getElementById("demodemo").innerHTML=tab.lenght;
//Q5
text=text.replace("/?/g","thinking faces");
text=text.replace("/!/g","astonished faces");
*/
//Exercice2********************************************************************************************************************************* 
let form = document.getElementById("regesterform");
let name = document.getElementById("txt1");
let password = document.getElementById("txt2");
let password2 = document.getElementById("txt3");
let error = document.getElementById("error");



document.getElementById("txt4").addEventListener("click", function(event){
    if(name.value=== "" ){
        error.innerHTML="enter your name!";
    }

    if else (password.value=== "" ){
        error.innerHTML="enter your password!";

    }

     if else(.value=== ""){
        error.innerHTML="confirm your password!";
    }


    event.preventDefault()
  });


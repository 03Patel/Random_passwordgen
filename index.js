let inputSlider=document.getElementById("inputSlider");
let lowercase=document.getElementById("lowercase");
let number=document.getElementById("number");
let uppercase=document.getElementById("uppercase");
let symbols=document.getElementById("symbols");
let sliderValue=document.getElementById("sliderValue");
let passBox=document.getElementById("passBox");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon");


 

 
passBox.value="";
inputSlider.value="8";
number.checked=false;
uppercase.checked=false;
lowercase.checked=false;
symbols.checked=false;
sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.value; 
});
genBtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
    number.checked=false;
    uppercase.checked=false;
    lowercase.checked=false;
    symbols.checked=false;
})
let upperChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numBer="012346789";
let Symbols="~!@#$%^&*";
let lowerChar="abcdefghijklmnopqrstuvwxyz";
function generatePassword(){

    let genPassword="";
    let allChars="";

    allChars += lowercase.checked ?lowerChar : "";
    allChars += uppercase.checked ?upperChar : "";
    allChars += symbols.checked ?Symbols : "";
    allChars += number.checked ?numBer : "";
if(allChars==""||allChars.length==0){
    return genPassword;
}

    
    let i=1;
    while(i<=inputSlider.value){
    genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length));
    i++;
    }
  


    return genPassword;
}

copyIcon.addEventListener('click',()=>{
    if(passBox.value!=""||passBox.value.length>=1){
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText="check";
    copyIcon.title="Password Copies";
    setTimeout(()=>{
        copyIcon.innerHTML="content_copy";
        copyIcon.title="";
        passBox.value="";
        check.checked=false;
    },2000);

    }
})
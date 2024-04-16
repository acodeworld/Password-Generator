

let slider = document.getElementById("sliderRange");
let sliderValue = document.getElementById('sliderRange').value;
let num = document.getElementById('number');
let numValue = document.getElementById('number').value;
let passLength = ''

const x = document.querySelectorAll(".btn-copied");
const b = document.getElementById("hideBtn");
const z = Array.from(x);
const n = document.getElementsByClassName("btn-copied")
const button = document.getElementById('button');
const password = document.getElementsByClassName('pass');
const passStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#?."
let passArray = passStr.split('');

const para = document.querySelectorAll(".pass-text");

let passText = '';


function onStart() {
    for (let i = 0; i < password.length; i++) {
        while (passText.length < document.getElementById('number').value) {
            
            passText += passArray[Math.floor(Math.random() * passArray.length)];        
          }
        
          para[i].textContent = passText;
          passText = ''; 

    }
}
    
onStart();
  




// Pass generation via numeric entry
num.onchange = function () {



    if(document.getElementById('number').value < 8 ){
        document.getElementById('number').value = 8;
        document.getElementById('sliderRange').value = this.value;

        let x = ((slider.value - slider.min) / (slider.max - slider.min) * 100 );
        let color = 'linear-gradient(90deg, rgb(168, 204, 192)' + x + '%,' + 'rgb(255, 255, 255)' + x + '% )';
        slider.style.background = color;
    
        for (let i = 0; i < password.length; i++) {
            while (passText.length < document.getElementById('number').value) {
                
                passText += passArray[Math.floor(Math.random() * passArray.length)];        
              }
            
              para[i].textContent = passText;
              passText = ''; 
        }
    


    } else if (document.getElementById('number').value > 25) {
        document.getElementById('number').value = 25;
        document.getElementById('sliderRange').value = this.value;

        let x = ((slider.value - slider.min) / (slider.max - slider.min) * 100 );
        let color = 'linear-gradient(90deg, rgb(168, 204, 192)' + x + '%,' + 'rgb(255, 255, 255)' + x + '% )';
        slider.style.background = color;
    


        for (let i = 0; i < password.length; i++) {
            while (passText.length < document.getElementById('number').value) {
                
                passText += passArray[Math.floor(Math.random() * passArray.length)];        
              }
            
              para[i].textContent = passText;
              passText = ''; 
        }


    } else {
        document.getElementById('sliderRange').value = document.getElementById('number').value;

        let x = ((slider.value - slider.min) / (slider.max - slider.min) * 100 );
        let color = 'linear-gradient(90deg, rgb(168, 204, 192)' + x + '%,' + 'rgb(255, 255, 255)' + x + '% )';
        slider.style.background = color;
    

        for (let i = 0; i < password.length; i++) {
            while (passText.length < document.getElementById('number').value) {
                
                passText += passArray[Math.floor(Math.random() * passArray.length)];        
              }
            
              para[i].textContent = passText;
              passText = ''; 
        }

    }
    
};


// Generate passwords by using the Slider
slider.oninput = function() {
    document.getElementById('number').value = this.value;
    passLength = this.value;
    document.getElementById('sliderRange').value = this.value;

    let x = ((slider.value - slider.min) / (slider.max - slider.min) * 100 );
    let color = 'linear-gradient(90deg, rgb(168, 204, 192)' + x + '%,' + 'rgb(255, 255, 255)' + x + '% )';
    slider.style.background = color;

    
    for (let i = 0; i < password.length; i++) {

        while (passText.length < passLength) {
            
            passText += passArray[Math.floor(Math.random() * passArray.length)];        
          }
        
          para[i].textContent = passText;
          passText = '';
    }  
}



// Generate password by pressing the Generate Passwords button
button.addEventListener("click", function() {

    for (let i = 0; i < password.length; i++) {
        while (passText.length < document.getElementById('number').value) {
            
            passText += passArray[Math.floor(Math.random() * passArray.length)];        
          }
        
          para[i].textContent = passText;
          passText = ''; 

    }
});


// One-Click Copy Text to Clipboard
const copy = document.querySelectorAll(".pass-text"); //querySelectorAll returns a nodeList

const copyArray = Array.from(copy); //converts nodeList into an Array




copyArray.forEach(i => i.addEventListener('click', function() {
        navigator.clipboard.writeText(i.textContent);

        this.nextElementSibling.style.display = "block";


        setTimeout(() => {
        this.nextElementSibling.style.display = "none";
        }, 700);

    }));
    
 
              


    


      












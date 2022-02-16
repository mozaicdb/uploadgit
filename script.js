'use strict';
/* DOM:- simply means Document Object Model is a structured
representation of html Documents. Allow Javasript to Acess 
Html Elements and Styles to Manipulate them.
OR Is a connections between hmtl document and Javascript Code

*/ 


//console.log(document.querySelector('.message')
 //.textContent);
 //the code above using DOCUMENT OBJECT to access the element of an html
 //document stands for an object in the class and .querySelector is a method while .message is element is value in the hml assign to class
 //document.querySelector('.message').textContent='Correct Number!';
  // the code above is use to check the content of an html element
// Correct Number is a vlue changing the intial value of the html content 
 //document.querySelector('.number').textContent =13;
 //document.querySelector('.score').textContent =10;
 
 //document.querySelector('.guess').value=23;
 //console.log(document.querySelector('.guess').value);
 // .value is referring to the content of the input value which the input value is accessing
  
 //the code above use how to respond to click event oR Click on a button to respond 
  // using an eventlistener:- it actaully use to respond to event 

  let score = 20;
  const secretNumber = Math.trunc(Math.random() *20) + 1;
document.querySelector('.number').textContent =
 secretNumber;

  document.querySelector('.check').addEventListener
  ('click', function(){
      const guess =Number( document.querySelector('.guess').value);
     console.log(guess, typeof guess)
     if (!guess){
         document.querySelector('.message').textContent = 
         'No Number'
     } else if (guess ===secretNumber) {

         document.querySelector('.message').textContent=
         'Correct Number';

     }else if (guess > secretNumber){
         if(score > 1){
            document.querySelector('.message').textContent=
            'Too High';
            score--;
            document.querySelector('.score').textContent=
            score; 
         } else {
            document.querySelector('.message').textContent=
            'You Lost the Game';
            document.querySelector('.score').textContent=
            0;

         }        
        }
     else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent=
            'Too Low';
            score--;
            document.querySelector('.score').textContent=
            score; 
         } else {
            document.querySelector('.message').textContent=
            'You Lost the Game';
            document.querySelector('.score').textContent=
            0;

         }        
         

         
         
         


     }

    });

  
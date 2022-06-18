'use strict'
let rightAnswers = 0


let userName = prompt("What is your name? Get to know me a bit...")
console.log(userName);
alert("Hello " + userName + " A " + "few " + "things " + "about " + "me...");


function Question(question1, question2, question3, question4, question5){
 question1 = prompt("Hi! Was I a ballet dancer?");
    if (question1 == "yes"){
        rightAnswers++;
        alert("You're right!")

    } else {(question1 == "no");  
        alert("You're wrong");
    }


 question2 = prompt("Do I have a daughter?");
if (question2 == "yes"){
    alert("You're right!")
    rightAnswers++;
} else { (question2 == "no"); 
    alert("you're wrong");
} 

question3 = prompt("Do I love sports?");
if (question3 == "yes"){
    rightAnswers++;
    alert("Wrong")
} else {(question3 == "no"); 
    alert("You're right!");
}

 question4 = prompt('Do I love to swim?');
if (question4 == "yes"){
    rightAnswers++;
    alert("You're right!")
} else{ (question4 == "no"); 
    alert("You're wrong");
}



 question5 = prompt("Do I love coding?");
if (question5 === "yes"){
    rightAnswers++;
    alert("You're right")
} else { (question5 === "no"); 
 alert("You're wrong");
}
}
Question();


let favoriteFlavors = ['caramel', 'strawberry', 'vanilla', 'cherry', 'butter pecan', 'cookie dough', 'birthday cake',];
let numberGuesses = 0;
let allowedAttempts = 7;
let correctAnswerFound = false;

while ((numberGuesses < allowedAttempts) && !correctAnswerFound) {
        let response = prompt('What are my favorite ice cream flavors?');
        numberGuesses++;

        for (let i=0; i < favoriteFlavors.length; i++) {
            // alert(i);
          if(response.toLowerCase()  === favoriteFlavors[i].toLowerCase()){
            alert('correct');
                correctAnswerFound = true;
                rightAnswers++;
                break;

            }
        }
        if (!correctAnswerFound) {
            alert('you have ' + (allowedAttempts - numberGuesses) + ' left');
                  }
}

let questions = [
    'Where did I grow up?',
    'How many dogs do I have?',
    'Am I a Sagittarius?'
];


let answers = [
    "SEATTLE",
    "2",
    "YES"
]

let responses = [];
for (let i =0; i < questions.length; i++) {
     responses[i] = prompt(questions[i]).toUpperCase();
     checkAnswers(i);
    
}
console.log("responses", responses);

function checkAnswers(qNumber){
    if (responses[qNumber] === answers[qNumber] ){
        alert("you got it right");
        rightAnswers++;
    } else alert("You're wrong")
    }

    function guessNumber() {
        let correctAnswer = 6;
        for (let i = 0; i <= 3; i++) {
        
          let guessedNumber = prompt('I am thinking of a number 1-20');
          if (guessedNumber == correctAnswer) {
            alert('You are correct!');
            if (guessedNumber == correctAnswer) { rightAnswers++; }
            break;
          }
          if (guessedNumber < correctAnswer) { alert('Your answer is too low'); }
          if (guessedNumber > correctAnswer) { alert('Your number is too high!'); }
          if (i == 3) { alert('done'); }
        }

        alert (name + 'you got ' + rightAnswers + ' right answers!!');

      }
      
      guessNumber();
        
        
     
    
  
    
    
      
    
    
      
    
    
    
    
    
       
    
    
        
    
    
               
    
    
           
    
       
    
    
    
    
    
    
    
       
    
    
    
    



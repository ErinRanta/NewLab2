'use strict'


let userName = prompt("What is your name? Get to know me a bit...")
console.log(userName);
alert("Hello " + userName + " A " + "few " + "things " + "about " + "me...");


function Question(question1, question2, question3, question4, question5){
 question1 = prompt("Hi! Was I a ballet dancer?");
    if (question1 == "yes"){
        alert("You're right!")
    } else {(question1 == "no");  
        alert("You're wrong");
    }


 question2 = prompt("Do I have a daughter?");
if (question2 == "yes"){
    alert("You're right!")
} else { (question2 == "no"); 
    alert("you're wrong");
} 

question3 = prompt("Do I love sports?");
if (question3 == "yes"){
    alert("Wrong")
} else {(question3 == "no"); 
    alert("You're right!");
}

 question4 = prompt('Do I love to swim?');
if (question4 == "yes"){
    alert("You're right!")
} else{ (question4 == "no"); 
    alert("You're wrong");
}



 question5 = prompt("Do I love coding?");
if (question5 === "yes"){
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
// let answers = [
//     "SEATTLE",
//     "2",
//     "YES"
// ]

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
    } else alert("You're wrong")
    }

    let numQuest = prompt("Guess a number between 1 and 20");
    if (numQuest == 6) {
alert("Yes, You are right!")
        tally = tally + 1;
    } else {
        for (let i = 4; i >=0; i--){
            if (numQuest == 6) {
                alert("Yes, you are right!");
                tally = tally + 1;
                break;
            } else if (i == 0) {
                alert("No more guesses! THe answer is 6")
                break;
            } else if (numQuest < 6) {
                numQuest = prompt("Too low, guess a number between 1 and 20. " + i + " guesses remaining.");
            } else if (numQuest > 6) {
                numQuest =  prompt("Too High! Guess a number between 1 and 20. " + i + " guesses remain.");
            }
         }  
     }
    
  
    
    
      
    
    
      
    
    
    
    
    
       
    
    
        
    
    
               
    
    
           
    
       
    
    
    
    
    
    
    
       
    
    
    
    



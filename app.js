'use strict'


let userName = prompt("What is your name? Get to know me a bit...");
console.log(userName);
alert("Hello " + userName + " A " + "few " + "things " + "about " + "me...");



let question1 = prompt("Hi! Was I a ballet dancer?");
    if (question1 == "yes"){
        alert("You're right!")
    } else {(question1 == "no");  
        alert("You're wrong");
    }


let question2 = prompt("Do I have a daughter?");
if (question2 == "yes"){
    alert("You're right!")
} else { (question2 == "no"); 
    alert("you're wrong");
} 

let question3 = prompt("Do I love sports?");
if (question3 == "yes"){
    alert("Wrong")
} else {(question3 == "no"); 
    alert("You're right!");
}

let question4 = prompt('Do I love to swim?');
if (question4 == "yes"){
    alert("You're right!")
} else{ (question4 == "no"); 
    alert("You're wrong");
}



let question5 = prompt("Do I love coding?");
if (question5 === "yes"){
    alert("You're right")
} else { (question5 === "no"); 
 alert("You're wrong");
}

question();

    

    let dog = [''];
prompt('how many dogs do i have between 1-4?');
if ('2') {
    alert("yes!");
} else { alert("no, try again!");
}

<<<<<<< HEAD
// if (confirm("Do I love coding?")){
//     document.write("YES! I am happy to be learning to code!");
// } else { document.write("Wrong answer, I love coding!");
=======




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
>>>>>>> cfa8a1d340b86432f3db7c362c1e61c18dddfaf6
    
}
console.log("responses", responses);

function checkAnswers(qNumber){
    if (responses[qNumber] === answers[qNumber] ){
        alert("you got it right");
    } else alert("You're wrong")
    }


    // questions();
    checkAnswers();






let favoriteFlavors = ['caramel', 'strawberry', 'vanilla', 'cherry', 'butter pecan', 'cookie dough', 'birthday cake',];
let numberGuesses = 0;
let allowedAttempts = 4;
let correctAnswerFound = false;

while (numberGuesses < allowedAttempts && !correctAnswerFound) {
        let response = prompt('What are my favorite ice cream flavors?');
        numberGuesses++;

        for (let i=0; i < favoriteFlavors.length; i++) {
            alert(i);
            is (response.toUpperCase() === favoriteFlavors[i].toUpperCase()) {
                alert('correct');
                correctAnswerFound = true;
                break;

            }
        }
        if (!correctAnswerFound) {
            alert("you have' + (allowedAttempts - numberguesses) + 'left);
        }
}
alert('You're done');

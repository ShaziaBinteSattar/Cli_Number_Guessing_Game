 
import inquirer from "inquirer";  

// Create an async function to handle the guessing game  
async function guessingGame() {  
    // 1) Computer will generate a random number  
    const randomNumber = Math.floor(Math.random() * 6 + 1);  

    // 2) User input for guessing number  
    const answers = await inquirer.prompt([  
        {  
            name: "userGuessedNumber",  
            type: "number",  
            message: "Please guess a number between 1-6: ",  
        },  
    ]);  

    // 3) Compare user input with the computer-generated number and show the result  
    if (answers.userGuessedNumber === randomNumber) {  
        console.log("Congratulations! You guessed the right number.");  
    } else {  
        console.log(`You guessed wrong. The correct number was ${randomNumber}.`);  
    }  
}  

// Call the async function  
guessingGame().catch((error) => {  
    console.error("An error occurred:", error); // Handle any errors  
});
#! /usr/bin/env node

import inquirer from "inquirer";

const answers: {
    Sentence: string;
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence: "
    }
])

const words = answers.Sentence.trim().split(" ");

console.log(`Your sentence words count is: ${words.length}`);
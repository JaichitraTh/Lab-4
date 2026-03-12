#!/usr/bin/env node
// Simple account management application ported from COBOL to Node.js

const readline = require('readline');

let balance = 1000.00;

function getBalance() {
    return balance;
}

function credit(amount) {
    if (isNaN(amount) || amount < 0) {
        throw new Error('Invalid amount');
    }
    balance += amount;
    return balance;
}

function debit(amount) {
    if (isNaN(amount) || amount < 0) {
        throw new Error('Invalid amount');
    }
    if (balance >= amount) {
        balance -= amount;
        return { success: true, balance };
    }
    return { success: false, balance, message: 'Insufficient funds' };
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function displayMenu() {
    console.log('--------------------------------');
    console.log('Account Management System');
    console.log('1. View Balance');
    console.log('2. Credit Account');
    console.log('3. Debit Account');
    console.log('4. Exit');
    console.log('--------------------------------');
}

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, answer => resolve(answer)));
}

async function main() {
    let continueFlag = true;

    while (continueFlag) {
        displayMenu();
        const choice = await askQuestion('Enter your choice (1-4): ');
        switch (choice.trim()) {
            case '1':
                console.log(`Current balance: ${balance.toFixed(2)}`);
                break;
            case '2': {
                const amtInput = await askQuestion('Enter credit amount: ');
                const amt = parseFloat(amtInput);
                if (!isNaN(amt) && amt >= 0) {
                    balance += amt;
                    console.log(`Amount credited. New balance: ${balance.toFixed(2)}`);
                } else {
                    console.log('Invalid amount entered.');
                }
                break;
            }
            case '3': {
                const amtInput = await askQuestion('Enter debit amount: ');
                const amt = parseFloat(amtInput);
                if (!isNaN(amt) && amt >= 0) {
                    if (balance >= amt) {
                        balance -= amt;
                        console.log(`Amount debited. New balance: ${balance.toFixed(2)}`);
                    } else {
                        console.log('Insufficient funds for this debit.');
                    }
                } else {
                    console.log('Invalid amount entered.');
                }
                break;
            }
            case '4':
                continueFlag = false;
                break;
            default:
                console.log('Invalid choice, please select 1-4.');
        }
    }

    console.log('Exiting the program. Goodbye!');
    rl.close();
}

if (require.main === module) {
    main();
}

module.exports = { balance, getBalance, credit, debit, main, askQuestion, displayMenu };

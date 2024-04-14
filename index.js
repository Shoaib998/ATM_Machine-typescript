import inquirer from "inquirer";
import chalk from "chalk";
let my_Balance = 10000;
let my_Pin = 2646;
console.log(chalk.blue("\n \tWellCome To The ATM Machine\n"));
let pin_Code = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter Your Pin Code:"),
    },
]);
if (pin_Code.pin === my_Pin) {
    console.log(chalk.green("\nPin is Correct, Login Successfully!\n"));
    //   console.log(`Current Account Balance is ${my_Balance}`);
    let my_Operation = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (my_Operation.operation === "Withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a withdrawl Method:",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "select Amount:",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000]
                }
            ]);
            if (fastCashAns.fastCash > my_Balance) {
                console.log(chalk.red("Insufficient Balance!"));
            }
            else {
                my_Balance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} withdraw Successfully`);
                console.log(`Your remaining Balance is: ${my_Balance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let get_Amount = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter Amount To Withdraw:"
                }
            ]);
            if (get_Amount.amount > my_Balance) {
                console.log(chalk.red("Insufficient Balanace"));
            }
            else {
                my_Balance -= get_Amount.amount;
                console.log(`${get_Amount.amount} withdraw Succesfully`);
                console.log(`Your remaining Balance is: ${my_Balance}`);
            }
        }
    }
    else if (my_Operation.operation === "Check Balance") {
        console.log(`Your Account Balance is: ${my_Balance}`);
    }
}
else {
    console.log(chalk.red("Pin is Incorrect, Please Try Again"));
}

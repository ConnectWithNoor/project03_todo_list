import inquirer from 'inquirer';
const todos = [];
let loop = true;
do {
    var answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'todo',
            message: 'what do you want to add in your todo list',
        },
        {
            type: 'list',
            name: 'restart',
            message: 'do you want to continue?',
            choices: ['Y', 'N'],
            default: 'N',
        },
    ]);
    todos.push(answers.todo);
    console.log('Todo added successfully');
} while (answers.restart === 'Y');
console.log('Todo is the list are: ');
console.log(todos.join(','));

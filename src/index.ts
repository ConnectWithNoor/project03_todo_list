import inquirer from 'inquirer';

const todos: string[] = [];
let loop = true;

do {
  var answers: { todo: string; restart: 'Y' | 'N' } = await inquirer.prompt([
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

console.log('Todo in the list are: ');
console.log(todos.join(', '));

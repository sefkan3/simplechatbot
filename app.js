'use strict';

const Readline = require('readline');
const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const matcher = require('./matcher');

rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
    //console.log(`You said :: ${reply}`);
    matcher(reply, data => {
        switch(data.intent) {
            case 'Hello':
                console.log("A Big Hello from SimpleBot");
                rl.prompt();
                break;
            case 'Exit':
                console.log("Have a wonderful day");
                process.exit(0);
                break;
            default: {
                console.log("I am not sure what you mean. Can you repeat that?");
                rl.prompt();
            }
        }
    });
})
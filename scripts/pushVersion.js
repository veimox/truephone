const { spawn } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let packageInfo = require('../package.json');
let version = packageInfo.version;

rl.question('Shall we push it? [y/N]', function(name) {
    if (name === 'y') {
        const pushTag = spawn('git', [
            'push',
            'origin',
            'master',
            version
        ]);
        pushTag.on('close', function(code) {
            console.log('Pushed!');
        });
    }
    rl.close();
});

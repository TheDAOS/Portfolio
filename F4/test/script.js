const input = document.getElementById('input');
const output = document.getElementById('output');

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const command = input.value;
        input.value = '';
        executeCommand(command);
    }
});

function executeCommand(command) {
    const response = processCommand(command);
    const outputLine = document.createElement('div');
    outputLine.textContent = `$ ${command}`;
    output.appendChild(outputLine);
    
    const responseLine = document.createElement('div');
    responseLine.textContent = response;
    output.appendChild(responseLine);
    
    output.scrollTop = output.scrollHeight; // Scroll to bottom
}

function processCommand(command) {
    switch (command.toLowerCase()) {
        case 'help':
            return 'Available commands: help, status, exit';
        case 'status':
            return 'Status: All systems operational.';
        case 'exit':
            return 'Exiting terminal...';
        default:
            return 'Command not recognized. Type "help" for a list of commands.';
    }
}

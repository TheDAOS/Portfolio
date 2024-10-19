$(document).ready(function() {
    $('#input').on('keypress', function(e) {
        if (e.which === 13) { // Enter key pressed
            var command = $(this).val();
            $(this).val(''); // Clear input

            // Process the command
            processCommand(command);
        }
    });

    function processCommand(command) {
        // Here you can add your own logic for processing commands
        var output;
        
        if (command.toLowerCase() === 'hello') {
            output = 'Hello, World!';
        } else {
            output = 'Unknown command: ' + command;
        }

        // Prepend output to the output area
        $('#output').prepend('<div>' + output + '</div>');

        // Scroll to the top
        $('#output').scrollTop(0);
    }
});

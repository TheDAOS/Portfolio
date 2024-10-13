const font = 'Slant';

figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.preloadFonts([font], ready);

const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
});

const commands = {
    help() {
        term.echo(`List of available commands: ${help}`, {raw: true});
    },
    echo(...args) {
        if (args.length > 0) {
            term.echo(args.join(' '));
        }
    },
    test() {
        term.echo('[[;cyan;]Welcome to my Terminal Portfolio]');
    }
};

// clear is default command that you can turn off with an option
const command_list = ['clear'].concat(Object.keys(commands));
const formatted_list = command_list.map(cmd => `<white class="command">${cmd}</white>`);
const help = formatter.format(formatted_list);


const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    exit: false,
    completion: true
});

term.pause();

// to show the help at start without exicuting it
term.exec('help', true);

term.on('click', '.command', function() {
    const command = $(this).text();
    term.exec(command);
 });

function rand(max) {
    return Math.floor(Math.random() * (max + 1));
}

function ready() {
    const seed = rand(256);
    term.echo(() => rainbow(render('Terminal Portfolio'), seed))
        .echo('Welcome to my Terminal Portfolio\n').resume();
}

function render(text) {
    const cols = term.cols();
    return trim(figlet.textSync(text, {
        font: font,
        width: cols,
        whitespaceBreak: true
    }));
}

function trim(str) {
    return str.replace(/[\n\s]+$/, '');
}


function rainbow(string, seed) {
    return lolcat.rainbow(function(char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
    }, string, seed).join('\n');
}

function hex(color) {
    return '#' + [color.red, color.green, color.blue].map(n => {
        return n.toString(16).padStart(2, '0');
    }).join('');
}
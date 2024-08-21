const commands = {};

const greetings = `  ______                    _             __   ____             __  ____      ___     
 /_  __/__  _________ ___  (_)___  ____ _/ /  / __ \\____  _____/ /_/ __/___  / (_)___ 
  / / / _ \\/ ___/ __ \`__ \\/ / __ \\/ __ \`/ /  / /_/ / __ \\/ ___/ __/ /_/ __ \\/ / / __ \\
 / / /  __/ /  / / / / / / / / / / /_/ / /  / ____/ /_/ / /  / /_/ __/ /_/ / / / /_/ /
/_/  \\___/_/  /_/ /_/ /_/_/_/ /_/\\__,_/_/  /_/    \\____/_/   \\__/_/  \\____/_/_/\\____/`

const term = $('body').terminal(commands, {
    greetings: false
});

function ready() {
    term.echo(() => {
      const ascii = render('Terminal Portfolio');
      return `${ascii}\nWelcome to my Terminal Portfolio\n`;
    });
}
 

const font = 'Slant';

figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.preloadFonts([font], ready);

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

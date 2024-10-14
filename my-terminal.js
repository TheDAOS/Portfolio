/*
    if 
    echo('<white>Welcome to my Terminal Portfolio</white>\n')
    not working
    output shows <white>Welcome to my Terminal Portfolio</white> insted for showing "Welcome to my Terminal Portfolio" in white

    to fix this

    echo('<white>Welcome to my Terminal Portfolio</white>\n', {raw: true})
    add css
        white {
            color: white;
        }
    this seams to fix this
*/

const font = 'Slant';

figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.preloadFonts([font], ready);

const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
});

const directories = {
    education: [
        '',
        '<white>education</white>',
        '* <a href="https://www.linnkacademyindia.com/">Linnk Academy</a> <yellow>"Python Django Development"</yellow> May 2023-Nov 2023',
        '* <a href="https://meserumelycollege.ac.in/">MES College Erumely</a> <yellow>"Computer Science"</yellow> 2020-2023',
        '* <a href="https://en.wikipedia.org/wiki/Higher_Secondary_Certificate">Higher-secondary</a> <a href="https://marthomavhsskunnam.wixsite.com/vhseschool">MTVHSS</a> <yellow>"Computer Science and Infortanment Systems"</yellow> 2018-2020',
        ''
    ],
    projects: [
        '',
        '<white>Projects</white>',
        [
            ['7F2-3A',
             'https://github.com/TheDAOS/7F2-3A',
             'A group Learning management system Project'
            ],
            ['Portfolio',
             'https://github.com/TheDAOS/Portfolio',
             'An terminal-based portfolio website using jQuery Terminal'
            ],
        ].map(([name, url, description = '']) => {
            return `* <a href="${url}">${name}</a> &mdash; <white>${description}</white>`;
        }),
        ''
    ].flat(),
    skills: [
        '',
        '<white>languages</white>',

        [
            'JavaScript',
            'TypeScript',
            'Python',
            'SQL',
            'PHP',
            'Bash'
        ].map(lang => `* <yellow>${lang}</yellow>`),
        '',
        '<white>libraries</white>',
        [
            'React.js',
            'Redux',
            'Jest',
        ].map(lib => `* <green>${lib}</green>`),
        '',
        '<white>tools</white>',
        [
            'Docker',
            'git',
            'GNU/Linux'
        ].map(lib => `* <blue>${lib}</blue>`),
        ''
    ].flat()
};

const dirs = Object.keys(directories);

const root = '~';
let cwd = root;

const user = 'guest';
const server = 'thedaos.github.io';

function prompt() {
    return `[[;green;]${user}@${server}]:[[;blue;]${cwd}]$ `;
}

function print_dirs() {
    term.echo(dirs.map(dir => {
        return `<blue class="directory">${dir}</blue>`;
    }).join('<br>'), {raw: true});
}

const commands = {
    help() {
        term.echo(`List of available commands: ${help}`, {raw: true});
    },
    echo(...args) {
        if (args.length > 0) {
            term.echo(args.join(' '));
        }
    },
    cd(dir = null) {
        if (dir === null || (dir === '..' && cwd !== root)) {
            cwd = root;
        } else if (dir.startsWith('~/') && dirs.includes(dir.substring(2))) {
            cwd = dir;
        } else if (dirs.includes(dir)) {
            cwd = root + '/' + dir;
        } else {
            this.error('Wrong directory');
        }
    },
    ls(dir = null) {
        if (dir) {
            if (dir.match(/^~\/?$/)) {
                // ls ~ or ls ~/
                print_dirs();
            } else if (dir.startsWith('~/')) {
                const path = dir.substring(2);
                const dirs = path.split('/');
                if (dirs.length > 1) {
                    this.error('Invalid directory');
                } else {
                    const dir = dirs[0];
                    this.echo(directories[dir].join('\n'));
                }
            } else if (cwd === root) {
                if (dir in directories) {
                    this.echo(directories[dir].join('\n'));
                } else {
                    this.error('Invalid directory');
                }
            } else if (dir === '..') {
                print_dirs();
            } else {
                this.error('Invalid directory');
            }
        } else if (cwd === root) {
            print_dirs();
        } else {
            const dir = cwd.substring(2);
            this.echo(directories[dir].join('<br>'), {raw: true});
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
    completion: true,
    prompt
});

term.pause();

// to show the help at start without exicuting it
term.exec('help', true);

term.on('click', '.command', function() {
    const command = $(this).text();
    term.exec(command, { typing: true, delay: 50 });
});

term.on('click', '.directory', function() {
    const dir = $(this).text();
    term.exec(`cd ~/${dir}`);
});

function ready() {
    const seed = rand(256);
    term.echo(() => rainbow(render('Terminal Portfolio'), seed))
        .echo('<white>Welcome to my Terminal Portfolio</white>\n', {raw: true}).resume();
}

function rainbow(string, seed) {
    return lolcat.rainbow(function(char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
    }, string, seed).join('\n');
}

function rand(max) {
    return Math.floor(Math.random() * (max + 1));
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

function hex(color) {
    return '#' + [color.red, color.green, color.blue].map(n => {
        return n.toString(16).padStart(2, '0');
    }).join('');
}

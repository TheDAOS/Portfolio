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

// const font = 'Slant';
const font = 'USA Flag';
// const font = 'DiamFont';
// const font = 'Lean';
// const font = `Big Money-ne`;
// const font = `RubiFont`;
// const font = `Star Wars`;
// const font = `ANSI Regular`;

// untested

const font_list = [
    `BlurVision ASCII`,
    `Alpha`,
    `Doh`,
    `Doom`,
    `Graceful`,
    `Merlin1`,
    `Modular`,
    `Ogre`,
    `Electronic`,
    `3-D`,
    `5 Line Oblique`,
    `Arrows`,
    `Banner3`,
    `Basic`,
    `Block`,
    `Colossal`,
    `Cyberlarge`,
    `Cybermedium`,
    `Dot Matrix`,
    `Fender`,
    `Ivrit`,
    `Larry 3D`,
    `Nipples`,
    `Roman`,
    `Rounded`,
    `Stop`,
    `USA Flag`,
    `Univers`,
];

// const font_list = [
//     'BlurVision ASCII',
//     'Alpha',
//     'Doh',
//     'Doom',
//     'Graceful',
//     'Merlin1',
//     'Modular',
//     'Ogre',
//     'Electronic',
//     '3-D',
//     '5 Line Oblique',
//     'Arrows',
//     'Banner3',
//     'Basic',
//     'Block',
//     'Colossal',
//     'Cyberlarge',
//     'Cybermedium',
//     'Dot Matrix',
//     'Fender',
//     'Ivrit',
//     'Larry 3D',
//     'Nipples',
//     'Roman',
//     'Rounded',
//     'Stop',
//     'USA Flag',
//     'Univers',
// ];

figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.preloadFonts([font], ready); // greetings

const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
});

const directories = {
    education: [
        '',
        '<white>education</white>',
        '* <a href="https://www.linnkacademyindia.com/">Linnk Academy</a> <white>"Python Django Development"</white> May 2023-Nov 2023',
        '* <a href="https://meserumelycollege.ac.in/">MES College Erumely</a> <white>"Computer Science"</white> 2020-2023',
        '* <a href="https://en.wikipedia.org/wiki/Higher_Secondary_Certificate">Higher-secondary</a> <a href="https://marthomavhsskunnam.wixsite.com/vhseschool">MTVHSS</a> <white>"Computer Science and Infortanment Systems"</white> 2018-2020',
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
            'Python',
            'Bash',
            'C / C# / C++',
            'HTML / CSS',
            'SQL',
            'JavaScript',
            'PHP',
            'Go',
        ].map(lang => `* <white>${lang}</white>`),
        '',
        '<white>libraries</white>',
        [
            'Django',
            'Bootstrap',
            'PyGames',
        ].map(lib => `* <white>${lib}</white>`),
        '',
        '<white>tools</white>',
        [
            'GNU/Linux',
            'git',
            'Microsoft / Google / Libre Office Suites',
        ].map(lib => `* <white>${lib}</white>`),
        ''
    ].flat()
};

const dirs = Object.keys(directories);

const root = '~';
let cwd = root;

const logo1 = `
████████  ████ ████████          ████████   ███████  ██    ██ 
██     ██  ██  ██     ██         ██     ██ ██     ██  ██  ██  
██     ██  ██  ██     ██         ██     ██ ██     ██   ████   
████████   ██  ████████  ███████ ████████  ██     ██    ██    
██         ██  ██                ██     ██ ██     ██    ██    
██         ██  ██                ██     ██ ██     ██    ██    
██        ████ ██                ████████   ███████     ██    
`

const logo2 = `
  _____  _____  _____      ______   _____  __   __
 |_____]   |   |_____] ___ |_____] |     |   \_/  
 |       __|__ |           |_____] |_____|    |   
                                                  
`

const logo3 = `
    dMMMMb  dMP dMMMMb  dMMMMb  .aMMMb  dMP dMP 
   dMP.dMP amr dMP.dMP dMP"dMP dMP"dMP dMP.dMP  
  dMMMMP" dMP dMMMMP" dMMMMK" dMP dMP  VMMMMP   
 dMP     dMP dMP     dMP.aMF dMP.aMP dA .dMP    
dMP     dMP dMP     dMMMMP"  VMMMP"  VMMMP"     
                                                
`

const logo4 = `
 :::====  ::: :::====           :::====  :::====  ::: ===
 :::  === ::: :::  ===          :::  === :::  === ::: ===
 =======  === =======  ======== =======  ===  ===  ===== 
 ===      === ===               ===  === ===  ===   ===  
 ===      === ===               =======   ======    ===  
                                                         
`

const logo5 = `
>======>   >=> >======>          >=>>=>        >===>      >=>      >=> 
>=>    >=> >=> >=>    >=>        >>   >=>    >=>    >=>    >=>    >=>  
>=>    >=> >=> >=>    >=>        >>    >=> >=>        >=>   >=> >=>    
>======>   >=> >======>   >====> >==>>=>   >=>        >=>     >=>      
>=>        >=> >=>               >>    >=> >=>        >=>     >=>      
>=>        >=> >=>               >>     >>   >=>     >=>      >=>      
>=>        >=> >=>               >===>>=>      >===>          >=>      
                                                                       
`

const startup1 = `***** PIP-OS(R) V7.1.0.8 *****\n`
const startup2 = `COPYRIGHT 2075 ROBCO(R)
LOADER V1.1
EXEC VERSION 41.10
64k RAM SYSTEM
38911 BYTES FREE
NO HOLOTAPE FOUND
LOAD ROM(1): DEITRIX 303`
const startup3 = `***** Welcome to ROBCO Industries (TM) Termlink *****\n`

const joke_url = 'https://v2.jokeapi.dev/joke/Programming';

let prompt_var = ``

function prompt() {
    return prompt_var;
}

function print_dirs() {
    term.echo(dirs.map(dir => {
        return `<white class="directory">${dir}</white>`;
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
    async joke() {
        const res = await fetch(joke_url);
        const data = await res.json();
        (async () => {
            if (data.type == 'twopart') {
                const prompt = this.get_prompt();
                this.set_prompt('');
                await this.echo(`Q: ${data.setup}`, {
                    delay: 50,
                    typing: true
                });
                await this.echo(`A: ${data.delivery}`, {
                    delay: 50,
                    typing: true
                });
                this.set_prompt(prompt);
            } else if (data.type === 'single') {
                await this.echo(data.joke, {
                    delay: 50,
                    typing: true
                });
            }
        })();
    },
    credits() {
        const creditsText = [
            '',
            '<white>Used libraries:</white>',
            '* <a href="https://terminal.jcubic.pl">jQuery Terminal</a>',
            '* <a href="https://github.com/patorjk/figlet.js/">Figlet.js</a>',
            '* <a href="https://github.com/jcubic/isomorphic-lolcat">Isomorphic Lolcat</a>',
            '* <a href="https://jokeapi.dev/">Joke API</a>',
            ''
        ].join('<br>');
    
        this.echo(creditsText, { raw: true });
    },
    async reboot() {
        try {
            await this.clear();
            prompt_var = ``
            term.echo(() => render('PIP - BOY'));
            // term.echo(startup0);
            await new Promise(resolve => setTimeout(resolve, 2000));
            await this.clear();
            term.echo(startup1, { typing: true })
                .then(() => term.echo(startup2, { typing: true }))
                .then(() => new Promise(resolve => setTimeout(resolve, 2000)))
                .then(() => this.clear())
                .then(() => prompt_var = `> `)
                .then(() => term.echo(startup3, { typing: true }));
        } catch (error) {
            console.error('An error occurred:', error);
        }
    },
    pipboy(logo_num = 1) {
        let logo_output = '';
        switch (logo_num) {
            case 0:
                for (let i of font_list) {
                    term.echo(i);
                    term.echo(() => pipboy_render('PIP - BOY', i));
                }
                break;
            case 1:
                logo_output = logo1;
                break;
            case 2:
                logo_output = logo2;
                break;
            case 3:
                logo_output = logo3;
                break;
            case 4:
                logo_output = logo4;
                break;
            case 5:
                logo_output = logo5;
                break;
            default:
                logo_output = `Invalid option`;
                break;
        }
        term.echo(logo_output);
    },
    test() {
        term.echo('[[;cyan;]Welcome to my Terminal Portfolio]');
    },
};

// clear is default command that you can turn off with an option
const command_list = ['clear'].concat(Object.keys(commands));
const formatted_list = command_list.map(cmd => `<white class="command">${cmd}</white>`);
const help = formatter.format(formatted_list);

const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    exit: false,
    completion(string) {
        // in every function we can use `this` to reference term object
        const cmd = this.get_command();
        // we process the command to extract the command name
        // and the rest of the command (the arguments as one string)
        const { name, rest } = $.terminal.parse_command(cmd);
        if (['cd', 'ls'].includes(name)) {
            if (rest.startsWith('~/')) {
                return dirs.map(dir => `~/${dir}`);
            }
            if (cwd === root) {
                return dirs;
            }
        }
        return Object.keys(commands);
    },
    prompt
});

term.pause();

term.on('click', '.command', function() {
    const command = $(this).text();
    term.exec(command, { typing: true, delay: 50 });
});

term.on('click', '.directory', function() {
    const dir = $(this).text();
    term.exec(`cd ~/${dir}`);
});

function ready() {
    term.exec('reboot', true);
    term.resume();
}

function pipboy_render(text, pipboy_font) {
    const cols = term.cols();
    return trim(figlet.textSync(text, {
        font: pipboy_font,
        width: cols,
        whitespaceBreak: true
    }));
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

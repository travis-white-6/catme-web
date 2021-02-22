const Discord = require('discord.js');

async function getCatData() {
    // get cat data from thecatapi
    let catFetchData = await fetch("https://api.thecatapi.com/v1/images/search");
    // json the data
    let catData = await catFetchData.json()
    // return or empty image
    return catData.length? catData[0].url : "https://whelp-something-broke.s3-us-west-2.amazonaws.com/typical-cat.png"
}

const terribleCatPun = () => {
    let puns = [
        "Stay Pawsitive 😸!",
        "You’ve got to be kitten me",
        "I’m just kitten around.",
        "I think we should get meow-rried someday.",
        "That’s just claw-ful.",
        "You’re a fur-midable opponent.",
        "I’m so fur-tunate.",
        "Let me tell you a tail.",
        "That’s a paw-sibility.",
        "My cat is my best fur-end.",
        "That’s hiss-terical.",
        "He’ll go down in hiss-tory.",
        "You’ve got to be kitten me.",
        "Paw-don me.",
        "You look fur-miliar.",
        "That’s paw-some.",
        "Don’t fur-get to buy more catnip.",
        "I’ll love my cat fur-ever.",
        "That was a cat–astrophe.",
        "My cat is radi-claw.",
        "Dogs are in-furior to cats.",
        "I’m feline sad.",
        "You’ve got purr-sonality.",
        "Look at that meowntain.",
        "My cat is totally litter-ate.",
        "Whisker me away.",
        "I’m a glamourpuss.",
        "You’re so purr-suasive.",
        "My favorite color is purr-ple.",
        "Don’t be a sourpuss.",
        "Like my paw-jamas?",
        "Better call in claw-enforcement.",
        "I’ll have a meow-tini.",
        "I’m feline good.",
        "I need to take a paws.",
        "How claw-some is that?",
        "Can I paw-lease have that?",
        "I’ve got cattitude.",
        "Take meowt for lunch.",
        "I love my cat the meowst.",
        "I’ve done that be-fur.",
        "My cat is super cathletic.",
        "Never, efur do that again.",
        "Purr-haps we can cuddle later.",
        "My cat is so purr-ty.",
        "I love your purr-se.",
        "My cat wants a Furr-ari.",
        "I’ve got my thinking cat on.",
        "Wait a meow-ment.",
    ]
    return puns[Math.floor(Math.random() * puns.length)]
}

const client = new Discord.Client();

export const initBot = () => {
    console.log('set up')
    client.login('xxxxx-token-here');

    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });

    client.on('message', msg => {
        if (msg.content === 'ping') {
            msg.reply('Pong!');
        }
    });
}


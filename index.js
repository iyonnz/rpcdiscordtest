const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Jakarta', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1182620703086886922')
    .setType('LISTENING')
    .setURL('https://youtu.be/BqGCJUXEqxQ?si=Su4JYw5vF_qiL5OJ') //Must be a youtube video link 
    .setState('I Love You More Than Anything')
    .setName('Spotify')
    .setDetails(`Ill very lucky because I have you [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1182596990379495467/1214562023019388969/Horimiya.gif?ex=65f99007&is=65e71b07&hm=59341aea57a1695d5a27d51f49496279933ed168f48a4c13ae4c1bb74f5276aa&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Learning JS') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1182596990379495467/1214562022671253536/52d0770c-6b14-4618-8f0a-995011be8561.jpg?ex=65f99007&is=65e71b07&hm=755327235728fe68376dff112c1fc0d9858376d63e72d6118e9639d6f6e0c611&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('love you more than anything') //
    .addButton('MY WEB', 'https://iyonnz.github.io');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `LDR [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update setiap detik
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
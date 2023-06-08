const {fetchJson,cmd,prefix} = require('../lib');
const axios = require('axios');
const ins = '```Inspecting...```';
const react = "🔎";
 
    cmd({
        pattern: "gitHub",
        category: "🔎 Stalker 🔎",
        desc: `Stalk any GitHub.com account.`,
        use: '<text>',
        react: react,
        filename: __filename
    },
        async(Void, citel, text, args) => {
            if (!text) return citel.reply(`Please enter a valid GitHub Username.`);
            let stalk = await fetchJson(`https://api.github.com/users/${args[0]}`);
            if(stalk.login === 'undefined'){
            var caption = '_Please check the username given!_'
            } else {
            var caption = `
*⌈ >𝘎𝘪𝘵𝘏𝘶𝘣 𝘐𝘯𝘴𝘱𝘦𝘤𝘵𝘪𝘰𝘯< ⌋*

*> User Name :* _github.com/${stalk.login}_
*> Full name :* _${stalk.name}_
*> User Id :* _${stalk.id}_
*> Company :* _${stalk.company}_
*> Location :* _${stalk.location}_
*> Created at :* _${stalk.created_at}_
*> Updated at :* _${stalk.updated_at}_
*> Email :* _${stalk.email}_
*> Twitter :* _${stalk.twitter_username}_
*> Followers :* _${stalk.followers} followers_
*> Following :* _${stalk.following} following_
*> Public repos :* _${stalk.public_repos} repos_
*> User Bio :* ${stalk.bio}
` };
            citel.reply(ins);
            citelPika.sendMessage(citel.chat, {
                image: {
                    url: stalk.avatar_url,
                },
                caption: caption,
            }, {
                quoted: citel,
            });

        }
    );
    
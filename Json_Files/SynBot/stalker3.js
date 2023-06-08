const {fetchJson,cmd,prefix,fancy10,argsx} = require('../lib');
const axios = require('axios');
const ins = '```Inspecting...```';
const react = "🔎";
const git = 'https://api.github.com/users/';
const gitRepo = 'https://api.github.com/repos/';
 
    cmd({
        pattern: "gitHub-stalk2",
        alias: ["git-stalk"],
        category: "🔎 Stalker 🔎",
        desc: `Stalk any GitHub.com account.`,
        use: '<text>',
        react: react,
        filename: __filename
    },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Please enter a valid GitHub Username.`);
            let stalk = await fetchJson(git + args[0]);
            if(stalk.login === 'undefined'){
            citel.reply('_Please check the username given!_');
            } else {
            let caption = "*⌈ >𝘎𝘪𝘵𝘏𝘶𝘣 𝘐𝘯𝘴𝘱𝘦𝘤𝘵𝘪𝘰𝘯< ⌋*\n\n"
            caption += "*> User Name :* _github.com/" + stalk.login + "_\n"
            caption += "*> Full name :* _" + stalk.name + "_\n"
            caption += "*> User Id :* _" + stalk.id + "_\n"
            caption += "*> Company :* _" + stalk.company + "_\n"
            caption += "*> Location :* _" + stalk.location + "_\n"
            caption += "*> Created at :* _" + stalk.created_at + "_\n"
            caption += "*> Updated at :* _" + stalk.updated_at + "_\n"
            caption += "*> Email :* _" + stalk.email + "_\n"
            caption += "*> Twitter :* _" + stalk.twitter_username + "_\n"
            caption += "*> Followers :* _" + stalk.followers + " followers_\n"
            caption += "*> Following :* _" + stalk.following + " following_\n"
            caption += "*> Public repos :* _" + stalk.public_repos + " repos_\n"
            caption += "*> User Bio :* " + stalk.bio };
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
    
    cmd({
        pattern: "repo-stalk2",
        alias: ["repository-stalk"],
        category: "🔎 Stalker 🔎",
        desc: `Stalk any GitHub.com account's public repository.`,
        use: '<text>',
        react: react,
        filename: __filename
    },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Please enter a valid GitHub *<ownerName>/<repoName>*\n\n*Ex:* PikaBotz/SynBot-MD`);
            let txt_1 = text.split("/")[0];
            let txt_2 = text.split("/")[1];
            let st_1 = await fetchJson(git + args[0]);
            let st_2 = await fetchJson(gitRepo + txt_1 + "/" + txt_2);
            if(stalk.login === 'undefined'){
            citel.reply('_Please check the ownerName given!_');
            } else if (st_2.name === "Error"){
            citel.reply('_Invalid repository given Or the repository is private!_');
            } else {
            let cap ='*⌈ 𝘎𝘪𝘵𝘩𝘶𝘣 𝘚𝘵𝘢𝘭𝘬𝘦𝘳 𝘉𝘰𝘵 ⌋*\n'
            cap += "╭─⌈ " + fancy10(st_1.login) + " ⌋\n"
            cap += "*> User Name :* _github.com/" + st_1.login + "_\n"
            cap += "*> Full name :* _" + st_1.name + "_\n"
            cap += "*> User Id :* _" + st_1.id + "_\n"
            cap += "*> Company :* _" + st_1.company + "_\n"
            cap += "*> Location :* _" + st_1.location + "_\n"
            cap += "*> Created at :* _" + st_1.created_at + "_\n"
            cap += "*> Updated at :* _" + st_1.updated_at + "_\n"
            cap += "*> Email :* _" + st_1.email + "_\n"
            cap += "*> Twitter :* _" + st_1.twitter_username + "_\n"
            cap += "*> Followers :* _" + st_1.followers + "_\n"
            cap += "*> Following :* _" + st_1.following + "_\n"
            cap += "*> Public repos :* _" + st_1.public_repos + "_\n"
            cap += "*> User Bio :* " + st_1.bio + "\n\n"
            cap += "╭─⌈ " + fancy10(st_2.name) + " ⌋\n"
            cap += "*» Repo name :* _" + st_2.name + "_\n"
            cap += "*» Is Forked? :* _" + st_2.fork + "_\n"
            cap += "*» Created at :* _" + st_2.created_at + "_\n"
            cap += "*» Updated at :* _" + st_2.updated_at + "_\n"
            cap += "*» Pushed at :* _" + st_2.pushed_at + "_\n"
            cap += "*» Homepage? :* _" + st_2.homepage + "_\n"
            cap += "*» Repo size :* _" + st_2.size + " KB_\n"
            cap += "*» Total stars :* _" + st_2.stargazers_count + " stars 🌟_\n"
            cap += "*» Total forks :* _" + st_2.forks_count + " forks 🍴_\n"
            cap += "*» Repo language :* _" + st_2.language + "_\n"
            cap += "*» Visibility :* _" + st_2.visibility + "_\n"
            cap += "*» Branch :* " + st_2.default_branch + "\n"
            cap += "*» Link :* _github.com/" + st_1.login + "/" + st_2.name + "_" };
            citel.reply(ins);
            citelPika.sendMessage(citel.chat, {
                image: {
                    url: st_1.avatar_url,
                },
                caption: cap,
            }, {
                quoted: citel,
            });

        }
    );
    
    cmd({
        pattern: "ip2",
        alias: "ip-stalk",
        category: "🔎 Stalker 🔎",
        desc: `Stalk anyone's details by their *IP ADDRESS*.`,
        use: '<text>',
        react: react,
        filename: __filename
    },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Please enter a valid GitHub *Ip Adress*.`);            
            let ip = await fetchJson('https://api.zahwazein.xyz/information/iplookup?query=' + args[0] + "&apikey=zenzkey_998568986d");
            try {
            iip = "*⌈ 𝘐𝘗 𝘚𝘵𝘢𝘭𝘬𝘦𝘳 𝘉𝘰𝘵 ⌋*\n\n"
            iip += "*> Country :* _" + ip.result.country + "_\n"
            iip += "*> Region :* _" + ip.result.region + "_\n"
            iip += "*> City :* _" + ip.result.city + "_\n"
            iip += "*> Zip :* _" + ip.result.city + "_\n"
            iip += "*> Latitude :* _" + ip.result.latitude + "_\n"
            iip += "*> Longtitude :* _" + ip.result.longtitude + "_\n"
            iip += "*> Isp :* _" + ip.result.isp + "_\n"
            iip += "*> Domain :* _" + ip.result.domain + "_\n"
            iip += "*> Usage Type :* _" + ip.result.usage_type + "_\n"
            iip += "*> Time Zone :* _" + ip.result.time_zone + "_\n"
            iip += "*> Local Time :* _" + ip.result.local_time + "_\n"
            iip += "*> Adress Type :* _" + ip.result.addres_type + "_\n"
            iip += "*> Category :* _" + ip.result.category + "_\n"
            iip += "*> Proxy :* _" + ip.result.proxy + "_\n"
            iip += "*> Provider :* _" + ip.result.provider + "_\n"
            iip += "*> Weather :* _" + ip.result.weather
            citel.reply(iip);
            } catch {
            citel.reply('_Please check the IP Address given!_');
 };
            citel.reply(ins);
        }
    );

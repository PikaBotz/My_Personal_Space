const {fetchJson,cmd,prefix} = require('../lib');
const axios = require('axios');
const load = '```Loading...```'
const react = "😋"

cmd({
        pattern: "waifu",
        alias: ["waifus"],
        category: "weeb",
        desc: "Search and get pics of *Hot Anime Waifus*.",
        react: react, // please delete this line in any command if u don't want react on that command.
        filename: __filename
    },
        async(Void, citel, text) => {
            let waifu = await axios.get('https://waifu.pics/api/sfw/waifu');
            citel.reply(load);
            Void.sendMessage(citel.chat, {
                image: {
                    url: waifu.data.url,
                },
                caption: `_Type *${prefix}waifu* again for more._`,
            }, {
                quoted: citel,
            });

        }
    );

    cmd({
        pattern: "loli",
        alias: ["lolis"],
        category: "weeb",
        desc: "Search and get pics of *Hot Anime lolis*.",
        react: react,
        filename: __filename
    },
        async(Void, citel, text) => {
            let loli = await axios.get('https://waifu.pics/api/sfw/loli');
            citel.reply(load);
            Void.sendMessage(citel.chat, {
                image: {
                    url: loli.data.url,
                },
                caption: `_Type *${prefix}loli* again for more._`,
            }, {
                quoted: citel,
            });

        }
    );
    
        cmd({
        pattern: "neko",
        alias: ["nekos"],
        category: "weeb",
        desc: "Search and get pics of *Hot Anime nekos*.",
        react: react,
        filename: __filename
    },
        async(Void, citel, text) => {
            let neko = await axios.get('https://waifu.pics/api/sfw/neko');
            citel.reply(load);
            Void.sendMessage(citel.chat, {
                image: {
                    url: neko.data.url,
                },
                caption: `_Type *${prefix}neko* again for more._`,
            }, {
                quoted: citel,
            });

        }
    );
    
            cmd({
        pattern: "megumin",
        alias: ["megumins"],
        category: "weeb",
        desc: "Search and get pics of *Hot Anime megumin*.",
        react: react,
        filename: __filename
    },
        async(Void, citel, text) => {
            let megumin = await axios.get('https://waifu.pics/api/sfw/megumin');
            citel.reply(load);
            Void.sendMessage(citel.chat, {
                image: {
                    url: megumin.data.url,
                },
                caption: `_Type *${prefix}megumin* again for more._`,
            }, {
                quoted: citel,
            });

        }
    );
    
    cmd({
        pattern: "akira",
        category: "weeb",
        desc: `Get high quality pics of ${cmd.pattern}.`,
        react: react,
        filename: __filename
    },
        async(Void, citel, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/akira.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            citel.reply(load);
            Void.sendMessage(citel.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}akira* again for more._`,
            }, {
                quoted: citel,
            });

        }
    );

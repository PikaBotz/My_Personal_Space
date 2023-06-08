const {fetchJson,cmd,prefix} = require('../lib');
const axios = require('axios');
const load = '```Loading...```'
const react = "😋"
 
    cmd({
        pattern: "akira",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *akira*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/akira.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}akira* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "akiyama",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *akiyama*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/akiyama.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}akiyama* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "ana",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *ana*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/ana.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}ana* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "kasuna",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *kasuna*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/kasuna.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}kasuna* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "ayuzawa",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *ayuzawa*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/ayuzawa.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}ayuzawa* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "boruto",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *boruto*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/boruto.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}boruto* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "chitanda",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *chitanda*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/chitanda.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}chitanda* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "chitoge",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *chitoge*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/chitoge.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}chitoge* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "deidara",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *deidara*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/deidara.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}deidara* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "doraemon",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *doraemon*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/doraemon.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}doraemon* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "elaina",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *elaina*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/elaina.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}elaina* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "erza",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *erza*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/erza.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}erza* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "gremory",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *gremory*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/gremory.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}gremory* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "hestia",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *hestia*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/hestia.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}hestia* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "husbu",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *husbu*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/husbu.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}husbu* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "inori",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *inori*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/inori.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}inori* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "isuzu",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *isuzu*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/isuzu.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}isuzu* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "itori",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *itori*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/itori.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}itori* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "kaga",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *kaga*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/kaga.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}kaga* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "kagura",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *kagura*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/kagura.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}kagura* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "kaori",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *kaori*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/kaori.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}kaori* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "kaneki",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *kaneki*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/kaneki.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}kaneki* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "kosaki",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *kosaki*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/kosaki.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}kosaki* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "kotori",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *kotori*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/kotori.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}kotori* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "kuriyama",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *kuriyama*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/kuriyama.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}kuriyama* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "kuroha",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *kuroha*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/kuroha.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}kuroha* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "kurumi",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *kurumi*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/kurumi.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}kurumi* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "madara",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *madara*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/madara.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}madara* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "mikasa",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *mikasa*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/mikasa.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}mikasa* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "miku",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *miku*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/miku.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}miku* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "minato",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *minato*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/minato.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}minato* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "naruto",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *naruto*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/naruto.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}naruto* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "natsukawa",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *natsukawa*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/natsukawa.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}natsukawa* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "nekonime",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *nekonime*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/nekonime.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}nekonime* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "nezuko",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *nezuko*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/nezuko.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}nezuko* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "nishimiya",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *nishimiya*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/nishimiya.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}nishimiya* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "onepiece",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *onepiece*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/onepiece.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}onepiece* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "pokemone",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *pokemone*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/pokemone.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}pokemone* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "rem",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *rem*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/rem.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}rem* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "rize",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *rize*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/rize.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}rize* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "sagiri",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *sagiri*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/sagiri.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}sagiri* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "sakura",
        category: "🦋 Weeb 🦋",
        desc: `Get sh!t quality pics of *trash*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/sakura.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Don't type *${prefix}sakura* again._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "shina",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *shina*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/shina.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}shina* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "shinka",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *shinka*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/shinka.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}shinka* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "shizuka",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *shizuka*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/shizuka.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}shizuka* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "shota",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *shota*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/shota.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}shota* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "tomori",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *tomori*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/tomori.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}tomori* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "toukachan",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *toukachan*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/toukachan.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}toukachan* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
    
    cmd({
        pattern: "yuki",
        category: "🦋 Weeb 🦋",
        desc: `Get high quality pics of *yuki*.`,
        react: react,
        filename: __filename
    },
        async(SynPika, Syn, text) => {
            let weeb = await fetchJson('https://raw.githubusercontent.com/shizothetechie/ShizoApi-Scrapper/main/anime/yuki.json');
            let pic = weeb[Math.floor(Math.random() * weeb.length)];
            Syn.reply(load);
            SynPika.sendMessage(Syn.chat, {
                image: {
                    url: pic.url,
                },
                caption: `_Type *${prefix}yuki* again for more._`,
            }, {
                quoted: Syn,
            });

        }
    );
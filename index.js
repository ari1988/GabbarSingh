#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require("cli-welcome");

welcome({
    title: pkgJSON.name,
    tagLine: `Howdy, nice to meet ya!`,
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,

})

console.log(`
Hi there, 👋 I am Arvind Singh aka Gabbar Singh 😉

DevOps Automation Enginner. My Motto: "Learn 📖 , Break 💢 and Implement 🧰." 😎 
Talk to me about : Kubernetes, Docker , Nginx, Nagios, Test Automation

🤝 Reach me at : 
🐦 Twitter  https://twitter.com/0xArvind
📖 Github   https://github.com/ari1988
🥡 LinkedIn https://www.linkedin.com/in/arvindsingh88/
🦖 Game     https://ari1988.github.io/

`);
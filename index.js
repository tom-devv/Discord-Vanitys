const axios = require('axios')
const chalk = require('chalk')
const readline = require('readline');
const fs = require('fs')

async function get(url) {

    axios.get(`https://discord.com/api/v9/invites/${url}`, {
            Headers: {
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:100.0) Gecko/20100101 Firefox/100.0"
            }
        })
        .then(function(response) {

            console.log(chalk.red(`URL: ${url} STATUS: BAD`))
        })
        .catch(function(error) {
            console.log(chalk.green(`URL: ${url} STATUS: GOOD`))
        });


}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}


async function readFile() {
    const fileStream = fs.createReadStream('as.txt')

    const readInterface = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of readInterface) {
        await sleep(5000)
        get(line)
    }
}
readFile()
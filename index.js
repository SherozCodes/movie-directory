const fs = require('fs')
const url = require('url')
const http = require('http')


const overview = fs.readFileSync('./templates/template-overview.html', 'utf-8')
const card = fs.readFileSync('./templates/template-card.html' , 'utf-8')
const TemplateReplace = require('./modules/replaceTemplate' , 'utf-8')  



const data = fs.readFileSync('./movies.json' , 'utf-8')
const dataObj = JSON.parse(data)


const server = http.createServer((req , res) => {
    const path = req.url

    if(path === '/' || path === 'overview'){
        res.writeHead(200 , {
           'Content-type': 'text/html'
        })

        const cardsHtml = dataObj.map(el => TemplateReplace(card , el));
        const output = overview.replace('{%MOVIE_CARDS%}' , cardsHtml);
        res.end(output)
    }
})


const PORT = 8000;
const URL = '127.0.0.1';

server.listen(PORT , URL ,  () => {
    console.log(`Server is running on ${URL}:${PORT}`);
    
})
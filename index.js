const http = require('http');
const fs = require('fs');
const url = require('url'); // URL moduli qo'shildi

const replaceTemplate = require('./modules/replaceTemplate');

// 1. Fayllarni server ishga tushmasdan oldin bir marta o'qib olamiz (Top-level sync)
const tempOverview = fs.readFileSync('./templates/template-overview.html', 'utf-8');
const tempCard = fs.readFileSync('./templates/template-card.html', 'utf-8');
const tempMovie = fs.readFileSync('./templates/template-movie.html', 'utf-8'); // Kinoning to'liq sahifasi

const dataJson = fs.readFileSync('./movies.json', 'utf-8');
const dataObj = JSON.parse(dataJson); // Stringni Arrayga o'girdik

// 2. Server yaratish
const server = http.createServer((req, res) => {
    // URL ichidan query va pathname'ni ajratib olamiz
    // true parametri ichidagi 'id=0' kabi ma'lumotlarni obyekt qilib beradi -> { id: '0' }
    const { query, pathname } = url.parse(req.url, true);

    // ROUTING QISMI
    // A) OVERVIEW PAGE (Bosh sahifa - hamma kinolar ro'yxati)
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // Har bir kino uchun card shablonini ma'lumot bilan to'ldirib chiqamiz
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%MOVIE_CARDS%}', cardsHtml);

        res.end(output);

    // B) MOVIE DETAIL PAGE (Alohida bitta kinoning sahifasi)
    } else if (pathname === '/movie') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // URL'dan kelgan ID bo'yicha bazadan (dataObj arrayidan) kinoni topamiz
        const movie = dataObj[query.id]; 
        
        // Agar kino topilsa, uning ma'lumotlarini to'liq sahifaga joylaymiz
        if (movie) {
            const output = replaceTemplate(tempMovie, movie);
            res.end(output);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>Movie not found!</h1>');
        }

    // C) 404 NOT FOUND (Noto'g'ri URL kiritilganda)
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header': 'hello-world' // Maxsus xalqaro header
        });
        res.end('<h1>Page not found!</h1>');
    }
});

// 3. Serverni eshitish rejimi
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});
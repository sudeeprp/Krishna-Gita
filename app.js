'use strict';
const http = require('http');
const notifyValimate = require('valimate-notifier');
const PORT = 8081;
const HTML = `
    <!DOCTYPE html>
    <html lang="en">
        
        <head>
            <title>My Website</title>
        </head> 
        
        <body onload="randomFeed(7,5)">
            <div id="verseFeed1"></div> 
            <div id="verseFeed2"></div> 
            <div id="verseFeed3"></div> 
            <div id="verseFeed4"></div> 
            <div id="verseFeed5"></div>  
            <script src = "verseFeed.js"></script>  
        </body>
    </html>
`;
http.createServer((req, res) => res.end(HTML, 'utf-8'))
    .listen(PORT, () => notifyValimate(true));
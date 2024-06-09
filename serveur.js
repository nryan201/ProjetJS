import { createServer } from 'node:http';
import fs from 'node:fs';
import { exec } from 'child_process';
import { join } from 'node:path';  // Ensure correct path handling

const server = createServer((req, res) => {
    if (req.url === '/') {
        serveFile('web/templates/index.html', 'text/html', res);
    } else if (req.url.match(/\.css$/)) {  // Dynamically handle any CSS file
        const cssPath = join('web', req.url.slice(1));  // Assuming all CSS files are in the 'web' directory
        serveFile(cssPath, 'text/css', res);
    } else if (req.url.endsWith('.js')) {
        serveFile(req.url.slice(1), 'application/javascript', res);
    } else if (req.url.endsWith('.png')) {
        serveFile(req.url.slice(1), 'image/png', res);
    } else if (req.url.endsWith('.otf')) {
        const fontPath = join('web', req.url.slice(1));  // Assuming all font files are in the 'web' directory
        serveFile(fontPath, 'font/otf', res);
    } else if (req.url.endsWith('.txt')) {
        const textPath = join('web', req.url.slice(1));
        serveFile(textPath, 'text/plain', res);
    } else if (req.url.startsWith('/game') || req.url.match(/^\/[A-Za-z0-9]+$/)) {
        const gameName = req.url.slice(1);  // Removes the leading slash
        const gamePath = `web/templates/${gameName}.html`;
        serveBlob(gamePath, 'text/html', res);
    } else {
        res.writeHead(404);
        res.write('Error: File Not Found');
        res.end();
    }
});

function serveBlob(path, contentType, res) {
    fs.readFile(path, function(err, data) {
        if (err) {
            res.writeHead(404);
            res.write('Error: File Not Found');
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': contentType});
            res.write(data);
            res.end();
        }
    });
}

function serveFile(path, contentType, res) {
    fs.readFile(path, function(err, data) {
        if (err) {
            res.writeHead(404);
            res.write('Error: File Not Found');
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': contentType});
            res.write(data);
            res.end();
        }
    });
}

server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

function openBrowser(url) {
    var cmd;
    var args = [];

    switch (process.platform) {
        case "win32":
            cmd = "cmd";
            args = ["/c", "start"];
            break;
        case "darwin":
            cmd = "open";
            break;
        default:
            cmd = "xdg-open";
    }
    args.push(url);
    exec(cmd + ' ' + args.join(' ')); // Execute the system command to open the URL in the browser
}

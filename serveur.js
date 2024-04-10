import { createReadStream } from 'node:fs';
import { createServer } from 'node:http';
import fs from 'node:fs';
import { exec } from 'child_process';

const server = createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.readFile('index.html', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.write('Error: File Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if (req.url === '/style.css') {
        res.writeHead(200, {'Content-Type': 'text/css'});
        fs.readFile('style.css', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.write('Error: File Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if (req.url.endsWith('.js')) {
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        fs.readFile(req.url.slice(1), function(err, data) {
            if (err) {
                res.writeHead(404);
                res.write('Error: File Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else if (req.url.endsWith('.png')) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        fs.readFile(req.url.slice(1), function(err, data) {
            if (err) {
                res.writeHead(404);
                res.write('Error: File Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    }
    else if (req.url.endsWith('.otf')) {
        res.writeHead(200, {'Content-Type': 'font/otf'});
        fs.readFile(req.url.slice(1), function(err, data) {
            if (err) {
                res.writeHead(404);
                res.write('Error: File Not Found');
            } else {
                res.write(data);
            }
            res.end();
        });
    }
});

server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
    openBrowser('http://localhost:3000');
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
    exec(cmd + ' ' + args.join(' ')); // Exécute la commande système pour ouvrir l'URL dans le navigateur
}
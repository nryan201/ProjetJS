import {createReadStream} from 'node:fs';
import {createServer} from 'node:http';
import fs from 'node:fs';

const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index.html', function(err, data) {
        if (err) {
            res.writeHead(404);
            res.write('Error: File Not Found');
        }
        else {
            res.write(data);
        }
        res.end();
    })
})
server.listen(3000, () => {
  console.log('Server started on http://localhost:3000')
});

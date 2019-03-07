
const fs = require('fs');
function isNotExisting(res){    
    res.writeHead(500);
    res.end("File doesn't exist", ()=>{       
        console.log("File doesn't exist");
    });
}
module.exports = {
    "/": (req, res)=>{
        res.writeHead(200, {"Content-type": "text/html"});
        fs.createReadStream('./public/index.html').pipe(res);
    },
    "/hello": (req, res)=>{
        res.writeHead(200, {"Content-type": "text/html"});
        fs.createReadStream('./public/hello.html').pipe(res);
    }
    /**"/user": (req, res)=>{
        res.writeHead(200, {"Content-type": "text/html"});
        res.end('users');
    },
    "/create": (req, res)=>{
        fs.writeFile('testfile.txt', 'initial content', (err)=>{
            if(err) throw err;
            console.log("file written successfully");     
        });
        res.writeHead(200, {"Content-type": "text/html"});
        res.end('create post');
    },
    "/write": (req, res)=>{
        fs.appendFile("testfile.txt", 'appended content \n', (err)=>{
            if(err) throw err;
            console.log('File written sucessfully');
        });
        res.writeHead(200);
        res.end();
    },
    "/delete": (req, res)=>{
        if(fs.existsSync('testfile.txt')){
            fs.unlink('testfile.txt', (err)=>{
              if(err) throw err;
              console.log('file deleted');  
            });
            res.writeHead(200);
            res.end();
        }
        isNotExisting(res);
    },
    "/rename": (req, res)=>{
        if(fs.existsSync('testfile.txt')){
            fs.rename('testfile.txt', 'renamedfile.txt', (err)=>{
              if(err) throw err;
              console.log('file renamed');  
            });
            res.writeHead(200);
            res.end();
        }
        isNotExisting(res);
    },
    '/read':(req, res)=>{
        if(fs.existsSync('testfile.txt')){
            fs.readFile('testfile.txt', (err, data)=>{
                if(err) console.error(err);
                res.writeHead(200);
                res.end(data);
            });
        }
        res.writeHead(404);
        res.end('File not found');
    } */
}
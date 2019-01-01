const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
	res.write("hello");
	res.end();
}).listen(3000);

var marked = require('marked');
var fs = require('fs');

var readMe = fs.readFileSync('README.md', 'utf-8');
var markdownReadMe = marked(readMe);

fs.writeFileSync('./src/README.html', markdownReadMe);

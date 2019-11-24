# AI Software Lab

## Project pre-requisites

Tools required to install

### System Requirements:
```bash
minimum 4 GB Ram suggested 8GB ram
Operating System Windows10 or above
Internet Connection
```
### Tools Requirments
-----------------------------------------
Visual Studio Code (VS code) IDE to develop the code [click here](https://code.visualstudio.com/Download)

GIT client [click here](https://git-scm.com/download/gui/windows)

[click here](https://github.com/AI-Software-Solutions) for github 

[click here](https://chrome.google.com/webstore/detail/gliffy-diagrams/bhmicilclplefnflapjmnngmkkkkpfad?hl=en) for gliffys

notepad ++  [click here](https://notepad-plus-plus.org/downloads/v7.8.1/)

#### Node.js 13.2 current version  [click here](https://nodejs.org/en/)
--------------------------------------------------
install VUE js with the help of npm 
```bash
C:\Users\cpm\AI>npm install --global vue-cli
npm WARN deprecated vue-cli@2.9.6: This package has been deprecated in favour of @vue/cli
npm WARN deprecated coffee-script@1.12.7: CoffeeScript on NPM has moved to "coffeescript" (no hyphen)
C:\Users\cpm\AppData\Roaming\npm\vue-list -> C:\Users\cpm\AppData\Roaming\npm\node_modules\vue-cli\bin\vue-list
C:\Users\cpm\AppData\Roaming\npm\vue -> C:\Users\cpm\AppData\Roaming\npm\node_modules\vue-cli\bin\vue
C:\Users\cpm\AppData\Roaming\npm\vue-init -> C:\Users\cpm\AppData\Roaming\npm\node_modules\vue-cli\bin\vue-init
+ vue-cli@2.9.6
updated 1 package in 246.719s
```

#### How to create Project structure usng VUE CLI
```bash
vue init webpack AILAB

? Project name ailab
? Project description A Vue.js project
? Author PurushothamCheekuru <cheekuru.cvshp@gmail.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests No
? Setup e2e tests with Nightwatch? Yes
? Should we run `npm install` for you after the project has been created? (recommended) npm

   vue-cli · Generated "AILAB".
```

#### How to run VUE application
```bash

C:\Users\cpm\AI>cd AILAB

C:\Users\cpm\AI\AILAB>npm run dev

```
#### github url -source code manager



----------------------
### How to generate README.md file for the project

1. First install the marked markdown converter:

$ npm install --save-dev marked

2. Then in a new file called generateReadMe.js, compile the markdown to HTML and write it to a new README.html file:
```bash
var marked = require('marked');
var fs = require('fs');
var readMe = fs.readFileSync('README.md', 'utf-8');
var markdownReadMe = marked(readMe);
fs.writeFileSync('./site/README.html', markdownReadMe);
```
3. Then inside the index.html where the README.md content is wanted, add an <object> tag
```bash
<object data="README.html" type="text/html"></object>
```
4. Then run this on the command line to make it happen:
```bash
$ node path/to/generateReadMe.js
```
----------------------------------------------------------


## AILAB

> A Vue.js project

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

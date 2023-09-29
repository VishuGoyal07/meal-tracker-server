"use strict";

var fs = require('fs');

var recipes = require('./fake-data');

var FILE_NAME = 'recipes.json';
fs.writeFileSync(FILE_NAME, JSON.stringify(recipes), 'utf-8');
console.log('done');
//# sourceMappingURL=convert-to-json.js.map
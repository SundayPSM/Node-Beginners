const path=require('path')
// Path Seprater like '\'
console.log(path.sep);
// Path join
const filePath=path.join('/content','subfolder','test.txt')
console.log(filePath);

// basename
const base=path.basename(filePath);
console.log(base);

// absolute path

const absolute=path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute);
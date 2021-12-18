const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', { encoding: 'utf8' }, (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first=result;
    readFile('./content/second.txt',{encoding:'utf8'},(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
        writeFile('./content/result-async.txt',`Here is thr result from ASYNC File SYSTEM ${first},${second}`,(err)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('Successfully Written into the File');
        })
    })
})
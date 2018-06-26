var fs = require('fs');
fs.readFile('/Users/shoppinpal/test/JSbegginerPrgms/demoreadFile.txt','utf-8',function demo(error,content){
if(error){
    throw error;
}
console.log('content of file is :-',content);
});
console.log('Second Commit');

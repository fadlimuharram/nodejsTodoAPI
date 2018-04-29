const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

// var pesan = 'ini adalah pesan';
// var hash = SHA256(pesan).toString();

// console.log(`Pesan : ${pesan} \nHash : ${hash}`);

// var data = {
//     id:4
// }
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data + 'ini secretnya')).toString()
// }


// var result = SHA256(JSON.stringify(token.data + 'ini secretnya')).toString();

// if(result === token.hash){
//     console.log('Data TIdak DI Ubah');
// }else{
//     console.log('Data Sudah Di Ubah, Jangan Percaya');
// }

var data = {
    id:4
}

var token = jwt.sign(data,'123abc');

console.log(token);

var decoded = jwt.verify(token,'123abc');
console.log(decoded);


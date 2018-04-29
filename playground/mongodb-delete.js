//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoAplikasi',(error,client)=>{
    if(error){
        return console.log('Tidak dapat konek ke server mongodb'); 
    }
    console.log('Koneksi Berhasil');
    const dbObject = client.db('TodoAplikasi');
    
    //delete many

    // dbObject.collection('Todos').deleteMany({
    //     tulisan:'belajar api'
    // }).then((hasil)=>{
    //     console.log(hasil);
    // });

    //delete one

    // dbObject.collection('Todos').deleteOne({
    //     tulisan:'belajar laravel'
    // }).then((hasil)=>{
    //     console.log(hasil);
    // });

    //findOneAndDelete

    // dbObject.collection('Todos').findOneAndDelete({
    //     tulisan:'Belajar Mongodb'
    // }).then((hasil)=>{
    //     console.log(hasil);
        
    // });
    
    client.close();
});
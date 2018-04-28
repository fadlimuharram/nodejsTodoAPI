//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoAplikasi',(error,client)=>{
    if(error){
        return console.log('Tidak dapat konek ke server mongodb'); //agar tidak menuju ke bawahnya
    }
    console.log('Koneksi Berhasil');
    const dbObject = client.db('TodoAplikasi');
    
    // dbObject.collection('Todos').find({
    //     _id: new ObjectID('5ae44c9424920e26c297c586')
    // }).toArray().then((dokumen)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(dokumen,undefined,2));        
    // },(error)=>{
    //     console.log('Tidak Dapat Fetch Todos');
    // });

    dbObject.collection('Todos').find().count().then((count)=>{
        console.log(`Todos Count : ${count}`);
    },(error)=>{
        console.log('Tidak Dapat Fetch Todos');
    });

    client.close();
});
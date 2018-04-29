//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoAplikasi',(error,client)=>{
    if(error){
        return console.log('Tidak dapat konek ke server mongodb'); 
    }
    console.log('Koneksi Berhasil');
    const dbObject = client.db('TodoAplikasi');
    
    dbObject.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ae44da48818012a32420b18')
    },{
        $set:{
            nama:"fadli putra"
        }
    },{
        returnOriginal:false
    }).then((hasil)=>{
        console.log(hasil);
    });
    
    client.close();
});
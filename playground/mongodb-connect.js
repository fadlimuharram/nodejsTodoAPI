//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoAplikasi',(error,client)=>{
    if(error){
        return console.log('Tidak dapat konek ke server mongodb'); //agar tidak menuju ke bawahnya
    }
    console.log('Koneksi Berhasil');
    const dbObject = client.db('TodoAplikasi');
    
    /*
    dbObject.collection('Todos').insertOne({
        tulisan:'Belajar Mongodb',
        selesai:false
    },(error,result)=>{
        if(error){
            return console.log('Tidak Bisa Memasukan Ke Todo : ',error);
        }

        console.log(JSON.stringify(result.ops,undefined,2));
    });*/

    // dbObject.collection('Users').insertOne({
    //     nama:'Putri',
    //     umur:19,
    //     lokasi:'jogyakarta'
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Tidak Bisa Memasukan Ke User : ',error);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    //     console.log(result.ops[0]._id.getTimestamp());
        
    // });

    client.close();
});
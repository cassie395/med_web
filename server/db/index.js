let mysql=require('mysql')

let db=mysql.createPool({
    host: 'localhost', //'127.0.0.1',
    user: 'root',
    password: 'ds9800557', //root
    database: 'medweb'
})

module.exports=db
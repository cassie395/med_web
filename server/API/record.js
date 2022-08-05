let db = require('../db/index')

exports.insert=(req,res)=>{
    var sql = 'insert into records (rNo,uid,pNo,record_date,record_time) values (?,?,?,?,?)'
    db.query(sql, [req.query.rNo, req.query.uid, req.query.pNo, req.query.date, req.query.time], (err, data)=>{
        if(err){
            return res.send({
                status: 400,
                message: "fail"
            })
        }
        else{
            res.send({
                status: 200,
                message: "success"
            })
        }
    })
}

exports.get=(req,res)=>{
    var sql = 'select * from records where uid = ?'
    db.query(sql, [req.query.uid], (err, data)=>{
        console.log(req.query.uid);
        if(err){
            return res.send({
                status: 400,
                message: "fail"
            })
        }
        if(data.length>0){
            res.json(data);
        }
    })
}
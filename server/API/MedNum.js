let db = require('../db/index')

exports.getMedNum=(req,res)=>{
    var sql = 'select * from items where pNo = ? and layer = ? and rNo = ?'
    db.query(sql, [req.query.pNo, req.query.layer, req.query.rNo], (err, data)=>{
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

exports.updateMedNum=(req,res)=>{
    var sql = 'insert into items (rNo,pNo,itemName,quantity,layer,remark) values (?,?,?,?,?,?)'
    db.query(sql, [req.query.rNo, req.query.pNo, req.query.itemName, req.query.quantity, req.query.layer, req.query.remark], (err, data)=>{
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
let db = require('../db/index')

exports.getMedNum=(req,res)=>{
    var sql = 'select * from pile where pNo = ?'
    db.query(sql, [req.query.pNo], (err, data)=>{
        console.log(req.query.pNo);
        if(err){
            return res.send({
                status: 400,
                message: "fail"
            })
        }
        if(data.length>0){
            res.json(data);
            console.log(data)
        }
    })
}

exports.updateMedNum=(req,res)=>{
    var sql =
     'update pile set med01 = ?, med02 = ?, med03 = ?, med04 = ?, med05 = ?, med06 = ?, med07 = ?, med08 = ?, med09 = ?, med10 = ?, med11 = ?, med12 = ?, med13 = ?, med14 = ?, med15 = ?, med16 = ?, med17 = ?, med18 = ?, med19 = ?, med20 = ?  where pNo = ?'
    db.query(sql, [req.query.med01, req.query.med02, req.query.med03, req.query.med04, req.query.med05, req.query.med06, req.query.med07, req.query.med08, req.query.med09, req.query.med10, req.query.med11, req.query.med12, req.query.med13, req.query.med14, req.query.med15, req.query.med16, req.query.med17, req.query.med18, req.query.med19, req.query.med20, req.query.pNo], (err, data)=>{
        console.log(req.query.med11);
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
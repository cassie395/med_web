let db=require('../db/index')

exports.shift=(req, res) => {
    var sql = 'select * from records where record_Date = ? and record_Time = ?'
    db.query(sql, [req.query.record_Date, req.query.record_Time], (err, data) => {
        console.log(req.query.record_Date);
        console.log(data);
        // console.log('number: '+ data[0].pNo);
        if(err){
            return res.send({
                status: 400,
                message: "fail"
            })
        }
        if(data.length>0){
            return res.send({
                status: 200,
                message: "success"
            })
        }else{
            res.send({
                status:202,
                message: "user id or password is wrong"
            })
        }
        
    })
}

exports.get=(req, res) => {
    var sql = 'select * from records where record_Date = ? and record_Time = ?'
    db.query(sql, [req.query.record_Date, req.query.record_Time], (err, data) => {
        console.log(req.query.record_Date);
        console.log(data);
        // console.log('number: '+ data[0].pNo);
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
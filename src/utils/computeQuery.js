const { initializeDb } = require("./connectToDb");

const computeQuery =async (query)=>{
    const db=initializeDb();
    return new Promise((resolve, reject) => {
        db.query(query,(err,result)=>{
            if(err){
                reject(err);
            }
            resolve(result);
        })
    })

}
module.exports={computeQuery}
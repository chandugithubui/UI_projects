var express = require('express');
var router = express.Router();
var utilData = require("./common");
var mongoClient = utilData.dbConDetails.mongoClient;
const bcrypt = require('bcrypt');

router.post('/', function(req, res, next) {
    var responseObj = {};
        getMongoConnection(req.body).then((response) => {
           
            
            bcrypt.compare(req.body.password, response[0].password, function(err, result) {
                console.log(result)
                if (result) {
                    req.session.isValidUser = true;
                    req.session.accountId = req.body.accountId;
                    responseObj.msg = 'Valid';
                } else {
                    req.session.isValidUser = false;
                    responseObj.msg = 'Invalid';
                }
                // responseObj.msg = result ? 'Valid' : 'Invalid';
                res.send(JSON.stringify(responseObj));
            });
            
        }).catch((error) => {
            responseObj.msg = 'Error while connecting to DB';
        });    
});

async function getMongoConnection(userData) {
    console.log("TEST")
    await mongoClient.connect(); 
    const db = mongoClient.db("shoppingWebApp");
    const collection = db.collection('userAccountDetails');
    console.log("done")
    return collection.find({accountId: userData.accountId }).toArray();
}
module.exports = router;

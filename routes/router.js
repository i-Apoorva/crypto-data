var Crypto= require('../models/crypto');
var express = require('express');
var router = express.Router(); 
var axios= require('axios');
var cron = require('node-cron');

cron.schedule('* * * * * *', () => {
    //console.log('running a task every second');
    listBinance();

  });

router.post('/crypto', function(req, res){
    var crypto = new Crypto();      // create a new instance of the Bear model
        crypto.name = req.body.name;
        crypto.price = req.body.price;
        crypto.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'New info entry created!' });
        });
});

const listBinance = async () => {
    try {
        const res = await axios.get('https://api.binance.com/api/v1/ticker/price?symbol=BTCUSDT');
        console.log('binance data is',res.data);
        var obj={};
        
        obj.symbol=res.data.symbol;
        obj.price= String(res.data.price);
        console.log('object is-->', obj);
        // var ans= res.data;
        // for(var key in obj) {
        //     alert("Key: " +  + " value: " + obj[key]);
        //  }

    } catch (err) {
        console.error(err);
    }
};

listBinance();

module.exports = router;

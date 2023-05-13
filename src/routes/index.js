const {Router} = require('express')
const { db } = require("../utilAdmin");
const { GetUID } = require("../utilAdmin");

router = Router();

router.get('/', async (req,res)=>{
    const querySnapshot = await db.collection('users').get()

    console.log(querySnapshot.docs[0].data());

    const test = await GetUID
    
    res.send('Hello World');

})

module.exports = router;
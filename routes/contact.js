const express=require('express');
const router=express.Router();
const controllers=require('../controllers/contactControllers')

router.get('/hi',(req,res)=>{
    res.send('hello')
})


router.post('/',controllers.postContact)

router.get('/',controllers.getContact)

router.get('/:id',controllers.getContactById)

router.delete('/:id',controllers.deleteContact)
router.put('/:id',controllers.editContact)
module.exports=router
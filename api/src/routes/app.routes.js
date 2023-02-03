const  {getSections,createSections,updateSections,disabledSections} = require('../controllers/sections.controller')
const {getTitles,createTitle,updateTitle,disabledTitle}= require('../controllers/titles.controller')
const  { Router } =require( 'express');
const router = Router()


router.get('/sections',getSections)

router.post('/sections',createSections)

router.put('/sections/update/:id',updateSections)

router.put('/sections/disabled/:id',disabledSections)

 //-------------
router.get('/titles',getTitles)

router.post('/titles',createTitle)

router.put('/titles/update/:id',updateTitle)

 router.put('/titles/disabled/:id',disabledTitle)
 
// //----------------

// router.get('/info',getInfo)

// router.post('/create',uploadInfo)

// router.put('/update',putInfo)

// router.put('/delete',deleteInfo)


module.exports=router
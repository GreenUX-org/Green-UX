import '../controllers'


import { Router } from 'express'
const router = Router()


router.get('/info',getInfo)

router.post('/create',uploadInfo)

router.put('/update',putInfo)

router.put('/delete',deleteInfo)

//-------------
router.get('/info',getInfo)

router.post('/create',uploadInfo)

router.put('/update',putInfo)

router.put('/delete',deleteInfo)
//----------------

router.get('/info',getInfo)

router.post('/create',uploadInfo)

router.put('/update',putInfo)

router.put('/delete',deleteInfo)


export default router
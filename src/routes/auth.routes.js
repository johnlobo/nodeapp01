import {Router} from 'express'
const router = Router()

import * as AuthCtrl from '../controllers/auth.controller'

router.post('/signUp', AuthCtrl.signUp)
router.post('/signIn', AuthCtrl.signIn)

export default router;
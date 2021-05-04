import {Router} from 'express'
const router = Router()

import * as UserCtrl from '../controllers/users.controller'

router.get('/', UserCtrl.getUsers)
router.post('/', UserCtrl.createUSer)
router.get('/:userId', UserCtrl.getUserById)
router.put('/:userId', UserCtrl.updateUserById)
router.delete('/:userId', UserCtrl.deleteUserById)

export default router;
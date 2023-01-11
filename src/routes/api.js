const express  = require('express');
const ProfileController = require('../controllers/ProfileController');
const todoController = require('../controllers/todoController');
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');
const router = express.Router();

router.post('/CreateProfile', ProfileController.CreateProfile)

router.post('/UserLogin', ProfileController.UserLogin)


router.get('/SelectProfile', AuthVerifyMiddleware, ProfileController.SelectProfile)

router.post('/UpdateProfile', AuthVerifyMiddleware, ProfileController.UpdateProfile)

// todo List routes:
router.post('/CreateTodo', AuthVerifyMiddleware, todoController.CreateTodo)

router.get('/SelectTodo', AuthVerifyMiddleware, todoController.SelectTodo)

router.post('/UpdateTodo', AuthVerifyMiddleware, todoController.UpdateTodo)

module.exports = router;
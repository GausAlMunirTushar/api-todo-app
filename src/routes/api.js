const express  = require('express');
const ProfileController = require('../controllers/ProfileController');
const todoController = require('../controllers/todoController');
const AuthVerifyMiddleware = require('../middlewares/AuthVerifyMiddleware');
const router = express.Router();

// User Login & Registration routes:
router.post('/CreateProfile', ProfileController.CreateProfile)
router.post('/UserLogin', ProfileController.UserLogin)

// Profile routes:
router.get('/SelectProfile', AuthVerifyMiddleware, ProfileController.SelectProfile)
router.post('/UpdateProfile', AuthVerifyMiddleware, ProfileController.UpdateProfile)

// TodoList routes:
router.post('/CreateTodo', AuthVerifyMiddleware, todoController.CreateTodo)
router.get('/SelectTodo', AuthVerifyMiddleware, todoController.SelectTodo)
router.post('/UpdateTodo', AuthVerifyMiddleware, todoController.UpdateTodo)
router.post('/UpdateStatusTodo', AuthVerifyMiddleware, todoController.UpdateStatusTodo)
router.post('/RemoveTodo', AuthVerifyMiddleware, todoController.RemoveTodo)
router.post('/SelectTodoByStatus', AuthVerifyMiddleware, todoController.SelectTodoByStatus)
router.post('/SelectTodoByDate', AuthVerifyMiddleware, todoController.SelectTodoByDate)

module.exports = router;
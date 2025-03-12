import { Router } from 'express';
// importamos nuestro controller donde se halla la logica de nuestro CRUD
import { allTasks, findTask, createTask, updateTask, deleteTask } from '../controller/task.controller.js';

// utilizar un controller , nos permite un codigo mas facil de mantener, ademas de mejor y mas facil lectura

const router = Router();

router.get('/', allTasks );

router.get('/:tid', findTask );

router.post('/', createTask );

router.patch('/:tid', updateTask );

router.delete('/:tid', deleteTask );



export default router;
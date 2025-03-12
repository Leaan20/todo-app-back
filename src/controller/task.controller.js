// controller para las taks con funciones.
// importamos el modelo para poder trabajar con el (de momento)
// TODO crear DAO

import { taskModel } from '../models/task.model.js';

export const allTasks = async (req,res) => {
    const allTasks = await taskModel.find();
    try {

        if(!allTasks) return res.status(404).send({message: 'No hay tasks para mostrar'});

        return res.status(200).send({tasks: allTasks, message: 'tasks obtenidas exitosamente' });
    } catch (error) {
        console.log(error);

        res.status(500).send({status: 'error', message: 'Hubo un error al obtener las tasks'})
    }
};

export const findTask = async (req,res) => {
    const { tid } = req.params;
    try {
        if(!tid) return 'Es necesario el id del task';

        const task = await taskModel.findById(tid);

        if(!task) return res.status(404).send('tarea no encontrada con ese id');

        res.status(200).send({message: 'task encontrada', task: task});
    } catch (error) {
        console.log(error);
        
        res.status(500).send({error, message:'error al encontrar la task indicada'})
    }
};

export const createTask = async (req,res) => {
    const { title, completed } = req.body;

    try {
        if( !title || title.trim() === '') return 'No puede guardarse una task vacia';

        const newTask = await taskModel.create({
            title,
            completed
        });
        res.status(201).send({message:'nueva task creada exitosamente', task: newTask});
    } catch (error) {
        console.log(error);
        res.status(501).send({error,message: 'Error al crear una nueva task'});
    }
};

export const updateTask = async (req,res) => {
    const { tid } = req.params;
        const { completed, title } = req.body;
        
    try {
        if(!tid) return 'Es necesario el id del task';
        
        const updateFields = {};
        if (completed !== undefined) updateFields.completed = completed;
        if (title !== undefined && title.trim() !== '') updateFields.title = title;

        const taskUpdated = await taskModel.findByIdAndUpdate(
            tid,
            updateFields,
            { new: true }
        );

        res.status(203).send({message: 'task modificada con exito', taskUpdated});
        
    } catch (error) {
        console.log(error);
        res.status(501).send({error, message: 'No pudo actualizarse el estado de la task'});
    }
};

export const deleteTask = async (req,res) => {
    const { tid } = req.params;
        try {
            if(!tid) return 'Es necesario el id del task para eliminarlo';

        const taskDeleted = await taskModel.findByIdAndDelete(tid);

        res.status(200).send({message: 'Task eliminada de forma exitosa', taskDeleted})
        } catch (error) {
            console.log(error);
            res.status(500).send({error,message:'Error al intentar eliminar la task'})
            
        }
}
import express from 'express';
import cors from 'cors';

// la importacion de la instanciacion de un nuevo objeto de class DB , ya tiene en su constructor el inicio del metodo 'connect'
import { ConnectDB } from './db.js';
import { config } from './config.js';
import  taskRouter  from './routes/task.router.js';

const app = express();
const port = config.port;
const corsOptions = {
    origin: 'http://localhost:5173',
};




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(corsOptions.origin));

// routes
app.use('/api/task', taskRouter);

app.get("/", (req,res) => {
    res.send('probando trae');
});

app.listen(port, () =>{
    console.log(`http://localhost:${port}`);
    
});

import { Router } from 'express'
import MotorcyclesController from '../controllers/motorcycles.js';


const routers = Router()

routers.get('/', MotorcyclesController.getMotorcycles)
routers.get('/:id?', MotorcyclesController.getMotorcycles)
routers.post('/save', MotorcyclesController.saveMotorcycles)
routers.put('/edit/:id?', MotorcyclesController.updateMotorcycles)
routers.delete('/delete/:id?', MotorcyclesController.deleteMotorcycles)

export default routers
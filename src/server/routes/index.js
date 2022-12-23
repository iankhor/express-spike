import { Router } from 'express';
import root from '../controllers/root'

const router = Router();

router.get('/', root)

export default router
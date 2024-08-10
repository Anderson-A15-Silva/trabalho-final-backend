import { Router } from "express";
import { FileirasController } from "../controllers/fileirasController";

const router = Router();
router.get('/fileiras', FileirasController.getAll);
router.get('/fileiras/:id', FileirasController.getById);
router.post('/fileiras', FileirasController.create);
router.put('/fileiras/:id', FileirasController.update);
router.delete('/fileiras/:id', FileirasController.delete);

export default router;
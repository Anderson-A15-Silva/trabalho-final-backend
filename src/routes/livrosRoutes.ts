import { Router } from "express";
import { LivrosController } from "../controllers/livrosController";

const router = Router();
router.get('/livros', LivrosController.getAll);
router.get('/livros/:id', LivrosController.getById);
router.post('/livros', LivrosController.create);
router.put('/livros/:id', LivrosController.update);
router.delete('/livros/:id', LivrosController.delete);

export default router;
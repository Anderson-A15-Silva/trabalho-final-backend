import { Request, Response } from 'express';
import { Livro } from '../models/livro';

export class LivrosController{
    static async getAll(req: Request, res: Response){
        try {
            const livros = await Livro.getAll();
            res.status(200).json(livros);     
        } catch(error) {
            res.status(500).json({'message': error});
        }
    }
    static async getById(req: Request, res: Response){
        try {
            const { id } = req.params;
            const livro = await Livro.getById(parseInt(id, 10));
            res.status(200).json(livro); 
        } catch(error) {
            res.status(404).json({'message': error});
        }
    }
    static async create(req: Request, res: Response){
        try {
            const { titulo, descricao, paginas, autor, anoPublicacao, quantidade } = req.body;
            const resultado = await Livro.create(titulo, descricao, paginas, autor, anoPublicacao, quantidade);
            res.status(201).json(resultado);    
        } catch(error) {
            res.status(500).json({'message': error});
        }
    }
    static async update(req: Request, res: Response){
        try {
            const { id } = req.params;
            const { titulo, descricao, paginas, autor, anoPublicacao, quantidade } = req.body;
            const resultado = await Livro.update(parseInt(id, 10), titulo, descricao, paginas, autor, anoPublicacao, quantidade);
            res.status(200).json(resultado); 
        } catch(error) {
            res.status(500).json({'message': error});
        }
    }
    static async delete(req: Request, res: Response){
        try {
            const { id } = req.params;
            const resultado = await Livro.delete(parseInt(id, 10));
            res.status(200).json(resultado);
        } catch(error) {
            res.status(500).json({'message': error});
        }    
    }
}
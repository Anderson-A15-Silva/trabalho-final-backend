import { Request, Response } from 'express';
import { Fileira } from '../models/fileira';

export class FileirasController{
    static async getAll(req: Request, res: Response){
        try {
            const fileiras = await Fileira.getAll();
            res.status(200).json(fileiras);     
        } catch(error) {
            res.status(500).json({'message': error});
        }
    }
    static async getById(req: Request, res: Response){
        try {
            const { id } = req.params;
            const fileira = await Fileira.getById(parseInt(id, 10));
            res.status(200).json(fileira); 
        } catch(error) {
            res.status(404).json({'message': error});
        }
    }
    static async create(req: Request, res: Response){
        try {
            const { nome, genero, idLivro, idFornecedor } = req.body;
            const resultado = await Fileira.create(nome, genero, idLivro, idFornecedor);
            res.status(201).json(resultado);    
        } catch(error) {
            res.status(500).json({'message': error});
        }
    }
    static async update(req: Request, res: Response){
        try {
            const { id } = req.params;
            const { nome, genero, idLivro, idFornecedor } = req.body;
            const resultado = await Fileira.update(parseInt(id, 10), nome, genero, idLivro, idFornecedor);
            res.status(200).json(resultado); 
        } catch(error) {
            res.status(500).json({'message': error});
        }
    }
    static async delete(req: Request, res: Response){
        try {
            const { id } = req.params;
            const resultado = await Fileira.delete(parseInt(id, 10));
            res.status(200).json(resultado);
        } catch(error) {
            res.status(500).json({'message': error});
        }    
    }
}
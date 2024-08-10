import { Request, Response } from 'express';
import { Fornecedor } from '../models/fornecedor';

export class FornecedoresController{
    static async getAll(req: Request, res: Response){
        try {
            const fornecedores = await Fornecedor.getAll();
            res.status(200).json(fornecedores);     
        } catch(error) {
            res.status(500).json({'message': error});
        }
    }
    static async getById(req: Request, res: Response){
        try {
            const { id } = req.params;
            const fornecedor = await Fornecedor.getById(parseInt(id, 10));
            res.status(200).json(fornecedor); 
        } catch(error) {
            res.status(404).json({'message': error});
        }
    }
    static async create(req: Request, res: Response){
        try {
            const { nome, email, telefone, empresa } = req.body;
            const resultado = await Fornecedor.create(nome, email, telefone, empresa);
            res.status(201).json(resultado);    
        } catch(error) {
            res.status(500).json({'message': error});
        }
    }
    static async update(req: Request, res: Response){
        try {
            const { id } = req.params;
            const { nome, email, telefone, empresa } = req.body;
            const resultado = await Fornecedor.update(parseInt(id, 10), nome, email, telefone, empresa);
            res.status(200).json(resultado); 
        } catch(error) {
            res.status(500).json({'message': error});
        }
    }
    static async delete(req: Request, res: Response){
        try {
            const { id } = req.params;
            const resultado = await Fornecedor.delete(parseInt(id, 10));
            res.status(200).json(resultado);
        } catch(error) {
            res.status(500).json({'message': error});
        }    
    }
}
import { Request, Response } from 'express';
import { Cliente } from '../models/cliente';

export class ClientesController{
    static async getAll(req: Request, res: Response){
        try {
            const clientes = await Cliente.getAll();
            res.status(200).json(clientes);     
        } catch(error) {
            res.status(500).json({'message': error});
        }
    }
    static async getById(req: Request, res: Response){
        try {
            const { id } = req.params;
            const cliente = await Cliente.getById(parseInt(id, 10));
            res.status(200).json(cliente); 
        } catch(error) {
            res.status(404).json({'message': error});
        }
    }
    static async create(req: Request, res: Response){
        try {
            const { nome, email, telefone } = req.body;
            const resultado = await Cliente.create(nome, email, telefone);
            res.status(201).json(resultado);    
        } catch(error) {
            res.status(500).json({'message': error});
        }
    }
    static async update(req: Request, res: Response){
        try {
            const { id } = req.params;
            const { nome, email, telefone } = req.body;
            const resultado = await Cliente.update(parseInt(id, 10), nome, email, telefone);
            res.status(200).json(resultado); 
        } catch(error) {
            res.status(500).json({'message': error});
        }
    }
    static async delete(req: Request, res: Response){
        try {
            const { id } = req.params;
            const resultado = await Cliente.delete(parseInt(id, 10));
            res.status(200).json(resultado);
        } catch(error) {
            res.status(500).json({'message': error});
        }    
    }
}
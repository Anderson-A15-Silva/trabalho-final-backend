import { Request, Response } from 'express';
import { Cadastro } from '../models/cadastro';

export class CadastrosController{
    static async getAll(req: Request, res: Response){
        try {
            const cadastros = await Cadastro.getAll();
            res.status(200).json(cadastros);     
        } catch(error) {
            res.status(500).json({'message': error});
        }
    }
    static async getById(req: Request, res: Response){
        try {
            const { id } = req.params;
            const cadastro = await Cadastro.getById(parseInt(id, 10));
            res.status(200).json(cadastro); 
        } catch(error) {
            res.status(404).json({'message': error});
        }
    }
    static async create(req: Request, res: Response){
        try {
            const { observacoes, idCliente, idLivro, dataCadastro } = req.body;
            const resultado = await Cadastro.create(observacoes, idCliente, idLivro, dataCadastro);
            res.status(201).json(resultado);    
        } catch(error) {
            res.status(500).json({'message': error});
        }
    }
    static async update(req: Request, res: Response){
        try {
            const { id } = req.params;
            const { observacoes, idCliente, idLivro, dataCadastro } = req.body;
            const resultado = await Cadastro.update(parseInt(id, 10), observacoes, idCliente, idLivro, dataCadastro);
            res.status(200).json(resultado); 
        } catch(error) {
            res.status(500).json({'message': error});
        }
    }
    static async delete(req: Request, res: Response){
        try {
            const { id } = req.params;
            const resultado = await Cadastro.delete(parseInt(id, 10));
            res.status(200).json(resultado);
        } catch(error) {
            res.status(500).json({'message': error});
        }    
    }
}
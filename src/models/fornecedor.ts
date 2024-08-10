import { db } from "../database";

export class Fornecedor{
    private _id: number;
    private _nome: string;
    private _email: string;
    private _telefone: number;
    private _empresa: string;

    constructor(id: number, nome: string, email: string, telefone: number, empresa: string){
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
        this._empresa = empresa;
    }

    static async getAll(){
        try {
            const [rows] = await db.query('SELECT * FROM Fornecedores');
            return rows;
        } catch {
            throw new Error('Erro ao buscar fornecedores no banco de dados.');
        }
    }
    static async getById(id: number){
        try {
            const [rows] = await db.query('SELECT * FROM Fornecedores WHERE id = ?', [id]);
            return rows;
        } catch {
            throw new Error('Erro ao buscar fornecedor no banco de dados.');
        }
    }
    static async create(nome: string, email: string, telefone: number, empresa: string){
        try {
            const [rows] = await db.query('INSERT INTO Fornecedores (nome, email, telefone, empresa) VALUES (?,?,?,?)', [nome, email, telefone, empresa]);
            return rows;
         }catch {
            throw new Error('Erro ao inserir fornecedor no banco de dados.');
        }
    }
    static async update(id: number, nome: string, email: string, telefone: number, empresa: string){
        try {
            const [rows] = await db.query('UPDATE Fornecedores SET nome = ?, email = ?, telefone = ?, empresa = ? WHERE id = ?', [nome, email, telefone, empresa, id]);
            return rows;
        } catch {
            throw new Error('Erro ao atualizar fornecedor no banco de dados.');
        }
    }
    static async delete(id: number){
        try {
            const [rows] = await db.query('DELETE FROM Fornecedores WHERE id = ?', [id]);
            return rows;
        } catch {
            throw new Error('Erro ao deletar fornecedor no banco de dados.');
        }    
    }
}
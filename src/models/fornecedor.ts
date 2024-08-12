import { db } from "../database";
import { RowDataPacket, ResultSetHeader } from "mysql2";

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

    static async getAll(): Promise<RowDataPacket[]>{
        try {
            const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM Fornecedores');
            return rows;
        } catch(error) {
            if(error instanceof Error) {
                throw new Error('Erro ao buscar fornecedores no banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async getById(id: number){
        try {
            const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM Fornecedores WHERE id = ?', [id]);
            return rows;
        } catch(error) {
            if(error instanceof Error) {
                throw new Error('Erro ao buscar fornecedor no banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async create(nome: string, email: string, telefone: number, empresa: string): Promise<ResultSetHeader>{
        try {
            const [rows] = await db.query<ResultSetHeader>('INSERT INTO Fornecedores (nome, email, telefone, empresa) VALUES (?,?,?,?)', [nome, email, telefone, empresa]);
            return rows;
         }catch(error) {
            if(error instanceof Error) {
                throw new Error('Erro ao inserir fornecedor no banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async update(id: number, nome: string, email: string, telefone: number, empresa: string): Promise<ResultSetHeader>{
        try {
            const [rows] = await db.query<ResultSetHeader>('UPDATE Fornecedores SET nome = ?, email = ?, telefone = ?, empresa = ? WHERE id = ?', [nome, email, telefone, empresa, id]);
            return rows;
        } catch(error) {
            if(error instanceof Error) {
                throw new Error('Erro ao atualizar fornecedor no banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async delete(id: number): Promise<ResultSetHeader>{
        try {
            const [rows] = await db.query<ResultSetHeader>('DELETE FROM Fornecedores WHERE id = ?', [id]);
            return rows;
        } catch(error) {
            if(error instanceof Error) {
                throw new Error('Erro ao deletar fornecedor no banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }    
    }
}
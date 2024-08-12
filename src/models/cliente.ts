import { db } from "../database";
import { RowDataPacket, ResultSetHeader } from "mysql2";

export class Cliente{
    private _id: number;
    private _nome: string;
    private _email: string;
    private _telefone: number;

    constructor(id: number, nome: string, email: string, telefone: number){
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
    }

    static async getAll(): Promise<RowDataPacket[]>{
        try {
            const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM Clientes');
            return rows;
        } catch(error) {
            if (error instanceof Error){
                throw new Error('Erro ao buscar clientes no banco de dados: '+error.message);
            } else {
                throw new Error('Erro desconhecido.');
            }
        } 
    }
    static async getById(id: number): Promise<RowDataPacket[]>{
        try {
            const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM Clientes WHERE id = ?', [id]);
            return rows;
        } catch(error) {
            if (error instanceof Error){
                throw new Error('Erro ao buscar cliente no banco de dados: '+error.message);
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async create(nome: string, email: string, telefone: number): Promise<ResultSetHeader>{
        try {
            const [rows] = await db.query<ResultSetHeader>('INSERT INTO Clientes (nome, email, telefone) VALUES (?,?,?)', [nome, email, telefone]);
            return rows;
        } catch(error) {
            if (error instanceof Error){
                throw new Error('Erro ao inserir cliente no banco de dados: '+error.message);
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async update(id: number, nome: string, email: string, telefone: number): Promise<ResultSetHeader>{
        try {
            const [rows] = await db.query<ResultSetHeader>('UPDATE Clientes SET nome = ?, email = ?, telefone = ? WHERE id = ?', [nome, email, telefone, id]);
            return rows;
        } catch(error) {
            if (error instanceof Error){
                throw new Error('Erro ao buscar cliente no banco de dados; '+error.message);
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async delete(id: number): Promise<ResultSetHeader>{
        try {
            const [rows] = await db.query<ResultSetHeader>('DELETE FROM Clientes WHERE id = ?', [id]);
            return rows;
        } catch(error) {
            if (error instanceof Error){
                throw new Error('Erro ao buscar cliente no banco de dados: '+error.message);
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
}
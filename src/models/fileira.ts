import { db } from "../database";
import { RowDataPacket, ResultSetHeader } from "mysql2";

export class Fileira{
    private _id: number;
    private _nome: string;
    private _genero: string;
    private _idLivro: number;
    private _idFornecedor: number;

    constructor(id: number, nome: string, genero: string, idLivro: number, idFornecedor: number){
        this._id = id;
        this._nome = nome;
        this._genero = genero;
        this._idLivro = idLivro;
        this._idFornecedor = idFornecedor;
    }

    static async getAll(): Promise<RowDataPacket[]>{
        try {
            const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM Fileiras');
            return rows;
        } catch(error) {
            if (error instanceof Error){
                throw new Error('Erro ao buscar fileiras no banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async getById(id: number): Promise<RowDataPacket[]>{
        try {
            const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM Fileiras WHERE id = ?', [id]);
            return rows;
        } catch(error) {
            if (error instanceof Error){
                throw new Error('Erro ao buscar fileira no banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async create(nome: string, genero: string, idLivro: number, idFornecedor: number): Promise<ResultSetHeader>{
        try {
            const [rows] = await db.query<ResultSetHeader>('INSERT INTO Fileiras (nome, genero, id_livro, id_fornecedor) VALUES (?,?,?,?)', [nome, genero, idLivro, idFornecedor]);
            return rows;
        } catch(error) {
            if (error instanceof Error){
                throw new Error('Erro ao inserir fileira no banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async update(id: number, nome: string, genero: string, idLivro: number, idFornecedor: number): Promise<ResultSetHeader>{
        try {
            const [rows] = await db.query<ResultSetHeader>('UPDATE Fileiras SET nome = ?, genero = ?, id_livro = ?, id_fornecedor = ? WHERE id = ?', [nome, genero, idLivro, idFornecedor, id]);
            return rows;
        } catch(error) {
            if (error instanceof Error){
                throw new Error('Erro ao atualizar fileira no banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async delete(id: number): Promise<ResultSetHeader>{
        try {
            const [rows] = await db.query<ResultSetHeader>('DELETE FROM Fileiras WHERE id = ?', [id]);
            return rows;
        } catch(error) {
            if (error instanceof Error){
                throw new Error('Erro ao deletar fileira no banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
}
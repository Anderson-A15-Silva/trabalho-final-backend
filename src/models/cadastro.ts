import { db } from "../database";
import { RowDataPacket, ResultSetHeader } from "mysql2";

export class Cadastro{
    private _idCadastro: number;
    private _observacoes: string;
    private _idCliente: number;
    private _idLivro: number;
    private _dataCadastro: string;

    constructor(idCadastro: number, observacoes: string, idCliente: number, idLivro: number, dataCadastro: string){
        this._idCadastro = idCadastro;
        this._observacoes = observacoes;
        this._idCliente = idCliente;
        this._idLivro = idLivro;
        this._dataCadastro = dataCadastro;
    }

    static async getAll(): Promise<RowDataPacket[]>{
        try {
            const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM Cadastros');
            return rows;
        } catch(error) {
            if(error instanceof Error){
                throw new Error('Erro ao buscar cadastros no banco de dados: '+error.message);
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async getById(idCadastro: number): Promise<RowDataPacket[]>{
        try {
            const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM Cadastros WHERE id_cadastro = ?', [idCadastro]);
            return rows;
        } catch(error) {
            if(error instanceof Error) {
                throw new Error('Erro ao buscar cadastro no banco de dados: '+error.message);
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async create(observacoes: string, idCliente: number, idLivro: number, dataCadastro: string): Promise<ResultSetHeader>{
        try {
            const [rows] = await db.query<ResultSetHeader>('INSERT INTO Cadastros (observacoes, id_cliente, id_livro, data_cadastro) VALUES (?,?,?,?)', [observacoes, idCliente, idLivro, dataCadastro]);
            return rows;
        } catch(error) {
            if(error instanceof Error) {
                throw new Error('Erro ao inserir cadastro no banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async update(idCadastro: number, observacoes: string, idCliente: number, idLivro: number, dataCadastro: string): Promise<ResultSetHeader>{
        try {
            const [rows] = await db.query<ResultSetHeader>('UPDATE Cadastros SET observacoes = ?, id_cliente = ?, id_livro = ?, data_cadastro = ? WHERE id_cadastro = ?', [observacoes, idCliente, idLivro, dataCadastro, idCadastro]);
            return rows;
        } catch(error) {
            if(error instanceof Error) {
                throw new Error('Erro ao atualizar cadastro no banco de dados.');
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
    static async delete(idCadastro: number): Promise<ResultSetHeader>{
        try {
            const [rows] = await db.query<ResultSetHeader>('DELETE FROM Cadastros WHERE id_cadastro = ?', [idCadastro]);
            return rows;
        } catch(error) {
            if(error instanceof Error) {
                throw new Error('Erro ao deletar cadastro no banco de dados: '+error.message);
            } else {
                throw new Error('Erro desconhecido.');
            }
        }
    }
}
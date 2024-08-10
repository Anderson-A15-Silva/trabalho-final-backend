import { db } from "../database";

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

    static async getAll(){
        try {
            const [rows] = await db.query('SELECT * FROM Cadastros');
            return rows;
        } catch {
            throw new Error('Erro ao buscar cadastros no banco de dados.');
        }
    }
    static async getById(idCadastro: number){
        try {
            const [rows] = await db.query('SELECT * FROM Cadastros WHERE id_cadastro = ?', [idCadastro]);
            return rows;
        } catch {
            throw new Error('Erro ao buscar cadastro no banco de dados.');
        }
    }
    static async create(observacoes: string, idCliente: number, idLivro: number, dataCadastro: string){
        try {
            const [rows] = await db.query('INSERT INTO Cadastros (observacoes, id_cliente, id_livro, data_cadastro) VALUES (?,?,?,?)', [observacoes, idCliente, idLivro, dataCadastro]);
            return rows;
        } catch {
            throw new Error('Erro ao inserir cadastro no banco de dados.');
        }
    }
    static async update(idCadastro: number, observacoes: string, idCliente: number, idLivro: number, dataCadastro: string){
        try {
            const [rows] = await db.query('UPDATE Cadastros SET observacoes = ?, id_cliente = ?, id_livro = ?, data_cadastro = ? WHERE id_cadastro = ?', [observacoes, idCliente, idLivro, dataCadastro, idCadastro]);
            return rows;
        } catch {
            throw new Error('Erro ao atualizar cadastro no banco de dados.');
        }
    }
    static async delete(idCadastro: number){
        try {
            const [rows] = await db.query('DELETE FROM Cadastros WHERE id_cadastro = ?', [idCadastro]);
            return rows;
        } catch {
            throw new Error('Erro ao deletar cadastro no banco de dados.');
        }
    }
}
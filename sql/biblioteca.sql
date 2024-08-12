-- 0. Criar Repositório no Github;
-- 1. Criar Banco de Dados Nomeado de "Biblioteca";
CREATE DATABASE Biblioteca;
USE Biblioteca;
DROP DATABASE Biblioteca;
-- 2. Criar Tabela Nomeada de "Fornecedores" (id, nome, email, telefone, empresa);
CREATE TABLE Fornecedores(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL UNIQUE,
    telefone INT NOT NULL UNIQUE,
    empresa VARCHAR(30) NOT NULL
);
-- 3. Criar Tabela Nomeada de "Livros" (id, titulo, descricao, paginas, autor, ano_publicacao, quantidade, id_fileira, id_fornecedor);
CREATE TABLE Livros(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(30) NOT NULL,
    descricao TINYTEXT NOT NULL,
    paginas INT NOT NULL,
    autor VARCHAR(30) NOT NULL,
    ano_publicacao INT NOT NULL,
    quantidade INT NOT NULL
);
-- 4. Criar Tabela Nomeada de "Fileiras" (id, nome, genero, capacidade);
CREATE TABLE Fileiras(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome CHAR(2) NOT NULL,
    genero VARCHAR(40) NOT NULL,
    id_livro INT NULL,
    id_fornecedor INT NULL,
    FOREIGN KEY (id_livro) REFERENCES Livros(id),
    FOREIGN KEY (id_fornecedor) REFERENCES Fornecedores(id)
);
-- 5. Criar Tabela Nomeada de "Clientes" (id, nome, email, telefone);
CREATE TABLE Clientes(
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL UNIQUE,
    telefone INT NOT NULL UNIQUE
);
-- 6. Criar Tabela Nomeada de "Cadastros" (id_cadastro, observacoes, id_cliente, id_livro, data_cadastro);
CREATE TABLE Cadastros(
id_cadastro INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    observacoes TINYTEXT NOT NULL,
    id_cliente INT NOT NULL,
    id_livro INT NOT NULL,
    data_cadastro DATETIME NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id),
    FOREIGN KEY (id_livro) REFERENCES Livros(id)
);
-- 7. Fazer Inserções nas Tabelas (mínimo 10 linhas cada);
SELECT * FROM Fornecedores;
SELECT * FROM Livros;
SELECT * FROM Fileiras;
SELECT * FROM Clientes;
SELECT * FROM Cadastros;

DROP TABLE Cadastros;
DROP TABLE Clientes;
DROP TABLE Fileiras;
DROP TABLE Livros;
DROP TABLE Fornecedores;

INSERT INTO Fornecedores (id, nome, email, telefone, empresa) VALUES
(default, "William", "william@gmail.com", 974538434, "Universal Files"),
(default, "Felipe", "felipe@gmail.com", 990325442, "Ler é Viver"),
(default, "Roberto", "roberto@gmail.com", 974843944, "Revisitando"),
(default, "Carlos", "carlos@gmail.com", 946769921, "Ler é Viver"),
(default, "Marcos", "marcos@gmail.com", 954927938, "Universal Files");
INSERT INTO Livros (id, titulo, descricao, paginas, autor, ano_publicacao, quantidade) VALUES
(default, "A Árvore do Jardim", "Um menino decide construir uma casa na árvore de seu próprio quintal", 200, "Lúcio", 2017, 20),
(default, "Que bicho te mordeu?", "Uma menina age rebeldia depois de ter seu pedido negado", 100, "Murilo", 2019, 30),
(default, "Robert: O Urso de Pelúcia", "Um brinquedo repentinamente ganha consciência e busca entender a sociedade humana", 200, "Murilo", 2015, 40),
(default, "A Rosa Espinhosa", "Um detetive tenta desvendar um caso assassiinato misterioso", 300, "Paul", 2017, 100),
(default, "O Mundo na Real", "Uma jornada cheia de descobertas sobre a espécie humana", 200, "Webber", 2013, 50);
-- a => adulto ex AB
-- b => juvenil ex BD
-- c => infantil ex CA
-- d -> livre ex DO
INSERT INTO Fileiras (id, nome, genero, id_fornecedor, id_livro) VALUES
(default, "AC", "Drama", 5, 5),
(default, "CA", "Aventura", 4, 1),
(default, "DB", "Drama", 1, 3),
(default, "CA", "Aventura", 4, 2),
(default, "BA", "Suspense", 3, 4);
INSERT INTO Clientes (id, nome, email, telefone) VALUES
(default, "Valentina", "valentina@gmail.com", 953647667),
(default, "Cláudia", "claudia@gmail.com", 943205372),
(default, "Miguel", "miguel@gmail.com", 98642312),
(default, "Maria", "maria@gmail.com", 950349524),
(default, "Rafael", "rafael@gmail.com", 989564359);
INSERT INTO Cadastros (id_cadastro, observacoes, id_cliente, id_livro, data_cadastro) VALUES
(default, "Livro alugado por 2 meses", 2, 3, '2022-11-10 06-10-52'),
(default, "Livro alugado por 5 meses", 1, 1, '2022-02-08 02-50-44'),
(default, "Livro alugado por 2 meses", 1, 2, '2021-09-12 03-30-22'),
(default, "Livro alugado por 3 meses", 3, 5, '2023-01-16 03-20-11'),
(default, "Livro alugado por 1 meses", 3, 4, '2023-10-23 04-40-36');
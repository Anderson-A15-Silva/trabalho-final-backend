import mysql2 from 'mysql2/promise';
import readline from 'readline-sync';

const biblioteca = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'biblioteca'
});

let opcaoEscolhida = 10;

function exibirMenu(){
    console.log('---------- Menu Inicial ----------');
    console.log('1. Listar todos');
    console.log('2. Listar por Id');
    console.log('3. Inserir');
    console.log('4. Modificar');
    console.log('5. Deletar');
    console.log('6. Encerrar')
    console.log('----------------------------------')
    const menu = readline.questionInt('Escolha uma das opcoes: ');
    opcaoEscolhida = menu;
}


function menuPrincipal(){
    console.log('---------- Menu Inicial ----------');
    console.log('1. Cadastros');
    console.log('2. Fornecedores');
    console.log('3. Livros');
    console.log('4. Fileiras');
    console.log('5. Clientes');
    console.log('6. Encerrar')
    console.log('----------------------------------')
    opcaoEscolhida = readline.questionInt('Escolha uma das opcoes: ')

    function cadastro(){
        exibirMenu()
    
        if(opcaoEscolhida > 6 || opcaoEscolhida < 1) {
            console.log('Opção inválida');
            console.log('--------------------------------------------------------------------');
            menuPrincipal();
        }
            
        
        if (opcaoEscolhida == 1) {
            (async () => {
                try {
                    const [rows] = await biblioteca.query('SELECT * FROM Cadastros');
                    console.log(JSON.stringify(rows));
                    console.log('--------------------------------------------------------------------');
                    menuPrincipal()
                } catch (error) {
                    console.error('Erro ao buscar dados:', error);
                }
            })(); // IIFE para chamar a função assíncrona imediatamente
        }
        
        if (opcaoEscolhida == 2){
            (async () => {
                try {
                    const idCadastro = readline.questionInt('ID: ');
                    const [rows] = await biblioteca.query('SELECT * FROM Cadastros WHERE id_cadastro = ?', [idCadastro]);
                    console.log(JSON.stringify(rows));
                    console.log('--------------------------------------------------------------------');
                    menuPrincipal()
                } catch(error){
                    console.error('Erro ao buscar dados:', error);
                }
            })();
        }
        
        if (opcaoEscolhida == 3){
            (async () => {
                try {
                    const observacoes = readline.question('Observacoes: ');
                    const idCliente = readline.questionInt('Cliente ID: ');
                    const idLivro = readline.questionInt('Livro ID: ');
                    const dataCadastro = readline.question('Data (YY/MM/DD HH/MM/SS): ');
        
                    const [rows] = await biblioteca.query('INSERT INTO Cadastros (observacoes, id_cliente, id_livro, data_cadastro) VALUES (?,?,?,?)', [observacoes, idCliente, idLivro, dataCadastro]);
                    console.log(JSON.stringify(rows));
                    console.log('--------------------------------------------------------------------');
                    menuPrincipal()
                } catch(error){
                    console.error('Erro ao buscar dados:', error);
                }
            })();
        }
        
        
        if (opcaoEscolhida == 4){
            (async () => {
                try {
                    const idCadastro = readline.questionInt('ID: ');
                    const observacoes = readline.question('Observacoes: ');
                    const idCliente = readline.questionInt('Cliente ID: ');
                    const idLivro = readline.questionInt('Livro ID: ');
                    const dataCadastro = readline.question('Data (YY/MM/DD HH/MM/SS): ');
        
                    const [rows] = await biblioteca.query('UPDATE Cadastros SET observacoes = ?, id_cliente = ?, id_livro = ?, data_cadastro = ? WHERE id_cadastro = ?', [observacoes, idCliente, idLivro, dataCadastro, idCadastro]);
                    console.log('--------------------------------------------------------------------');
                    menuPrincipal()
                    console.log(JSON.stringify(rows));
                } catch(error){
                    console.error('Erro ao buscar dados:', error);
                }
            })();
        }
        
        if (opcaoEscolhida == 5){
            (async () => {
                try {
                    const idCadastro = parseInt(readline.question('ID: '));
                    const [rows] = await biblioteca.query('DELETE FROM Cadastros WHERE id_cadastro = ?', [idCadastro]);
                    console.log(JSON.stringify(rows));
                    console.log('--------------------------------------------------------------------');
                    menuPrincipal()
                } catch(error){
                    console.error('Erro ao buscar dados:', error);
                }
            })();
        }
    
        if (opcaoEscolhida == 6){
            (async () => {
                try {
                    console.log('Sistema encerrado...')
                    console.log('--------------------------------------------------------------------');
                } catch(error){
                    console.error('Erro ao buscar dados:', error);
                }
            })();
        }
    }

/////////////////////////////////////////////////////////////////////////////

function fornecedor(){
    exibirMenu()

    if(opcaoEscolhida > 6 || opcaoEscolhida < 1) {
        console.log('Opção inválida');
        console.log('--------------------------------------------------------------------');
        menuPrincipal();
    }
        
    
    if (opcaoEscolhida == 1) {
        (async () => {
            try {
                const [rows] = await biblioteca.query('SELECT * FROM Fornecedores');
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        })(); // IIFE para chamar a função assíncrona imediatamente
    }
    
    if (opcaoEscolhida == 2){
        (async () => {
            try {
                const id = readline.questionInt('ID: ')

                const [rows] = await biblioteca.query('SELECT * FROM Fornecedores WHERE id = ?', [id]);
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }
    
    if (opcaoEscolhida == 3){
        (async () => {
            try {
                const nome = readline.question('Nome: ')
                const email = readline.question('Email: ')
                const telefone = readline.question('Telefone: ')
                const empresa = readline.question('Empresa: ')

                const [rows] = await biblioteca.query('INSERT INTO Fornecedores (nome, email, telefone, empresa) VALUES (?,?,?,?)', [nome, email, telefone, empresa]);
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }
    
    
    if (opcaoEscolhida == 4){
        (async () => {
            try {
                const id = readline.questionInt('ID: ')
                const nome = readline.question('Nome: ')
                const email = readline.question('Email: ')
                const telefone = readline.question('Telefone: ')
                const empresa = readline.question('Empresa: ')  

                const [rows] = await biblioteca.query('UPDATE Fornecedores SET nome = ?, email = ?, telefone = ?, empresa = ? WHERE id = ?', [nome, email, telefone, empresa, id]);
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
                console.log(JSON.stringify(rows));
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }
    
    if (opcaoEscolhida == 5){
        (async () => {
            try {
                const id = readline.questionInt('ID: ')

                const [rows] = await biblioteca.query('DELETE FROM Fornecedores WHERE id = ?', [id]);
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }

    if (opcaoEscolhida == 6){
        (async () => {
            try {
                console.log('Sistema encerrado...')
                console.log('--------------------------------------------------------------------');
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }
}
/////////////////////////////////////////////////////////////////////////////
function livro(){
    exibirMenu()

    if(opcaoEscolhida > 6 || opcaoEscolhida < 1) {
        console.log('Opção inválida');
        console.log('--------------------------------------------------------------------');
        menuPrincipal();
    }
        
    
    if (opcaoEscolhida == 1) {
        (async () => {
            try {
                const [rows] = await biblioteca.query('SELECT * FROM Livros');
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        })(); // IIFE para chamar a função assíncrona imediatamente
    }
    
    if (opcaoEscolhida == 2){
        (async () => {
            try {
                const id = readline.questionInt('ID: ')

                const [rows] = await biblioteca.query('SELECT * FROM Livros WHERE id = ?', [id]);
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }
    
    if (opcaoEscolhida == 3){
        (async () => {
            try {
                const titulo = readline.question('Titulo: ')
                const descricao = readline.question('Descricao: ')
                const paginas = readline.questionInt('Paginas: ')
                const autor = readline.question('Autor: ')
                const anoPublicacao = readline.questionInt('Ano de Publicação: ')
                const quantidade = readline.questionInt('Quantidade: ')

                const [rows] = await biblioteca.query('INSERT INTO Livros (titulo, descricao, paginas, autor, ano_publicacao, quantidade) VALUES (?,?,?,?,?,?)', [titulo, descricao, paginas, autor, anoPublicacao, quantidade]);
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }
    
    
    if (opcaoEscolhida == 4){
        (async () => {
            try {
                const id = readline.questionInt('ID: ')
                const titulo = readline.question('Titulo: ')
                const descricao = readline.question('Descricao: ')
                const paginas = readline.questionInt('Paginas: ')
                const autor = readline.question('Autor: ')
                const anoPublicacao = readline.questionInt('Ano de Publicação: ')
                const quantidade = readline.questionInt('Quantidade: ') 

                const [rows] = await biblioteca.query('UPDATE Livros SET titulo = ?, descricao = ?, paginas = ?, autor = ?, ano_publicacao = ?, quantidade = ? WHERE id = ?', [titulo, descricao, paginas, autor, anoPublicacao, quantidade, id]);
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
                console.log(JSON.stringify(rows));
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }
    
    if (opcaoEscolhida == 5){
        (async () => {
            try {
                const id = readline.questionInt('ID: ')

                const [rows] = await biblioteca.query('DELETE FROM Livros WHERE id = ?', [id]);
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }

    if (opcaoEscolhida == 6){
        (async () => {
            try {
                console.log('Sistema encerrado...')
                console.log('--------------------------------------------------------------------');
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }
}
///////////////////////////////////////////////////////////////////////
function fileira(){
    exibirMenu()

    if(opcaoEscolhida > 6 || opcaoEscolhida < 1) {
        console.log('Opção inválida');
        console.log('--------------------------------------------------------------------');
        menuPrincipal();
    }
        
    
    if (opcaoEscolhida == 1) {
        (async () => {
            try {
                const [rows] = await biblioteca.query('SELECT * FROM Fileiras');
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        })(); // IIFE para chamar a função assíncrona imediatamente
    }
    
    if (opcaoEscolhida == 2){
        (async () => {
            try {
                const id = readline.questionInt('ID: ')

                const [rows] = await biblioteca.query('SELECT * FROM Fileiras WHERE id = ?', [id]);
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }
    
    if (opcaoEscolhida == 3){
        (async () => {
            try {
                const nome = readline.question('Nome: ')
                const genero = readline.question('Genero: ')
                const idLivro = readline.questionInt('Livro ID: ')
                const idFornecedor = readline.questionInt('Fornecedor ID: ')

                const [rows] = await biblioteca.query('INSERT INTO Fileiras (nome, genero, id_livro, id_fornecedor) VALUES (?,?,?,?)', [nome, genero, idLivro, idFornecedor]);
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }
    
    
    if (opcaoEscolhida == 4){
        (async () => {
            try {
                const id = readline.questionInt('ID: ')
                const nome = readline.question('Nome: ')
                const genero = readline.question('Genero: ')
                const idLivro = readline.questionInt('Livro ID: ')
                const idFornecedor = readline.questionInt('Fornecedor ID: ')

                const [rows] = await biblioteca.query('UPDATE Fileiras SET nome = ?, genero = ?, id_livro = ?, id_fornecedor = ? WHERE id = ?', [nome, genero, idLivro, idFornecedor, id]);
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
                console.log(JSON.stringify(rows));
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }
    
    if (opcaoEscolhida == 5){
        (async () => {
            try {
                const id = readline.questionInt('ID: ')

                const [rows] = await biblioteca.query('DELETE FROM Fileiras WHERE id = ?', [id]);
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }

    if (opcaoEscolhida == 6){
        (async () => {
            try {
                console.log('Sistema encerrado...')
                console.log('--------------------------------------------------------------------');
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }
}
/////////////////////////////////////////////////////////////////q
function cliente(){
    exibirMenu()

    if(opcaoEscolhida > 6 || opcaoEscolhida < 1) {
        console.log('Opção inválida');
        console.log('--------------------------------------------------------------------');
        menuPrincipal();
    }
        
    
    if (opcaoEscolhida == 1) {
        (async () => {
            try {
                const [rows] = await biblioteca.query('SELECT * FROM Clientes');
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        })(); // IIFE para chamar a função assíncrona imediatamente
    }
    
    if (opcaoEscolhida == 2){
        (async () => {
            try {
                const id = readline.questionInt('ID: ')

                const [rows] = await biblioteca.query('SELECT * FROM Clientes WHERE id = ?', [id]);
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }
    
    if (opcaoEscolhida == 3){
        (async () => {
            try {
                const nome = readline.question('Nome: ')
                const email = readline.question('Email: ')
                const telefone = readline.question('Telefone: ')

                const [rows] = await biblioteca.query('INSERT INTO Clientes (nome, email, telefone) VALUES (?,?,?)', [nome, email, telefone]);
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }
    
    
    if (opcaoEscolhida == 4){
        (async () => {
            try {
                const id = readline.questionInt('ID: ')
                const nome = readline.question('Nome: ')
                const email = readline.question('Email: ')
                const telefone = readline.question('Telefone: ') 

                const [rows] = await biblioteca.query('UPDATE Clientes SET nome = ?, email = ?, telefone = ? WHERE id = ?', [nome, email, telefone, id]);
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
                console.log(JSON.stringify(rows));
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }
    
    if (opcaoEscolhida == 5){
        (async () => {
            try {
                const id = readline.questionInt('ID: ')

                const [rows] = await biblioteca.query('DELETE FROM Clientes WHERE id = ?', [id]);
                console.log(JSON.stringify(rows));
                console.log('--------------------------------------------------------------------');
                menuPrincipal()
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }

    if (opcaoEscolhida == 6){
        (async () => {
            try {
                console.log('Sistema encerrado...')
                console.log('--------------------------------------------------------------------');
            } catch(error){
                console.error('Erro ao buscar dados:', error);
            }
        })();
    }
}
    
    switch(opcaoEscolhida){
        case 1:
            cadastro()
            break;
        case 2:
            fornecedor()
            break;
        case 3:
            livro()
            break;
        case 4:
            fileira()
            break;
        case 5:
            cliente()
            break;
        case 6:
            console.log('Sistema encerrado...')
            console.log('--------------------------------------------------------------------');
            break;
        default:
            menuPrincipal()
            break;
    }
}
menuPrincipal()
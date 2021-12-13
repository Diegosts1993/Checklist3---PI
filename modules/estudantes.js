const criarAluno = require('./aluno')

const aluno0 = new criarAluno.Aluno('Fernando Albuquerque', 5, [9,5,8]);
const aluno1 = new criarAluno.Aluno('Joana Trissone', 3, [9,6,8]);
const aluno2 = new criarAluno.Aluno('Maria Paula', 10, [10,8,10]);
const aluno3 = new criarAluno.Aluno('Flavia Barbosa', 0, [10,7,8]);

let listaEstudantes = [ aluno0, aluno1, aluno2, aluno3]

module.exports = { listaEstudantes }
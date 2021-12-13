function Aluno(nome, faltas, notas) {
  this.nome = nome,
  this.qtdFaltas = faltas,
  this.notas = notas,

  this.calcularMedia = () => {
    let totalNotas = 0
    this.notas.forEach((nota) => {
        totalNotas += nota
      })
      let mediaFinal = totalNotas / this.notas.length;
      console.log(`O aluno ${this.nome} obteve a média ${mediaFinal}`)
      return mediaFinal
    }

  this.faltas = () => {
    let totalFaltas = this.qtdFaltas + 1;
      console.log(`O total de faltas do aluno ${this.nome} foi de ${totalFaltas}`)
      return totalFaltas
  }
}

module.exports = { Aluno }

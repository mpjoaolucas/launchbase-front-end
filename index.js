//criar um progama que calcula a média
//das notas entre os alunos e envia
//mesagem do calculo da média.
//se a média for maior que 5,parabenizar a turma

const aluno01 = 'mayk'
const notaAluno01 = 9.8

const aluno02 = 'diego'
const notaAluno02 = 10

const aluno03 = 'fulano'
const notaAluno03 = 2

const media = (notaAluno01+notaAluno02+notaAluno03)/3 
if (media > 5) {
  console.log(`A media foi de ${media}. parabéns`)
}else {
  console.log('A media é menor que 5')
} 


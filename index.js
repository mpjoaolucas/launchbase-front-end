//criar um progama que calcule a média 
//das tumas de alunos e enviar
//mensagemdo cálculo da média.

const alunos_da_Turma_A = [
  {
    nome: "mayk",
    nota: 9.8
  },
  {
    nome: "diego",
    nota: 10
  },
  {
    nome: "fulano",
    nota: 2
  },
  ]

  const alunos_da_Turma_B = [
  {
    nome: "cleiton",
    nota: 10
  },
  {
    nome: "robson",
    nota: 10
  },
  {
    nome: "roberto",
    nota: 2
  },
  ]

  function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3
  }

  const media1 = calculaMedia(alunos_da_Turma_A);
  const media2 = calculaMedia(alunos_da_Turma_B);
 


function enviar_Mensagem(media, turma){
    //se a média for maior que 5, parabenizar a turma
  if (media > 5) {
    console.log(`A media da turma ${turma}foi de ${media}.parabéns`)
  }else {
    console.log(`A média da turma ${turma} é menor que 5`)
  }
}

enviar_Mensagem(media1,'turmaA')
enviar_Mensagem(media2,'turmaB')
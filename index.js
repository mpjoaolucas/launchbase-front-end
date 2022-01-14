
const aluno_A = [
  {
    name: "mayk",
    grade: 9.8
  },
  {
    name: "diego",
    grade: 10
  },
  {
    name: "fulano",
    grade: 2
  },
  {
    name: 'mais um aluno',
    grade: 10
  },
]

const  aluno_B = [
  {
    name: "cleiton",
    grade: 10
  },
  {
    name: "robson",
    grade: 10
  },
  {
    name: "roberto",
    grade: 2
  },
  {
    name: 'novo aluno',
    grade: 5
  },
]

function calculateAverage(alunos) {


  let sum = 0;
  for (let i = 0; i < alunos.length; i++) {
    sum = sum + alunos[i].grade
  }

  const average = sum / alunos.length;
  return average
}

const average1 = calculateAverage(aluno_A);
const average2 = calculateAverage(aluno_B);



function send_message(average, turma) {

  if (average > 5) {
    console.log(` ${turma}avarage: ${average}. congrats`)
  } else {
    console.log(`${turma} ${average} is not good.`)
  }
}

send_message(average1, 'turmaA')
send_message(average2, 'turmaB')


function mark_as_fluked(alunos) {
  alunos.fluked = false;
  if (alunos.grade < 5) {
    alunos.fluked = true;
  }

}


function send_message_fluked(alunos) {
  if (alunos.fluked) {
    console.log(`o aluno ${alunos.name} está fluked!`)
  }

}

function alunos_flukeds(alunos) {
  for (let aluno of alunos) {
    mark_as_fluked(aluno);
    send_message_fluked(aluno)
  }
}

alunos_flukeds(aluno_A)
alunos_flukeds(aluno_B)
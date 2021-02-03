let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  let media = 10;
  let aprovado = 'APROVADO';
  let reprovado = 'REPROVADO';
  let recuperacao = 'RECUPERAÇÃO';
  let nome = document.getElementById('nome');
  let nota = document.getElementById('nota');
  let div = document.getElementById('root');

  document.body.style.fontFamily = 'arial';
  // aprovado
  if (nota.value >= media || nota.value == 9) {
    div.innerHTML = ` <strong style="color:lightgrey;">O aluno</strong> <strong style="color:grey;">${nome.value.toUpperCase()}</strong> <strong style="color:lightgrey;">tirou nota</strong> <strong style="color:lightgrey;">${
      nota.value
    } e foi: </strong><strong style="color:green;">${aprovado.toUpperCase()}</strong>`;

    // reprovado
  } else if (nota.value <= 5) {
    div.innerHTML = `<strong style="color:lightgrey;">O aluno</strong> <strong style="color:grey;">${nome.value.toUpperCase()}</strong> <strong style="color:lightgrey;">tirou nota</strong> <strong style="color:lightgrey;">${
      nota.value
    } e foi: </strong><strong style="color:red;">${reprovado.toUpperCase()}</strong>`;
    // recuperacao
  } else if (nota.value <= 8 || nota >= 6) {
    div.innerHTML = `<strong style="color:lightgrey;">O aluno</strong> <strong style="color:grey;">${nome.value.toUpperCase()}</strong> <strong style="color:lightgrey;">tirou nota</strong> <strong style="color:lightgrey;">${
      nota.value
    } e ficou em: </strong><strong style="color:orange;">${recuperacao.toUpperCase()}</strong>`;
  }
  console.log(nota);
});

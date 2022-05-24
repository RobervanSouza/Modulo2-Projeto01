const nome = document.getElementById("nome");
const estado = document.getElementById("estado");
const imagem = document.getElementById("imagem");
let botao = document.querySelector(".mudar");

botao.addEventListener("click", () => {
  if (botao.value == "dois") {
    nome.innerText = " Na aula ";
    estado.textContent = " O que mais incomoda ";
    imagem.src = "./assets/imagens/na aula.png";
    botao.value = "três";
  }

  if (botao.value == "três") {
    nome.innerText = " Carismatico ";
    estado.textContent = " Esta querendo alguma coisa ";
    imagem.src = "./assets/imagens/carismatico.png";
    botao.value = "quatro";
  } 
  
  else if (botao.value == "quatro") {
    nome.innerText = "Corredor";
    estado.textContent = " Fugindo do trabalho ";
    imagem.src = "./assets/imagens/correndo.png";
    botao.value = "cinco";
  }
  
  else if (botao.value == "cinco") {
    nome.innerText = "lutador";
    estado.textContent = "lutando sai com dor ";
    imagem.src = "./assets/imagens/lutador.png";
    botao.value = "seis";
  }
  
  else if (botao.value == "seis") {
    nome.innerText = " Transformado ";
    estado.textContent = " depois da luta ";
    imagem.src = "./assets/imagens/raiva.png";
    botao.value = "sete";
  }
  
  else if (botao.value == "sete") {
    nome.innerText = " feliz ";
    estado.textContent = " Acabou o jogo do humor ";
    imagem.src = "./assets/imagens/feliz.png";
    botao.value = "oito";
  } 
  
  else {
    nome.innerText = "Na aula";
    estado.textContent = " O que mais incomoda ";
    imagem.src = "./assets/imagens/na aula.png";
    botao.value = "dois";
  }
});

import { dados } from "../dados";

function menorFaturamento() {
  let menorValor = dados[0].valor;
  for (let dado of dados) {
    if(dado.valor < menorValor) {
      menorValor = dado.valor;
    }
  }
  return menorValor;
};

function maiorFaturamento() {
  let maiorvalor = 0;
  for (let dado of dados) {
    if(dado.valor > maiorvalor) {
      maiorvalor = dado.valor;
    }
  }
  return maiorvalor;
};

function mediaMensal(): number {
  const media = dados.reduce((acc, curr) => {
    
    if(curr.valor === 0) {
      return acc;
    }
    acc.diasUteis += 1;
    acc.total += curr.valor; 
    return acc;
  }, {total: 0, diasUteis: 0});

  return media.total / media.diasUteis;
}

function maiorQueMediaMensal() {
  let media = mediaMensal();
  let numDias = 0;
  for (let dado of dados) {
    if(dado.valor > media) {
      numDias += 1
    }
  }
  return numDias;
};

console.log("Numero de dias maior que a média mensal: ", maiorQueMediaMensal()); // 10 
console.log("Maior faturamento ocorrido em um dia: ", maiorFaturamento()); // 48924.2448
console.log("Maior faturamento ocorrido em um dia: ", menorFaturamento());; // 0.0
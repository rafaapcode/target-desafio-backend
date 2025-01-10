type FaturamentoMensalEstado = {
  sp: number;
  rj: number;
  mg: number;
  es: number;
  outros: number;
}

const faturamentoEstado: FaturamentoMensalEstado = {
  sp: 6783643,
  rj: 3667866,
  mg: 2922988,
  es: 2716548,
  outros: 1984953
}

function mediaMensal() {
  const faturamentoMensal = Object.values(faturamentoEstado);
  let total = 0
  for(let faturamento of faturamentoMensal) {
    total += faturamento;
  }

  return total / faturamentoMensal.length;
}

function percentualCadaEstado() {
  const media = mediaMensal();

  const sp = (faturamentoEstado.sp / media) * 100;
  const rj = (faturamentoEstado.rj / media) * 100;
  const mg = (faturamentoEstado.mg / media) * 100;
  const es = (faturamentoEstado.es / media) * 100;
  const outros = (faturamentoEstado.outros / media) * 100;
  console.log("SP: ",  `${sp.toFixed(0)}%`);
  console.log("RJ: ",  `${rj.toFixed(0)}%`);
  console.log("MG: ",  `${mg.toFixed(0)}%`);
  console.log("ES: ",  `${es.toFixed(0)}%`);
  console.log("OUTROS: ",  `${outros.toFixed(0)}%`);
};

percentualCadaEstado();
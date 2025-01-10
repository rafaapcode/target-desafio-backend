type Messages = {
  succes: string;
  fail: string;
};

const messages: Messages = {
  succes: "Número pertece a sequência de fibonacci.",
  fail: "Número não pertece a sequência de fibonacci."
}

let number: number = Number(process.argv[2]) || 34 ;

function fibonacci(number: number): string {  
  if(number === 0) {
    return messages.succes;
  }
  const seq = [0,1];
  for(let i = 2; i <= number; i++) {
    const nexSeqNumber = seq[i-1] + seq[i-2];
    if(nexSeqNumber === number) {
      return messages.succes;
    }
    seq.push(nexSeqNumber);
  }
  return messages.fail;
};

console.log(fibonacci(number));
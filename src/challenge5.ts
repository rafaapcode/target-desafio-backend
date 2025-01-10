
// Criei a estrutura de dados STACK para poder manipular melhor a string e conseguir pegar o valor dela ao contrário.
class Stack {
  stack: string[];
  constructor(value: string) {
    this.stack = [...value];
  }

  push(value: string) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  length() {
    return this.stack.length;
  }
}

function reverseStringAlternativa(value: string) {
  let newWord = "";
  for(let i = value.length - 1; i >= 0; i--) {
    newWord += value[i];
  }
  console.log(newWord);
}

function reverseString(value: string) {
  const stack = new Stack(value);
  let lenghtOfWord = stack.length()
  let reverseWord = "";
  for(let i = 0; i < lenghtOfWord; i++) {
    const lastLetter = stack.pop();
    reverseWord += lastLetter;
  }
  console.log(reverseWord);
}

// reverseString("rafael");
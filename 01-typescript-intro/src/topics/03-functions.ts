function addNumbers(a: number, b: number): number {
  return a + b;
}
const addnumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multuply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
): number {
  return firstNumber * base;
}
// const result = addNumbers(1, 2);
// const result2 = addnumbersArrow(1, 4);
// const multiplyResult: number = multuply(5);

// console.log({ result, result2, multiplyResult });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}
const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "strider",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(strider, 10);
healCharacter(strider, 30);

strider.showHp();
export {};

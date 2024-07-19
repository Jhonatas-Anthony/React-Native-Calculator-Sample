/* 
Descrição: 
Arquivo de utilitários para as celulas da calculadora.
*/

export type CellType = {
  name: string;
  type: "number" | "operator" | "function";
  value: number | string | Function;
  key?: string;
};

// TODO
// Estudar como implementar as funções
// As celular do tipo operador ou número devem usar funções predefinidas
// Estudar uma provável refatoração no tipo e célula.
export const calcPadValues: CellType[][] = [
  [
    { name: "CA", type: "function", value: () => {} },
    { name: "+/-", type: "operator", value: "+/-" },
    { name: "%", type: "operator", value: "%" },
    { name: "÷", type: "operator", value: "/" },
  ],
  [
    { name: "7", type: "number", value: 7 },
    { name: "8", type: "number", value: 8 },
    { name: "9", type: "number", value: 9 },
    { name: "x", type: "operator", value: "*" },
  ],
  [
    { name: "4", type: "number", value: 4 },
    { name: "5", type: "number", value: 5 },
    { name: "6", type: "number", value: 6 },
    { name: "-", type: "operator", value: "-" },
  ],
  [
    { name: "1", type: "number", value: 1 },
    { name: "2", type: "number", value: 2 },
    { name: "3", type: "number", value: 3 },
    { name: "+", type: "operator", value: "+" },
  ],
  [
    { name: "0", type: "number", value: 0 },
    { name: ",", type: "number", value: "." },
    { name: "=", type: "function", value: () => {}, key: "equal" },
    { name: "C", type: "function", value: () => {} },
  ],
];

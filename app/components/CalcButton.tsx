/* 
Descrição:
O componente CalcButton foi criado com o intuito de limpar o código no componente CalcPad.tsx
Aqui ocorre a renderização condicional de alguns estilos e também a definição do botão da calculadora
*/
import { Pressable, StyleSheet, Text, View } from "react-native";
import { type CellType } from "./utils/CalcCells";

type Props = {
  cell: CellType;
};

const CalcButton = (props: Props) => {
  const statement =
    props.cell.type === "operator" || props.cell.type === "function";
  let buttonStyle;
  if (props.cell.key === "equal") buttonStyle = styles.buttonEqual;
  else buttonStyle = statement ? styles.buttonVariant : styles.button;

  const textStyle = statement ? styles.buttonTextVariant : styles.buttonText;

  return (
    <Pressable style={styles.buttonContainer}>
      <View style={[styles.buttonStandard, buttonStyle]}>
        <Text style={textStyle}>{props.cell.name}</Text>
      </View>
    </Pressable>
  );
};

export default CalcButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexShrink: 1,
    flexGrow: 1,
    height: "100%",
    width: "25%",
  },

  buttonStandard: {
    flexShrink: 1,
    flexGrow: 1,
    borderRadius: 15,
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
  },

  button: {
    backgroundColor: "#eee",
  },

  buttonVariant: {
    backgroundColor: "#F57C00",
  },

  buttonEqual: {
    backgroundColor: "#43A047",
  },

  buttonText: {
    color: "#111",
    fontSize: 30,
    textAlign: "center",
  },

  buttonTextVariant: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "condensedBold",
    textAlign: "center",
  },
});

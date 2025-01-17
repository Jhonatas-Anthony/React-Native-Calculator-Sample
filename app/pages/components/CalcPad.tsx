/* 
Descrição:
O componente CalcPad vai receber o array de celulas e renderizar o botão correspondente.
Futuramente vai acontecer aqui a lógica necessária para exportar esses valores.
*/
import { View, StyleSheet } from "react-native";
import { calcPadValues } from "../components/utils/CalcCells";
import CalcButton from "./CalcButton";

const CalcPad = () => {
  return (
    <View style={[styles.flexStandard, styles.calcRow]}>
      {calcPadValues.map((row, index) => {
        return (
          <View key={index} style={[styles.flexStandard, styles.calcColumns]}>
            {row.map((cell, index2) => {
              return <CalcButton key={index2} cell={cell}></CalcButton>;
            })}
          </View>
        );
      })}
    </View>
  );
};

export default CalcPad;

const styles = StyleSheet.create({
  flexStandard: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    gap: 5,
  },

  calcRow: {
    paddingTop: 5,
    paddingBottom: 15,
    flexDirection: "column",
  },

  calcColumns: {
    flexDirection: "row",
  },
});

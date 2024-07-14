/* 
Descrição:
O componente CalcVisor vai receber um valor externo. 
A lógica necessária para lidar com os cálculos matematicos ainda não foram implementados.
*/
import { StyleSheet, TextInput, View } from "react-native";

const CalcVisor = () => {
  return (
    <View style={styles.container}>
      <TextInput readOnly style={styles.input}/>
    </View>
  );
};

export default CalcVisor;

const styles = StyleSheet.create({
  container: {
    height: "20%",
  },
  input: {
    width: "100%",
    height: "100%",
    textAlign: "right",
    fontSize: 30,
    fontWeight: "bold",
    borderRadius: 10,
    borderColor: "#aaa",
    borderBottomWidth: 3,
  },
});

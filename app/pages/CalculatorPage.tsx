/* 
Descrição: 
Essa é a página que vai armazenar todo conteúdo referente a calculadora, como o visor, o botão de apagar e etc.
Então pra isso, é importante que ocorra uma conversa entre dois componentes, pois o CalcPad vai inserir os dados no CalcVisor.
*/
import { View, StyleSheet } from "react-native";
import CalcVisor from "../components/CalcVisor";
import CalcPad from "../components/CalcPad";

const CalculatorPage = () => {
  return (
    <View style={styles.container}>
      <CalcVisor />
      <CalcPad />
    </View>
  );
};

export default CalculatorPage;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    backgroundColor: "#fff",
    height: "100%",
    overflow: "hidden",
  },
});

import {
  View,
  StyleSheet,
  Button,
  Text,
  TouchableHighlight,
} from "react-native";
import CalcVisor from "../components/CalcVisor";
import { calcPadValues } from "../components/utils/CalcCells";
import CalcPad from "../components/CalcPad";
// import { CalcOptions } from "./utils/CalcOptions"

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

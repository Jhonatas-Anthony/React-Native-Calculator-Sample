import { StyleSheet, Text, TextInput, View } from "react-native";

const CalcVisor = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} readOnly />
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
    borderColor: "#aaa",
    borderBottomWidth: 1,
  },
});

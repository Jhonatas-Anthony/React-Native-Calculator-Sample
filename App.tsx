import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Main from "./app/Main";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" translucent={false} />
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

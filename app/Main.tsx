import { View, StyleSheet } from "react-native"
import CalculatorPage from './pages/CalculatorPage';

const Main = () => {
    return (
        <View style={styles.container}>
            <CalculatorPage></CalculatorPage>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    }
});
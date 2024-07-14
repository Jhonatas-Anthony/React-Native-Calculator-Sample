import { View, StyleSheet, Button, Text, TouchableHighlight } from "react-native"
import { CalcVisor } from "../components/CalcVisor"
import { calcPadValues } from "../components/utils/CalcCells"
import CalcPad from "../components/CalcPad"
// import { CalcOptions } from "./utils/CalcOptions"

const CalculatorPage = () => {
    return (
        <View style={styles.container}>
            <CalcVisor />
            <CalcPad /> 
            {/* <View style={styles.calcRow}>
                {calcPadValues.map((row, index) => {
                    return (
                        <View key={index} style={styles.calcColumns}>
                            {row.map((cell, index2) => {
                                return (
                                <TouchableHighlight style={styles.buttonContainer}>
                                    <View style={styles.button}>
                                        <Text style={styles.buttonText}>{cell.name}</Text>
                                    </View>
                                </TouchableHighlight>
                                )
                            })}
                        </View>
                    )
                })}
            </View> */}
        </View >
    )
}

export default CalculatorPage

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
    },

    calcRow: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    calcColumns: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },

    buttonContainer: {
        height: '100%',
        width: '25%',
    },

    button: {
        backgroundColor: '#aaa',
        width: '100%',
        height: '100%',
        justifyContent: 'space-around'
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
    }
});
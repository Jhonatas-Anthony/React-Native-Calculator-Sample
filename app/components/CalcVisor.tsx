import { StyleSheet, Text, TextInput, View } from "react-native"

export const CalcVisor = () => {

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                inputMode="numeric"
                readOnly
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '17%',
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        textAlign: 'right',
        fontSize: 30,
        fontWeight: 'bold',
        borderWidth: 1,
    }
})
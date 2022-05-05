import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Cards from '../components/Cards'
import Input from '../components/Input'
import Color from '../constants/colors'

const StartScreen = props => {
    const [enteredVal, setEnteredVal] = useState('');
    const numberInputHandler = inputText => {
        setEnteredVal(inputText.replace(/[^0-9]/g, ''))
    };
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Thee Game Screen!</Text>
                <View style={styles.inputContainer} >
                    <Text>{props.name}</Text>
                    <TextInput style={styles.input}
                        blurOnSubmit
                        autoCapitalize='words'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredVal}
                    />
                    <View style={styles.buttons}>
                        <View style={styles.buttonpress}> <Button title='Reset' onPress={() => { }} color={Color.primary} /></View>
                        <View style={styles.buttonpress}> <Button title='Confirm' onPress={() => { }} color={Color.accent} /></View>
                    </View>
                </View>
            </View >
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 15
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.50,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,

    },
    buttons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    buttonpress: {
        width: 100
    },
    input: {
        height: 30,
        width: '50%',
        textAlign: 'center',
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 20,
        borderTopColor: 'red',
        borderBottomColor: 'grey',
        borderBottomWidth: 3,
        marginVertical: 10
    }
})


export default StartScreen 
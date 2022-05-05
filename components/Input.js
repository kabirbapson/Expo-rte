import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = props => {
    return <TextInput style={{ ...styles.input, ...props.styles }} />;
};


const styles = StyleSheet.create({
    input: {
        height: 50,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        marginVertical: 50
    }
})
export default Input
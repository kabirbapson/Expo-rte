import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const Cards = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}> {props.children}</View >
    );
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'red',
        padding: 20,
        borderRadius: 10,
    }
});



export default Cards;
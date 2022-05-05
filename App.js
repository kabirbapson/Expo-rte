import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartScreen from './screens/StartScreen';

export default function App() {
  return (

    <View style={styles.screen}>
      <Header title='Guess A Number' />
      <StartScreen name='Enter A Number' />
    </View >
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})
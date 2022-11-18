import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import Card from '../components/Card';

const GameScreen = () => {

  const [currentGuess, setCurrentGuess] = useState();

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (100 - 1) + 1));
  }, []);

  return (
    <View style={styles.coontainer}>
      <Text>Oponent's Guess</Text>
      <Text>{currentGuess}</Text>
      <Card newStyles={styles.buttonContainer}>
        <Button title="Higher"/>
        <Button title="Smaller"/>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
    coontainer:{
      flex: 1,
      padding: 10,
      alignItems: "center",
    },
    buttonContainer:{
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      width: 300,
    }

})
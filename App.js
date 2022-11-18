import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const handlestartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={handlestartGame}/>

  if (userNumber) {
    content=<GameScreen/>
  }

  return (
    <View style={styles.container}>
      <Header title={"Adivina el numero"}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});

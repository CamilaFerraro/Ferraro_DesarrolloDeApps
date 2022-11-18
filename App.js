import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins-Medium')
  })

  const [userNumber, setUserNumber] = useState();

  const handlestartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={handlestartGame}/>

  if (userNumber) {
    content=<GameScreen/>
  }

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header title={"Adivina el numero"} newStyles={{fontFamily: 'Poppins'}}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});

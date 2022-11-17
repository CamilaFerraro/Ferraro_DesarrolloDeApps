import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import colors from '../constants/colors'

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
        <Card>
            <Text>Elige un numero</Text>
            <TextInput/>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.cleanButton}>
                    <Text>Limpiar</Text>
                </Pressable>
                <Pressable style={{
                    ...styles.cleanButton, 
                    ...styles.confirmButton,
                    }}
                >
                  <Text>Agregar</Text>
                </Pressable>
            </View>
        </Card>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems:'center',
        marginTop: 50,
    },
    buttonContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    cleanButton:{
        backgroundColor: colors.secondary,
        height: 35,
        width: 70,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,

    },
    confirmButton:{
        backgroundColor: colors.primary,
        width: 80,
    }
})
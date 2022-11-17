import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const input = ({style}) => {
    return( 
      <TextInput
        blurOnSubmit
        autocapitalization='none'
        autoCorrect={false}
        keyboardType="numeric"
        maxLength={2}
        style={{...styles.input, ...style}}
      />
    )
};

export default input

const styles = StyleSheet.create({
    input:{
        height: 30,
        borderBottomColor: 'black',
        borderWidth:2,
        marginVertical: 10,
        width: 50
    }
})
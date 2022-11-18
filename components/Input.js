import { StyleSheet, TextInput } from 'react-native';
import React from 'react';

const input = ({style, ...restProps}) => {
    return( 
      <TextInput
        blurOnSubmit
        autoCapitalization="none"
        autoCorrect={false}
        keyboardType="numeric"
        maxLength={2}
        {...restProps}
        style={{...styles.input, ...style}}
        {...restProps}
      />
    );
};

export default input;

const styles = StyleSheet.create({
    input:{
        height: 30,
        borderBottomColor: "black",
        borderWidth: 2,
        marginVertical: 10,
        width: 50
    },
});
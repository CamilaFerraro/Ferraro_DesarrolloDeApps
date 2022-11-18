import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const Header = ({title, newStyles}) => {
  return (
    <View style={styles.header}>
      <Text style={{...styles.headerTitle, ...newStyles}}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: colors.white,
    fontSize: 20,
  },
})
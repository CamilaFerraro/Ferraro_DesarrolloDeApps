import { StyleSheet, View, Text} from "react-native";
import React from "react";

const Card = ({children}) => {
  return <View style={styles.inputContainer}>{children}</View>
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    width: width / 1.2,
    maxWidth: 400,
    minWidth: 100,
    padding: 20,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
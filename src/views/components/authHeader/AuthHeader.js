import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { dimensions } from "../../../constants/dimensions";

const AuthHeader = ({ text = "Heading" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  text: {
    fontSize: dimensions.font.xl,
  },
  container: {
    marginVertical: dimensions.margin.sm,
  },
});

import React from "react";
import { Title } from "react-native-paper";
import { colors } from "../../../constants/colors";
import { dimensions } from "../../../constants/dimensions";
import { StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";

const Button = ({
  textStyle,
  buttonStyle,
  loading = false,
  text = "press me",
  onPress = () => console.log("pressed"),
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, buttonStyle]}>
      {loading ? (
        <ActivityIndicator color={colors.white} size="large" />
      ) : (
        <Title style={[styles.text, textStyle]}>{text}</Title>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.deepBlue,
    height: dimensions.margin.xxl,
    borderRadius: dimensions.radius.sm,
    ...dimensions.centerItem,
  },
  text: {
    fontSize: dimensions.font.sm,
    fontWeight: "bold",
    color: colors.white,
    opacity: 0.9,
    textTransform: "capitalize",
  },
});

import React from "react";
import { StyleSheet } from "react-native";
import { dimensions } from "../../../constants/dimensions";
import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: dimensions.padding.lg,
    paddingVertical: dimensions.padding.xl,
  },
  gif: {
    height: 200,
    width: 200,
    alignSelf: "center",
  },
  caption: {
    textAlign: "center",
  },
});

export default styles;

import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import { Caption, TextInput } from "react-native-paper";
import { colors } from "../../../constants/colors";
import { dimensions } from "../../../constants/dimensions";

const Input = ({
  name,
  icon,
  value,
  label,
  maxLength = 120,
  autoFocus = false,
  secureTextEntry = false,
  keyboardType = "default",
}) => {
  //ICONS FROM https://materialdesignicons.com/

  //keyboardType = [default, email-address, phone-pad, number-pad]
  const [hideInput, setHideInput] = React.useState(!!secureTextEntry);

  const { errors, touched, handleBlur, handleChange } = useFormikContext();

  const showPassword = () => {
    if (secureTextEntry) {
      setHideInput(!hideInput);
    }
  };
  return (
    <View style={styles.formInputContainer}>
      <TextInput
        mode="outlined"
        value={value}
        label={label}
        autoFocus={autoFocus}
        maxLength={maxLength}
        style={styles.fromInput}
        onBlur={handleBlur(name)}
        keyboardType={keyboardType}
        secureTextEntry={hideInput}
        onChangeText={handleChange(name)}
        error={errors[name] && touched[name]}
        left={<TextInput.Icon name={icon} />}
        right={
          secureTextEntry && (
            <TextInput.Icon
              onPress={showPassword}
              name={hideInput ? "eye-off" : "eye"}
            />
          )
        }
        // left={<TextInput.Icon onPress={showPassword} name={icon} />}
      />
      {errors[name] && touched[name] && (
        <Caption style={styles.error}>{errors[name]}</Caption>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  fromInput: {
    opacity: 0.6,
    overflow: "hidden",
    backgroundColor: colors.white,
  },
  formInputContainer: {
    marginBottom: dimensions.margin.md,
  },
  error: {
    color: colors.red,
  },
});

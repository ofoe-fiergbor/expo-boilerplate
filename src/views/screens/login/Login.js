import React from "react";
import { Formik } from "formik";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";

import styles from "./styles";
import Button from "../../components/button/Button";
// import AuthHeader from "../../components/authHeader/AuthHeader";
import Validation from "../../../utils/Validation";
import Input from "../../components/input/Input";
import { Caption } from "react-native-paper";

const Login = () => {
  const navigation = useNavigation();

  const onSubmit = (values) => navigation.navigate("REGISTER");
  const onRegister = () => navigation.navigate("REGISTER");

  return (
    <View style={styles.container}>
      {/* <AuthHeader text={"Login"} /> */}

      <Image
        source={require("../../../../assets/gifs/auth.gif")}
        style={styles.gif}
      />
      <Formik
        initialValues={{ phoneNumber: "", password: "" }}
        validationSchema={Validation.login}
        onSubmit={onSubmit}
      >
        {({ values, handleSubmit, isSubmitting }) => (
          <View>
            <Input
              maxLength={10}
              name="phoneNumber"
              label="Phone Number"
              icon="phone-outline"
              keyboardType="phone-pad"
              value={values.phoneNumber}
            />
            <Input
              name="password"
              secureTextEntry
              label="Password"
              icon="lock-outline"
              value={values.password}
            />
            <Button
              text="Login"
              loading={isSubmitting}
              onPress={handleSubmit}
            />
            <Caption style={styles.caption}>Don't have an account?</Caption>
            <Button text="Register" onPress={onRegister} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

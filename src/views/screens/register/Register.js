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

const Register = () => {
  const navigation = useNavigation();

  const onSubmit = (values) => navigation.navigate("REGISTER");
  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      {/* <AuthHeader text={"Login"} /> */}

      <Image
        source={require("../../../../assets/gifs/auth.gif")}
        style={styles.gif}
      />
      <Formik
        initialValues={{
          phoneNumber: "",
          password: "",
          fullName: "",
          confirmPassword: "",
        }}
        validationSchema={Validation.login}
        onSubmit={onSubmit}
      >
        {({ values, handleSubmit, isSubmitting }) => (
          <View>
            <Input
              maxLength={10}
              name="fullName"
              icon="account"
              label="Full Name"
              value={values.fullName}
            />

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
            <Input
              name="confirmPassword"
              secureTextEntry
              label="Confirm Password"
              icon="lock-outline"
              value={values.confirmPassword}
            />
            <Button
              text="Register"
              loading={isSubmitting}
              onPress={handleSubmit}
            />
            <Caption style={styles.caption}>Don't have an account?</Caption>
            <Button text="Login" onPress={goBack} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Register;

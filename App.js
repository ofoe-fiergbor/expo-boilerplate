import React from "react";
import 'react-native-gesture-handler';
import { theme } from "./src/constants/theme";
import { StatusBar } from "expo-status-bar";
import AuthStackNavigation from "./src/navigation/AuthStackNavigation";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AuthStackNavigation />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

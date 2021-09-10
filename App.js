import React from "react";
import "react-native-gesture-handler";
import { theme } from "./src/constants/theme";
import { StatusBar } from "expo-status-bar";
import AuthStackNavigation from "./src/navigation/AuthStackNavigation";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { store, persistor } from "./src/backend/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <AuthStackNavigation />
          <StatusBar style="auto" />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
}

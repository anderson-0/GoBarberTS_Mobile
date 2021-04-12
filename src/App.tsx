import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./routes";

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    "RobotoSlab-Medium": require("../assets/fonts/RobotoSlab-Medium.ttf"),
    "RobotoSlab-Regular": require("../assets/fonts/RobotoSlab-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={styles.container}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#312e38",
  },
});

export default App;

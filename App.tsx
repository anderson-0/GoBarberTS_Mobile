import { StatusBar } from "react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" />
    <View style={styles.container} />
  </>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#312e38",
    alignItems: "center",
    justifyContent: "center",
  },
});

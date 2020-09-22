import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import AppOwn from "./Screens/AppOwn";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppOwn />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#EC7063",
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

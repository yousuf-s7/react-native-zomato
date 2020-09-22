import React, { useState } from "react";
import { StyleSheet } from "react-native";
import HomePage from "./HomePage";
import SearchResults from "./SearchResults";
import ContextData from "../Api/contextData";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AppOwn = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ContextData.Provider value={{ searchTerm, setSearchTerm }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{
              title: "Home",
              cardStyle: { backgroundColor: "#EC7063" },
              //   cardStyle: { backgroundColor: "transparent" },
            }}
          />
          <Stack.Screen
            name="Results"
            component={SearchResults}
            options={{
              title: "Results",
              cardStyle: { backgroundColor: "#EC7063" },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextData.Provider>
  );
};

export default AppOwn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EC7063",
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

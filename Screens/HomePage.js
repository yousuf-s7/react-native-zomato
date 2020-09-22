import React, { useState, useContext } from "react";
import { StyleSheet, View, TextInput, Image, Button, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ContextData from "../Api/contextData";

const HomePage = ({ navigation }) => {
  const [error, setError] = useState(false);
  const context = useContext(ContextData);
  return (
    <View style={styles.container}>
      <Image source={require("../assets/zomatoHead.png")} style={styles.img} />
      <View style={styles.searchBarContainer}>
        <AntDesign
          name="search1"
          size={26}
          color="black"
          style={styles.searchIcon}
        />
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.searchBar}
          placeholder="Enter the search CITY"
          placeholderTextColor="#515A5A"
          value={context.searchTerm}
          onChangeText={(text) => context.setSearchTerm(text)}
          onEndEditing={() => console.log(context.searchTerm)}
        />
      </View>
      {error && (
        <Text style={{ color: "red", fontSize: 11 }}>*Enter a Valid Input</Text>
      )}
      <Button
        title="Search"
        color="rgb(251,65,85)"
        onPress={() => {
          if (context.searchTerm.trim().length === 0) {
            setError(true);
          } else {
            setError(false);
            navigation.navigate("Results");
          }
        }}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },

  img: {
    height: 100,
    width: "100%",
    borderRadius: 10,
  },

  searchIcon: {
    alignSelf: "center",
  },

  searchBar: {
    flex: 1,
    fontSize: 22,
  },
  searchBarContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F5B7B1",
  },
});

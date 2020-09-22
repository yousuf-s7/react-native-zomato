import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import ContextData from "../Api/contextData";
import SearchCity from "../Components/SearchCity";

const SearchResults = () => {
  const [cityData, setCityData] = useState({});
  const cityInput = useContext(ContextData);
  console.log(cityData, "this is from parent results page");
  return (
    <>
      <SearchCity
        searchTerm={cityInput.searchTerm}
        sendBack={{ cityData, setCityData }}
      />
    </>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});

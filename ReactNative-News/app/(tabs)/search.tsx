import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const search = () => {
  const handleSubmit = (searchText: string) => {
    // console.log("button was pressed");
    // const city = searchText;
    // const cityArray = city.split(",");
    // setLocationData({
    //   city: cityArray[0].trim(),
    //   state: cityArray[1]?.trim() || "",
    //   country: cityArray[2]?.trim() || "",
    // });
    // No need to call `getGeolocation()` directly here
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search here..."
        // value={searchText}
        returnKeyType="search" // Sets the return key to "Search"
        onSubmitEditing={(event) => handleSubmit(event.nativeEvent.text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 20,
  },
});
export default search;

import { View, Text, StyleSheet } from "react-native";
import React from "react";

type CategoryProps = {
  CategoryName: string;
};

const HorizontalNewsCard = ({ CategoryName }: CategoryProps) => {
  return (
    <View style={style.card}>
      <Text>{CategoryName}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    width: "48%",
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 20,
  },
});

export default HorizontalNewsCard;

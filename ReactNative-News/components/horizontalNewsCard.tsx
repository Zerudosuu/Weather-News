import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

type CategoryProps = {
  CategoryName: string;
};

const HorizontalNewsCard = ({ CategoryName }: CategoryProps) => {
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: "categoryFolder/[id]",
          params: { id: CategoryName },
        })
      }
      style={style.card}
    >
      <Text>{CategoryName}</Text>
    </Pressable>
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

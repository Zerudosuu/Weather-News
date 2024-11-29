import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import BlobBackground from "./BlobComponent";

type CategoryProps = {
  CategoryName: string;
  color?: string;
};

const HorizontalNewsCard = ({ CategoryName, color }: CategoryProps) => {
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
      <BlobBackground
        width={100}
        height={100}
        top={-10}
        right={60}
        fill={color}
      />
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

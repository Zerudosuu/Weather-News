import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const News = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>News {id}</Text>
    </View>
  );
};

export default News;

export const options = {
  title: "News Details", // Custom header title for this page
};

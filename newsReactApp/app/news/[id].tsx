import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const NewsPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>NewsPage {id}</Text>
    </View>
  );
};

export default NewsPage;

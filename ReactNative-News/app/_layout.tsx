import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { NewsProvider } from "../components/context/newsContext";

const RootLayout = () => {
  return (
    // Wrap the entire navigation structure with NewsProvider
    <NewsProvider>
      <Stack>
        {/* News Details Screen */}
        <Stack.Screen
          name="newsFolder/[id]"
          options={({ route }: any) => ({
            headerTitle: `News Details - ${route.params.id}`,
            headerTransparent: true,
            headerTitleStyle: {
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "bold",
              color: "#333",
            },
          })}
        />
        {/* News Details Screen */}

        {/* Category Screen */}
        <Stack.Screen
          name="categoryFolder/[id]/index"
          options={({ route }: any) => ({
            headerTitle: `${route.params.id}`,
            headerTransparent: true,
            headerTitleStyle: {
              fontSize: 28,
              fontFamily: "Arial",
              fontWeight: "bold",
              color: "#333",
            },
          })}
        />
        <Stack.Screen
          name="categoryFolder/[id]/[newsId]"
          options={({ route }: any) => ({
            headerTitle: `News Details - ${route.params.id}`,
            headerTransparent: true,
            headerTitleStyle: {
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "bold",
              color: "#333",
            },
          })}
        />
        <Stack.Screen
          name="searchPage"
          options={({ route }: any) => ({
            headerTitle: `Search Result for - ${route.params.query}`,
            headerTransparent: true,
            headerTitleStyle: {
              fontSize: 17,
              fontFamily: "Arial",
              fontWeight: "bold",
              color: "#333",
            },
          })}
        />
        <Stack.Screen
          name="(tabs)" // Your tab navigator
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </NewsProvider>
  );
};

export default RootLayout;

import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      {/* Main Tabs */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      {/* News Details Screen */}
      <Stack.Screen
        name="newsFolder/[id]"
        options={({ route }: any) => ({
          headerTitle: `News Details - ${route.params.id}`,
          headerStyle: { backgroundColor: "red" },
        })}
      />

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
          headerTitle: `News Details - ${route.params.newsId}`,
        })}
      />
    </Stack>
  );
};

export default RootLayout;

import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NewsProvider } from "../../components/context/newsContext";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  size?: number; // Optional size with default fallback
  color: string;
}) {
  return (
    <FontAwesome
      style={{ marginBottom: -3 }}
      size={props.size || 24}
      {...props}
    />
  );
}

const TabsLayOut = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 60,
          backgroundColor: "#f8f8f8", // Light background for the tab bar
          borderTopColor: "#ddd", // Subtle border at the top of the tab bar
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 12, // Slightly smaller text for labels
          fontWeight: "600",
          fontFamily: "Arial", // Set a consistent font
          color: "#333", // Neutral color for text
        },
        tabBarActiveTintColor: "#007aff", // Active tab highlight color (blue)
        tabBarInactiveTintColor: "#8e8e93", // Inactive tab color (gray)
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          tabBarLabel: "Home",
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
          headerTitleStyle: {
            fontSize: 28,
            fontFamily: "Arial",
            fontWeight: "bold",
            color: "#333",
          },
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="home" color={color} size={size || 20} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          headerTitle: "Search",
          tabBarLabel: "Search",
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
          headerTitleStyle: {
            fontSize: 28,
            fontFamily: "Arial",
            fontWeight: "bold",
            color: "#333",
          },
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="search" color={color} size={size || 20} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayOut;

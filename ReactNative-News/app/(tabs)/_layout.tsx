import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  size: React.ComponentProps<typeof FontAwesome>["size"];
  color: string;
}) {
  return <FontAwesome style={{ marginBottom: -3 }} {...props} />;
}

const TabsLayOut = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 60,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
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
            fontSize: 32, // Set font size
            fontFamily: "Arial", // Set font family
            fontWeight: "bold", // Optional: customize font weight
            color: "black", // Optional: customize the text color
          },

          tabBarIcon: (props) => <TabBarIcon name="home" {...props} />,
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
            fontSize: 32, // Set font size
            fontFamily: "Arial", // Set font family
            fontWeight: "bold", // Optional: customize font weight
            color: "black", // Optional: customize the text color
          },
          tabBarIcon: (props) => (
            <TabBarIcon name="search" {...props} size={18} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayOut;

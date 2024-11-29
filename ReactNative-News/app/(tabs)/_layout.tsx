import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import TabBar from "../../components/TabBar";

const TabsLayOut = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
          headerTitleStyle: {
            fontSize: 32,
            fontFamily: "Arial",
            fontWeight: "bold",
            color: "black",
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                paddingTop: 10,
                alignItems: "center",
              }}
            >
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? "#16a0e0" : "#ccc"}
              />
              <Text
                style={{
                  color: focused ? "#16a0e0" : "#ccc",
                  fontSize: 12,
                  marginTop: 4,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerTitle: "Search",
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,

          headerTitleStyle: {
            fontSize: 32,
            fontFamily: "Arial",
            fontWeight: "bold",
            color: "black",
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                paddingTop: 10,
                alignItems: "center",
              }}
            >
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={24}
                color={focused ? "#16a0e0" : "#ccc"}
              />
              <Text
                style={{
                  color: focused ? "#16a0e0" : "#ccc",
                  fontSize: 12,
                  marginTop: 4,
                }}
              >
                Search
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayOut;

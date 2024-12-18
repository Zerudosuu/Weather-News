import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NewsProvider } from "./components/context/newsContext";

export default function App() {
  return (
    <NewsProvider>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your HOTODOG!</Text>
        <StatusBar style="auto" />
      </View>
    </NewsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

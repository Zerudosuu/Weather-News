import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "./src/components/BottomSheet";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ImageBackground
        source={require("./assets/SampleBg.png")} // Replace with your image path
        style={styles.container}
        resizeMode="cover" // Ensures the image covers the entire area
      >
        <StatusBar style="light" />

        <View style={styles.overlay}></View>
        <View style={styles.AppScreenContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search here..."
            // value={searchText}
            // onChangeText={handleSearch}
          />
        </View>

        <BottomSheet />
      </ImageBackground>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",

    paddingTop: 60,
    alignItems: "center",
  },

  AppScreenContainer: {
    flex: 3 / 4.3,
    width: "100%",
    padding: 20,
    alignItems: "center",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.1)",
  },

  searchBar: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    width: "90%",
  },
});

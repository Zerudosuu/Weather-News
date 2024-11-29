import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useNewsContext } from "../../../components/context/newsContext";
import BlobBackground from "../../../components/BlobComponent"; // Optional background component
import { StatusBar } from "expo-status-bar";

const NewsDetailsPage = () => {
  const { id } = useLocalSearchParams(); // Get the news ID from the route parameters
  const [newsDetails, setNewsDetail] = useState<any>(null);

  const { categoryArticles } = useNewsContext();

  useEffect(() => {
    const article = categoryArticles.find((article) => article.title === id);

    if (article) {
      setNewsDetail(article);
    } else {
      console.error(`No news found with ID ${id}`);
    }
  }, []);

  if (!newsDetails) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={{ uri: newsDetails.urlToImage }}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{newsDetails.title}</Text>
          <Text style={styles.author}>
            By {newsDetails.author || "Unknown"}
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.contentContainer}>
        <Text style={styles.content}>
          {newsDetails.content || "Content not available."}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    width: "100%",
    height: 300,
    justifyContent: "flex-end",
  },
  image: {
    resizeMode: "cover",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  author: {
    fontSize: 16,
    color: "#ddd",
  },
  contentContainer: {
    padding: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});

export default NewsDetailsPage;

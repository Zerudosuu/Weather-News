import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useNewsContext } from "../../components/context/newsContext";
import { StatusBar } from "expo-status-bar";

const News = () => {
  const [article, setArticle] = useState<any>(null);
  const { articles, otherNews, categoryArticles, searchResults } =
    useNewsContext();
  const { id } = useLocalSearchParams();

  useEffect(() => {
    // Combine all articles into a single array and find the article by title
    const allArticles = [
      ...articles,
      ...otherNews,
      ...categoryArticles,
      ...searchResults,
    ];
    const foundArticle = allArticles.find((article) => article.title === id);

    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      console.error(`No news found with ID ${id}`);
    }
  }, [articles, otherNews, categoryArticles, id]);

  if (!article) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Article not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground
        source={{ uri: article.urlToImage }}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.author}>
            By {article.author || "Unknown Author"}
          </Text>
        </View>
      </ImageBackground>

      <Text style={styles.content}>
        {article.content || "Content not available"}
      </Text>
    </View>
  );
};

export default News;

export const options = {
  title: "News Details",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    padding: 20,
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
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});

import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useNewsContext } from "../../components/context/newsContext";

const News = () => {
  const [article, setArticle] = useState<any>([]);
  const { articles } = useNewsContext(); // Access articles from the context
  const { id } = useLocalSearchParams(); // Get the news ID from the route params

  useEffect(() => {
    const article = articles.find((article) => article.title === id);

    if (article) {
      setArticle(article);
    } else {
      console.error(`No news found with ID ${id}`);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.author}>By {article.author}</Text>
      <Text style={styles.content}>{article.content}</Text>
      <Text>News ID: {id}</Text>
    </View>
  );
};

export default News;

export const options = {
  title: "News Details",
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
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

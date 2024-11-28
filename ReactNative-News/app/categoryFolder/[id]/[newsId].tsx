import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { useNewsContext } from "../../../components/context/newsContext";

const NewsDetailsPage = () => {
  const { id, newsId } = useLocalSearchParams(); // Get category ID and news ID
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
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: newsDetails.urlToImage }} style={styles.image} />
      <Text style={styles.title}>{newsDetails.title}</Text>
      <Text style={styles.author}>By {newsDetails.author}</Text>
      <Text style={styles.content}>{newsDetails.content}</Text>
      <Text>News ID: {id}</Text>
    </View>
  );
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

export default NewsDetailsPage;

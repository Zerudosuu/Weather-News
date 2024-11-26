import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import NewsComponent from "../../components/HomeComponents";
import {
  fetchCategories,
  fetchTopHeadlines,
} from "../../components/api/newsApi";

const HomePage = () => {
  const [headlines, setHeadlines] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTopHeadlines = async () => {
      try {
        const result = await fetchTopHeadlines("US", 20);
        const filteredHeadlines = result.articles.filter(
          (article: { title: string }) => !article.title.startsWith("[Removed]")
        );
        setHeadlines(filteredHeadlines);
      } catch (err) {
        setError("Failed to fetch top headlines.");
      } finally {
        setLoading(false);
      }
    };

    getTopHeadlines();
    getCategory();
  }, []);

  const getCategory = async () => {
    const result = await fetchCategories("Business", "US", 10);
    const filteredHeadlines = result.articles.filter(
      (article: { title: string }) => !article.title.startsWith("[Removed]")
    );
    setCategory(filteredHeadlines);
  };

  if (loading)
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  if (error)
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );

  const topHeadlines = headlines.slice(0, 10);
  const otherNews = headlines.slice(10);

  return (
    <ScrollView style={styles.container}>
      <NewsComponent
        articles={topHeadlines}
        sectionTitle="Top Headlines"
        isBreaking={true}
      />
      <NewsComponent articles={otherNews} sectionTitle="Latest News" />
      <NewsComponent articles={category} sectionTitle="Business News" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomePage;

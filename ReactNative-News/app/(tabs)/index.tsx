import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import NewsCard from "../../components/NewsCard";
import {
  fetchCategories,
  fetchTopHeadlines,
} from "../../components/api/newsApi";
import { StatusBar } from "expo-status-bar";
import NewsComponent from "../../components/HomeComponents";

const HomePage = () => {
  const [topHeadlines, setTopHeadlines] = useState<{ articles: any[] }>({
    articles: [],
  });
  const [business, setBusiness] = useState<{ articles: any[] }>({
    articles: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTopHeadlines = async () => {
      try {
        const result = await fetchTopHeadlines("US", 10);
        setTopHeadlines(result); // Set the result with the articles array
      } catch (err) {
        setError("Failed to fetch top headlines.");
      } finally {
        setLoading(false);
      }
    };

    const getCategories = async () => {
      const result = await fetchCategories("Business", "US", 10);
      setBusiness(result); // Set the result with the articles array
    };

    getCategories(); // Invoke the function inside the useEffect
    getTopHeadlines(); // Invoke the function inside the useEffect
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>{error}</Text>;

  return (
    <ScrollView style={style.container}>
      <NewsComponent articles={topHeadlines.articles} />
      <NewsComponent
        articles={topHeadlines.articles}
        sectionTitle="Latest News"
      />
      <NewsComponent articles={business.articles} sectionTitle="Business" />
      <NewsComponent
        articles={topHeadlines.articles}
        sectionTitle=" Editors Pick"
      />
      <StatusBar style="auto" />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
  },
  Trends: {
    marginTop: 20,
    flex: 1,
  },

  ScrollTrendsContainer: {
    marginTop: 20,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default HomePage;

import React, { useContext, useEffect, useState } from "react";
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
import { useNewsContext } from "../../components/context/newsContext";
import BlobBackground from "../../components/BlobComponent";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const {
    articles,
    setArticles,
    categoryArticles,
    setCategoryArticles,
    setOtherNews,
  } = useNewsContext();

  useEffect(() => {
    const getTopHeadlines = async () => {
      try {
        const result = await fetchTopHeadlines("US", 30);
        const filteredHeadlines = result.articles.filter(
          (article: { title: string }) => !article.title.startsWith("[Removed]")
        );
        setArticles(filteredHeadlines);
        setOtherNews(filteredHeadlines.slice(15, 30));
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
    setCategoryArticles(filteredHeadlines);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  const topHeadlines = articles.slice(0, 10);
  const otherNews = articles.slice(10, 15);

  return (
    <View style={styles.container}>
      <BlobBackground top={-100} left={200} />
      <BlobBackground left={-100} bottom={300} />

      <ScrollView style={styles.scrollView}>
        <NewsComponent
          articles={topHeadlines}
          sectionTitle="Top Headlines"
          isBreaking={true}
          routerPath="/newsFolder/[id]"
          sectionTitleSize={40}
        />
        <NewsComponent
          articles={otherNews}
          sectionTitle="Latest News"
          routerPath="/newsFolder/[id]"
        />
        <NewsComponent
          articles={categoryArticles}
          sectionTitle="Business News"
          routerPath="/newsFolder/[id]"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  scrollView: {
    marginTop: 70,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomePage;

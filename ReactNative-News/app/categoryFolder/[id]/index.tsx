import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { fetchCategories } from "../../../components/api/newsApi";
import NewsComponent from "../../../components/HomeComponents";
import { useNewsContext } from "../../../components/context/newsContext";

const CategoryPage = () => {
  const { id } = useLocalSearchParams(); // Get the category id from route parameters
  const { categoryArticles, setCategoryArticles } = useNewsContext();

  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track error state

  useEffect(() => {
    const getNewsInCategory = async () => {
      try {
        setLoading(true); // Start loading
        setError(null); // Clear previous errors

        const result = await fetchCategories(`${id}`, "US", 10);

        const filteredHeadlines = result.articles.filter(
          (article: { title: string }) => !article.title.startsWith("[Removed]")
        );

        setCategoryArticles(filteredHeadlines);
      } catch (error) {
        console.error("Fetch error:", error);
        setError("Failed to fetch category news. Please try again later.");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    getNewsInCategory();
  }, [id]);

  // Show loading indicator while data is being fetched
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Category News...</Text>
      </View>
    );
  }

  // Show error message if fetching fails
  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  // Show message if no articles are found in the category
  if (categoryArticles.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.noDataText}>
          No articles found in this category.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NewsComponent
        articles={categoryArticles}
        sectionTitle={`${id} News`} // Display the category as the section title
        horizontal={false}
        routerPath="categoryFolder/[id]/[newsId]"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingVertical: 10,
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
  noDataText: {
    fontSize: 16,
    color: "#555",
  },
});

export default CategoryPage;

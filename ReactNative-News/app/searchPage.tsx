import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useLocalSearchParams } from "expo-router"; // Access query parameters
import NewsComponent from "../components/HomeComponents";
import { searchNews } from "../components/api/newsApi";
import { useNewsContext } from "../components/context/newsContext";

const SearchPage = () => {
  const { query } = useLocalSearchParams(); // Get the search query
  const [loading, setLoading] = useState(true);

  const { searchResults, setSearchResults } = useNewsContext();

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        try {
          const results = await searchNews(query as string, 20);
          const filteredResults = results.articles.filter(
            (article: { title: string }) =>
              !article.title.startsWith("[Removed]")
          );
          setSearchResults(filteredResults);
        } catch (error) {
          console.error("Error fetching search results:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSearchResults();
  }, [query]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NewsComponent
        articles={searchResults}
        sectionTitle=""
        routerPath="/newsFolder/[id]"
        horizontal={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default SearchPage;

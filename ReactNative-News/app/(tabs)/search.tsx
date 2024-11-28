import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import HorizontalNewsCard from "../../components/horizontalNewsCard";
import NewsComponent from "../../components/HomeComponents";
import { useRouter } from "expo-router";
import { useNewsContext } from "../../components/context/newsContext";

const API_KEY = process.env.EXPO_PUBLIC_NEWS_API_KEY;

const Search = () => {
  const [anyNews, setAnyNews] = useState<any[]>([]);
  const [loadingAll, setLoadingAll] = useState(true); // State for entire component loading
  const [loadingNews, setLoadingNews] = useState(true); // State for "Other News"
  const categories = [
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  const { articles } = useNewsContext();
  const router = useRouter();

  useEffect(() => {
    const getNews = async () => {
      try {
        const result = await fetch(
          `https://newsapi.org/v2/sources?apiKey=${API_KEY}`
        );

        const data = await result.json();

        // Format the news data
        const formattedNews = data.sources.map((source: any) => ({
          title: source.name,
          source: { name: source.name },
          urlToImage: source.urlToImage || "https://via.placeholder.com/300",
        }));

        setAnyNews(formattedNews.slice(0, 20));
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoadingNews(false); // Stop loading for "Other News"
        setLoadingAll(false); // Stop loading for the entire component
      }
    };

    getNews();
  }, []);

  const handleSubmit = (searchText: string) => {
    router.push({
      pathname: "/searchPage",
      params: { query: searchText },
    });
  };

  if (loadingAll) {
    // Show loading indicator for the entire screen
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search here..."
          returnKeyType="search"
          onSubmitEditing={(event) => handleSubmit(event.nativeEvent.text)}
        />
      </View>

      {/* Render Categories and Other News */}
      <FlatList
        data={[{ key: "categories" }, { key: "news" }]} // Dummy keys to render sections
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          if (item.key === "categories") {
            return (
              <View>
                <Text style={styles.sectionTitle}>Categories</Text>
                <View style={styles.categoryContainer}>
                  {categories.map((category, index) => (
                    <HorizontalNewsCard CategoryName={category} key={index} />
                  ))}
                </View>
              </View>
            );
          } else if (item.key === "news") {
            return (
              <View style={styles.newsContainer}>
                <Text style={styles.sectionTitle}>Other News</Text>

                {loadingNews ? (
                  // Loading indicator for "Other News" section
                  <View style={styles.center}>
                    <ActivityIndicator size="small" color="#007aff" />
                    <Text>Loading Other News...</Text>
                  </View>
                ) : (
                  <NewsComponent
                    articles={anyNews}
                    sectionTitle=""
                    horizontal={false}
                    routerPath="/newsFolder/[id]"
                  />
                )}
              </View>
            );
          }
          return null;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
  },
  searchContainer: {
    width: "100%",
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  categoryContainer: {
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    justifyContent: "center",
  },
  newsContainer: {
    marginVertical: 20,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Search;

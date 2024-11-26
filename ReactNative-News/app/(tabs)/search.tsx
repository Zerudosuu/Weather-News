import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import HorizontalNewsCard from "../../components/horizontalNewsCard";
import NewsComponent from "../../components/HomeComponents";

const API_KEY = process.env.EXPO_PUBLIC_NEWS_API_KEY;

const Search = () => {
  const [anyNews, setAnyNews] = useState<any[]>([]);
  const categories = [
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  useEffect(() => {
    const getNews = async () => {
      try {
        const result = await fetch(
          `https://newsapi.org/v2/sources?apiKey=${API_KEY}`
        );

        const data = await result.json();
        const formattedNews = data.sources.map((source: any) => ({
          title: source.name,
          source: { name: source.name },
          urlToImage: source.urlToImage || "https://via.placeholder.com/300",
        }));
        setAnyNews(formattedNews.slice(0, 20));
      } catch (error) {
        console.error("Fetch error:", error);
        return;
      }
    };

    getNews();
  }, []);

  const handleSubmit = (searchText: string) => {
    console.log("Search submitted:", searchText);
  };

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

      {/* Replace ScrollView with FlatList */}
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
                <NewsComponent
                  articles={anyNews}
                  sectionTitle="Other News"
                  horizontal={false}
                />
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
});

export default Search;

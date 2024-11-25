import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import HorizontalNewsCard from "../../components/horizontalNewsCard";
import NewsCard from "../../components/NewsCard";
import NewsComponent from "../../components/HomeComponents";

const API_KEY = process.env.EXPO_PUBLIC_NEWS_API_KEY;

const search = () => {
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
    const getnews = async () => {
      try {
        const result = await fetch(
          `https://newsapi.org/v2/sources?apiKey=${API_KEY}`
        );

        const data = await result.json();
        // Map the sources to articles with necessary fields (title, source name, image, etc.)
        const formattedNews = data.sources.map((source: any) => ({
          title: source.name, // Use the source name as the title
          source: { name: source.name }, // Set source name
          urlToImage: source.urlToImage || "https://via.placeholder.com/300", // Default image if not available
        }));
        setAnyNews(formattedNews.slice(0, 20));
      } catch (error) {
        console.error("Fetch error:", error);
        return;
      }
    };

    getnews();
  }, []);

  const handleSubmit = (searchText: string) => {
    // console.log("button was pressed");
    // const city = searchText;
    // const cityArray = city.split(",");
    // setLocationData({
    //   city: cityArray[0].trim(),
    //   state: cityArray[1]?.trim() || "",
    //   country: cityArray[2]?.trim() || "",
    // });
    // No need to call `getGeolocation()` directly here
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search here..."
          // value={searchText}
          returnKeyType="search" // Sets the return key to "Search"
          onSubmitEditing={(event) => handleSubmit(event.nativeEvent.text)}
        />
      </View>

      <ScrollView>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              marginVertical: 10,
              paddingHorizontal: 15,
            }}
          >
            Categories
          </Text>
          <View style={styles.categoryContainer}>
            {categories.map((category, index) => (
              <HorizontalNewsCard CategoryName={category} key={index} />
            ))}
          </View>
        </View>

        <View>
          <View style={styles.newsContainer}>
            <NewsComponent articles={anyNews} sectionTitle="Other News" />
          </View>
        </View>
      </ScrollView>
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

  categoryContainer: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    gap: 5,
    flexWrap: "wrap",

    justifyContent: "center",
  },

  newsContainer: {},
});
export default search;

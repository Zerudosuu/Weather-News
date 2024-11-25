import React from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";
import NewsCard from "./NewsCard"; // Import the NewsCard component

type NewsArticle = {
  title: string;
  source: {
    name: string;
  };
  urlToImage: string;
};

type TrendingNewsProps = {
  articles: NewsArticle[];
  sectionTitle?: string; // Optional prop to set a custom title
};

const NewsComponent = ({
  articles,
  sectionTitle = "Trending this week",
}: TrendingNewsProps) => {
  return (
    <View style={styles.trendsContainer}>
      <Text style={styles.header}>{sectionTitle}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {articles.map((news, index) => (
          <NewsCard
            key={index}
            newsTitle={news.title}
            newsAuthor={news.source.name}
            newsImage={news.urlToImage}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  trendsContainer: {
    marginBottom: 20,
    marginVertical: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 20, // Adds some padding around the header text
  },
  scrollContainer: {
    paddingBottom: 10,
  },
  contentContainerStyle: {
    paddingLeft: 10, // Adds extra space at the left side of the content
    paddingRight: 10, // Optionally, adds space at the right to make it scroll more fluidly
    alignItems: "center", // Ensures the items are centered vertically
  },
});

export default NewsComponent;

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

const TrendingNews = ({
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
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scrollContainer: {
    paddingBottom: 10,
  },
});

export default TrendingNews;

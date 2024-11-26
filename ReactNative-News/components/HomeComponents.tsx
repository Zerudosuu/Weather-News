import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import NewsCard from "./NewsCard";

type TrendingNewsProps = {
  articles: any[]; // Define the type of articles for better type safety
  sectionTitle?: string;
  isBreaking?: boolean;
  horizontal?: boolean; // New prop to toggle horizontal or vertical layout
  routerPath?: string;
};

const NewsComponent = ({
  articles,
  sectionTitle = "Trending this week",
  isBreaking = false,
  horizontal = true,
  routerPath = "", // Default to horizontal scrollings
}: TrendingNewsProps) => {
  return (
    <View style={styles.container}>
      {sectionTitle != null && (
        <Text style={styles.header}>{sectionTitle}</Text>
      )}
      <FlatList
        data={articles}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({ item }) => (
          <NewsCard
            newsTitle={item.title}
            newsAuthor={item.source?.name || "Unknown"}
            newsImage={item.urlToImage}
            isBreaking={isBreaking}
            routerPath={routerPath} // Pass router path to NewsCard for navigation
          />
        )}
        horizontal={horizontal} // Set horizontal or vertical scrolling
        numColumns={horizontal ? 1 : 2} // If not horizontal, show 2 columns
        contentContainerStyle={[
          styles.contentContainer,
          !horizontal && styles.verticalContent, // Add vertical-specific styles
        ]}
        showsHorizontalScrollIndicator={!horizontal}
        showsVerticalScrollIndicator={!horizontal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
  },
  contentContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
  },
  verticalContent: {},
});

export default NewsComponent;

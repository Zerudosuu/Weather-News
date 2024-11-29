import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import NewsCard from "./NewsCard";
import { useNewsContext } from "./context/newsContext";

type TrendingNewsProps = {
  articles: any[];
  sectionTitle?: string;
  isBreaking?: boolean;
  horizontal?: boolean;
  routerPath?: string;
  sectionTitleSize?: number;
};

const NewsComponent = ({
  articles,
  sectionTitle = "Trending this week",
  isBreaking = false,
  horizontal = true,
  routerPath = "",
  sectionTitleSize = 20,
}: TrendingNewsProps) => {
  return (
    <View style={styles.container}>
      {sectionTitle != null && (
        <Text style={[styles.header, { fontSize: sectionTitleSize }]}>
          {sectionTitle}
        </Text>
      )}
      <FlatList
        data={articles}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        renderItem={({ item, index }) => (
          <NewsCard
            newsTitle={item.title}
            newsAuthor={item.source?.name || "Unknown"}
            newsImage={item.urlToImage}
            isBreaking={isBreaking}
            routerPath={routerPath}
          />
        )}
        horizontal={horizontal}
        numColumns={horizontal ? 1 : 2}
        contentContainerStyle={[
          styles.contentContainer,
          !horizontal && styles.verticalContent,
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

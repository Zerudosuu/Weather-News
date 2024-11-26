import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { fetchCategories } from "../../../components/api/newsApi";
import NewsComponent from "../../../components/HomeComponents";

const CategoryPage = () => {
  const { id } = useLocalSearchParams();
  const [catergoryNews, setCategoryNews] = useState<any[]>([]);
  // Fetch the category data from the API using the id provided in the route
  useEffect(() => {
    const getNewsInCategory = async () => {
      try {
        const result = await fetchCategories(`${id}`, "US", 10);
        const filteredHeadlines = result.articles.filter(
          (article: { title: string }) => !article.title.startsWith("[Removed]")
        );

        setCategoryNews(filteredHeadlines);
      } catch (error) {
        console.error("Fetch error:", error);
        return;
      }
    };

    getNewsInCategory();
  }, []);

  return (
    <View style={style.container}>
      <NewsComponent
        articles={catergoryNews}
        sectionTitle={""}
        horizontal={false}
        routerPath={"categoryFolder/[id]/[newsId]"}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingVertical: 10,
  },
});

export default CategoryPage;

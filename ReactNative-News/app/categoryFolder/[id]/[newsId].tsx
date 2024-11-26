import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";

const NewsDetailsPage = () => {
  const { id, newsId } = useLocalSearchParams(); // Get category ID and news ID
  const [newsDetails, setNewsDetails] = useState<any>(null);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        // Replace with your API logic to fetch the details of a single news item
        // For now, we're just setting placeholder data
        const newsData = {
          title: newsId,
          content: `This is a detailed description of the news titled "${newsId}" in category "${id}".`,
        };
        setNewsDetails(newsData);
      } catch (error) {
        console.error("Error fetching news details:", error);
      }
    };

    fetchNewsDetails();
  }, [newsId]);

  if (!newsDetails) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{newsDetails.title}</Text>
      <Text style={styles.content}>{newsDetails.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default NewsDetailsPage;

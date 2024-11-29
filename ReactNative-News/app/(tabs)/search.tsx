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
import BlobBackground from "../../components/BlobComponent";

const Search = () => {
  const [loadingAll, setLoadingAll] = useState(true);
  const { otherNews } = useNewsContext();
  const router = useRouter();

  const categories = [
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  // Color palette for categories
  const colors = ["16a0e0", "00d3d1", "00bbe4", "3fe6ae", "a4f389", "f9f871"];

  useEffect(() => {
    if (otherNews && otherNews.length > 0) {
      setLoadingAll(false); // Set loading to false only when otherNews is available
    }
  }, [otherNews]);

  const handleSubmit = (searchText: string) => {
    router.push({
      pathname: "/searchPage",
      params: { query: searchText },
    });
  };

  if (loadingAll) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BlobBackground top={-450} left={-50} />
      <BlobBackground left={100} bottom={300} />
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
                    <HorizontalNewsCard
                      CategoryName={category}
                      key={index}
                      color={colors[index % colors.length]}
                    />
                  ))}
                </View>
              </View>
            );
          } else if (item.key === "news") {
            return (
              <View style={styles.newsContainer}>
                <Text style={styles.sectionTitle}>Other News</Text>
                {otherNews && otherNews.length > 0 ? (
                  <NewsComponent
                    articles={otherNews}
                    sectionTitle=""
                    horizontal={false}
                    routerPath="/newsFolder/[id]"
                  />
                ) : (
                  <Text>No news available.</Text>
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
    position: "relative",
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

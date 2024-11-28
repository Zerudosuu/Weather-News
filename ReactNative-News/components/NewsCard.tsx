import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";

type NewsCardProps = {
  newsTitle: string;
  newsAuthor: string;
  newsImage: string;
  isBreaking?: boolean;
  routerPath: string;
};

const NewsCard = ({
  newsTitle = "No title available",
  newsAuthor = "Unknown",
  newsImage,
  isBreaking = false,
  routerPath = "/newsFolder/[id]",
}: NewsCardProps): JSX.Element => {
  return (
    <Pressable
      onPress={() => {
        const route = routerPath
          ? routerPath.replace("[id]", encodeURIComponent(newsTitle))
          : `/newsFolder/${encodeURIComponent(newsTitle)}`;
        router.push(route);
      }}
      style={styles.card}
    >
      <ImageBackground
        source={{
          uri: newsImage || "https://via.placeholder.com/300",
        }}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        {isBreaking && (
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>Breaking</Text>
          </View>
        )}
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {newsTitle}
        </Text>
        <Text style={styles.author}>{newsAuthor}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180,
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    height: 120,
    width: "100%",
  },
  imageStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  overlayText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    color: "#666",
  },
});

export default NewsCard;

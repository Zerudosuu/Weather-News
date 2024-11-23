import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";

type NewscardProps = {
  newsTitle: string;
  newsAuthor: string;
  newsImage: string;
};

const NewsCard = ({
  newsTitle,
  newsAuthor,
  newsImage,
}: NewscardProps): JSX.Element => {
  return (
    <View style={styles.card}>
      {/* Image with Overlay */}
      <ImageBackground
        source={{
          uri: newsImage || "https://via.placeholder.com/300", // Fallback if image is missing
        }}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        {/* Example Overlay */}
        <View style={styles.overlay}>
          <Text style={styles.overlayText}>Breaking</Text>
        </View>
      </ImageBackground>

      {/* Title and Author */}
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {newsTitle}
        </Text>
        <Text style={styles.author}>{newsAuthor}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    marginHorizontal: 10,
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
  } as ImageStyle,

  imageStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  } as ImageStyle,

  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
    paddingVertical: 5,
    paddingHorizontal: 10,
  } as ViewStyle,

  overlayText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  } as TextStyle,

  textContainer: {
    padding: 10,
  } as ViewStyle,

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  } as TextStyle,

  author: {
    fontSize: 14,
    color: "#666",
  } as TextStyle,
});

export default NewsCard;

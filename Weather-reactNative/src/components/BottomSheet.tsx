import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React, { useEffect } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { transform } from "@babel/core";

const { height: SCREENHEIGHT } = Dimensions.get("window");
const BottomSheet = () => {
  const translateY = useSharedValue(0);
  const previousHeight = useSharedValue({ y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      previousHeight.value = { y: translateY.value };
    })
    .onUpdate((e) => {
      translateY.value = e.translationY + previousHeight.value.y;
      translateY.value = Math.max(translateY.value, -SCREENHEIGHT + 50);
      translateY.value = Math.min(translateY.value, -SCREENHEIGHT / 4);

      if (translateY.value === -SCREENHEIGHT) {
      }
    });

  const bottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  useEffect(() => {
    translateY.value = withSpring(-SCREENHEIGHT / 4, {
      duration: 500,
    });
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, bottomSheetStyle]}>
        <Image
          source={require("../../assets/BottomSheetTop.png")}
          style={styles.imageStyle}
        />

        <View style={styles.line} />
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: "#5271FF",
    width: "100%",
    height: SCREENHEIGHT,
    position: "absolute",
    top: SCREENHEIGHT,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "visible",
  },

  line: {
    width: 75,
    height: 4,
    backgroundColor: "#D3D3D3",
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 10,
  },

  imageStyle: {
    width: "101%",
    height: 250,
    position: "absolute",
    top: -220,

    alignSelf: "center",
  },
});

export default BottomSheet;

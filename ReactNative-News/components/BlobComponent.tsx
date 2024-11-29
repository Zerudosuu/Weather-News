import React from "react";
import Svg, { Path } from "react-native-svg";
import { View, StyleSheet } from "react-native";

type BlobBackgroundProps = {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  width?: number;
  height?: number;
  fill?: string;
};

const BlobBackground: React.FC<BlobBackgroundProps> = ({
  top,
  left,
  bottom,
  right,
  width = 500,
  height = 500,
  fill = "16A0E0",
}) => {
  return (
    <View
      style={[
        styles.container,
        { top, left, bottom, right }, // Apply dynamic position props
      ]}
    >
      <Svg
        viewBox="0 0 200 200"
        width={width} // Width can now be customized via props
        height={height} // Height can now be customized via props
        style={styles.svg}
      >
        <Path
          fill={`#${fill}`}
          d="M55.2,-64C71.3,-52.3,83.9,-34.7,84.4,-17.1C84.9,0.5,73.3,18.1,62.8,36.2C52.3,54.3,42.8,73,27.1,82C11.3,91.1,-10.7,90.5,-25.7,80.7C-40.8,70.9,-48.9,51.9,-58.6,34.2C-68.4,16.6,-79.8,0.2,-77.1,-13.4C-74.4,-26.9,-57.6,-37.8,-42.4,-49.6C-27.2,-61.5,-13.6,-74.3,3,-77.8C19.6,-81.4,39.1,-75.7,55.2,-64Z"
          transform="translate(100 100)"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
  svg: {
    position: "absolute",
  },
});

export default BlobBackground;

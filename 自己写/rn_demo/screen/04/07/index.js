import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
} from "react-native";
import React, { useState } from "react";
const windowWidth = Dimensions.get("window").width;

// 图片链接
const images = new Array(6).fill(
  "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
);
export default function index() {
  const [scrollX] = useState(new Animated.Value(0));

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        >
          {images.map((image, imageIndex) => (
            <View style={{ width: windowWidth, height: 250 }} key={imageIndex}>
              <ImageBackground style={styles.card} source={{ uri: image }}>
                <View style={styles.textContainer}>
                  <Text style={styles.infoText}>{`Image - ${
                    imageIndex + 1
                  }`}</Text>
                </View>
              </ImageBackground>
            </View>
          ))}
        </ScrollView>
        <View style={styles.indicatorContainer}>
          {images.map((_, imageIndex) => (
            <Animated.View
              key={imageIndex}
              style={[
                styles.normalDot,
                {
                  width: scrollX.interpolate({
                    inputRange: [
                      windowWidth * (imageIndex - 1),
                      windowWidth * imageIndex,
                      windowWidth * (imageIndex + 1),
                    ],
                    outputRange: [8, 16, 8],
                    extrapolate: "clamp",
                  }),
                },
              ]}
            ></Animated.View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

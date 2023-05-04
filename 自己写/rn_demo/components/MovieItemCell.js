import { Pressable, View, Image, Text, StyleSheet } from "react-native";

export default function MovieItemCell(props) {
  const { movieImg, title, year, average, directors, casts } = props.movie;
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <Image style={styles.thumbnail} source={{ uri: movieImg }} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
        <View style={styles.horizontalView}>
          {average === "0" ? (
            <Text style={styles.titleTag}>暂无评分</Text>
          ) : (
            <>
              <Text style={styles.titleTag}>评分：</Text>
              <Text style={styles.score}>{average}</Text>
            </>
          )}
        </View>
        <View style={styles.horizontalView}>
          <Text style={styles.titleTag}>导演：</Text>
          <Text style={styles.name}>{directors}</Text>
        </View>
        <View style={styles.horizontalView}>
          <Text style={styles.titleTag}>主演：</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>
            {casts}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
  },
  thumbnail: {
    width: 110,
    height: 150,
    backgroundColor: "#f0f0f0",
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "left",
  },
  year: {
    textAlign: "left",
    color: "#777777",
    marginTop: 10,
  },
  horizontalView: {
    flexDirection: "row",
    marginTop: 10,
  },
  titleTag: {
    color: "#666666",
  },
  score: {
    color: "#ff8800",
    fontWeight: "bold",
  },
  name: {
    color: "#333333",
    flex: 1,
  },
});

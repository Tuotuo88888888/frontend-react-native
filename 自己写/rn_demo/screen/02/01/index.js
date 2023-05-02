import { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
function getOption(text) {
  return new Promise((resolve, reject) => {
    const txtArr = [
      "街道",
      "大街",
      "道路",
      "道路2",
      "80",
      "80街道",
      "车站",
    ].filter((i) => i.includes(text));
    setTimeout(() => {
      resolve(txtArr);
    }, 1000);
  });
}
export default function SeachInput() {
  const [text, setText] = useState("");
  const [show, isShow] = useState(false);
  const [options, setOptions] = useState([]);
  function changeText(t) {
    isShow(t?.trim().length > 0);
    setText(t);
    getOption(t).then(setOptions);
  }
  function hideOption(newVal) {
    setText(newVal);
    isShow(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          defaultValue={text}
          onChangeText={(t) => changeText(t)}
          style={styles.inputStyle}
        ></TextInput>
        <View style={styles.btnStyle}>
          <Text onPress={() => alert(text)} style={styles.search}>
            搜索
          </Text>
        </View>
      </View>
      {show ? (
        <View style={styles.resultStyle}>
          {options.map((i, k) => (
            <Text
              key={k}
              style={styles.itemStyle}
              numberOfLines={1}
              onPress={() => hideOption(i)}
            >
              {i}
            </Text>
          ))}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: 25,
  },
  searchContainer: {
    height: 45,
    flexDirection: "row",
  },
  inputStyle: {
    height: 45,
    flex: 1,
    marginTop: 20,
    borderWidth: 1,
    marginLeft: 10,
    paddingLeft: 5,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  btnStyle: {
    width: 80,
    marginTop: 20,
    marginLeft: -5,
    marginRight: 10,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#23BEFF",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  resultStyle: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 200,
    borderColor: "#ccc",
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  itemStyle: {
    fontSize: 16,
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderTopWidth: 0,
  },
});

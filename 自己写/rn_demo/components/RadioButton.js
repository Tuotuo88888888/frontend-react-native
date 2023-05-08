import React, { PureComponent } from "react";
import { View, Pressable, Text, Image, StyleSheet } from "react-native";

// export default class RadioButton extends PureComponent {
//   constructor(props) {
//     super(props);
//     const {
//       selectedImage = require("../assets/radio_selected.png"),
//       unSelectedImage = require("../assets/radio_select.png"),
//       selectedTextColor = "#f83d2b",
//       unSelectedTextColor = "#333333",
//     } = props;
//     this.state = {
//       selected: props.selected,
//       selectedImage,
//       unSelectedImage,
//       selectedTextColor,
//       unSelectedTextColor,
//     };
//     this.selectedChanged = props.selectedChanged;
//   }
//   handlePress() {
//     this.selectedChanged(!this.state.selected);
//   }
//   setSelectState(selected) {
//     this.setState({
//       selected,
//     });
//   }

//   render() {
//     const {
//       selected,
//       selectedImage,
//       unSelectedImage,
//       selectedTextColor,
//       unSelectedTextColor,
//     } = this.state;
//     const { text, drawablePadding } = this.props;
//     return (
//       <Pressable
//         style={styles.radioStyle}
//         onPress={this.handlePress.bind(this)}
//       >
//         <Image
//           style={styles.image}
//           source={selected ? selectedImage : unSelectedImage}
//         />
//         <Text
//           style={{
//             ...styles.text,
//             color: selected ? selectedTextColor : unSelectedTextColor,
//             marginLeft: drawablePadding,
//             fontSize: 18,
//           }}
//         >
//           {text}
//         </Text>
//       </Pressable>
//     );
//   }
// }

export default class RadioButton extends PureComponent {
  constructor(props) {
    super(props);
    this.selectedChanged = props.selectedChanged;
  }
  handlePress() {
    this.selectedChanged(!this.props.selected);
  }

  render() {
    const {
      selectedImage = require("../assets/radio_selected.png"),
      unSelectedImage = require("../assets/radio_select.png"),
      selectedTextColor = "#f83d2b",
      unSelectedTextColor = "#333333",
      text,
      drawablePadding,
      selected,
    } = this.props;
    return (
      <Pressable
        style={styles.radioStyle}
        onPress={this.handlePress.bind(this)}
      >
        <Image
          style={styles.image}
          source={selected ? selectedImage : unSelectedImage}
        />
        <Text
          style={{
            ...styles.text,
            color: selected ? selectedTextColor : unSelectedTextColor,
            marginLeft: drawablePadding,
            fontSize: 18,
          }}
        >
          {text}
        </Text>
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  radioStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 22,
    height: 22,
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
  },
});

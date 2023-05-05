import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";

const width = Dimensions.get("window").width;

export default class FreeDialog extends PureComponent {
  constructor(props) {
    super(props);
  }
  // 对 props 进行验证
  static propTypes = {
    isShow: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    buttonContent: PropTypes.string,
    imageSource: PropTypes.number,
    closeDialog: PropTypes.func.isRequired,
  };

  render() {
    if (!this.props.isShow) {
      return null;
    } else {
      return (
        <View style={styles.containerBg}>
          <View style={styles.dialogBg}>
            <Image style={styles.logoStyle} source={this.props.imageSource} />
            <Text style={styles.titleStyle}>{this.props.title}</Text>
            <Text style={styles.contentStyle}>{this.props.content}</Text>
            <ImageBackground
              style={styles.buttonStyle}
              resizeMode="stretch"
              source={require("../assets/commen_btn.png")}
            >
              <Text style={styles.btnContentStyle}>
                {this.props.buttonContent}
              </Text>
            </ImageBackground>
          </View>
          <Pressable
            onPress={this.props.closeDialog}
            style={styles.btnCloseStyle}
          >
            <Image
              source={require("../assets/ic_close.png")}
              style={{
                height: 38,
                width: 38,
              }}
            />
          </Pressable>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  containerBg: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  dialogBg: {
    width: width - 100,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  logoStyle: {
    height: ((width - 100) * 258) / 400,
    width: width - 100,
  },
  titleStyle: {
    marginTop: 14,
    color: "#333333",
    fontSize: 18,
    fontWeight: "600",
  },
  contentStyle: {
    marginTop: 5,
    color: "#333333",
    fontSize: 14,
    fontWeight: "400",
  },
  buttonStyle: {
    height: ((width - 135) * 88) / 480,
    width: width - 180,
    marginTop: 36,
    marginBottom: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContentStyle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontWeight: "600",
  },
  btnCloseStyle: {
    padding: 10,
    marginTop: 33,
    alignItems: "center",
  },
});

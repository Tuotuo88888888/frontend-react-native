import React, { PureComponent } from "react";
import FreeDialog from "../../../components/FreeDialog";
import { Pressable, View, Text, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

export default class FreeDialogPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShowDialog: false,
    };
  }
  showDialog() {
    this.setState({
      isShowDialog: true,
    });
  }
  closeDialog() {
    this.setState({
      isShowDialog: false,
    });
  }
  renderDialog() {
    return (
      <FreeDialog
        isShow={this.state.isShowDialog}
        title={"年底大促"}
        content={"您的新年礼品，请查收！"}
        buttonContent={"领取新年礼物"}
        imageSource={require("../../../assets/dialog_bg.png")}
        closeDialog={this.closeDialog.bind(this)}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Pressable
          onPress={this.showDialog.bind(this)}
          style={styles.btnContainer}
        >
          <Text style={styles.textStyle}>点击弹出框</Text>
        </Pressable>
        {this.renderDialog()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  btnContainer: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#EE7942",
    height: 38,
    width: width - 100,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "#ffffff",
    fontSize: 18,
  },
});

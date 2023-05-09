import {
  Text,
  View,
  StyleSheet,
  Pressable,
  UIManager,
  LayoutAnimation,
  Platform,
} from "react-native";
import React, { PureComponent } from "react";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
// 定义动画
const customAnime = {
  // 第一个动画
  customSpring: {
    duration: 1000,
    create: {
      springDamping: 0.3, // 弹跳动画阻尼系数
      type: LayoutAnimation.Types.spring, // 动画类型
      property: LayoutAnimation.Properties.scaleXY, // 动画属性
    },
    update: {
      springDamping: 0.6, // 弹跳动画阻尼系数
      type: LayoutAnimation.Types.spring, // 动画类型
      property: LayoutAnimation.Properties.scaleXY, // 动画属性
    },
  },
  // 第二个动画
  customLinear: {
    duration: 500,
    create: {
      springDamping: 0.6, // 弹跳动画阻尼系数
      type: LayoutAnimation.Types.linear, // 动画类型
      property: LayoutAnimation.Properties.opacity, // 动画属性
    },
    update: {
      springDamping: 0.6, // 弹跳动画阻尼系数
      type: LayoutAnimation.Types.linear, // 动画类型
      property: LayoutAnimation.Properties.opacity, // 动画属性
    },
  },
};

export default class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: 100,
      height: 100,
      whichAnime: true,
    };
  }
  pressHandle() {
    LayoutAnimation.configureNext(
      this.state.whichAnime
        ? customAnime.customSpring
        : customAnime.customLinear,
      async () => {
        await 1;
        this.setState({
          width: 100,
          height: 100,
        });
      }
    );
    this.setState({
      width: 200,
      height: 200,
      whichAnime: !this.state.whichAnime,
    });
  }
  render() {
    const { width, height } = this.state;
    console.log(width, height);
    return (
      <View style={styles.container}>
        <View style={[styles.box, { width, height }]}></View>
        <Pressable style={styles.btn} onPress={this.pressHandle.bind(this)}>
          <Text style={styles.btnText}>点击</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 20,
  },
  box: {
    backgroundColor: "red",
  },
  btn: {
    backgroundColor: "#00aaff",
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  btnText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

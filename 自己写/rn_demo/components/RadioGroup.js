import React, { PureComponent } from "react";
import { View, Text } from "react-native";

import RadioButton from "./RadioButton";

// export default class RadioGroup extends PureComponent {
//   constructor(props) {
//     super(props);
//     // 该组件维护几个状态
//     this.state = {
//       currentIndex: 0, // 当前选中的索引
//       dataArray: [], // 存储子组件的引用
//     };
//     this.itemChange = props.itemChange;
//   }

//   change(index, selected) {
//     // 该 index 是子组件触发父组件的方法，传递过来的索引
//     // 通过该索引，我们可以获取到用户点击的是第几个组件

//     // 1. 更新当前的索引
//     this.setState({
//       currentIndex: selected ? index : null,
//     });

//     // 2. 触发父组件的方法
//     this.itemChange(selected ? index : null);

//     // 3. 遍历每一个子组件，调用子组件的 setSelectState 方法
//     this.state.dataArray.forEach((item, i) => {
//       if (item !== null) {
//         item.setSelectState(index === i && selected);
//       }
//     });
//   }

//   render() {
//     // 获取父组件传递过来的参数
//     const { orientation, data, defaultValue, drawablePadding } = this.props;

//     return (
//       <View
//         style={{
//           flexDirection: orientation,
//         }}
//       >
//         {data.map((item, index) => {
//           return (
//             <RadioButton
//               selected={index === defaultValue ? true : false}
//               key={index}
//               index={index}
//               text={item.text}
//               drawablePadding={drawablePadding}
//               orientation={orientation}
//               ref={(radioButton) => (this.state.dataArray[index] = radioButton)}
//               selectedChanged={(selected) => {
//                 this.change(index, selected);
//               }}
//             />
//           );
//         })}
//       </View>
//     );
//   }
// }

export default class RadioGroup extends PureComponent {
  constructor(props) {
    super(props);
    // 该组件维护几个状态
    this.state = {
      dataArray: [], // 存储子组件的引用
    };
    this.itemChange = props.itemChange;
  }

  change(index, selected) {
    // 该 index 是子组件触发父组件的方法，传递过来的索引
    // 通过该索引，我们可以获取到用户点击的是第几个组件

    // 2. 触发父组件的方法
    this.itemChange(selected ? index : null);
  }

  render() {
    // 获取父组件传递过来的参数
    const { orientation, data, defaultValue, drawablePadding } = this.props;

    return (
      <View
        style={{
          flexDirection: orientation,
        }}
      >
        {data.map((item, index) => {
          return (
            <RadioButton
              selected={index === defaultValue ? true : false}
              key={index}
              index={index}
              text={item.text}
              drawablePadding={drawablePadding}
              ref={(radioButton) => (this.state.dataArray[index] = radioButton)}
              selectedChanged={(selected) => {
                this.change(index, selected);
              }}
            />
          );
        })}
      </View>
    );
  }
}

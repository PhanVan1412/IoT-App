import { View, Text } from "react-native";
import React from "react";
import HomeItem from "../../components/home/HomeItem";
import Styles from "./Styles";

const Remote = () => {
  const remoteList = [
    {
      id: 1,
      label: "Đèn",
    },
    {
      id: 2,
      label: "Rèm",
    },
    {
      id: 3,
      label: "Cửa",
    },
    {
      id: 4,
      label: "Điều hòa",
    },
  ];
  const handlePress = (item) => {
    console.log("Press in", item);
  };
  return (
    <View style={Styles.homeScreen}>
      {remoteList.map((item, index) => {
        return (
          <HomeItem
            key={`remote-item-${index}`}
            remote={item}
            press={handlePress}
          />
        );
      })}
    </View>
  );
};

export default Remote;

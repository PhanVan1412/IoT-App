import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import Styles from "./Style";

const HomeItem = ({ remote, press }) => {
  console.log("check remote data in line 6", remote);
  return (
    <TouchableOpacity onPress={() => press(remote.label)}>
      <View style={Styles.card}>
        <ImageBackground
          style={Styles.imageBg}
          source={require("../../../assets/homeBgo.png")}
          resizeMode="cover"
        >
          <Text style={Styles.title}>{remote.label}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default HomeItem;

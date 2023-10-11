import { View, Text, Image } from "react-native";
import React from "react";
import Styles from "./Styles";

const Information = () => {
  return (
    <View style={Styles.inforScreen}>
      <View style={Styles.imageWrapper}>
        <Image
          source={require("../../../assets/ft.png")}
          style={Styles.imageLogo}
        />
      </View>
      <View style={Styles.contentWrapper}>
        <View style={Styles.container}>
          <Text style={Styles.title}>Tên: </Text>
          <Text style={Styles.mainText}>Smart IoT App</Text>
        </View>
        <View style={Styles.container}>
          <Text style={Styles.title}>Phiên bản: </Text>
          <Text style={Styles.mainText}>V1.FT02N0001</Text>
        </View>
        <View style={Styles.container}>
          <Text style={Styles.title}>Môn học: </Text>
          <Text style={Styles.mainText}>
            Phát Triển Hệ Thống & Ứng Dụng IoT
          </Text>
        </View>
        <View style={Styles.container}>
          <Text style={Styles.title}>GVHD: </Text>
          <Text style={Styles.mainText}>Ths. Huỳnh Văn Hóa</Text>
        </View>
        <View style={Styles.container}>
          <Text style={Styles.title}>Phát triển: </Text>
          <Text style={Styles.mainText}>Team5-D19CQVT01N-2023</Text>
        </View>
      </View>
    </View>
  );
};

export default Information;

import { View, Text } from "react-native";
import React from "react";
import SettingItem from "../../components/setting/SettingItem";
import SensorItem from "../../components/sensor/SensorItem";
import Styles from "./Styles";

const Settings = () => {
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
  const sensorList = [
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
  ];
  const handleSetting = (label) => {
    if (label) {
      console.log("start setting with", label);
    } else {
      console.log("end setting with");
    }
  };
  return (
    <View style={Styles.settingScreen}>
      <Text style={Styles.title}>Trạng thái</Text>
      {remoteList.map((item, index) => {
        return (
          <SettingItem
            setting={item}
            key={`setting-item-${index}`}
            onSetting={handleSetting}
          />
        );
      })}
      <Text style={Styles.title}>Kích hoạt cảm biến</Text>
      {sensorList.map((item, index) => {
        return <SensorItem sensor={item} key={`setting-item-${index}`} />;
      })}
    </View>
  );
};

export default Settings;

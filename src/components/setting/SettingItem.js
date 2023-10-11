import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import Styles from "./Styles";

const SettingItem = ({ setting, onSetting }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  if (isEnabled) {
    onSetting(setting.label);
  } else {
    onSetting(false);
  }
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={Styles.settingItem}>
      <Text>{`Trạng thái của ${setting.label}`}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SettingItem;

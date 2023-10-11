import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import Styles from "./Styles";

const SensorItem = ({ sensor }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={Styles.sensorItem}>
      <Text>{`Kích hoạt cảm biến ${sensor.label}`}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#17f935" }}
        thumbColor={isEnabled ? "#f9a117" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SensorItem;

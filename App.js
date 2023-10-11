import { useState } from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./src/pages/login/Login";
import Remote from "./src/pages/remote/Remote";
import Settings from "./src/pages/settings/Settings";
import Information from "./src/pages/information/Information";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Nhà" component={Remote} />
      <Tab.Screen name="Cài đặt" component={Settings} />
      <Tab.Screen name="Thông tin" component={Information} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = (data) => {
    const { userName, password } = data;
    console.log({ userName, password });
    if (userName === "admin" && password === "12345") {
      console.log("Login successfully");
      setIsLogin(true);
    } else {
      console.log("Login failed");
    }
  };
  if (!isLogin) {
    return (
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <Login onLogin={handleLogin} />
      </ImageBackground>
    );
  } else {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
  },
});

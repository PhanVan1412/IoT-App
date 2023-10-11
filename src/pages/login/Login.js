import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";
import styles from "./Styles";

const Login = ({ onLogin }) => {
  const [loginInfor, setLoginInfor] = useState({
    userName: "",
    password: "",
  });

  return (
    <View style={styles.login}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../../assets/Logo.png")}
        />
        <Text style={styles.title}>Welcome to Smart IoT App</Text>
      </View>
      <SafeAreaView style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setLoginInfor((prev) => ({ ...prev, userName: text }))
          }
          value={loginInfor.userName}
          placeholder="Tên đăng nhập..."
          textContentType="password"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) =>
            setLoginInfor((prev) => ({ ...prev, password: text }))
          }
          value={loginInfor.password}
          placeholder="Mật khẩu ..."
          textContentType="password"
        />
      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => onLogin(loginInfor)}
          title="Đăng nhập"
          color="blue"
          style={styles.button}
        />
        <Text style={styles.missPw}>Quên mật khẩu?</Text>
      </View>
    </View>
  );
};

export default Login;

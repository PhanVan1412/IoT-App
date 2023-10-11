import { StyleSheet } from "react-native";

export default Styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  demo: {
    color: "red",
    fontSize: 30,
  },
  header: {
    width: "100%",
    flex: 6,
    flexDirection: "column",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 50,
    color: "blue",
  },
  inputContainer: {
    flex: 3,
    gap: 15,
  },
  input: {
    width: 300,
    height: 40,
    margin: 5,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    padding: 10,
  },
  buttonContainer: {
    flex: 2,
    gap: 10,
  },
  button: {
    width: 200,
    padding: 20,
  },
});

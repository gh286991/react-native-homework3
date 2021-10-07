import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Background from "./assets/background.png";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const connectBlock = (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <View style={{ flex: 1, height: 1, backgroundColor: "#DDDDDD" }} />
    <View>
      <Text style={{ padding: 10, textAlign: "center", color: "#AAAAAA" }}>
        or connect with
      </Text>
    </View>
    <View style={{ flex: 1, height: 1, backgroundColor: "#DDDDDD" }} />
  </View>
);

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <ImageBackground
          source={Background}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.loginContainer}>
            <Text style={styles.login}>Login</Text>
          </View>
          <View style={styles.dataInputContainer}>
            <Input
              containerStyle={styles.inputContainer}
              inputContainerStyle={styles.input}
              leftIcon={
                <Icon
                  name="account-outline"
                  size={30}
                  style={{ marginRight: 20 }}
                />
              }
              leftIconContainerStyle={{}}
              placeholder="User"
            />

            <Input
              containerStyle={styles.inputContainer}
              inputContainerStyle={styles.input}
              leftIcon={
                <Icon name="lock" size={30} style={{ marginRight: 20 }} />
              }
              leftIconContainerStyle={{}}
              placeholder="Password"
            />
          </View>
          <View style={styles.buttonBlock}>
            <TouchableHighlight
              style={styles.buttonContainer}
              underlayColor={"#66B3FF"}
              onPress={() => {}}
            >
              <Text style={styles.buttonText}> Login</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.forgetBlock}>
            <TouchableOpacity style={styles.forgetContainer} onPress={() => {}}>
              <Text style={styles.forgetText}> Forget your password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.blankBlock}></View>

          <View style={styles.thirdPartBlock}>
            {connectBlock}

            <View style={styles.thirdPartButtonContainer}>
              <TouchableHighlight
                style={{
                  ...styles.buttonContainer,
                  ...{
                    backgroundColor: "#0066FF",
                    height: 30,
                    margin: 10,
                  },
                }}
                underlayColor={"#66B3FF"}
                onPress={() => {}}
              >
                <Text style={{ color: "white" }}>Facebook</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{
                  ...styles.buttonContainer,
                  ...{
                    backgroundColor: "#C63300",
                    height: 30,
                    margin: 10,
                  },
                }}
                underlayColor={"#66B3FF"}
                onPress={() => {}}
              >
                <Text style={{ color: "white" }}>Google</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.singUpContainer}>
              <Text style={styles.singUpNote}>Don't have account?</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.singUpText}>Sing up!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomColor: "white",
    margin: 0,
  },
  inputContainer: {
    width: "85%",
    marginTop: 0,
    marginBottom: 0,
  },
  login: {
    color: "white",
    fontSize: 40,
    fontWeight: "700",
  },
  loginContainer: {
    flex: 0.2,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 30,
  },
  dataInputContainer: {
    flex: 0.2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonBlock: {
    flex: 0.1,
    width: "80%",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#0080FF",
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomColor: "white",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 99,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#E0E0E0",
    shadowOpacity: 0.8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  forgetBlock: {
    width: "80%",
    flex: 0.07,
    alignItems: "center",
    justifyContent: "center",
  },
  forgetContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  blankBlock: {
    flex: 0.3,
  },
  thirdPartBlock: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 20,
    width: "100%",
  },
  forgetText: {
    fontSize: 12,
    color: "white",
  },
  thirdPartButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  singUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  singUpText: {
    color: "#0066FF",
    margin: 6,
  },
  singUpNote: {
    color: "#AAAAAA",
  },
});

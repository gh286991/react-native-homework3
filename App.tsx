import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import Background from "./assets/background.png";
import { Input, Overlay } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

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

const Modal = (props: { isVisible: boolean; handelClick: () => void }) => {
  const { isVisible, handelClick } = props;
  return (
    <Overlay
      isVisible={isVisible}
      onBackdropPress={handelClick}
      overlayStyle={{ width: "60%", borderRadius: 10 }}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.modalText}>Login Success</Text>
      </View>
      <View style={{ justifyContent:'center' , alignItems: "center",}}>
        <TouchableHighlight
          style={ { ...styles.buttonContainer , width: '60%'}}
          underlayColor={"#66B3FF"}
          onPress={handelClick}
        >
          <Text style={ { color:'white' , fontSize:18, fontWeight: '600' }}>Confirm</Text>
        </TouchableHighlight>
      </View>
    </Overlay>
  );
};

const rightPassword = "123456";

const toastConfig = {
  success: (props: { text1: string }) => {
    const { text1 } = props;
    return (
      <BaseToast
        text1NumberOfLines={0}
        text2NumberOfLines={0}
        {...props}
        style={{ borderLeftColor: "red" }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: "400",
        }}
        text1={text1}
      />
    );
  },

  error: (props: { text1: string }) => (
    <ErrorToast
      text1NumberOfLines={0}
      text2NumberOfLines={0}
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
};

export default function App() {
  const [passWord, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<undefined | boolean>(true);

  const showMessage = (props: {
    type: "error" | "success";
    message?: string;
  }) => {
    const { type, message } = props;
    const renderText = () => {
      if (type === "success" && !message) return "登入成功";
      if (type === "error" && !message) return "尚未建置";
    };
    Toast.show({
      type,
      text1: message ? message : renderText(),
    });
  };

  const handelClickLogin = () => {
    if (!userName && !userName) {
      return showMessage({
        type: "error",
        message: "請輸入使用者和密碼",
      });
    }

    if (!userName) {
      return showMessage({
        type: "error",
        message: "請輸入使用者",
      });
    }
    if (!passWord) {
      return showMessage({
        type: "error",
        message: "請輸入密碼",
      });
    }
    if (passWord === rightPassword) {
      setIsShowModal(true);
    } else setIsCorrect(false);
  };

  return (
    <>
      <StatusBar style="auto" />
      <Modal
        isVisible={isShowModal}
        handelClick={() => setIsShowModal(false)}
      ></Modal>
      <View style={styles.container}>
        <ImageBackground
          source={Background}
          resizeMode="cover"
          style={styles.image}
        >
          <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />

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
              placeholder="Username"
              onChangeText={(value) => {
                setUserName(value);
              }}
            />

            <Input
              containerStyle={styles.inputContainer}
              inputContainerStyle={styles.input}
              leftIcon={
                <Icon name="lock" size={30} style={{ marginRight: 20 }} />
              }
              leftIconContainerStyle={{}}
              placeholder="Password"
              onChangeText={(value) => {
                setPassword(value);
              }}
              secureTextEntry={true}
              errorStyle={{ color: "red" }}
              errorMessage={isCorrect ? "" : "Wrong password please try again"}
            />
          </View>
          <View style={styles.buttonBlock}>
            <TouchableHighlight
              style={styles.buttonContainer}
              underlayColor={"#66B3FF"}
              onPress={() => {
                handelClickLogin();
              }}
            >
              <Text style={styles.buttonText}> Login</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.forgetBlock}>
            <TouchableOpacity
              style={styles.forgetContainer}
              onPress={() => {
                showMessage({
                  type: "error",
                });
              }}
            >
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
                  ...styles.socialButton,
                  ...{
                    backgroundColor: "#0066FF",
                  },
                }}
                underlayColor={"#66B3FF"}
                onPress={() => {
                  showMessage({
                    type: "error",
                  });
                }}
              >
                <>
                  <Icon
                    name="facebook"
                    size={20}
                    style={{ color: "white", marginRight: 10 }}
                  />
                  <Text style={{ color: "white" }}>Facebook</Text>
                </>
              </TouchableHighlight>
              <TouchableHighlight
                style={{
                  ...styles.buttonContainer,
                  ...styles.socialButton,
                  ...{
                    backgroundColor: "#C63300",
                  },
                }}
                underlayColor={"#66B3FF"}
                onPress={() => {
                  showMessage({
                    type: "error",
                  });
                }}
              >
                <>
                  <Icon
                    name="google"
                    size={20}
                    style={{ color: "white", marginRight: 10 }}
                  />
                  <Text style={{ color: "white" }}>Google</Text>
                </>
              </TouchableHighlight>
            </View>

            <View style={styles.singUpContainer}>
              <Text style={styles.singUpNote}>Don't have account?</Text>
              <TouchableOpacity
                onPress={() => {
                  showMessage({
                    type: "error",
                  });
                }}
              >
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
  socialButton: {
    height: 30,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalContainer: {
    width: "100%",
    height: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    fontSize: 24,
    fontWeight: "600",
  },
});

import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTogglePasswordVisibility } from "./hooks/useTogglePasswordVisibility";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import { AuthContext } from "../auth/Authcontext";
import { AuthProvider } from "../auth/Authcontext";

const SizeWidth = Dimensions.get("window").width;
const SizeHeight = Dimensions.get("window").height;

const Login = () => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const navigation = useNavigation();
  const {login} = useContext(AuthContext);
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/images/loginpage.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={{ width: SizeWidth, height: SizeHeight }}>
            <View style={styles.container}>
              <View
                style={{
                  width: "15%",
                  height: 150,
                  // backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image source={require("../assets/images/logotype.png")} />
              </View>
              <View style={{ alignItems: "flex-start", width: "100%" }}>
                <Text style={styles.logo}>Welcome back!</Text>
              </View>
              <View style={styles.inputView}>
                <TextInput
                  // secureTextEntry={true}
                  style={styles.inputText}
                  name="username"
                  value={username}
                  placeholder="Username"
                  placeholderTextColor="#808080"
                  onChangeText={(text) => setUsername(text)}
                />
              </View>
              <View style={styles.inputViewpw}>
                <TextInput
                  name="password"
                  placeholder="Password"
                  placeholderTextColor="#808080"
                  textContentType="newPassword"
                  secureTextEntry={passwordVisibility}
                  value={password}
                  enablesReturnKeyAutomatically
                  onChangeText={(text) => setPassword(text)}
                />
                <Pressable onPress={handlePasswordVisibility}>
                  <MaterialCommunityIcons
                    name={rightIcon}
                    size={22}
                    color="#232323"
                  />
                </Pressable>
              </View>
              <View style={{ alignItems: "flex-end", width: "100%" }}>
                <TouchableOpacity>
                  <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
              <TouchableOpacity onPress={() => {
                  navigation.navigate("BottomStack")
                  login(username, password);
                }}
              style={styles.loginBtn}>
                <Text style={styles.loginText}>Sign Up</Text>
              </TouchableOpacity>
              </TouchableOpacity>
              {/* <Button
                title="Login"
                onPress={() => {
                  navigation.navigate("BottomStack")
                  login(email, password);
                }}
              /> */}
              <View style={{ paddingTop: 230, flexDirection: "row" }}>
                <Text style={styles.buttomText}>Dont't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup", {
                    // data: kelas,
                  })}>
                  <Text style={styles.signText}>Sign up here</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 30,
  },
  logo: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    marginBottom: 40,
  },
  inputView: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 10,
  },
  inputViewpw: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    height: 50,
    // marginBottom: 20,
    justifyContent: "space-between",
    padding: 13,
    flexDirection: "row",
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "#191970",
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
  },
  loginBtn: {
    width: 100,
    backgroundColor: "blue",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  signText: {
    color: "blue",
  },
  buttomText: {
    color: "grey",
  },
  loginText: {
    color: "white",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
export default Login;

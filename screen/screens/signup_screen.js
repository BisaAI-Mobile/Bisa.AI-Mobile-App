import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
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
import { useTogglePasswordVisibility, useTogglePasswordVisibility2 } from "./hooks/useTogglePasswordVisibility";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native";
import { AuthContext } from "../auth/Authcontext";
const SizeWidth = Dimensions.get("window").width;
const SizeHeight = Dimensions.get("window").height;

const Signup = () => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } =
    useTogglePasswordVisibility2();
  const navigation = useNavigation();
  // const [username, setUsername] = useState("");
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const agree = 1 ;
  const [cpassword, setCpassword] = useState("");
  const {register} = useContext(AuthContext);
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
                <Text style={styles.logo}>Create new account</Text>
              </View>

              {/* <View style={styles.inputView}>
                <TextInput
                  style={styles.inputText}
                  name="username"
                  value={username}
                  placeholder="Username"
                  placeholderTextColor="#808080"
                  onChangeText={(text) => setUsername(text)}
                />
              </View> */}
              <View style={styles.inputView}>
                <TextInput
                  // secureTextEntry
                  style={styles.inputText}
                  name="name"
                  value={name}
                  placeholder="Name"
                  placeholderTextColor="#808080"
                  onChangeText={(text) => setName(text)}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.inputText}
                  name="email"
                  value={email}
                  placeholder="Email"
                  placeholderTextColor="#808080"
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View style={styles.inputPw}>
                <TextInput
                  // secureTextEntry
                  // style={styles.inputText}
                  // placeholder="Password"
                  // placeholderTextColor="#808080"
                  // onChangeText={(text) => this.setState({ password: text })}
                  name="password"
                  placeholder="Password"
                  placeholderTextColor="#808080"
                  // textContentType="newPassword"
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
              {/* <View style={styles.inputCpw}>
                <TextInput
                  // secureTextEntry
                  // style={styles.inputText}
                  // placeholder="Confirm Password"
                  // placeholderTextColor="#808080"
                  // onChangeText={(text) => this.setState({ password: text })}
                  name="cpassword"
                  placeholder="Confirm Password"
                  placeholderTextColor="#808080"
                  // textContentType="Cpassword"
                  secureTextEntry={passwordVisibility2}
                  value={cpassword}
                  enablesReturnKeyAutomatically
                  onChangeText={(text) => setCpassword(text)}
                />
                <Pressable onPress={handlePasswordVisibility2}>
                  <MaterialCommunityIcons
                    name={rightIcon2}
                    size={22}
                    color="#232323"
                  />
                </Pressable>
              </View> */}
              <TouchableOpacity onPress={() => register(name, email, password, agree)}
              style={styles.loginBtn}>
                <Text style={styles.loginText}>Sign Up</Text>
              </TouchableOpacity>
              <View style={{ paddingTop: 70, flexDirection: "row" }}>
                <Text style={styles.buttomText}>Have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.signText}>Sign in here</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* <Text>This is a Login Screen</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
              <Text>Don’t have an account? Sign up here</Text>
          </TouchableOpacity> */}
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
  inputPw: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: "space-between",
    padding: 13,
    flexDirection: "row",
  },
  inputCpw: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
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
  },
  loginBtn: {
    width: "100%",
    backgroundColor: "blue",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
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

export default Signup;

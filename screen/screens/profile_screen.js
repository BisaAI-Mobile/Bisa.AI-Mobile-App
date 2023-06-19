import React, { useState, useContext, useEffect } from "react";
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
  ScrollView,
  Button,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";
import UploadImage from "./hooks/upload_image";
import { AuthContext } from "../auth/Authcontext";
import DatePicker from "react-native-date-picker";
// import DatePicker from "react-native-datepicker";
// import DateTimePicker from "@react-native-community/datetimepicker";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

const SizeWidth = Dimensions.get("window").width;
const SizeHeight = Dimensions.get("window").height;

const Profile = () => {
  const navigation = useNavigation();
  const [dataProfile, setData] = useState([]);
  const { userInfo } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const url = "https://gate.bisaai.id/elearning2/users/get_profile";
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `JWT ${userInfo.access_token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.log("error", error));
  });
  // const navigation = useNavigation();
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <ImageBackground
            source={require("../assets/images/editprofile.png")}
            resizeMode="cover"
            style={styles.image}
          >
            {dataProfile.map((datProf) => (
              <View style={{ width: SizeWidth }}>
                <View style={styles.container}>
                  <View
                    style={{
                      // width: "15%",
                      height: 64,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{ width: 45, height: 47 }}
                      source={require("../assets/images/logosplash1.png")}
                    />
                  </View>
                  <UploadImage />

                  <View style={{ alignItems: "center", height: 50 }}>
                    <Text style={styles.logo}>
                      {/* [{datProf.email}] */}
                      {datProf.name}
                    </Text>
                  </View>

                  {/* {dataProfile.map((datProf) => (
            <View>
              <Text>[{datProf.email}] {datProf.name}</Text>
            </View>
           ))} */}
                  <TouchableOpacity
                    style={{
                      height: 30,
                    }}
                    onPress={() =>
                      navigation.navigate("Editprofile", { dataProf: datProf })
                    }
                  >
                    <View style={styles.shadow}>
                      <Text style={styles.signText}>Edit Profile</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={{ paddingTop: 18, width: SizeWidth }}>
                    <View style={styles.textHardcod}>
                      <Image
                        style={{ width: 27, height: 20 }}
                        source={require("../assets/images/email.png")}
                      />
                      <Text style={styles.textpaddingHC}>{datProf.email}</Text>
                    </View>
                    <View style={styles.textHardcod}>
                      <Image
                        style={styles.imageStyle}
                        source={require("../assets/images/jkelamin.png")}
                      />
                      {datProf.gender==1?<Text style={styles.textpaddingHC}>Laki Laki</Text>:
                      <Text style={styles.textpaddingHC}>Perempuan</Text>}
                    </View>
                    <View style={styles.textHardcod}>
                      <Image
                        style={styles.imageStyle}
                        source={require("../assets/images/tlahir.png")}
                      />
                      <Text style={styles.textpaddingHC}>{datProf.date_of_birth}</Text>
                    </View>
                    <View style={styles.textHardcod}>
                      <Image
                        style={styles.imageStyle}
                        source={require("../assets/images/telepon.png")}
                      />
                      <Text style={styles.textpaddingHC}>{datProf.phone}</Text>
                    </View>
                    <View style={styles.textHardcod}>
                      <Image
                        style={styles.imageStyle}
                        source={require("../assets/images/linkedin.png")}
                      />
                      <Text style={styles.textpaddingHC}>Linkedln</Text>
                    </View>
                    <View style={styles.textHardcod}>
                      <Image
                        style={styles.imageStyle}
                        source={require("../assets/images/ig.png")}
                      />
                      <Text style={styles.textpaddingHC}>Instagramm</Text>
                    </View>
                    <View style={styles.textHardcod}>
                      <Image
                        style={styles.imageStyle}
                        source={require("../assets/images/alamat.png")}
                      />
                      <Text style={styles.textpaddingHC}>{datProf.address}</Text>
                    </View>
                    <View style={styles.textHardcod}>
                      <Image
                        style={styles.imageStyle}
                        source={require("../assets/images/rkerja.png")}
                      />
                      <Text style={styles.textpaddingHC}>{datProf.educational_background}</Text>
                    </View>
                  </View>
                </View>
                <View style={{ paddingTop: 50 }}>
                  <Text>Account</Text>
                  <TouchableOpacity onPress={() => {
                  navigation.navigate("Login")
                  logout();
                }}>
                    <View style={styles.textHardcod}>
                      <Image
                        style={styles.imageStyle}
                        source={require("../../assets/images/Vector.png")}
                      />
                      <Text style={styles.textpaddingHC}>Log Out</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ImageBackground>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    // padding: 30,
    // paddingTop:"100%",
    // paddingBottom: 30,
  },
  shadow: {
    // marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 106,
    height: 31,
    backgroundColor: "white",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    borderRadius: 5,
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
  textpaddingHC: {
    paddingLeft: 15,
    color: "grey",
  },
  textHardcod: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    flexDirection: "row",
    width: "100%",
    height: 50,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white",
    // shadowColor: "#000",
    justifyContent: "flex-start",
    padding: 15,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // borderRadius: 10,
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    elevation: 2,
  },
  textEp: {
    padding: 5,
    alignItems: "flex-start",
  },
  logo: {
    fontWeight: "bold",
    width: "100%",
    height: 200,
    fontWeight: "400",
    fontSize: 28,
    color: "black",
    marginTop: 6,
    paddingBottom: 40,
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
  inputRadio: {
    width: "100%",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: "space-between",
    padding: 13,
    flexDirection: "row",
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
  inputBigsize: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    height: 100,
    // flexDirection:'column',
    marginBottom: 20,
    alignItems: "flex-start",
    paddingLeft: 13,
    paddingRight: 13,
    justifyContent: "flex-start",
    // padding:12
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
    // paddingBottom:18,
    color: "black",
  },
  buttomText: {
    color: "grey",
  },
  loginText: {
    color: "white",
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
  },
  imageStyle: {
    // flexDirection: "row",
    // width: "100%",
    // height: 50,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "white",
    // shadowColor: "#000",
    // justifyContent: "flex-start",
    // padding: 15,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // borderRadius: 10,
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 2,
    width: 27,
    height: 25,
  },
});

export default Profile;

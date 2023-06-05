import React, { useState } from "react";
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

const Editprofile = () => {
  // const [date, setDate] = useState(new Date());
  // const [mode, setMode] = useState("date");
  // const [show, setShow] = useState(false);
  // const [text, setText] = useState("empty");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  // const onChange = (event, selectedDate) => {
  //   const curretntDate = selectedDate || date;
  //   setShow(Platform.Android === "android");
  //   setDate(curretntDate);

  //   let tempDate = new Date(curretntDate);
  //   let fDate =
  //     tempDate.getDate() +
  //     "-" +
  //     (tempDate.getMonth() + 1) +
  //     "-" +
  //     tempDate.getFullYear();
  //   setText(fDate + "\n" + fTime);

  //   console.log(fDate + "(" + fTime + ")");
  // };

  // const showMode = (curretntDate) => {
  //   setShow(true);
  //   setMode(curretntDate);
  // };
  // const [date, setDate] = useState(getCurrentDate);
  // const getCurrentDate = () => {
  //   var date = new Date().getDate();
  //   var month = new Date().getMonth() + 1;
  //   var year = new Date().getFullYear();

  //   //Alert.alert(date + '-' + month + '-' + year);
  //   // You can turn it in to your desired format
  //   return date + "-" + month + "-" + year; //format: d-m-y;
  // };
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notelp, setNotelp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [rpekerjaan, setRpekerjaan] = useState("");
  const [gender, setGender] = useState(0);
  var radio_props = [
    { label: "Laki-Laki   ", value: 0 },
    { label: "Perempuan", value: 1 },
  ];
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <ImageBackground
            source={require("../assets/images/editprofile.png")}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={{ width: SizeWidth }}>
              <View style={styles.container}>
                <View
                  style={{
                    width: "15%",
                    height: 64,
                    // backgroundColor: "red",
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
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.logo}>Nama User</Text>
                </View>
                <View style={{ alignItems: "flex-start", width: "100%" }}>
                  <Text style={styles.textEp}>Nama</Text>
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.inputText}
                    name="username"
                    value={username}
                    placeholder="input your name"
                    placeholderTextColor="#808080"
                    onChangeText={(text) => setUsername(text)}
                  />
                </View>
                <View style={{ alignItems: "flex-start", width: "100%" }}>
                  <Text style={styles.textEp}>Email</Text>
                </View>
                <View style={styles.inputView}>
                  <TextInput
                    style={styles.inputText}
                    name="email"
                    value={email}
                    placeholder="bisaai@gmail.com"
                    placeholderTextColor="#808080"
                    onChangeText={(text) => setName(text)}
                  />
                </View>
                <View style={{ alignItems: "flex-start", width: "100%" }}>
                  <Text style={styles.textEp}>Tanggal Lahir</Text>
                </View>
                <View style={styles.inputView}>
                  {/* <TextInput
                    style={styles.inputText}
                    name="email"
                    value={email}
                    placeholder="Email"
                    placeholderTextColor="#808080"
                    onChangeText={(text) => setEmail(text)}
                  /> */}
                  {/* <DatePicker
                    style={styles.datePickerStyle}
                    date={date} // Initial date from state
                    mode="date" // The enum of date, datetime and time
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-01-2016"
                    maxDate="01-01-2019"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        //display: 'none',
                        position: "absolute",
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                      },
                      dateInput: {
                        marginLeft: 36,
                      },
                    }}
                    onDateChange={(date) => {
                      setDate(date);
                    }}
                  /> */}

                  <Button title="Open" onPress={() => setOpen(true)} />
                  <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                      setOpen(false);
                      setDate(date);
                    }}
                    onCancel={() => {
                      setOpen(false);
                    }}
                  />
                  {/* {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode={mode}
                      is24Hour={true}
                      onChange={onChange}
                    />
                  )} */}

                  {/* <DatePicker
                      modal
                      open={open}
                      date={date}
                      onConfirm={(date) => {
                        setOpen(false);
                        setDate(date);
                      }}
                      onCancel={() => {
                        setOpen(false);
                      }}
                    /> */}
                </View>
                <View style={{ alignItems: "flex-start", width: "100%" }}>
                  <Text style={styles.textEp}>Jenis Kelamin</Text>
                </View>
                <View style={styles.inputRadio}>
                  {/* <TextInput
                    name="password"
                    placeholder="Password"
                    placeholderTextColor="#808080"
                    secureTextEntry={passwordVisibility}
                    value={password}
                    enablesReturnKeyAutomatically
                    onChangeText={(text) => setPassword(text)}
                  /> */}
                  <RadioForm
                    style={{ height: 100 }}
                    uncheckedColor={"#F0F0F0"}
                    color={"black"}
                    labelColor={"black"}
                    selectedButtonColor={"black"}
                    buttonColor={"black"}
                    radio_props={radio_props}
                    value={gender}
                    formHorizontal={true}
                    onPress={(gender) => setGender(gender)}
                  />
                </View>
                <View style={{ alignItems: "flex-start", width: "100%" }}>
                  <Text style={styles.textEp}>Telepon</Text>
                </View>
                <View style={styles.inputCpw}>
                  <TextInput
                    name="notelp"
                    placeholder="0812345678"
                    placeholderTextColor="#808080"
                    keyboardType="number-pad"
                    enablesReturnKeyAutomatically
                    onChangeText={(text) => setNotelp(text)}
                  />
                </View>
                <View style={{ alignItems: "flex-start", width: "100%" }}>
                  <Text style={styles.textEp}>Alamat</Text>
                </View>
                <View style={styles.inputBigsize}>
                  <TextInput
                    name="alamat"
                    placeholder="Alamat"
                    placeholderTextColor="#808080"
                    enablesReturnKeyAutomatically
                    multiline={true}
                    numberOfLines={10}
                    onChangeText={(text) => setAlamat(text)}
                  />
                </View>
                <View style={{ alignItems: "flex-start", width: "100%" }}>
                  <Text style={styles.textEp}>Riwayat Pekerjaan</Text>
                </View>
                <View style={styles.inputBigsize}>
                  <TextInput
                    name="rpekerjaan"
                    placeholder="Riwayat Pekerjaan"
                    placeholderTextColor="#808080"
                    enablesReturnKeyAutomatically
                    multiline={true}
                    numberOfLines={10}
                    onChangeText={(text) => setRpekerjaan(text)}
                  />
                </View>
                <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={() => navigation.navigate("TopNavbar")}
                >
                  <Text style={styles.loginText}>Save</Text>
                </TouchableOpacity>
                {/* <View style={{ paddingTop: 70, flexDirection: "row" }}>
                  <Text style={styles.buttomText}>Have an account? </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={styles.signText}>Sign in here</Text>
                  </TouchableOpacity>
                </View> */}
              </View>
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "yellow",
    alignItems: "center",
    // justifyContent: "flex-start",
    // padding: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  textEp: {
    padding: 5,
    alignItems: "flex-start",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 28,
    color: "black",
    marginTop: 6,
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

export default Editprofile;

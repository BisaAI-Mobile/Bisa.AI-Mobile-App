import React, { Component, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Carousel } from "react-native-auto-carousel";
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import { Dimensions, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect } from "react";
import TopCourse from "./components/topCourse";
import NavbarSertif from "./TabSertif";
import { AuthContext } from "./auth/Authcontext";
import MenuButton from "./components/menuButton";
const DEVICE_WIDTH = Dimensions.get("window").width;
// const IMAGES = ['./images/3.png','../images/2.png', '../images/1.png']
const GAMBAR = [
  { uri: require("../assets/images/1.png") },
  { uri: require("../assets/images/2.png") },
  { uri: require("../assets/images/3.png") },
  { uri: require("../assets/images/4.png") },
];
const reccourse = [
  {
    uri: require("../assets/images/course.png"),
    nama: "Data Science",
    stars: "5,0",
    silabus: "6",
  },
  {
    uri: require("../assets/images/course.png"),
    nama: "Data Science",
    stars: "5,0",
    silabus: "6",
  },
  {
    uri: require("../assets/images/course.png"),
    nama: "Data Science",
    stars: "5,0",
    silabus: "6",
  },
  {
    uri: require("../assets/images/course.png"),
    nama: "Data Science",
    stars: "5,0",
    silabus: "6",
  },
];
const recmaster = [
  {
    uri: require("../assets/images/master.png"),
    nama: "Data Science",
    stars: "5,0",
    silabus: "6",
  },
  {
    uri: require("../assets/images/master.png"),
    nama: "Data Science",
    stars: "5,0",
    silabus: "6",
  },
  {
    uri: require("../assets/images/master.png"),
    nama: "Data Science",
    stars: "5,0",
    silabus: "6",
  },
  {
    uri: require("../assets/images/master.png"),
    nama: "Data Science",
    stars: "5,0",
    silabus: "6",
  },
];

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  // const [token, setToken] = useState(null);
  const url ="https://gate.bisaai.id/elearning2/course/get_course?is_aktif=1&is_free=1&order_by_number_of_student=desc&q=";
  const url1='https://gate.bisaai.id/elearning2/course/get_course?is_aktif=1&is_free=0&is_ojt=2&ORDER_BY_ID DESC=desc';
  const {login} = useContext(AuthContext);
  const {userInfo} = useContext(AuthContext);
  // const {getToken} = useContext(AuthContext)
  // const tokenn=  AsyncStorage.getItem('token')
  //   useEffect(async() => {
  // //   const readItemFromStorage = async () => {
  // //   const userToken = await AsyncStorage.getItem("token")
  // //   setToken(userToken);
  // // };
  //   // let token = await AsyncStorage.getItem('token')
  //   // let tokenFix = JSON.parse(token)
  //   myHeaders.append("Content-Type", "application/json");
  //   myHeaders.append("Authorization", `JWT ${userInfo.access_token}`);

  //   var requestOptions = {
  //     method: 'GET',
  //     headers: myHeaders,
  //     redirect: 'follow'
  //   };
  //   fetch(url, requestOptions)
  //     .then((response) => response.json())
  //     .then((json) => 
  //     setData(json.data))
  //     .catch((error) => console.log("error", error));
  //   // [searchQuery];
  // });
  // const readItemFromStorage = async () => {
  //   const userToken = await AsyncStorage.getItem("token")
  //   setToken(userToken);
  // };
  //BENAR
  // useEffect(() => {
  //   var myHeaders = new Headers();
  //   // var token = window.sessionStorage.getItem("token");
    
  //   myHeaders.append("Content-Type", "application/json");
  //   myHeaders.append(
  //     "Authorization",
  //     `JWT ${userInfo.access_token}`
  //   );

  //   var requestOptions = {
  //     method: "GET",
  //     headers: myHeaders,
  //     redirect: "follow",
  //   };
  //   fetch(url1, requestOptions)
  //     .then((response) => response.json())
  //     .then((json) => 
  //     setData(json.data))
  //     .catch((error) => console.log("error", error));
  //   // [searchQuery];
  // });
  //BENAR
  return (
    <ScrollView style={{ backgroundColor: "#f8f8ff" }}>
      <LinearGradient
        colors={["#87cefa", "#f8f8ff"]}
        style={styles.linearGradient}
      >
        <View style={{ flexDirection: "column", justifyContent: "center" }}>
          <View
            style={{
              height: 150,
              flexDirection: "row",
              padding: 40,
              paddingTop: 55,
            }}
          >
            <Image
              source={require("../assets/images/logo.png")}
              style={{ height: 49, width: 50 }}
            />
            <View style={{ paddingLeft: 15 }}>
              <Text style={styles.textWelcome}>Selamat Datang!</Text>
              <Text style={styles.textUser}>{userInfo.name}</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.containercarousel}>
        <Carousel
          data={GAMBAR}
          renderItem={(item) => (
            <Image key={item} source={item.uri} style={styles.gambar} />
          )}
        />
      </View>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View
            style={{
              width: "100%",
              height: 130,
              backgroundColor: "#f8f8ff",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                padding: 13,
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  padding: 13,
                  justifyContent: "space-around",
                  height: 130,
                }}
              >
                <Pressable
                  style={styles.buttonShadow}
                  onPress={() => navigation.navigate("free")}
                >
                  <View style={styles.buttonContainer}>
                    <Image source={require("../assets/images/button1.png")} />
                    <Text style={styles.text}>Free Course</Text>
                  </View>
                </Pressable>
                <Pressable style={styles.buttonShadow}>
                  <View style={styles.buttonContainer}>
                    <Image source={require("../assets/images/button2.png")} />
                    <Text style={styles.text}>Master Class+OJT</Text>
                  </View>
                </Pressable>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  padding: 13,
                  justifyContent: "space-around",
                  height: 130,
                }}
              >
                <Pressable style={styles.buttonShadow} onPress={() => navigation.navigate("sertif")}>
                  <View
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate("sertif")}
                  >
                    <Image source={require("../assets/images/button3.png")} />
                    <Text style={styles.text}>Certificate</Text>
                  </View>
                </Pressable>
                <Pressable style={styles.buttonShadow}>
                  <View style={styles.buttonContainer}>
                    <Image source={require("../assets/images/button4.png")} />
                    <Text style={styles.text}>Learning Path</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingLeft: 30,
            paddingBottom: 10,
            paddingTop: 10,
            paddingRight: 35,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.text2}>Free Course</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("free");
              }}
            >
              <Text
                style={{ color: `#1e90ff`, fontWeight: "bold", fontSize: 16 }}
              >
                Lainnya
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 30,
                paddingLeft: 20,
                backgroundColor: "#f8f8ff",
                height: 150,
              }}
            >
              {data.map((course, index) => {
                return <TopCourse kelas={course} key={index} />;
              })}
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            paddingLeft: 30,
            paddingBottom: 10,
            paddingTop: 10,
            paddingRight: 35,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.text2}>Master Class</Text>
            <Pressable
              onPress={() => {
                navigation.navigate("master");
              }}
            >
              <Text
                style={{ color: `#1e90ff`, fontWeight: "bold", fontSize: 16 }}
              >
                Lainnya
              </Text>
            </Pressable>
          </View>
        </View>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 30,
                paddingLeft: 20,
                backgroundColor: "#f8f8ff",
                height: 150,
              }}
            >
              {/* {data1.map((course) => {
                return <TopCourse kelas={course} />;
              })} */}
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 5,
    height: 170,
    width: DEVICE_WIDTH,
  },
  text2: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  text: {
    fontSize: 13,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  textWelcome: {
    fontSize: 28,
    lineHeight: 33,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  textUser: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  // container: {
  //   backgroundColor: 'grey',
  //   height:80
  // },
  containercarousel: {
    height: 240,
    backgroundColor: "#f8f8ff",
  },
  gambar: {
    width: DEVICE_WIDTH,
    backgroundColor: "#f8f8ff",
    height: 210,
  },
  buttonShadow: {
    borderRadius: 8,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    gap: 7,
    height: 40,
    padding: 9,
    flexDirection: "row",
    // justifyContent:'center'
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "blue",
    height: 200,
  },
  fixToText2: {
    flexDirection: "column",
    backgroundColor: "red",
    height: 200,
    flexWrap: "wrap",
  },
});

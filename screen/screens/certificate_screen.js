// React Native Tab
// https://aboutreact.com/react-native-tab/

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";

import Info from "./MyFreeCourse/info";
import Silabus from "./MyFreeCourse/silabus";
import Tugas from "./MyFreeCourse/tugas";
import Diskusi from "./MyFreeCourse/diskusi";
import Description from "./MyFreeCourse/description";
import Course from "./MyFreeCourse/courses";
import RenderHtml from "react-native-render-html";
import { createContext } from "react";
// import Diskusi from "./componen/diskusi";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
// import MyFreeCourse from '../screen/MyFreeCourse';
// import MyMasterClass from '../screen/MyLearningPath';
// import MyLearningPath from '../screen/MyMasterClass';
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
export function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#a9a9a9",
        // tabBarInactiveTintColor: '#F8F8F8',
        tabBarStyle: {
          backgroundColor: "#f8f8ff",
          height: 100,
          justifyContent: "center",
        },
        tabBarLabelStyle: {
          // position: 'absolute',
          // backgroundColor:'white',
          textAlign: "center",
          fontWeight: "bold",
          // color:'white',
          fontSize: 12,
          // zIndex: '1'
        },

        tabBarIndicatorStyle: {
          backgroundColor: "#00bfff",
          height: 60,
          margin: 10,
          // width: 120,
          marginTop: 30,
          borderRadius: 20,
          // zIndex: '3'
        },
        // tabBarAccessibilityLabel:{
        //   backgroundColor:'red'
        // },
        tabBarIndicatorContainerStyle: {
          // backgroundColor:'white'
        },
        // tabBarGap: 10,
        tabBarItemStyle: {
          // position: 'absolute',
          // width:'100%',
          margin: 10,
          marginTop: 30,
          // backgroundColor:'white',
          // height:40,
          // width:100,
          borderRadius: 10,
          // zIndex: '2'
        },
      }}
    >
      <Tab.Screen
        name="Description"
        component={Description}
        options={{
          tabBarLabel: "Description",
        }}
      />
      <Tab.Screen
        name="Course"
        component={Course}
        options={{
          tabBarLabel: "Course",
        }}
      />
      {/* <Tab.Screen
        name="Tugas"
        component={Tugas}
        options={{
          tabBarLabel: "Tugas",
        }}
      /> */}
      {/* <Tab.Screen
        name="Diskusi"
        component={Diskusi}
        options={{
          tabBarLabel: "Diskusi",
        }} */}
      {/* /> */}
    </Tab.Navigator>
  );
}

export const CertifContext = createContext();
function CertificateDetail({ route }) {
  const { data } = route.params;
  const source = {
    html: data.info_singkat,
  };
  const mixedStyle = {
    body: {
      // whiteSpace: 'normal',
      // color: '#aaa'
      // fontSize:12
      textAlign: "justify",
    },
  };
  return (
    <CertifContext.Provider
    value={{
      data
    }}
    >
    <View style={{ width: windowWidth, height: windowHeight }}>
      <View
        style={
          {
            // alignItems: "center",
            // padding: 10,
          }
        }
      >
        <View
          style={{
            justifyContent: "center",
            paddingTop:10,
            alignItems: "center",
            backgroundColor: "rgb(132, 207, 240)",
          }}
          >
          {/* <Image
            style={styles.imageStyle}
            source={require("../assets/images/detailcourse.png")}
            />
            <View>
            <Text style={styles.txtUppper}>Penyusun</Text>
            <Text style={styles.txtBottom}>ACADEMY</Text>
            </View>
            <View>
            <Text style={styles.txtUppper}>Level</Text>
            <Text style={styles.txtBottom}>Pemula</Text>
          </View> */}
          <Image
            style={{ width: 45, height: 47 }}
            source={require("../assets/images/logosplash1.png")}
            />
          <View>
            <Text style={styles.textTitle}>
              Pelatihan + International Certification
            </Text>
            <View style={{padding:10}}>
              <RenderHtml source={source} tagsStyles={mixedStyle} />
            </View>
          </View>
          <View style={{ padding: 5 }}>
            <Text style={styles.textTitle2}>Rp {data.harga}</Text>
          </View>
          <View style={{ paddingBottom: 5 }}>
            <Text style={styles.textTitle3}>
              Complete all courses to enroll this certification
            </Text>
          </View>
        </View>
      </View>

      <NavigationContainer independent={true}>
        <Stack.Navigator
          // screenOptions={{
          //   headerStyle: { backgroundColor: '#633689' },
          //   headerTintColor: 'white',
          //   headerTitleStyle: { fontWeight: 'bold' }
          // }}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="TabStack"
            component={TabStack}
            options={{ title: "Top Bar" }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
</CertifContext.Provider>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 5,
    height: 170,
    width: windowWidth,
  },
  textTitle: {
    textAlign: "center",
    fontSize: 20,
    // lineHeight: 33,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "blue",
  },
  textTitle1: {
    textAlign: "center",
  },
  textTitle2: {
    color: "white",
    borderRadius: 10,
    backgroundColor: "green",
    width: "100%",
    width: 125,
    textAlign: "center",

    // justifyContent: "center",
  },
  textTitle3: {
    color: "white",
    borderRadius: 10,
    backgroundColor: "red",
    width: "100%",
    width: 325,
    textAlign: "center",
    // justifyContent: "center",
    // alignItems: "center",
  },
  imageStyle: {
    justifyContent: "center",
    width: 100,
    height: 100,
  },
  txtUppper: {
    padding: 15,
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  txtBottom: {
    // padding: 15,
    paddingLeft: 15,
    // fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
});
export default CertificateDetail;

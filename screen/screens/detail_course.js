// React Native Tab

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";

// import Info from "./componen/info";
// import Info from "./componen/info";
// import Silabus from "./componen/silabus";
import Silabus from "./componen/silabus";
// import Silabus from "./componen/silabus";
// import Tugas from "./componen/tugas";
import { createContext } from "react";
import Tugas from "./componen/tugas";
import Diskusi from "./componen/diskusi";
// import Diskusi from "./componen/diskusi";
import Info from "./componen/info";
import SilabusPage from "../myCourse/screen/SilabusDetail";
// import TabCourse from "../myCourse/screen/detail_course";
// import Diskusi from "./componen/diskusi";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
// import MyFreeCourse from '../screen/MyFreeCourse';
// import MyMasterClass from '../screen/MyLearningPath';
// import MyLearningPath from '../screen/MyMasterClass';
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const linkurl='https://gate.bisaai.id/elearning2/course/media/'
export const DetailContext = createContext();
export default function TabDetail({route, navigation, children}) {
  const { data } = route.params;
  // datas = data
  return (
    <DetailContext.Provider
    value={{
      data
    }}
    >
    <View style={{ width: windowWidth, height: windowHeight, paddingTop:50 }}>
    <View style={{ alignItems: "center", padding: 20, backgroundColor:"rgb(240, 243, 246)" }}>
    <View
      style={{
        width: 312,
        height: 118,
        backgroundColor: "rgb(39, 50, 70)",
        borderRadius: 15,
        padding: 15,
        flexDirection: "row",
      }}
    >
      <Image
            source={{uri:`${linkurl}${data.photo_course}`}}
            style={{ height: 80, width: 80 }}
          />
      <View style={{width:130, height:150,}}>
        <Text style={styles.txtUppper}>Penyusun</Text>
        <Text style={styles.txtBottom}>{data.arranged_by}</Text>
      </View>
      <View>
        <Text style={styles.txtUppper}>Level</Text>
        <Text style={styles.txtBottom}>Pemula</Text>
      </View>
    </View>
  </View>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#a9a9a9",
        tabBarStyle: {
          backgroundColor:"rgb(240, 243, 246)",
          height: 100,
          justifyContent: "center",
        },
        tabBarLabelStyle: {
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 12,
        },

        tabBarIndicatorStyle: {
          backgroundColor: "#00bfff",
          height: 60,
          margin: 10,
          width: 120,
          marginTop: 30,
          borderRadius: 20,
        },
        tabBarIndicatorContainerStyle: {
        },
        tabBarItemStyle: {
          margin: 10,
          marginTop: 30,
          borderRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
          params:{
            data:data
          },
          tabBarLabel: "Info",
        }}
      />
      <Tab.Screen
        name="Silabus"
        component={Silabus}
        options={{
          tabBarLabel: "Silabus",
        }}
      />
      <Tab.Screen
        name="Tugas"
        component={Tugas}
        options={{
          tabBarLabel: "Tugas",
        }}
      />
    </Tab.Navigator>
    </View>
    </DetailContext.Provider>
  );
}

export function CourseTab({route}) {
  // const { data } = route.params;
  return (
    <View style={{ width: windowWidth, height: windowHeight }}>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        ><Stack.Screen name="detailtab" component={TabDetail}/>
          {/* <Stack.Screen name="TabDetail" component={TabDetail}/> */}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 5,
    height: 170,
    width: windowWidth,
  },
  textTitle: {
    fontSize: 28,
    // lineHeight: 33,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
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
    fontSize: 14,
  },
  txtBottom: {
    // padding: 15,
    paddingLeft: 15,
    // fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },
});
// export default TopNavbar;

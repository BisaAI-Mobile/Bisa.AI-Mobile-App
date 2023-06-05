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
export function TabDetail({route, navigation}) {
  const { data } = route.params;
  return (
    <View style={{ width: windowWidth, height: windowHeight, paddingTop:50 }}>
    <View style={{ alignItems: "center", padding: 20, backgroundColor:"rgb(240, 243, 246)" }}>
    <View
      style={{
        width: 312,
        height: 118,
        backgroundColor: "rgb(4, 57, 128)",
        borderRadius: 15,
        padding: 15,
        flexDirection: "row",
      }}
    >
      <Image
        style={styles.imageStyle}
        source={{uri:`${linkurl}${data.photo}`}}
      />
      <View>
        <Text style={styles.txtUppper}>Penyusun</Text>
        <Text style={styles.txtBottom}>ACADEMY</Text>
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
        // tabBarActiveStyle:'blue',
        tabBarInactiveTintColor: "#a9a9a9",
        // tabBarInactiveTintColor: '#F8F8F8',
        tabBarStyle: {
          backgroundColor:"rgb(240, 243, 246)",
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
          width: 120,
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
      <CourseTab/>
      <Tab.Screen
        name="Info"
        component={Info}
        options={{
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
      {/* <Tab.Screen
        name="Diskusi"
        component={Diskusi}
        options={{
          tabBarLabel: "Diskusi",
        }} */}
      {/* /> */}
    </Tab.Navigator>
    </View>
  );
}

export default function CourseTab() {
  return (
    <View style={{ width: windowWidth, height: windowHeight }}>
      {/* <View style={{ alignItems: "center", padding: 20 }}>
        <View
          style={{
            width: 312,
            height: 118,
            backgroundColor: "rgb(4, 57, 128)",
            borderRadius: 15,
            padding: 15,
            flexDirection: "row",
          }}
        >
          <Image
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
          </View>
        </View>
      </View> */}

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
          {/* <Stack.Screen
            name="TabStack"
            component={TabStack}
            options={{ title: "Top Bar" }}
          /> */}
          <Stack.Screen
            name="CourseTab"
            component={CourseTab}
            options={{ title: "Top" }}
          />
          <Stack.Screen
            name="sil"
            component={SilabusPage}
            // options={{ title: "Top" }}
          />
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
// export default TopNavbar;

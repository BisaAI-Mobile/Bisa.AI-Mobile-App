import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
import {
  getFocusedRouteNameFromRoute,
  // NavigationContainer,
} from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import MyFreeCourse from "./myCourse/screen/MyFreeCourse";
import MyMasterClass from "./myCourse/screen/MyMasterClass";
import MyLearningPath from "./myCourse/screen/MyLearningPath";
import SilabusPage from "./myCourse/screen/SilabusDetail";
import {
  useRoute,
  useNavigationState,
  getActiveRouteState,
} from "@react-navigation/native";
import CourseCard from "./components/CourseCard";
import Certificate from "./components/Certificate";
import CertificateDetail from "./screens/certificate_screen";
// import { useRoute } from '@react-navigation/native';
// const state = useNavigationState(state => state);
// const routeName = (state.routeNames[state.index]);
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export function TabStack() {
  return (
    <View style={{height:windowHeight, width:windowWidth}}>
      <ContainerNavbar />
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
            backgroundColor: "rgb(132, 207, 240)",
            height: 60,
            marginBottom: 10,
            width: 200,
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
          name="Certificate"
          component={Certificate}
          options={{
            tabBarLabel: "Sertifikasi Nasional",
          }}
        />
        <Tab.Screen
          name="MyMasterClass"
          component={MyMasterClass}
          options={{
            tabBarLabel: "Sertifikasi Internasional",
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
export function ContainerNavbar() {
  // const routes = useNavigationState((state) => state.routes);
  // const currentRoute = routes[routes.length - 1].name;
  return (
    <LinearGradient
      colors={["#87cefa", "#f8f8ff"]}
      style={styles.linearGradient}
    >
      <View
        style={{
          height: 200,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 50,
        }}
      >
        <Image source={require("../assets/images/MyCourse.png")} />
        <Text style={styles.textTitle}>Certificate</Text>
      </View>
    </LinearGradient>
  );
}
function NavbarSertif() {
  // const route = useRoute();
  // const routes = useNavigationState((state) => state.routes);
  // const currentRoute = routes[routes.length - 1].name;
  return (
    <View style={{ width: windowWidth, height: windowHeight }}>
      {/* {currentRoute !== "MyFreeCourse" ? <Text>Sil</Text> : <ContainerNavbar />} */}
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
            // options={{
            //   headerShown: true,}}
          />
          <Stack.Screen
            name="sil"
            component={SilabusPage}
            options={{
              headerShown: false,
              // presentation: "modal",
              // animationTypeForReplace: "push",
              // animation: "none",
            }}
          />
          <Stack.Screen name="detailsertif" component={CertificateDetail}/>
          <Stack.Screen name="Tabcourse" component={CourseCard} />
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
    lineHeight: 33,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
export default NavbarSertif;

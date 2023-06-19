// React Native Tab
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
import MyFreeCourse from "../screen/MyFreeCourse";
import TabDetail from "../../screens/detail_course";
import MyMasterClass from "../screen/MyLearningPath";
import MyLearningPath from "../screen/MyMasterClass";
import SilabusPage from "../screen/SilabusDetail";
import {
  useRoute,
  useNavigationState,
  getActiveRouteState,
} from "@react-navigation/native";
import CourseCard from "../../components/CourseCard";
import CourseTab from "../../screens/detail_course";
import Info from "../../screens/componen/info";
import CourseMyLearningPath from "../screen/CourseMyLearningPath";
// import { useRoute } from '@react-navigation/native';
// const state = useNavigationState(state => state);
// const routeName = (state.routeNames[state.index]);
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

export default function TabStack() {
  // const current_city_ = route.params.current_user_city_;
  return (
    <View style={{height:windowHeight, width:windowWidth}}>
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
        <Image source={require("../../../assets/images/MyCourse.png")} />
        <Text style={styles.textTitle}>My Course</Text>
      </View>
    </LinearGradient>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#a9a9a9",
          tabBarStyle: {
            backgroundColor: "#f8f8ff",
            height: 100,
            justifyContent: "center",
          },
          tabBarLabelStyle: {
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 12,
          },

          tabBarIndicatorStyle: {
            backgroundColor: "rgb(132, 207, 240)",
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
          name="MyFreeCourse"
          component={MyFreeCourse}
          // initialParams={{currentCity: current_city_}}
          // options={({ route }) => ({
          //   tabBarStyle: ((route) => {
          //     const routeName = getFocusedRouteNameFromRoute(route) ?? "";
          //     console.log(routeName);
          //     if (routeName !== "MyFreeCourse") {
          //       return { display: "none" };
          //     }
          //     return;
          //   })(route),
          // })}
          // options={{
          //   tabBarLabel: "Free Course",
          // }}
        />
        <Tab.Screen
          name="MyMasterClass"
          component={MyLearningPath}
          options={{
            tabBarLabel: "Master Class",
          }}
        />
        <Tab.Screen
          name="LearnPathStack"
          component={LearnPathStack}
          options={{
            tabBarLabel: "Learning Path",
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
function LearnPathStack(){
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator 
      initialRouteName="learningPath" // Add this to set initial screen
      screenOptions={{
            headerShown: false,
          }}>
        <Stack.Screen name="learningPath" component={MyMasterClass}/>
        <Stack.Screen name="coursepath" component={CourseMyLearningPath}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export function FreeCourseTab() {
  return (
    <View style={{ width: windowWidth, height: windowHeight }}>
      <NavigationContainer independent={true}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="TabMycourse" component={TabStack}/>
          {/* <Stack.Screen name="MyFreeCourse" component={MyFreeCourse}/> */}
          <Stack.Screen name="detailTab" component={TabDetail}/>
          <Stack.Screen name="tabcourse" component={CourseTab}/>
          <Stack.Screen name="info" component={Info}/>
          <Stack.Screen name="sil" component={SilabusPage} />
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
// export function ContainerNavbar() {
//   return (
//     <LinearGradient
//       colors={["#87cefa", "#f8f8ff"]}
//       style={styles.linearGradient}
//     >
//       <View
//         style={{
//           height: 200,
//           justifyContent: "center",
//           flexDirection: "column",
//           alignItems: "center",
//           paddingTop: 50,
//         }}
//       >
//         <Image source={require("../../../assets/images/MyCourse.png")} />
//         <Text style={styles.textTitle}>My Course</Text>
//       </View>
//     </LinearGradient>
//   );
// }
// export default TopNavbar;

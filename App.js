import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import * as React from 'react';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import MyCourse from "./screen/MyCourse";
import HomeScreen from "./screen/home";
import AcademyScreen from "./screen/AcademyScreen";
import MyCourse from "./screen/MyCourse";
// import MyCourseScreen from "./screen/MyCourse";
import ProfileScreen from "./screen/Profile";
// import tes from "./screen/myCourse/config/router";
import TopNavbar, { TabStack } from "./screen/myCourse/config/router";
import FreeCourse from "./screen/FreeCourse";
import MasterClass from "./screen/MasterClass";
import MasterClassOjt from "./screen/MasterClassOjt";
import LearningPath from "./screen/LearningPath";
import DetailPage from "./screen/myCourse/screen/FreeDetail";
import PaymentPage from "./screen/myCourse/screen/Payment";
import Silabus from "./screen/myCourse/screen/SilabusDetail";
import SilabusPage from "./screen/myCourse/screen/SilabusDetail";
import MyFreeCourse from "./screen/myCourse/screen/MyFreeCourse";
import MyMasterClass from "./screen/myCourse/screen/MyMasterClass";
import MyLearningPath from "./screen/myCourse/screen/MyLearningPath";
import OnboardingScreen from "./screen/screens/onboarding_screen";
import Login from "./screen/screens/login_screen";
import Signup from "./screen/screens/signup_screen";
import Profile from "./screen/screens/profile_screen";
import Editprofile from "./screen/screens/eprofile_screen";
// import TabCourse from "./screen/screens/detail_course";
import CourseTab from "./screen/screens/detail_course";
import MasterCard from "./screen/components/MasterCard";
import NavbarSertif from "./screen/TabSertif";
import MasterDetail from "./screen/myCourse/screen/MasterDetail";
import { AuthProvider } from "./screen/auth/Authcontext";
import Info from "./screen/screens/componen/info";
// import TabCourse from "./screen/myCourse/screen/detail_course";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="BottomStack" component={TabNavigator} />
          {/* <TabNavigator /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
export function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen
        name="free"
        component={FreeCourse}
        options={{
          headerShown: false,
          presentation: "modal",
          animationTypeForReplace: "push",
          animation: "none",
        }}
      />
      <Stack.Screen name="mastercard" component={MasterCard}/>
      <Stack.Screen name="masterojt" component={MasterClassOjt} />
      <Stack.Screen name="sil" component={SilabusPage} />
      <Stack.Screen name="learn" component={LearningPath} />
      <Stack.Screen name="master" component={MasterClass} />
      <Stack.Screen name="detail" component={DetailPage} />
      <Stack.Screen name="pay" component={PaymentPage} />
      <Stack.Screen name="myFree" component={MyFreeCourse} />
      <Stack.Screen name="myMaster" component={MyMasterClass} />
      <Stack.Screen name="myLearn" component={MyLearningPath} />
      <Stack.Screen name="myAcad" component={TopNavbar} />
      <Stack.Screen name="TopNavbar" component={TopNavbar} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Editprofile" component={Editprofile} />
      <Stack.Screen name="Tabcourse" component={CourseTab} />
      <Stack.Screen name="sertif" component={NavbarSertif}/>
      <Stack.Screen name="masterdet" component={MasterDetail}/>
      <Stack.Screen name="tabbbbb" component={CourseTab}/>
      {/* <Stack.Screen name="Certificate" component={Certificate} />
      <Stack.Screen name="Description" component={Description} />
      <Stack.Screen name="Course" component={Course} /> */}
      
    </Stack.Navigator>
  );
}
export function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: `#1e90ff`,
        tabStyle: {
          width: "auto",
        },
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        style={styles.baratas}
        name="Home"
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            console.log(routeName);
            if (routeName !== "home") {
              return { display: "none" };
            }
            return;
          })(route),
        })}
      />
      <Tab.Screen
        name="AcademyScreen"
        component={AcademyScreen}
        options={{
          tabBarLabel: "Academy",
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="MyCourseScreen"
        component={TabStack}
        options={({ route }) => ({
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            console.log(routeName);
            if (routeName === "myFree") {
              return { display: "none" };
            }
            return;
          })(route),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons
          //     name="home"
          //     color={color}
          //     size={size}
          //   />
          // ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  baratas: {
    // flex: 1,
    backgroundColor: `#00bfff`,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

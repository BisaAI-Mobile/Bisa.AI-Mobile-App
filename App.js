import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import * as React from 'react';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screen/home';
import AcademyScreen from './screen/AcademyScreen';
import MyCourseScreen from './screen/MyCourse';
import ProfileScreen from './screen/Profile';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#42f44b',
        tabStyle: {
          width: 'auto'
      }
      }}
      screenOptions={{
        headerShown: false,
      }}
      >
      <Tab.Screen
        style={styles.baratas}
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="AcademyScreen"
        component={AcademyScreen}
        options={{
          tabBarLabel: 'Academy',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="MyCourseScreen"
        component={MyCourseScreen}
        options={{
          tabBarLabel: 'Free Course',
          // tabBarIcon: ({ color, size }) => (
          //   <MaterialCommunityIcons name="home" color={color} size={size} />
          // ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
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
  </NavigationContainer>
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

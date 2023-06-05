import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './home';
import AcademyScreen from './AcademyScreen';
import TopNavbar from './myCourse/config/router';
import ProfileScreen from './Profile';
const Tab = createBottomTabNavigator();
export default function BottomNavBar(){
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: `#1e90ff`,
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
                component={TopNavbar}
                options={{
                tabBarLabel: 'My Course',
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
}
const styles = StyleSheet.create({
    baratas: {
      // flex: 1,
      backgroundColor: `#00bfff`,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });
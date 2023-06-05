import {
  Button,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function MenuButton({ navigation }) {
  return (
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
              onPress={() => {
                navigation.navigate("free");
              }}
            >
              <View style={styles.buttonContainer}>
                <Image source={require("../../assets/images/button1.png")} />
                <Text style={styles.text}>Free Course</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.buttonShadow}
              onPress={() => {
                navigation.navigate("masterojt");
              }}
            >
              <View style={styles.buttonContainer}>
                <Image source={require("../../assets/images/button2.png")} />
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
            <Pressable style={styles.buttonShadow}
            onPress={() => {
              navigation.navigate("Sertif");
            }}>
              <View style={styles.buttonContainer}>
                <Image source={require("../../assets/images/button3.png")} />
                <Text style={styles.text}>Certificate</Text>
              </View>
            </Pressable>
            <Pressable
              style={styles.buttonShadow}
              onPress={() => {
                navigation.navigate("learn");
              }}
            >
              <View style={styles.buttonContainer}>
                <Image source={require("../../assets/images/button4.png")} />
                <Text style={styles.text}>Learning Path</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
  text: {
    fontSize: 13,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});

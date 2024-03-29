import * as React from "react";
import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const SilabusCard = ({ kelas, screenName }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("sil", {
          data: kelas,
        })
      }
    >
      <View style={styles.buttonShadow}>
        {kelas.score>=75?
        <View
          style={{
            backgroundColor: "#98fb98",
            // width: 350,
            // paddingHorizontal: 20,
            padding: 20,
            paddingBottom: 50,
            justifyContent: "flex-start",
            flexDirection: "column",
            // paddingTop: 20,
            borderRadius: 10,
          }}
        >
          <View
          // style={{
          //   flexDirection: "column",
          //   justifyContent: "center",
          //   // paddingLeft: 7,
          //   // gap: 5,
          //   // paddingTop: 4,
          // }}
          >
            <Text style={styles.text}>{kelas.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{}}>Score Task:{kelas.score}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              {/* <Text style={{ fontWeight: "400" }}>Score Task: {kelas.score}</Text> */}
            </View>
          </View>
        </View>
        :
        <View
          style={{
            backgroundColor: "white",
            // width: 350,
            // paddingHorizontal: 20,
            padding: 20,
            paddingBottom: 50,
            justifyContent: "flex-start",
            flexDirection: "column",
            // paddingTop: 20,
            borderRadius: 10,
          }}
        >
          <View
          // style={{
          //   flexDirection: "column",
          //   justifyContent: "center",
          //   // paddingLeft: 7,
          //   // gap: 5,
          //   // paddingTop: 4,
          // }}
          >
            <Text style={styles.text}>{kelas.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{}}>Score Task:{kelas.score}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              {/* <Text style={{ fontWeight: "400" }}>Score Task: {kelas.score}</Text> */}
            </View>
          </View>
        </View>
        }
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  // txt1: {
  //   fontSize: 25,
  //   fontWeight: "400",
  // },
  // txt2: {
  //   fontSize: 15,
  //   fontWeight: "400",
  // },
  // view1: {
  //   height: 200,
  //   elevation: 5,
  // //   padding: 15,
  //   borderRadius: 15,
  //   backgroundColor: "white",
  //   // shadowOffset: {
  //   //     width: 0,
  //   //     height: 2,
  //   //   },
  // },
  buttonShadow: {
    justifyContent: "flex-start",
    borderRadius: 8,
    // height: 120,
    // backgroundColor: "transparent",
    shadowColor: "#000",
    width: 350,
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    // lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});

export default SilabusCard;

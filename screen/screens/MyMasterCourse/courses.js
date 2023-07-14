import * as React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

export default function Course() {
  return (
    <ScrollView>
      <View style={{ padding: 15, gap: 15 }}>
        <View>
          <View style={styles.view1}>
            <Image
              style={styles.imageStyle}
              source={require("../../assets/images/detailcourse.png")}
            />
            <View style={{ paddingRight: 40, justifyContent: "flex-start" }}>
              <Text style={styles.txt2}>
                Master Class On Job Training: Data Science Intensive Program
                Batch 24
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  txt2: {
    // backgroundColor: "red",
    // fontSize: 10,
    // fontWeight: "400",
    // justifyContent: "center",
    // alignItems: "center",
    color: "blue",
    padding: 10,
  },
  view1: {
    // width: "100%",
    // height: 150,
    flexDirection: "row",
    elevation: 5,
    padding: 15,
    borderRadius: 15,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  imageStyle: {
    // backgroundColor:"blue",
    width: 80,
    height: 80,
  },
});

// export default Course;

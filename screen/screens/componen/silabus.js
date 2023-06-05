import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import MyCard from "../../myCourse/screen/FreeCard";
import SilabusCard from "./silabusCard";
// import SilabusCard from "./silabusCard";
const reccourse = [
  {
    title: "Data Introduction Data Science",
    score: 0,
  },
  {
    title: "Introduction Data Science",
    score: 100,
  },
  {
    title: "Introduction Data Science",
    score: 0,
  },
  {
    title: "Data Introduction Data Science",
    score: 0,
  },
  {
    title: "Introduction Data Science",
    score: 100,
  },
  {
    title: "Introduction Data Science",
    score: 0,
  },
];
export default function Silabus() {
  return (
    <ScrollView style={{ height: 700 }}>
      <View style={{padding:15, paddingLeft:20}}>
        <Text style={styles.txt1}>Silabus</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 12,
          alignItems: "center",
          // padding: 10,
          // backgroundColor: "#f8f8ff",
        }}
      >
        {reccourse.map((course) => {
          return <SilabusCard kelas={course} screenName={'sil'}/>;
        })}
      </View>
    </ScrollView>
  );
}
// const SilabusCard = ({ kelas }) => {
//   <View style={styles.view1}>
//     <Text style={styles.txt2}>{kelas.title}</Text>
//     <Text>Score Task: {kelas.score}</Text>
//   </View>
// };
const styles = StyleSheet.create({
  txt1: {
    fontSize: 25,
    fontWeight: "400",
  },
  txt2: {
    fontSize: 15,
    fontWeight: "400",
  },
  view1: {
    height: 80,
    elevation: 5,
    padding: 15,
    borderRadius: 15,
    backgroundColor: "white",
    // shadowOffset: {
    //     width: 0,
    //     height: 2,
    //   },
  },
});

// export default Silabus;

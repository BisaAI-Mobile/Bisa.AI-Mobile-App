import * as React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import MyCard, { IdContext } from "../../myCourse/screen/FreeCard";
import SilabusCard from "./silabusCard";
import { MasterDetailContext } from "./masterDetail_course";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../auth/Authcontext";
import SilabusCard2 from "./silabusCard";
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
export default function Silabus2({ route }) {
  const [dataSil, setDataSil] = useState([]);
  // const { data } = route.params;
  const { userInfo } = useContext(AuthContext);
  const {data} = useContext(MasterDetailContext);
  // const { courseid } = useContext(IdContext);
  // const {id} = useContext(IdContext);
  const url = `https://gate.bisaai.id/elearning2/academy/get_customer_syllabus?id_customer_course=${data.id_customer_course}&is_list=2&is_limit=111`;
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `JWT ${userInfo.access_token}`);
    // myHeaders.append("id_customer_course", `${data.id_customer_course}`);
    // myHeaders.append("is_free", "0");
    // myHeaders.append("status", "1");
    // myHeaders.append("id_course", `${id}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => setDataSil(json.data))
      .catch((error) => console.log("error", error));
  });
  // const source = {
  //   html: data.info_course,
  // };
  // const mixedStyle = {
  //   body: {
  //     // whiteSpace: 'normal',
  //     // color: '#aaa'
  //     // fontSize:12
  //     textAlign: "justify",
  //   },
  //   p: {
  //     // fontSize:25
  //   },
  // };
  return (
    <ScrollView style={{paddingBottom:30}}>
      <View style={{ padding: 15, paddingLeft: 20 }}>
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
        {dataSil.map((course, i) => {
          return <SilabusCard2 kelas={course} key={i}/>;
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

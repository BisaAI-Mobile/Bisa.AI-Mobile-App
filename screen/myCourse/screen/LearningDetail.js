import {
  Pressable,
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
import { Ionicons } from "@expo/vector-icons";
import RenderHtml from "react-native-render-html";
import { Rating } from "react-native-stock-star-rating";
import { DetailButton } from "../../components/CourseCard";
import FreeCourse from "../../FreeCourse";
import { useState, useEffect } from "react";
// import { useNavigation } from "@react-navigation/native";

const LearnDetail = ({ route, navigation }) => {
  const [datas, setDatas] = useState([]);

  const { data } = route.params;
  const source = {
    html: data.description,
  };
  const mixedStyle = {
    body: {
      // whiteSpace: 'normal',
      // color: '#aaa'
      // fontSize:12
      textAlign: "justify",
    },
    p: {
      // fontSize:25
    },
  };
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6IjEyMzg4IzQiLCJpYXQiOjE2ODUwMDgwNjYsIm5iZiI6MTY4NTAwODA2NiwiZXhwIjoxNjg3NjAwMDY2fQ.1G3ccMMUlIOXYx6AmG8DoHlhqTMud67Hx7whD4GFsTc"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://gate.bisaai.id/elearning2/learning_path/get_learning_path_detail?id_learning_path=${data.id_learning_path}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => setDatas(json.data))
      .catch((error) => console.log("error", error));
  }, [data.id]);
  // console.log(id);
  // const navigation = useNavigation();
  const linkurl = "https://gate.bisaai.id/elearning2/learning_path/media/";
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 80,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 25,
          paddingHorizontal: 20,
          backgroundColor: "white",
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={32} color="black" />
        </Pressable>
        {/* <Image source={data.photo} style={{ height: 52, width: 50 }} /> */}
        <Ionicons name="person-outline" size={32} color="black" />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={{ uri: `${linkurl}${data.photo}` }}
            style={{ height: 170, width: 170 }}
          />
          <Text style={styles.text}>{data.name}</Text>
        </View>
        <View style={styles.containertext}>
          <View style={{}}>
            <RenderHtml source={source} tagsStyles={mixedStyle} />
            <View
              style={{
                justifyContent: "flex-start",
                gap: 10,
                paddingTop: 10,
                paddingBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Detail Course</Text>
              {datas.map((course, index) => {
                return (
                  <View style={styles.buttonShadow} key={index}>
                    <View
                      style={{
                        backgroundColor: "white",
                        // width: 350,
                        paddingHorizontal: 30,
                        padding: 20,
                        justifyContent: "flex-start",
                        flexDirection: "row",
                        paddingTop: 20,
                        borderRadius: 10,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          paddingLeft: 7,
                          gap: 5,
                          paddingTop: 4,
                        }}
                      >
                        <Text style={{ color: "black" }}>
                          {course.course_name}
                        </Text>
                        <View style={{ flexDirection: "row", gap: 3 }}></View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: 80,
          backgroundColor: "white",
          alignItems: "center",
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 5,
        }}
      >
        <Pressable
          style={{ paddingTop: 20 }}
          onPress={() =>
            navigation.navigate("pay", {
              data: data,
            })
          }
        >
          <View
            style={{
              backgroundColor: "rgb(0, 74, 173)",
              width: 185,
              height: 45,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 9,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                // lineHeight: 33,
                fontWeight: "500",
                letterSpacing: 0.25,
                color: "white",
              }}
            >
              Daftar
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};
// export function FreeButton({ navigation, screenName }) {
//   return (
//     <Pressable
//       style={{ paddingTop: 20 }}
//       onPress={() => navigation.navigate(screenName)}
//     >
//       <View
//         style={{
//           backgroundColor: "rgb(0, 74, 173)",
//           width: 185,
//           height: 45,
//           alignItems: "center",
//           justifyContent: "center",
//           borderRadius: 9,
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 24,
//             // lineHeight: 33,
//             fontWeight: "500",
//             letterSpacing: 0.25,
//             color: "white",
//           }}
//         >
//           Daftar
//         </Text>
//       </View>
//     </Pressable>
//   );
// }
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(7, 115, 250)",
    height: 230,
    flexDirection: "column",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  containertext: {
    backgroundColor: "white",
    // height: 500,
    flexDirection: "column",
    paddingHorizontal: 40,
    paddingTop: 20,
    // alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    fontSize: 28,
    // lineHeight: 33,
    fontWeight: "600",
    letterSpacing: 0.25,
    color: "white",
  },
  text2: {
    fontSize: 12,
    // lineHeight: 33,
    fontWeight: "400",
    letterSpacing: 0.25,
    color: "white",
  },
  text3: {
    fontSize: 19,
    // lineHeight: 33,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  buttonShadow: {
    justifyContent: "center",
    borderRadius: 8,
    // height: 120,
    backgroundColor: "transparent",
    shadowColor: "#000",
    // width: 350,
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
  },
});
export default LearnDetail;

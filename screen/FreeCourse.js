// React Native Tab
// https://aboutreact.com/react-native-tab/
import * as React from "react";
import SelectDropdown from "react-native-select-dropdown";
import filter from "lodash.filter";
import { ListItem, SearchBar } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { Octicons } from '@expo/vector-icons'; 
import { Searchbar } from "react-native-paper";
import {
  Dropdown,
  GroupDropdown,
  MultiselectDropdown,
} from 'sharingan-rn-modal-dropdown';
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import ModalDropdown from "react-native-modal-dropdown";
import CourseCard from "./components/CourseCard";
const recmaster = [
  {
    uri: require("../assets/images/course.png"),
    nama: "Data Science",
    rating: 5,
    silabus: "6",
  },
  {
    uri: require("../assets/images/course.png"),
    nama: "Data Science",
    rating: 2,
    silabus: "6",
  },
  {
    uri: require("../assets/images/course.png"),
    nama: "Data Science",
    rating: 4,
    silabus: "6",
  },
  {
    uri: require("../assets/images/course.png"),
    nama: "Data Science",
    rating: 5,
    silabus: "6",
  },
];
const pilih=[
  {value:'Terpopuler'},
  {value:'Terbaru'}
]
export default function FreeCourse() {
  // const [sort, setSort] = useState("");
  // const [submited, setSubmited] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  // const [opsi, setOpsi]= useState('Terpopuler')
  // function Change (e){
  //   setOpsi(e.value)
  // }
  // const test='react'
  const url =
    "https://gate.bisaai.id/elearning2/course/get_course?is_aktif=1&is_free=1&order_by_number_of_student=desc&q=";

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
    // if(search==null){
    //   var url = 'https://gate.bisaai.id/elearning2/course/get_course?is_aktif=1&is_free=1'
    //   if(sort==='pop'){
    //     url = '&order_by_number_of_student=desc'
    //   }
    //   else if(sort==='baru'){
    //     url == 'https://gate.bisaai.id/elearning2/course/get_course?is_aktif=1&is_free=1'
    //   }
    // }
    // else{
    //   url = 'https://gate.bisaai.id/elearning2/course/get_course?is_aktif=1&is_free=1&q='+searchQuery
    //   if(sort==='pop'){
    //     url = '&order_by_number_of_student=desc'
    //   }
    //   else if(sort==='baru'){
    //     url == 'https://gate.bisaai.id/elearning2/course/get_course?is_aktif=1&is_free=1&q='+searchQuery
    //   }
    // }
    fetch(url + searchQuery, requestOptions)
      .then((response) => response.json())
      .then((json) => 
      setData(json.data))
      .catch((error) => console.log("error", error));
      [searchQuery];
    }
    )
    ;

  // const BarSearch = () => {

  //   return (
  //     <View>
  //       <Searchbar
  //         style={{
  //           width: 240,
  //           height: 37,
  //           alignItems: "center",
  //           borderWidth: 1,
  //           borderColor: "grey",
  //           backgroundColor: "white",
  //         }}
  //         placeholder="Search"
  //         onChangeText={(e) => setSearchQuery(e.target.value)}
  //         value={searchQuery}
  //       />
  //     </View>
  //   );
  // };
  const countries = ["Terpopuler", "Terbaru"];
  // function FreeCourse() {
  return (
    <View style={{ width: windowWidth }}>
      <LinearGradient
        colors={["#87cefa", "#f8f8ff"]}
        style={styles.linearGradient}
      >
        <View
          style={{
            flex: 1,
            height: 170,
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <Image
            source={require("../assets/images/FreeCourse.png")}
            style={{ height: 100, width: 100 }}
          />
          <Text style={styles.textTitle}>Free Course</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            height: 60,
            justifyContent: "center",
          }}
        >
          <View style={{}}>
            <Searchbar
              style={{
                width: 240,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "grey",
                backgroundColor: "white",
              }}
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
          </View>
          <View>
            <ModalDropdown options={["Terpopuler", 'Terbaru']}
            // onSelect={Change()}
            >
              <View style={{backgroundColor:'white', borderColor:'grey',borderWidth:1, borderRadius:10, height:40, justifyContent:'center', width:115, alignItems:'center'}}>
              <View style={{flexDirection:'row', gap:8}}>
              <Text>Terpopuler</Text>
              <View style={{}}>
              <Octicons name="triangle-down" size={24} color="black" />
              </View>
              </View>
              </View>
            </ModalDropdown>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{ height: 600 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {/* <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 16,
                height:1000,
                alignItems: "center",
                padding: 10,
                backgroundColor: "red",
              }}
            > */}

          {data.map((course, index) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  width: "50%",
                  justifyContent: "center",
                }}
              >
                <CourseCard kelas={course} key={index} />
              </View>
            );
          })}
          {/* </View> */}
        </ScrollView>
      </View>
    </View>
  );
}
// }

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 5,
    height: 230,
    width: windowWidth,
  },
  textTitle: {
    fontSize: 28,
    lineHeight: 33,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  container: {
    backgroundColor: "#f8f8ff",
  },
  dropdownsRow: { flexDirection: "row", paddingHorizontal: "5%" },
  buttonShadow: {
    justifyContent: "center",
    borderRadius: 8,
    height: 120,
    backgroundColor: "transparent",
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
  dropdown1BtnStyle: {
    // flex: 1,
    height: 40,
    width: 100,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#a9a9a9",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left", fontSize: 12 },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
  divider: { width: 12 },
});
// export default FreeCourse;

// React Native Tab
// https://aboutreact.com/react-native-tab/
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const reccourse = [
  {
    uri: require("../../../assets/images/course.png"),
    nama: "Data Science",
    stars: "5,0",
    silabus: "6",
  },
  {
    uri: require("../../../assets/images/course.png"),
    nama: "Data Science",
    stars: "5,0",
    silabus: "6",
  },
  {
    uri: require("../../../assets/images/course.png"),
    nama: "Data Science",
    stars: "5,0",
    silabus: "6",
  },
  {
    uri: require("../../../assets/images/course.png"),
    nama: "Data Science",
    stars: "5,0",
    silabus: "6",
  },
];
const linkurl='https://gate.bisaai.id/elearning2/learning_path/media/'
const countries = ["Egypt", "Canada", "Australia", "Ireland"];
const CourseMyLearningPath = ({route}) => {
  const {data}= route.params
  const [datas, setData] = useState([]);
  // const {userInfo} = useContext(AuthContext);
  const url =
    `https://gate.bisaai.id/elearning2/learning_path/get_learning_path_detail?id_learning_path=${data.id_learning_path}`;
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6IjEyMzg4IzQiLCJpYXQiOjE2ODUwMDgwNjYsIm5iZiI6MTY4NTAwODA2NiwiZXhwIjoxNjg3NjAwMDY2fQ.1G3ccMMUlIOXYx6AmG8DoHlhqTMud67Hx7whD4GFsTc`
    );
    // myHeaders.append("status", "1");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.log("error", error));
    // var myHeaders = new Headers();
    // // var token = window.sessionStorage.getItem("token");

    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append(
    //   "Authorization",
    //   `JWT ${userInfo.access_token}`
    // );

    // var requestOptions = {
    //   method: "GET",
    //   headers: myHeaders,
    //   redirect: "follow",
    // };
    // fetch(url1, requestOptions)
    //   .then((response) => response.json())
    //   .then((json) =>
    //   setData(json.data))
    //   .catch((error) => console.log("error", error));
    // [searchQuery];
  });
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingTop: 15,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              letterSpacing: 0.25,
              color: "black",
            }}
          >
            Total {datas.length} Kelas
          </Text>
          <View>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              defaultButtonText={"Filter"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={(isOpened) => {
                return (
                  <FontAwesome
                    name={isOpened ? "chevron-up" : "chevron-down"}
                    color={"#444"}
                    size={18}
                  />
                );
              }}
              dropdownIconPosition={"right"}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
              // search={true}
              // searchPlaceHolder={'filter'}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 16,
            alignItems: "center",
            padding: 10,
            backgroundColor: "#f8f8ff",
          }}
        >
          {datas.map((course) => {
            return (
              <Pressable>

              <View style={styles.buttonShadow}>
                <View
                  style={{
                    backgroundColor: "white",
                    width: 350,
                    paddingHorizontal: 30,
                    padding: 20,
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    paddingTop: 20,
                    borderRadius: 10,
                  }}
                >
                  <Image
                    source={{ uri: `${linkurl}${course.photo_learning_path}` }}
                    style={{ height: 80, width: 80, alignSelf: "center" }}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      paddingLeft: 7,
                      gap: 5,
                      paddingTop: 4,
                    }}
                  >
                    <ScrollView style={{width:200}}>
                    <Text style={styles.text}>{course.course_name}</Text>
                    </ScrollView>
                    <View style={{ flexDirection: "row", gap: 3, alignItems:'center' }}>
                    <Image source={require("../../../assets/images/silabus.png")}></Image>
                      <Text style={{ fontWeight: "bold" }}>{course.syllabus_count} Silabus</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 3 }}>
                      <Text style={{ fontWeight: "bold" }}>
                        {course.silabus}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
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
export default CourseMyLearningPath;

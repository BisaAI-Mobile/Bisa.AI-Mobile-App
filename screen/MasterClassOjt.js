// React Native Tab
// https://aboutreact.com/react-native-tab/
import * as React from 'react';
import SelectDropdown from "react-native-select-dropdown";
import filter from "lodash.filter";
import { ListItem, SearchBar } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Searchbar } from 'react-native-paper';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { LinearGradient } from "expo-linear-gradient";
import CourseCard from './components/CourseCard';
const reccourse = [
  {
    uri: require("../assets/images/course.png"),
    logo: require("../assets/images/courselogo.png"),
    nama: "Data Science",
    price:'FREE',
    stars: "5,0",
    silabus: "6",
  },
  {
    uri: require("../assets/images/course.png"),
    logo: require("../assets/images/courselogo.png"),
    nama: "Data Science",
    price:'FREE',
    stars: "5,0",
    silabus: "6",
  },
  {
    uri: require("../assets/images/course.png"),
    logo: require("../assets/images/courselogo.png"),
    nama: "Data Science",
    price:'FREE',
    stars: "5,0",
    silabus: "6",
  },
  {
    uri: require("../assets/images/course.png"),
    logo: require("../assets/images/courselogo.png"),
    nama: "Data Science",
    price:'FREE',
    stars: "5,0",
    silabus: "6",
  },
  {
    uri: require("../assets/images/course.png"),
    logo: require("../assets/images/courselogo.png"),
    nama: "Data Science",
    price:'FREE',
    stars: "5,0",
    silabus: "6",
  },
  {
    uri: require("../assets/images/course.png"),
    logo: require("../assets/images/courselogo.png"),
    nama: "Data Science",
    price:'FREE',
    stars: "5,0",
    silabus: "6",
  },
  {
    uri: require("../assets/images/course.png"),
    logo: require("../assets/images/courselogo.png"),
    nama: "Data Science",
    price:'FREE',
    stars: "5,0",
    silabus: "6",
  },
  {
    uri: require("../assets/images/course.png"),
    logo: require("../assets/images/courselogo.png"),
    nama: "Data Science",
    price:'FREE',
    stars: "5,0",
    silabus: "6",
  },
];
const BarSearch = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
      <Searchbar
        style={{width:240, height:37,alignItems:'center', borderWidth:1,borderColor:'grey', backgroundColor:'white'}}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};
const countries = ["Terpopuler", "Terbaru"];
export default function MasterClassOjt() {
    return (
      <View style={{ width: windowWidth, height: windowHeight }}>
        <LinearGradient
          colors={["#87cefa", "#f8f8ff"]}
          style={styles.linearGradient}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 50,
            }}
          >
            <Image
              source={require("../assets/images/FreeCourse.png")}
              style={{ height: 100, width: 100 }}
            />
            <Text style={styles.textTitle}>My Course</Text>
          </View>
          <View style={{flexDirection:'row',gap:20,height:40, justifyContent:'center'}}>
          <BarSearch/>
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
        </LinearGradient>
        <View style={styles.container}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              // width:'100%'
            }}
            >
            {/* <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 16,
                alignItems: "center",
                padding: 10,
                backgroundColor: "red",
              }}
            > */}
              {reccourse.map((course) => {
                return (
                  <View style={{flexDirection:'row', width:'50%'}}>
                    <CourseCard kelas={course}/>
                  </View>
              )})}
            {/* </View> */}
          </ScrollView>
        </View>
      </View>
    );
  }

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

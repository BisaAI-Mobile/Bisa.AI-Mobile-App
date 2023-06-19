import * as React from "react";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Octicons } from '@expo/vector-icons'; 
import { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../auth/Authcontext";
// import MyCard from "./FreeCard";
import SertCard from "./SertifCard";

const linkurl='https://gate.bisaai.id/elearning2/course/media/'
const countries = ["Egypt", "Canada", "Australia", "Ireland"];
const CertificateInt = () => {
  const [data, setData] = useState([]);
  const url =
    "https://gate.bisaai.id/elearning2/certification/get_certification?tipe=1";
    const {userInfo} = useContext(AuthContext);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      `JWT ${userInfo.access_token}`
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => 
      setData(json.data))
      .catch((error) => console.log("error", error));
      ;
    },[]
    )
    ;
  // const navigation = useNavigation();
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
           <ModalDropdown options={["option 1", "option 2"]}>
              <View style={{backgroundColor:'white', borderColor:'grey',borderWidth:1, borderRadius:10, height:40, justifyContent:'center', width:170, alignItems:'center'}}>
              <View style={{flexDirection:'row', gap:8}}>
              <Text style={{fontSize:11}}>Semua Program Pendidikan</Text>
              <View style={{}}>
              <Octicons name="triangle-down" size={24} color="black" />
              </View>
              </View>
              </View>
            </ModalDropdown>
          </Text>
          <View>
          <ModalDropdown options={["option 1", "option 2"]}>
              <View style={{backgroundColor:'white', borderColor:'grey',borderWidth:1, borderRadius:10, height:40, justifyContent:'center', width:160, alignItems:'center'}}>
              <View style={{flexDirection:'row', gap:8}}>
              <Text style={{fontSize:11}}>Semua Jenjang Studi</Text>
              <View style={{}}>
              <Octicons name="triangle-down" size={24} color="black" />
              </View>
              </View>
              </View>
            </ModalDropdown>
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
          {data.map((course) => {
            return <SertCard kelas={course} screenName={'detailsertif'}/>
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
export default CertificateInt;

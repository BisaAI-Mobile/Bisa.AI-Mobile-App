import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Pressable,
  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CourseTab from "../../screens/detail_course";
import { useState, useContext, useEffect, createContext } from "react";
import { Button } from "react-native-elements";
import { Rating } from "react-native-stock-star-rating";
// const linkurl='https://gate.bisaai.id/elearning2/course/media/'
// export const IdContext = createContext();
const linkurl='https://gate.bisaai.id/elearning2/learning_path/media/'
const LearnCard = ({ kelas, screenName, children }) => {
  const [idcrs, setid]=useState([])
  const sett =()=>{
    setid(kelas)
  }
    const navigation = useNavigation();
    return (
        // <Pressable onPress={navigation.navigate('coursepath', {
        //     id:kelas
        // },
        // )}>
        <View style={styles.buttonShadow}>
            {/* <Button 
            onPress={
                navigation.navigate('coursepath', {
                      data:kelas
                  },
                  )
            }
        >
                ddddd
            </Button> */}
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
              source={{ uri: `${linkurl}${kelas.photo_learning_path}` }}
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
              <Text style={styles.text}>{kelas.name_learning_path}</Text>
              </ScrollView>
              <View style={{ flexDirection: "row", gap: 3, alignItems:'center' }}>
              <Image source={require("../../../assets/images/silabus.png")}></Image>
                <Text style={{ fontWeight: "bold" }}>{kelas.syllabus_count} Silabus</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 3 }}>
                <Text style={{ fontWeight: "bold" }}>
                  {kelas.silabus}
                </Text>
              </View>
            </View>
          </View>
        </View>
        // </Pressable>
    );
  };

  const styles = StyleSheet.create({
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
  });
  //   export default MyFreeCourse;
  
  export default LearnCard
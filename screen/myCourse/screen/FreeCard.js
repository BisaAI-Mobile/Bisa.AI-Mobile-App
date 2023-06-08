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
const linkurl='https://gate.bisaai.id/elearning2/course/media/'
export const IdContext = createContext();
const MyCard = ({ kelas, screenName, children }) => {
  const [idcrs, setid]=useState([])
  const sett =()=>{
    setid(kelas)
  }
    const navigation = useNavigation();
    return (
      <IdContext.Provider
      value={{
        idcrs
      }}>
      {children}
      {/* <Button onPress={() =>{
        setid(kelas)
        console.log(idcrs)
      }
    }>
        aaaa
      </Button> */}
    <Pressable onPress={() =>{
        // setid(kelas.id_course)
        // console.log(id)
        navigation.navigate('detailTab', {
          // screen: 'Silabus',
          // params:{
            data:kelas
          // }
        },
        )
      }
      
      // screen:'',
      // data: kelas,
      
    }>
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
          source={{uri:`${linkurl}${kelas.photo_course}`}}
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
              <Text style={styles.text}>{kelas.course_name}</Text>
              <View style={{ flexDirection: "row", gap: 3 }}>
                <Text style={{ fontWeight: "bold" }}>{kelas.rating}</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 3 }}>
                <Text style={{ fontWeight: "bold" }}>{kelas.arranged_by}</Text>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
      </IdContext.Provider>
  // </IdContext.Provider>
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
  
  export default MyCard
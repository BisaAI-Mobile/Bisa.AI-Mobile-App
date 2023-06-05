import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Pressable,
  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import App from "../../../App";
const linkurl='https://gate.bisaai.id/elearning2/course/media/'
const MyCard = ({ kelas, screenName }) => {
    const navigation = useNavigation();
    return (
      <Pressable onPress={() =>
        navigation.navigate("master"
          // data: kelas,
          // id : kelas.id_course
        )
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
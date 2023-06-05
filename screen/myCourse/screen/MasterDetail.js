import {
    Pressable,
    View,
    Image,
    Text,
    StyleSheet,
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
  // import { useNavigation } from "@react-navigation/native";
  const recmaster = [
    {
      photo: require("../../../assets/images/course.png"),
      name: "Data Science",
      rating: 5,
      number_of_syllabus: 6,
      number_of_students:50
    },
    {
      photo: require("../../../assets/images/course.png"),
      name: "Data Science",
      rating: 2,
      number_of_syllabus: 6,
      number_of_students:50
    },
    {
      photo: require("../../../assets/images/course.png"),
      name: "Data Science",
      rating: 4,
      number_of_syllabus: 6,
      number_of_students:50
    },
    {
      photo: require("../../../assets/images/course.png"),
      name: "Data Science",
      rating: 5,
      number_of_syllabus: 6,
      number_of_students:50
    },
  ];
  const MasterDetail = ({ route, navigation }) => {
    const { data } = route.params;
    const source = {
      html: data.info,
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
    // console.log(id);
    // const navigation = useNavigation();
    const linkurl='https://gate.bisaai.id/elearning2/course/media/'
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
              source={{uri:`${linkurl}${data.photo}`}}
              style={{ height: 170, width: 170 }}
            />
            <Text style={styles.text}>{data.name}</Text>
            <Rating stars={data.rating} maxStars={5} size={17} />
            <View style={{ flexDirection: "row", gap: 15, padding: 4 }}>
              <View style={{ flexDirection: "row", gap: 3 }}>
                <Image
                  source={require("../../../assets/images/Population.png")}
                />
                <Text style={styles.text2}>
                  Jumlah Peserta : {data.number_of_students}
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 3 }}>
                <Image
                  source={require("../../../assets/images/TotalModul.png")}
                />
                <Text style={styles.text2}>
                  Total Modul : {data.number_of_syllabus}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: 3 }}>
              <Image source={require("../../../assets/images/PriceLogo.png")} />
              <Text style={styles.text2}>Harga Course : {data.price}</Text>
            </View>
          </View>
          <View style={styles.containertext}>
            <View style={{}}>
              <RenderHtml source={source} tagsStyles={mixedStyle} />
              <View style={{ height: 20 }}></View>
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
            onPress={() => navigation.navigate("pay")}
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
      backgroundColor: "rgb(69, 45, 38)",
      height: 340,
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
  });
  export default MasterDetail;
  
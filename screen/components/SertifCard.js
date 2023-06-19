import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Pressable,
  } from "react-native";
import { useNavigation } from "@react-navigation/native";
const linkurl='https://gate.bisaai.id/elearning2/certification/media/foto_certification/'
const SertCard = ({ kelas, screenName }) => {
    const navigation = useNavigation();
    return (
      <Pressable onPress={() => navigation.navigate('detailsertif',{
        data:kelas
      })}>
        <View style={styles.buttonShadow}>
          <View
            style={{
              backgroundColor: "white",
              width: 350,
              height:140,
              paddingHorizontal: 10,
              // padding: 20,
              gap:10,
              justifyContent: "flex-start",
              flexDirection: "row",
              paddingTop: 10,
              borderRadius: 10,
              paddingBottom:20
            }}
          >
            <Image
          source={{uri:`${linkurl}${kelas.foto}`}}
          style={{ height: 80, width: 80, resizeMode: 'contain',}}
          />
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                // paddingLeft: 7,
                // gap: 5,
                paddingTop: 4,
              }}
            >
              <ScrollView style={{height:30, width:240}}>
              <Text style={styles.text}>{kelas.nama}</Text>
              </ScrollView>
              <View style={{ flexDirection: "row", gap: 3 }}>
                <Text style={{ fontWeight: "bold" }}>Offered By: {kelas.nama_partner}</Text>
              </View>
              {/* <View style={{ flexDirection: "row", gap: 3 }}>
                <Text style={{ fontWeight: "bold" }}>{kelas.silabus}</Text>
              </View> */}
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
      height: 150,
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
  
  export default SertCard
import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import DetailPage from "../myCourse/screen/FreeDetail";
import { NumericFormat } from 'react-number-format';
import { useNavigation } from "@react-navigation/native";
import { ReactNativeNumberFormat } from "./FormatterPrice";
import { Ionicons } from "@expo/vector-icons";
import CurrencyFormat from "./FormatterPrice";
import { Rating } from "react-native-stock-star-rating";
const LearningPathCard = ({ kelas, item, foto }) => {
  const navigation = useNavigation();
  const linkurl='https://gate.bisaai.id/elearning2/learning_path/media/'
  const linkclient='https://gate.bisaai.id/elearning2/client/media/'
  // const photo ={kelas.photo}
  return (
    <View style={styles.buttonShadow}>
      <View
        style={{
          backgroundColor: "white",
          height: "100%",
          width: 170,
          flexDirection: "column",
          gap: 10,
          padding: 15,
          borderRadius: 10,
        }}
        >
        <Image
          source={{uri:`${linkurl}${kelas.photo}`}}
          style={{ height: 80, width: 80, alignSelf: "center" }}
          />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
          >
          <ScrollView style={{ height: 50 }} showsVerticalScrollIndicator={false}>
            <Text style={styles.text}>{kelas.name}</Text>
          </ScrollView>
          <Image
          source={{uri:`${linkclient}${kelas.photo_client}`}}
          style={{ height: 20, width: 20}}
          />
          {/* <Rating stars={kelas.rating} maxStars={5} size={17} /> */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
            {kelas.price!==0?<Text>{kelas.price}</Text>:
            <Text style={styles.textprice}>FREE</Text>
          }
            <View style={styles.buttondetail}>
              <Pressable
                onPress={() =>
                  navigation.navigate("learndetail", {
                    data: kelas,
                  })
                }
                >
                <Text style={{}}>Lihat</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export function DetailButton({ navigation }) {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("free");
      }}
    >
      <Text style={{}}>Lihat</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  buttonShadow: {
    // flex: 1,
    // alignSelf : "center",
    // justifyContent: 'space-between',
    // alignItems: 'center',
    // flex : 1,
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 20,
    // aspectRatio: 1,
    borderRadius: 8,
    maxHeight: 220,
    backgroundColor: "transparent",
    shadowColor: "#000",
    // aspectRatio: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    // lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  textprice: {
    fontSize: 15,
    // lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  buttondetail: {
    width: 60,
    height: 20,
    backgroundColor: "#87cefa",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    borderRadius: 4,
    // aspectRatio: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
export default LearningPathCard;

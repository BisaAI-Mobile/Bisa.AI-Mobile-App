import {
    Pressable,
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
  } from "react-native";
  import { useState } from "react";
  import FontAwesome from "@expo/vector-icons/FontAwesome";
  import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
  import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
  import { Ionicons } from "@expo/vector-icons";
//   import { DetailButton } from "../../components/CourseCard";
  import { useNavigation } from "@react-navigation/native";
  
export default function Harga(props) {
    return (
      <View style={styles.textShadow}>
        <View style={styles.Containertext4}>
          <Text style={styles.text4}>$ Rincian Pembayaran</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              gap: 7,
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: 200,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.text4}>Harga</Text>
              <Text style={styles.text4}>{props.price}</Text>
            </View>
            <View
              style={{
                width: 200,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.text4}>Kode Unik</Text>
              <Text style={styles.text4}>{props.code}</Text>
            </View>
            <View
              style={{ backgroundColor: "black", width: 250, height: 1.5 }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: 200,
              }}
            >
              <Text style={styles.text5}>Total Biaya</Text>
              <Text style={styles.text5}>{props.price}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({

    text4: {
      fontSize: 19,
      // lineHeight: 33,
      fontWeight: "400",
      letterSpacing: 0.25,
      color: "black",
    },
    text5: {
      fontSize: 19,
      // lineHeight: 33,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "black",
    },
    Containertext4: {
      flex: 1,
      alignItems: "center",
      gap: 10,
    },
    textShadow: {
      borderRadius: 8,
      backgroundColor: "white",
      padding: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
  });
  
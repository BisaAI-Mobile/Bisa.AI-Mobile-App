import {
  Pressable,
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
import { Ionicons } from "@expo/vector-icons";
import { DetailButton } from "../../components/CourseCard";
import { useNavigation } from "@react-navigation/native";
import YoutubePlayer from "react-native-youtube-iframe";
import React, { useState, useCallback, useRef } from "react";
import { DetailContext } from "../../screens/detail_course";
import { useContext } from "react";

export default function SilabusPage({ route }) {
  const navigation = useNavigation();
  // const {datacourse} = useContext(DetailContext);
  const [playing, setPlaying] = useState(false);
  const { data } = route.params;

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  //   const togglePlaying = useCallback(() => {
  //     setPlaying((prev) => !prev);
  //   }, []);
  const source = {
    html: data.info_course,
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
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{}}>
        {/* <View>
        </View> */}
        <View style={styles.containertext}>
          <View style={{ flexDirection: "row", backgroundColor: "black" }}>
            <Pressable
              style={{ paddingTop: 50, paddingBottom: 20 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back-outline" size={32} color="white" />
            </Pressable>
          </View>
          {/* <View
            style={{
              height: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 50,
              backgroundColor: "white",
              paddingHorizontal: 20,
            }}
          ></View> */}
          <View style={{ height: 200, justifyContent: "center" }}>
            <YoutubePlayer
              height={230}
              play={playing}
              videoId={data.video}
              onChangeState={onStateChange}
              webViewStyle={{ opacity: 0.99 }}
            />
          </View>
          <View style={{ paddingHorizontal: 30 }}>
            <View style={styles.kontainer}>
              <View
                style={{
                  paddingHorizontal: 25,
                  paddingTop: 7,
                  paddingBottom: 6,
                }}
              >
                <Text style={styles.text3}>{data.name}</Text>
              </View>
              <View
                style={{
                  height: 50,
                  borderColor: "#d3d3d3",
                  borderWidth: 1,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.text3}>Dasar Teori</Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                <Text style={styles.text3}>Data Science</Text>
                <Text
                  style={{
                    textAlign: "justify",
                    letterSpacing: 0.4,
                    lineHeight: 30,
                  }}
                >
                  Data science adalah bidang multi-disiplin yang menggunakan
                  metode, proses, algoritma, dan sistem ilmiah untuk mengekstrak
                  pengetahuan dan informasi dari data terstruktur dan tidak
                  terstruktur. Data science merupakan konsep untuk menyatukan
                  statistik, analisis data, pembelajaran mesin (machine
                  learning), pengetahuan dasar (domain knowledge) dan metode
                  terkaitnya untuk memahami dan menganalisis fenomena aktual
                  dengan data. Di dalam proses data science, secara umum proses
                  yang dilakukan adalah pengumpulan data, analisis, visualisasi
                  modeling, dan evaluasi. Exploratory Data Analysis (EDA)
                  merupakan istilah umum pada pengolahan data untuk menganalisis
                  data yang kita miliki. EDA ini adalah proses untuk mengamati
                  dan memahami isi data yang kita gunakan menggunakan teknik
                  atau metode yang ada seperti melihat korelasi, distribusi,
                  plot, dan lain sebagainya. Proses ini menjawab
                  pertanyaan-pertanyaan dasar terkait data, sehingga kita bisa
                  mendapat insight dari data yang digunakan setelah melakukan
                  proses EDA. Kemampuan analisis data ini menjadi hal yang
                  sangat dibutuhkan dalam profesi data analyst, business
                  analyst, dan sebagainya.
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("quiz", {
                      data: data,
                    })
                  }
                >
                  <View
                    style={{
                      width: "100%",
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgb(132, 207, 240)",
                      borderRadius: 20,
                    }}
                  >
                    <Text>QUIZ</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(4, 57, 128)",
    height: 270,
    flexDirection: "column",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  containertext: {
    backgroundColor: "rgb(240, 243, 246)",
    // height: 800,
    flexDirection: "column",
    // paddingHorizontal: 40,
    //   paddingTop: 20,
    // alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  kontainer: {
    // paddingHorizontal:25,
    paddingTop: 10,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 15,
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

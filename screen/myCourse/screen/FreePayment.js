import {
  Pressable,
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
import { Ionicons } from "@expo/vector-icons";
import { DetailButton } from "../../components/CourseCard";
import { useNavigation } from "@react-navigation/native";
import PaymentDetail from "./paymentPage/PaymentDetail";
import { AuthContext } from "../../auth/Authcontext";
import { useContext } from "react";
import Harga from "./paymentPage/Price";
import { Rating } from "react-native-stock-star-rating";
const Bayarind = [
  {
    id: 1,
    cara: "Pilih pembayaran menggunakan Bayarind anda",
  },
  {
    id: 2,
    cara: "Klik tombil Pilih Pembayaran",
  },
  {
    id: 3,
    cara: "Masukkan nomor telepon yang berhubungan dengan akun Bayarind",
  },
  {
    id: 4,
    cara: "Cek kembali total biaya dan lakukan pembayaran",
  },
];
const Shopee = [
  {
    id: 1,
    cara: "Pilih pembayaran menggunakan Shopee anda",
  },
  {
    id: 2,
    cara: "Klik tombil Pilih Pembayaran",
  },
  {
    id: 3,
    cara: "Masukkan nomor telepon yang berhubungan dengan akun Shopee",
  },
  {
    id: 4,
    cara: "Cek kembali total biaya dan lakukan pembayaran",
  },
];
const Dana = [
  {
    id: 1,
    cara: "Pilih pembayaran menggunakan Dana anda",
  },
  {
    id: 2,
    cara: "Klik tombil Pilih Pembayaran",
  },
  {
    id: 3,
    cara: "Masukkan nomor telepon yang berhubungan dengan akun Dana",
  },
  {
    id: 4,
    cara: "Cek kembali total biaya dan lakukan pembayaran",
  },
];
const Linkaja = [
  {
    id: 1,
    cara: "Pilih pembayaran menggunakan LinkAja anda",
  },
  {
    id: 2,
    cara: "Klik tombil Pilih Pembayaran",
  },
  {
    id: 3,
    cara: "Masukkan nomor telepon yang berhubungan dengan akun LinkAja",
  },
  {
    id: 4,
    cara: "Cek kembali total biaya dan lakukan pembayaran",
  },
];

const Item = ({ cara }) => (
  <View style={{ height: 20, width: 300 }}>
    <Text>- {cara}</Text>
  </View>
);
export default function PaymentFree({route}) {
  const { data } = route.params;
  const { userInfo } = useContext(AuthContext);
  const navigation = useNavigation();
  const [payment, setPayment] = useState(Bayarind);
  const [one, setOne] = useState("rgb(184, 223, 243)");
  const [two, setTwo] = useState("white");
  const [three, setThree] = useState("white");
  const [four, setFour] = useState("white");
  const [text, onChangeText] = useState("");
  const linkurl='https://gate.bisaai.id/elearning2/course/media/'
  function AddCourse() {
    // useEffect(() => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `JWT ${userInfo.access_token}`);

      var raw = JSON.stringify({
        id_course: `${data.id_course}`,
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch(
        "https://gate.bisaai.id/elearning2/academy/insert_customer_course",
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) => console.log("error", error));
    // });
  }
  function bayar() {
    setPayment(Bayarind);
    setOne("rgb(184, 223, 243)");
    setTwo("white");
    setThree("white");
    setFour("white");
  }
  function shopp() {
    setPayment(Shopee);
    setOne("white");
    setTwo("rgb(184, 223, 243)");
    setThree("white");
    setFour("white");
  }
  function dana() {
    setPayment(Dana);
    setOne("white");
    setTwo("white");
    setThree("rgb(184, 223, 243)");
    setFour("white");
  }
  function linka() {
    setPayment(Linkaja);
    setOne("white");
    setTwo("white");
    setThree("white");
    setFour("rgb(184, 223, 243)");
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          // height: 120,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 50,
          paddingHorizontal: 20,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={32} color="black" />
        </Pressable>

        <Image
          source={require("../../../assets/images/logo.png")}
          style={{ height: 52, width: 50 }}
        />

        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="person-outline" size={32} color="black" />
        </Pressable>
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: 15, gap: 10 }}>
          <View style={{ paddingHorizontal: 17 }}>
            <View style={styles.container}>
              <Image
                source={{ uri: `${linkurl}${data.photo}` }}
                style={{ height: 170, width: 170 }}
              />
              <Text style={styles.text}>{data.name}</Text>
              <Rating stars={data.rating} maxStars={5} size={17} />
              <View style={{ flexDirection: "column", gap: 5, padding: 4 }}>
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
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 26,
                // lineHeight: 33,
                fontWeight: "600",
                letterSpacing: 0.25,
              }}
            >
              Pilih Pembayaran
            </Text>
          </View>
          <View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <View
                style={{
                  width: "100%",
                  // height: 200,
                  //   backgroundColor: "#f8f8ff",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    // padding: 13,
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      // padding: 13,
                      justifyContent: "space-around",
                      height: 65,
                    }}
                  >
                    <TouchableOpacity
                      // style={styles.buttonShadow}
                      style={{
                        alignItems: "center",
                        // justifyContent: "center",
                        // alignContent: "center",
                      }}
                      // onPress={() => bayar()}
                      onPress={() => {
                        // navigation.navigate("sil");
                        AddCourse();
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "rgb(0, 74, 173)",
                          borderRadius: 15,
                          // overflow: "hidden",
                          width: "50%",
                          // gap: 7,
                          height: 40,
                          padding: 10,
                          // flexDirection: "row",
                          alignItems: "center",
                          // justifyContent:'center',
                          // alignContent:"center"

                          // justifyContent:'center'
                        }}
                      >
                        {/* <Image
                          source={require("../../../assets/images/Bayarin.png")}
                          style={{ height: 20, width: 20 }}
                        /> */}
                        <Text style={styles.textButton}>Daftar Gratis</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 19,
              gap: 10,
            }}
          >
            {/* <View style={styles.textShadow}>
              <Text style={styles.text3}>Cara Pembayaran</Text>
              <Text
                style={{ */}
            {/* textAlign: "justify",
                  // letterSpacing: 0.4,
                  // lineHeight: 20,
                }}
              > */}
            {/* {payment.map((item) => (
                  <Item cara={item.cara} />
                ))} */}
            {/* <FlatList
                  data={payment}
                  renderItem={({ item }) => <Item cara={item.cara} />}
                  keyExtractor={(item) => item.id}
                /> */}
            {/* </Text>
            </View> */}
            {/* <View style={styles.textShadow}>
              <Text style={styles.text3}>Pakai Voucher</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Masukkan Voucher"
                // keyboardType="numeric"
              />
            </View> */}
            <Harga price="0" code="0" />
            <View style={styles.textShadow1}>
              <Text style={styles.text3}>Info</Text>
              {/* <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Image
                  style={{ height: 15, width: 15 }}
                  source={require("../../../assets/images/info1.png")}
                />
                <Text
                  style={{
                    textAlign: "justify",
                    letterSpacing: 0.4,
                    lineHeight: 20,
                  }}
                >
                  Jumlah Course :
                </Text>
              </View> */}
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Image
                  style={{ height: 15, width: 15 }}
                  source={require("../../../assets/images/info2.png")}
                />
                <Text
                  style={{
                    textAlign: "justify",
                    letterSpacing: 0.4,
                    lineHeight: 20,
                  }}
                >
                  Jumlah Silabus : {data.number_of_syllabus}
                </Text>
              </View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Image
                  style={{ height: 15, width: 15 }}
                  source={require("../../../assets/images/info3.png")}
                />
                {data.class === 1 ? (
                  <Text
                    style={{
                      textAlign: "justify",
                      letterSpacing: 0.4,
                      lineHeight: 20,
                    }}
                  >
                    Kelas : Pemula
                  </Text>
                ) : (
                  <Text
                    style={{
                      textAlign: "justify",
                      letterSpacing: 0.4,
                      lineHeight: 20,
                    }}
                  >
                    Kelas : Menengah
                  </Text>
                )}
                {/* <Text
                  style={{
                    textAlign: "justify",
                    letterSpacing: 0.4,
                    lineHeight: 20,
                  }}
                >

                  Kelas : {data.class}
                </Text> */}
              </View>
            </View>
          </View>
          <View style={styles.textShadow}>
            <Text style={{ color: "yellow", fontSize: 20 }}>Penting!</Text>
            <Text
              style={{
                textAlign: "justify",
                letterSpacing: 0.4,
                lineHeight: 20,
              }}
            >
              konfirmasi pembayaran dilakukan secara otomatis oleh sistem
              kami,jika transaksi tidak sesuai, silahkan konfirmasi pembayaran
              anda secara manual
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 5,
                backgroundColor: "rgb(32, 169,20)",
                width: "50%",
                alignItems: "center",
                elevation: 3,
                height: 35,
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate("home")}
            >
              <Text>Kembali ke beranda</Text>
            </TouchableOpacity>
          </View>
          {/* <Bayarind /> */}
        </View>
      </ScrollView>
      {/* <View
        style={{
          height: 65,
          backgroundColor: "white",
          alignItems: "center",
          borderTopColor: "grey",
        }} */}
      {/* > */}
      {/* <Pressable
          style={{ paddingTop: 10 }}
          onPress={() => {
            // navigation.navigate("sil");
            AddCourse();
          }}
        >
          <View
            style={{
              backgroundColor: "rgb(0, 74, 173)",
              width: 170,
              height: 43,
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
              Bayar
            </Text>
          </View>
        </Pressable> */}
      {/* </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "rgb(177, 177, 177)",
    backgroundColor: "rgb(217, 217, 217)",
  },
  text3: {
    fontSize: 19,
    // lineHeight: 33,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  textShadow1: {
    gap: 10,
    borderRadius: 8,
    backgroundColor: "white",
    padding: 15,
    // paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    height: 150,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "rgb(177, 177, 177)",
    backgroundColor: "rgb(217, 217, 217)",
  },
  container: {
    backgroundColor: "rgb(39, 50, 70)",
    // height: 270,
    paddingBottom:30,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 20,
  },
  containertext: {
    backgroundColor: "white",
    height: 500,
    flexDirection: "column",
    paddingHorizontal: 40,
    paddingTop: 20,
    // alignItems: "center",
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    borderRadius: 20,
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
  textButton: {
    color: "white",
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "400",
    letterSpacing: 0.25,
    // color: "black",
  },
  buttonShadow: {
    borderRadius: 25,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textShadow: {
    gap: 8,
    width: "100%",
    // justifyContent: "center",
    // alignContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "rgb(218,218,218)",
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
  buttonContainer: {
    // backgroundColor: two,
    borderRadius: 25,
    overflow: "hidden",
    gap: 7,
    height: 40,
    padding: 9,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:'center'
  },
});

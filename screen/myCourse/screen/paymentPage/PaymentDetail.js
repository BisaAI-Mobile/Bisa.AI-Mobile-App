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
import Harga from "./Price";

const Bayarind = [
  {
    id:1,
    1: "Pilih pembayaran menggunakan Bayarind anda",
    2: "Klik tombil Pilih Pembayaran",
    3: "Masukkan nomor telepon yang berhubungan dengan akun bayarind",
    4: "Cek kembali total biaya dan lakukan pembayaran",
  },
];
const Shopee = [
  {
    id:2,
    1: "Pilih pembayaran menggunakan Shopee anda",
    2: "Klik tombil Pilih Pembayaran",
    3: "Masukkan nomor telepon yang berhubungan dengan akun bayarind",
    4: "Cek kembali total biaya dan lakukan pembayaran",
  }
];
const Dana = [
  {
    id:3,
    1: "Pilih pembayaran menggunakan Dana anda",
    2: "Klik tombil Pilih Pembayaran",
    3: "Masukkan nomor telepon yang berhubungan dengan akun bayarind",
    4: "Cek kembali total biaya dan lakukan pembayaran",
  },
];
const Linkaja = [
  {
    id:4,
    1: "Pilih pembayaran menggunakan LinkAja anda",
    2: "Klik tombil Pilih Pembayaran",
    3: "Masukkan nomor telepon yang berhubungan dengan akun bayarind",
    4: "Cek kembali total biaya dan lakukan pembayaran",
  },
];
const Item = ({cara}) => (
  <View>
    <Text>{cara}</Text>
  </View>
);
export default function PaymentDetail() {
  const navigation = useNavigation();
  const [text, onChangeText] = useState("");
  return (
    <View style={{ paddingHorizontal: 19, gap: 5 }}>
      <View style={styles.textShadow}>
        <Text style={styles.text3}>Keterangan Transfer</Text>
        <Text
          style={{
            textAlign: "justify",
            letterSpacing: 0.4,
            lineHeight: 20,
          }}
        >
          Anda akan terdaftar pada course Master Class Data Science, silahkan
          lakukan pembayaran dengan nominal Rp 150,590 melalui Bayarind
        </Text>
      </View>
      <View style={styles.textShadow}>
        <Text style={styles.text3}>Cara Pembayaran</Text>
        <Text
          style={{
            textAlign: "justify",
            letterSpacing: 0.4,
            lineHeight: 20,
          }}
        >
          <FlatList
            data={paydata}
            renderItem={({ item }) => <Item cara={item.cara} />}
            keyExtractor={(item) => item.id}
          />
        </Text>
      </View>
      <View style={styles.textShadow}>
        <Text style={styles.text3}>Pakai Voucher</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Masukkan Voucher"
          // keyboardType="numeric"
        />
      </View>
      <Harga price="150.000" code="440" />
      <View style={styles.textShadow}>
        <Text style={styles.text3}>Cara Pembayaran</Text>
        <Text
          style={{
            textAlign: "justify",
            letterSpacing: 0.4,
            lineHeight: 20,
          }}
        >
          - Pilih pembayaran menggunakan Bayarind - Klik tombil Pilih Pembayaran
          Masukkan nomor telepon yang berhubungan dengan akunbayarind anda - Cek
          kembali total biaya dan lakukan pembayaran
        </Text>
      </View>
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

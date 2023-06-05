import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Tugas() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{ padding: 15, gap: 15 }}>
        <Text style={styles.txt1}>Tugas</Text>
        <View>
          <View style={styles.view1}>
            <Text style={styles.txt2}>
              Buatlah rangkuman dari materi Dasar - Dasar ReactJS. Maksimal 1
              halaman per silabus. Kumpulkan dalam bentuk PDF.
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate("Certificate")}
        >
          <Text style={styles.loginText}>Kirim Tugas</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  txt1: {
    fontSize: 25,
    fontWeight: "400",
  },
  txt2: {
    fontSize: 15,
    // fontWeight: "600",
  },
  view1: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "white",
  },
  loginBtn: {
    color: "white",
    backgroundColor: "blue",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 17,
  },
  loginText: {
    color: "white",
    fontSize: 15,
  },
});

// export default Tugas;

import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DetailContext } from "../detail_course";
import { useContext } from "react";
import RenderHTML from "react-native-render-html";
export default function Tugas() {
  const { data } = useContext(DetailContext);
  const navigation = useNavigation();
  const source = {
    html: data.task_description_course,
  };
  const mixedStyle = {
    body: {
      // whiteSpace: 'normal',
      // color: '#aaa'
      // fontSize:12
      textAlign: "justify",
    },
  };

  return (
    <ScrollView>
      <View style={{ padding: 15, gap: 15 }}>
        <Text style={styles.txt1}>Tugas</Text>
        <View>
          <View style={styles.view1}>
            <RenderHTML source={source} tagsStyles={mixedStyle} />
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
    backgroundColor: "rgb(0, 74, 173)",
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

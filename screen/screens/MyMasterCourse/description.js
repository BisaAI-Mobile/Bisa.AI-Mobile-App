import * as React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import { useContext } from "react";
import { CertifContext } from "../certificate_screen";
import RenderHtml from "react-native-render-html";
export default function Description2() {
  const {data} = useContext(CertifContext);
  const source = {
    html: data.deskripsi,
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
    <ScrollView>
      <View style={{ padding: 15, gap: 15 }}>
        <View style={styles.txt1}>
          <Text style={styles.txt2}>Deskirpsi</Text>
          <RenderHtml source={source} tagsStyles={mixedStyle} />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  txt1: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "white",
  },
  txt2: {
    fontWeight: "500",
    fontSize: 20,
  },
});
// export default Description;

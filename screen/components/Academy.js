import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AcademyClass = ({ kelas, screenName }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(screenName)}>
      <View style={styles.buttonShadow}>
        <View
          style={{
            backgroundColor: "white",
            width: 260,
            height: 120,
            padding: 7,
            flexDirection: "row",
            paddingTop: 20,
            borderRadius: 10,
          }}
        >
          <Image source={kelas.uri} style={{ width: 80, height: 80 }} />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              paddingLeft: 7,
              gap: 5,
              paddingTop: 4,
              width: 170,
            }}
          >
            <Text style={styles.text}>{kelas.nama}</Text>
            <Text>{kelas.desc}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  buttonShadow: {
    borderRadius: 8,
    height: 120,
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
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
export default AcademyClass;

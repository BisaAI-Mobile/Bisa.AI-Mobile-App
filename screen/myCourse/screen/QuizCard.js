import { View, Text } from "react-native";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../auth/Authcontext";

const Quiziziz = ({ kelas, screenName }) => {
  <View>
    <Text>{kelas.quiz}</Text>
    <Text>{kelas.answer1}</Text>
    <Text>{kelas.answer2}</Text>
    <Text>{kelas.answer3}</Text>
    <Text>{kelas.answer4}</Text>
    <Text>{kelas.answer5}</Text>
  </View>;
};
export default Quiziziz;

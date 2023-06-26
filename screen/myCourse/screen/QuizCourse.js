import { View, Text, ScrollView } from "react-native";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../auth/Authcontext";
// import { RadioButton } from "react-native-paper";
import QuizMap from "./QuizCard";
import RenderHtml from "react-native-render-html";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
export default function QuizPage({ route }) {
  const { data } = route.params;
  const [dataquiz, setDataquiz] = useState([]);
  const { userInfo } = useContext(AuthContext);
  const [answer, setAnswer] = useState();
  useEffect(() => {
    const url = `https://gate.bisaai.id/elearning2/course/get_syllabus_quiz?is_aktif=1&is_start=1&id_customer_syllabus=${data.id_customer_syllabus}`;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `JWT ${userInfo.access_token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => setDataquiz(json.data))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <View style={{ padding: 15 }}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            // gap: 12,
            // alignItems: "center",
            padding: 5,
            // height:600,
            // padding: 10,
            // backgroundColor: "#f8f8ff",
          }}
        >
          {dataquiz.map((course, index) => {
            const source = {
              html: course.quiz,
            };
            const ans1 = {
              html: course.answer1,
            };
            const ans2 = {
              html: course.answer2,
            };
            const ans3 = {
              html: course.answer3,
            };
            const ans4 = {
              html: course.answer4,
            };
            const ans5 = {
              html: course.answer5,
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
            var radio_props = [
              { label: `${course.answer1}`, value: 1 },
              { label: `${course.answer2}`, value: 0 },
              { label: `${course.answer3}`, value: 0 },
              { label: `${course.answer4}`, value: 0 },
              { label: `${course.answer5}`, value: 0 },
            ];
            return (
              <View
                style={{ flexDirection: "column", gap: 10, paddingTop: 20 }}>
                <View style={{flexDirection:'row', gap:10}}>
                  <Text style={{fontSize:14}} key={index}>{index + 1}.</Text>
                  <RenderHtml source={source} tagsStyles={mixedStyle} />
                    </View>
                  <View style={{ gap: 5, paddingLeft:20 }}>
                    <RadioForm
                      animation={false}
                      radio_props={radio_props}
                      initial={0}
                      onPress={(value) => {
                        setAnswer({ value: value });
                      }}
                      buttonColor={"grey"}
                      selectedButtonColor={"black"}
                      buttonSize={10}
                      buttonOuterSize={15}
                    />
                </View>
                {/* <Text>{course.quiz}</Text>
          <Text>{course.answer1}</Text>
          <Text>{course.answer2}</Text>
          <Text>{course.answer3}</Text>
          <Text>{course.answer4}</Text>
          <Text>{course.answer5}</Text> */}
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
// const QuizMap=({soal})=>{
//     <View>
//         <Text>{soal.quiz}</Text>
//         <Text>{soal.answer1}</Text>
//         <Text>{soal.answer2}</Text>
//         <Text>{soal.answer3}</Text>
//         <Text>{soal.answer4}</Text>
//         <Text>{soal.answer5}</Text>
//     </View>
// }

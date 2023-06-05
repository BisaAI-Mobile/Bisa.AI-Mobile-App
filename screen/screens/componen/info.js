import * as React from "react";
import { Text, StyleSheet, View , ScrollView} from "react-native";
import RenderHtml from "react-native-render-html";
export default function Info({route}) {
  const [data, setData] = useState([]);
  const { id } = route.params;
  const {userInfo} = useContext(AuthContext);
  const url =
  "https://gate.bisaai.id/elearning2/academy/get_customer_course";
  useEffect(() => {
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `JWT ${userInfo.access_token}`);
myHeaders.append("is_free", "0");
myHeaders.append("status", "1");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(url, requestOptions)
  .then(response => response.json())
  .then((json) => 
    setData(json.data))
  .catch(error => console.log('error', error));
  // var myHeaders = new Headers();
  // // var token = window.sessionStorage.getItem("token");
  
  // myHeaders.append("Content-Type", "application/json");
  // myHeaders.append(
  //   "Authorization",
  //   `JWT ${userInfo.access_token}`
  // );

  // var requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  //   redirect: "follow",
  // };
  // fetch(url1, requestOptions)
  //   .then((response) => response.json())
  //   .then((json) => 
  //   setData(json.data))
  //   .catch((error) => console.log("error", error));
  // [searchQuery];
});
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
    <ScrollView>
      <View style={{ padding: 15, gap: 2 }}>
        <View style={styles.container}>
          <Text style={styles.txt2}>{id}</Text>
          <View style={{}}>
            <RenderHtml source={source} tagsStyles={mixedStyle} />
            <View style={{ height: 20 }}></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    padding:10,
    borderRadius: 15,
    backgroundColor: "white",
  },
  txt2: {
    fontWeight: "500",
    fontSize: 20,
  },
  txt3:{
      textAlign: "justify",
      letterSpacing: 0.4,
      lineHeight: 20,
    }
  }
);
// export default Info;

import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { DetailContext } from "./detail_course";
import { useContext, useState, useCallback } from "react";
import RenderHTML from "react-native-render-html";
import * as DocumentPicker from 'expo-document-picker';
import { AuthContext } from "../../auth/Authcontext";
import { MasterDetailContext } from "./masterDetail_course";
// import DocumentPicker, { types } from 'react-native-document-picker';
export default function Tugas2() {
  const { data } = useContext(MasterDetailContext);
  const { userInfo } = useContext(AuthContext);
  const [taskFile, settaskFile]= useState([])
  const navigation = useNavigation();
  _pickDocument = async () => {
  
    let result = await DocumentPicker.getDocumentAsync({});
    
    alert(result.uri);
    settaskFile(result)
    console.log(result);
    
    }
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
  const upload = async()=>{

    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `JWT ${userInfo.access_token}`);
  
  var raw = JSON.stringify({
    'start_task' : [1],
    'id_customer_syllabus': `${data.id_customer_syllabus}`,
    'task_final': `${taskFile.file}`,
    'file_name': `${taskFile.name}`,
    'task_description': "halo",
  });
  
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://gate.bisaai.id/elearning2/academy/update_customer_course", requestOptions)
    .then(response => response.json())
    .then((json) => 
    console.log(json))
    .catch(error => console.log('error', error));
  }
  // const [fileResponse, setFileResponse] = useState([]);

  // const handleDocumentSelection = useCallback(async () => {
  //   try {
  //     const response = await DocumentPicker.pick({
  //       presentationStyle: 'fullScreen',
  //     });
  //     setFileResponse(response);
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // }, []);
  return (
    <ScrollView>
      <View style={{ padding: 15, gap: 15, paddingBottom:10 }}>
        <Text style={styles.txt1}>Tugas :{taskFile.uri}</Text>
        <View>
          <View style={styles.view1}>
            <RenderHTML source={source} tagsStyles={mixedStyle} />
          </View>
        </View>
        <TouchableOpacity
          style={styles.uploadFile}
          // onPress={handleDocumentSelection}
          onPress={this._pickDocument}
        >
          <Text style={styles.loginText}>File</Text>
          <View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          // onPress={handleDocumentSelection}
          onPress={upload}
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
  uploadFile: {
    color: "black",
    backgroundColor: 'white',
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 17,
  },
  loginText: {
    // color: "white",
    fontSize: 15,
  },
});

// export default Tugas;

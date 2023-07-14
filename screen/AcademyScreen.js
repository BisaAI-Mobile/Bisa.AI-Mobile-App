import { ScrollView } from "react-native";
import { View, Text, Image, Dimensions, StyleSheet, ImageBackground} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import AcademyClass from "./components/Academy";
import AcademySpecial from "./components/academySpecial";
const DEVICE_WIDTH = Dimensions.get('window').width;
const special =[
  {uri: require("../assets/images/special1.png"), nama:'Prakerja', desc:'+50 course GRATIS untuk kamu memulai Belajar', link:'http://google.com'},
  {uri: require("../assets/images/special2.png"), nama:'Kampus Merdeka', desc:'+50 course GRATIS untuk kamu memulai Belajar',link:'http://google.com'},
  {uri: require("../assets/images/special3.png"), nama:'Portofolio', desc:'+50 course GRATIS untuk kamu memulai Belajar', link:'https://bisa.ai/portofolio'},
]
const recmaster =[
  {uri: require("../assets/images/FreeCourse.png"), nama:'Free Course', desc:'+50 course GRATIS untuk kamu memulai Belajar', screen:'free'},
  {uri: require("../assets/images/MasterClass.png"), nama:'Master Class', desc:'+50 course GRATIS untuk kamu memulai Belajar', screen:'master'},
  {uri: require("../assets/images/MasterClassOJT.png"), nama:'Master Class+OJT', desc:'+50 course GRATIS untuk kamu memulai Belajar', screen:'masterojt'},
  {uri: require("../assets/images/LearningPath.png"), nama:'Learning Path', desc:'+50 course GRATIS untuk kamu memulai Belajar', screen:'learn'},
]
export default function AcademyScreen() {
    return (
      <ScrollView style={{paddingTop:20, backgroundColor:'#f8f8ff',}}>
        <View style={styles.topBar}>
          <Image source={require("../assets/images/logo.png")} style={{height:40, width:38}}/>
            <View style={{flexDirection:'column', justifyContent:'center'}}>
              <Text style={styles.textTopBar}>Academy</Text>
            </View>
        </View>
        <View>
          <ImageBackground source={require("../assets/images/academy.png")} style={{height:250,width:DEVICE_WIDTH, }}>
            <LinearGradient colors={['transparent','transparent', 'black']} style={styles.linearGradient}>
              <Text style={styles.textBg}>Academy</Text>
              {/* <Text style={styles.textBg2}>in Fronssst of</Text> */}
            </LinearGradient>
          </ImageBackground>
        </View>
        <View style={{padding:20}}>
          <Text style={styles.text2}>Course Academy</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row', justifyContent:'space-between', gap:30, paddingLeft:0, backgroundColor: '#f8f8ff', height:150}}>
                  {recmaster.map((course) => {
                    return (
                      <AcademyClass kelas={course} screenName={course.screen}/>
                    );
                  })}
            </View>
          </ScrollView>
        </View>
        <View style={{padding:20}}>
          <Text style={styles.text2}>Program Spesial</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row', justifyContent:'space-between', gap:30, paddingLeft:0, backgroundColor: '#f8f8ff', height:150}}>
                  {special.map((course) => {
                    return (
                      <AcademySpecial special={course} we={course.w} he={course.h}/>
                    );
                  })}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
  const styles = StyleSheet.create({
    linearGradient: {
      height: 250,
      width: DEVICE_WIDTH,
      flexDirection:"column",
      justifyContent:'flex-end',
      paddingBottom:30
    },
    topBar:{
      height:70,
      width:DEVICE_WIDTH,
      backgroundColor:'#f8f8ff',
      flexDirection:'row',
      justifyContent:'flex-start',
      padding:22,
      gap:10
    },
    textTopBar: {
      fontSize: 22,
      fontWeight: '500',
      letterSpacing: 0.25,
      color: 'black',
    },
    textBg: {
      fontSize: 30,
      fontWeight: '500',
      letterSpacing: 0.25,
      color: 'white',
    },
    textBg2: {
      fontSize: 14,
      fontWeight: '300',
      letterSpacing: 0.25,
      color: 'white',
    },
    containerImage:{
      height:300
    },
    text2: {
      fontSize: 27,
      fontWeight: '500',
      letterSpacing: 0.25,
      color: 'black',
      paddingBottom:15
    },
    text: {
      fontSize: 13,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    },
  })
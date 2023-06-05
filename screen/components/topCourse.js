import { View, Text, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { height } from "@fortawesome/free-solid-svg-icons/faMugSaucer";
const TopCourse = ({ kelas }) => {
    const navigation=useNavigation();
    const linkurl='https://gate.bisaai.id/elearning2/course/media/'
    return(
        <Pressable
        onPress={() =>
            navigation.navigate("detail", {
              data: kelas,
            })
          }
        >
            <View style={styles.buttonShadow}>
                <View style={{backgroundColor:'white', width:250, height:120, padding:7, flexDirection:'row', paddingTop:20, borderRadius: 10}}>
                    <Image source={{uri:`${linkurl}${kelas.photo}`}} style={{width:80, height:80}}/>
                    <View style={{ flexDirection:"column", justifyContent:'flex-start', paddingLeft:7, gap:5, }}>
                        <ScrollView style={{height:50, width:160}} showsVerticalScrollIndicator={false}>
                        <Text style={styles.text}>{kelas.name}</Text>
                        </ScrollView>
                        <View style={{flexDirection:"row", gap:3}}>
                            <Image source={require("../../assets/images/bintang.png")}></Image>
                            <Text style={{fontWeight:'bold'}}>{kelas.rating}</Text>
                        </View>
                        <View style={{flexDirection:"row", gap:3, paddingBottom:10}}>
                            <Image source={require("../../assets/images/silabus.png")}></Image>
                            <Text style={{fontWeight:'bold'}}>{kelas.number_of_syllabus}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    buttonShadow: {
        borderRadius: 8,
        height:120,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
       },
       text: {
        fontSize: 14,
        // lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
})
export default TopCourse;
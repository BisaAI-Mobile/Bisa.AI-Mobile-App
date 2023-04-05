import { View, Text, Image, StyleSheet } from "react-native";

const TopCourse = ({ kelas }) => {
    return(
        <View style={styles.buttonShadow}>
            <View style={{backgroundColor:'white', width:250, height:120, padding:10, flexDirection:'row', paddingTop:20, borderRadius: 10}}>
                <Image source={(kelas.uri)} style={{width:80, height:80}}/>
                <View style={{ flexDirection:"column", justifyContent:'flex-start', paddingLeft:7}}>
                    <Text>{kelas.nama}</Text>
                    <View style={{flexDirection:"row"}}>
                        <Image source={require("../../assets/images/bintang.png")}></Image>
                        <Text>{kelas.stars}</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <Image source={require("../../assets/images/silabus.png")}></Image>
                        <Text>{kelas.silabus}</Text>
                    </View>
                </View>
            </View>
        </View>
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
})
export default TopCourse;
import { View, Text, Image, StyleSheet } from "react-native";

const AcademySpecial = ({ special, he, we }) => {
    return(
        <View style={styles.buttonShadow}>
            <View style={{backgroundColor:'white', width:290, height:120, padding:7, flexDirection:'row', paddingTop:20, borderRadius: 10}}>
                <Image source={(special.uri)} style={{width:80, height:80, resizeMode: 'contain'}}/>
                <View style={{ flexDirection:"column", justifyContent:'flex-start', paddingLeft:7, gap:5, paddingTop:4, width:190}}>
                    <Text style={styles.text}>{special.nama}</Text>
                    <Text>{special.desc}</Text>
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
       text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
})
export default AcademySpecial;
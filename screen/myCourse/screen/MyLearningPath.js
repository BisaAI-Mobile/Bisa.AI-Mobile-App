// React Native Tab
// https://aboutreact.com/react-native-tab/
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const reccourse =[
  {uri: require("../../../assets/images/course.png"), nama:'Data Science', stars:'5,0', silabus:'6'},
  {uri: require("../../../assets/images/course.png"), nama:'Data Science', stars:'5,0', silabus:'6'},
  {uri: require("../../../assets/images/course.png"), nama:'Data Science', stars:'5,0', silabus:'6'},
  {uri: require("../../../assets/images/course.png"), nama:'Data Science', stars:'5,0', silabus:'6'},
]
const countries = ["Egypt", "Canada", "Australia", "Ireland"]
const MyLearningPath = () => {
  const navigation = useNavigation();
    return(
      <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false}showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:20, paddingTop:15 }}>
          <Text style={{fontSize: 24, fontWeight:'bold', letterSpacing: 0.25, color: 'black',}}>Total {reccourse.length} Kelas</Text>
          <View>
            <SelectDropdown
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              defaultButtonText={'Filter'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
              buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
                // search={true}
                // searchPlaceHolder={'filter'}
            />
          </View>
        </View>
        
            <View style={{flexDirection: 'column', justifyContent:'space-between', gap:16, alignItems:'center', padding:10, backgroundColor: '#f8f8ff',}}>
              {reccourse.map((course) => {
                return (
                  <View style={styles.buttonShadow}>
                    <View style={{backgroundColor:'white', width:350, paddingHorizontal:30,padding:20, justifyContent:'flex-start', flexDirection:'row', paddingTop:20, borderRadius: 10}}>
                        <Image source={(course.uri)} style={{width:80, height:80}}/>
                        <View style={{ flexDirection:"column", justifyContent:'flex-start', paddingLeft:7, gap:5, paddingTop:4}}>
                            <Text style={styles.text}>{course.nama}</Text>
                            <View style={{flexDirection:"row", gap:3}}>
                                <Text style={{fontWeight:'bold'}}>{course.stars}</Text>
                            </View>
                            <View style={{flexDirection:"row", gap:3}}>
                                <Text style={{fontWeight:'bold'}}>{course.silabus}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                );
              })}
            </View>
        </ScrollView>
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f8f8ff'

    },
    dropdownsRow: {flexDirection: 'row', paddingHorizontal: '5%'},
    buttonShadow: {
      justifyContent:'center',
        borderRadius: 8,
        height:120,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        width:350,
        // shadowOffset: {
        //   width: 0,
        //   height: 1,
        // },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
       },
       text: {
        fontSize: 18,
        // lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
      dropdown1BtnStyle: {
        // flex: 1,
        height: 40,
        width:100,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#a9a9a9',
        
      },
      dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left', fontSize:12},
      dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
      dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
      dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
      divider: {width: 12},
})
export default MyLearningPath;
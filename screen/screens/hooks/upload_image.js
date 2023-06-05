import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function UploadImage() {
  const [image, setImage] = useState(null);
  const addImage=()=>{};
  return (
            <View style={imageUploaderStyles.container}>
                {
                    image  && <Image source={{ uri: image }} 
                    // style={{ width: 180, height: 180 }} 

                    />
                }
                    <View style={imageUploaderStyles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage} style={imageUploaderStyles.uploadBtn} >
                            <Text>{image ? 'Edit' : 'Upload'} Image</Text>
                            <AntDesign name="camera" size={18} color="black" />
                        </TouchableOpacity>
                    </View>
            </View>
  );
}
const imageUploaderStyles=StyleSheet.create({
    container:{
        elevation:2,
        height:112,
        width:117,
        backgroundColor:'#efefef',
        position:'relative',
        borderRadius:300,
        overflow:'hidden',
    },
    uploadBtnContainer:{
        opacity:0.7,
        position:'absolute',
        right:0,
        bottom:0,
        backgroundColor:'lightgrey',
        width:'100%',
        height:'35%',
    },
    uploadBtn:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center'
    }
})
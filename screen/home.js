
import React, { Component } from 'react';  
import { View, Text, StyleSheet, ScrollView, Button, Alert, Pressable } from "react-native";
import {Carousel} from 'react-native-auto-carousel';
import {Dimensions, Image} from 'react-native';
import TopCourse from './components/topCourse';
const DEVICE_WIDTH = Dimensions.get('window').width;
// const IMAGES = ['./images/3.png','../images/2.png', '../images/1.png']
const GAMBAR =[{uri: require("../assets/images/1.png") },
{uri: require("../assets/images/2.png") },
{uri: require("../assets/images/3.png")  },
{uri: require("../assets/images/4.png")  }]
const reccourse =[
  {uri: require("../assets/images/course.png"), nama:'Data Science', stars:'5,0', silabus:'6'},
  {uri: require("../assets/images/course.png"), nama:'Data Science', stars:'5,0', silabus:'6'},
  {uri: require("../assets/images/course.png"), nama:'Data Science', stars:'5,0', silabus:'6'},
  {uri: require("../assets/images/course.png"), nama:'Data Science', stars:'5,0', silabus:'6'},
]

export default function HomeScreen () {
return (
  <ScrollView>
    <View style={styles.container}>
    </View>
    <View style={{backgroundColor:'white', height:110}}>
      
    </View>
    <View style={styles.containercarousel}>
      <Carousel
        data={GAMBAR}
        renderItem={item => (
          <Image
            key={item}
            source={item.uri}
            style={styles.gambar}
          />
        )}
      />
    </View>
    <View>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <View style={{width:'100%', height: 130, backgroundColor: '#f8f8ff', flexDirection: 'column',justifyContent: 'center',}}>
          <View style={{flex: 1, flexDirection: 'row', padding:13, justifyContent:'space-around', alignItems:'center'}}>
            <View style={{flex: 1, flexDirection: 'column', padding:13, justifyContent:'space-around', height:130}}>
              <Pressable style={styles.buttonShadow}>
                <View style={styles.buttonContainer}>
                  <Image source={require("../assets/images/button1.png")}/>
                  <Text style={styles.text}>Free Course</Text>
                </View>
              </Pressable>
              <Pressable style={styles.buttonShadow}>
                <View style={styles.buttonContainer}>
                  <Image source={require("../assets/images/button2.png")}/>
                  <Text style={styles.text}>Master Class+OJT</Text>
                </View>
              </Pressable>
            </View>
            <View style={{flex: 1, flexDirection: 'column', padding:13, justifyContent:'space-around', height:130}}>
              <Pressable style={styles.buttonShadow}>
                <View style={styles.buttonContainer}>
                  <Image source={require("../assets/images/button3.png")}/>
                  <Text style={styles.text}>Certificate</Text>
                </View>
              </Pressable>
              <Pressable style={styles.buttonShadow}>
                <View style={styles.buttonContainer}>
                  <Image source={require("../assets/images/button4.png")}/>
                  <Text style={styles.text}>Learning Path</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    <View>
      <Text>Master Course</Text>
    </View>
    <View>
      <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row', justifyContent:'space-between', gap:30, paddingLeft:20, backgroundColor:'white', height:150}}>
            {reccourse.map((course) => {
              return (
                <TopCourse kelas={course}/>
              );
            })}
          </View>
      </ScrollView>
    </View>
    <View>
      <Text>Master Course</Text>
    </View>
    <View>
      <ScrollView horizontal={true}>
          <View style={{width:1000, flexDirection: 'row', justifyContent:'space-around'}}>
            <View/>
          </View>
      </ScrollView>
    </View>
    </View>
  </ScrollView>
    )}
    const styles = StyleSheet.create({
      text: {
        fontSize: 12,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
      container: {
        backgroundColor: 'grey',
        height:80
      },
      containercarousel: {
        backgroundColor: 'pink',
        height:200
      },
      gambar: {
        width:DEVICE_WIDTH,
        backgroundColor:'#f0f8ff'
      },
      buttonShadow: {
        borderRadius: 8,
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
       buttonContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        height:40,
        padding:9,
        flexDirection:'row',
        justifyContent:'center'

       },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'blue',
        height:200
      },
      fixToText2: {
        flexDirection: 'column',
        backgroundColor: 'red',
        height:200,
        flexWrap: "wrap"
      },
    
    })
import { View, Text,Image,TouchableOpacity ,StyleSheet,Dimensions } from 'react-native'
import React,{useState} from 'react';

import {COLORS, SIZES, dummyData, icons,FONTS} from '../constants';
import TimeIcon from './TimeIcon';



export default function CoursesCard({course,index} ) {
  return (
    <>
    <TouchableOpacity style={[style.container,{
      marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
      marginRight:
      index == dummyData.courses_list_1.length - 1 ? SIZES.padding : 0
    }]}>
      <Image source={course.thumbnail} resizeMode="cover" style={style.imageStyle}></Image>

    <View style={style.DetailStyle}>
      {/* play Button */}
      <View style={style.IconStyle}>
        <Image source={icons.play} resizeMode="contain" style={style.IconImage}/>
      </View>
      {/* Info */}
      <View style={style.InfoStyle}>
        <Text style={style.Infotitle} >{course?.title}</Text>
        <TimeIcon label={course.duration}/>
      </View>
    </View>
    </TouchableOpacity>
      </>
  )
}

const style=StyleSheet.create({
  container :{
    width : 270,
    // width: '100%', // Use a relative width to adapt to screen size
    // marginBottom: SIZES.radius, // Maintain consistent spacing
  },
  imageStyle:{
    width :"100%",
    height: 150,
    marginBottom : SIZES.radius,
    borderRadius : SIZES.radius
  },
  DetailStyle:{
    flexDirection : 'row'
  },
  IconStyle:{
    width : 45,
    height : 45,
    alignItems :'center',
    justifyContent : 'center',
    borderRadius : 25,
    backgroundColor : COLORS.primary
  },
  IconImage:{
    width : 20,
    height : 20,
  },
  InfoStyle:{
    flexShrink : 1,
    paddingHorizontal: SIZES.radius
  },
  Infotitle:{
    flex: 1,
    ...FONTS.h3,
    fontSize : 18,
    fontWeight :'bold',
    color : 'black'
  }

})
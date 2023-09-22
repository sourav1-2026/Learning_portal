import { View, Text,Image,TouchableOpacity ,StyleSheet } from 'react-native'
import React from 'react';

import { SIZES} from '../constants';

// type Course = {
//   id: number;
//   title: string;
//   duration: string;
//   thumbnail: string;
// };

export default function CoursesCard({containerStyle,course}) {
  return (
    <TouchableOpacity style={[style.container,...containerStyle]}>

      <Image source={course.thumbnail} resizeMode="cover" style={style.imageStyle}></Image>
    </TouchableOpacity>
  )
}

const style=StyleSheet.create([
  container ={
    width : 270,
    // ...conatinerStyle
  },
  imageStyle={
    width :"100%",
    height: 150,
    marginButton : SIZES.radius,
    borderRadius : SIZES.radius
  }
])
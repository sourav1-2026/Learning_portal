import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {SIZES, COLORS, FONTS, icons, dummyData} from '../constants';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TimeIcon from './TimeIcon';
import LineDivider from './LineDivider';

export default function PopularCourseCard({PopularCourse, index}: any) {
  //   console.log(PopularCourse);
  return (
    <View>
      <TouchableOpacity
        style={[
          style.container,
          {
            marginLeft: SIZES.padding,
            marginTop: index == 0 ? SIZES.radius : SIZES.padding,
          },
        ]}>
        <ImageBackground
          source={PopularCourse.thumbnail}
          resizeMode="cover"
          style={style.styleImageBackground}
          imageStyle={{
            borderRadius: SIZES.radius,
          }}>
          <View style={style.favIcon}>
            <Image
              source={icons.favourite}
              resizeMode="contain"
              style={[
                {
                  tintColor: PopularCourse.is_favourite
                    ? Colors.secondary
                    : COLORS.additionalColor4,
                },
                style.styleImage,
              ]}
            />
          </View>
        </ImageBackground>
        {/* Details PopularCourse */}

        <View style={style.detailStyle}>
          <Text style={style.detailText}>{PopularCourse.title}</Text>
          {/* Instructor and Duration */}
          <View style={style.InstructorDuration}>
            <Text style={{...FONTS.body4, fontWeight: 'bold'}}>
              By {PopularCourse.instructor}
            </Text>
            <TimeIcon
              label={PopularCourse.duration}
              iconstyle={{marginLeft: SIZES.base, width: 15, height: 15}}
              sourceIcon={icons.time}
            />
          </View>
          {/* price and rating */}
          <View style={style.pricestyle}>
            <Text style={{...FONTS.h2, color: COLORS.primary}}>
              ${PopularCourse.price.toFixed(2)}
            </Text>
            <TimeIcon
              label={PopularCourse.ratings}
              sourceIcon={icons.star}
              iconstyle={{
                width: 15,
                height: 15,
                tintColor: COLORS.primary2,
                marginLeft: 5,
              }}
              labelStyle={{
                marginLeft: 5,
                color: COLORS.black,
                ...FONTS.h3,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {index != dummyData.courses_list_2.length - 1 ? <LineDivider /> : null}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  styleImageBackground: {
    width: 130,
    height: 130,
    marginBottom: SIZES.radius,
  },
  favIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.white,
  },
  styleImage: {
    width: 20,
    height: 20,
  },

  detailStyle: {
    flex: 1,
    marginLeft: SIZES.base,
  },
  detailText: {
    ...FONTS.h3,
    fontSize: 18,
    color: 'black',
  },
  InstructorDuration: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.base,
  },

  pricestyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.base,
  },
});

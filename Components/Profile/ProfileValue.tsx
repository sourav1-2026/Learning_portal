import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS, icons} from '../../constants';

type profilevalueprop = {
  icon: any;
  label?: string;
  value: string;
  onPress?: () => void;
};

export default function ProfileValue({
  icon,
  label,
  value,
  onPress,
}: profilevalueprop) {
  return (
    <TouchableOpacity onPress={onPress} style={style.container}>
      {/* icon */}

      <View style={style.icon}>
        <Image source={icon} resizeMode="contain" style={style.image} />
      </View>
      {/*label and value  */}
      <View style={style.labelandValue}>
        {label && (
          <Text style={{color: COLORS.gray30, ...FONTS.body3}}>{label}</Text>
        )}
        <Text style={{...FONTS.h3, fontWeight: 'bold', color: COLORS.black}}>
          {value}
        </Text>
      </View>
      <Image
        source={icons.right_arrow}
        style={{
          width: Platform.OS == 'ios' ? 15 : 13,
          height: Platform.OS == 'ios' ? 15 : 13,
        }}
      />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Platform.OS == 'ios' ? 20 : 18,
    backgroundColor: COLORS.additionalColor11,
  },
  image: {
    width: Platform.OS == 'ios' ? 25 : 23,
    height: Platform.OS == 'ios' ? 25 : 23,
    tintColor: COLORS.primary,
  },
  labelandValue: {
    flex: 1,
    marginLeft: SIZES.radius,
  },
});

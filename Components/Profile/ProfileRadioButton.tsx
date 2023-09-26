// 1.52.04
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, icons} from '../../constants';
import Animated, {useSharedValue} from 'react-native-reanimated';

type RadioButton = {
  icon: any;
  label: string;
  isSelected: boolean;
  onPress: () => void;
};

export default function ProfileRadioButton({
  icon,
  label,
  isSelected,
  onPress,
}: RadioButton) {
  const radioAnimated = useSharedValue(0);
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20,
          backgroundColor: COLORS.additionalColor11,
        }}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{width: 25, height: 25, tintColor: COLORS.primary}}
        />
      </View>
      {/* label */}
      <View style={{flex: 1, marginLeft: SIZES.radius}}>
        <Text style={{...FONTS.h3, color: COLORS.black, fontWeight: 'bold'}}>
          {label}
        </Text>
      </View>
      {/* Radio Button */}
      <TouchableOpacity style={styles.radioButton} onPress={onPress}>
        <Animated.View style={styles.animatedLine} />

        <Animated.View style={styles.animatedCircle} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
  },
  radioButton: {
    width: Platform.OS == 'ios' ? 40 : 38,
    height: Platform.OS == 'ios' ? 40 : 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedLine: {
    width: '100%',
    height: 5,
    borderRadius: 3,
    backgroundColor: COLORS.primary,
  },
  animatedCircle: {
    position: 'absolute',
    left: 0,
    width: 25,
    height: 25,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: COLORS.primary3,
    backgroundColor: COLORS.white,
  },
});

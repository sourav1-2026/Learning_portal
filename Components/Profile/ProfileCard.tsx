import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons, images, FONTS} from '../../constants';
import PrograssBar from './PrograssBar';
import TextButton from '../Common/TextButton';

export default function ProfileCard() {
  const handlepress = () => {
    console.log('Member Button pressed');
  };
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.Profile}>
        <Image source={images.profile} style={style.image} />
        <View style={style.camera}>
          <View style={style.camerIcon}>
            <Image
              source={icons.camera}
              resizeMode="contain"
              style={{
                width: Platform.OS == 'ios' ? 17 : 15,
                height: Platform.OS == 'ios' ? 17 : 15,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {/* Detail section */}

      <View style={style.Details}>
        <Text style={style.detailtext}>Sourav shaw</Text>
        <Text style={{color: COLORS.white, ...FONTS.h4}}>
          Full stack Developer
        </Text>
        <PrograssBar progress={58} containerStyle={{marginTop: SIZES.radius}} />
        <View style={style.progressStyle}>
          <Text style={{flex: 1, color: COLORS.white, ...FONTS.body4}}>
            Overall Progress
          </Text>
          <Text style={{color: COLORS.white, ...FONTS.body4}}>58%</Text>
        </View>
        {/* Become a Member */}
        <TextButton
          text="+ Become Member"
          disabled={false}
          onPress={handlepress}
          labeStyle={{color: COLORS.primary}}
          contentContainerStyle={{
            height: Platform.OS == 'ios' ? 35 : 33,
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.radius,
            borderRadius: Platform.OS == 'ios' ? 20 : 18,
            backgroundColor: COLORS.white,
            justifyContent: 'center',
          }}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    paddingVertical: 20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary3,
  },
  Profile: {
    height: Platform.OS == 'ios' ? 80 : 78,
    width: Platform.OS == 'ios' ? 80 : 78,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: Platform.OS == 'ios' ? 40 : 38,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  camera: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // backgroundColor: COLORS.white,
  },
  camerIcon: {
    width: Platform.OS == 'ios' ? 30 : 28,
    height: Platform.OS == 'ios' ? 30 : 28,
    marginBottom: Platform.OS == 'ios' ? -15 : -17,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: COLORS.primary,
  },

  Details: {
    flex: 1,
    marginLeft: SIZES.radius,
    alignItems: 'flex-start',
  },

  detailtext: {
    color: COLORS.white,
    ...FONTS.h2,
  },
  progressStyle: {
    flexDirection: 'row',
  },
});

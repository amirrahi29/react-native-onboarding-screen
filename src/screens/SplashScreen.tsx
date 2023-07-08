import { View, Image, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AllColors } from '../global_equipments/AllColors';
import { AllImages } from '../global_equipments/AllImages';
import { AllDimensions } from '../global_equipments/AllDimensions';
import Background from '../global_equipments/Background';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

type RootStackParamList = {
  OnBoardingScreen: undefined
}

type Props = {
  navigation: NavigationProp<RootStackParamList>
}

const SplashScreen = () => {

  const navigation = useNavigation<Props['navigation']>();
  const [DarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    getSession();
  }, []);

  const getSession = async () => {
    let data = await AsyncStorage.getItem('ONBOARD');
    if (data === 'true') {
      launchScreen('HomeScreen');
    } else {
      launchScreen('OnBoardingScreen');
    }
  }

  const launchScreen = (screenName: any) => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: screenName }]
      });
    }, 3000);
  }

  return (
    <Background>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <StatusBar
          barStyle={DarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={DarkMode ? AllColors.blackColor : AllColors.whiteColor}
        />
        <Image source={AllImages.LOGO_URL}
          style={{
            height: AllDimensions.threeHundred,
            width: AllDimensions.width - AllDimensions.oneHundred
          }} />
      </View>
    </Background>
  )
}

export default SplashScreen
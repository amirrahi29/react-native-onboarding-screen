import { View, Text, StatusBar, Image } from 'react-native'
import React, { useState } from 'react'
import Background from '../global_equipments/Background'
import { AllColors } from '../global_equipments/AllColors'
import AppIntroSlider from 'react-native-app-intro-slider'
import { OnBoardingList } from '../global_equipments/OnBoardingList'
import { AllDimensions } from '../global_equipments/AllDimensions'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { OnBoardingCss } from '../global_equipments/custom_css/OnBoardingCss'

type RootParams = {
  HomeScreen: undefined
}

type Props = {
  navigation: NavigationProp<RootParams>
}

const OnBoardingScreen = () => {

  const [DarkMode, setDarkMode] = useState(false);
  const navigation = useNavigation<Props['navigation']>();

  const myCustomButton = (title: any) => {
    return (
      <>
        <View>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
        </View>
      </>
    )
  }

  const setSession = async () => {
    try {
      await AsyncStorage.setItem('ONBOARD', 'true');
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }]
      })
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <Background>
      <StatusBar
        barStyle={DarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={DarkMode ? AllColors.blackColor : AllColors.whiteColor}
      />
      <AppIntroSlider
        data={OnBoardingList}
        renderItem={({ item }) => {
          return (
            <>
              <View style={{
                flex: AllDimensions.one, justifyContent: 'center',
                alignItems: 'center', padding: AllDimensions.sixteen
              }}>
                <Image source={item.image} style={OnBoardingCss.imageCss} resizeMode='contain' />
                <Text style={OnBoardingCss.titleCss}>{item.title}</Text>
                <Text style={OnBoardingCss.descriptionCss}>{item.description}</Text>
              </View>
            </>
          )
        }}
        activeDotStyle={{
          backgroundColor: AllColors.redColor,
          width: AllDimensions.thirty
        }}
        showSkipButton
        renderNextButton={() => myCustomButton('Next')}
        renderSkipButton={() => myCustomButton('Skip')}
        renderDoneButton={() => myCustomButton('Done')}
        onDone={() => setSession()}
      />
    </Background>
  )
}

export default OnBoardingScreen
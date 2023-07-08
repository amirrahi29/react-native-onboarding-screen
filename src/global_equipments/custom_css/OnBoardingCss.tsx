import { AllColors } from "../AllColors";
import { AllDimensions } from "../AllDimensions";
import { StyleSheet } from 'react-native';

export const OnBoardingCss = StyleSheet.create({
    imageCss: {
        height: AllDimensions.threeHundred,
        width: '100%'
    },
    titleCss: {
        color: AllColors.blackColor,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: AllDimensions.sixteen
    },
    descriptionCss: {
        color: AllColors.blackColor,
        textAlign: 'center'
    }
})
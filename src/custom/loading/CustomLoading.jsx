import React from "react";
import { 
    StyleSheet, 
    StatusBar,
    ImageBackground, 
    Image
 } from 'react-native'

 import {
    Box,
 } from 'native-base'
import FastImage from "react-native-fast-image";

import { landingBg, loadingBg, gearLoading } from "../../assets";

function CustomLoading () {

    return(
        <ImageBackground
        source={landingBg}
        style={s.backRoot}
        >
            <Box
            marginTop={StatusBar.currentHeight} 
            height={'100%'}
            width={'100%'}
            alignItems={'center'} 
            justifyContent={'center'}
            >
            <Box 
            height={'200'} 
            width={'100%'}
            position={'absolute'}
            top={'30%'}
            >          
                    <Image 
                    source={loadingBg}
                    style={s.imageSize} 
                    />
            </Box>

            <Box 
            height={'100'}
            width={'200'}
            alignItems={'center'}
            position={'absolute'}
            bottom={'20%'}
            >
                <FastImage
                    source={gearLoading}
                    style={s.fastSize}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </Box>
        </Box>
        </ImageBackground>
    )
}

export default CustomLoading

const s = StyleSheet.create ({
    backRoot: {
        flex: 1,
    },
    imageSize: {
        height: '100%', 
        width: '100%', 
        resizeMode: 'contain'
    },
    fastSize: {
        height: 100, 
        width: 100 
    }
})
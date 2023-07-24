import React, { useState } from "react";
import 
{ 
  StatusBar,
  ImageBackground, 
  Image,
} from 'react-native'

import 
{ 
  Box, 
  VStack, 
} from "native-base";

import * as Animatable from 'react-native-animatable';

import s from "./style";
import SignInForm from "./SignInForm";
import { landingBg, mainLogo } from "../../assets";
import { CustomButton } from '../../custom';


function LandingScreen({navigation}) {
    const [ showForm, setShowForm ] = useState(false);
    
    const handleShowForm = () => {
      setShowForm(!showForm)
    }

    const handleSkip = () => {
      navigation.navigate('Home')
    }

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
        >
           
            <Box 
            height={'150'} 
            width={'100%'}
            position={'absolute'}
            top={'20%'}
            >          
            <Animatable.View animation="zoomIn" duration={500}> 
                    <Image 
                    source={mainLogo}
                    style={{
                        height: '100%', 
                        width: '100%', 
                        resizeMode: 'contain'
                    }} 
                    />
            </Animatable.View>
            </Box>
     { showForm ? 
     (
      <Animatable.View animation={ showForm ? 'slideInUp' : 'fadeOut' } duration={500} style={s.fullSize}> 
      <Box 
      height={'350'}
      width={'100%'}
      borderWidth={1}
      borderRadius={20}
      borderColor={'#FFFFFF'}
      bgColor={'#FFFFFF'}
      position={'absolute'}
      bottom={'5%'}
      >
        <VStack
          space={1}
          alignItems={'center'}
          > 
       <Animatable.View animation="bounceIn" duration={1500} style={s.closeButton}>    
        <CustomButton 
              onTap={handleShowForm}
              h={40}
              w={40}
              frameRadius={50}
              bgColor={'#FFFFFF'}
              float={10}
              iContainer={true}
              iContainerH={40}
              iContainerW={40}
              iconVerify={true}
              iconName={'X'}
              iconSize={30}
              iconColor={'#B61616'}
              />           
          </Animatable.View> 

          <Box
          marginTop={5}
          height={45}
          width={'30%'}
          alignItems={'center'}
          justifyContent={'center'}
          >
            <Animatable.Text animation='fadeIn' duration={1500} style={s.signInHeader}>
              SIGN IN
            </Animatable.Text>            
          </Box>  

          <SignInForm />
          </VStack>      
      </Box>
      </Animatable.View>
     ) : (
      <Animatable.View animation={ showForm ? 'slideInDown' : 'fadeIn' } duration={1500} style={s.fullSize}> 
      <Box 
      height={'200'}
      width={'100%'}
      position={'absolute'}
      bottom={'5%'}
      >
          <VStack
          space={5}
          alignItems={'center'}
          >       
           
              <CustomButton 
              onTap={handleShowForm}
              h={45}
              w={'80%'}
              frameRadius={20}
              bgColor={'#FFFFFF'}
              float={20}
              textVerify={true}
              textLabel={'SIGN IN'}
              textSize={18}
              textWeight={'900'}
              textSpacing={1.5}
              textColor={'#B61616'}
              />
        
              <CustomButton
              onTap={handleSkip}
              h={45}
              w={'80%'}
              frame={1.5}
              frameRadius={20}
              frameColor={'#FFFFFF'}
              bgColor={'transparent'}
              float={20}
              textVerify={true}
              textLabel={'SKIP FOR NOW'}
              textSize={18}
              textWeight={'900'}
              textSpacing={1.5}
              textColor={'#FFFFFF'}
              />
                
          </VStack>               
      </Box>
    </Animatable.View> 
      )         
    }  
    </Box>
    </ImageBackground>
    )

}

export default LandingScreen


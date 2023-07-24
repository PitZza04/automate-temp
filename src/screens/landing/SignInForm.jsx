import React, { useState } from "react";
import { Text } from 'react-native'
import 
{ 
  Box,  
} from "native-base";

import s from "./style";
import { CustomInput, CustomButton } from "../../custom";

function SignInForm ()
{
    const [phoneNumber, setPhoneNumber] = useState('');
    const [hashedPhoneNumber, setHashedPhoneNumber] = useState('');
    const [showOtpForm, setShowOtpForm] = useState(true);;

    const handleNumberChange = (value) => {
        if (value.length <= 10) {
          const lastThreeDigits = phoneNumber.slice(-3); 
          const maskedDigits = phoneNumber.slice(0, -3).replace(/\d/g, "*");       
          const maskedPhoneNumber = maskedDigits + lastThreeDigits;
          setPhoneNumber(value);
          setHashedPhoneNumber(maskedPhoneNumber);
      } else {
        setPhoneNumber(value.substring(0, 10));
      }
      };

    const handleSendOtp = () => {  
      console.log(phoneNumber);
      console.log(hashedPhoneNumber);
    };
      
    return (

      <Box
          height={250}
          width={'100%'}
          alignItems={'center'}
          justifyContent={'space-evenly'}
          >
         
      <Box
      height={45}
      width={'90%'}
      alignItems={'center'}
      justifyContent={'center'}
      >
        <CustomInput 
        value={phoneNumber}
        onChangeValue={handleNumberChange}
        autoCorrect={false}
        keyboardType={'number-pad'}
        maxLength={10}
        containerH={45}
        containerW={300}
        conJustify={'center'}
        flexRow={true}
        frame={0.5}
        frameRadius={5}
        frameColor={'#000000'}

        inputH={45}
        inputW={'70%'}
        inputPX={10}
        inputFrameR={0.5}
        inputFrameL={0.5}
        inputTextSize={16}
        inputTextWeight={'900'}
        inputTextColor={'#000000'}

        tConL={true}
        tConLH={45}
        tConLW={45}
        tConLLabel={'+63'}

        iConR={true}
        iConRH={45}
        iConRW={45}
        iconRName={'Smartphone'}
        iconRSize={25}
        iconRColor={'#B61616'} 
        />
      </Box>

      <Box
      marginTop={1}
      height={20}
      width={'80%'}
      alignItems={'center'}
      justifyContent={'center'}
      >
        <Text style={s.formLabel}>
            We will send OTP (one time password) via SMS.
        </Text>
        
      </Box>

      <Box
      marginTop={1}
      height={45}
      width={'80%'}
      alignItems={'center'}
      justifyContent={'center'}
      >

        <CustomButton
          onTap={handleSendOtp}
          h={45}
          w={'100%'}
          frameRadius={20}
          bgColor={'#B61616'}
          float={20}
          textVerify={true}
          textLabel={'SEND OTP'}
          textSize={18}
          textWeight={'900'}
          textSpacing={1.5}
          textColor={'#FFFFFF'}
          />
      </Box>

      </Box>
    )
}

export default SignInForm;
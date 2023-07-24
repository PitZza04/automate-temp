import React from "react";
import { View, TextInput, Text } from "react-native";

import CustomIcon from "../icon/CustomIcon";

function CustomInput ({
    // Functions
    name,
    value,
    onChangeValue,
    onSubmitEditing,
    onFocus,
    onBlur,
    editable,
    secureTextEntry,
    autoCapitalize,
    autoCorrect,
    autoComplete,
    multiline,
    keyboardType,
    returnKeyType,
    maxLength,
    label,
    labelColor,
    // Main Container
    conJustify,
    conH,
    conW,
    conMH,
    conMW,  
    conBg, 
    m,
    mX,
    mY,
    mT,
    mB,
    mR,
    mL,
    p,
    pX,
    pY,
    pT,
    pB,
    pR,
    pL,

    flexRow = false,
    frame,
    frameT,
    frameB,
    frameR,
    frameL,
    frameRadius,
    frameColor,
    frameTColor,
    frameBColor,
    frameRColor,
    frameLColor,

    float,
    //TextInput Styles
    inputH,
    inputW,
    inputMH,
    inputMW,
    inputP,
    inputPX,
    inputPY,
    inputPT,
    inputPB,
    inputPR,
    inputPL,
    inputFrame,
    inputFrameT,
    inputFrameB,
    inputFrameR,
    inputFrameL,
    inputFrameRadius,
    inputFrameColor,
    inputFrameTColor,
    inputFrameBColor,
    inputFrameRColor,
    inputFrameLColor,

    inputBg,
    // Fonts
    inputTextSize,
    inputTextWeight,
    inputTextSpacing,
    inputTextColor,
    inputTextAlign,
    // Icon Left
    iConL = false,
    iConLH,
    iConLW,

    iconLName,
    iconLSize,
    iconLColor,
    // Icon Right
    iConR = false,
    iConRH,
    iConRW,

    iconRName,
    iconRSize,
    iconRColor,
    // Text Left
    tConL = false,
    tConLH,
    tConLW,
    tConLLabel,

    // Text Right
    tConR = false,
    tConRH,
    tConRW,

    tconRName,
    tconRSize,
    tconRColor,

})

{
    return (
        <View
        style={{
            alignItems: 'center',
            justifyContent: conJustify,
            flexDirection: flexRow ? 'row' : 'column',
            height: conH,
            width: conW,
            maxHeight: conMH,
            maxWidth: conMW,
            backgroundColor: conBg,
            margin: m,
            marginHorizontal: mX,
            marginVertical: mY,
            marginTop: mT,
            marginBottom: mB,
            marginRight: mR,
            marginLeft: mL,
            padding: p,
            paddingHorizontal: pX,
            paddingVertical: pY,
            paddingTop: pT,
            paddingBottom: pB,
            paddingRight: pR,
            paddingLeft: pL,

            borderWidth: frame,
            borderTopWidth: frameT,
            borderBottomWidth: frameB,
            borderRightWidth: frameR,
            borderLeftWidth: frameL,
            borderRadius: frameRadius,
            borderColor: frameColor,
            borderTopColor: frameTColor,
            borderBottomColor: frameBColor,
            borderRightColor: frameRColor,
            borderLeftColor: frameLColor,

            elevation: float,
        }}
        >
        { tConL && 
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: tConLH,
                width: tConLW,
            }}
            >
                <Text style={{
                    fontSize: inputTextSize,
                    fontWeight: inputTextWeight,
                    letterSpacing: inputTextSpacing,
                    color: inputTextColor,
                }}>
                    {tConLLabel}
                </Text>          
            </View> 
        }

        { iConL && 
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: iConLH,
                width: iConLW,
            }}
            >
                <CustomIcon name={iconLName} size={iconLSize} color={iconLColor}/>              
            </View> 
        }

            <TextInput 
            name={name}
            value={value}
            onChangeText={onChangeValue}
            onSubmitEditing={onSubmitEditing}
            onFocus={onFocus}
            onBlur={onBlur}
            editable={editable}
            secureTextEntry={secureTextEntry}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            autoComplete={autoComplete}
            multiline={multiline}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            maxLength={maxLength}

            placeholder={label}
            placeholderTextColor={labelColor}

            style={{
            height: inputH,
            width: inputW,  
            maxHeight: inputMH,         
            maxWidth: inputMW,            
            padding: inputP,
            paddingHorizontal: inputPX,
            paddingVertical: inputPY,
            paddingTop: inputPT,
            paddingBottom: inputPB,
            paddingRight: inputPR,
            paddingLeft: inputPL,

            borderWidth: inputFrame,
            borderTopWidth: inputFrameT,
            borderBottomWidth: inputFrameB,
            borderRightWidth: inputFrameR,
            borderLeftWidth: inputFrameL,
            borderRadius: inputFrameRadius,
            borderColor: inputFrameColor,
            borderTopColor: inputFrameTColor,
            borderBottomColor: inputFrameBColor,
            borderRightColor: inputFrameRColor,   
            borderLeftColor: inputFrameLColor,  
            
            backgroundColor: inputBg,
            
            fontSize: inputTextSize,
            fontWeight: inputTextWeight,
            letterSpacing: inputTextSpacing,
            color: inputTextColor,
            textAlign: inputTextAlign,
            }}
            />

        { iConR && 
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: iConRH,
                width: iConRW,
            }}
            >
                <CustomIcon name={iconRName} size={iconRSize} color={iconRColor}/>              
            </View> 
        }
        </View>
    )
}

export default CustomInput;
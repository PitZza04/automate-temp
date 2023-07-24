import React from "react";
import 
{
    TouchableOpacity,
    Text,
    View,
    Image,
} from 'react-native';

import CustomIcon from "../icon/CustomIcon";

function CustomButton ({
    // Touch Functions
    onTap, // onPress
    onTapIn, // onPressIn
    onTapOut, // onPressOut
    onLongTap, // onLongPress
    onFocus, // onFocus
    onBlur, // onBlur
    // Sizing and positioning
    p, // All padding of TouchableOpacity
    px, // Horizontal padding of TouchableOpacity
    py, // Vertical padding of TouchableOpacity
    m, // All margin of TouchableOpacity
    mx, // Horizontal margin of TouchableOpacity
    my, // Vertical margin of TouchableOpacity
    h, // TouchableOpacity height
    w, // TouchableOpacity width
    mh, // TouchableOpacity maxheight
    mw, // TouchableOpacity maxwidth
    pos, // TouchableOpacity position
    posT, // Adjust Top positioning of TouchableOpacity
    posB, // Adjust Bottom positioning of TouchableOpacity
    posR, // Adjust Right positioning of TouchableOpacity
    posL, // Adjust Left positioning of TouchableOpacity
    // Border
    frame, // BorderWidth of TouchableOpacity
    frameRadius, // BorderRadius of TouchableOpacity
    frameColor, // BorderColor of TouchableOpacity
    // Styles
    bgColor, // BackgroundColor of TouchableOpacity
    float, // Elevation of TouchableOpacity
    flexRow = false, // FlexDirection of contents in TouchableOpacity, Verifier if you want to use it.
    // Text
    textVerify = false, // Text in TouchableOpacity, Verifier if you want to use it.
    textLabel,  // Placeholder of TouchableOpacity
    textSize, // fontSize of TouchableOpacity
    textWeight, // fontWeight of TouchableOpacity
    textColor, // Color of text in TouchableOpacity
    textSpacing, // Line spacing of text in TouchableOpacity
    textLine, // textDecorationLine of text in TouchableOpacity, good if you want links.
    textLineColor, // Color of textDecorationLine in TouchableOpacity.
    // Text Padding and Text Positioning
    textPt,
    textPb,
    textPr,
    textPl,
    textPos,
    textPosT,
    textPosB,
    textPosR,
    textPosL,
    // Image and Icons
    imageVerify = false,
    imageSource,
    imageH,
    imageW,
    imageResize, 

    iconVerify = false,
    iconName,
    iconSize,
    iconColor,

    iContainer = false,
    iContainerH,
    iContainerW,
    iPos,
    iPosT,
    iPosB,
    iPosR,
    iPosL,   
})
{
    return (
        <TouchableOpacity 
            style={{
                alignItems: 'center',
                justifyContent: 'center',

                padding: p,
                paddingHorizontal: px,
                paddingVertical: py,
                margin: m,
                marginHorizontal: mx,
                marginVertical: my,
                height: h,
                width: w,
                maxHeight: mh,
                maxWidth: mw,
                position: pos,
                top: posT,
                bottom: posB,
                right: posR,
                left: posL,

                borderWidth: frame,
                borderRadius: frameRadius,
                borderColor: frameColor,

                backgroundColor: bgColor,
                elevation: float,

                flexDirection: flexRow ? 'row' : 'column',
            }}
                onPress={onTap}
                onPressIn={onTapIn}
                onPressOut={onTapOut}
                onLongPress={onLongTap}
                onFocus={onFocus}
                onBlur={onBlur}
        >

            { textVerify &&
            <Text
            style={{
                fontSize: textSize,
                fontWeight: textWeight,
                color: textColor,
                letterSpacing: textSpacing,
                textDecorationLine: textLine,
                textDecorationColor: textLineColor,

                paddingTop: textPt,
                paddingBottom: textPb,
                paddingRight: textPr,
                paddingLeft: textPl,

                position: textPos,
                top: textPosT,
                bottom: textPosB,
                right: textPosR,
                left: textPosL,
            }}
            >
                {textLabel}
            </Text>
            }

            { iContainer && 
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: iContainerH,
                width: iContainerW,
                position: iPos,
                top: iPosT,
                bottom: iPosB,
                right: iPosR,
                left: iPosL,
            }}
            >
            { imageVerify && 
                <Image 
                source={imageSource}
                style={{
                    height: imageH,
                    width: imageW,
                    resizeMode: imageResize,
                }}
                />
            } 

            { iconVerify &&
                <CustomIcon name={iconName} size={iconSize} color={iconColor}/>
            }               
            </View>
            }

        </TouchableOpacity>
    )

}

export default CustomButton
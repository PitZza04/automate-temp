import React from 'react';
import { 
  Dimensions, 
  StyleSheet 
} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";


import * as eva from '@eva-design/eva';
import { 
  IconRegistry, 
  ApplicationProvider, 
  Layout 
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { NativeBaseProvider } from "native-base";

import { CustomStatusBar } from './src/custom'
import { RootNavigator } from './src/navigation'

function App () {

  return(
    
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <CustomStatusBar />
        <Layout style={s.pageRoot}>
          <NativeBaseProvider>    
            <NavigationContainer>
              <RootNavigator /> 
            </NavigationContainer>          
          </NativeBaseProvider>
      </Layout>
    </ApplicationProvider>
    </>
  )
}
export default App

const s = StyleSheet.create({
  pageRoot: {
    flex: 1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width
  }
})
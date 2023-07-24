import { StyleSheet } from 'react-native';

const s = StyleSheet.create({

    backRoot: {
      flex: 1
    },

    fullSize: {
      height: '100%', 
      width: '100%',
      alignItems: 'center',
    },

    closeButton: {
      height: 50, 
      width: 50, 
      position: 'absolute', 
      top: -25, 
      alignItems: 'center', 
      justifyContent: 'center',
    },
    
    signInHeader: { 
      fontSize: 20, 
      fontWeight: '900', 
      color: '#B61616', 
      letterSpacing: 1.2,
    },

    formLabel: {
      fontSize: 14, 
      fontWeight: 'bold', 
      color:'#b61616'
    },

    keyAvoidSize: { 
      flex: 1, 
      width: '100%', 
    },  

})

export default s;
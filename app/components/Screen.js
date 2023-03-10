import React from 'react';
import Constants from 'expo-constants';
import { SafeAreaView,StyleSheet } from 'react-native';

function Screen({children}) {
    return (
      <SafeAreaView style={styles.container}>
          {children}
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:Constants.statusBarHeight
    }
    
})
export default Screen;
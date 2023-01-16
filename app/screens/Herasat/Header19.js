
import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


function Header19() {
  const navigation = useNavigation();

    function navigateToMainPage() {
        navigation.navigate("eqKartabl03");
    }
    function navigateToiInfo() {
      navigation.navigate("iInfo");
    }
    return (
      <View style={styles.container2}>
        <TouchableOpacity onPress={navigateToMainPage} style={{marginTop:6}}>
           <MaterialCommunityIcons name="arrow-left-bold-circle" size={40} color="white" />
        </TouchableOpacity>
        <Text style={{color:"white",fontSize:15,marginTop:6}}>مورد انتخابی جهت تایید</Text>
        <TouchableOpacity onPress={navigateToiInfo} style={{marginTop:6}}>
           <MaterialCommunityIcons name="questioncircle" size={40} color="white" />
        </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({
    container2:{
       height:"13%",
       width:"100%",
       borderBottomRightRadius:30,
       borderBottomLeftRadius:30,
       backgroundColor:"#4E0A24",
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-around',
    }
})
export default Header19;
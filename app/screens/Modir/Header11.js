
import React,{useState,useEffect} from 'react';
import { StyleSheet,View,Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import MainPage from '../../components/MainPage';
import ListingsApi from '../../api/Listings';




function Header11() {
  const [listings,setListings]=useState([]);
  useEffect(()=>{
    loadListings();
    console.log(listings);
  });
    const loadListings=async()=>{
      const response= await ListingsApi.getListing();
      setListings(response.data);
    }

  const navigation = useNavigation();
    function navigateToMainPage() {
        navigation.navigate("eqKartabl04");
    }
    function navigateToiInfo() {
      navigation.navigate("iInfo");
    }
    return (
      <View style={styles.container2}>
        <TouchableOpacity onPress={navigateToMainPage} >
           <MaterialCommunityIcons name="arrow-left-bold-circle" size={40} color="white" />
        </TouchableOpacity>
        <Text style={{color:"white",fontSize:15}}>تایید درخواست</Text>
        <TouchableOpacity onPress={navigateToiInfo} >
           <MaterialCommunityIcons name="questioncircle" size={40} color="white" />
        </TouchableOpacity>
        
      </View>
    );
}
const styles = StyleSheet.create({
    container2:{
       height:"10%",
       width:"100%",
       borderBottomRightRadius:30,
       borderBottomLeftRadius:30,
       backgroundColor:"#3E4971",
       marginBottom:15,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-around'

    }
    // #5F5C69",
})
export default Header11;
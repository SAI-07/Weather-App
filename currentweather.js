import React from "react"
import {View,Text,SafeAreaView,StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons';

const CurrentWeather = () => {
   return(
    <SafeAreaView style={styles.wrapper}>
    <View style={styles.container}>
      <Feather name="sun" size={100} color='black'/>
      <Text style={styles.temp}>6</Text>
      <Text style={styles.feels}>Feels like 5</Text>
      <View style={styles.hlwrapper}>
        <Text style={styles.hl}>Highhh:8</Text>
        <Text style={styles.hl}>Low:6</Text>
      </View>
    </View>      
    <View style={styles.bodywrapper}>
      <Text style={styles.description}>Its Sunny</Text>
      <Text style={styles.message}>Its perfect t-shirt weather</Text>
    </View>
    </SafeAreaView>
   )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  temp: {
    fontSize: 48,
    color: "black"
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  hl:{
    color: 'black',
    fontSize:20
  },
  hlwrapper:{
    flexDirection: 'row'
  },
  bodywrapper:{
    justifyContent: 'flex-end',
    alignItems:'flex-start',
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:30 
  }
})
export default CurrentWeather
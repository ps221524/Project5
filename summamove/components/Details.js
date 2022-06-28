import React, { Component, statusbar, useEffect, useState } from 'react';
import { ActivityIndicator,TouchableOpacity , StyleSheet, ImageBackground, FlatList, Text, View, Image } from 'react-native';
import HomeScreen from './components/HomeScreen';


  const width_proportion = '95%';
  const height_proportion = '90%';

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    ImageBackground: {
      flex: 1,
      justifyContent: "center"
    },
    logo: {
      position: "absolute",
      width: "100%",
      height: 120,

      top: "22%",

    },
  
  
    secondcontainer: {
      width: width_proportion, 
      height: height_proportion,
      backgroundColor: "#FFFFFF",
      justifyContent: 'center',
      borderWidth: 1,
      alignSelf: 'center',
      marginBottom: 4,
      opacity: 0.8,
      textAlign: "center",
      alignItems: 'center',

    },
  
    headline: {
      fontWeight: 'bold',
      fontSize: 30,
      flex: 1,
      top: "4%",
      position: "absolute",
      textAlign: "center"
      
  },

  });
  const Details = ({route}) => {
    
    const { name, id } = route.params;

    return (
      <View style={styles.container}>
      <Text>SalePrice: ${item.id}</Text>
      <Text>SalePrice: ${item.name}</Text>

      </View>
    );
  }




  export default Details
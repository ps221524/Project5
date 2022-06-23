import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component, useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, Text, View, TouchableOpacity, Button, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';


function Home({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getApi = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/exercise');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getApi();
  }, []);
    return (
        <View>
          {isLoading ? <ActivityIndicator/> : (
              <FlatList
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => navigation.navigate('Details', {
                          id: item.id,
                          name: item.name,
                      })}>
                        <View style={styles.itemborder}>
                           
                            <View>

                            </View>
                          <Text style={styles.item} >{item.name}</Text>
                        </View>
                      </TouchableOpacity>
                  )}
              />
          )}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

item: {
  fontSize: 30,
  marginLeft: 15,
  marginRight: 15,
  width: 100,
  textAlign:'center',
  height: 50,
},
});

export default Home
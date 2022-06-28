import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component, useEffect, useState } from 'react';
import {ActivityIndicator, FlatList, Text, View, TouchableOpacity, Button, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

function Home() {
  return (
  <Stack.Navigator initialRouteName="List"
  barStyle={{ backgroundColor: 'tomato' }}
  activeColor="black"
  inactiveColor="white"
  >
  <Stack.Screen name="List2" component={List} options={{title: 'List'}}/>
  <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
  );
  }

  
function List({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getApi = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8000/api/exercise');
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
        <View style={styles.list}>
          {isLoading ? <ActivityIndicator/> : (
              <FlatList
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                     <TouchableOpacity onPress={() => navigation.navigate('Details', {
                          id: item.id,
                          name: item.name
                       })}>
                        <View style={styles.itemborder}>
                        <View>
                          <Text style={styles.title}>{item.name}</Text>
                        </View>
                          <Text>{item.description}</Text>
                          </View>
                       </TouchableOpacity>
                  )}
              />
          )}
        </View>
    );
}

function Details({route}) {
 
  const { name } = route.params;

  return (
    <View >
      <Text>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },

  title: {
    fontSize: 30,
    marginLeft: 15,
    marginRight: 15,
    height: 60,
    textAlign:'center',
  },

   itemborder: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'tomato',
    alignContent:'center',
    alignSelf:'center',
    marginTop: 20,
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 30,
    minWidth: 350,
   },

});

export default Home
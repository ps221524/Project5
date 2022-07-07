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
      const response = await fetch('http://localhost:8000/api/exercise/');
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
         <TouchableOpacity>
         <View style={styles.itemborder}>
         <Text style={styles.title2}>Klik om taal aantepassen</Text>        
         </View>
          </TouchableOpacity>
         
         <Text style={styles.title}>Oefeningen </Text>
         
          {isLoading ? <ActivityIndicator/> : (
              <FlatList
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
                     <TouchableOpacity onPress={() => navigation.navigate('Details', {
                          id: item.id,
                          name: item.name,
                          description: item.description,
                       })}>
                        <View style={styles.itemborder}>
                        <View>
                          <Text style={styles.title}>{item.name}</Text>
                        </View>
                          </View>
                       </TouchableOpacity>
                  )}
              />
          )}
        </View>
    );
}

function Details({route}) {
 
  const { name, description } = route.params;

  return (
    <View >
      <Text style={styles.head}>{name}</Text>
      <Text style={styles.itemdetails}>{description}</Text>
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
    fontSize: 40,
    marginLeft: 15,
    marginRight: 15,
    textAlign:'center',
  },

  title2: {
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
    textAlign:'center',
  },

   itemborder: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'tomato',
    alignContent:'center',
    alignSelf:'center',
    borderRadius: 10,
    margin: 20,
    width: '80%',
   },

   head: {
    fontSize: 60,
     textAlign: 'center',
   },

   item2: {
    fontSize: 30,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
    marginLeft: 15,
  },

  itemdetails: {
    fontSize: 30,
    alignContent:'center',
    alignSelf:'center',
  },
});

export default Home
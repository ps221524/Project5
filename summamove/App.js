import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import AccountScreen from './components/AccountScreen';
import Profile from './components/Profile';
const token = localStorage.getItem('access_token');

const Tab = createMaterialBottomTabNavigator();

function TabNav() {

  if(!token) {

  return (
  <NavigationContainer>
     <Tab.Navigator initialRouteName="Home" 
       barStyle={{ backgroundColor: 'tomato' }}
       activeColor="black"
       inactiveColor="white">
        <Tab.Screen name="Home" component={MyStack} 
         options={{
          tabBarLabel: 'Home',
        }} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Account" component={AccountScreen}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
  }
  else{
    return (
      <NavigationContainer>
    <Tab.Navigator initialRouteName="Home" 
    barStyle={{ backgroundColor: 'tomato' }}
    activeColor="black"
    inactiveColor="white">
     <Tab.Screen name="Home" component={HomeScreen}  />
     <Tab.Screen name="About" component={AboutScreen} />
     <Tab.Screen name="Account" component={Profile}  />
   </Tab.Navigator>
   </NavigationContainer>
    );
  }
}

const MyStack = () => {
  return(
    
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
      name='exersices'
      component={HomeScreen}/>
      <Stack.Screen
      name='details'
      component={Details}/>
    </Stack.Navigator>
  )
}

const app = () => {
  return (
        <TabNav/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default app;
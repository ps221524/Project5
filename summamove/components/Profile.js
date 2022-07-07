import React, { Component, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {ActivityIndicator, FlatList, Text, View, TouchableOpacity, Button, StyleSheet} from 'react-native';   



const token = localStorage.getItem('access_token');


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));


export default function Profile() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const user = JSON.parse(localStorage.getItem('user'));
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getApi = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/performance/' + user.id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
          
        },
        body: JSON.stringify()
      });
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
  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Profile
          </Typography>
            <div>
            <button onClick={handleLogout}>log uit</button>
          </div>
        </Toolbar>
      </AppBar>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5">
          Welcome {user.name}
          </Typography>
        </CardContent>
      </Card>
      <View style={styles.list}>
          {isLoading ? <ActivityIndicator/> : (
              <FlatList
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  renderItem={({ item }) => (
              
                        <View style={styles.itemborder}>
                        <Text style={styles.title}> {item.name}</Text>
                        <Text style={styles.itemdetails}>Sets: {item.sets}</Text>
                        <Text style={styles.itemdetails}>Reps: {item.reps}</Text>
                        </View>
                        
                  
                  )}
              />
          )}
        </View>
    </div>
  );
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
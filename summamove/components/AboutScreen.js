
import { StyleSheet, Text, View } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text}>
          Dit is de beste app voor het leren van nieuwe oefeningen.{'\n'}
          Naast het oefenen van enige trainingen kan u ook uw behaalde oefeningen inzien.{'\n'}
          {'\n'}
          Heeft u vragen? stel ze dan via onze mail: summamove@gmail.com{'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          {'\n'}
          Appversie: V1.0.0{'\n'}
          {'\n'}

        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 3,
    backgroundColor: '#faf4f2',
    borderColor: '#FF6347',
    borderRadius: 10,
    padding: 20,
    margin: 20,
  },

  container2: {
    flex: 1,
    backgroundColor: '#faf4f2',
    alignItems: 'center',
    maxWidth: 400,
    textAlign: 'center',
    justifyContent: 'center',
  },  

  text: {
    marginTop: 200,
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
  }, 
});

export default About;
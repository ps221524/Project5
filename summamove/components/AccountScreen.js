import { StyleSheet, Text, View } from 'react-native';

const Account = () => {
  return (
    <View style={styles.container}>
    <Text>Account page</Text>
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
});

export default Account;
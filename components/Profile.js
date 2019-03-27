import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class Profile extends React.Component {
  render() {
    const username =  this.props.navigation.getParam('username', 'No username');
    return (
      <View style={styles.container}>
        <Text>Hello {username} from Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

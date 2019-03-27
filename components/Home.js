import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
        }
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Home Screen</Text>
        <TextInput placeholder="Enter username" onChangeText={(text) => this.setState({username: text})} />
        <Button title="Profile" onPress={ ()=>this.props.navigation.navigate('Profile', {
            username: this.state.username
              }
            ) 
          }
        />
        <Button title="Feed" onPress={ ()=>this.props.navigation.navigate('Feed') }/>
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

import {
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';
import Home from './components/Home'
import Profile from './components/Profile'
import Feed from './components/Feed'

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Profile: {
    screen: Profile
  },
  Feed: {
      screen: Feed
  }
});

const App = createAppContainer(RootStack);

export default App;
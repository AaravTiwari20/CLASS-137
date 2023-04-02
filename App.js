import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';

export default function App() {
  return (
    <AppContainer/>
  );
}

const appStackNavigator = createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  Details:{
    screen:DetailsScreen,
  }
},{
  initialRouteName:"Home"
})

const AppContainer = createAppContainer(appStackNavigator)




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

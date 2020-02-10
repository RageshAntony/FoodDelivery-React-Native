import React from 'react';
import { View, Text,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HotelDetailsScreen from './hotel-details/hotel-details-ui'
import MainPageScreen from './MainPage/main-page-ui';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
            <Button
          title="Go to Details..."
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Hotels: HotelDetailsScreen,
    Main: MainPageScreen
   
  },
  {
    initialRouteName: 'Home',
  }
);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


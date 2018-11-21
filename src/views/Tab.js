import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/AntDesign'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <AntIcon name={'enviromento'} size={50} color={'green'}/>
        <AntIcon.Button name="aliwangwang" color={'black'} backgroundColor="#3b5998">
          <Text>Login</Text>
        </AntIcon.Button>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Ionicons  name="ios-settings" size={20} color={'red'} />
      </View>
    );
  }
}

const Tab = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        // alert(routeName)
        iconName = 'ios-add';
        // alert(iconName)
      } else if (routeName === 'Settings') {
        iconName = 'ios-alarm';
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    showIcon: true,
  },
});

export default class TabScreen extends React.Component {
  render() {
    return (
      <Tab />
    );
  }
}
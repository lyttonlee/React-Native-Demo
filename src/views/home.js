import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, Platform, Alert } from 'react-native'

export class home extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.state.routeName,
      headerRight: (
        <Button
          onPress={() => Alert.alert('routeInfo' ,JSON.stringify(navigation))}
          // onPress={() => navigation.goBack()}
          title={navigation.state.routeName}
          color="#111"
        />
      )
    }
  }
  state = {
    platform: Platform.OS,
    version: Platform.Version
  }
  render() {
    return (
      <View style={styles.home}>
        <Text style={styles.title}> Learn React Native </Text>
        <Text style={styles.info}>Plateform:{this.state.platform}</Text>
        <Text style={styles.info}>Version:{this.state.version}</Text>
        <Button style={styles.btn} title="Start" onPress={() => this.props.navigation.navigate('List')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
    color: '#000',
  },
  info: {
    fontSize: 30,
    color: '#333',
  },
  btn: {
    width: 500
  }
})

export default home

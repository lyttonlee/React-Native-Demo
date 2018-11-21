import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, Platform, Alert, Dimensions } from 'react-native'

export class home extends Component {
  state = {
    platform: Platform.OS,
    version: Platform.Version
  }
  render() {
    const {width, height} = Dimensions.get('window')
    return (
      <View style={styles.home}>
        <Text style={styles.title}> Learn React Native </Text>
        <Text style={styles.info}>Plateform:{this.state.platform}</Text>
        <Text style={styles.info}>Version:{this.state.version}</Text>
        <Text style={styles.info}>屏幕宽度:{Math.floor(width)}</Text>
        <Text style={styles.info}>屏幕高度:{Math.floor(height)}</Text>
        <View style={{width: 0.8 * width}}>
          <Button title="Start Learn" onPress={() =>   this.props.navigation.navigate('List')} />
        </View>
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
  }
})

export default home

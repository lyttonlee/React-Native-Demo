import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableHighlight, TouchableOpacity, Button, Alert, TouchableNativeFeedback } from 'react-native'

export default class TouchAble extends Component {
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
    activeAction: ''
  }
  action = event => {
    this.setState({
      activeAction: event
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> TouchAble Test </Text>
        <Text style={styles.title}>Action: {this.state.activeAction}</Text>
        <TouchableOpacity
          onPress={()=>this.action('onPress')}
          onPressIn={()=>this.action('onPressIn')}
          onPressOut={()=>this.action('onPressOut')}
          onLongPress={()=>this.action('onLongPress')}>
          <View style={styles.touchBox}>
            <Text style={styles.title}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableHighlight underlayColor="white"
          onPress={()=>this.action('onPress')}
          onPressIn={()=>this.action('onPressIn')}
          onPressOut={()=>this.action('onPressOut')}
          onLongPress={()=>this.action('onLongPress')}>
          <View style={styles.touchBox}>
            <Text style={styles.title}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableNativeFeedback
          onPress={()=>this.action('onPress')}
          onPressIn={()=>this.action('onPressIn')}
          onPressOut={()=>this.action('onPressOut')}
          onLongPress={()=>this.action('onLongPress')}>
          <View style={styles.touchBox}>
            <Text style={styles.title}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    color: '#222',
    fontWeight: 'bold'
  },
  touchBox: {
    width: 300,
    height: 100,
    backgroundColor: '#46322a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  }
})

import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  Alert,
  TextInput,
  StyleSheet,
  Dimensions
} from 'react-native'

export class Props extends Component {
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
  state={
    initVal: 0,
    hasTimer: false
  }
  inputChange = text => {
    const val = text * 1
    this.setState({
      initVal: val
    })
    // alert(typeof(this.state.initVal))
  }
  submit = () => {
    this.timer = setInterval(() => {
      const val = this.state.initVal + 1
      this.setState({
        initVal: val,
        hasTimer:true
      })
    }, 100)
  }
  reset = () => {
    clearInterval(this.timer)
    this.setState({
      hasTimer: false
    })
  }
  componentWillUnmount () {
    if (this.state.hasTimer) {
      clearInterval(this.timer)
    }
  }
  render() {
    const {width} = Dimensions.get('window')
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Props Test </Text>
        <View style={{width: width * 0.9, height: 50}}>
          <TextInput 
            style={styles.input}
            placeholder={'请输入初始值！默认为0'}
            onChangeText={text => this.inputChange(text)}
            keyboardType={"numeric"}
            // textContentType={'creditCardNumber'}
            // clearTextOnFocus={true}
          />
        </View>
        <Button 
          onPress={()=> this.submit()}
          title={'submit'}
          disabled={this.state.hasTimer}
        />
        <Text style={{fontSize: 40}}>{this.state.initVal}</Text>
        <Button 
          onPress={()=> this.reset()}
          title={'停止'}
          disabled={!this.state.hasTimer}
          color={'#7f3463'}
        />
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
    color: '#111'
  },
  input: {
    borderBottomColor: 'green',
    borderBottomWidth: 1, 
    fontSize: 18, 
    padding: 0
    // lineHeight: 50
  }
})
export default Props

import React, { Component } from 'react'
import { 
  Text, 
  View, 
  Button, 
  Alert, 
  TouchableHighlight,
  StyleSheet,
  Dimensions
} from 'react-native'

export class list extends Component {
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
  render() {
    const {height, width} = Dimensions.get('window')
    return (
      <View style={styles.container}>
        {/* <Text> List Component </Text> */}
        <View style={[styles.item, {width: width * 0.9}]}>
          <TouchableHighlight>
            <Button
              title='Home Page' 
              onPress={() => this.props.navigation.navigate('Home')} color="#841584"
            />
          </TouchableHighlight>
        </View>
        <View style={[styles.item, {width: width * 0.9}]}>
          <Button
            style={styles.btn}
            title='TouchAble Page'
            onPress={() => this.props.navigation.navigate('TouchAble')}
            color="#841584"
          />
        </View>
        <View style={[styles.item, {width: width * 0.9}]}>
          <Button
            style={styles.btn}
            title='props page'
            onPress={() => this.props.navigation.navigate('Props')}
            color="#841584"
          />
        </View>
        <View style={[styles.item, {width: width * 0.9}]}>
          <Button
            style={styles.btn}
            title='movie list page'
            onPress={() => this.props.navigation.navigate('MovieLists')}
            color="#841584"
          />
        </View>
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
  item: {
    marginBottom: 20
  },
  btn: {
    textTransform: 'capitalize'
  }
})

export default list

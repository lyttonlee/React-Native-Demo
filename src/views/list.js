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
      headerTitle: navigation.state.routeName
    }
  }
  render_item (title, pathName) {
    const {width} = Dimensions.get('window')
    return (
      <View style={[styles.item, {width: width * 0.9}]}>
        <Button
          style={styles.btn}
          title={title}
          onPress={() => this.props.navigation.navigate(pathName)}
          color="#841584"
        />
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Text> List Component </Text> */}
        {this.render_item('home page', 'Home')}
        {this.render_item('TouchAble page', 'TouchAble')}
        {this.render_item('Props page', 'Props')}
        {this.render_item('MovieLists page', 'MovieLists')}
        {this.render_item('tab page', 'Tab')}
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

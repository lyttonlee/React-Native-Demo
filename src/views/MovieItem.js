import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export class MovieItem extends Component {
  static propTypes = {
    // item: PropTypes.object.isRequired,
  }
  render() {
    const {width} = Dimensions.get('window')
    const {item} = this.props
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <View style={[styles.container, {width: width}]}>
          <Image
            style={styles.image}
            source={{uri: item.images.small}}
          />
          <Text style={styles.text}>{item.title}</Text>
          <Text>{item.year}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 10
  },
  image: {
    width: 100,
    height: 150
  },
  text: {
    fontSize: 18
  }
})
export default MovieItem

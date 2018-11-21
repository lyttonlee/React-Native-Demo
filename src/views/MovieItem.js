import React, { Component } from 'react'
import { Text, View, TouchableHighlight, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export class MovieItem extends Component {
  static propTypes = {
    // item: PropTypes.object.isRequired,
  }
  render() {
    const {width} = Dimensions.get('window')
    const {movie} = this.props
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <View style={[styles.container, {width: width}]}>
          <Image
            style={styles.image}
            source={{uri: movie.images.small}}
          />
          <View style={[styles.info, {width: width - 150}]}>
            <Text style={styles.text}>{movie.title}</Text>
            <Text>{movie.year}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(12,42,42,0.6)'
  },
  image: {
    width: 130,
    height: 200
  },
  info: {
    marginLeft: 10
  },
  text: {
    fontSize: 20,
    color: '#234324'
  }
})
export default MovieItem

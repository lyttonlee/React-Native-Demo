import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Alert,

} from 'react-native'
import {getMovieList} from '../reducer/actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MovieItem from './MovieItem'

export class MovieLists extends Component {
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
  static propTypes = {
    list: PropTypes.array.isRequired,
    getMovieList: PropTypes.func.isRequired,
  }
  state = {
    loading: true
  }
  componentWillMount () {
    this.props.getMovieList().then(res => {
      // alert(JSON.stringify(res))
      if (res.hasDone) {
        this.setState({
          loading: false
        })
      }
    })
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.pageTitle}> 豆瓣电影Top 10 </Text>
          <View>
            <FlatList
              data = {this.props.list}
              renderItem = {({item}) => <MovieItem item= {item} />}
              keyExtractor = {(item) => item.id}
            />
          </View>
        </View>
      )
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40
  },
  pageTitle: {
    fontSize: 30,
  }
})

const mapStateToProps = (state) => ({
  list: state.list
})

const mapDispatchToProps = {
  getMovieList
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieLists)

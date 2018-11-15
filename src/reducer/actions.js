import {
  INCREAMENT,
  INIT_NUMBER,
  GET_MOVIE_LIST
} from './action-types'
import axios from 'axios'
import { resolve } from 'rsvp';
export const initNum = num => ({
  type: INIT_NUMBER,
  data: num
})

const movieList = list => ({
  type: GET_MOVIE_LIST,
  data: list
})

export const getMovieList = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const url = 'https://api.douban.com/v2/movie/in_theaters?count=10'
      axios.get(url).then(res => {
        const list = res.data.subjects
        dispatch(movieList(list))
        resolve({
          hasDone: true
        })
      }).catch(err => {
        if (err) {
          reject({
            hasDone: false
          })
        }
      })
    })
  }
}
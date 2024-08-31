import axios from 'axios';
import { 
  SET_RECENT_POSTS,
  SET_RESULTS_POSTS
 } from './types';

export function fetchRecentPosts() {
  return function (dispatch) {
    axios.get('https://swapi.dev/api/starships')
      .then(response => {
        console.log("mis datos", response.data.results);
        dispatch({
          type: SET_RECENT_POSTS,
          payload: response.data.results
        })
      }).catch(error => {
        console.log("mis errores", error);
      })
  }
}

export function fetchPostsWithQuery(query) {
  return function (dispatch) {
    axios.get(`https://swapi.dev/api/starships/?search=${query}`)
      .then(response => {
        console.log("me responde: ", response);
         dispatch({
             type: SET_RESULTS_POSTS,
             payload: response.data.results
         })
        //https://swapi.dev/api/planets/1/?format=wookiee
      })
  }
}
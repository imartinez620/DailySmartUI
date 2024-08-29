import axios from 'axios';
import { SET_RECENT_POSTS } from './types';

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
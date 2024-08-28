import axios from 'axios';
import { SET_RECENT_POSTS } from './types';

export function fetchRecentPosts() {
  return function (dispatch) {
    axios.get('https://swapi.dev/api/planets/1/')
    .then(response => {
        console.log("mis datos", response.data.residents);
        dispatch({
          type: SET_RECENT_POSTS,
          payload: response.data.residents
        })
      }).catch(error => {
        console.log("mis errores", error);
      })
    }
}
import * as types from './../constant'

const BASE_API = 'https://swapi.co/api';

export const getProfile = (id) => ({
  types: types.GET_PROFILE,
  // promise: fetch(`${url}`)
  promise: fetch(`${BASE_API}/people/${id}`)
})

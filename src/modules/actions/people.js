import * as types from './../constant'

const BASE_API = 'https://swapi.co/api';

export const getPeople = () => ({
  types: types.GET_PEOPLE,
  promise: fetch(`${BASE_API}/people`)
})

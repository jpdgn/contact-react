import axios from 'axios'
import * as types from './../constant'

const BASE_API = 'https://simple-contact-crud.herokuapp.com';

export const getContact = () => ({
  types: types.GET_PEOPLE,
  promise: axios.get(`${BASE_API}/contact`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
})

export const getContactById = id => ({
  types: types.GET_CONTACT_BY_ID,
  promise: fetch(`${BASE_API}/contact/${id}`)
})

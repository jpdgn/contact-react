import { peopleReducer } from './peopleReducer';
import { profileReducer } from './profileReducer';
import { contactReducer } from './contactReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  people: peopleReducer,
  profile: profileReducer,
  contact: contactReducer
})

export default rootReducer;
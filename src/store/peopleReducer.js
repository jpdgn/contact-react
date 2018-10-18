import * as types from './../modules/constant'
export const peopleReducer = (state = {}, action) => {
  switch(action.type) {
    case types.GET_PEOPLE.request: 
      return {
        isRequesting: true
      }
    case types.GET_PEOPLE.success:
    console.log(action)
      return {
        isRequesting: false,
        value: action.result.results
      }
    case types.GET_PEOPLE.failed:
      return {
        isRequesting: false,    
        error: action.error
      }
    default:
      return state;
  }
}
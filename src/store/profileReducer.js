import * as types from './../modules/constant'
export const profileReducer = (state = {}, action) => {
  switch(action.type) {
    case types.GET_PROFILE.request: 
      return {
        isRequesting: true
      }
    case types.GET_PROFILE.success:
    console.log(action)
      return {
        isRequesting: false,
        value: action.result
      }
    case types.GET_PROFILE.failed:
      return {
        isRequesting: false,    
        error: action.error
      }
    default:
      return state;
  }
}
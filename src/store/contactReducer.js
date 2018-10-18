import * as types from './../modules/constant'
export const contactReducer = (state = {}, action) => {
  switch(action.type) {
    case types.GET_CONTACT.request: 
      return {
        isRequesting: true
      }
    case types.GET_CONTACT.success:
      return {
        isRequesting: false,
        value: action.result.results
      }
    case types.GET_CONTACT.failed:
      return {
        isRequesting: false,    
        error: action.error
      }
    case types.GET_CONTACT_BY_ID.request: 
      return {
        isRequesting: true
      }
    case types.GET_CONTACT_BY_ID.success:
      return {
        isRequesting: false,
        value: action.result.results
      }
    case types.GET_CONTACT_BY_ID.failed:
      return {
        isRequesting: false,    
        error: action.error
      }
    default:
      return state;
  }
}
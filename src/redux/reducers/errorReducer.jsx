import {
  ERROR_404,
  ERROR_403,
  ERROR_500,
  ERROR_OTHER
} from '@actions/actionTypes'

const initialState = {
  showErrorModal: false,
  errorMessage: ''
}

const error404Reducer = (state, action) => {
  action.props.history.push('/400')
  return {
    ...state
  }
}

const error403Reducer = (state, action) => {
  action.props.history.push('/403')
  return {
    ...state
  }
}

const error500Reducer= (state, action) => {
  action.props.history.push('/500')
  return {
    ...state
  }
}

const errorOtherReducer = (state, action) => {
  return {
    ...state,
    showErrorModal: true,
    errorMessage: action.error.response.data
  }
}

export const errorReducer = (state = initialState, action) => {
  switch(action.type){
    case ERROR_404: return error404Reducer(state, action)
    case ERROR_403: return error403Reducer(state, action)
    case ERROR_500: return error500Reducer(state, action)
    case ERROR_OTHER: return errorOtherReducer(state, action)
    default: return state
  }  
}
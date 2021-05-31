import {
  ERROR_404,
  ERROR_500,
  ERROR_403,
  ERROR_OTHER
} from '@actions/actionTypes'

const execute404Action = (props) => {
  return {
    type: ERROR_404,
    props: props
  }
}

const execute500Action = (props) => {
  return {
    type: ERROR_500,
    props: props
  }
}

const execute403Action = (props) => {
  return {
    type: ERROR_403,
    props: props
  }
}

const executeOtherAction = (error) => {
  return {
    type: ERROR_OTHER,
    error: error
  }
}

export const errorAction = (error, props) => {
  if (error.response.status === 404) {
    return execute404Action(props)
  }
  else if (error.response.status === 500) {
    return execute500Action(props)
  }
  else if (error.response.status === 403) {
    return execute403Action(props)
  }
  else {
    return executeOtherAction(error)
  }
}
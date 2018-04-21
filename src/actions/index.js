import {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  CHANGE_ACTIVE_USER,
  SEARCH_USER,
  SORT_USERS,
  RESET_FILTERS
} from '../actionTypes'

import apiData from "../api/data.json"

export const fetchUsers = () => dispatch => {
  dispatch({
    type: FETCH_USERS_START
  })

  try{
    const users = apiData;
    
    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: users
    })
  } catch (err) {
    dispatch({
      type: FETCH_USERS_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const changeUser = (index) => dispatch => {
  dispatch({
    type: CHANGE_ACTIVE_USER,
    payload: index
  })
}

export const searchUsers = (event) => dispatch => {
  dispatch({
    type: SEARCH_USER,
    payload: event.target.value
  })
}

export const sortUsers = (type) => dispatch => {
  dispatch({
    type: SORT_USERS,
    payload: type
  })
}

export const resetFilters = () => dispatch => {
  dispatch({
    type: RESET_FILTERS
  })
}


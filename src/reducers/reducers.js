import { combineReducers } from 'redux'
import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions'

import { GET_TRANSPORTS_DATA, GET_TRANSPORTS_DATA_ERROR, GET_TRANSPORTS_DATA_RECEIVED } from '../actions/actions'
import { GET_TRANSPORT_COORDS, GET_TRANSPORT_COORDS_ERROR, GET_TRANSPORT_COORDS_RECEIVED } from '../actions/actions'
import { REMOVE_TRANSPORT, REMOVE_TRANSPORT_ERROR, REMOVE_TRANSPORT_OK } from '../actions/actions'
import { GET_USERS, GET_USERS_ERROR, GET_USERS_RECEIVED } from '../actions/actions'
import { GET_VEHICLES, GET_VEHICLES_ERROR, GET_VEHICLES_RECEIVED } from '../actions/actions'
import { LOGIN_USER_SUCCESS } from '../actions/actions'

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

/*
const removeKey = (state, key) => {
  const newState = Object.assign({}, state);
  delete newState[key];
  return newState;
} */

const loading = (state = {}, action) => {
	switch (action.type) {
  	case GET_TRANSPORTS_DATA:
      return { ...state, transport: true }
    case GET_TRANSPORT_COORDS:
      return { ...state, coords: true }
    case REMOVE_TRANSPORT:
  		return { ...state, remove: true }
    case GET_USERS:
      return { ...state, users: true }
    case GET_VEHICLES:
      return { ...state, vehicles: true }

    // stop loading here ...

  	case GET_TRANSPORTS_DATA_RECEIVED:
    case GET_TRANSPORTS_DATA_ERROR:
      return { ...state, transport: false }
    case GET_TRANSPORT_COORDS_RECEIVED:
    case GET_TRANSPORT_COORDS_ERROR:
      return { ...state, coords: false }
    case REMOVE_TRANSPORT_OK:
    case REMOVE_TRANSPORT_ERROR:
      return { ...state, remove: false }
    case GET_USERS_RECEIVED:
    case GET_USERS_ERROR:
      return { ...state, users: false }
    case GET_VEHICLES_RECEIVED:
    case GET_VEHICLES_ERROR:
      return { ...state, vehicles: false }
	  default:
		  return state
	}
}

const transports = (state = [], action) => {
	switch (action.type) {
  	case GET_TRANSPORTS_DATA_RECEIVED:
  		return action.data.data;
    case REMOVE_TRANSPORT_OK:
      return state.filter(obj => obj.transportId !== action.id)
  	default:
  		return state
	}
}

const users = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_RECEIVED:
      return action.data.data;
    default:
      return state;
  }
}

const vehicles = (state = [], action) => {
  switch (action.type) {
    case GET_VEHICLES_RECEIVED:
      return action.data.data;
    default:
      return state;
  }
}

const transportCoords = (state = [], action) => {
	switch (action.type) {
  	case GET_TRANSPORT_COORDS_RECEIVED:
  		return action.data.data;
  	default:
  		return state
	}
}

const login = (state = [], action) => {
	switch (action.type) {
  	case LOGIN_USER_SUCCESS:
  		return action.data;
  	default:
  		return state
	}
}

const eezerApp = combineReducers({
  visibilityFilter,
  loading,
  vehicles,
  transports,
  transportCoords,
  users,
  login
})

export default eezerApp

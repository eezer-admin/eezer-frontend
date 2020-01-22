import request from 'superagent'
import { getUserToken, setUserToken } from './../util/utils'

/*
 * action types
 */
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const GET_TRANSPORTS_DATA = 'GET_TRANSPORTS_DATA'
export const GET_TRANSPORTS_DATA_ERROR = 'GET_TRANSPORTS_DATA_ERROR'
export const GET_TRANSPORTS_DATA_RECEIVED = 'GET_TRANSPORTS_DATA_RECEIVED'

export const GET_TRANSPORT_COORDS = 'GET_TRANSPORT_COORDINATES'
export const GET_TRANSPORT_COORDS_ERROR = 'GET_TRANSPORT_COORDS_ERROR'
export const GET_TRANSPORT_COORDS_RECEIVED = 'GET_TRANSPORT_COORDS_RECEIVED'

export const REMOVE_TRANSPORT = 'REMOVE_TRANSPORT'
export const REMOVE_TRANSPORT_ERROR = 'REMOVE_TRANSPORT_ERROR'
export const REMOVE_TRANSPORT_OK = 'REMOVE_TRANSPORT_OK'

export const GET_USERS = 'GET_USERS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'
export const GET_USERS_RECEIVED = 'GET_USERS_RECEIVED'

export const GET_VEHICLES = 'GET_VEHICLES'
export const GET_VEHICLES_ERROR = 'GET_VEHICLES_ERROR'
export const GET_VEHICLES_RECEIVED = 'GET_VEHICLES_RECEIVED'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

const BASE_URL = 'http://localhost:8080/api';

export function getTransports() {
  return (dispatch) => {
    dispatch({ type: GET_TRANSPORTS_DATA });
    request
      .get(`${BASE_URL}/all`)
      .set('Authorization', getUserToken())
      .end((err, res) => {
        if (err || (res.status !== 200)) {
          dispatch({ type: GET_TRANSPORTS_DATA_ERROR });
          return;
        }

        const data = JSON.parse(res.text);
        dispatch({ type: GET_TRANSPORTS_DATA_RECEIVED, data });

      });
  }
}

export function getUsers() {
  return (dispatch) => {
    dispatch({ type: GET_USERS });
    request
      .get(`${BASE_URL}/getusers`)
      .set('Authorization', getUserToken())
      .end((err, res) => {
        if (err || (res.status !== 200)) {
          dispatch({ type: GET_USERS_ERROR });
          return;
        }

        const data = JSON.parse(res.text);
        dispatch({ type: GET_USERS_RECEIVED, data });

      });
  }
}

export function getVehicles() {
  return (dispatch) => {
    dispatch({ type: GET_VEHICLES });
    request
      .get(`${BASE_URL}/getvehicles`)
      .set('Authorization', getUserToken())
      .end((err, res) => {
        if (err || (res.status !== 200)) {
          dispatch({ type: GET_VEHICLES_ERROR });
          return;
        }

        const data = JSON.parse(res.text);
        dispatch({ type: GET_VEHICLES_RECEIVED, data });
      });
  }
}

export function getTransportCoords(id) {
  return (dispatch, getState) => {
    dispatch({ type: GET_TRANSPORT_COORDS });
    request
      .get(`${BASE_URL}/coords/${id}`)
      .set('Authorization', getUserToken())
      .end((err, res) => {
        if (err || (res.status !== 200)) {
          dispatch({ type: GET_TRANSPORT_COORDS_ERROR });
          return;
        }

        const data = JSON.parse(res.text);
        dispatch({ type: GET_TRANSPORT_COORDS_RECEIVED, data });
      });
  }
}

export function loginUser(username, password, cb) {
  return (dispatch, getState) => {
    dispatch({ type: LOGIN_USER });
    request
      .post(`${BASE_URL}/login`, { username, password })
      .end((err, res) => {
        if (err || (res.status !== 200)) {
          dispatch({ type: LOGIN_USER_ERROR });
          cb(LOGIN_USER_ERROR, null);
          return;
        }

        const data = JSON.parse(res.text);
        dispatch({ type: LOGIN_USER_SUCCESS, data: data.data });
        setUserToken(data.data);
        cb(null, data.data);
      });
  }
}

export function removeTransport(id) {
  return { type: REMOVE_TRANSPORT, id }
}

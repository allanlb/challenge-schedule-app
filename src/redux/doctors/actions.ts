/*
 *
 * Doctors actions
 *
 */

import {
  FETCH_DOCTORS,
} from './constants';
import { API_ROOT } from "../../constants";
import { SET_ERROR } from "../error/constants";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../storeConfig/state";

export interface IDoctorAction {
  type: string;
  payload: any;
}

export type DoctorAction = IDoctorAction;

type ThunkResult<R> = ThunkAction<R, RootState, undefined, IDoctorAction>;

// ** Fetch doctors
export const fetchDoctors = (): ThunkResult<void> => {
  return async dispatch => {
    try {
      await fetch(`${API_ROOT}/doctors`)
          .then(response => response.json())
          .then(response => {
            dispatch({
              type: FETCH_DOCTORS,
              payload: response.doctors
            })
          })
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      })
    }
  }
}

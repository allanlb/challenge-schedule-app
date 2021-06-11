/*
 *
 * Patients actions
 *
 */

import { ThunkAction } from "redux-thunk";
import {
  FETCH_PATIENTS
} from './constants';
import { API_ROOT } from '../../constants';
import { SET_ERROR } from '../error/constants';
import { RootState } from "../storeConfig/state";

export interface IPatientAction {
  type: string;
  payload: any;
}

export type PatientAction = IPatientAction;

type ThunkResult<R> = ThunkAction<R, RootState, undefined, IPatientAction>;

// ** Fetch patients
export const fetchPatients = (): ThunkResult<void> => {
  return async dispatch => {
    try {
      await fetch(`${API_ROOT}/patients`)
          .then(response => response.json())
          .then(response => {
            dispatch({
              type: FETCH_PATIENTS,
              payload: response.patients
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

/*
 *
 * Patients reducer
 *
 */

import { Reducer } from "redux";
import { RootState } from "../storeConfig/state";
import {
  FETCH_PATIENTS
} from './constants';
import { PatientAction } from "./actions";

const initialState: RootState.Patients = {
  list: []
}

const patientsReducer: Reducer<RootState.Patients, PatientAction> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PATIENTS:
      return {
        ...state,
        list: action.payload
      }
    default:
      return state
  }
}

export default patientsReducer

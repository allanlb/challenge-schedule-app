/*
 *
 * Appointments reducer
 *
 */

import { Reducer } from 'redux';
import { RootState } from "../storeConfig/state";
import {
  FETCH_APPOINTMENTS,
} from './constants';
import { AppointmentAction } from "./actions";

const initialState: RootState.Appointments = {
  list: []
}

const appointmentsReducer: Reducer<RootState.Appointments, AppointmentAction> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_APPOINTMENTS:
      return {
        ...state,
        list: action.payload
      }
    default:
      return state
  }
}

export default appointmentsReducer

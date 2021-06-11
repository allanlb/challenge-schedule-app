/*
 *
 * Appointments actions
 *
 */

import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { FETCH_APPOINTMENTS, CONFIRM_APPOINTMENT, CANCEL_APPOINTMENT } from './constants';
import { SET_ERROR } from '../error/constants'
import { API_ROOT } from "../../constants";
import { RootState } from "../storeConfig/state";

export interface IAppointmentAction {
  type: string;
  payload: any;
}
export type AppointmentAction = IAppointmentAction;

type ThunkResult<R> = ThunkAction<R, RootState, undefined, IAppointmentAction>;

// ** Fetch appointments
export const fetchAppointments = (): ThunkResult<void> => {
  return async (dispatch: ThunkDispatch<RootState, void, IAppointmentAction>) => {
    try {
      await fetch(`${API_ROOT}/appointments`)
          .then(response => response.json())
          .then(response => {
            dispatch({
              type: FETCH_APPOINTMENTS,
              payload: response.appointments
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

// ** Confirm appointment
export const confirmAppointment = (id: string): ThunkResult<void> => {
  return async (dispatch: ThunkDispatch<RootState, void, any>) => {
    try {
      await fetch(`${API_ROOT}/appointments/${id}/confirm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({doctorID: id})
      });
      dispatch({
        type: CANCEL_APPOINTMENT,
        payload: {}
      })
      dispatch(fetchAppointments())
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      })
    }
  }
}

// ** Cancel Appointment
export const cancelAppointment = (id: string): ThunkResult<void> => {
  return async (dispatch: ThunkDispatch<RootState, void, any>) => {
    try {
      await fetch(`${API_ROOT}/appointments/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({reason: "Decided I don't like hospitals"})
      });
      dispatch({
        type: CONFIRM_APPOINTMENT,
        payload: {}
      })
      dispatch(fetchAppointments())
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message
      })
    }
  }
}


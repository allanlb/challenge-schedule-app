/*
 *
 * Doctors reducer
 *
 */
import { Reducer } from "redux";
import { RootState } from "../storeConfig/state";
import {
  FETCH_DOCTORS
} from './constants';
import { DoctorAction } from "./actions";

const initialState: RootState.Doctors = {
  list: []
}

const doctorsReducer: Reducer<RootState.Doctors, DoctorAction> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOCTORS:
      return {
        ...state,
        list: action.payload
      }
    default:
      return state
  }
}

export default doctorsReducer

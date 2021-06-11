/*
 *
 * Errors reducer
 *
 */

import { Reducer } from "redux";
import { RootState } from "../storeConfig/state";
import {
  SET_ERROR
} from './constants';
import { ErrorAction } from "./actions";

const initialState: RootState.Error = {
  message: '',
}

const errorReducer: Reducer<RootState.Error, ErrorAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        message: action.payload
      }
    default:
      return state
  }
}

export default errorReducer

// ** Redux Imports
import { combineReducers } from 'redux';
// ** Reducers Imports
import appointmentsReducer from '../appointments/reducer';
import doctorsReducer from '../doctors/reducer';
import patientsReducer from '../patients/reducer';
import errorReducer from '../error/reducer';

const rootReducer = combineReducers({
  appointments: appointmentsReducer,
  doctors: doctorsReducer,
  patients: patientsReducer,
  error: errorReducer
})

export default rootReducer

import { AppointmentsStore, DoctorsStore, PatientsStore, ErrorStore } from '../../models';

export interface RootState {
  appointments: AppointmentsStore;
  doctors: DoctorsStore;
  patients: PatientsStore;
  error: ErrorStore;
}

export namespace RootState {
  export type Appointments = AppointmentsStore;
  export type Doctors = DoctorsStore;
  export type Patients = PatientsStore;
  export type Error = ErrorStore;
}

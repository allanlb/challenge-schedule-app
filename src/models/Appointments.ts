/** Appointments model definitions **/

export interface AppointmentsStore {
  list: Appointments[];
}

export interface AppointmentsListResponse {
  data: {
    appointments: Appointments
  }
}

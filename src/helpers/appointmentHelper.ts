export const appointmentsByStatus = (appointments: Appointments[]) => {
    const groupByStatus: AppointmentGroup = {};

    for (const appointment of appointments) {
        if (groupByStatus[appointment.status] === undefined) {
            groupByStatus[appointment.status] = []
        }
        groupByStatus[appointment.status].push(appointment)
    }

    return groupByStatus;
};

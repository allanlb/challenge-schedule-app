import { FunctionComponent, useEffect } from 'react';
import { useDispatch } from "react-redux";
import helpers from '../../helpers'
import './Appointments.css';
import NewAppointments from './AppointmentRow';
import AppointmentStatus from './AppointmentStatus';
import { cancelAppointment, confirmAppointment, fetchAppointments } from '../../redux/appointments/actions';
import { fetchDoctors } from '../../redux/doctors/actions';
import { fetchPatients } from '../../redux/patients/actions';
import { useAppSelector } from '../../redux/storeConfig/hooks';

export interface AppointmentsProps {
}

const Appointments: FunctionComponent<AppointmentsProps> = (props:AppointmentsProps) => {
    const { list: appointments } = useAppSelector(state => state.appointments),
        { list: doctors } = useAppSelector(state => state.doctors),
        { list: patients } = useAppSelector(state => state.patients),
        { message: error } = useAppSelector(state => state.error),
        dispatch = useDispatch()

    const appointmentsByStatus = helpers.appointmentsByStatus(appointments);

    useEffect(() => {
        dispatch(fetchAppointments())
        dispatch(fetchDoctors())
        dispatch(fetchPatients())
    }, [dispatch]);

    const cancelAppointments = (id: string) =>{
        dispatch(cancelAppointment(id))
     };

    const confirmAppointments = async (id: string) =>{
        if (id === "4"){
            const error = "There is no doctor available for this patient";
            alert(error)
        } else {
            dispatch(confirmAppointment(id))
        }
     };

    const renderAppointments = (status: string) => {
        if (appointmentsByStatus[status] === undefined) return null
        return (
            [
                (<AppointmentStatus key={status} status={status} />),
                appointmentsByStatus[status].map((appointment) => (
                    <NewAppointments
                        appointment={appointment}
                        patients={patients}
                        doctors={doctors}
                        key={appointment.id}
                        cancelAppointment={cancelAppointments}
                        confirmAppointment={confirmAppointments}
                    />
                ))
            ]
        )
    };

    return (
        <div>
            <h4>Appointments</h4>
            {error && <div className="error">{error}</div>}
            <table>
                <tbody>
                    {renderAppointments('new')}
                    {renderAppointments('confirmed')}
                    {renderAppointments('completed')}
                    {renderAppointments('cancelled')}
                </tbody>
                {appointments === [] && <div>There are no available appointments.</div>}
                {doctors === [] && <div>There are no available doctors.</div>}
                {patients === [] && <div>There are no available patients.</div>}
            </table>
        </div>
     );
}
export default Appointments;

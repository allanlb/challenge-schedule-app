import { FunctionComponent } from 'react';
import './Appointments.css';

export interface AppointmentStatusProps {
    status : string
}

const AppointmentStatus: FunctionComponent<AppointmentStatusProps> = (props: AppointmentStatusProps) => {
    const { status } = props
    return (
        <tr>
            <td>
                <h5>{ status.toUpperCase() }</h5>
            </td>
        </tr>
     );
}

export default AppointmentStatus;

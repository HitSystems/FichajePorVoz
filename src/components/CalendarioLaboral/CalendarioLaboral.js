import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-awesome-calendar';
import { cookies } from '../../helpers/cookies';
import CalendarModal from '../Modals/CalendarModal';
import Topbar from '../Topbar/Topbar';

const CalendarioLaboral = () => {
    const [events, setEvents] = useState([]);
    const [trabajadores, setTrabajadores] = useState([])
    const handleOnClickEvent = (e) => {
        console.log('Click en el dia');
    }
    useEffect(() => {
        axios.get(`http://localhost:3030/eventosCalendario?empresa=${cookies.get('empresa')}&idTrabajador=0`).then((data) => {
            setEvents(data.data);
        });
        axios.get(`http://localhost:3030/users?empresa=${cookies.get('empresa')}`).then((data) => {
            setTrabajadores(data.data);
        });
    }, []);
    const handleOnChange = (e) => {
        axios.get(`http://localhost:3030/eventosCalendario?empresa=${cookies.get('empresa')}&idTrabajador=${e.target.value}`).then((data) => {
            setEvents(data.data);
        });
    }
    const updateEvents = () => {
        axios.get(`http://localhost:3030/eventosCalendario?empresa=${cookies.get('empresa')}&idTrabajador=0`).then((data) => {
            setEvents(data.data);
        });
    }
    return (
        <div id='content-wrapper' className='d-flex flex-column'>
            <div id='content'>
                <Topbar />
                <div className='container-fluid'>
                    <select className="form-control" name='trabajador' onChange={handleOnChange}>
                        <option value="0">Todos los trabajadores</option>
                        {
                            trabajadores.map(({id, nombre, empresa}, index) => <option value={id} id={id} key={id} className={cookies.get('empresa')}>{nombre}</option> )
                        }
                    </select>
                    <Calendar events={events} onClickEvent={handleOnClickEvent} />
                </div>
                <div id='calendarLegend'>
                    <span class='dot' style={{backgroundColor: '#57d64b'}}></span>Vacaciones
                    <span class='dot' style={{backgroundColor: '#3cf0e4'}}></span>Día libre
                    <span class='dot' style={{backgroundColor: '#f09e54'}}></span>Ausencia
                    <span class='dot' style={{backgroundColor: '#f27166'}}></span>Baja
                </div>
                <CalendarModal updateEvents={updateEvents}/>
            </div>
        </div>
    )
}

export default CalendarioLaboral;

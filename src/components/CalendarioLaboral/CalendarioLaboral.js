import React, { useState, useEffect } from 'react';
import Calendar from 'rc-year-calendar';
import 'rc-year-calendar/locales/rc-year-calendar.es'
import Topbar from '../Topbar/Topbar';

const CalendarioLaboral = () => {
    return (
        <div id='content-wrapper' className='d-flex flex-column'>
            <div id='content'>
                <Topbar />
                <div className='container-fluid'>
                    <Calendar language='es' onDayClick={(e) => {
                        console.log(e)
                        //e.target.style.backgroundColor = 'red';
                    }} />
                </div>
            </div>
        </div>
    )
}

export default CalendarioLaboral;

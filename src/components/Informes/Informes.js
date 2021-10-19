import React, { useEffect, useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Informe from './Informe';
import Topbar from '../Topbar/Topbar';
import axios from 'axios';
import { cookies } from '../../helpers/cookies';

const Informes = () => {
    const [userData, setUserData] = useState(null);
    const [trabajadores, setTrabajadores] = useState([]);
    useEffect(() => {
        getUserData();
        axios.get(`/users?empresa=${cookies.get('empresa')}`).then((data) => {
            setTrabajadores(data.data);
        });
    }, []);
    const getUserData = (id = cookies.get('idUsuario')) => {
        console.log('Hola ', id)
        axios.get(`/informeMensual?empresa=${cookies.get('empresa')}&idTrabajador=${id}`).then((data) => {
            setUserData(data.data);
        });
    }
    const handleOnChange = (e) => {
        setUserData(null);
        getUserData(e.target.value);
    }
    return (
        <div id='content-wrapper' className='d-flex flex-column' style={{overflow: 'hidden'}}>
            <div id='content'>
                <Topbar />
                <div className='container-fluid '>
                    <div className="form-group">
                        <select className="form-control" name='trabajador' onChange={handleOnChange}>
                            <option value={cookies.get('idUsuario')}></option>
                            {
                                trabajadores.map(({id, nombre}, index) => <option value={id} id={id} key={index} className={cookies.get('empresa')}>{nombre}</option> )
                            }
                        </select>
                    </div>
                    {
                        userData !== null ?
                            <PDFViewer className='w-100 min-vh-100 h-75'>
                                <Informe data={userData} />
                            </PDFViewer>
                        :
                            <span>Cargando...</span>
                    }
                </div>
            </div>
        </div>
    )
}



export default Informes;

import React, { useEffect, useState } from 'react';
import Topbar from '../Topbar/Topbar';
import Footer from '../Footer/Footer';
import { dia, mes, year } from '../../helpers/fechas';
import calendario from '../../assets/img/calendario.jpg';
import fichajes from '../../assets/img/fichajes.jpg';
import horasrealizadas  from '../../assets/img/horasrealizadas.jpg';
import logo from '../../assets/img/logo.png';
import trabajadores from '../../assets/img/trabajadores.jpg';
import { cookies } from '../../helpers/cookies';
import axios from 'axios';
const PanelDeControl = () => {
    cookies.set('empresa', 'Fac_DemoGrafix');
    const [userData, setUserData] = useState({
        totalTrabajadores: 0,
    });
    const [activos, setActivos] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3030/totalTrabajadores?empresa=${cookies.get('empresa')}`).then((data) => {
            setUserData({
                totalTrabajadores: data.data.total-1
            })
            console.log(1)
        });
        axios.get(`http://localhost:3030/trabajadoresActivos?empresa=${cookies.get('empresa')}`).then((data) => {
            let activos = [];
                console.log(data.data);
            for(let i in data.data) {
                activos.push({
                    nombre: data.data[i].nom,
                    id: data.data[i].usuari
                });
            }
            setActivos(activos);
        })
    }, [])
   
    return (
        <div id='content-wrapper' className='d-flex flex-column'>
        <div id='content'>
            <Topbar />
            <div className='container-fluid'>
            <div className='text-center logo-home'>
                <img src={logo} alt='Fichaje Por Voz' />
            </div>
            <div className="row links-home-top">
            <div className="col-xl-3 col-md-6 mb-4">
                <a href="trabajadores.html">
                    <div className="card shadow h-100">
                        <img src={trabajadores} alt="Trabajadores" />
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    Trabajadores
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">Totales: {userData.totalTrabajadores}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-users fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <a href="fichajes.html">
                    <div className="card shadow h-100">
                        <img src={fichajes} alt="Fichajes" />
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    Fichajes
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">Hoy: {dia}/{mes}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-microphone fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <a href="informes.html">
                    <div className="card shadow h-100">
                        <img src={horasrealizadas} alt="Horas Realizadas" />
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Informes</div>
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">70%</div>
                                    </div>
                                    <div className="col">
                                    <div className="progress progress-sm mr-2">
                                        <div className="progress-bar bg-info" role="progressbar"
                                            style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-chart-line fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <a href="calendario-laboral.html">
                    <div className="card shadow h-100">
                        <img src={calendario} alt="Calendario" />
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Calendario
                                </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{dia}-{mes}-{year}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-calendar-alt fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </a>
            </div>
            </div>
            <hr />
            <div>
            <h3 className="h3 mb-1 text-gray-800 title-section"><i className="fas fa-check-circle" style={{color: '#1cc88a'}}></i> ¿Quién está trabajando ahora?</h3>
            <br />
            <div className="tb-act-l">
                {
                    activos.map(({nombre, id}, index) => {
                        return (
                            <a href="#" className="btn btn-success btn-icon-split">
                            <span className="icon text-white-50">
                            <i className="fas fa-user"></i>
                            </span>
                            <span className="text" id={id}>{nombre}</span>
                            </a>
                        )
                    })
                }
            </div>
            </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default PanelDeControl;

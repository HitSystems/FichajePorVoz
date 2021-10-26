/* eslint-disable eqeqeq */
import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CSVLink } from 'react-csv';
import Informe from './Informe';
import Topbar from '../Topbar/Topbar';
import axios from 'axios';
import { cookies } from '../../helpers/cookies';
import loadingGif from '../../assets/video/progress.gif';
import GraficoLineal from './GraficoLineal';
import GraficoCircular from './GraficoCircular';

const Informes = () => {
    const [userData, setUserData] = useState(null);
    const [trabajadores, setTrabajadores] = useState([]);
    const [datosInforme, setDatosInforme] = useState({
        trabajadorSeleccionado: cookies.get('idUsuario'),
        periodo: 1,
    });
    const [dia, setDia] = useState(new Date().getDate());
    const [mes, setMes] = useState(new Date().getMonth()+1);
    const [year, setYear] = useState(new Date().getFullYear());
    const [csvData, setCsvData] = useState(null);
    useEffect(() => {
        getUserData(cookies.get('idUsuario'), 1);
        updateCsvData(cookies.get('idUsuario'), 1);
        axios.get(`/users?empresa=${cookies.get('empresa')}`).then((data) => {
            setTrabajadores(data.data);
        });
    }, []);
    const getUserData = (id = cookies.get('idUsuario'), periodo = 1) => {
        axios.get(`/informe?empresa=${cookies.get('empresa')}&idTrabajador=${id}&periodo=${periodo}&dia=${dia}&mes=${mes}&year=${year}`).then((data) => {
            setUserData(data.data);
        });
    }
    const updateCsvData = (id = cookies.get('idUsuario'), periodo = 1) => {
        axios.get(`/informe?empresa=${cookies.get('empresa')}&idTrabajador=${id}&periodo=${periodo}&dia=${dia}&mes=${mes}&year=${year}`).then((data) => {
            const datosCSV = data.data.fichajes.map(({tmst, finEvento, accio, comentari}, index) => {
                let accioNombre;
                const fecha = new Date(tmst);
                let hora = fecha.getHours().toString();
                let minutos = fecha.getMinutes().toString();
                if(finEvento === null) {
                    accioNombre = accio === 1 ? 'Entrada' : accio === 2 ? 'Salida' : accio === 3 ? 'Inicio descanso' : accio === 4 ? 'Entrada justificada' : 'Salida justificada';
                    if(hora.length < 2) hora = `0${hora}`;
                    if(minutos.length < 2) minutos = `0${minutos}`;
                    hora += ':'
                } else {
                    accioNombre = accio === 1 ? 'Vacaciones' : accio === 2 ? 'Día libre' : accio === 3 ? 'Baja' : 'Ausencia';
                    hora = '';
                    minutos = '';
                }
                let dia = fecha.getDate().toString(), mes = (fecha.getMonth()+1).toString();
                if(dia.length < 2) dia = `0${dia}`;
                if(mes.length < 2) mes = `0${mes}`;
                const formatoFecha = `${dia}/${mes}/${fecha.getFullYear()}`;
                const fechaTotal = `${formatoFecha} ${hora}${minutos}`;
                const comentario = comentari.substring(comentari.lastIndexOf(']')+1);
                return {
                    Fecha: fechaTotal,
                    Accion: accioNombre,
                    Comentario: comentario,
                }
            });
            setCsvData(datosCSV);
        });
    }
    const handleOnChange = (e) => {
        setDatosInforme({
            ...datosInforme,
            [e.target.name]: e.target.value,
        });
    }
    const renderSelects = () => {
        if(datosInforme.periodo == 0) {
            return (
                <>
                    <br />
                    <div className='row'>
                        <div className="col">
                            <label htmlFor='fecha'>Elige la semana</label>
                            <input type='date' className='form-control' onChange={datosInformeMes} />
                        </div>
                    </div>
                </>
            )
        } else if(datosInforme.periodo == 1) {
            return (
                <>
                    <br />
                    <div className='row'>
                        <div className="col">
                            <label htmlFor='mes'>Mes</label>
                            <select className='form-control' name='datosMes' onChange={datosMes} value={mes}>
                                <option value='1'>Enero</option>
                                <option value='2'>Febrero</option>
                                <option value='3'>Marzo</option>
                                <option value='4'>Abril</option>
                                <option value='5'>Mayo</option>
                                <option value='6'>Junio</option>
                                <option value='7'>Julio</option>
                                <option value='8'>Agosto</option>
                                <option value='9'>Septiembre</option>
                                <option value='10'>Octubre</option>
                                <option value='11'>Noviembre</option>
                                <option value='12'>Diciembre</option>
                            </select>
                        </div>
                    <div className="col">
                        <label htmlFor='year'>Año</label>
                        <select className="form-control" name='year' onChange={datosAno} value={year}>
                            <option value='2019'>2019</option>
                            <option value='2020'>2020</option>
                            <option value='2021'>2021</option>
                        </select>
                    </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <br />
                    <div className="col">
                        <label htmlFor='year'>Año</label>
                        <select className="form-control" name='year' onChange={datosAno} value={year}>
                            <option value='2019'>2019</option>
                            <option value='2020'>2020</option>
                            <option value='2021'>2021</option>
                        </select>
                    </div>
                </>
            )
        }
    }
    const datosMes = (e) => {
        setMes(e.target.value);
    }
    const datosAno = (e) => {
        setYear(e.target.value);
    }
    const getNuevoInforme = (e) => {
        e.preventDefault();
        setUserData(null);
        setCsvData(null);
        getUserData(datosInforme.trabajadorSeleccionado, datosInforme.periodo);
        updateCsvData(datosInforme.trabajadorSeleccionado, datosInforme.periodo);
    }
    const datosInformeMes = (e) => {
        const fecha = (e.target.value).split('-');
        setYear(fecha[0]);
        setMes(fecha[1]);
        setDia(fecha[2]);
    }
    return (
        <div id='content-wrapper' className='d-flex flex-column' style={{overflow: 'hidden'}}>
            <div id='content'>
                <Topbar />
                <div className='container-fluid '>
                    <div className="form-group">
                        <div className='row'>
                            <div className="col">
                                <label htmlFor='trabajador'>Trabajador</label>
                                <select className="form-control" name='trabajadorSeleccionado' onChange={handleOnChange} value={datosInforme.trabajadorSeleccionado}>
                                    {
                                        trabajadores.map(({id, nombre}, index) => <option value={id} id={id} key={index} className={cookies.get('empresa')}>{nombre}</option> )
                                    }
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor='trabajador'>Período</label>
                                <select className="form-control" name='periodo' onChange={handleOnChange} value={datosInforme.periodo}>
                                    <option value='0'>Semanal</option>
                                    <option value='1'>Mensual</option>
                                    <option value='2'>Anual</option>
                                </select>
                            </div>
                        </div>
                        {
                            renderSelects()
                        }
                        <br />
                        <div className='row'>
                            <div className='col'>
                                {
                                    userData !== null ?
                                        <>
                                            <button type="submit" className="btn btn-primary mr-2" onClick={getNuevoInforme}>Generar informe</button>
                                            <PDFDownloadLink document={<Informe data={userData} />} fileName="informe.pdf">
                                                {({ blob, url, loading, error }) => (loading ? 
                                                    'Loading document...'
                                                : 
                                                <button type='button' className='btn btn-danger mr-2'>Descargar PDF</button>
                                                )}
                                            </PDFDownloadLink>
                                        </>
                                    :
                                        <>
                                            <button type='button' className="btn btn-primary mr-2" disabled>Generar informe</button>
                                            <button type='button' className='btn btn-danger mr-2' disabled>Descargar PDF</button>
                                        </> 
                                }
                                {
                                    csvData !== null ?
                                        <CSVLink data={csvData} filename='informe.csv'><button type='button' className='btn btn-success'>Descargar CSV</button></CSVLink>
                                    :
                                        <button type='button' className='btn btn-success' disabled>Descargar CSV</button>
                                }
                            </div>
                            <div className='col'>
                            </div>
                        </div>
                        <br />
                        <div className='row'>
                            <div className='table-responsive'>
                                <table className='table table-striped'>
                                    <thead>
                                        <tr>
                                            <th>Fecha</th>
                                            <th>Accion</th>
                                            <th>Comentario</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        userData !== null ?
                                            userData.fichajes.map(({tmst, finEvento, accio, comentari}, index) => {
                                                let accioNombre;
                                                const fecha = new Date(tmst);
                                                let hora = fecha.getHours().toString();
                                                let minutos = fecha.getMinutes().toString();
                                                if(finEvento === null) {
                                                    accioNombre = accio === 1 ? 'Entrada' : accio === 2 ? 'Salida' : accio === 3 ? 'Inicio descanso' : accio === 4 ? 'Entrada justificada' : 'Salida justificada';
                                                    if(hora.length < 2) hora = `0${hora}`;
                                                    if(minutos.length < 2) minutos = `0${minutos}`;
                                                    hora += ':'
                                                } else {
                                                    accioNombre = accio === 1 ? 'Vacaciones' : accio === 2 ? 'Día libre' : accio === 3 ? 'Baja' : 'Ausencia';
                                                    hora = '';
                                                    minutos = '';
                                                }
                                                let dia = fecha.getDate().toString(), mes = (fecha.getMonth()+1).toString();
                                                if(dia.length < 2) dia = `0${dia}`;
                                                if(mes.length < 2) mes = `0${mes}`;
                                                const formatoFecha = `${dia}/${mes}/${fecha.getFullYear()}`;
                                                const fechaTotal = `${formatoFecha} ${hora}${minutos}`;
                                                const comentario = comentari.substring(comentari.lastIndexOf(']')+1);
                                                return (
                                                    <tr key={index}>
                                                        <td>{fechaTotal}</td>
                                                        <td>{accioNombre}</td>
                                                        <td>{comentario}</td>
                                                    </tr>
                                                )
                                            })
                                        :
                                            <div className='text-center'>
                                                <img src={loadingGif} className='img-fluid' alt='Cargando...' />
                                            </div>
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {
                            /*
                                <div className='row'>
                                    <div className='col-md-7'>
                                        <GraficoLineal />
                                    </div>
                                    <div className='col-md-4'>
                                        <GraficoCircular />
                                    </div>
                                </div>
                            */
                        }
                        <div>

                        </div>
                    </div>
                    {
                       /* userData === 213124124 ?
                            <PDFViewer className='w-100 min-vh-100 h-75'>
                                <Informe data={userData} />
                            </PDFViewer>
                        :
                            <span></span> */
                    }
                    {
                        userData !== null ?
                            <div className='row'>
                                <div className='col'>
                                    <h3>Horas reales: {userData.horas}</h3>
                                    <h3>Horas teóricas: {userData.horasTotalesMes}</h3>
                                </div>
                            </div>
                        :
                            <span></span>
                    }
                </div>
            </div>
        </div>
    )
}



export default Informes;

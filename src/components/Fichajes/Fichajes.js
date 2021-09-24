import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { cookies } from '../../helpers/cookies';
import Footer from '../Footer/Footer';
import Topbar from '../Topbar/Topbar';

const Fichajes = () => {
    const [trabajadores, setTrabajadores] = useState([]);
    const [fichajes, setFichajes] = useState([]);
    const [datosConsulta, setDatosConsulta] = useState({
        trabajador: 0,
        year: 2021,
        mes: 9,
        franjaHoraria: 0
    })

    useEffect(() => {
        axios.get(`http://54.74.52.150:3030/users?empresa=${cookies.get('empresa')}`).then((data) => {
            setTrabajadores(data.data);
        });
        let {trabajador, year, mes, franjaHoraria} = datosConsulta;
        let urlFichajes = `http://54.74.52.150:3030/fichajes?empresa=${cookies.get('empresa')}&trabajador=${trabajador}&year=${year}&mes=${mes}&franjaHoraria=${franjaHoraria}`;
        axios.get(urlFichajes).then((data) => {
            setFichajes(data.data);
        });
    }, []);

    const handleOnChange = (e) => {
        setDatosConsulta({
            ...datosConsulta,
            [e.target.name]: e.target.value
        });
    }
    const handleOnClick = (e) => {
        e.preventDefault();
        let {trabajador, year, mes, franjaHoraria} = datosConsulta;
        let urlFichajes = `http://54.74.52.150:3030/fichajes?empresa=${cookies.get('empresa')}&trabajador=${trabajador}&year=${year}&mes=${mes}&franjaHoraria=${franjaHoraria}`;
        axios.get(urlFichajes).then((data) => {
            setFichajes(data.data);
        });
    }

    return (
        <div id="content-wrapper" class="d-flex flex-column">
        <div id='content'>
            <Topbar />
         <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-1 text-gray-800 title-section"><i className="fas fa-microphone"></i> Fichajes</h1>
            <a href="#" className="btn btn-primary btn-icon-split btn-sm btn-primary shadow-sm" data-toggle="modal" data-target="#modalFichar">
            <span className="icon text-white-50">
            <i className="fas fa-plus"></i>
            </span>
            <span className="text">Fichar Ahora</span>
            </a>
        </div>
        <div className="card shadow">
            <div className="card-header">
                <h6 className="m-0 font-weight-bold text-primary">LISTA DE FICHAJES</h6>
            </div>
            <div className="card-body">
                <div>
                    <form>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="form-group">
                                <select className="form-control" name='trabajador' onChange={handleOnChange}>
                                <option value="0">Todos los trabajadores</option>
                                {
                                    trabajadores.map(({id, nombre, empresa}, index) => <option value={id} id={id} key={id} className={cookies.get('empresa')}>{nombre}</option> )
                                }
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                <select className="form-control" name='year' onChange={handleOnChange}>
                                <option value='2021'>2021</option>
                                <option value='2020'>2020</option>
                                <option value='2019'>2019</option>
                                <option value='2018'>2018</option>
                                <option value='2017'>2017</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                <select className="form-control" name='mes' onChange={handleOnChange}>
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
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                <select className="form-control" name='franjaHoraria' onChange={handleOnChange}>
                                <option value='0'>Todo el día</option>
                                <option value='1'>Mañana</option>
                                <option value='2'>Tarde</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="search" className="form-control" placeholder="Buscar" />
                        </div>
                        <div className="col-md-2" style={{'margin-top': '4px'}}>
                            <button type="submit" className="btn btn-primary btn-sm" onClick={handleOnClick}>
                            <i className="fas fa-filter"></i>
                            </button>
                            <a href="#" className="btn btn-warning btn-sm" data-toggle="tooltip" data-placement="top" title="Descargar CSV">
                            <i className="fas fa-cloud-download-alt"></i>
                            </a>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="table-responsive">
                    <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Accion</th>
                            <th scope="col">Comentario</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fichajes.map(({fecha, hora, accio, nom}, index) => {
                                let accioNombre = accio === 1 ? 'Entrada' : 'Salida';
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>
                                            <i className="fas fa-check-circle" style={{color: '#1cc88a'}}></i>
                                            <i className="fas fa-times-circle"></i>
                                        </td>
                                        <td>{nom}</td>
                                        <td>{fecha}</td>
                                        <td>{hora}</td>
                                        <td>{accioNombre}</td>
                                        <td></td>
                                        <td>
                                            <a href="#" className="btn btn-success btn-icon-split btn-sm btn-primary shadow-sm" data-toggle="modal" data-target="#modalEdit">
                                            <span className="icon text-white-50">
                                            <i className="fas fa-pencil-alt"></i>
                                            </span>
                                            <span className="text">Comentario</span>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="modal fade" id="modalFichar" tabindex="-1" aria-labelledby="modalFicharLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="modalFicharLabel">Nuevo Fichaje</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>De:</b> Santiago Camp Estrada
                        </li>
                        <li className="list-group-item">
                            <b>Fecha:</b> <span className="get-day"></span>
                        </li>
                        <li className="list-group-item">
                            <b>Hora:</b> <span className="get-hour"></span>
                        </li>
                        <li className="list-group-item">
                            <b>IP:</b> <span className="get-ip"></span>
                        </li>
                        <li className="list-group-item">
                            <b>Localización:</b> Granollers
                        </li>
                        <li className="list-group-item item-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2983.2537597026353!2d2.2847613!3d41.607024!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDM2JzI1LjMiTiAywrAxNycxMy4wIkU!5e0!3m2!1ses!2ses!4v1626274915138!5m2!1ses!2ses" style={{border: 0, width: '100%', height: '200px'}} allowfullscreen="" loading="lazy"></iframe>
                        </li>
                        <li className="list-group-item text-center">
                            <br />
                            <a href="#" className="btn btn-primary btn-icon-split btn-primary shadow-sm btn-lg">
                            <span className="icon text-white-50">
                            <i className="fas fa-check"></i>
                            </span>
                            <span className="text">FICHAR AHORA</span>
                            </a>
                        </li>
                    </ul>
                    <form>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade" id="modalEdit" tabindex="-1" aria-labelledby="modalEditLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form>
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalEditLabel">Añadir Comentario</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Para:</b> Santiago Camp Estrada
                            </li>
                            <li className="list-group-item">
                                <b>Fecha:</b> 30-08-2021
                            </li>
                            <li className="list-group-item">
                                <b>Hora:</b> 00:00:00h
                            </li>
                            <li className="list-group-item">
                                <div className="form-group">
                                <label for="comentario"><b>Comentario</b></label>
                                <textarea className="form-control" id="comentario" rows="3"></textarea>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary btn-sm" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary btn-sm">Guardar</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
            <Footer />
        </div>
    )
}

export default Fichajes;

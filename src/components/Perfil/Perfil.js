import React, { useState, useEffect } from 'react';
import Topbar from '../Topbar/Topbar';
import { cookies } from '../../helpers/cookies';
import axios from 'axios';

const Perfil = () => {
    const [datosTrabajador, setDatosTrabajador] = useState({
        telefono: '',
        movil: '',
        direccion: ''
    });
    useEffect(() => {
        //if(!cookies.get('loggedIn')) window.location.href = '/FichajePorVoz/inicar-sesion';
        const source = axios.CancelToken.source();
        axios.get(`/datosTrabajador?empresa=${cookies.get('empresa')}&idUsuario=${cookies.get('idUsuario')}`, { cancelToken: source.token }).then((data) => {
            setDatosTrabajador({
                telefono: '',
                movil: data.data.movil,
                direccion: data.data.direccion,
                imagen: data.data.imagen,
            })
        }).catch((err) => {
            if (axios.isCancel(err)) {
            } else {
                throw err;
            }
        })
        return () => {
            source.cancel();
        }
    }, [])
    return (
        <div id='content-wrapper' className='d-flex flex-column'>
        <div id='content'>
            <Topbar />
        <div className="container-fluid">

            <h1 className="h3 mb-1 text-gray-800 title-section"><i className="fas fa-user"></i> Perfil</h1>

            <div className="row">
                <div className="col-xl-3 col-lg-5">
                    <div className="card card-trabajador shadow mb-4">
                        <div className="card-body">
                            <div className="text-center">
                                <div className="img-pr-w">
                                    <img className="img-profile img-trabajador rounded-circle" src={datosTrabajador.imagen} alt="Grafix" />
                                    <div className="container-file btn btn-primary rounded-circle btn-edit-photo container-file-edit" data-toggle="tooltip" data-placement="top" title="Cambiar Foto">
                                        <div className="button-wrap">
                                            <label className="button" for="upload">
                                                <i className="fas fa-camera-retro"></i>
                                            </label>
                                            <input id="upload" type="file" accept="image/*" />
                                        </div>
                                    </div>
                                </div>
                                <br /><br />
                                <h4>
                                    {cookies.get('nombre')}
                                </h4>
                                <br />
                                <div className="row custom-user-buttons">
                                <div className="col-12">
                                    <div className="nav flex-column nav-pills nav-treballador" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a className="nav-link active btn-icon-split" id="v-pills-edit-tab" data-toggle="pill" href="#v-pills-edit" role="tab" aria-controls="v-pills-edit" aria-selected="true">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-pencil-alt"></i>
                                        </span>
                                        <span className="text">Editar Informaci??n</span>
                                    </a>
                                    <a className="nav-link btn-icon-split" id="v-pills-pass-tab" data-toggle="pill" href="#v-pills-pass" role="tab" aria-controls="v-pills-pass" aria-selected="true">
                                        <span className="icon text-white-50">
                                            <i className="fas fa-unlock-alt"></i>
                                        </span>
                                        <span className="text">Cambiar Contrase??a</span>
                                    </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-7">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-edit" role="tabpanel" aria-labelledby="v-pills-edit-tab">
                            <div className="card shadow">
                                <div className="card-header">
                                    <h6 className="m-0 font-weight-bold text-primary">EDITAR INFORMACI??N DE PERFIL</h6>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label for="nombre">Nombre de Usuario</label>
                                                <input type="text" className="form-control" id="nombre" placeholder="Nombre" value={cookies.get('nombre')} />
                                            </div>
                                            <div className="col-md-4">
                                                <label for="empresa">Empresa</label>
                                                <input type="text" className="form-control" id="empresa" placeholder="Empresa" value={cookies.get('empresa')} />
                                            </div>
                                            <div className="col-md-4">
                                                <label for="email">Correo Electr??nico</label>
                                                <input type="email" className="form-control" id="email" placeholder="Email" value={cookies.get('mail')} />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-md-3">
                                                <label for="telf">Tel??fono</label>
                                                <input type="text" className="form-control" id="telf" placeholder="Tel??fono" value={datosTrabajador.telefono} />
                                            </div>
                                            <div className="col-md-3">
                                                <label for="mbl">M??vil</label>
                                                <input type="text" className="form-control" id="mbl" placeholder="M??vil" value={datosTrabajador.movil} />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="dir">Direcci??n</label>
                                                <input type="text" className="form-control" id="dir" placeholder="Direcci??n" value={datosTrabajador.direccion} />
                                            </div>
                                        </div>
                                        <br />
                                        <input type="hidden" name="photo" id="hidden-photo" />
                                        <button type="submit" className="btn btn-primary">Actualizar</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button type="button" className="btn btn-danger">Solicitar Baja</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show" id="v-pills-pass" role="tabpanel" aria-labelledby="v-pills-pass-tab">
                            <div className="card shadow">
                                <div className="card-header">
                                    <h6 className="m-0 font-weight-bold text-primary">CAMBIAR CONTRASE??A</h6>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label for="pass-old">Antigua Contrase??a</label>
                                                <input type="password" className="form-control" id="pass-old" />
                                            </div>
                                            <div className="col-md-4">
                                                <label for="pass">Nueva Contrase??a</label>
                                                <input type="password" className="form-control" id="pass" />
                                            </div>
                                            <div className="col-md-4">
                                                <label for="pass2">Repetir Nueva Contrase??a</label>
                                                <input type="password" className="form-control" id="pass2" />
                                            </div>
                                        </div>
                                        <br />
                                        <button type="submit" className="btn btn-primary">Actualizar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
)}

export default Perfil

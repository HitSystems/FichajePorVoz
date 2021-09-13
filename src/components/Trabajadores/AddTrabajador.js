import React from 'react';
import Topbar from '../Topbar/Topbar';
import Footer from '../Footer/Footer'

const AddTrabajador = () => {
    return (
        <div id='content-wrapper' className='d-flex flex-column'>
        <div id='content'>
            <Topbar />
        <div className="container-fluid">
            <h1 className="h3 mb-1 text-gray-800 title-section"><i className="fas fa-user"></i> Nuevo trabajador</h1>
            <div className="row">
                <div className="col-xl-3 col-lg-5">
                    <div className="card card-trabajador shadow mb-4">
                        <div className="card-body">
                        <div className="text-center">
                            <div className="img-pr-w">
                                <img className="img-profile img-trabajador rounded-circle" src="img/user.png" alt="Santiago Camp Estrada" />
                                <div className="container-file btn btn-primary rounded-circle btn-edit-photo" data-toggle="tooltip" data-placement="top" title="Cambiar Foto">
                                    <div className="button-wrap">
                                    <label className="button" for="upload">
                                    <i className="fas fa-camera-retro"></i>
                                    </label>
                                    <input id="upload" type="file" accept="image/*" />
                                    </div>
                                </div>
                            </div>
                            <br /><br />
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-7">
                    <div className="card shadow">
                        <div className="card-header">
                        <h6 className="m-0 font-weight-bold text-primary">INFORMACIÓN</h6>
                        </div>
                        <div className="card-body">
                        <form>
                            <div className="row">
                                <div className="col-md-4">
                                    <label for="nombre">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" placeholder="Nombre" />
                                </div>
                                <div className="col-md-4">
                                    <label for="apellido1">Primer Apellido</label>
                                    <input type="text" className="form-control" id="apellido1" placeholder="Primer Apellido" />
                                </div>
                                <div className="col-md-4">
                                    <label for="apellido2">Segundo Apellido</label>
                                    <input type="text" className="form-control" id="apellido2" placeholder="Segundo Apellido" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-4">
                                    <label for="email">Correo Electrónico</label>
                                    <input type="email" className="form-control" id="email" placeholder="email" />
                                </div>
                                <div className="col-md-4">
                                    <label for="pass">Contraseña</label>
                                    <input type="password" className="form-control" id="pass" placeholder="Contraseña" />
                                </div>
                                <div className="col-md-4">
                                    <label for="pass2">Repetir Contraseña</label>
                                    <input type="password" className="form-control" id="pass2" placeholder="Repetir Contraseña" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-2">
                                    <label for="telf">Teléfono</label>
                                    <input type="text" className="form-control" id="telf" placeholder="Teléfono" />
                                </div>
                                <div className="col-md-2">
                                    <label for="mbl">Móvil</label>
                                    <input type="text" className="form-control" id="mbl" placeholder="Móvil" />
                                </div>
                                <div className="col-md-2">
                                    <label for="cumple">Nacido el</label>
                                    <input type="date" className="form-control" id="cumple" placeholder="Fecha de nacimiento" />
                                </div>
                                <div className="col-md-6">
                                    <label for="dir">Dirección</label>
                                    <input type="text" className="form-control" id="dir" placeholder="Dirección" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-2">
                                    <label for="alta">Fecha de Alta</label>
                                    <input type="date" className="form-control" id="alta" placeholder="alta" value="2021-02-01" />
                                </div>
                                <div className="col-md-10">
                                    <label for="cargo">Cargo</label>
                                    <input type="text" className="form-control" id="cargo" placeholder="cargo" />
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                    <label for="extra">Información Complementaria</label>
                                    <textarea className="form-control" id="extra" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="isadmin" />
                                    <label className="form-check-label" for="isadmin">Trabajador Administrador</label>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" name="photo" id="hidden-photo" />
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            <Footer />
        </div>
    )
}

export default AddTrabajador;

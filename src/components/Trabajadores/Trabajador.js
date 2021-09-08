import React from 'react';

const Trabajador = () => {
    return (
        <div className="container-fluid">
            <h1 className="h3 mb-1 text-gray-800 title-section"><i className="fas fa-user"></i> trabajador</h1>
            <div className="row">
                <div className="col-xl-3 col-lg-5">
                    <div className="card card-trabajador shadow mb-4">
                        <div className="card-body">
                        <div className="text-center">
                            <div className="img-pr-w">
                                <img className="img-profile img-trabajador rounded-circle" src="img/santi.jpg" alt="Santiago Camp Estrada" />
                                <div className="container-file btn btn-primary rounded-circle btn-edit-photo container-file-edit" style={{display: 'none'}} data-toggle="tooltip" data-placement="top" title="Cambiar Foto">
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
                                <i className="fas fa-check-circle" style={{color: '#1cc88a'}} data-toggle="tooltip" data-placement="top" title="Conectado"></i> Santiago Camp Estrada
                            </h4>
                            <p>
                                <small>
                                <a href="mailto:santi.camp@grafix.es">santi.camp@grafix.es</a>
                                </small>
                            </p>
                            <div className="row custom-user-buttons">
                                <div className="col-12">
                                    <div className="nav flex-column nav-pills nav-treballador" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a className="nav-link active btn-icon-split" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <span className="icon text-white-50">
                                    <i className="fas fa-info-circle"></i>
                                    </span>
                                    <span className="text">Información General</span>
                                    </a>
                                    <a className="nav-link btn-icon-split" id="v-pills-edit-tab" data-toggle="pill" href="#v-pills-edit" role="tab" aria-controls="v-pills-edit" aria-selected="true">
                                    <span className="icon text-white-50">
                                    <i className="fas fa-pencil-alt"></i>
                                    </span>
                                    <span className="text">Editar Información</span>
                                    </a>
                                    <a className="nav-link btn-icon-split" id="v-pills-historial-tab" data-toggle="pill" href="#v-pills-historial" role="tab" aria-controls="v-pills-historial" aria-selected="true">
                                    <span className="icon text-white-50">
                                    <i className="fas fa-history"></i>
                                    </span>
                                    <span className="text">Historial de Fichajes</span>
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
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <div className="card shadow">
                            <div className="card-header">
                                <h6 className="m-0 font-weight-bold text-primary">INFORMACIÓN DEL TRABAJADOR</h6>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <b>Alta</b>
                                        </div>
                                        <div className="col-md-11">
                                            <span>01 de Enero del 2021</span>
                                        </div>
                                    </div>
                                    </li>
                                    <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <b>Dirección</b>
                                        </div>
                                        <div className="col-md-11">
                                            C/Barcelona, 75, 08401 Granollers, Barcelona
                                        </div>
                                    </div>
                                    </li>
                                    <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <b>Nacido el</b>
                                        </div>
                                        <div className="col-md-11">
                                            24 de Septiembre del 1986
                                        </div>
                                    </div>
                                    </li>
                                    <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <b>Teléfono</b>
                                        </div>
                                        <div className="col-md-11">
                                            <a href="tel:938888888">+34 93 888 88 88</a>
                                        </div>
                                    </div>
                                    </li>
                                    <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <b>Móvil</b>
                                        </div>
                                        <div className="col-md-11">
                                            <a href="tel:666666666">+34 666 66 66 66</a>
                                        </div>
                                    </div>
                                    </li>
                                    <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-1">
                                            <b>Cargo</b>
                                        </div>
                                        <div className="col-md-11">
                                            <span>Desarrollador Web</span>
                                        </div>
                                    </div>
                                    </li>
                                    <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </p>
                                        </div>
                                    </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane fade show" id="v-pills-edit" role="tabpanel" aria-labelledby="v-pills-edit-tab">
                        <div className="card shadow">
                            <div className="card-header">
                                <h6 className="m-0 font-weight-bold text-primary">EDITAR INFORMACIÓN</h6>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                    <div className="col-md-4">
                                        <label for="nombre">Nombre</label>
                                        <input type="text" className="form-control" id="nombre" placeholder="Nombre" value="Santiago" />
                                    </div>
                                    <div className="col-md-4">
                                        <label for="apellido1">Primer Apellido</label>
                                        <input type="text" className="form-control" id="apellido1" placeholder="Primer Apellido" value="Camp" />
                                    </div>
                                    <div className="col-md-4">
                                        <label for="apellido2">Segundo Apellido</label>
                                        <input type="text" className="form-control" id="apellido2" placeholder="Segundo Apellido" value="Estrada" />
                                    </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                    <div className="col-md-2">
                                        <label for="telf">Teléfono</label>
                                        <input type="text" className="form-control" id="telf" placeholder="Teléfono" value="+34 93 888 88 88" />
                                    </div>
                                    <div className="col-md-2">
                                        <label for="mbl">Móvil</label>
                                        <input type="text" className="form-control" id="mbl" placeholder="Móvil" value="+34 666 66 66 66" />
                                    </div>
                                    <div className="col-md-2">
                                        <label for="cumple">Nacido el</label>
                                        <input type="date" className="form-control" id="cumple" placeholder="Fecha de nacimiento" value="1986-09-24" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="dir">Dirección</label>
                                        <input type="text" className="form-control" id="dir" placeholder="Dirección" value="C/Barcelona, 75, 08401 Granollers, Barcelona" />
                                    </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                    <div className="col-md-2">
                                        <label for="alta">Fecha de Alta</label>
                                        <input type="date" className="form-control" id="alta" placeholder="alta" value="2021-01-01" />
                                    </div>
                                    <div className="col-md-10">
                                        <label for="cargo">Cargo</label>
                                        <input type="text" className="form-control" id="cargo" placeholder="cargo" value="Desarrollador Web" />
                                    </div>
                                    </div>
                                    <br />
                                    <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="extra">Información Complementaria</label>
                                            <textarea className="form-control" id="extra" rows="3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
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
                                    <button type="submit" className="btn btn-primary">Actualizar</button>
                                </form>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane fade show" id="v-pills-historial" role="tabpanel" aria-labelledby="v-pills-historial-tab">
                        <div className="card shadow">
                            <div className="card-header">
                                <h6 className="m-0 font-weight-bold text-primary">HISTORIAL DE FICHAJES</h6>
                            </div>
                            <div className="card-body">
                                <div>
                                    <form>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <select className="form-control">
                                                <option>2021</option>
                                                <option>2020</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                                <option>2017</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="form-group">
                                                <select className="form-control">
                                                <option>Enero</option>
                                                <option>Febrero</option>
                                                <option>Marzo</option>
                                                <option>Abril</option>
                                                <option>Mayo</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <input type="search" className="form-control" placeholder="Buscar" />
                                        </div>
                                        <div className="col-md-2" style={{'margin-top': '4px'}}>
                                            <button type="submit" className="btn btn-primary btn-sm">
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
                                            <th scope="col">Fecha</th>
                                            <th scope="col">Entrada Mañana</th>
                                            <th scope="col">Salida Mañana</th>
                                            <th scope="col">Entrada Tarde</th>
                                            <th scope="col">Salida Tarde</th>
                                            <th scope="col">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01-07-2021</td>
                                            <td>08:00h</td>
                                            <td>14:00h</td>
                                            <td>15:00h</td>
                                            <td>17:30h</td>
                                            <td>
                                                <button type="button" className="btn btn-success btn-sm">
                                                <i className="fas fa-pencil-alt"></i>
                                                </button>
                                                <button type="button" className="btn btn-danger btn-sm">
                                                <i className="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>02-07-2021</td>
                                            <td>08:00h</td>
                                            <td>14:00h</td>
                                            <td>15:00h</td>
                                            <td>17:30h</td>
                                            <td>
                                                <button type="button" className="btn btn-success btn-sm">
                                                <i className="fas fa-pencil-alt"></i>
                                                </button>
                                                <button type="button" className="btn btn-danger btn-sm">
                                                <i className="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>03-07-2021</td>
                                            <td>08:00h</td>
                                            <td>14:00h</td>
                                            <td>15:00h</td>
                                            <td>17:30h</td>
                                            <td>
                                                <button type="button" className="btn btn-success btn-sm">
                                                <i className="fas fa-pencil-alt"></i>
                                                </button>
                                                <button type="button" className="btn btn-danger btn-sm">
                                                <i className="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>04-07-2021</td>
                                            <td>08:00h</td>
                                            <td>14:00h</td>
                                            <td>15:00h</td>
                                            <td>17:30h</td>
                                            <td>
                                                <button type="button" className="btn btn-success btn-sm">
                                                <i className="fas fa-pencil-alt"></i>
                                                </button>
                                                <button type="button" className="btn btn-danger btn-sm">
                                                <i className="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trabajador;

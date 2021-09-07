import React from 'react';

const Trabajador = () => {
    return (
        <div class="container-fluid">
            <h1 class="h3 mb-1 text-gray-800 title-section"><i class="fas fa-user"></i> trabajador</h1>
            <div class="row">
                <div class="col-xl-3 col-lg-5">
                    <div class="card card-trabajador shadow mb-4">
                        <div class="card-body">
                        <div class="text-center">
                            <div class="img-pr-w">
                                <img class="img-profile img-trabajador rounded-circle" src="img/santi.jpg" alt="Santiago Camp Estrada" />
                                <div class="container-file btn btn-primary rounded-circle btn-edit-photo container-file-edit" style="display:none" data-toggle="tooltip" data-placement="top" title="Cambiar Foto">
                                    <div class="button-wrap">
                                    <label class="button" for="upload">
                                    <i class="fas fa-camera-retro"></i>
                                    </label>
                                    <input id="upload" type="file" accept="image/*" />
                                    </div>
                                </div>
                            </div>
                            <br /><br />
                            <h4>
                                <i class="fas fa-check-circle" style="color:#1cc88a" data-toggle="tooltip" data-placement="top" title="Conectado"></i> Santiago Camp Estrada
                            </h4>
                            <p>
                                <small>
                                <a href="mailto:santi.camp@grafix.es">santi.camp@grafix.es</a>
                                </small>
                            </p>
                            <div class="row custom-user-buttons">
                                <div class="col-12">
                                    <div class="nav flex-column nav-pills nav-treballador" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <a class="nav-link active btn-icon-split" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <span class="icon text-white-50">
                                    <i class="fas fa-info-circle"></i>
                                    </span>
                                    <span class="text">Información General</span>
                                    </a>
                                    <a class="nav-link btn-icon-split" id="v-pills-edit-tab" data-toggle="pill" href="#v-pills-edit" role="tab" aria-controls="v-pills-edit" aria-selected="true">
                                    <span class="icon text-white-50">
                                    <i class="fas fa-pencil-alt"></i>
                                    </span>
                                    <span class="text">Editar Información</span>
                                    </a>
                                    <a class="nav-link btn-icon-split" id="v-pills-historial-tab" data-toggle="pill" href="#v-pills-historial" role="tab" aria-controls="v-pills-historial" aria-selected="true">
                                    <span class="icon text-white-50">
                                    <i class="fas fa-history"></i>
                                    </span>
                                    <span class="text">Historial de Fichajes</span>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-9 col-lg-7">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <div class="card shadow">
                            <div class="card-header">
                                <h6 class="m-0 font-weight-bold text-primary">INFORMACIÓN DEL TRABAJADOR</h6>
                            </div>
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-md-1">
                                            <b>Alta</b>
                                        </div>
                                        <div class="col-md-11">
                                            <span>01 de Enero del 2021</span>
                                        </div>
                                    </div>
                                    </li>
                                    <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-md-1">
                                            <b>Dirección</b>
                                        </div>
                                        <div class="col-md-11">
                                            C/Barcelona, 75, 08401 Granollers, Barcelona
                                        </div>
                                    </div>
                                    </li>
                                    <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-md-1">
                                            <b>Nacido el</b>
                                        </div>
                                        <div class="col-md-11">
                                            24 de Septiembre del 1986
                                        </div>
                                    </div>
                                    </li>
                                    <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-md-1">
                                            <b>Teléfono</b>
                                        </div>
                                        <div class="col-md-11">
                                            <a href="tel:938888888">+34 93 888 88 88</a>
                                        </div>
                                    </div>
                                    </li>
                                    <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-md-1">
                                            <b>Móvil</b>
                                        </div>
                                        <div class="col-md-11">
                                            <a href="tel:666666666">+34 666 66 66 66</a>
                                        </div>
                                    </div>
                                    </li>
                                    <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-md-1">
                                            <b>Cargo</b>
                                        </div>
                                        <div class="col-md-11">
                                            <span>Desarrollador Web</span>
                                        </div>
                                    </div>
                                    </li>
                                    <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-md-12">
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
                        <div class="tab-pane fade show" id="v-pills-edit" role="tabpanel" aria-labelledby="v-pills-edit-tab">
                        <div class="card shadow">
                            <div class="card-header">
                                <h6 class="m-0 font-weight-bold text-primary">EDITAR INFORMACIÓN</h6>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="row">
                                    <div class="col-md-4">
                                        <label for="nombre">Nombre</label>
                                        <input type="text" class="form-control" id="nombre" placeholder="Nombre" value="Santiago" />
                                    </div>
                                    <div class="col-md-4">
                                        <label for="apellido1">Primer Apellido</label>
                                        <input type="text" class="form-control" id="apellido1" placeholder="Primer Apellido" value="Camp" />
                                    </div>
                                    <div class="col-md-4">
                                        <label for="apellido2">Segundo Apellido</label>
                                        <input type="text" class="form-control" id="apellido2" placeholder="Segundo Apellido" value="Estrada" />
                                    </div>
                                    </div>
                                    <br />
                                    <div class="row">
                                    <div class="col-md-2">
                                        <label for="telf">Teléfono</label>
                                        <input type="text" class="form-control" id="telf" placeholder="Teléfono" value="+34 93 888 88 88" />
                                    </div>
                                    <div class="col-md-2">
                                        <label for="mbl">Móvil</label>
                                        <input type="text" class="form-control" id="mbl" placeholder="Móvil" value="+34 666 66 66 66" />
                                    </div>
                                    <div class="col-md-2">
                                        <label for="cumple">Nacido el</label>
                                        <input type="date" class="form-control" id="cumple" placeholder="Fecha de nacimiento" value="1986-09-24" />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="dir">Dirección</label>
                                        <input type="text" class="form-control" id="dir" placeholder="Dirección" value="C/Barcelona, 75, 08401 Granollers, Barcelona" />
                                    </div>
                                    </div>
                                    <br />
                                    <div class="row">
                                    <div class="col-md-2">
                                        <label for="alta">Fecha de Alta</label>
                                        <input type="date" class="form-control" id="alta" placeholder="alta" value="2021-01-01" />
                                    </div>
                                    <div class="col-md-10">
                                        <label for="cargo">Cargo</label>
                                        <input type="text" class="form-control" id="cargo" placeholder="cargo" value="Desarrollador Web" />
                                    </div>
                                    </div>
                                    <br />
                                    <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="extra">Información Complementaria</label>
                                            <textarea class="form-control" id="extra" rows="3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="row">
                                    <div class="col-12">
                                        <div class="form-group form-check">
                                            <input type="checkbox" class="form-check-input" id="isadmin" />
                                            <label class="form-check-label" for="isadmin">Trabajador Administrador</label>
                                        </div>
                                    </div>
                                    </div>
                                    <input type="hidden" name="photo" id="hidden-photo" />
                                    <button type="submit" class="btn btn-primary">Actualizar</button>
                                </form>
                            </div>
                        </div>
                        </div>
                        <div class="tab-pane fade show" id="v-pills-historial" role="tabpanel" aria-labelledby="v-pills-historial-tab">
                        <div class="card shadow">
                            <div class="card-header">
                                <h6 class="m-0 font-weight-bold text-primary">HISTORIAL DE FICHAJES</h6>
                            </div>
                            <div class="card-body">
                                <div>
                                    <form>
                                    <div class="row">
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <select class="form-control">
                                                <option>2021</option>
                                                <option>2020</option>
                                                <option>2019</option>
                                                <option>2018</option>
                                                <option>2017</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <select class="form-control">
                                                <option>Enero</option>
                                                <option>Febrero</option>
                                                <option>Marzo</option>
                                                <option>Abril</option>
                                                <option>Mayo</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="search" class="form-control" placeholder="Buscar" />
                                        </div>
                                        <div class="col-md-2" style="margin-top: 4px;">
                                            <button type="submit" class="btn btn-primary btn-sm">
                                            <i class="fas fa-filter"></i>
                                            </button>
                                            <a href="#" class="btn btn-warning btn-sm" data-toggle="tooltip" data-placement="top" title="Descargar CSV">
                                            <i class="fas fa-cloud-download-alt"></i>
                                            </a>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                <div class="table-responsive">
                                    <table class="table">
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
                                                <button type="button" class="btn btn-success btn-sm">
                                                <i class="fas fa-pencil-alt"></i>
                                                </button>
                                                <button type="button" class="btn btn-danger btn-sm">
                                                <i class="fa fa-trash"></i>
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
                                                <button type="button" class="btn btn-success btn-sm">
                                                <i class="fas fa-pencil-alt"></i>
                                                </button>
                                                <button type="button" class="btn btn-danger btn-sm">
                                                <i class="fa fa-trash"></i>
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
                                                <button type="button" class="btn btn-success btn-sm">
                                                <i class="fas fa-pencil-alt"></i>
                                                </button>
                                                <button type="button" class="btn btn-danger btn-sm">
                                                <i class="fa fa-trash"></i>
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
                                                <button type="button" class="btn btn-success btn-sm">
                                                <i class="fas fa-pencil-alt"></i>
                                                </button>
                                                <button type="button" class="btn btn-danger btn-sm">
                                                <i class="fa fa-trash"></i>
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

import React from 'react';

const AddTrabajador = () => {
    return (
        <div class="container-fluid">
            <h1 class="h3 mb-1 text-gray-800 title-section"><i class="fas fa-user"></i> Nuevo trabajador</h1>
            <div class="row">
                <div class="col-xl-3 col-lg-5">
                    <div class="card card-trabajador shadow mb-4">
                        <div class="card-body">
                        <div class="text-center">
                            <div class="img-pr-w">
                                <img class="img-profile img-trabajador rounded-circle" src="img/user.png" alt="Santiago Camp Estrada" />
                                <div class="container-file btn btn-primary rounded-circle btn-edit-photo" data-toggle="tooltip" data-placement="top" title="Cambiar Foto">
                                    <div class="button-wrap">
                                    <label class="button" for="upload">
                                    <i class="fas fa-camera-retro"></i>
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
                <div class="col-xl-9 col-lg-7">
                    <div class="card shadow">
                        <div class="card-header">
                        <h6 class="m-0 font-weight-bold text-primary">INFORMACIÓN</h6>
                        </div>
                        <div class="card-body">
                        <form>
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="nombre">Nombre</label>
                                    <input type="text" class="form-control" id="nombre" placeholder="Nombre" />
                                </div>
                                <div class="col-md-4">
                                    <label for="apellido1">Primer Apellido</label>
                                    <input type="text" class="form-control" id="apellido1" placeholder="Primer Apellido" />
                                </div>
                                <div class="col-md-4">
                                    <label for="apellido2">Segundo Apellido</label>
                                    <input type="text" class="form-control" id="apellido2" placeholder="Segundo Apellido" />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="email">Correo Electrónico</label>
                                    <input type="email" class="form-control" id="email" placeholder="email" />
                                </div>
                                <div class="col-md-4">
                                    <label for="pass">Contraseña</label>
                                    <input type="password" class="form-control" id="pass" placeholder="Contraseña" />
                                </div>
                                <div class="col-md-4">
                                    <label for="pass2">Repetir Contraseña</label>
                                    <input type="password" class="form-control" id="pass2" placeholder="Repetir Contraseña" />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-md-2">
                                    <label for="telf">Teléfono</label>
                                    <input type="text" class="form-control" id="telf" placeholder="Teléfono" />
                                </div>
                                <div class="col-md-2">
                                    <label for="mbl">Móvil</label>
                                    <input type="text" class="form-control" id="mbl" placeholder="Móvil" />
                                </div>
                                <div class="col-md-2">
                                    <label for="cumple">Nacido el</label>
                                    <input type="date" class="form-control" id="cumple" placeholder="Fecha de nacimiento" />
                                </div>
                                <div class="col-md-6">
                                    <label for="dir">Dirección</label>
                                    <input type="text" class="form-control" id="dir" placeholder="Dirección" />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-md-2">
                                    <label for="alta">Fecha de Alta</label>
                                    <input type="date" class="form-control" id="alta" placeholder="alta" value="2021-02-01" />
                                </div>
                                <div class="col-md-10">
                                    <label for="cargo">Cargo</label>
                                    <input type="text" class="form-control" id="cargo" placeholder="cargo" />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                    <label for="extra">Información Complementaria</label>
                                    <textarea class="form-control" id="extra" rows="3"></textarea>
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
                            <button type="submit" class="btn btn-primary">Guardar</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTrabajador;

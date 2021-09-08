import React from 'react'

const Fichajes = () => {
    return (
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
                                <select className="form-control">
                                <option value="">Todos los trabajadores</option>
                                <option value="11">Ariadna Cardenas</option>
                                <option value="10">Cristina Closa Roig</option>
                                <option value="1">Grafix</option>
                                <option value="5">Jennifer López Crespo</option>
                                <option value="2">Jordi Grivé Turigas</option>
                                <option value="3">Jose Ma Paniagua Sanchez</option>
                                <option value="9">Marc Girbau Nogueira</option>
                                <option value="4">Marc Gonzalez Girbau</option>
                                <option value="6">Marti Duran Fernandez</option>
                                <option value="12">sandra</option>
                                <option value="8">Santiago Camp Estrada</option>
                                </select>
                            </div>
                        </div>
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
                            <div className="form-group">
                                <select className="form-control">
                                <option>Todo el día</option>
                                <option>Mañana</option>
                                <option>Tarde</option>
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
                            <th scope="col">#</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Entrada Mañana</th>
                            <th scope="col">Salida Mañana</th>
                            <th scope="col">Entrada Tarde</th>
                            <th scope="col">Salida Tarde</th>
                            <th scope="col">Comentario</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <i className="fas fa-check-circle" style={{color: '#1cc88a'}}></i>
                                <i className="fas fa-times-circle"></i>
                            </td>
                            <td>
                                <img className="rounded-circle" src="img/santi.jpg" alt="Santiago Camp Estrada" style={{width: '30px', height: '30px'}} />
                            </td>
                            <td>Santiago Camp Estrada</td>
                            <td>01-07-2021</td>
                            <td>08:00h</td>
                            <td>14:00h</td>
                            <td>15:00h</td>
                            <td>17:30h</td>
                            <td>
                                lorem ipsum dolor sit amet consecteur...
                            </td>
                            <td>
                                <a href="#" className="btn btn-success btn-icon-split btn-sm btn-primary shadow-sm" data-toggle="modal" data-target="#modalEdit">
                                <span className="icon text-white-50">
                                <i className="fas fa-pencil-alt"></i>
                                </span>
                                <span className="text">Comentario</span>
                                </a>
                            </td>
                        </tr>
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
    )
}

export default Fichajes

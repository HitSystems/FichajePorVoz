import React from 'react';
import Topbar from '../Topbar/Topbar';
import Footer from '../Footer/Footer'

const TodosLosTrabajadores = () => {
    return (
        <div id='content-wrapper' className='d-flex flex-column'>
        <div id='content'>
            <Topbar />
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-1 text-gray-800 title-section"><i className="fas fa-users"></i> Trabajadores</h1>
                <a href="nuevo-trabajador.html" className="btn btn-primary btn-icon-split btn-sm btn-primary shadow-sm">
                <span className="icon text-white-50">
                <i className="fas fa-plus"></i>
                </span>
                <span className="text">Añadir Trabajador</span>
                </a>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 classname="m-0 font-weight-bold text-primary float-left" style={{paddingTop: '7px'}}>Listado de Trabajadores</h6>
                    <div className="float-right">
                        <div className="row">
                        <div className="col-md-8">
                            <form className="form-search-c">
                            <input type="search" classname="form-control" placeholder="Buscar" style={{maxWidth: '280px'}} />
                                <button className="btn btn-primary btn-sm" type="submit">
                                <i className="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <button type="button" className="btn btn-info btn-sm btn-primary shadow-sm btn-filter">
                            <i className="fas fa-filter"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="table-responsive">
                        <table className="table">
                            <thead className="filter-users" style={{display: 'none'}}>
                                <form>
                                    <tr>
                                    <th scope="col">-</th>
                                    <th scope="col" style={{'max-width': '70px'}}>
                                        <div className="form-group">
                                            <select classname="form-control" style={{maxWidth: '120px'}}>
                                                <option>Estado</option>
                                                <option>Activo</option>
                                                <option>Inactivo</option>
                                            </select>
                                        </div>
                                    </th>
                                    <th scope="col">-</th>
                                    <th scope="col">
                                        <input type="text" classname="form-control" id="nombre" placeholder="Nombre" style={{maxWidth: '280px'}} />
                                    </th>
                                    <th scope="col">
                                        <input type="date" classname="form-control" id="nombre" placeholder="Nombre" defaultValue="2021-02-01" style={{maxWidth: '170px'}} />
                                    </th>
                                    <th scope="col">
                                        <input type="number" classname="form-control" id="nombre" placeholder="Nombre" defaultValue={100} style={{maxWidth: '100px'}} />
                                    </th>
                                    <th scope="col">
                                        <button type="submit" className="btn btn-primary btn-sm">
                                        <i className="fas fa-search"></i>
                                        </button>
                                        <button type="submit" className="btn btn-danger btn-sm close-filter">
                                        <i className="fas fa-times"></i>
                                        </button>
                                    </th>
                                    </tr>
                                </form>
                            </thead>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Imagen</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Alta</th>
                                    <th scope="col">Horas Totales</th>
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
                                    <td>
                                    <a href="trabajador.html">Santiago Camp Estrada</a>
                                    </td>
                                    <td>01 de Enero de 2021</td>
                                    <td>100 horas</td>
                                    <td>
                                    <a href="trabajador.html" className="btn btn-success btn-sm">
                                    <i className="fa fa-eye"></i>
                                    </a>
                                    <button className="btn btn-danger btn-sm">
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
            <div className="row">
                <div className="col-12">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Siguiente</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        </div>
        <Footer />
        </div>
    )
}

export default TodosLosTrabajadores;

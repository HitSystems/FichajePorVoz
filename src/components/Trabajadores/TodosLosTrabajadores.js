import React from 'react';

const TodosLosTrabajadores = () => {
    return (
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-1 text-gray-800 title-section"><i class="fas fa-users"></i> Trabajadores</h1>
                <a href="nuevo-trabajador.html" class="btn btn-primary btn-icon-split btn-sm btn-primary shadow-sm">
                <span class="icon text-white-50">
                <i class="fas fa-plus"></i>
                </span>
                <span class="text">Añadir Trabajador</span>
                </a>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary float-left" style="padding-top:7px;">Listado de Trabajadores</h6>
                    <div class="float-right">
                        <div class="row">
                        <div class="col-md-8">
                            <form class="form-search-c">
                                <input type="search" class="form-control" placeholder="Buscar" style="max-width: 280px;" />
                                <button class="btn btn-primary btn-sm" type="submit">
                                <i class="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                        <div class="col-md-4">
                            <button type="button" class="btn btn-info btn-sm btn-primary shadow-sm btn-filter">
                            <i class="fas fa-filter"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="table-responsive">
                        <table class="table">
                            <thead class="filter-users" style="display:none">
                                <form>
                                    <tr>
                                    <th scope="col">-</th>
                                    <th scope="col" style="max-width: 70px">
                                        <div class="form-group">
                                            <select class="form-control" style="max-width: 120px">
                                                <option>Estado</option>
                                                <option>Activo</option>
                                                <option>Inactivo</option>
                                            </select>
                                        </div>
                                    </th>
                                    <th scope="col">-</th>
                                    <th scope="col">
                                        <input type="text" class="form-control" id="nombre" placeholder="Nombre" style="max-width: 280px;" />
                                    </th>
                                    <th scope="col">
                                        <input type="date" class="form-control" id="nombre" placeholder="Nombre" value="2021-02-01" style="max-width: 170px;" />
                                    </th>
                                    <th scope="col">
                                        <input type="number" class="form-control" id="nombre" placeholder="Nombre" value="100" style="max-width: 100px;" />
                                    </th>
                                    <th scope="col">
                                        <button type="submit" class="btn btn-primary btn-sm">
                                        <i class="fas fa-search"></i>
                                        </button>
                                        <button type="submit" class="btn btn-danger btn-sm close-filter">
                                        <i class="fas fa-times"></i>
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
                                    <i class="fas fa-check-circle" style="color: #1cc88a"></i>
                                    <i class="fas fa-times-circle"></i>
                                    </td>
                                    <td>
                                    <img class="rounded-circle" src="img/santi.jpg" alt="Santiago Camp Estrada" style="width:30px;height:30px" />
                                    </td>
                                    <td>
                                    <a href="trabajador.html">Santiago Camp Estrada</a>
                                    </td>
                                    <td>01 de Enero de 2021</td>
                                    <td>100 horas</td>
                                    <td>
                                    <a href="trabajador.html" class="btn btn-success btn-sm">
                                    <i class="fa fa-eye"></i>
                                    </a>
                                    <button class="btn btn-danger btn-sm">
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
            <div class="row">
                <div class="col-12">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default TodosLosTrabajadores;

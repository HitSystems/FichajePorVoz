import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Button as ButtonFAB, lightColors, darkColors } from 'react-floating-action-button'
import { cookies } from '../../helpers/cookies';

const CalendarModal = ({updateEvents}) => {
    const [show, setShow] = useState(false);
    const [trabajadores, setTrabajadores] = useState([]);
    const [data, setData] = useState({
        principioEvento: '',
        finEvento: '',
        nombreEvento: '',
        tipoEvento: 1,
        empresa: cookies.get('empresa'),
        idTrabajador: ''        
    });
    useEffect(() => {
      axios.get(`/users?empresa=${cookies.get('empresa')}`).then((data) => {
          setTrabajadores(data.data);
      });
    }, [])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOnClick = () => {
      axios.post('/nuevoEventoCalendario', data).then((data) => {
        updateEvents();
      });
      setShow(false);
    }
    const handleOnChange = (e) => {
      let value = e.target.value;
      if(e.target.name === 'principioEvento' || e.target.name === 'finEvento') value = new Date(value).toISOString().slice(0, 19).replace('T', ' ')
      setData({
          ...data,
          [e.target.name]: value,
      });
    }
    
    return (
      <>
        <ButtonFAB
          tooltip='Crear evento en el calendario'
          icon='fa fa-plus'
          rotate={true}
          onClick={handleShow}
          styles={{backgroundColor: darkColors.blue, color: lightColors.white}}
        />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Añadir evento</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div id='align'>
                <label htmlFor='start'>Día que empieza&nbsp;&nbsp;</label>
                <input type='datetime-local' id='start' name='principioEvento' onChange={handleOnChange} /> <br /> <br />
                <label htmlFor='end'>Día que acaba&nbsp;&nbsp;</label>
                <input type='datetime-local' id='end' name='finEvento' onChange={handleOnChange} /> <br /> <br />
                <label htmlFor='name'>Nombre del evento&nbsp;&nbsp;</label>
                <input type='text' id='name' name='nombreEvento' onChange={handleOnChange} /> <br /> <br />
                <label htmlFor='eventType'>Tipo de evento&nbsp;&nbsp;</label>
                <select id='eventType' name='tipoEvento' onChange={handleOnChange} >
                    <option value='1'>Vacaciones</option>
                    <option value='2'>Día libre</option>
                    <option value='3'>Baja</option>
                    <option value='4'>Ausencia</option>
                </select> <br /> <br />
                <label htmlFor='idTrabajador'>Trabajador:&nbsp;&nbsp;</label>
                <select id='idTrabajador' name='idTrabajador' onChange={handleOnChange}>
                  <option></option>
                  {
                      trabajadores.map(({id, nombre, empresa}, index) => <option value={id} id={id} key={id} className={cookies.get('empresa')}>{nombre}</option> )
                  }
                </select>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant='primary' onClick={handleOnClick}>
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default CalendarModal;

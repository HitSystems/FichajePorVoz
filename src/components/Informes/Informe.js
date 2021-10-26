import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { Table, TableHeader, TableBody, TableCell, DataTableCell} from '@david.kucsai/react-pdf-table';
import { cookies } from '../../helpers/cookies';

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});
// Create styles
const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
      flexDirection: 'column'
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 16,
      margin: 12,
    },
    text: {
      margin: 12,
      fontSize: 14,
      flex: 1,
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 10,
      textAlign: 'center',
      color: 'grey',
    },
    error: {
        fontSize: 10,
        margin: 12,
        marginTop: 0,
        color: 'grey',
        fontStyle: 'italic',
    },  
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
    table: {
        fontSize: 10,
        width: 550,
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
      },
      row: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 35
      },
      cell: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "auto",
      },
      headerText: {
        fontSize: 11,
        fontWeight: 1200,
        color: "#1a245c",
        margin: 8
      },
      tableText: {
        margin: 10,
        fontSize: 10,
        color: 'black',
      },
      tableHeader: {
        backgroundColor: '#eee'
      },
  });

// Create Document Component
const Informe = ({data}) => {
  const [fichajes, setFichajes] = useState([]);
  useEffect(() => {
    let datos = data.fichajes.map(({tmst, finEvento, accio, comentari}, index) => {
      let accioNombre;
      const fecha = new Date(tmst);
      let hora = fecha.getHours().toString();
      let minutos = fecha.getMinutes().toString();
      if(finEvento === null) {
        accioNombre = accio === 1 ? 'Entrada' : accio === 2 ? 'Salida' : accio === 3 ? 'Inicio descanso' : accio === 4 ? 'Entrada justificada' : 'Salida justificada';
        if(hora.length < 2) hora = `0${hora}`;
        if(minutos.length < 2) minutos = `0${minutos}`;
        hora += ':'
      } else {
        accioNombre = accio === 1 ? 'Vacaciones' : accio === 2 ? 'Día libre' : accio === 3 ? 'Baja' : 'Ausencia';
        hora = '';
        minutos = '';
      }
      let dia = fecha.getDate().toString(), mes = (fecha.getMonth()+1).toString();
      if(dia.length < 2) dia = `0${dia}`;
      if(mes.length < 2) mes = `0${mes}`;
      const formatoFecha = `${dia}/${mes}/${fecha.getFullYear()}`;
      const fechaTotal = `${formatoFecha} ${hora}${minutos}`;
      const comentario = comentari.substring(comentari.lastIndexOf(']')+1);
      return {
        accioNombre,
        fechaTotal,
        comentario
      }
    })
    setFichajes(datos);
  }, [])
  return (
    <Document>
      <Page>
        <Text style={styles.header} fixed>
          ~ {cookies.get('empresa').slice(4)} ~
        </Text>
        <Text style={styles.title}>{data.infoTrabajador[0].NOM}</Text>
        <Text style={styles.author}>Informe {data.tipoInforme}</Text>
        <Table data={fichajes}>
          <TableHeader>
            <TableCell>
              Fecha
            </TableCell>
            <TableCell>
              Acción
            </TableCell>
            <TableCell>
              Comentario
            </TableCell>
            </TableHeader>
            <TableBody>
              <DataTableCell getContent={(r) => r.fechaTotal} />
              <DataTableCell getContent={(r) => r.accioNombre} />
              <DataTableCell getContent={(r) => r.comentario} />
            </TableBody>
        </Table>
        <Text style={styles.subtitle}>
          Horas reales: {data.horas}
        </Text>
        <Text style={styles.subtitle}>
          Horas teóricas: {data.horasTotalesMes}
        </Text>
        {
          data.error ?
          <Text style={styles.error}>Es posible que haya un error en el total de las horas por falta de algún fichaje</Text> :
          <Text></Text>
        }
    </Page>
  </Document>
  )
};

Informe.propTypes = {
    data: PropTypes.any
};
  
export default Informe;
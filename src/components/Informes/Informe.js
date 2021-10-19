import React from 'react';
import PropTypes from "prop-types";
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
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
      fontFamily: 'Oswald'
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
      fontFamily: 'Oswald'
    },
    text: {
      margin: 12,
      fontSize: 14,
      fontFamily: 'Oswald',
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
    return (
        <Document>
        <Page style={styles.body}>
        <Text style={styles.header} fixed>
            ~ {cookies.get('empresa').slice(4)} ~
        </Text>
        <Text style={styles.title}>{data.infoTrabajador[0].NOM}</Text>
        <Text style={styles.author}>Informe mensual</Text>
        <Text style={styles.subtitle}>
            Horas totales: {data.horas}
        </Text>
        {
            data.error ?
            <Text style={styles.error}>Es posible que haya un error en el total de las horas por falta de algún fichaje</Text> :
            <Text></Text>
        }
        <View style={styles.table}>
          <View style={[styles.row, styles.tableHeader]}>
              <Text style={[styles.headerText, styles.cell]}>Fecha</Text>
              <Text style={[styles.headerText, styles.cell]}>Acción</Text>
              <Text style={[styles.headerText, styles.cell]}>Comentario</Text>
          </View>
            {
                data.fichajes.map(({tmst, finEvento, accio, comentari}, index) => {
                  let accioNombre;
                  if(finEvento === null) {
                    accioNombre = accio === 1 ? 'Entrada' : accio === 2 ? 'Salida' : accio === 3 ? 'Inicio descanso' : accio === 4 ? 'Entrada justificada' : 'Salida justificada';
                  } else {
                    accioNombre = accio === 1 ? 'Vacaciones' : accio === 2 ? 'Día libre' : accio === 3 ? 'Baja' : 'Ausencia';
                  }
                  const fecha = new Date(tmst);
                  let dia = fecha.getDate().toString(), mes = (fecha.getMonth()+1).toString();
                  if(dia.length < 2) dia = `0${dia}`;
                  if(mes.length < 2) mes = `0${mes}`;
                  const formatoFecha = `${dia}/${mes}/${fecha.getFullYear()}`;
                  let hora = fecha.getHours().toString();
                  let minutos = fecha.getMinutes().toString();
                  if(hora.length < 2) hora = `0${hora}`;
                  if(minutos.length < 2) minutos = `0${minutos}`;
                  return (
                    <View style={[styles.row]} key={index}>
                      <Text style={[styles.cell]}>{formatoFecha} {hora}:{minutos}</Text>
                      <Text style={[styles.cell]}>{accioNombre}</Text>
                      <Text style={[styles.cell]}>{comentari.substring(comentari.lastIndexOf(']')+1)}</Text>
                    </View>
                  );
                })
            }
        </View>
        <Text style={styles.text}>

        </Text>
        <Text style={styles.text}>
        </Text>
        <Text style={styles.text}>

        </Text>
        <Text style={styles.subtitle} break>

        </Text>
    
        <Text style={styles.text}>
            
        </Text>
        <Text style={styles.text}>
        </Text>
        <Text style={styles.text}>
            
        </Text>
        <Text style={styles.text}>
        </Text>
        <Text style={styles.text}>
    
        </Text>
        </Page>
    </Document>
    )
};

Informe.propTypes = {
    data: PropTypes.any
};
  
export default Informe;
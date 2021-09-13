let dia, mes, year, d = new Date();
dia = (d.getDate()).toString();
mes = (d.getMonth()+1).toString();
year = d.getFullYear();
if(dia.length < 2) dia = `0${dia}`;
if(mes.length < 2) mes = `0${mes}`;
export {dia, mes, year};
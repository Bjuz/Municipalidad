const { GetFuncionario } = require("./util");
const { RetornarVacaciones } = require("./util");


$(document).ready(async function () {

    var ref = localStorage.getItem("userLoggueado");

    var tableData = await RetornarVacaciones(ref);

    // Since this array comes from firebase, it is an object with objects inside
    // We need to convert it to an array of arrays

    var tableData = Object.keys(tableData).map(function (key) {
        return [tableData[key].firstDate, tableData[key].LastDate, tableData[key].Estado, tableData[key].Razon];
    });



    var tableHtml = '<table id="example">' +
        '<thead>' +
        '<tr>' +
        '<th>Fecha de inicio</th>' +
        '<th>Fecha de finalización</th>' +
        '<th>Estado</th>' +
        '<th>Motivo</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>';

    for (var i = 0; i < tableData.length; i++) {
        tableHtml += '<tr>';
        for (var j = 0; j < tableData[i].length; j++) {
            //Takes into consideration that some values are 'undefined'
            if (tableData[i][j] == undefined) {
                tableHtml += '<td>' + tableData[i][j] + '</td>';
            } else {
                tableHtml += '<td>' + tableData[i][j] + '</td>';
            }
        }
        tableHtml += '</tr>';
    }

    tableHtml += '</tbody>' +
        '</table>';

    document.getElementById('tableContainer').innerHTML = tableHtml;

    $('#example').DataTable();
});
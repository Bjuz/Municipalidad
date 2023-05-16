const { RetornarVacaciones } = require("./util");
const { roleDisplay } = require("./NavBar/Display");
const { GetFuncionario } = require("./util");
const { LoadUsers } = require("./util");


window.onload = async function () {
    // Get the <table> 'Listas'
    var table = document.getElementById('Listas');

    var ref = localStorage.getItem("userLoggueado");
    var funcionario = await GetFuncionario(ref);
    roleDisplay(funcionario.role);

    if (funcionario.role == "Encargado de recursos humanos") {
        // Get the 'VacacionesActivas' array from the database
        var users = await LoadUsers();

        // Add 4 columns to the table with the headers 'Nombre', 'Fecha inicio', 'Fecha final' and 'Motivo'
        // Create headers for the table
        table.innerHTML = `<tr>
    <th>Nombre</th>
    <th>Fecha de inicio</th>
    <th>Fecha de finalizacion</th>
    <th>Motivo</th>
    </tr>`;
        // For each user in the array 'VacacionesActivas'
        users.forEach(function (user) {
            // For each vacation in the user's vacations
            // Verify if the status is 'Esperando la aprobación del jefe directo'
            if (user.hasOwnProperty("VacacionesActivas")) {
                user.VacacionesActivas.forEach(function (vacation) {
                    if (vacation.Estado == "Esperando la aprobación del jefe directo" || vacation.Estado == "Esperando la aprobación del alcalde" || vacation.Estado == "Esperando la aprobación de recursos humanos") {
                        // Add a row to the table with the vacation's information
                        table.innerHTML += `<tr>
            <td>${user.name}</td>
            <td>${vacation.firstDate}</td>
            <td>${vacation.LastDate}</td>
            <td>${vacation.Razon}</td>
            </tr>`;

                    }

                });
            }
        });

    } else if (funcionario.role == "Jefe directo") {

    } else {
        alert("No tiene permisos para realizar esta accion");
    }


}


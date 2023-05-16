export function roleDisplay(role) {
    if (role == "Alcalde" || role == "Jefe directo" || role == "Funcionario") {
        if (role == "Funcionario") {
            // Do nothing
        } else {
            if(role == "Alcalde"){
            // Hide the <a> element with id="reporteLink"
            document.getElementById("reporteLink").style.display = "none";
            document.getElementById("reporteLink").style.visibility = "hidden";
            }
            document.getElementById("adminDiv").style.display = "block";
            // Hide the <a> element with id="registerLink"
            document.getElementById("registerLink").style.display = "none";
            document.getElementById("registerLink").style.visibility = "hidden";

            // Hide the <a> element with id="editLink"
            document.getElementById("editLink").style.display = "none";
            document.getElementById("editLink").style.visibility = "hidden";

            // Hide the <a> element with id="deleteLink"
            document.getElementById("deleteLink").style.display = "none";
            document.getElementById("deleteLink").style.visibility = "hidden";

            // Hide the <a> element with id="feriadoLink"
            document.getElementById("feriadoLink").style.display = "none";
            document.getElementById("feriadoLink").style.visibility = "hidden";
        }
    } else if (role == "Encargado de recursos humanos") {
        document.getElementById("adminDiv").style.display = "block";
    } else {
        return;
    }
}

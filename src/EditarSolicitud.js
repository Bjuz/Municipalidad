

document.getElementById("search").onclick = async function() {
    let response = await loadInfo();
    document.getElementById("loader").style.display = "block";
    if(response != "empty"){
        document.getElementById("id").value = response.id;
        document.getElementById("startDate").value = response.startDate;
        document.getElementById("finDate").value = response.finDate;
        document.getElementById("motivo").value = response.motivo;
    }else{
        alert("solicitud inexistente")
    }
    document.getElementById("loader").style.display = "none";
};

async function loadInfo(){
    var id = document.getElementById("idLook").value;
    if(!isNaN(id)){
        var response = await getSolicitudFuncionario(id);
        return response;
    }else{
        alert("El id debe ser un valor numérico")
    } 
}

document.getElementById("updateBtn").onclick = function () {
    alert("Actualizando información de Solicitud");
    UpdateSolicitud();
}

document.getElementById("deleteBtn").onclick = function () {
    alert("Eliminando Solicitud del todo"); 
}

async function UpdateSolicitud(){
    var id = document.getElementById("id").value;
    var firstDate = document.getElementById("startDate").value;
    var finishDate = document.getElementById("finDate").value;
    var motivo = document.getElementById("motivo").value;

    if (firstDate == "" || finishDate == "") {
        alert("Debe ingresar ambas fechas");
        return;
    } else if (firstDate > finishDate || firstDate == finishDate) {
        alert("La fecha de inicio no puede ser mayor o igual a la fecha de fin");
        return;
    }
    
    var firstDateFormatted = new Date(firstDate);
    var finishDateFormatted = new Date(finishDate);

    var confirmation = confirm("¿Está seguro que desea modificar su solicitud, siendo ahora desde " + firstDateFormatted.getDate() + " de " + firstDateFormatted.toLocaleString('es-ES', { month: 'long' }) + " hasta el " + finishDateFormatted.getDate() + " de " + finishDateFormatted.toLocaleString('es-ES', { month: 'long' }) + "?");
    if (!confirmation) {
        return;
    }

    const response = await getSolicitudFuncionario(id,firstDateFormatted,finishDateFormatted,motivo);
    localStorage.setItem("firstDate", firstDate);
    localStorage.setItem("finishDate", finishDate);
    localStorage.setItem("motivo", motivo);

    console.log("firstDate: " + firstDate);
    console.log("finishDate: " + finishDate);
    console.log("Motivo: " + motivo);
    alert(response);
    return response;
}
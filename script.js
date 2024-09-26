var id = 0;

function submitData (e){
    event.preventDefault();
    var formValues = getFormData();
    console.log(formValues);
    insertToTable(formValues);
}

function getFormData(){
    var data = {};
    data["chemicalName"] = document.getElementById("chemicalName").value;
    data["vendor"] = document.getElementById("vendor").value;
    data["density"] = document.getElementById("density").value;
    data["viscosity"] = document.getElementById("viscosity").value;
    data["packaging"] = document.getElementById("packaging").value;
    data["packSize"] = document.getElementById("packSize").value;
    data["unit"] = document.getElementById("unit").value;
    data["quantity"] = document.getElementById("quantity").value;

    return data;
}

function insertToTable(data) {
    id = id+1;
    var table = document
      .getElementById("ChemLabList")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.chemicalName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.vendor;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.density;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.viscosity;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.packaging;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.packSize;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.unit;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.quantity;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = `<button onClick="editRecord(this)">Edit</button> <button onClick = "deleteRecord(this)">Delete</button>`;
  }
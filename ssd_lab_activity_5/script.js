function addData(){
    var rollno = document.getElementById("rollnoData").value;
    var name = document.getElementById("nameData").value;

    var table = document.getElementById("dataTable");

    var row = table.insertRow(table.rows.length);

    var rollnoData = row.insertCell(0);
    var nameData = row.insertCell(1);

    rollnoData.innerHTML = rollno;
    nameData.innerHTML = name;
}

function deleteData(){
    var table = document.getElementById("dataTable");
    table.deleteRow(table.rows.length-1);
}
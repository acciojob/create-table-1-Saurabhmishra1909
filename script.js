let i = 1;

function insert_Row() {
    const table = document.getElementById("sampleTable");
    const newRow = table.insertRow(0);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Remove the space between "Cell" and the number
    cell1.innerHTML = `New Cell${i}`;
    cell2.innerHTML = `New Cell${i}`;

    i++;
}
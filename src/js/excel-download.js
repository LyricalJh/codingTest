const TableToExport = document.getElementById('TableToExport');
const ExcelDown = document.getElementById('sheetjsexport');
const inputName = document.getElementById('getName');
const submitName = document.getElementById('submitName');
const TableBody = document.getElementById('TableBody');


ExcelDown.addEventListener('click', ()=> {
    const file = XLSX.utils.table_to_book(TableToExport);
    XLSX.writeFile(file, "SheetJS_Test.xlsx");
})

submitName.addEventListener('click', (event)=>{
   addRow();
})

const addRow = () => {
    const newRow = TableBody.insertRow(-1);
    const newCell = newRow.insertCell(0);
    
    const getNewName = document.createTextNode(inputName.value);
    newCell.appendChild(getNewName);
}


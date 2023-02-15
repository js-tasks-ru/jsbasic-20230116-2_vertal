function makeDiagonalRed(table) {
  for(let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    // Так не проходит тест
    // row.cells[i].style.backgroundColor = 'rgb(255,0,)';
    row.cells[i].style.backgroundColor = 'red';
  }
}

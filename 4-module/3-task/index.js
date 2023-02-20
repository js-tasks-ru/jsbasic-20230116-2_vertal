function highlight(table) {

  let body = table.tBodies[0];

  for(let i = 0; i < body.rows.length; i++) {

    let row = body.rows[i];

    // Проставить класс available/unavailable в зависимости от значения атрибута data-available у ячейки Status. Если её значение true – класс available, если её значение false – класс unavailable.
    row.classList.add((row.cells[3].dataset.available == 'true') ? 'available' : 'unavailable');

    // Проставить атрибут hidden, если атрибута data-available нет вообще.
    if (typeof row.cells[3].dataset.available == "undefined")
      row.hidden = true;
    
    // Проставить класс male/female в зависимости от содержимого ячейки Gender. Если её значение m – класс male, Если её значение f – класс female.
    if (row.cells[2].innerHTML == 'm') {
      row.classList.add('male');
    } else if (row.cells[2].innerHTML == 'f') {
      row.classList.add('female');
    }

    // Добавить inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18.
    if (Number(row.cells[1].innerHTML) < 18)
      row.style.textDecoration = 'line-through';

  }
}

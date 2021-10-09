function getByid(x) {
    let text = document.getElementById(x).value;
    return text;
}

function data(event) {
    event.preventDefault();
    var Nombre = getByid('nombre');
    var Direccion = getByid('direccion');
    var Telefono = getByid('telefono');
    var pizzas = document.getElementsByName('flexRadioDefault'),
        pizza;
    pizzas.forEach(e => e.checked ? e.value = 0 ? pizza = 'esta bien ' : pizza = 'Excelente' : 0);
    desplegar(Nombre, Direccion, Telefono, pizza);
    console.log();
}

function desplegar(Nombre, Direccion, Telefono, pizza) {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card" style="width: 50%; transform: translateX(50%);">
    <div class="card-body ">
      <h5 class="card-title text-center">Answears</h5>
      <p class="card-text"> Nombre: ` + Nombre + `</p>
      <p class="card-text"> Direccion: ` + Direccion + `</p>
      <p class="card-text"> Telefono: ` + Telefono + `</p>
      <p class="card-text">` + pizza + `</p>
    </div>
    </div>
    `;
    document.getElementById('Changes').appendChild(div);
}
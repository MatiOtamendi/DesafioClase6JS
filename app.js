alert("BIENVENIDO A NUESTRA SUBASTA, A CONTINUACION VERAS UNA LISTA DE MARCAS DE VEHICULOS QUE TENEMOS DISPONIBLES.");

const stock = ['FORD', 'CHEVROLET', 'RENAULT', 'FIAT', 'DODGE'];
for (let index = 0; index < stock.length; index++) {
    alert("POSICION " + index + " VEHICULO " + stock[index]);
}

alert("AHORA PODES BUSCAR HASTA 4 VECES Y SOLO POR MARCA, QUE VEHICULOS TENEMOS DISPONIBLES")

class vehiculo {
    constructor(marca, version, año, color, funciona) {
        this.marca = marca;
        this.version =  version;
        this.año = año;
        this.color = color;
        this.funciona = funciona;
    }
}
const vehiculos = [];
vehiculos.push(new vehiculo("FORD", "FALCON", 77, "NARANJA", true));
vehiculos.push(new vehiculo("CHEVROLET", "CHEVY", 79, "AMARILLA",  false));
vehiculos.push(new vehiculo("RENAULT", "SANDERO", 2009, "GRIS", true));
vehiculos.push(new vehiculo("FIAT", "PUNTO", 2008, "AZUL", true));
vehiculos.push(new vehiculo("DODGE", "RT", 78, "NEGRA", false));

console.log(vehiculos);

function buscarVehiculo(stock, vehiculo){
    return stock.find(objeto => objeto.marca === vehiculo.toUpperCase());
}
for (let index = 0; index < 4; index++) {
    let busqueda = buscarVehiculo(vehiculos, prompt('INGRESAR MARCA DEL AUTO'));
    if(busqueda != undefined){
        alert('AUTO '+busqueda.marca+' VERSION '+busqueda.version+' AÑO '+busqueda.año);
    }else{
        alert('NO EXISTE ESE AUTO EN LA LISTA');
    }
}


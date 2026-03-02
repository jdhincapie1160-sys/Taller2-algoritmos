const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const pregunta = (texto) => new Promise((res) => rl.question(texto, res));

async function ejecutar() {
    let opcion, ingreso = 0, totalV = 0, horasT = 0;
    while (opcion !== 2) {
        opcion = parseInt(await pregunta("\n1. Registrar | 2. Cerrar: "));
        if (opcion === 1) {
            let tipo = parseInt(await pregunta("Tipo (1:Moto, 2:Carro, 3:Camioneta): "));
            let h = parseFloat(await pregunta("Horas: "));
            let tarifa = tipo === 1 ? 2000 : (tipo === 2 ? 4000 : 6000);
            let costo = (tarifa * h) * (h > 8 ? 0.8 : 1);
            
            ingreso += costo; horasT += h; totalV++;
            console.log(`Total Vehículo: $${costo} (${h > 8 ? 'Tarifa Plana 20% desc' : 'Por horas'})`);
        }
    }
    console.log(`\n=== CIERRE ===\nIngreso: $${ingreso} | Promedio Horas: ${totalV > 0 ? horasT/totalV : 0}`);
    rl.close();
}
ejecutar();
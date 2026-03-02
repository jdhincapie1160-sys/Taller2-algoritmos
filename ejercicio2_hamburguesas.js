const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const pregunta = (texto) => new Promise((res) => rl.question(texto, res));

async function ejecutar() {
    let opcion, totalCuenta = 0, totalCombos = 0;
    let c1 = 0, c2 = 0, c3 = 0;

    do {
        console.log("\n1. Clásica ($15k) | 2. Doble ($22k) | 3. Mega ($35k) | 4. Finalizar");
        opcion = parseInt(await pregunta("Seleccione combo: "));

        if (opcion >= 1 && opcion <= 3) {
            let cant = parseInt(await pregunta("¿Cuántos?: "));
            let precio = opcion === 1 ? 15000 : (opcion === 2 ? 22000 : 35000);
            
            if (opcion === 1) c1 += cant; else if (opcion === 2) c2 += cant; else c3 += cant;
            
            totalCuenta += (precio * cant);
            totalCombos += cant;
            console.log(`Agregado. Total actual: $${totalCuenta}`);
        }
    } while (opcion !== 4);

    console.log(`\n=== CUENTA FINAL ===\nCombos: ${totalCombos} (C1: ${c1}, C2: ${c2}, C3: ${c3})`);
    console.log(`TOTAL A PAGAR: $${totalCuenta}`);
    rl.close();
}
ejecutar();
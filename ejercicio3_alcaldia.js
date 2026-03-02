const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const pregunta = (texto) => new Promise((res) => rl.question(texto, res));

async function ejecutar() {
    let cantidad = parseInt(await pregunta("¿Cuántas personas?: "));
    let presupuesto = 0, b60 = 0, b80 = 0, noAplica = 0;

    for (let i = 1; i <= cantidad; i++) {
        let nombre = await pregunta(`Nombre ${i}: `);
        let edad = parseInt(await pregunta("Edad: "));
        let subsidio = 0;

        if (edad >= 60 && edad <= 80) {
            subsidio = 1300000 * 0.12;
            b60++;
        } else if (edad > 80) {
            subsidio = 1300000 * 0.15;
            b80++;
        } else {
            noAplica++;
            console.log("No aplica."); continue;
        }

        presupuesto += subsidio;
        console.log(`${nombre}: ${edad > 80 ? "Senior" : "Adulto Mayor"} | Subsidio: $${subsidio}`);
    }

    console.log(`\n=== INFORME ===\nPresupuesto Total: $${presupuesto} | No aplican: ${noAplica}`);
    rl.close();
}
ejecutar();
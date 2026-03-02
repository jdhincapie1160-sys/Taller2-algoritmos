const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const pregunta = (texto) => new Promise((res) => rl.question(texto, res));

async function ejecutar() {
    let nUsuarios = parseInt(await pregunta("¿Cuántos usuarios?: "));
    let tMultas = 0, tLibros = 0;

    for (let i = 1; i <= nUsuarios; i++) {
        let nombre = await pregunta(`Usuario ${i}: `);
        let cant = 0;
        while (cant < 1 || cant > 3) cant = parseInt(await pregunta("Libros (1-3): "));

        let mUsuario = 0;
        for (let j = 1; j <= cant; j++) {
            let dias = parseInt(await pregunta(`Días libro ${j}: `));
            let retraso = dias > 7 ? dias - 7 : 0;
            let mLibro = retraso > 0 ? (retraso * 1500 + (retraso > 15 ? 10000 : 0)) : 0;
            mUsuario += mLibro; tLibros++;
        }
        tMultas += mUsuario;
        console.log(`${nombre}: Total Multa $${mUsuario}`);
    }
    console.log(`\n=== BIBLIOTECH ===\nTotal Recaudado: $${tMultas} | Libros: ${tLibros}`);
    rl.close();
}
ejecutar();
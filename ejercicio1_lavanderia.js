const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pregunta(texto) {
  return new Promise(resolve => rl.question(texto, resolve));
}

async function ejecutarLavanderia() {
  // Variables sugeridas [cite: 106]
  let cantidadClientes = parseInt(await pregunta("¿Cuántos clientes va a registrar en el día? "));
  let acumuladorIngresos = 0;
  let contadorDescuentos = 0;

  // Ciclo for para iterar por cada cliente [cite: 99]
  for (let i = 1; i <= cantidadClientes; i++) {
    console.log(`\n--- Registro Cliente ${i} ---`);
    let nombreCliente = await pregunta("Nombre del cliente: ");
    let horasAlquiler = parseFloat(await pregunta("Horas de alquiler: "));
    
    // Cálculo de costo y descuento [cite: 101, 102, 106]
    let costoTotal = horasAlquiler * 5000;
    let descuento = 0;

    if (horasAlquiler > 12) {
      descuento = costoTotal * 0.30;
      contadorDescuentos++;
    }

    let totalPagar = costoTotal - descuento;
    acumuladorIngresos += totalPagar; // Acumulador [cite: 104]

    // Operador ternario para el mensaje [cite: 102]
    let mensajeDescuento = horasAlquiler > 12 ? "CON DESCUENTO" : "SIN DESCUENTO";

    // Salida detallada [cite: 103]
    console.log(`CLIENTE ${i}: ${nombreCliente} --- Horas: ${horasAlquiler}`);
    console.log(`Subtotal: $${costoTotal}`);
    if (descuento > 0) console.log(`Descuento (30%): $${descuento}`);
    console.log(`${mensajeDescuento} | Total a pagar: $${totalPagar}`);
  }

  // Resumen final [cite: 105]
  console.log("\n=== RESUMEN DEL DÍA ===");
  console.log(`Clientes atendidos: ${cantidadClientes}`);
  console.log(`Ingreso total: $${acumuladorIngresos}`);
  console.log(`Clientes con descuento: ${contadorDescuentos}`);
  
  rl.close();
}

ejecutarLavanderia();
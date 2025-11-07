function contarPalabras(texto) {
    // 1. Convertir a String y asegurar que no sea null/undefined
    const textoStr = String(texto || '');

    // 2. Limpiar espacios en blanco al inicio y al final
    const textoLimpio = textoStr.trim();

    // Si la cadena está vacía después de limpiar, no hay palabras.
    if (textoLimpio === '') {
        return 0;
    }

    // 3. Usar una expresión regular para encontrar todas las "palabras".
    // /\b\w+\b/g busca secuencias de caracteres alfanuméricos (\w+) delimitadas por bordes de palabra (\b).
    // El '|| []' asegura que si no encuentra ninguna coincidencia, devuelva un array vacío en lugar de null.
    const palabrasEncontradas = textoLimpio.match(/\b\w+\b/g) || [];

    // 4. Retornar la longitud del array de palabras.
    return palabrasEncontradas.length;
}


// Prueba 1: Texto estándar
const texto1 = "Este es un ejemplo de contador de palabras en JavaScript.";
const resultado1 = contarPalabras(texto1);
console.log(`"${texto1}" tiene ${resultado1} palabras.`);

// Prueba 2: Con espacios extra
const texto2 = "   Palabras   con  espacios   extra.   ";
const resultado2 = contarPalabras(texto2);
console.log(`"${texto2}" tiene ${resultado2} palabras.`);
// Salida: "   Palabras   con  espacios   extra.   " tiene 5 palabras

// Prueba 3: Cadena vacía
const resultado3 = contarPalabras("");
console.log(`La cadena vacía tiene ${resultado3} palabras.`);
// Salida: La cadena vacía tiene 0 palabras.
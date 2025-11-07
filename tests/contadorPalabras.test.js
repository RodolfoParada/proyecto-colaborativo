
const { contarPalabras } = require("../src/contadorPalabras");

test("Debería contar correctamente las palabras en una frase simple", () => {
    const texto = "Esta frase tiene cinco palabras.";
    expect(contarPalabras(texto)).toBe(5);
});

test("Debería manejar y limpiar correctamente los espacios múltiples y al inicio/final", () => {
    const texto = "   Palabras  con  espacios   extra.   ";
    // Las palabras contadas son: Palabras, con, espacios, extra
    expect(contarPalabras(texto)).toBe(4);
});

test("Debería ignorar la puntuación (comas, puntos, signos) y contar solo palabras", () => {
    const texto = "¿Hola, cómo estás? ¡Bien!";
    // Palabras: Hola, cómo, estás, Bien
    expect(contarPalabras(texto)).toBe(4);
});

test("Debería contar números como unidades alfanuméricas (palabras)", () => {
    const texto = "Tengo 5 manzanas y 3 plátanos.";
    // Palabras: Tengo, 5, manzanas, y, 3, plátanos.
    expect(contarPalabras(texto)).toBe(6);
});

// --- Pruebas de Casos Límite (Resultado Cero) ---

test("Debería retornar 0 para una cadena completamente vacía", () => {
    expect(contarPalabras("")).toBe(0);
});

test("Debería retornar 0 para una cadena que solo contiene espacios en blanco", () => {
    expect(contarPalabras("   \n\t  ")).toBe(0);
});

test("Debería retornar 0 para una entrada null o undefined", () => {
    expect(contarPalabras(null)).toBe(0);
    expect(contarPalabras(undefined)).toBe(0);
});

test("Debería retornar 0 para una cadena que solo contiene símbolos y puntuación", () => {
    expect(contarPalabras("!@#$%^&()")).toBe(0);
});
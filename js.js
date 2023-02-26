
//CUADRADO:

// Dibujar un cuadrado.
// Hacer x filas con x estrellas, donde x es introducido por el usuario.
var square = (n, char) => {
    var charAdd = "";
    for (let i = 0; i < n; i++) {
        charAdd += char;
    }
    for (x = 0; x < n; x++) {
        console.log(charAdd);
    }
}
square(5, "*");

//CUADRADO CON BORDE:

//Dibujar un cuadrado
//Hacer x filas con x estrellas, donde x es introducido por el usuario.
//Donde los bordes sean de un caracter y el interior de otro caracter

var squareWithBorder = (n, charBorder, charInner) => {
    for (let i = 1; i <= n; i++) {
        if (i === 1 || i === n) {
            var charAddBorder = "";
            for (let x = 0; x < n; x++) {
                charAddBorder += charBorder;
            }
            console.log(charAddBorder);
        } else {
            var charAddInner = "";
            for (let x = 1; x <= n - 2; x++) {
                charAddInner += charInner;
            }
            console.log(charBorder + charAddInner + charBorder);
        }
    }
}
squareWithBorder(2, "B", "*");

//CUADRADO DIAGONAL LEFT-RIGHT
//Dibujar un cuadrado con una diagonal en medio
//En cada lado de la diagonal habra un caracter diferente
//Empezar primera fila con la diagonal e ir desplazandola una posicion sustituyendolo por un segundo caracter.

var squareDiagonalLR = (n, charDiagonal, charUp, charDown) => {
    let row = ""
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (j === i) {
                row += charDiagonal;
            } else if (i < j) {
                row += charUp;
            } else if (i > j) {
                row += charDown;
            }
        }
        console.log(row)
        row = ""
    }
}
squareDiagonalLR(3, "\\", "A", "B");


//CUADRADO DIAGONAL RIGHT-LEFT

var squareDiagonalRL = (n, charDiagonal, charUp, charDown) => {
    let linea = "";
    let diagonal = n - 1;
    for (fila = 0; fila < n; fila++) {
        for (columna = 0; columna < n; columna++) {
            if (columna === diagonal) {
                linea += charDiagonal;
            } else if (columna < diagonal) {
                linea += charUp;
            } else if (columna > diagonal) {
                linea += charDown;
            }

        }
        console.log(linea);
        linea = "";
        diagonal = diagonal - 1;

    }
}
squareDiagonalRL(4, "/", "A", "B");


// MEDIO DIAMANTE

var halfDiamond = (n, char) => {
    let linea = ""
    for (i = 0; i < n * 2; i++) {
        if (i < n) {
            linea += char;
            console.log(linea)
        } else {
            linea = linea.slice(0, -1)
            console.log(linea)
        }
    }
}
halfDiamond(5, "*")

// PIRAMIDE

var pyramid = (lineas_totales, char) => {

    let vertical = lineas_totales - 1;
    let columnas_totales = ((lineas_totales * 2) - 1);
    let linea = "";
    let espacio = "-"
    let minimo = vertical;
    let maximo = vertical;
    for (fila = 0; fila < lineas_totales; fila++) {
        for (columna = 0; columna < columnas_totales; columna++) {
            if (columna >= minimo && columna <= maximo) {
                linea += char;
            }
            else {
                linea += espacio;
            }

        }
        minimo = minimo - 1;
        maximo = maximo + 1;
        console.log(linea);
        linea = ""
    }
}
pyramid(15, "*")

//DIAMANTE
var diamond = (n, char) => {
    var filasTotales = (n * 2);
    let columnasTotales = ((n * 2) - 1);
    let linea = "";
    let espacio = " ";
    let vertical = n - 1;
    let minimo = vertical;
    let maximo = vertical;

    for (fila = 1; fila < filasTotales; fila++) {
        for (columna = 0; columna < columnasTotales; columna++) {
            if (columna >= minimo && columna <= maximo) {
                linea += char;
            } else {
                linea += espacio;
            }
        }
        console.log(linea);
        if (fila < n) {
            minimo = minimo - 1;
            maximo = maximo + 1;
        } else {
            minimo = minimo + 1;
            maximo = maximo - 1;
        }
        linea = "";
    }
}
diamond(5, "*")
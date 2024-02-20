
function introduceNumber(num) {

    document.getElementById("result").value += num;
    
}

function introduceOperator(operator) {



    let currentInput = document.getElementById("result").value;

    // Verificar si el campo de entrada está vacío
    if (currentInput === '') {
        // Si está vacío, no agregar el operador
        return;
    }

    let lastChar = currentInput.slice(-1);

    // Verificar si el último carácter es un símbolo aritmético
    if (['+', '-', '*', '/'].includes(lastChar)) {
        // Si es un símbolo aritmético, no agregar otro
        if (['+', '-', '*', '/'].includes(operator)) {
            return;
        }
    }
    // Agregar el operador al campo de entrada
    document.getElementById("result").value += operator;

}

function clearResult() {

    document.getElementById("result").value = "";

}

function getResult() {

    let operation = document.getElementById("result").value;

    // Verificar si el campo de entrada está vacío
    if (operation === '') {
        // Si está vacío, no realizar ninguna acción
        return;
    }

    operation = operation.replace(/x/g, '*').replace(/÷/g, '/');
    
    let result = eval(operation);

    document.getElementById("result").value = result;

}

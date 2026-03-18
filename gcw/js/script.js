function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let res = document.getElementById("resultado");

    if (!peso || !altura) {
        res.innerText = "Preenche direito aí 😅";
        res.style.color = "red";
        return;
    }

    let imc = (peso / (altura * altura)).toFixed(2);

    let msg = "";

    if (imc < 18.5) msg = "Ta frango";
    else if (imc < 25) msg = "Bem demais! ";
    else if (imc < 30) msg = "Gordelicia";
    else msg = "Imenso";

    res.innerText = `IMC: ${imc} → ${msg}`;
    res.style.color = "green";
}



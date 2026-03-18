function toggleDark() {
    document.body.classList.toggle("dark-mode");
}

let copos = 0;
const metaLitros = 2; // meta diária
const mlPorCopo = 250;

function beberAgua() {
    copos++;

    let litros = (copos * mlPorCopo) / 1000;
    let porcentagem = (litros / metaLitros) * 100;

    document.getElementById("aguaContador").innerText = copos + " copos";
    document.getElementById("litros").innerText = litros.toFixed(2) + " L";

    // Barra de progresso
    if (porcentagem > 100) porcentagem = 100;
    document.getElementById("progress").style.width = porcentagem + "%";

    // Motivação dinâmica
    let msg = "";

    if (litros < 0.5) {
        msg = "Boa! Continue hidratando 💧";
    } else if (litros < 1) {
        msg = "Você já começou bem 👏";
    } else if (litros < 1.5) {
        msg = "Metade do caminho! 🔥";
    } else if (litros < metaLitros) {
        msg = "Quase lá! Seu corpo agradece 💪";
    } else {
        msg = "Meta atingida! Você é disciplinado 🏆";
    }

    document.getElementById("motivacao").innerText = msg;
}

function montarPrato() {
    const opcoes = [
"Arroz integral + Frango grelhado + Salada verde",
"Peixe grelhado + Batata doce + Brócolis",
"Carne magra + Quinoa + Legumes salteados",
"Omelete + Abacate + Salada de rúcula",
"Salmão + Arroz integral + Aspargos",
"Tilápia + Purê de mandioquinha + Couve",
"Frango desfiado + Feijão + Salada colorida",
"Carne moída magra + Abóbora + Espinafre",
"Grão-de-bico + Arroz integral + Legumes",
"Lentilha + Salada mediterrânea + Ovo cozido",

"Macarrão integral + Atum + Tomate cereja",
"Wrap integral + Frango + Alface e cenoura",
"Tofu grelhado + Quinoa + Brócolis",
"Panqueca de aveia + Frango + Salada",
"Estrogonofe fit de frango + Arroz integral",
"Peixe assado + Legumes no forno",
"Arroz negro + Salmão + Abobrinha",
"Frango ao curry + Arroz integral",
"Ovos mexidos + Batata doce + Salada",
"Hambúrguer caseiro + Salada + Arroz integral",

"Arroz integral + Carne grelhada + Couve",
"Salmão + Purê de batata doce + Salada",
"Quinoa + Frango + Tomate e pepino",
"Tilápia + Arroz integral + Vagem",
"Tofu + Legumes grelhados + Arroz",
"Lentilha + Abóbora + Espinafre",
"Frango + Macarrão integral + Brócolis",
"Carne magra + Feijão + Salada",
"Peixe + Quinoa + Cenoura ralada",
"Omelete + Salada + Arroz integral",

"Frango + Purê de mandioquinha + Couve",
"Salmão + Arroz integral + Salada grega",
"Carne grelhada + Batata doce + Rúcula",
"Arroz integral + Ovo cozido + Salada",
"Frango + Lentilha + Legumes",
"Tilápia + Salada + Quinoa",
"Tofu + Arroz integral + Brócolis",
"Carne moída + Purê de abóbora",
"Peixe grelhado + Legumes cozidos",
"Arroz integral + Frango + Abobrinha",

"Grão-de-bico + Salada + Ovo",
"Lentilha + Arroz integral + Salada",
"Frango + Salada de repolho + Quinoa",
"Carne grelhada + Espinafre + Arroz",
"Salmão + Couve + Batata doce",
"Tilápia + Salada de alface + Arroz",
"Frango + Brócolis + Quinoa",
"Tofu + Abóbora + Salada",
"Carne magra + Arroz integral + Tomate",
"Omelete + Rúcula + Batata doce",

"Arroz integral + Peixe + Vagem",
"Salmão + Quinoa + Espinafre",
"Frango + Purê de batata doce + Salada",
"Carne grelhada + Legumes + Arroz",
"Tofu + Salada colorida + Arroz integral",
"Lentilha + Couve + Quinoa",
"Frango + Cenoura + Arroz integral",
"Peixe + Brócolis + Purê de mandioquinha",
"Carne moída + Espinafre + Arroz",
"Ovos cozidos + Salada + Batata doce",

"Arroz integral + Frango + Beterraba",
"Salmão + Legumes grelhados + Arroz",
"Tilápia + Purê de abóbora + Salada",
"Tofu + Arroz negro + Brócolis",
"Frango + Feijão + Salada verde",
"Carne magra + Abobrinha + Arroz",
"Lentilha + Salada + Quinoa",
"Peixe + Batata doce + Espinafre",
"Omelete + Tomate + Arroz integral",
"Frango + Couve + Purê de batata doce",

"Arroz integral + Carne + Salada",
"Salmão + Cenoura + Quinoa",
"Tilápia + Vagem + Arroz integral",
"Tofu + Salada + Purê de abóbora",
"Frango + Brócolis + Arroz negro",
"Carne grelhada + Espinafre + Quinoa",
"Lentilha + Salada mediterrânea",
"Peixe grelhado + Abóbora + Arroz",
"Ovos mexidos + Couve + Batata doce",
"Frango + Rúcula + Arroz integral",

"Salmão + Salada + Purê de mandioquinha",
"Tilápia + Brócolis + Quinoa",
"Tofu + Espinafre + Arroz integral",
"Carne moída + Salada + Batata doce",
"Frango + Abóbora + Arroz integral",
"Peixe + Salada colorida + Quinoa",
"Lentilha + Arroz integral + Espinafre",
"Omelete + Brócolis + Arroz",
"Salmão + Batata doce + Couve",
"Frango grelhado + Quinoa + Salada verde"
];

    let random = Math.floor(Math.random() * opcoes.length);
    document.getElementById("prato").innerText = opcoes[random];
}

function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    if (!peso || !altura) {
        resultado.innerText = "Preencha todos os campos!";
        resultado.style.color = "red";
        return;
    }

    let imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    resultado.innerText = "Seu IMC é " + imc + " (" + classificacao + ")";
    resultado.style.color = "green";
}
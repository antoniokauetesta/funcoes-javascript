function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function verificarSituacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

let media = calcularMedia(8, 6, 9);

console.log("Média: " + media);
console.log("Situação: " + verificarSituacao(media));
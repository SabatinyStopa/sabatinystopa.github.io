let arrayDeFrases = [
     "Felicidades para você, por este dia tão especial que é o seu aniversário.",
     "Parabéns, que possa ter muitos anos de vida, abençoados e felizes, e que estes dias futuros sejam todos de harmonia, paz e desejos realizados.",
     "Que seu coração, esteja sempre em festa, porque você é um ser de luz e especial para mim.",
     "Com todas as minhas forças, eu te desejo um feliz aniversário!",
     "Que seu caminhar seja sempre premiado com a presença de Deus, guiando seus passos e intuindo suas decisões, para que suas conquistas e vitórias, sejam constantes em seus dias."
];

function CreateMessageParabens(){
    let NomeDoCara = document.getElementById("nomeDoDesgracado").value;
    GenerateText(NomeDoCara);
}
function GenerateText(NomeDoCara){
    document.getElementById("message").innerHTML = NomeDoCara.concat(", ", arrayDeFrases[numeroAleatorio()]);        
}
function numeroAleatorio(){
    let numero = Math.floor(Math.random() * arrayDeFrases.length);

    return numero
}
let arrayDeFrases = [
    "Felicidades para você, por este dia tão especial que é o seu aniversário.",
    "Parabéns, que possa ter muitos anos de vida, abençoados e felizes, e que estes dias futuros sejam todos de harmonia, paz e desejos realizados.",
    "Que seu coração, esteja sempre em festa, porque você é um ser de luz e especial para mim.",
    "Com todas as minhas forças, eu te desejo um feliz aniversário!",
    "Que seu caminhar seja sempre premiado com a presença de Deus, guiando seus passos e intuindo suas decisões, para que suas conquistas e vitórias, sejam constantes em seus dias.",
    "Foi um ano memorável e inesquecível, e agora é hora de festejar a sua vida. Você está de parabéns. Feliz aniversário e muitas felicidades sempre!",
    "Espero que hoje você celebre seu dia especial junto dos que mais ama, e que o seu coração se aqueça com todo amor que receber. Feliz aniversário!",
    "A vida é maravilhosa e viver é um privilégio, por isso comemorar aniversário deve ser sempre motivo de alegria e gratidão. Parabéns, muitas felicidades e celebre em grande estilo mais um ano de vida!",
    "Feliz Aniversário! Que a felicidade acompanhe sempre você, não só hoje, mas todos os dias da sua vida.",
    "Feliz aniversário!Você merece o melhor, muita saúde, paz e amor, tudo isso eu lhe desejo assim como muitos anos de vida mais.Parabéns!"
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
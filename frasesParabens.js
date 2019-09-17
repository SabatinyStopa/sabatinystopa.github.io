let arrayDeFrases = [
    "felicidades para você, por este dia tão especial que é o seu aniversário.",
    "parabéns, que possa ter muitos anos de vida, abençoados e felizes, e que estes dias futuros sejam todos de harmonia, paz e desejos realizados.",
    "que seu coração, esteja sempre em festa, porque você é um ser de luz e especial para mim.",
    "com todas as minhas forças, eu te desejo um feliz aniversário!",
    "que seu caminhar seja sempre premiado com a presença de Deus, guiando seus passos e intuindo suas decisões, para que suas conquistas e vitórias, sejam constantes em seus dias.",
    "foi um ano memorável e inesquecível, e agora é hora de festejar a sua vida. Você está de parabéns. Feliz aniversário e muitas felicidades sempre!",
    "espero que hoje você celebre seu dia especial junto dos que mais ama, e que o seu coração se aqueça com todo amor que receber. Feliz aniversário!",
    "a vida é maravilhosa e viver é um privilégio, por isso comemorar aniversário deve ser sempre motivo de alegria e gratidão. Parabéns, muitas felicidades e celebre em grande estilo mais um ano de vida!",
    "feliz Aniversário! Que a felicidade acompanhe sempre você, não só hoje, mas todos os dias da sua vida.",
    "feliz aniversário! Você merece o melhor, muita saúde, paz e amor, tudo isso eu lhe desejo assim como muitos anos de vida mais.Parabéns!",
    "hoje é dia de festa e alegria, pois é o seu aniversário. Parabéns, e celebre com entusiasmo o começo de mais um ano de vida! Felicidades!",
    "que hoje toda felicidade do mundo se reúna para abraçar seu coração. Tenha um aniversário muito feliz!",
    "que não faltem sorrisos no seu rosto, samba no coração e paz na mente. Feliz Aniversário!",
    "feliz Aniversário! Mais um ano que passou e outro que vai começar. Aproveite ao máximo e que nunca lhe falte felicidade, amor, saúde e amizade.",
    "receba meus votos de um feliz aniversário carregados de carinho. Parabéns, muitas felicidades e mais anos de vida com saúde, paz e amor!",
    "seu ano foi repleto de suor e determinação, e agora é hora de dar uma relaxada e aproveitar seu aniversário. Parabéns e felicidades sempre!",
    "que seu aniversário seja repleto de palavras de carinho e abraços sinceros. Parabéns!",
    "completar mais um ano neste mundo é o maior presente que podemos desejar. Feliz aniversário e que a vida lhe sorria sempre!",
    "parabéns pelo seu aniversário! Festeje seu dia em grande estilo, e todos os dias celebre a vida e a pessoa maravilhosa que você é.",
    "parabéns por mais um ano de vida! Sorria, dance, pule de felicidade e celebre seu dia em grande estilo.",
    "hoje é um dia muito especial, pois você completa mais um aniversário. E você fez por merecer uma enorme comemoração. Parabéns e muitas felicidades!",
    "não importa quando, o que importa mesmo é lembrar, e ainda que não tenha sido na data exata, eu lembrei do seu aniversário. Parabéns e seja sempre muito feliz!",
    "que a alegria de viver marque presença nesta linda celebração do seu aniversário. Parabéns, amiga!"
];

let arrayDeTextos = [
    "abra os olhos e sinta o prazer da vida, pois hoje é um dia muito especial. É o seu aniversário! É um dia para refletir sobre o ano que passou. Foram muitos erros e acertos, mas sempre a certeza de viver intensamente cada dia, aproveitando cada momento para aprender e evoluir. Pois, cada dia é mais um passo na longa caminhada da vida. E certamente você como ninguém sabe a pessoa especial que é. Desejo tudo de bom! Que você possa ser feliz e faça os outros felizes, pois não há dádiva maior que a vida e o amor. Por isso, nunca pare a busca pelo crescimento interior e continue sempre a ser a pessoa que você é. Feliz Aniversário!",
    "Parabéns! Que o seu dia seja tão lindo quanto o seu sorriso e lhe ofereça tanta felicidade quanto a sua amizade envia para a minha vida. Que esta nova etapa chegue recheada de muita saúde e novas oportunidades para concretizar os seus sonhos mais desejados. Que a alegria acompanhe você por todos os momentos e que Deus continue guiando todos os seus passos e iluminando cada vez mais os seus pensamentos. Faça com que a sua simpatia possa contagiar ainda mais pessoas, pois você é uma pessoa de muito brilho e a humanidade merece que sua luz seja compartilhada. Nunca se esqueça quanto é especial para a minha vida e de tantas outras pessoas. Feliz Aniversário!"
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
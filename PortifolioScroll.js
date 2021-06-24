var titles = [
    "Color And Seek",
    "Diorama Builder",
    "The Awakening of The Mummies",
    "Great Burger",
    "Find The Cure",
    "Defensor da torre"
]

var descriptions = [
    "Leo é um camaleão um pouco diferente do restante de sua tribo, além de ter a coloração branca, ele não consegue mudar de cor devido a sua insegurança e timidez. Por conta disso, ele sai em uma aventura para encontrar as outras tribos de camaleões, na expectativa de que alguma delas possa ajudá-lo. Sua jornada não consiste apenas em uma busca pelas suas cores, mas também para encontrar a si mesmo",
    "DIORAMA BUILDER tem como objetivo dar a você a sensação de ter sua própria coleção de DIORAMAS em seu quarto. Sem bloqueios, você pode escolher o que mais gosta no momento. Com uma mecânica de montagem simples, a cada peça colocada, você terá o prazer de ver aquele lindo cenário tomar forma",
    "Usando suas habilidades de resolução de quebra-cabeças, guie todas as múmias através de várias câmaras cheias de armadilhas para finalmente libertá-las da malvada Faraó Cléo",
    "Desafie-se montando os mais diversos lanches para manter a reputação da sua hamburgueria! Lembre-se: o cliente sempre tem razão! No modo Clássico, monte os pedidos de acordo com a ordem de ingredientes informados pelos clientes, seja atento e não os decepcione! Pois isso pode afetar sua reputação e gerar comentários negativos! O tempo passa, mas a fome não! No modo Contra o Tempo, mostre que você é um chefe digno e monte o máximo de lanches possíveis antes que o relógio chegue a zero!",
    "Encontre os potes de medicação ao longo do hospital para evitar que a doença se alastre pelo seu corpo e te faça morrer!",
    "Bob é o defensor da torre e precisa eliminar os inimigos que aparecem para destruir sua querida torre."
]

var links = [
    "https://thaydaderio.itch.io/color-and-seek",
    "https://store.steampowered.com/app/1370170/Diorama_Builder/",
    "https://store.steampowered.com/app/1593410/The_Awakening_of_Mummies/",
    "https://play.google.com/store/apps/details?id=com.SpaceOctopusStudio.GreatBurger",
    "Downloads/FindTheCure.zip",
    "BobGame/bob.html"
]

var images = [
    "Images/colorAndSeek.png",
    "Images/Diorama_Quadrado.png",
    "Images/Mummy_Quadrado.png",
    "Images/logoGreat.png",
    "Images/FindTheCure_Quadrado.png",
    "Images/DefensorDaTorre.png"
]

var currentCounter = 0;


function ForwardButton(){
    currentCounter++;
    
    if(currentCounter >= descriptions.length)
        currentCounter = 0;

    ChangePortifolio();
}

function BackwardButton(){
    currentCounter--;
    
    if(currentCounter <= 0)
        currentCounter = descriptions.length - 1;
    
    ChangePortifolio();
}

function ChangePortifolio(){
    document.getElementById("title").innerHTML = titles[currentCounter];
    document.getElementById("description").innerHTML = descriptions[currentCounter];
    document.getElementById("image").src = images[currentCounter];
    document.getElementById("gameLink").href = links[currentCounter];
}
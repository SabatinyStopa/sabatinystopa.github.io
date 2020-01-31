function CreateCongratsMessage(){
    var Name = document.getElementById("nomeDoDesgracado").value;
    GetDatabaseValue(ChooseDatabaseChild(TakeSelectedField()), Name);
}

function RandomNumber(number){
    return Math.floor(Math.random() * number);
}

function ChooseDatabaseChild(FieldValue){
    if(FieldValue == "frases")
        return "frases_comuns";
    else
        return "frases_amiga";
}

function TakeSelectedField(){
    var FieldValue = document.getElementById("opcoes").value;
    return FieldValue;
}

function GetDatabaseValue(Text, Name){
    var database = firebase.database();
    var object = database.ref(Text).once('value');
    object.then(function(snapshot){
        var position = RandomNumber(snapshot.numChildren()).toString();
        var result = Name.concat(", ", snapshot.child(position).val().toString()); 
        document.getElementById("message").innerHTML = result;
    });
       
}
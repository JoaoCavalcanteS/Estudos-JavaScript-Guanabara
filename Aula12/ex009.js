var agora= new Date();
var agoraHoras=agora.getHours()
console.log(`Agora são ${agoraHoras}horas`);
if(agoraHoras<=12){
    console.log("Bom dia!");
}
else{
    if(agoraHoras>=12 && agoraHoras<=18){
        console.log("Boa tarde");
    }
    else{
        console.log("Boa noite");
    }
}
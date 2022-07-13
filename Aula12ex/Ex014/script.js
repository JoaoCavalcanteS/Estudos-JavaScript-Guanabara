function carregar(){
    var msg=window.document.getElementById("Mensagem");
    var img=window.document.getElementById("imagem");
    var data= new Date()
    var horas=data.getHours()
    msg.innerHTML=`Agora são ${horas} horas`;
    if(horas>=6 && horas<=12){
        img.src="FtManha.jpg"
        document.body.style.background="rgb(249, 252, 96)"
    }
    else{
        if(horas>=12 && horas<=18){
            img.src="Fttarde.jpg"
            document.body.style.background="rgb(255, 145, 0)"
        }
        else{
            img.src="FtNoite.jpg"
            document.body.style.background="rgb(25, 2, 107)"
        }
    }
}

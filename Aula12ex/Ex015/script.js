function verificar(){
    var data=new Date()
    var ano=data.getFullYear()
    var FAno=document.getElementById("txtano")
    var res=document.getElementById("res")
    if(FAno.value.length==0 || FAno.value>ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    }
    else{
        var fsex=document.getElementsByName("radsex")
        var idade=ano-Number(FAno.value)
        var genero=''
        var img=document.createElement("img")
        img.setAttribute("id", "foto")
        if(fsex[0].cheked){
            genero="Homem"
            if(idade>=0 && idade<=10){
                img.setAttribute('src', "CriançaHomem.jpg")
            }
            else{
                if(idade<21){
                    img.setAttribute('src', "JovemHomem.jpg")
                }
                else{
                    if(idade<51){
                        img.setAttribute('src', "AdultoHomem.jpg")
                    }
                    else{
                        img.setAttribute('src', "IdosoHomem.jpg")
                    }
                }
            }
        }
        else{
            if(fsex[1].cheked){
                genero="Mulher"
                if(idade>=0 && idade<=10){
                    img.setAttribute('src', "IdosoMulher.jpg")
                }
                else{
                    if(idade<21){
                        img.setAttribute('src', "IdosoMulher.jpg")
                    }
                    else{
                        if(idade<51){
                            img.setAttribute('src', "IdosoMulher.jpg")
                        }
                        else{
                            img.setAttribute('src', "IdosoMulher.jpg")
                        }
                    }
                }
            }
        }
        res.innerHTML=`Detectamos ${genero} com ${idade}anos`
        res.appendChild(img)
    }
}
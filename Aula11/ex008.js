function calcular(){
    var txtv=window.document.getElementById("txtvel");
    var res=window.document.getElementById("res")
    var vel= Number(txtv.value)
        res.innerHTML=`Sua velocidade de ${vel} está dentro do limite!`;
        if(vel>=60){
            res.innerHTML=`Sua velocidade de ${vel} está fora do limite!`;
        }
}

function lettre(ch){
    ch=ch.toLowerCase();
    for (let i = 0; i < ch.length; i++) {
        if(!(ch[i]>="a"&&ch[i]<="z")){
            return true;
        }
    }
}
function verif(){
    let cin=document.getElementById("cin").value;
    if(cin.length!=8||isNaN(cin)||!(cin[0]=="0"||cin[0]=="1")){
        alert("cin invalide");
        return false;
    }
    let nom=document.getElementById("nom").value;
    if((nom.length<3||nom.length>30)||lettre(nom)){
        alert("nom invalide");
        return false;
    }
    let prenom=document.getElementById("prenom").value;
    if((prenom.length<3||prenom.length>30)||lettre(prenom)){
        alert("prenom invalide");
        return false;
    }
    let tel=document.getElementById("tel").value;
    if(tel.length!=8||isNaN(tel)||!(tel[0]!="0")){
        alert("tel invalide");
        return false;
    }
    let article=document.getElementById("article").selectedIndex;
    if(article==0){
        alert("article invalide");
        return false;
    }
    let prix=document.getElementById("prix").value;
    if(Number(prix)<0){
        alert("prix invalide");
        return false;
    }
        
        
}
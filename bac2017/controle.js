function verif() {
    const cin = document.getElementById("cin").value;
    if (isNaN(cin)||cin.length!=8||cin[0]!='0'&&cin[0]!='1') {
        alert("cin");
        return false;
    }
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    if ((!alpha(nom)) || (!alpha(prenom))) {
        alert("nom et prenom chiane de 3 à 30 lettres!!");
        return false;
    }
    const tel=document.getElementById("tel").value;
    if (isNaN(tel)||tel.length!=8||tel[0]=='0'){
        alert ("chiane de 8 chiffres dont le premier different de 0 ");
        return false;
    }
    const art=document.getElementById("art").selectedIndex;
    if (art==0){
        alert ("selection obligatoire d'un article");
        return false;
    }
    const propose=document.getElementById("propose").value;
    // entier strictement positif
    if (propose<1){
        alert ("le nombre de propositions doit être un nombre strictement positif");
        return false;
    }

}
function alpha(ch) {
    if (ch.length < 3 || ch.length > 30) {
        test = false;
    }
    for (let i = 0; i < ch.length; i++) {
        if (ch[i] < "A" || ch[i] > "Z" & ch[i] != "") {
            test = false;
        }
        return true;
    }

}

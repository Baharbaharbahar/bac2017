<?php
$propose=$_POST["propose"];
$mysq_connect('localhost','root','');
mysql_select_db("bdbac2017");
if($propose<$_SESSION['prixbase']){
    echo ('Votre offre a été rejetée car elle est trop basse. Le Prix Base pour cet article est :');
    echo $_SESSION['prixbase'];
    }else{
        $req="INSERT INTO `offres`(`id`, `pseudo`, `date`, `montant`) VALUES 
        (NULL,'".$_SESSION['pseudo']."',now(),'$propose')";
        mysql_query($req);
        if(isset($_GET['id'])) {
            echo 'Vous avez bien postulé !';
        }
    }
$req1="INSERT INTO client VALUES ('$cin','$nom','$prenom','$tel')";
$res1=mysql_query($req1);
if(mysql_affected_rows()==1)
    echo ("Offre energistree pour ce nouveau client"); 
$req2="INSERT INTO article VALUES ('$code','$libelle','$prixbase')";
$res2=mysql_query($res2);
if(mysql_query($res)==1)
 echo ("Nouvelle offre enregistrée");
$req3="UPDATE offre SET propose='$propose' ";
$res3=mysql_query($req3);
if(mysql_affected_rows()==1){
    echo ("Mise a jour faite avec succes");
}

?>
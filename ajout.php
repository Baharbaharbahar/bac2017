<?php
$con=mysqli_connect("localhost","root","","bd20217");
$cin=$_POST['cin'];
$article=$_POST['article'];
$prix=$_POST['prix'];
$sql="select * from offre o ,article a where o.code=a.code and o.prixpropose < a.prixbase";
$res=mysqli_query($con,$sql);
if (mysqli_num_rows($res)>0)
{
    echo ("offre rejete");
}else{
$sql="select * from client where cin='$cin'";
$res=mysqli_query($con,$sql);
if (mysqli_num_rows($res)==0)
{
    echo ("offre enregistre pour ce nouveau client");
}else{
    $sql="insert into offre(cin,code,prixpropose) values ('$cin',$article,$prix);";
    mysqli_query($con,$sql);
}

}
$sql="select cin from offre where cin='$cin'";
$res=mysqli_query($con,$sql);
if(mysqli_num_rows($res)==1){ 
    $sql1="UPDATE offre SET prixpropose=$prix where cin=$cin ";
    $res1=mysqli_query($con,$sql1);
    echo("mise a jour faite avec succes");
}
?>
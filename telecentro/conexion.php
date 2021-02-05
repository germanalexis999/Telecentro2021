
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style type="text/css">
  body {
    font-family: 'Montserrat', sans-serif;
    background-image: url('fondo.png');
    background-repeat: no-repeat;
    background-size: cover;
 }
  </style>
</head>
<body>
    
</body>
</html>

<?php 

$dbhost="localhost";
$dbuser="root";
$dbpass="";
$dbname="ingreso";
$conn= mysqli_connect($dbhost,$dbuser,$dbpass,$dbname); //definimos nuestras variables

if(!$conn){ //verificamos si  esta en false se debe a que no se pudo conectar con nuestra base de datos 
    die("No hay conexion con la base de datos : ".mysqli_connect_error());
}

$nombre=$_POST["Usuario"]; //capturamos por post el input del usuario
$pass=$_POST["Contraseña"];

$query = mysqli_query($conn,"SELECT * FROM login WHERE usuario ='".$nombre."' and password ='".$pass."'"); //seleccionamos todo de la tabla login donde usuario coincida con el nuestra bd 
$nr=mysqli_num_rows($query);//contamos el numero de registros que trae nuestra consulta

if($nr == 1) //si la consulta trae una row
{
    header("location: node.php");
}

elseif($nr==0){ //entonces si no trae ninguna
    
    echo "<script>
                window.location= 'login.php'
                alert('Usuario o contraseña incorrectos');
                
    </script>";
}

?>
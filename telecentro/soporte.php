<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>soporte</title>
    <style>
        body{background-color: rgb(64, 193, 243);
            align-content: center;
        }
        .envio{
          width: 100%;
         margin-bottom: 30px;
          padding: 11px 10px ;
          background-color: #def;
          font-weight: 400;
    
        }  
        div{
             width: 700px;
             height: 500px;
             background: rgb(192, 206, 233);
             margin: auto;
             margin-top: 200px;
             box-shadow: 7px 13px 37px #000000;
             padding: 40px 60px;
        }
        .enviar{
             width: 100%;
             height: 60px;
             background: rgb(216, 72, 47);
             border: none;
             color: white;
             margin-bottom: 16px

        }
        .texto{
            width: 100%;
            height: 150px;
            
        }
        h1{
            text-align: center;
            margin-top: 5px;
        }
       
    </style>
</head>
<body>

    <div>
        <h1>Bienvenido al soporte de usuarios</h1>
        <input class="envio" type="text" name="Usuario" value="" placeholder="Usuario del sistema" required>
        <input class="envio" type="password" name="empleado" value="" placeholder="numero de empleado" required>
        <p>Ingrese los detalles de su problema:</p>
        <input class="texto" type="text">
        <input class="enviar" type="submit" name="" value="Reportar Problema">     
    </div>

</body>
</html>
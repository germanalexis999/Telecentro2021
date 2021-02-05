<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Telecentro Middleware</title>
    <link rel="stylesheet" href="styles/style2.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet">
    <link rel="icon" href="images/header.ico">
    <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet">
</head>
<body>
    <div class="contenedor">
    <header>
        <section>
            <p class="logo-1">
                Telecentro Node Status
              </p>
               
                <button class="btn-azu" onclick="todosLosNodos()">Todos los Nodos</button>
                <button class="btn-ver" onclick="nodosAct()">Nodos Online</button>
                <button class="btn-ama" onclick="nodosConWar();">Nodos Con Advertencias</button>
                <button class="btn-roj" onclick="nodosOffline();">Nodos Offline</button>
            
        </section>

    </header>
    
    <div id="map">
        
    </div>
</div>
    <footer><p><a href="https://github.com/germanalexis999?tab=repositories">Desarrollado Por German Arce Version: V1.0</a></p></footer>
    </div>
    <script src="js/codigo.js" ></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik&callback=iniciarMap"></script> <!-- api sin pago tiene restricciones --> 
</body>
</html>
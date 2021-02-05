function iniciarMap(){
    
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 16,
      center: arrayDeCordenadas[0]
    });
    
      for( var i = 0; i < arrayDeCordenadas.length; i++){
		// icono personalizado 
		var img = {
            url: 'images/nodo.png',
            // Este marcador tiene 20 pixeless de ancho por 32 pixeles de alto.
            size: new google.maps.Size(20, 32),
            // El origen para esta imagen es (0, 0).
            origin: new google.maps.Point(0, 0),
            // El ancla para esa imagen es la base del asta bandera en (0, 32).
            anchor: new google.maps.Point(0, 32)
          };
        
        var num=arrayDeCordenadas[i].numero; //guardamos datos relevantes
        var dir=arrayDeCordenadas[i].ip;
        var texto='Nodo Numero : '+num+' la direccion IP es : '+dir
        // nuevo marcador
        var img=('images/nodo.png')//colocamos cada marcador con su respectiva posicion
		marcador = new google.maps.Marker({
				position: new google.maps.LatLng(arrayDeCordenadas[i].lat, arrayDeCordenadas[i].lng),
				map: map,
                title:texto,
                icon:img
		
        });
        		
	}
    
}


var arrayDeCordenadas=[];
var arrayDeCordenadasOff=[];
var arrayDeCordenadasWar=[];
var arrayTodoslosNodos=[];
var arrayActivos=[];
var arrayTemporal=[];
var nodosActivos=[[0,-34.784349,-58.2690274,'online','false','10.0.0.1'],[1,-34.7802748,-58.2680491,'online','true','10.0.0.2'],[2,-34.7820917,-58.2665873,'online','true','10.0.0.3'],[3,-34.7821768,-58.2696785,'online','false','10.0.0.4'],[4,-34.7796938,-58.2650894,'online','false','10.0.0.5'],[5,-34.7799098,-58.2654875,'online','false','10.0.0.6'],[6,-34.7771181,-58.2652715,'online','false','10.0.0.7'],[7,-34.7826284,-58.2722653,'online','false','10.0.0.8'],[8,-34.783762,-58.2713513,'online','false','10.0.0.9'],[9,-34.7843679,-58.2671397,'online','false','10.0.0.10'],[10,-34.7833089,-58.2653583,'online','false','10.0.0.11'],[11,-34.7786164,-58.2677155,'online','false','10.0.0.12'],[12,-34.7813271,-58.2723453,'online','false','10.0.0.13'],[13,-34.7780374,-58.2764888,'offline','false','10.0.0.14'],[14,-34.7783509,-58.272293,'online','false','10.0.0.15'],[15,-34.7773407,-58.2719988,'online','false','10.0.0.16'],[16,-34.7783479,-58.274009,'online','false','10.0.0.17'],[17,-34.7791047,-58.2754227,'online','false','10.0.0.18'],[18,-34.7806286,-58.2741889,'online','false','10.0.0.19'],[19,-34.7812666,-58.2703517,'online','false','10.0.0.20']]





for(let i=0;i<nodosActivos.length;i++){ //recorremos la lista de nodos 
    arrayTodoslosNodos.push({ 
        "lat"    : nodosActivos[i][1],
        "lng"  : nodosActivos[i][2],
        "numero":nodosActivos[i][0],
        "ip":nodosActivos[i][5]
    });


    console.log(nodosActivos[i][4])
    if(nodosActivos[i][3]=='online'){
        console.log("el nodo :",nodosActivos[i][0],"esta andando correctamente","con el estatus",nodosActivos[i][3])
        
        arrayActivos.push({ 
            "lat"    : nodosActivos[i][1],
            "lng"  : nodosActivos[i][2],
            "numero":nodosActivos[i][0],
            "ip":nodosActivos[i][5]
        });
        if (nodosActivos[i][4]=='true'){
            console.log("el nodo presenta problemas ")
            arrayDeCordenadasWar.push({ 
                "lat"    : nodosActivos[i][1],
                "lng"  : nodosActivos[i][2],
                "numero":nodosActivos[i][0],
                "ip":nodosActivos[i][5]
            });
        }
    }


    else if(nodosActivos[i][3]=='offline'){
        console.log("el nodo :",nodosActivos[i][0],"no anda")
        arrayDeCordenadasOff.push({ 
            "lat"    : nodosActivos[i][1],
            "lng"  : nodosActivos[i][2],
            "numero":nodosActivos[i][0],
             "ip":nodosActivos[i][5]
        });

        if (nodosActivos[i][4]=='true'){
            console.log("el nodo presenta problemas ")
            arrayDeCordenadasWar.push({ 
                "lat"    : nodosActivos[i][1],
                "lng"  : nodosActivos[i][2],
                "numero":nodosActivos[i][0],
                "ip":nodosActivos[i][5]
            });

        }

    }

}

arrayDeCordenadas=arrayActivos;
//creacion de las funciones de cada boton
function nodosOffline(){
    arrayTemporal=arrayDeCordenadas;
     arrayDeCordenadas=arrayDeCordenadasOff;
     iniciarMap()

}

function nodosAct(){
    arrayDeCordenadas=arrayActivos;
    iniciarMap()

}

function nodosConWar(){
    arrayTemporal=arrayDeCordenadas;
    arrayDeCordenadas=arrayDeCordenadasWar;
    iniciarMap()

}

function todosLosNodos(){
    arrayDeCordenadas=arrayTodoslosNodos;
    iniciarMap()
}
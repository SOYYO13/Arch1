window.onload = principal;

var url1 = "http://localhost:3000/materias"
var url2 = "http://localhost:3000/estado"
var url3 = "http://localhost:3000/profesores"

function principal()
{
    document.getElementById("btnagregar").addEventListener('click',cargar);
    document.getElementById("btnmostrar").addEventListener('click',mostrar);
    document.getElementById("btnborrar").addEventListener('click',borrado);
    document.getElementById("btnmodificar").addEventListener('click',modifi);
}


function cargar(){ // para cargar nuevos datos, cambiar metodo, mismo url y realizado, alert para indicar.
    
    urloficial = "http://localhost:3000/"+ document.getElementById("Nom").value
    if(urloficial == url1){ //MATERIAS
        axios({
            method: 'POST', 
            url: urloficial,  
            data: {
                nombre: document.getElementById("NomMateria").value,
                estadoID: document.getElementById("EstMateria").value,
                profesorID:document.getElementById("NumProfesor").value
            }
    
        })
        .then( alert("Carga realizada")) 
        .catch( err => console.log(err))
    }
    else{
        if(urloficial == url2){ //ESTADO
            axios({
                method: 'POST', 
                url: urloficial,  
                data: {
                    descipcion: document.getElementById("NomDesc").value//crear input de desc de estado
                }
        
            })
            .then( alert("Carga realizada")) 
            .catch( err => console.log(err))
        }
        else{
            if(urloficial == url3){ //PROFESORES
                axios({
                    method: 'POST', 
                    url: urloficial,  
                    data: {
                        apeynomb: document.getElementById("NomProf").value//crear input para apeynomb de profe
                    }
                })
                .then( alert("Carga realizada")) 
                .catch( err => console.log(err))
            } 
        }
    }
}

function mostrar(){
    let chom = "http://localhost:3000/"
    urloficial = "http://localhost:3000/"+ document.getElementById("Nomb").value
    if(urloficial !== chom){
        axios({
            method: 'GET', //metodo que se quiere realizar en el postman,get,post,put,etc
            url: urloficial   // direccion que saquemos del sistema cuando carguemos los datos de json
        })
        .then( res => {  //-< arguento que es la res(respuesta) es la espuesta postiva (cuando es si).LO QUE PASA CUANDO TRAE DATOS
            console.log(res.data)
        }) 
        .catch( err => { //err(error), cuando la respiesta es negativa(responde no).LO QUE PASA CUANDO NO TRAE DATOS
            console.log(err)
        })
    }
    else{alert("Colocar nombre de bloque")}
    

}

function borrado(){ //para borrar 
    let chom = "http://localhost:3000/"
    urloficial = "http://localhost:3000/"+ document.getElementById("Nombr").value
    if(urloficial !== chom){
        axios({
            method: 'DELETE', 
            url: urloficial +"/"+ document.getElementById("Elemento").value  
        })
        .then( res => {  
            console.log(res.data)
        }) 
        .catch( err => { 
            console.log(err)
        })
    }
}

function modifi(){ //para modificar un item de algun elemento en especial
    urloficial = "http://localhost:3000/"+document.getElementById("Nombre").value
    if(urloficial == url1){ //MATERIAS
        axios({
            method: 'PUT', 
            url: urloficial +"/"+ document.getElementById("Identificador").value,
            data: {
                nombre: document.getElementById("Uno").value,
                estadoID: document.getElementById("Dos").value,
                profesorID: document.getElementById("Tres").value
            }
    
        })
        .then( alert("Carga realizada")) 
        .catch( err => console.log(err))
    }
    else{
        if(urloficial == url2){ //ESTADO
            axios({
                method: 'PUT', 
                url: urloficial +"/"+ document.getElementById("Identificador").value,  
                data: {
                    descripcion: document.getElementById("Cuatro").value//crear input de desc de estado
                }
        
            })
            .then( alert("Carga realizada")) 
            .catch( err => console.log(err))
        }
        else{
            if(urloficial == url3){ //PROFESORES
                axios({
                    method: 'PUT', 
                    url: urloficial +"/"+ document.getElementById("Identificador").value,  
                    data: {
                        apeynomb: document.getElementById("Cinco").value//crear input para apeynomb de profe
                    }
                })
                .then( alert("Carga realizada")) 
                .catch( err => console.log(err))
            } 
        }
    }

}
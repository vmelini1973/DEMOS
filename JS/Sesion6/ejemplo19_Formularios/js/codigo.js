function mostrar(){
   console.log("Nombre: " + formulario.nombre.value)
   console.log("Password: " + formulario.password.value)
   console.log("Apellidos: " + formulario.apellido.value)
   console.log("Telefono: " + formulario.telefono.value)
   console.log("fecha de Nacimiento: " + formulario.nacimiento.value)
   console.log("Url: " + formulario.web.value)
   console.log("E-mail: " + formulario.email.value)
   console.log("Sexo: " + formulario.sexo.value)
   console.log("Estudios: " + formulario.estudios.value)

   for( let i in document.getElementById("cursos").options){
    if (document.getElementById("cursos").options[i].selected){
        console.log("cursos: " +document.getElementById("cursos").options[i].text)
    }}};
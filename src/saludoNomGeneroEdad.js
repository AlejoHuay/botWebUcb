function saludar(nombre, genero, edad) {
  if(genero[0]=="M" || genero[0]=="m"){
    if(edad >=30){
      return "senor "+ nombre;
    }else{
      return nombre;
    }
  }else{
    if(edad >=30){
      return "senora "+ nombre;
    }else{
      return nombre;
    }
  }
}

export default saludar;

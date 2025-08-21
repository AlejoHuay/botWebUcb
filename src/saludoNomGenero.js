function saludar(nombre, genero) {
  if(genero[0]=="M" || genero[0]=="m"){
    return "mi estimado "+ nombre;
  }else{
    return "mi estimada "+ nombre;
  }
}

export default saludar;

const username:string = 'cristian';

const suma = (a:number,b:number)=>{
  return a + b;
}

suma(10,20);

class Persona{
  constructor(private age:number, public lastName:string){}
}
//el public dentro del constructor es para ahorrar lineas de codigo
const cristian = new Persona(18,"barajas");

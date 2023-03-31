import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  box = {
    width:100,
    height: 100,
    background:'red'
  }
  name = 'Cristian';  //👈 public
  age = 18;
  img = "https://www.w3schools.com/howto/img_avatar.png";
  btnDisabled = true;
  register = {
    name:'',
    email:'',
    password:''
  }
  person = {
    name:"cristian",
    age: 18,
    avatar:"https://www.w3schools.com/howto/img_avatar.png"
  }
  names:string[]= ["cristian","jhondeivi","frank"]
  newName = ''
  productos: Product[] =[
    {
      name:"el mejor juguete",
      price:565,
      image:"https://th.bing.com/th/id/OIP.kqaRdWIA2xHaK5B0m7nWEgHaFd?w=222&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    {
      name:"bicicleta casi nueva",
      price:356,
      image:"https://th.bing.com/th/id/OIP.Lne9pf_sfk2q7_cdQTEMkwAAAA?pid=ImgDet&rs=1"
    },{
      name:"coleccion de albumes",
      price:34,
      image:"https://i.pinimg.com/originals/e2/6a/81/e26a8178c601f204706aa15b2b1defd6.jpg"
    },{
      name:"Mis libros",
      price:23,
      image:"https://images-na.ssl-images-amazon.com/images/I/71Ui-NwYUmL.jpg"
    },
  ]
  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge(){
    this.person.age += 1
  }
  onScroll(event:Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }
  changeName(event:Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number){
    this.names.splice(index,1)
  }
  onRegister(){
    console.log(this.register)
  }
}

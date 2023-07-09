import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pantalla1 = "";  
  numero1:any
  tecla:any
  numero2:any
  d=""  
  
  //Borrar pantalla
  reset(){
    this.pantalla1 = ""
    this.numero1 = ""
    this.numero2 = ""
    this.tecla = ""
    this.d = ""    
  }

  //Clic en una tecla
  clickValue(value: string){
    if (this.tecla=="+" || this.tecla=="-" || this.tecla=="*" || this.tecla=="/") {
      this.d = this.d + value
      this.pantalla1 = this.pantalla1 + value
      this.numero2 = this.d
    }else{
      this.pantalla1 = this.pantalla1 + value;
      this.numero1 = this.pantalla1
    }          
  }

  //Identifica la operación a realizar
  operacion(value: string){
    this.pantalla1 = this.pantalla1 + value
    this.tecla = value
  }

  //Realiza la operación que antes se seleccionó y muestra resultado
  resultado(){
    if (this.tecla == '+') {
      this.pantalla1 = `${this.pantalla1} = ${(parseInt(this.numero1) + parseInt(this.numero2)).toString()}`
      this.pantalla1 = (parseInt(this.pantalla1) + parseInt(this.numero2)).toString()
    }
    if (this.tecla == '-') {
      this.pantalla1 = `${this.pantalla1} = ${(parseInt(this.numero1) - parseInt(this.numero2)).toString()}`
      this.pantalla1 = (parseInt(this.pantalla1) - parseInt(this.numero2)).toString()
    }
    if (this.tecla == '*') {
      this.pantalla1 = `${this.pantalla1} = ${(parseInt(this.numero1) * parseInt(this.numero2)).toString()}`
      this.pantalla1 = (parseInt(this.pantalla1) * parseInt(this.numero2)).toString()
    }    
    if (this.tecla == '/') {
      this.pantalla1 = `${this.pantalla1} = ${(parseInt(this.numero1) / parseInt(this.numero2)).toString()}`
      this.pantalla1 = (parseInt(this.pantalla1) / parseInt(this.numero2)).toString()
    }   
  }

  // clickValue(){
    // if(value == "+"){          
    //   console.log("Más")
    //   this.pantalla1 = ""
    //   return;
    // }
    
    // if (this.pantalla1 == "") {
    //   this.pantalla1 = value                 
    // }else{
    //   this.pantalla1 = (this.pantalla1 * 10) + numeroTecleado    
    //   this.pantalla1.toString              
    // }  
  // }
  
  // operacion(tecla:any){                
  //   if (tecla == '+') {
  //     if (this.numeroGuardado == 0) {
  //       this.numeroGuardado = this.pantalla1  
  //       this.resultado = this.numeroGuardado
  //       this.pantalla1 = 0;
  //     }
  //     if (this.numeroGuardado != 0) {
  //       this.numeroGuardado = this.numeroGuardado + this.pantalla1
  //       this.resultado = this.numeroGuardado
  //       this.pantalla1 = 0;        
  //     }      
  //   }  
     
  //   if (tecla == '=') {
  //     this.resultado = this.numeroGuardado
  //     this.pantalla1 = 0;   
  //   }                
  // }

  
}

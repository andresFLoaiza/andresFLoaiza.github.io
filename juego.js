/* 
var myApp = {
    name : 'Megan',
    lastName : 'Fox',
    ver:()=>{
        return 'valor'
    },
    completeName :this
  }
  
//   console.log( myApp.bind(this) ); // undefined
  console.log(this) */
  /* var name = "Strange World";
  var myApp = function(){
    var that = this;
    let apellido = "lopez"
    console.log(this.nombre)
    var sayHello = function(){
      console.log(that.apellido);
    };
    sayHello(); // Invoke the function
    console.log( 'Hello, ' + that.nombre );
  };
   
  myApp(); // Hello, */
  let amarillo=document.getElementById('amarillo')
  let naranja=document.getElementById('naranja')
  let violeta=document.getElementById('violeta')
  let roja=document.getElementById('roja')
  let gris=document.getElementById('gris')
  let azul=document.getElementById('azul')
  let verde=document.getElementById('verde')
  let cafe=document.getElementById('cafe')
  let boton=document.getElementById('boton')


  class Juego{

    constructor(){
      
      this.inicializar()
      this.secuencia()
      this.alumbrar()
      
    }
    inicializar(){
        boton.classList.add('hide')
        this.nivel=5
        this.colores={
          amarillo,
          naranja,
          violeta,
          rojo,
          gris,
          azul,
          verde,
          cafe
        }      
        
    }
    
    secuencia(){
      this.numero=Array(7).fill(0).map(id=>{
        return Math.floor(Math.random()*8)
      })
      
    }
    convertirNumeroAColor(numero){
      switch (numero){
        case 0:
          return "verde"
        case 1:
          return "gris"  
        case 2:
          return "violeta"  
        case 3:  
          return "amarillo"
        case 4:  
          return "naranja"
        case 5:  
          return "rojo"
        case 6:  
          return "azul"  
        case 7:  
          return "cafe"  
      } 
    }
    color(num){
      
      // num es el numero
      return this.convertirNumeroAColor(this.numero[num])  //convertirNumeroAColor se retorna el nombre del color
      // this.numero[num] retorna el valor en cada una de las posiciones que se esta pasando
    }
    alumbrar()
    {
      // let contador=false
      for(var a=0;a<this.nivel;a++)
      {
        let resultado= this.color(a)//me retorna el nombre del color 
        
        setTimeout(()=>{
          this.resuelve(resultado)  
        },1000*a)  
      }
      
      let curren=setInterval(finalizar,1000*5);
      // clearInterval(curren,40000)
      // clearInterval(curren,1000*9)
      function finalizar(){
        swal("Good job!", "You clicked the button!", "success", {
          button: "Aww yiss!",
          
        });
        boton.classList.remove('hide')
        clearInterval(curren,1000)
      }
      
    } 
    resuelve(resultado)
    {
      
      this.colores[resultado].classList.add('light')
      setTimeout(()=>{
        this.apagar(resultado)
      },350)  
      //
      // swal("Good job!", "You clicked the button!", "success", {
      //   button: "Aww yiss!",
      // });
      
    }
    apagar(resultado){
      this.colores[resultado].classList.remove('light')  
    }
    //a
  }

  function empezar(){
    juego=new Juego()
  }
  
$(document).ready(() => {
  var prota = document.getElementById("prota");
  var alerta = document.getElementById("alerta");
  var enemigo = document.getElementById("enemigo");
  var contadorEnAccion;
  var contadorprota;
  var contadorEnemigo;
  let date;
  var click=0;
  var aviso='You Lost!';
  document.onmousedown = () => {
    date = new Date();
    contadorprota = milisegundos(date);
    if(click==0)resumen();
    click++;
    document.onmousedown = null;
  };

  AparecerAlerta();
  function AparecerAlerta() {
    setTimeout(() => {
      alerta.style.display = "block";
      date = new Date();
      contadorEnAccion = milisegundos(date);
      contadorEnemigo = milisegundos(date) + getRandomInt(0, 999);

      setTimeout(() => {
        alerta.style.display = "none";
      }, 250);

      setTimeout(() => {
      
        if(click==0)resumen();
        document.onmousedown = null;
      }, 999);
    }, getRandomInt(0.5, 7) * 1000);
  }

  resumen = () => {
    
    console.log(contadorEnAccion);
    console.log(contadorprota);
    console.log(contadorEnemigo);
    let espadas=document.getElementById('rafaga');
  if(contadorEnAccion==undefined){
    mostrarVentana();
  return
  }
  let audio=new Audio('./aud/atack.mp3');
     
  audio.play();
  espadas.style.display='block';
    
      setTimeout(()=>{
      
        if (contadorEnAccion <= contadorprota) {
          if (contadorEnemigo > contadorprota) {
            aviso = "You Win!";
            win();
          } else if (contadorEnemigo == contadorprota) {
            
            aviso ="There is an equalization of power/nThe game will be repeated shortly";
        
              setTimeout(() => {
              window.location = "nivel2.html";
            }, 5000);
          }else{
            lost();
          }
        } else{
          lost();
        }

        espadas.style.display='none';
        audio.pause();
        mostrarVentana();
      },2000);
    


  };

win=()=>{
  prota.innerHTML=`<img src="./jpgs/protaw.png">`;
  enemigo.innerHTML=`<img src="./jpgs/enemyd2.png">`;
  enemigo.style.height='40%';
  enemigo.style.width='27%';
  enemigo.style.top='60%';
  prota.style.left='55%';
}

lost=()=>{
  prota.innerHTML=`<img src="./jpgs/protad.png">`;
  enemigo.innerHTML=`<img src="./jpgs/enemyw2.png">`;
  prota.style.height='40%';
  prota.style.width='25%';
  prota.style.top='60%';
  prota.style.left='15%';
  enemigo.style.left='35%';
}


  function mostrarVentana(){
    let body = `
    <h6>${aviso}</h6>
    `;
    let footer = `
    <button type="button" class="btn btn-primary" onclick="window.location='nivel2.html'">Repetir</button>   
    <button type="button" class="btn btn-secondary" onclick=" $('#Ventana').modal('hide')">Cerrar</button>`;

    $("#modalBody").html(body);
    $("#modalFooter").html(footer);

    $("#Ventana").modal("show");
    document.getElementById("regresar").style.display = "block";
  }

  function milisegundos(objeto) {
    return (
      objeto.getHours() * 360000 +
      objeto.getMinutes() * 60000 +
      objeto.getSeconds() * 1000 +
      objeto.getMilliseconds()
    );
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
});

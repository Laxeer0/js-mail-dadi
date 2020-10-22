/*Seleziono la sezione*/
var btnmail = document.getElementById("mail-btn");
var btndadi = document.getElementById("dadi-btn");
var dadisec = document.getElementById("dadisec")
var mailsec= document.getElementById("mailsec")

btnmail.addEventListener('click', function(){

 if (dadisec.style.display == "block") {
   dadisec.style.display = "none";
 }

 mailsec.style.display="block";

})

btndadi.addEventListener('click', function(){

  if (mailsec.style.display == "block") {
    mailsec.style.display = "none";
  }

  dadisec.style.display="block";

})

/*Controllo Email*/
var auth_email = ["demo@demo.it","123@abc.it","sonobello@ciao.it","homolta@autostima.it"];
var btncalcola = document.getElementById("calcolaemail");

btncalcola.addEventListener('click',function(){

  var emailnotauth = document.getElementById("email").value;

  for (var i = 0; i<auth_email.length; i++ ) {

    if (emailnotauth == auth_email[i]){

      var authorization = 1;
      break;

    }else{
      var authorization = 0;
    }
  }

  if(authorization == 1){
    console.log("email autorizzata");
    document.getElementById("alert-succ").style.display = "block";
    document.getElementById("emailinput").style.display = "none";
  }else{

      console.log("email non autorizzata");
      document.getElementById("alert-err").style.display = "block";
  }


})

/*Dadi*/
var btnroll = document.getElementById("btn-roll");

btnroll.addEventListener('click', function(){

  var imgdadoio = document.getElementById("imgdadoio");
  var imgdadoia = document.getElementById("imgdadoia");

  var numdadoio = Math.floor(Math.random() * 6) + 1;
  var numdadoia = Math.floor(Math.random() * 6) + 1;

  document.getElementById("dadiout").style.display = "block";


  document.getElementById("dado-alert-class").classList.remove("alert-success");
  document.getElementById("dado-alert-class").classList.remove("alert-danger");
  document.getElementById("dado-alert-class").classList.remove("alert-warning");

  if(numdadoio > numdadoia){

    document.getElementById("dado-alert-class").classList.add("alert-success");
    document.getElementById("dado-alert").style.display = "block";
    document.getElementById("dado-alert-mess").innerHTML = "Complimenti, hai vinto!";

  } else if(numdadoio < numdadoia){

    document.getElementById("dado-alert-class").classList.add("alert-danger");
    document.getElementById("dado-alert").style.display = "block";
    document.getElementById("dado-alert-mess").innerHTML = "Mi dispiace, hai perso!";

  } else if(numdadoio == numdadoia){

    document.getElementById("dado-alert-class").classList.add("alert-warning");
    document.getElementById("dado-alert").style.display = "block";
    document.getElementById("dado-alert-mess").innerHTML = "Pareggiato!";

  }

  imgdadoio.src="img/dadi/"+ numdadoio + ".png";
  imgdadoia.src="img/dadi/"+ numdadoia + ".png";


})

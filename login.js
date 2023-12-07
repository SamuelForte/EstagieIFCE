
var bntLogin = document.querySelector("#btnLogin");
var student = document.querySelector("#btnStudent");
var btnSupervisor = document.querySelector("#btnSupervisor");

student.addEventListener("click", function () {
    student.style.backgroundColor = "green";
    student.style.color = "#fff";


    btnSupervisor.style.backgroundColor = "grey";
    btnSupervisor.style.color = "#fff";
});

btnSupervisor.addEventListener("click", function () {
    btnSupervisor.style.backgroundColor = "green";
    btnSupervisor.style.color = "#fff";


    student.style.backgroundColor = "grey";
    student.style.color = "#fff";
});


console.log(bntLogin);


bntLogin.addEventListener("click", function () {

   var matricula = document.querySelector("#loginMatricula").value;
   var senha = document.querySelector("#loginPassword").value;
   
   if(matricula == "" || senha == ""){
      alert("Preencha todos os campos");
      return;
    }

});

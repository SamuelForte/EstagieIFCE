var email = document.getElementById("email");
var username = document.getElementById("name");
var matricula = document.getElementById("loginMatricula");
var password = document.getElementById("loginPassword");

console.log({
   email, username, matricula, password
})


var btnAccunt = document.getElementById("btnAccunt");

console.log(btnAccunt);



var bntLogin = document.querySelector("#btnLogin");
var student = document.querySelector("#btnStudentc");
var btnSupervisor = document.querySelector("#btnSupervisorc");

var role = "";

student.addEventListener("click", function () {
    role = "STUDENT";
    student.style.backgroundColor = "green";
    student.style.color = "#fff";


    btnSupervisor.style.backgroundColor = "grey";
    btnSupervisor.style.color = "#fff";
});

btnSupervisor.addEventListener("click", function () {
    role = "SUPERVISOR";
    btnSupervisor.style.backgroundColor = "green";
    btnSupervisor.style.color = "#fff";


    student.style.backgroundColor = "grey";
    student.style.color = "#fff";
});


btnAccunt.addEventListener("click", function () {
    console.log("entrou");
   if (validation()) {
    console.log("entrou");
       alert("Preencha todos os campos");
       return;
   }

    // fazerLogin();
    getStudents();
});


function validation(){
    return false;
}

async function fazerLogin() {
    console.log({
        "email": email.value,
        "name": username.value,
        "role": role,
        "plate": matricula.value,
        "password": password.value

    })
    await fetch("https://auth-wkspcs-projects.vercel.app/api/students", {
         method: "GET",
         headers: {
              "Content-Type": "application/json",
         },
         body: JSON.stringify({
            "email": email.value,
            "name": username.value,
            "role": role,
            "plate": matricula.value,
            "password": password.value
         })
    }).then(function (response) {
        console.log(response);
    });
}

async function getStudents() {
    await fetch("https://auth-wkspcs-projects.vercel.app/api/students", {
         method: "GET",
         headers: {
              "Content-Type": "application/json",
         },
    }).then(function (response) {
        console.log(response);
    });

}

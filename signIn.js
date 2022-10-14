function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
document.querySelector("#form1").addEventListener("submit",getdata)
let spdata = JSON.parse(localStorage.getItem("userData")) || [];

function getdata(){
  event.preventDefault(); 

  let obj ={};

  let name = document.querySelector("#name").value
  let email = document.querySelector("#email").value
  let password = document.querySelector("#password").value
  console.log(name)

  obj.name =name;
  obj.email =email;
  obj.password = password;

  spdata.push(obj);

  console.log(spdata);

  alert("sign up success")

  localStorage.setItem("userData", JSON.stringify(spdata))

  window.location.href = "index.html"

}
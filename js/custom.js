const element = document.getElementById("submit")
element.addEventListener("click", function JSform(){
  let x = document.forms["myForm"]["vardas"].value;
  let name=document.getElementById("fname").value;
  let lastname=document.getElementById("lname").value;
  let mail=document.getElementById("mail").value;
  let address=document.getElementById("adress").value;
  let phone=document.getElementById("phone").value;
  let atsakymas1=document.getElementById("kl1").value;
  let atsakymas2=document.getElementById("kl2").value;
  let atsakymas3=document.getElementById("kl3").value;
  console.log("Vardas:",name);
  console.log("Pavarde:",lastname);
  console.log("Mail:",mail);
  console.log("Address",address);
  console.log("Phone",phone);
  if (isNaN(atsakymas1)){
    console.log("Irasete ne numeri");
  } else if(isNaN(atsakymas2)) {
    console.log("Irasete ne numeri");
  } else if(isNaN(atsakymas3)) {
    console.log("Irasete ne numeri");
  } else {
    let atsakymas=Number(atsakymas1) + Number(atsakymas2) + Number(atsakymas3)
    console.log(name, lastname,":", atsakymas/3)
  }
  alert("Pateikta")
});

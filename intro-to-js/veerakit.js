function askMyName() {
    const name = prompt("Who are you, please tell me.");
 
    if(name != null) {
       document.getElementById("myName").innerHTML = "My name is " + name;
    }
    document.getElementById("container").style="background-color: rgb(9, 9, 199)";
 }
 
 function helloWorld() {
 const h1message = document.getElementById("myName").innerHTML;
 // ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
    alert(h1message + ' กู้ได้ทุกอย่างยกเว้นใจเธอ');
    document.getElementById("container").style="background-color: rgb(245, 50, 24)";
 }

 function calAge() {
    const personAge = prompt("Tell me the truth of your birth.");
    const currentYear = 2022;

    if(personAge) {
       const result = (currentYear-personAge);
       alert("Congratulation, you have survived on this cruel world for "+ result + " years" + "\nPlease keep moving forward");
    }
 }

 function loadProfile() {
   const personName = "Veerakit";
   const province = "Songkhla";
    if(province,personName) {
       document.getElementById("my-name").innerHTML = personName;
       document.getElementById("my-province").innerHTML = province;
    }
 }
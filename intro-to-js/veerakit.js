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
    alert(h1message + ' กู้ทุกอย่างยกเว้นระเบิด');
    document.getElementById("container").style="background-color: rgb(245, 50, 24)";
 }
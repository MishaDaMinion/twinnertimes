function Go (){
    username = document.getElementById("input1").value;
    localStorage.setItem("input1",username);
    window.location = "twinner_room.html";
    
 }
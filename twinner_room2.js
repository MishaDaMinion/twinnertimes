// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB35B34RMvyOzHwgIYwF__E2TAcptdTRq4",
    authDomain: "twinnertimes.firebaseapp.com",
    projectId: "twinnertimes",
    storageBucket: "twinnertimes.appspot.com",
    messagingSenderId: "118224376233",
    appId: "1:118224376233:web:f046472ed7bf90ea22b4b8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 
  //ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("input1");
document.getElementById("user_name").innerHTML = "Welcome: " + user_name +"!";

function AddUser(){
  room_name = document.getElementById("roomtitle").value;

  firebase.database().ref("/").child(room_name).update({
        purpose : "add room name"
  });
localStorage.setItem("room_name", room_name);
window.location ="twinner_page1.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name){
  localStorage.setItem("room_name", name);
  window.location = "twinner_page1.html";
}

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("input1");
  window.location = "twinner.html";
  document.getElementById("input1").value = "";
}
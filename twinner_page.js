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

  user_name = localStorage.getItem("input1");
     room_name = localStorage.getItem("room_name");
function sendData(){
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name:user_name,
message:message,
like:0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tick = "<h4>"+ name + "<img class='user_tick' src='tick.png'> </h4>";
message_label = "<h4>"+ message +"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick'updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
text = name_with_tick + message_label + like_button + span_with_tag;
document.getElementById("output").innerHTML += text;
//End code
      } });  }); }
getData();

function updateLike(message_id){
button_id =message_id;
likes = document.getElementById(button_id).value;
UpdateLikes = Number(likes) + 1;

firebase.database().ref(room_name).child(message_id).update({
like:UpdateLikes
});
}


function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "twinner.html";
      document.getElementById("input1").value = "";
      
}

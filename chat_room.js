const firebaseConfig = {
    apiKey: "AIzaSyATcs8cU6yhwJ6P-lZjcWfOeUzgLy3fNVM",
    authDomain: "lets-chat-3d925.firebaseapp.com",
    databaseURL: "https://lets-chat-3d925-default-rtdb.firebaseio.com",
    projectId: "lets-chat-3d925",
    storageBucket: "lets-chat-3d925.appspot.com",
    messagingSenderId: "450179422595",
    appId: "1:450179422595:web:196d5795cff715d44abeb6"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);  
//ADD YOUR FIREBASE LINKS HERE
function addRoom(){
    room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
         purpose : "adding user"

     });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
    });});}
getData();

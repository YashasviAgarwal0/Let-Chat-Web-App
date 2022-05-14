var firebaseConfig = {
  apiKey: "AIzaSyAcjqsEkMnglq8iGazAiu5mcjERAM4o2xc",
  authDomain: "project-chatapp-bda70.firebaseapp.com",
  databaseURL: "https://project-chatapp-bda70-default-rtdb.firebaseio.com",
  projectId: "project-chatapp-bda70",
  storageBucket: "project-chatapp-bda70.appspot.com",
  messagingSenderId: "322071201981",
  appId: "1:322071201981:web:117559282d98acd0a10fd4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function searchRoom()
{
   room_name = document.getElementById("room_name").value;

   firebase.database.ref("/").child(room_name).update({
    purpose : "Add Room"
   });

   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_names - " + Room_names);
      var row = "<div class='Room_names' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
   });
 }
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

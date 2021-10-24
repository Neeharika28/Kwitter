var firebaseConfig = {
      apiKey: "AIzaSyA_wcxVWGB2pc7M-MmAKVvLa9NuXHic0BE",
      authDomain: "kwitter-class-project-cdaf6.firebaseapp.com",
      databaseURL: "https://kwitter-class-project-cdaf6-default-rtdb.firebaseio.com",
      projectId: "kwitter-class-project-cdaf6",
      storageBucket: "kwitter-class-project-cdaf6.appspot.com",
      messagingSenderId: "291711625727",
      appId: "1:291711625727:web:7adc6a4146cbb4089b1fca",
      measurementId: "G-BZE2T3SC5J"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();



function redirectToRoomName(name) {
      console.log("name");
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Room");
      window.location("index.html")
}
var firebaseConfig = {
    apiKey: "AIzaSyCQSEhHi1fvALTok1pYBnnjCbVpvR2wW0o",
    authDomain: "lets-chat-9689c.firebaseapp.com",
    projectId: "lets-chat-9689c",
    storageBucket: "lets-chat-9689c.appspot.com",
    messagingSenderId: "374802491336",
    appId: "1:374802491336:web:e39da288223e35852302fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_room.html";
}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML =
                "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
                //End code
            });
        });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

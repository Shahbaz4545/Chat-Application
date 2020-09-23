
/******  Chat App Start   ****/
let logout = () =>{
    window.location.replace('index.html');
      // firebase.auth().signOut()
      // .then(() => {
      //   console.log("Log Out Successfully")
      //   window.location = "logo.html";
      // })
      // .catch((error) => {
      //   console.log(error.message)
      // })
    }

let name = prompt("Enter Your Name");
let sendMessage = () => {
    var message = document.getElementById('msg').value;
    // console.log(msg.value)
    var database = firebase.database().ref('Messages');
    var key = database.push().key;
    var sms = {
        Sender: name,
        Message: message,
        key: key
    }
    database.child(key).set(sms);
    message.value = "";
    return false;
}

// Listen for incoming messages
    firebase.database().ref('Messages').on('child_added', function (snapshot) {
    // console.log(snapshot.val())
    var item = "";
    // give each message unque Id
    item += "<li id='dltMessage"+ snapshot.key +"'>";
    // Show delete Button If Message Is Send by Me
    if(snapshot.val().Sender == name){
      item += "<button data-id='" + snapshot.key + "' onclick='deleteMessage(this)'>";
      item += " Delete ";
      item += "</button>";
    }
    item += " " + snapshot.val().Sender + " : " + " " +snapshot.val().Message;
    item += "</li>";
    document.getElementById('ul').innerHTML += item;
});

function deleteMessage(self){
  // get message ID
  var messageId = self.getAttribute("data-id");
  // Delete message
  firebase.database().ref('Messages').child(messageId).remove();
}
  // Attach Listner for delete message
  firebase.database().ref('Messages').on("child_removed", function(snapshot){
    // remove message node
    document.getElementById("dltMessage" + snapshot.key).innerHTML = "This message has been removed";
  });

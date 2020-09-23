/***** Sign Up ******/
let signup = () => {
    let email = document.getElementById("signupEmail")
    let password = document.getElementById("signupPassword")

    firebase.auth().createUserWithEmailAndPassword(signupEmail.value, signupPassword.value)
    .then((result) => {
        console.log(result)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      }) 
    email.value = "";
    password.value = "";
}
/***** Login Up ******/

let login = () => {
    var email = document.getElementById("login_email")
    var password = document.getElementById("login_password")
    firebase.auth().signInWithEmailAndPassword(login_email.value, login_password.value)
    .then((result) => {
        window.location.replace('chat.html');
        // console.log("User Login Successfully")
        console.log(result)
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });
}

/******  Facebook Login   ****/

let facebook_login = () =>{
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        var user = result.user;
        console.log("User===>",user)
        window.location.replace('chat.html');
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(error.message)

      });

}

/******  Facebook LogOut   ****/

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

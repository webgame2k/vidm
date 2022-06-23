// Find
function findUser() {
  var u = document.getElementById("username");
  var j = document.getElementById("joindate");
  var v = document.getElementById("vids");
  var p = document.getElementById("pfp");
  var q = document.getElementById("quote");
  var f = document.getElementById("findId");
  
  var pr = "images/pfpz/"

  // WebGame2k
  if (f.value=="1") {
     u.innerHTML = "<a href='mailto:anikenechi928@gmail.com'>WebGame2k</a>"
     j.innerHTML = "June 2002"
     v.innerHTML = "3"
     q.innerHTML = "im a lazy moron."
     p.src = pr+"pfp00.png"
  }
  // Test user
  else if (f.value=="2") {
     u.innerHTML = "Heisenberg"
     j.innerHTML = "June 2002"
     v.innerHTML = "0"
     q.innerHTML = "I am the danger."
     p.src = pr+"pfp01.png"
  }
  // cant find.
  else {
     u.innerHTML = "user"
     j.innerHTML = "June 1, 2000"
     v.innerHTML = "0"
     q.innerHTML = "If you see me, it means you entered a ID that doesnt exist."
     p.src = pr+"default-pfp.png"   
  }

}

// Popup
function showUser() {
  window.open("user.html", "", "width=600,height=500");
}
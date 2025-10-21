// Lightweight preview password gate (client-side).
// NOTE: For preview only; not real security.

(function(){
  var REQUIRED = "Mheza2025"; // change anytime
  try {
    var entered = sessionStorage.getItem("mheza_pw") || "";
    if(!entered){
      entered = prompt("Enter preview password:");
      if(!entered){ window.location.href="about:blank"; return; }
      sessionStorage.setItem("mheza_pw", entered);
    }
    if(entered !== REQUIRED){
      alert("Incorrect password.");
      sessionStorage.removeItem("mheza_pw");
      window.location.href = "about:blank";
    }
  } catch(e){}
})();

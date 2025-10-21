// Lightweight preview password gate (client-side).
// NOTE: This is only to discourage casual access. Not secure.
// For proper protection, use Next.js + Vercel Edge Middleware.
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
  } catch(e){ /* ignore */ }
  // Book/Pay button
  var btn = document.getElementById("bookBtn");
  if(btn){
    btn.addEventListener("click", function(e){
      e.preventDefault();
      // Use the iKhokha Payment Gateway link (not the HTML embed)
      var payLink = "https://pay.ikhokha.com/mheza-engineering/mpr/mheza4hire";
      window.location.href = payLink;
    });
  }
})();

document.getElementById("loginForm").addEventListener("submit", function(event){
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let errorMsg = document.getElementById("error-msg");

  // Usuario y contraseña de prueba
  const user = "admin";
  const pass = "1234";

  if(username === user && password === pass){
    alert("✅ Le damos la bienvenida a la chica con los ojos y la sonrisa mas hermosa");
    window.location.href = "inicio.html"; // redirige si es correcto
  } else {
    errorMsg.textContent = "❌ Usuario o contraseña incorrectos";
  }
});

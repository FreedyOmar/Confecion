// Animación de la carta
window.addEventListener("load", () => {
  const stage = document.querySelector('.stage');
  stage.classList.add('open');

  // Después de 25 segundos, mostrar video a pantalla completa
  setTimeout(() => {
    // Ocultar el texto de la carta
    document.getElementById('texto').style.display = 'none';
    
    // Mostrar el div del video a pantalla completa
    const videoEl = document.getElementById('video');
    videoEl.style.display = 'flex'; // usar flex para centrar el video
    
    // Reproducir automáticamente
    const vid = videoEl.querySelector("video");
    vid.play().catch(err => {
      console.log("El navegador bloqueó el autoplay:", err);
    });
  }, 25000); // tiempo en ms antes de que aparezca el video
});

// Login
document.getElementById("loginForm")?.addEventListener("submit", function(event){
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let errorMsg = document.getElementById("error-msg");

  // Usuario y contraseña de prueba
  const user = "admin";
  const pass = "1234";

  if(username === user && password === pass){
    alert("✅ Le damos la bienvenida a la chica con la mirada y la sonrisa mas hermosa");
    window.location.href = "inicio.html"; // redirige si es correcto
  } else {
    errorMsg.textContent = "❌ Usuario o contraseña incorrectos";
  }
});

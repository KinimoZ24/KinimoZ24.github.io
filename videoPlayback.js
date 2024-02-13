function myFunction() {
    var video = document.getElementById("myVideo"); 
    var btn = document.getElementById("myBtn"); 
  
    // Update textContent, and aria-pressed attribute for screenreaders
    if (video.paused) {
      video.play(); 
      btn.textContent = "Pause";
      btn.setAttribute('aria-pressed', 'true');
    } else {
      video.pause(); 
      btn.textContent = "Play";
      btn.setAttribute('aria-pressed', 'false');
    }
  }
  
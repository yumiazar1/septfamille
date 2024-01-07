function togglePopup() {
    var popup = document.getElementById('popup-menu');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
  }
  
  // Close the popup if the user clicks outside of it
  window.onclick = function(event) {
    var popup = document.getElementById('popup-menu');
    if (event.target !== popup && !popup.contains(event.target)) {
      popup.style.display = 'none';
    }
  }
  

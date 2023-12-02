// Function to simulate typewriter effect
function typeWriterEffect(text, element, speed) {
    let i = 0;
    return setInterval(function() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
      } else {
        element.innerHTML = ''; // Clear the content
        i = 0; // Reset the counter to loop the text
      }
    }, speed);
  }
  
  // Get the element where the typewriter effect will be displayed
  const typewriterElement = document.getElementById('typewriter');
  
  // Text to be displayed with typewriter effect
  const textToType = "Your new favorite calendar 🗓️ app";
  
  // Speed of typing (adjust this value to change typing speed)
  const typingSpeed = 150; // in milliseconds
  
  // Trigger the typewriter effect
  const typingInterval = typeWriterEffect(textToType, typewriterElement, typingSpeed);
  
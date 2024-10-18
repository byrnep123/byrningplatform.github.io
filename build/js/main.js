const initApp =() => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }
    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)

function sendEmail() {
    window.location.href = "mailto:patrick@byrningplatform.com";
  }
 
  document.addEventListener('DOMContentLoaded', function () {
    const words = ["Build", "Inspire", "Grow"];
    let index = 0;
    const changingText = document.getElementById('changing-text');

    setInterval(function () {
        // Step 1: Fade out the text using Tailwind's opacity-0 class
        changingText.classList.add('opacity-0');

        // Step 2: Wait for the fade-out transition to complete before changing text
        setTimeout(function () {
            index = (index + 1) % words.length;  // Cycle through the words
            changingText.textContent = words[index];

            // Step 3: Fade back in the new word by removing opacity-0
            changingText.classList.remove('opacity-80');
        }, 500);  // Match the delay to the transition duration (0.5s)
    }, 3500);  // Change word every 3.5 seconds
});
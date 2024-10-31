const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };
  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);

function sendEmail() {
  window.location.href = "mailto:patrick@byrningplatform.com";
}

document.addEventListener("DOMContentLoaded", function () {
  const words = ["Build", "Inspire", "Grow"];
  let index = 0;
  const changingText = document.getElementById("changing-text");

  setInterval(function () {
    // Step 1: Fade out the text using Tailwind's opacity-0 class
    changingText.classList.add("opacity-0");

    // Step 2: Wait for the fade-out transition to complete before changing text
    setTimeout(function () {
      index = (index + 1) % words.length; // Cycle through the words
      changingText.textContent = words[index];

      // Step 3: Fade back in the new word by removing opacity-0
      changingText.classList.remove("opacity-80");
    }, 500); // Match the delay to the transition duration (0.5s)
  }, 3500); // Change word every 3.5 seconds
});
const quotes = [
  "Working with Patrick didn’t just accelerate our business; it redefined our entire strategy. His insights transformed how we approached growth, turning obstacles into opportunities and pushing us to scale faster than we ever imagined.",
  "Patrick's ability to articulate and present information, especially when speaking with customers, is unmatched. Whether it was during contract negotiations or product discussions, he consistently conveyed ideas with clarity and precision, making him a key asset to our team’s success",
  "Patrick's strategic insights didn't help us just make another promise to our customers, his translation to tactics helped us keep them.",
  "Patrick was instrumental in advancing category fluency, helping us better understand customer demand, refine inventory strategies, and optimize our pricing approach.",
  "Patrick's leadership as a forward-thinking and proactive Product Manager, coupled with his technical acumen, focus and collaborative demeanor, drove innovation and served as a catalyst to the business -- quickly establishing deep rapport across a variety of stakeholders.",
  "Patrick is a visionary product leader who excels in aligning product, engineering, and design teams towards ambitious goals.",
  "Patrick demonstrats an exceptional ability to collaborate seamlessly with engineering, design, and product teams, ensuring that all perspectives were integrated into the development process",
];

let currentQuoteIndex = 0;

function rotateQuotes() {
  const quoteElement = document.getElementById("quote-text");
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  quoteElement.innerText = quotes[currentQuoteIndex];
}

setInterval(rotateQuotes, 5000);

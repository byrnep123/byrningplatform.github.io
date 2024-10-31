function sendEmail() {
  window.location.href = "mailto:patrick@byrningplatform.com";
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscription-form");
  const message = document.getElementById("subscription-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;

    // Here, you would typically send the email to your server or a third-party service
    // For this example, we'll just simulate a successful subscription

    // Simulating an API call
    setTimeout(() => {
      message.textContent = `Thank you! ${email} has been subscribed.`;
      form.reset();
    }, 1000);

    message.textContent = "Subscribing...";
  });
});

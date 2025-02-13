document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("lead-form");
    const messageDiv = document.getElementById("submitMessage");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Gather form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        country: document.getElementById("country").value,
      };
  
      // Store form data in local storage
      localStorage.setItem("mbbsLead", JSON.stringify(formData));
  
      // Display animated success message
      messageDiv.textContent = "Yes working";
      messageDiv.classList.remove("hidden");
      messageDiv.classList.add("animate__animated", "animate__fadeIn");
  
      // Remove the message after 3 seconds with fade-out effect
      setTimeout(() => {
        messageDiv.classList.remove("animate__fadeIn");
        messageDiv.classList.add("animate__fadeOut");
        setTimeout(() => {
          messageDiv.classList.add("hidden");
          messageDiv.classList.remove("animate__fadeOut");
        }, 1000);
      }, 3000);
    });
  });
  
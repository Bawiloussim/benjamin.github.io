
  // Validation du formulaire de contact
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi par défaut

    // Récupération des champs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Vérification des champs
    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Affichage d'un message de confirmation
    alert("Thank you, " + name + "! Your message has been sent successfully.");
    document.querySelector("form").reset(); // Réinitialise le formulaire
  });

  // Fonction pour valider l'email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const skills = document.querySelectorAll(".skill");

  skills.forEach(skill => {
    skill.addEventListener("mouseover", () => {
      skill.style.transform = "scale(1.1)";
      skill.style.transition = "transform 0.3s ease";
    });

    skill.addEventListener("mouseout", () => {
      skill.style.transform = "scale(1)";
    });
  });

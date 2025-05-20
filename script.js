const validUsers = {
  "2468": { dob: "12-04-1964", name: "Frank", password: "Africa Twin" },
  "3657": { dob: "30-05-1964", name: "Chrisje", password: "Sonneke69" },
  "5422": { dob: "29-03-1964", name: "Filip", password: "Noordkaap" },
  "4582": { dob: "03-06-1964", name: "Kurt", password: "MilaLili" },
  "1496": { dob: "21-01-1965", name: "Luc", password: "Molecule" },
  "4125": { dob: "09-09-1965", name: "Bruno", password: "Insomnia" },
  "3654": { dob: "25-12-1967", name: "Christian", password: "Khadaffi" },
  "5871": { dob: "02-08-1967", name: "Isabelle", password: "Iberico" },
  "5691": { dob: "03-10-1968", name: "Katrien", password: "Kakkernest" },
  "7851": { dob: "16-08-1966", name: "Trui", password: "Kwebbel" },
  "4532": { dob: "16-07-1968", name: "Heidi", password: "Windmolen" }
};

function isValidDateFormat(dob) {
  return /^\d{2}-\d{2}-\d{4}$/.test(dob);
}

document.getElementById("access-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const dob = document.getElementById("dob").value.trim();
  const code = document.getElementById("code").value.trim();
  const error = document.getElementById("error");

  if (!isValidDateFormat(dob)) {
    error.textContent = "Gebruik formaat DD-MM-YYYY.";
    error.classList.remove("hidden");
    return;
  }

  if (validUsers[code] && validUsers[code].dob === dob) {
    const user = validUsers[code];
    // Optioneel: naam opslaan in sessionStorage
    sessionStorage.setItem("username", user.name);
    sessionStorage.setItem("password", user.password); 

    window.location.href = "launch.html";
  } else {
    error.textContent = "You are not invited! Try again.";
    error.classList.remove("hidden");
  }
});

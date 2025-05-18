const validUsers = {
  "2468": { dob: "12-04-1964", name: "Frank" },
  "3657": { dob: "30-05-1964", name: "Chrisje" },
  "5422": { dob: "29-03-1964", name: "Filip" },
  "4582": { dob: "03-06-1964", name: "Kurt" },
  "1496": { dob: "21-01-1965", name: "Luc" },
  "4125": { dob: "09-09-1965", name: "Bruno" },
  "3654": { dob: "25-12-1967", name: "Christian" },
  "5871": { dob: "02-08-1967", name: "Isabelle" },
  "5691": { dob: "03-10-1968", name: "Katrien" },
  "7851": { dob: "16-08-1966", name: "Trui" },
  "4532": { dob: "16-07-1968", name: "Heidi" }
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
    // Optioneel: naam opslaan in sessionStorage
    sessionStorage.setItem("username", validUsers[code].name);

    // Doorsturen naar audio pagina
    window.location.href = "audio.html";
  } else {
    error.textContent = "You are not invited! Try again.";
    error.classList.remove("hidden");
  }
});

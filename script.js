const validUsers = {
  "1234": { dob: "12-04-1964", name: "Frank" },
  "2345": { dob: "30-05-1964", name: "Chrisje" },
  "3456": { dob: "29-03-1964", name: "Filip" }
};

function isValidDateFormat(dob) {
  return /^\d{2}-\d{2}-\d{4}$/.test(dob);
}

document.getElementById("access-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const dobInput = document.getElementById("dob").value.trim();
  const codeInput = document.getElementById("code").value.trim();
  const errorMsg = document.getElementById("error");

  const user = validUsers[codeInput];

  if (!isValidDateFormat(dobInput)) {
    errorMsg.textContent = "Use format DD-MM-YYYY.";
    errorMsg.classList.remove("hidden");
    return;
  }

  if (user && user.dob === dobInput) {
    // Redirect naar timerpagina met naam in querystring
    const encodedName = encodeURIComponent(user.name);
    window.location.href = `timer.html?name=${encodedName}`;
  } else {
    errorMsg.textContent = "You are not invited!";
    errorMsg.classList.remove("hidden");
  }
});

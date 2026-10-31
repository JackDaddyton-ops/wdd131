const form = document.querySelector("#eventForm");
const codeContainer = document.querySelector("#codeContainer");
const codeLabel = document.querySelector('label[for="code"]');
const code = document.querySelector("#code");
const type = document.querySelector("#type");
const output = document.querySelector("#output");


// Show codeContainer if needed and update its content based on studentOrGuest
function updateCodeField() {
    let studentOrGuest = "hi";
    const value = type.value;
    if (value === "student") {
        codeContainer.hidden = false;
        studentOrGuest = "Student I#";
    }
    else if (value === "guest") {
        codeContainer.hidden = false;
        studentOrGuest = "Access Code";
    }
    else {
        codeContainer.hidden = true;
        studentOrGuest = "";
    }
    codeLabel.textContent = studentOrGuest;

}
type.addEventListener("change", updateCodeField);
updateCodeField();

// Ensure they choose a date later than the current date
function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const buyerType = form.type.value;
    const availableDate = form.eventDate.value;
    const submittedCode = form.code.value.trim();

    // Validate the input

    if (submittedCode.length != 9 && buyerType === "student") {
        output.textContent = "Student I# must be 9 digits.";
        return;
    }
    if (submittedCode != "EVENT131" && buyerType === "guest") {
        output.textContent = "invalid access code.";
        return;
    }

    if (isPastDate(availableDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${buyerType}</p>
  <p>${availableDate}</p>
  `;

    form.reset();
    updateCodeField();
});
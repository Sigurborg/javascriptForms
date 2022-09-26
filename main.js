//form submission

const form = document.querySelector('Form')
console.log("form", form)
//prevent default the browser will not refresh the paige
form.addEventListener('submit', (event) => {
    console.log("form Submission")
})
const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
  const username = document.getElementById('name');
  const emailAddress = document.getElementById('email');
  if (username.value === "") {
    alert("Please enter your username.");
    username.focus();
    return false;
  }
  if (emailAddress.value === "") {
    alert("Please enter your email address.");
    emailAddress.focus();
    return false;
  }
}

submitBtn.addEventListener('click', validate);

<script>
const form = document.getElementById('myForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('confirmError').textContent = '';

  let valid = true;

  if (name.value.trim() === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value)) {
    document.getElementById('emailError').textContent = 'Enter a valid email.';
    valid = false;
  }

  if (password.value.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
    valid = false;
  }

  if (confirm.value !== password.value) {
    document.getElementById('confirmError').textContent = 'Passwords do not match.';
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});
</script>

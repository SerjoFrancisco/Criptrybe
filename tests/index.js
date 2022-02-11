const loginDiv = document.querySelector('.login');
const registerDiv = document.querySelector('.register');
const appDiv = document.querySelector('.app');

document.addEventListener('DOMContentLoaded', () => {
  loginDiv.style.display = 'none';
  appDiv.style.display = 'none';
  registerDiv.querySelector('#create').addEventListener('click', createUser);
  loginDiv.querySelector('#login').addEventListener('click', login);
});

function createUser() {
  loginDiv.style.display = 'block';
  registerDiv.style.display = 'none';
  const username = registerDiv.querySelector('.username').value;
  const password = registerDiv.querySelector('.password').value;
  localStorage.setItem('userData', JSON.stringify({ username, password }));
}

function login() {
  const user = loginDiv.querySelector('.username').value;
  const pwd = loginDiv.querySelector('.password').value;
  const userData = JSON.parse(localStorage.getItem('userData'));
  console.log(userData);
  if(user === userData.username && pwd === userData.password) {
    window.alert('Welcome, ' + userData.username);
    loadApp();
  }
}

function loadApp() {
  loginDiv.style.display = 'none';
  registerDiv.style.display = 'none';
  appDiv.style.display = 'block';
}
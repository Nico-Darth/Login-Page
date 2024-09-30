const firebaseConfig = {
    apiKey: "AIzaSyBNpX-_su6oE6KG6yrU-Bzahwp21winWFI",
    authDomain: "login-page-94230.firebaseapp.com",
    projectId: "login-page-94230",
    storageBucket: "login-page-94230.appspot.com",
    messagingSenderId: "990060158081",
    appId: "1:990060158081:web:b7d601ef283063648f8180"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById('registerTab').addEventListener('click', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    loginForm.classList.add('exit');
    registerForm.classList.add('enter');

    document.getElementById('registerTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');

    setTimeout(() => {
        loginForm.classList.remove('active', 'exit');
        registerForm.classList.remove('enter');
        registerForm.classList.add('active');
    }, 300);
});

document.getElementById('loginTab').addEventListener('click', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    registerForm.classList.add('exit');
    loginForm.classList.add('enter');

    document.getElementById('loginTab').classList.add('active');
    document.getElementById('registerTab').classList.remove('active');

    setTimeout(() => {
        registerForm.classList.remove('active', 'exit');
        loginForm.classList.remove('enter');
        loginForm.classList.add('active');
    }, 300);
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const username = document.getElementById('username');

    let isValid = true;

    if (username.value.trim() === "") {
        username.classList.add('invalid');
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    } else {
        username.classList.remove('invalid');
        username.classList.add('valid');
        document.getElementById('usernameError').style.display = 'none';
    }

    if (email.value.trim() === "") {
        email.classList.add('invalid');
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        email.classList.remove('invalid');
        email.classList.add('valid');
        document.getElementById('emailError').style.display = 'none';
    }

    if (password.value.trim() === "") {
        password.classList.add('invalid');
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else {
        password.classList.remove('invalid');
        password.classList.add('valid');
        document.getElementById('passwordError').style.display = 'none';
    }

    if (!isValid) {
        return;
    }

    auth.createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User created:', user);
            alert('Registration Successful!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error creating user:', errorCode, errorMessage);
            alert('Error creating user:', errorCode, errorMessage);
        });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

    let isValid = true;

    if (loginEmail.value.trim() === "") {
        loginEmail.classList.add('invalid');
        document.getElementById('loginEmailError').style.display = 'block';
        isValid = false;
    } else {
        loginEmail.classList.remove('invalid');
        loginEmail.classList.add('valid');
        document.getElementById('loginEmailError').style.display = 'none';
    }

    if (loginPassword.value.trim() === "") {
        loginPassword.classList.add('invalid');
        document.getElementById('loginPasswordError').style.display = 'block';
        isValid = false;
    } else {
        loginPassword.classList.remove('invalid');
        loginPassword.classList.add('valid');
        document.getElementById('loginPasswordError').style.display = 'none';
    }

    if (!isValid) {
        return;
    }

    auth.signInWithEmailAndPassword(loginEmail.value, loginPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User logged in:', user);
            alert('Login Successful!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error logging in user:', errorCode, errorMessage);
            alert('Error logging in user:', errorCode, errorMessage);
        });
});
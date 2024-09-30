// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNpX-_su6oE6KG6yrU-Bzahwp21winWFI",
    authDomain: "login-page-94230.firebaseapp.com",
    projectId: "login-page-94230",
    storageBucket: "login-page-94230.appspot.com",
    messagingSenderId: "990060158081",
    appId: "1:990060158081:web:b7d601ef283063648f8180"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

document.getElementById('registerTab').addEventListener('click', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    // Exit animation for login form
    loginForm.classList.add('exit');
    registerForm.classList.add('enter');

    // Active tab
    document.getElementById('registerTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');

    // Trigger enter animation after the exit animation completes
    setTimeout(() => {
        loginForm.classList.remove('active', 'exit');
        registerForm.classList.remove('enter');
        registerForm.classList.add('active');
    }, 300); // Duration of exit animation
});

document.getElementById('loginTab').addEventListener('click', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    // Exit animation for register form
    registerForm.classList.add('exit');
    loginForm.classList.add('enter');

    // Active tab
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('registerTab').classList.remove('active');

    // Trigger enter animation after the exit animation completes
 setTimeout(() => {
        registerForm.classList.remove('active', 'exit');
        loginForm.classList.remove('enter');
        loginForm.classList.add('active');
    }, 300); // Duration of exit animation
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a new user
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
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
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Sign in existing user
    auth.signInWithEmailAndPassword(loginEmail, loginPassword)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User signed in:', user);
            alert('Login Successful!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error signing in user:', errorCode, errorMessage);
            alert('Error signing in user:', errorCode, errorMessage);
        });
});
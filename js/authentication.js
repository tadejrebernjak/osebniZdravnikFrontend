window.onload = function() {
    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', logout)

    if (localStorage.username) {
        document.getElementById('login-button').classList.remove('visible-header-button');
        document.getElementById('login-button').classList.add('hidden-header-button');
        document.getElementById('register-button').classList.remove('visible-header-button');
        document.getElementById('register-button').classList.add('hidden-header-button');

        document.getElementById('applications-button').classList.remove('hidden-header-button');
        document.getElementById('applications-button').classList.add('visible-header-button');
        document.getElementById('logout-button').classList.remove('hidden-header-button');
        document.getElementById('logout-button').classList.add('visible-header-button');
    }
}

function logout() {
    localStorage.removeItem('username');
    window.location.href = 'index.html';
}
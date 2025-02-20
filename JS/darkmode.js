document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }
});

document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {

    let path = window.location.pathname;

    document.body.classList.add('dark-mode');
    document.querySelector('.main').classList.add('dark-mode');
    document.querySelector('.navbar').classList.add('dark-mode');
    document.querySelector('.navbarlist').classList.add('dark-mode');
    document.querySelector('.footer').classList.add('dark-mode');
    if (path.includes('index.html')) {
        document.querySelector('.about').classList.add('dark-mode');
    } else if (path.includes('projects.html')) {
        document.querySelector('.projects').classList.add('dark-mode');
    } else if (path.includes('portfolio.html')) {
        document.querySelectorAll('.portfolioitem').forEach(item => item.classList.add('dark-mode'));
    } else if (path.includes('commissions.html')) {
        document.querySelector('.commissions').classList.add('dark-mode');
        document.querySelector('.commissioninfo').classList.add('dark-mode');
    } else if (path.includes('contact.html')) {
        document.querySelector('.socials').classList.add('dark-mode');
        document.querySelector('.emailform').classList.add('dark-mode');
    }

    localStorage.setItem('darkMode', 'enabled');
}

function disableDarkMode() {

    let path = window.location.pathname;

    document.body.classList.remove('dark-mode');
    document.querySelector('.main').classList.remove('dark-mode');
    document.querySelector('.navbar').classList.remove('dark-mode');
    document.querySelector('.navbarlist').classList.remove('dark-mode');
    document.querySelector('.footer').classList.remove('dark-mode');
    if (path.includes('index.html')) {
        document.querySelector('.about').classList.remove('dark-mode');
    } else if (path.includes('projects.html')) {
        document.querySelector('.projects').classList.remove('dark-mode');
    } else if (path.includes('portfolio.html')) {
        document.querySelectorAll('.portfolioitem').forEach(item => item.classList.remove('dark-mode'));
    } else if (path.includes('commissions.html')) {
        document.querySelector('.commissions').classList.remove('dark-mode');
        document.querySelector('.commissioninfo').classList.remove('dark-mode');
    } else if (path.includes('contact.html')) {
        document.querySelector('.socials').classList.remove('dark-mode');
        document.querySelector('.emailform').classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', 'disabled');
}
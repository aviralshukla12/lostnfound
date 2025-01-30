function showPage(page) {
    document.querySelectorAll('.container').forEach(section => section.classList.remove('active'));
    document.getElementById(page).classList.add('active');
}


function closeAllDropdowns() {
    document.querySelectorAll('.custom-dropdown-menu').forEach(menu => {
        menu.classList.remove('show');
    });
}


document.querySelectorAll('.custom-dropdown-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const dropdown = btn.nextElementSibling;
        const isVisible = dropdown.classList.contains('show');

        closeAllDropdowns();

        if (!isVisible) {
            dropdown.classList.add('show');
        }

        e.stopPropagation();
    });
});


document.addEventListener('click', () => {
    closeAllDropdowns();
});
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('hamButton');
    const sidebar = document.getElementById('navbarNav');
    let hamburgerOpen = false;

    menuButton.addEventListener('click', () => {
         if  (!hamburgerOpen) {
            sidebar.classList.add('open');
        }
        else
            sidebar.classList.remove('open');
    });
    



    // Optionally, you can also close the sidebar when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
            sidebar.classList.remove('open');
        }
    });
});

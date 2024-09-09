document.addEventListener('DOMContentLoaded', function() {
    const menuTrigger = document.getElementById('menuTrigger');
    const menu = document.getElementById('menu');
    const closeIcon = document.getElementById('closeIcon');

    if (!menuTrigger || !menu || !closeIcon) {
        console.error('Menu trigger, menu, or close icon not found.');
        return;
    }

    menuTrigger.addEventListener('click', function() {
        console.log('Menu Trigger Clicked'); // Debugging line
        menu.classList.add('show-menu'); // Add class to show menu
        closeIcon.style.display = 'block'; // Show close icon
    });

    closeIcon.addEventListener('click', function() {
        console.log('Close Icon Clicked'); // Debugging line
        menu.classList.remove('show-menu'); // Remove class to hide menu
        closeIcon.style.display = 'none'; // Hide close icon
    });
});

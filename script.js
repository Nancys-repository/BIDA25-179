// This script runs as soon as the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log("Crave It Desserts Website is Ready!");

    // Simple interaction: When the user clicks the "View Our Menu" button
    const menuBtn = document.querySelector('.btn-honey');
    
    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            alert("Our Honey & Cinnamon Menu is coming soon!");
        });
    }
});

// Simple script for social media feed interactions

// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Function to add a visual pulse effect to a button by adding/removing the 'clicked' class
    const pulseButton = button => {
        button.classList.add('clicked');
        setTimeout(() => button.classList.remove('clicked'), 600);
    };

    // Select all buttons in the post-actions sections and attach click event listeners
    document.querySelectorAll('.post-actions button').forEach(button => {
        button.addEventListener('click', function() {
            // If the button is a like button, toggle the heart icon and liked state
            if (this.classList.contains('like-btn')) {
                const icon = this.querySelector('i');
                icon.classList.toggle('far'); // Toggle outline heart
                icon.classList.toggle('fas'); // Toggle filled heart
                this.classList.toggle('liked'); // Toggle liked class for styling
            }

            // Apply the pulse effect to all buttons on click
            pulseButton(this);
        });
    });
});
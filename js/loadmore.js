document.addEventListener('DOMContentLoaded', function() {
    const loadMoreButton = document.querySelector('.btn-load-more');
    const blogEntries = document.querySelectorAll('.project-entry');

    // Hide all blog entries beyond the first three
    for (let i = 3; i < blogEntries.length; i++) {
        blogEntries[i].style.display = 'none';
    }

    // Add click event listener to the "Load more" button
    loadMoreButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Show the hidden blog entries
        for (let i = 3; i < blogEntries.length; i++) {
            blogEntries[i].style.display = 'block';
        }

        // Hide the "Load more" button after all blog entries are shown
        loadMoreButton.style.display = 'none';
    });
});

// JS for button clicks on CV section
document.addEventListener('DOMContentLoaded', function () {
    var expandButtons = document.querySelectorAll('.expand-button');

    expandButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Find the closest cv-category-content
            var cvCategoryContent = button.closest('.cv-category-content');

            // Check if cvCategoryContent is found
            if (cvCategoryContent) {
                // Toggle the 'expanded' class on the cv-category-content
                cvCategoryContent.classList.toggle('expanded');
            } else {
                console.error('CV category content not found for the clicked button.');
            }
        });
    });
});
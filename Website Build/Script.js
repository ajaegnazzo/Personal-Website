// JS for button clicks on CV section
document.addEventListener('DOMContentLoaded', function () {
    var expandButtons = document.querySelectorAll('.expand-button');

    expandButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Find the closest work entry
            var workEntry = button.closest('.work-entry');

            // Check if workEntry is found
            if (workEntry) {
                // Find the sibling with the class 'expanded-text'
                var expandedText = workEntry.nextElementSibling;

                // Check if expandedText is found
                if (expandedText && expandedText.classList.contains('expanded-text')) {
                    // Toggle the 'expanded-text' class
                    expandedText.classList.toggle('expanded-text');
                } else {
                    console.error('Expanded text not found for the clicked button.');
                }
            } else {
                console.error('Work entry not found for the clicked button.');
            }
        });
    });
});
// Import jQuery
import $ from 'jquery';
import 'jquery-match-height';

// Add a body class once page has loaded 
(function() {
    // Add a body class once page has loaded
    // Used to add CSS transitions to elems
    // and avoids content shifting during page load
    window.addEventListener('load', function() {
        document.body.classList.add('page-loaded');
    });
})();

document.addEventListener('DOMContentLoaded', function () {
    $('.icon-wrapper').matchHeight();
    $('.text-title').matchHeight();
});
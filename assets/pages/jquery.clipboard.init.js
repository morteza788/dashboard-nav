/**
 * Theme: Dastyle - Responsive Bootstrap 4 Admin Dashboard
 * Author: themes
 * Clipboard Js
 */


var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.log(e);
});

clipboard.on('error', function(e) {
    console.log(e);
});
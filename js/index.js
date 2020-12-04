$(document).ready(function(){   

var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var isPortrait = viewportHeight > viewportWidth;

$( window ).resize(onresize);

function onresize() {
        var newViewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var newViewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var hasOrientationChanged = (newViewportHeight > newViewportWidth) != isPortrait;
        var addressbarHeight = 130;

        if (!hasOrientationChanged && (newViewportHeight != viewportHeight)) {
            addressbarHeight = Math.abs(newViewportHeight - viewportHeight);
            if (newViewportHeight < viewportHeight) {
                // Android Chrome address bar has appeared
            } else {
                // Android Chrome address bar has disappeared
            }
        } else if(hasOrientationChanged) {
            // Orientation change
        }

        viewportHeight = newViewportHeight;
        viewportWidth = newViewportWidth;
        isPortrait = viewportHeight > viewportWidth;
    }
});
$lettering_small = $('#lettering_small');

var span_size = 500; // Distance from pargraph.
var thresholdToMove = 0.05; // Set a threshold for the percentage of letters to move.
var a = $lettering_small.text().split('');
var inject = '';
if (a.length) {
    $(a).each(function (i, item) {
        vd = Math.floor(Math.random() * span_size) - (span_size/2);
        hd = Math.floor(Math.random() * span_size) - (span_size/2);

        // Calculate a random number between 0 and 1
        var randomValue = Math.random();

        // Check if the random value is below the move threshold
        if (randomValue < thresholdToMove) {
            // Randomly move the letter
            inject +=
                '<span style="' +
                'top: ' + vd + 'px; ' +
                'left: ' + hd + 'px; ' +
                'color: white; ' +
                '">' + item + '</span>';
        } else {
            // Keep the letter in the same place
            inject +=
                '<span style="' +
                'top: 0; ' +
                'left: 0; ' +
                'color: white; ' +
                '">' + item + '</span>';
        }
    });

    $lettering_small.empty().append(inject);
}

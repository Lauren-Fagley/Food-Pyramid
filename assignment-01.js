
var food = [0,0,0,0,0,0];

var zones = document.getElementsByClassName('zone');

// Loop through each zone
for (var i = 0; i < zones.length; i++) {
    var leftButton = zones[i].getElementsByClassName('leftbtn')[0]; // Get left button in current zone
    var rightButton = zones[i].getElementsByClassName('rightbtn')[0]; // Get right button in current zone
    var circle = zones[i].getElementsByClassName('circle')[0]; // Get circle in current zone

    // Attach event listener to left button
    leftButton.addEventListener('click', function(event) {
        var index = Array.from(zones).indexOf(event.target.closest('.zone'));
        if (food[index] > 0) {
            food[index] = food[index] - 1;
            updateFood(index); // Pass the clicked button's target to updateFood
        }
    });

    // Attach event listener to right button
    rightButton.addEventListener('click', function(event) {
        var index = Array.from(zones).indexOf(event.target.closest('.zone'));
        food[index] = food[index] + 1;
        updateFood(index); // Pass the clicked button's target to updateFood
    });

    updateFood(i);
}

// Function to update text content of the corresponding circle with the value of food
function updateFood(index) {
    var circle = zones[index].querySelector('.circle'); // Find the circle within the zone
    circle.textContent = food[index];
}

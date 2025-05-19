document.addEventListener('DOMContentLoaded', function() {
    const myButton = document.getElementById('myButton');

    if (myButton) {
        myButton.addEventListener('click', function() {
            alert('Button Clicked!');
        });
    }
});

function openDropdown(event, dropdownID) {
    let element = event.target;
    while (element.nodeName !== "BUTTON") {
        element = element.parentNode;
    }
    var popper = Popper.createPopper(element, document.getElementById(dropdownID), {
        placement: 'bottom-start'
    });
    document.getElementById(dropdownID).classList.toggle("hidden");
    document.getElementById(dropdownID).classList.toggle("block");
}

// function onReady() {
//     var mine = document.querySelector('#mine');
//     var dropdown = document.querySelector('#dropdown');

//     mine.addEventListener('click', function() {
//         // console.log("am right here");
//         dropdown.classList.toggle('active');
//     })
// }
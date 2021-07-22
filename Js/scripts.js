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

function toggleModal(modalID) {
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById(modalID + "-backdrop").classList.toggle("flex");
} //Farm Perfomance Chat
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Farm Output'],
        ['Jan', 100],
        ['Feb', 200],
        ['March', 90],
        ['April', 120],
        ['May', 160],
        ['June', 200],
        ['July', 300],
        ['Aug', 320],
        ['Sep', 450],
        ['Oct', 400],
        ['Nov', 440],
        ['Dec', 300]
    ]);

    var options = {
        title: 'Farm Performance',
        hAxis: {
            title: 'Year',
            titleTextStyle: {
                color: '#333'
            }
        },
        vAxis: {
            minValue: 0
        }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
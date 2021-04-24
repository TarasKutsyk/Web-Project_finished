const Chart = require('chart.js');

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6,7,8,9,10],
        datasets: [{
            data: [1, 2, 2, 3, 3.5, 4, 6, 5.5, 6, 7],
            label: "Example",
            borderColor: "#ff9900",
            fill: false
        }]
    },
    options: {

    }
});

// labels: [
//     'CBD Shopping', 
//     'Federation Square', 
//     'Southbank Promenade', 
//     'Queen Victoria Market', 
//     'Crown Entertainment Complex', 
//     'Docklands & Docklands Stadium',
//     'St Kilda',
//     'National Gallery of Victoria',
//     'Melbourne Museum, Royal Exhibition Building & Carlton Gardens',
//     'Melbourne Cricket Ground'
// ],

// Setup
const CIRCLE_SCALE = 100000
const CIRCLE_NORM = 30
const data = {
    labels: [
        'CBD Shopping', 
        'Federation Square', 
        'Southbank Promenade', 
        'Queen Victoria Market', 
        'Crown Entertainment Complex', 
        'Docklands',
        'St Kilda',
        'National Gallery of Victoria',
        'Melbourne Museum',
        'Melbourne Cricket Ground'
    ],
    datasets: [{
        // label: 'Number of visitors in 2017:', // Visitor Number (2017) // Visitor Percentage (2017)
        data: [
            {x: 72, y: 110, r: 5300000/CIRCLE_SCALE+CIRCLE_NORM, pct: 19, poi: 'CBD Shopping'},
            {x: 114, y: 200, r: 2800000/CIRCLE_SCALE+CIRCLE_NORM, pct: 10, poi: 'Federation Square'},
            {x: 72, y: 20, r: 2600000/CIRCLE_SCALE+CIRCLE_NORM, pct: 9, poi: 'Southbank Promenade'},
            {x: 160, y: 28, r: 2400000/CIRCLE_SCALE+CIRCLE_NORM, pct: 9, poi: 'Queen Victoria Market'},
            {x: 150, y: 130, r: 2000000/CIRCLE_SCALE+CIRCLE_NORM, pct: 7, poi: 'Crown Entertainment Complex'},
            {x: 120, y: 58, r: 1700000/CIRCLE_SCALE+CIRCLE_NORM, pct: 6, poi: 'Docklands'},
            {x: 20, y: 60, r: 1700000/CIRCLE_SCALE+CIRCLE_NORM, pct: 6, poi: 'St Kilda'},
            {x: 190, y: 72, r: 1100000/CIRCLE_SCALE+CIRCLE_NORM, pct: 4, poi: 'National Gallery of Victoria'},
            {x: 215, y: 140, r: 865000/CIRCLE_SCALE+CIRCLE_NORM, pct: 3, poi: 'Melbourne Museum'},
            {x: 180, y: 180, r: 807800/CIRCLE_SCALE+CIRCLE_NORM, pct: 3, poi: 'Melbourne Cricket Ground'},
        ],
        backgroundColor: [
            'rgba(141, 211, 199, 1)',
            'rgba(255, 255, 179, 1)',
            'rgba(190, 186, 218, 1)',
            'rgba(251, 128, 114, 1)',
            'rgba(128, 177, 211, 1)',
            'rgba(253, 180, 98, 1)',
            'rgba(179, 222, 105, 1)',
            'rgba(252, 205, 229, 1)',
            'rgba(217, 217, 217, 1)',
            'rgba(188, 128, 289, 1)',
        ],
        borderColor: [
            'rgba(141, 211, 199, 1)',
            'rgba(255, 255, 179, 1)',
            'rgba(190, 186, 218, 1)',
            'rgba(251, 128, 114, 1)',
            'rgba(128, 177, 211, 1)',
            'rgba(253, 180, 98, 1)',
            'rgba(179, 222, 105, 1)',
            'rgba(252, 205, 229, 1)',
            'rgba(217, 217, 217, 1)',
            'rgba(188, 128, 289, 1)',
        ],
        borderWidth: 1
    }]
}

// Config
const config_wiki_top = {
    type: 'bubble',
    data: data,
    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.raw.poi}, Visitor Percentage (2017): ${context.raw.pct}%`;
                    }
                }
            },
            legend: {
                display: false,
            },
            datalabels: {
                formatter: function(value, context) {
                    // return context.chart.data.labels[context.dataIndex]//.substr(0,20); //`${context.chart.data.labels[context.dataIndex]}`;
                    var dl = context.chart.data.labels[context.dataIndex].split(" ").join("\n");
                    return dl;
                }
            }
        },
        scales: {
            x: {
                // beginAtZero: true,
                // min: 0,
                // max: 12,
                display: false,
            },
            y: {
                // beginAtZero: true,
                // min: 0,
                // max: 14,
                display: false,
            }
        },
    },
    plugins: [ChartDataLabels]
}

// Action
const myChart_wikiTop = new Chart(
    document.getElementById('wikiTop'),
    config_wiki_top
)

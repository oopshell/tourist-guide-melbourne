const dates = ['2022-10-28', '2022-10-29', '2022-10-30', '2022-10-31', '2022-11-01', 
			   '2022-11-02', '2022-11-03', '2022-11-04', '2022-11-05', '2022-11-06', 
			   '2022-11-07', '2022-11-08', '2022-11-09', '2022-11-10', '2022-11-11',
			   '2022-11-12', '2022-11-13', '2022-11-14', '2022-11-15', '2022-11-16', 
			   '2022-11-17', '2022-11-18', '2022-11-19', '2022-11-20', '2022-11-21',
			   '2022-11-22', '2022-11-23', '2022-11-24', '2022-11-25', '2022-11-26', '2022-11-27']
const data_tempmax = [14.8, 15.4, 19.7, 16.7, 10.9, 12.6, 10.7, 13.1, 16.3, 21.8, 24.3, 25.1, 28.5, 24.8, 28.5, 24.0, 22.5, 22.7, 20.9, 20.4, 23.6, 25.0, 25.1, 25.9, 23.6, 21.2, 21.7, 23.2, 24.0, 23.1, 23.7];
const data_temp = [11.8, 11.0, 12.3, 12.8, 8.1, 8.8, 8.9, 9.9, 11.6, 14.4, 18.0, 19.7, 21.6, 20.7, 21.3, 17.9, 16.9, 17.0, 15.9, 15.4, 17.5, 18.3, 19.0, 19.2, 17.9, 16.1, 16.6, 17.6, 18.2, 17.2, 18.0];
const data_tempmin = [9.7, 7.5, 6.1, 6.1, 6.2, 4.9, 7.8, 7.4, 7.7, 6.8, 13.5, 16.5, 14.9, 17.6, 14.7, 12.3, 11.6, 11.7, 11.4, 10.3, 11.0, 12.2, 13.1, 13.0, 12.4, 11.4, 12.0, 12.3, 12.5, 12.1, 12.4];
const data_wicon = ['rain', 'rain', 'rain', 'rain', 'rain', 'rain', 'rain', 'rain', 'partly-cloudy-day', 'partly-cloudy-day', 'partly-cloudy-day', 'rain', 'clear-day', 'partly-cloudy-day', 'partly-cloudy-day', 'partly-cloudy-day', 'partly-cloudy-day', 'partly-cloudy-day', 'partly-cloudy-day', 'partly-cloudy-day', 'partly-cloudy-day', 'partly-cloudy-day', 'partly-cloudy-day', 'clear-day', 'partly-cloudy-day', 'partly-cloudy-day', 'partly-cloudy-day', 'partly-cloudy-day', 'partly-cloudy-day', 'partly-cloudy-day', 'partly-cloudy-day'];

const data_weather_next30d = {
	labels: dates,
	datasets: [{
		label: 'Temperature High',
		data: data_tempmax,
		fill: false,
		borderColor: 'rgba(204, 75, 7, 0.6)',
		backgroundColor: 'rgba(204, 75, 7, 0.6)',
		tension: 0.1,
    }, {
		label: 'Temperature',
        data: data_temp,
		fill: false,
		borderColor: 'rgba(131, 186, 109, 0.6)',
		backgroundColor: 'rgba(131, 186, 109, 0.6)',
		tension: 0.1,
	}, {
		label: 'Temperature Low',
		data: data_tempmin,
		fill: false,
		borderColor: 'rgba(68, 124, 191, 0.6)',
		backgroundColor: 'rgba(68, 124, 191, 0.6)',
		tension: 0.1,
	}]
};

// ⛅ ☁ ☀ ☼ 🌞 🌧 ☂ ☔
const weather_icon = {
	'clear-day': '🌞', 
	'partly-cloudy-day': '⛅', 
	'rain': '🌧'};

const config_weather = {
	type: 'line',
	data: data_weather_next30d,
	options: {
		responsive: true,
		scales: {
			x: {
				ticks: {
					callback: function(value){
						return this.getLabelForValue(value).substr(5, 5).replace('10-0', 'Oct ').replace('11-0', 'Nov ').replace('10-', 'Oct ').replace('11-', 'Nov ');
					}
				},
				grid: {
					// display: false,
					tickColor: 'white',
				},
			},
			y: {
				ticks: {
					callback: function(value){
						return `${this.getLabelForValue(value)} °C`;
					}
				},
				grid: {
					// display: false,
					tickColor: 'white',
				},
			}
		},
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: false,
				// text: ''
			},
			tooltip: {
                callbacks: {
                    afterTitle: function(context) {
						return `${weather_icon[data_wicon[context[0].dataIndex]]}${weather_icon[data_wicon[context[0].dataIndex]]}${weather_icon[data_wicon[context[0].dataIndex]]}`;
                    },
                    label: function(context) {
                        return `${context.dataset.label}: ${context.raw} °C`;
                    }
                }
            },
		}
	},
};

// render init block
const myChart_weather = new Chart(
	document.getElementById('weatherChart'),
	config_weather
);


// const weather_icon = {
// 	'clear-day': 'https://cdn-icons-png.flaticon.com/128/869/869869.png', 
// 	'partly-cloudy-day': 'https://cdn-icons-png.flaticon.com/128/1163/1163661.png', 
// 	'rain': 'https://cdn-icons-png.flaticon.com/128/1146/1146858.png'};

function dateFilter(){
	var select_dates = [...dates];
	var select_tempmax = [...data_tempmax];
	var select_temp = [...data_temp];
	var select_tempmin = [...data_tempmin];
	var fromDate = document.getElementById('fromDate').value;
	var toDate = document.getElementById('toDate').value;
	document.getElementById('fromDate').max = toDate;
	document.getElementById('toDate').min = fromDate;
	var fromDateIndex = select_dates.indexOf(fromDate);
	var toDateIndex = select_dates.indexOf(toDate);
	myChart_weather.config.data.labels = select_dates.slice(fromDateIndex, toDateIndex + 1);
	myChart_weather.config.data.datasets[0].data = select_tempmax.slice(fromDateIndex, toDateIndex + 1);
	myChart_weather.config.data.datasets[1].data = select_temp.slice(fromDateIndex, toDateIndex + 1);
	myChart_weather.config.data.datasets[2].data = select_tempmin.slice(fromDateIndex, toDateIndex + 1);
	myChart_weather.update();
}


let key = "1b600a3622f1db2649f44fa221665750";
let newDate = new Date();
var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thersday',
    'Friday',
    'Saturday'
]
let day = (newDate.getDay());
let date = (newDate.getDate());
let month = (newDate.getMonth() + 1);
let year = (newDate.getFullYear());
let user_url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e423fcdb5a651519db763d7ccf51fe96";
console.log(user_url);
$("#img").click(function(event){
    event.preventDefault();
    var inputValue = document.getElementById("inp").value;
    if(inputValue){
        let weather_hourly = `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&units=metric&appid=${key}&cnt=8`;
        let user_url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${key}`;
        myAjax(user_url);
        hourly(weather_hourly)
        // console.log(user_url);    
    }
    else {
        alert("Error");
    }
    
function myAjax(user_url) {
    $.ajax({
        url: user_url,
        dataType: "json",
    }).done(function (data) {
        // let weather_now = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${key}`;
        // let weather_hourly = `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&units=metric&appid=${key}`
        $("#weather_img").html(`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="user photo"></img>`);
        $("#name").html(data.name);
        $("#weather").html(data.weather[0].main);
        $("#cur_temp").html(data.main.temp);
        $("#min").html(data.main.temp_min);
        $("#max").html(data.main.temp_max);
        $("#wind").html(data.wind.speed);
        $("#date").html(`${date}.${month}.${year}`);
        $("#day").html(`${days[day]}`);
        
        // $("#weather_img").html(data.imgUrl);
        console.log(data);
        })
    }
})


function hourly(weather_hourly) {   
    $.ajax({
        url: weather_hourly,
        dataType: "json",
    }).done(function(data){
        console.log(data);
        let arr = ["Time","Icon","Forecast","Temp(c)","Wind(km/h)"];
        // let tbl = `<div>${data.list[0].dt_txt.slice(10,16)}</div>`;
        let tbl = "<table>";
        for(let i = 0;i < 4;i++){
            tbl += "<tr >";
            tbl += "<td>"
            tbl += arr[i];
            tbl += "</td>"
            for(let j = 0;j < data.list.length;j++){
                tbl += "<td>"; 
              switch (i){
                case 0:
                    tbl += data.list[j].dt_txt.slice(10,16);
                    break;
                case 1:
                    tbl += `<img src="http://openweathermap.org/img/wn/${data.list[j].weather[0].icon}@2x.png" alt="user photo"></img>`;
                    break;
                case 2:
                    tbl += data.list[j].weather[0].main;
                    break;
                case 3:
                    tbl += data.list[j].main.temp;
                    break;
                case 4:
                    tbl += data.list[j].wind.speed;
                    break;
               }
            };

            tbl += "</tr>";
        };
        tbl += "</table>";
        $("#table").html(tbl);
    })
};


// function myAjax(user_url) {
//     $.ajax({
//         url: user_url,
//         dataType: "json",
//      }).done(function (data) {
//         // let weather_now = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${key}`;
//         // let weather_hourly = `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&units=metric&appid=${key}`
//         $("#weather_img").html(`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="user photo"></img>`);
//         $("#name").html(data.name);
//         $("#weather").html(data.weather[0].main);
//         $("#cur_temp").html(data.main.temp);
//         $("#min").html(data.main.temp_min);
//         $("#max").html(data.main.temp_max);
//         $("#wind").html(data.wind.speed);
//         $("#date").html(`${date}.${month}.${year}`);
//         $("#day").html(`${days[day]}`);
//         // $("#weather_img").html(data.imgUrl);
//         console.log(data);
//      })
// }
// let weather_hourly = `https://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&units=metric&appid=${key}`;
// function hourly(weather_hourly) {
    
//     $.ajax({
//         url: weather_hourly,
//         dataType: "json",
//      }).done(function(data){
//        console.log(data);
//      })
// }


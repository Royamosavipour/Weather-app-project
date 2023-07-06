

const searchbox = document.querySelector(".search-box");

let apiData = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "ce8843eb28142f20b0778ae4428c4836",
};

function feachData() {
  let cityName = searchbox.value;

  fetch(`${apiData.url}${cityName}&appid=${apiData.key}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showData(data);
    });
}

function showData(data) {
  let maincontainer = document.querySelector(".main-container");
  maincontainer.innerHTML = "";
  maincontainer.innerHTML += `<section class="location">
    <div class="city">${data.name}, ${data.sys.country}</div>
    <div class="date">${showDay()}</div>
  </section>
  <div class="current">
    <div class="temp">${Math.floor(
      data.main.temp - 273.15
    )}<span>°c</span></div>
    <div class="weather">${data.weather[0].main}</div>
    <div class="hi-low">${Math.floor(
      data.main.temp_max - 273.15
    )}c /${Math.floor(data.main.temp_min - 273.25)}°c</div>
  </div>`;
}

searchbox.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    feachData();
    searchbox.value = "";
    searchbox.innerHTML = focus();
  }
});


function showDay(){
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let now=new Date()
      let day=days[now.getDay()]
      let month=months[now.getMonth()]
      let years=now.getFullYear()
      let date=now.getDay()

      return `${day} ${date} ${month} ${years}`

}
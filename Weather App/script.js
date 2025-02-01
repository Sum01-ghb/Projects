document.addEventListener("DOMContentLoaded", () => {
  const weatherContainer = document.querySelector(".weather-container");
  const temperatureField = document.querySelector(".temp");
  const locationField = document.querySelector(".time-location p");
  const dateField = document.querySelector(".time-location span");
  const conditionField = document.querySelector(".condition p");
  const searchField = document.querySelector(".search-area");
  const form = document.querySelector("form");

  form.addEventListener("submit", searchForLocation);
  let target = "Kolkata";

  const fetchData = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=a5afb5effb7c4d6f82b74304250102&q=${targetLocation}&aqi=no`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;

    updateDetails(locationName, time, temp, condition);
  };

  function updateDetails(locationName, time, temp, condition) {
    let splitDate = time.split(" ")[0];
    let splitTime = time.split(" ")[1];
    let currentDay = dayName(new Date(splitDate).getDay());

    locationField.innerText = locationName;
    dateField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
    temperatureField.innerText = temp;
    conditionField.innerText = condition;
  }

  function searchForLocation(e) {
    e.preventDefault();
    target = searchField.value;
    fetchData(target);
  }
  fetchData(target);

  function dayName(number) {
    switch (number) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  }
});

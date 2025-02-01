document.addEventListener("DOMContentLoaded", () => {
  const weatherContainer = document.getElementById("weather-container");
  const temperatureField = document.querySelector(".temp");
  const locationField = document.querySelector(".time-location p");
  const dateField = document.querySelector(".time-location span");
  const conditionField = document.querySelector(".condition p");
  const searchField = document.querySelector(".search-area");
  const form = document.querySelector("form");

  form.addEventListener("submit", searchForLocation);

  const fetchData = async (targetLocation) => {
    const apiKey = "a5afb5effb7c4d6f82b74304250102";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${targetLocation}&aqi=no`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Location not found");
      const data = await res.json();

      const { name, localtime } = data.location;
      const { temp_c, condition } = data.current;
      const iconUrl = `https:${condition.icon}`;

      updateDetails(name, localtime, temp_c, condition.text, iconUrl);
      weatherContainer.classList.remove("hidden");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  function updateDetails(city, localTime, temp, condition, iconUrl) {
    const [date, time] = localTime.split(" ");
    const day = getDayName(new Date(date).getDay());

    locationField.innerText = city;
    dateField.innerHTML = `${day}, ${date} - ${time}`;
    temperatureField.innerText = `${temp}°C`;
    conditionField.innerText = condition;

    const weatherIcon = document.createElement("img");
    weatherIcon.src = iconUrl;
    weatherIcon.alt = condition;

    conditionField.innerHTML = "";
    conditionField.appendChild(weatherIcon);
    conditionField.appendChild(document.createTextNode(condition));
  }

  function searchForLocation(event) {
    event.preventDefault();
    const targetLocation = searchField.value.trim();
    if (targetLocation) fetchData(targetLocation);
  }

  function getDayName(index) {
    return [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][index];
  }
});

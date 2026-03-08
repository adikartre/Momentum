const API_KEY = "d5c109a965afc245d1fe602487dac034";

const weatherIcon = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`API 오류: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (!data.weather || !data.main) {
                throw new Error("날씨 데이터 형식 오류");
            }
            const icon = data.weather[0].icon;

            const img = document.createElement("img");
            img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

            const temp = document.createElement("span");
            temp.innerText = `${Math.round(data.main.temp)}°C`;

            weatherIcon.innerHTML = "";
            weatherIcon.appendChild(img);
            weatherIcon.appendChild(temp);

            city.innerText = data.name;
        })
        .catch(err => {
            console.error("날씨를 불러오지 못했습니다:", err);
            weatherIcon.innerText = "날씨 오류";
            city.innerText = "";
        });
}

function onGeoError() {
    console.error("위치 정보를 가져올 수 없습니다.");
    weatherIcon.innerText = "위치 오류";
    city.innerText = "";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

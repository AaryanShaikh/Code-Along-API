var apikey = "abe4f860db384821e5fa73a0f37d9e17"

function getData() {
    var input = document.getElementById("city").value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("p1").textContent = `Temp : ${data.main.temp}`;
            document.getElementById("p2").textContent = `Name : ${data.name}`;
            var icon = `https://api.openweathermap.org/img/w${data.weather[0].icon}.png`;
            document.getElementById("icon").src = icon;
        })
        .catch((err) => {
            alert("Please enter a valid city");
        })
}
const API_KEY = `412f55308040478bd84bb6e62d5a181a`;

const loadTemperature = city => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data));
}

const displayTemp = data => {
  // const temp = document.getElementById('temp');
  // temp.innerText = data.main.temp;
  setInnerTextById('temp', data.main.temp);
  setInnerTextById('condition', data.weather[0].main);
  // console.log(data.weather[0].main);
}

const setInnerTextById = (id, Text) => {
  const temp = document.getElementById(id);
  temp.innerText = Text;
}

document.getElementById('btn-search').addEventListener('click', function () {
  const searchField = document.getElementById('search-field');
  const city = searchField.value;
  document.getElementById('city').innerText = city;
  loadTemperature(city);
})

loadTemperature('jessore');
setInterval(() => {
  let indonesia = document.querySelector("#bali");
  if (indonesia) {
    let indonesiaDate = indonesia.querySelector(".date");
    let indonesiaTimeElement = indonesia.querySelector(".time");
    let indonesiaTime = moment().tz("Asia/Jakarta");

    indonesiaDate.innerHTML = indonesiaTime.format("MMMM Do YYYY");

    indonesiaTimeElement.innerHTML = `${indonesiaTime.format(`h:mm:ss A`)}`;
  }

  let asia = document.querySelector("#hawaii");
  if (asia) {
    let asiaDate = asia.querySelector(".date");
    let asiaTimeElement = asia.querySelector(".time");
    let asiaTime = moment().tz("US/Hawaii");

    asiaDate.innerHTML = asiaTime.format("MMMM Do YYYY");

    asiaTimeElement.innerHTML = `${asiaTime.format(`h:mm:ss A`)}`;
  }

  let arab = document.querySelector("#dubai");
  if (arab) {
    let arabDate = arab.querySelector(".date");
    let arabTimeElement = arab.querySelector(".time");
    let arabTime = moment().tz("Asia/Dubai");

    arabDate.innerHTML = arabTime.format("MMMM Do YYYY");

    arabTimeElement.innerHTML = `${arabTime.format(`h:mm:ss A`)}`;
  }

  let united = document.querySelector("#lasVegas");
  if (united) {
    let unitedDate = united.querySelector(".date");
    let unitedTimeElement = united.querySelector(".time");
    let unitedTime = moment().tz("America/Boise");

    unitedDate.innerHTML = unitedTime.format("MMMM Do YYYY");

    unitedTimeElement.innerHTML = `${unitedTime.format(`h:mm:ss A`)}`;
  }
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "local") {
    cityTimeZone = moment.tz.guess();
  }
  let currentTime = moment().tz(cityTimeZone);
  let citySelect = document.querySelector("#cities");
  let cityName = cityTimeZone.split("/")[1];

  citySelect.innerHTML = `
  <div >
          <h2>${cityName}</h2>
          <div class="date">${currentTime.format("MMMM Do YYYY")}</div>
          <div class="time">${currentTime.format(`h:mm:ss A`)}</div>
        </div>
        <a href="index.html">All cities</a>
        `;
}

let citySelect = document.querySelector("#city");

citySelect.addEventListener("change", updateCity);

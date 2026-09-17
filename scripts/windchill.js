const windChill = document.querySelector("#windChill")
let tempature = 83;
let windSpeed = 5;

function calcWindChill(temp, wind) {
    let windChillTemp = ""
    windChillTemp = (35.74 + (0.6125 * temp) - (35.75 * (wind * 0.16) + (0.4275 * temp * (wind * 0.16))))
    windChillTemp = windChillTemp.toFixed(1);
    return windChillTemp;
};

if (tempature <= 50 && windSpeed >= 3) {
    let chill = calcWindChill(tempature, windSpeed);
    windChill.innerHTML = `${chill} °F`;
}
else {
    windChill.innerHTML = `N/A`
}

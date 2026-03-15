// Footer Dates
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

// Static weather variables
const temp = 10; // Celsius
const windSpeed = 5; // km/h

// One-line function to calculate wind chill in Metric
const calculateWindChill = (t, s) => (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);

// Logic to determine if wind chill should be displayed
const windChillElement = document.getElementById("windchill");

if (temp <= 10 && windSpeed > 4.8) {
    windChillElement.innerHTML = `${calculateWindChill(temp, windSpeed)} &deg;C`;
} else {
    windChillElement.innerHTML = "N/A";
}

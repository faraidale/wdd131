// Footer Dates
document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

// Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Temple Array
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Added Temples
    {
        templeName: "Harare Zimbabwe",
        location: "Harare, Zimbabwe",
        dedicated: "2025, December, 14", // Anticipated dedication
        area: 17250,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/harare-zimbabwe-temple/harare-zimbabwe-temple-42539-main.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    }
  ];

const gallery = document.querySelector(".gallery");
const pageTitle = document.querySelector("#page-title");

// Function to generate the HTML for the cards
function displayTemples(filteredTemples) {
    gallery.innerHTML = ""; // Clear existing cards
    filteredTemples.forEach(temple => {
        let card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><span class="label">Location:</span> ${temple.location}</p>
            <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
            <p><span class="label">Size:</span> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
        `;
        gallery.appendChild(card);
    });
}

// Initial display of all temples
displayTemples(temples);

// Filtering Logic
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

// Helper function to extract the year from the dedication string
const getYear = (dateString) => parseInt(dateString.substring(0, 4));

homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "Home";
    displayTemples(temples);
});

oldLink.addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "Old Temples";
    displayTemples(temples.filter(temple => getYear(temple.dedicated) < 1900));
});

newLink.addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "New Temples";
    displayTemples(temples.filter(temple => getYear(temple.dedicated) > 2000));
});

largeLink.addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "Large Temples";
    displayTemples(temples.filter(temple => temple.area > 90000));
});

smallLink.addEventListener("click", (e) => {
    e.preventDefault();
    pageTitle.textContent = "Small Temples";
    displayTemples(temples.filter(temple => temple.area < 10000));
});

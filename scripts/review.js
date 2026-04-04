let numReviews = Number(window.localStorage.getItem("reviews-counter")) || 0;
numReviews++;
window.localStorage.setItem("reviews-counter", numReviews);

document.getElementById("reviewCounter").textContent = numReviews;

// Footer Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
